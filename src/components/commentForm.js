import React from 'react';
import firebase from 'firebase/app';
import axios from 'axios';
import config from '../../.firebaseConfig';
// import classNames from 'classnames';
// import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import markdownWrapper from './markdownWrapper';
// import green from '@material-ui/core/colors/green';
import 'firebase/auth';
import '../styles/comment-form.scss';

const Preview = markdownWrapper(props => {
	return (
		<div
			className={"comment-form" + (props.focus ? ' is-active' : '')}
			dangerouslySetInnerHTML={{ __html: props.body }}
		/>
	);
});

class CommentForm extends React.Component {
	constructor(props) {
		super(props);

		if (!firebase.apps.length) {
			firebase.initializeApp(config);
		}

		let username = '';
		let avatar = '';

		if (typeof localStorage !== 'undefined') {
			username = localStorage.getItem('github-username');
			avatar = localStorage.getItem('github-avatar');
		}

		this.state = {
			textarea: '',
			token: '',
			loaded: false,
			preview: false,
			focus: false,
			username,
			avatar
		}
	}

	componentDidMount() {
		const token = localStorage.getItem('firebase-token');
		if (!token) {
			const signIn = localStorage.getItem('firebase-sign-in');

			if (signIn) {
				this._getToken().then(() => console.log('TOKEN from componentDidMount', this.state.token));
				localStorage.removeItem('firebase-sign-in');
				localStorage.removeItem('github-avatar');
				localStorage.removeItem('github-username');
			} else {
				this.setState({
					loaded: true
				});
			}
		} else {
			this.setState({
				token,
				loaded: true
			});
		}
	}

	githubAuth = () => {
		localStorage.setItem('firebase-sign-in', true);
		const provider = new firebase.auth.GithubAuthProvider();
		provider.addScope('repo');
		firebase.auth().signInWithRedirect(provider);
	}

	togglePreview = () => {
		this.setState({preview: !this.state.preview});
	}

	_getToken = () => {
		return new Promise((resolve, reject) => {
			firebase.auth().getRedirectResult().then(result => {
				console.log('RESULTTTT', result);
				if (result.credential) {
					const token = result.credential.accessToken;
					const username = result.additionalUserInfo.username;
					const avatar = result.additionalUserInfo.profile.avatar_url;
					this.setState({
						token,
						username,
						avatar,
						loaded: true
					});
					localStorage.setItem('firebase-token', token);
					localStorage.setItem('github-username', username);
					localStorage.setItem('github-avatar', avatar);
					return resolve();
				}
				this.setState({
					loaded: true
				});
				reject('Credentials are invalid.');
			}).catch(error => {
				reject('Firebase auth faild.');
			});
		});
	}

	_getCurrentUser = () => {
		const user = firebase.auth().currentUser;
		console.log('USERRRRRR', user);
		if (user) {
			return user.photoURL;
		}
	}

	handleChange = (e) => {
		this.setState({textarea: e.target.value})
	}

	handleFocus = (e) => {
		// setTimeout(() => {
		// 	this.setState({focus: true});
		// 	console.log('setTimeput handleFocus', e.target);	
		// }, 3000)
		// console.log('handleFocus', e.target);
		this.setState({focus: true});
	}

	handleBlur = (e) => {
		// console.log('handleBlur', e.target);
		this.setState({focus: false});
	}

	sendComment = (e) => {
		const text = this.state.textarea;
		if (!text) {
			return;
		}
		const props = this.props;
		e.preventDefault();
		this.setState({
			textarea: '',
			preview: false
		});
		document.querySelector('.comment-form').value = '';
		axios.post(
			`https://api.github.com/repos/${props.ghUser}/${props.ghRepo}/issues/${props.issueId}/comments`, 
			{
				body: text
			},
			{
				headers: {
					Authorization: `token ${this.state.token}`
				}
			}
		).then(response => {
			this.props.addComment(response.data);
			this.handleBlur();
		}).catch(error => {
			console.log('error', error);
			if (error.response.status === 401) {
				localStorage.removeItem('firebase-token');
				localStorage.removeItem('firebase-sign-in');
				localStorage.removeItem('github-avatar');
				localStorage.removeItem('github-username');
				this.setState({ token: '' });
			}
			console.log('error', error);
		});
	}

	render() {
		let currentUser = null;
		if (this.state.token) {
			currentUser = this._getCurrentUser();
		}

		console.log('=============', this.state.focus);

		return (
			<>
				{
					this.state.loaded ?
					<div
						tabIndex="-1"
						onFocus={this.handleFocus}
						onBlur={this.handleBlur}
						style={{outline: 'none'}}
					>
						<div className="comment-form__header">
							<div className="comment-form__header-container">
								{
									this.state.token &&
									<img src={this.state.avatar} className="comment-form__avatar" />
								}
								{
									this.state.token &&
									<a
										href={`https://github.com/${this.state.username}`}
										className="comment-form__author"
									>
										{this.state.username}
									</a>
								}
							</div>
							<div className="comment-form__header-container">
								<button
									className="comment-form__preview"
									onClick={this.togglePreview}
								>
									Preview
								</button>
							</div>
						</div>
						{
							this.state.preview ?
							<Preview
								focus={this.state.focus}
								body={this.state.textarea}
								ghUser={this.props.ghUser}
								ghRepo={this.props.ghRepo}
							/> :
							<textarea
								className={"comment-form" + (this.state.focus ? ' is-active' : '')}
								value={this.state.textarea}
								onChange={this.handleChange}
								disabled={!this.state.token}
							>
							</textarea>
						}
						{
							!this.state.token ? 
							<button 
								className="comment-form__sign-in"
								onClick={this.githubAuth}
							>
								Sign in

							</button>
							:
							<button
								className="comment-form__add-comment"
								onClick={this.sendComment}
								disabled={!this.state.textarea}
							>
								Comment
							</button>
						}
					</div>
					:
					<div className="comment-form__progress-container">
						<CircularProgress size={24} className="comment-form__progress" />
					</div>
				}
			</>
		);
	}
}

export default CommentForm;
