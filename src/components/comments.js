import React from 'react';
import Comment from './comment';
import CommentForm from './commentForm';
import { StaticQuery, graphql } from 'gatsby';
import axios from 'axios';
import '../styles/comments.scss';

class Comments extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			comments: [],
			loaded: false
		}
	}

	update = () => {
		this.setState({
			loaded: false
		});
	}

	render() {
		return (
			<StaticQuery
				query={graphql`
					query PostCommentQuery {
						site {
							siteMetadata {
								ghUser
								ghRepo
							}
						}
					}
				`}
				render={data => {
					this.url = `https://github.com/${data.site.siteMetadata.ghUser}/${data.site.siteMetadata.ghRepo}/issues/${this.props.issueId}`;
					this.apiUrl = `https://api.github.com/repos/${data.site.siteMetadata.ghUser}/${data.site.siteMetadata.ghRepo}/issues/${this.props.issueId}/comments`;
					axios.get(this.apiUrl).then(data => {
						if (!this.state.loaded) {
							this.setState({
								comments: data.data.reverse(),
								loaded: true
							});
						}
					}).catch(e => {
						console.error(e);
					});
					return (
						<div className="comments">
							<CommentForm
								ghRepo={data.site.siteMetadata.ghRepo}
								ghUser={data.site.siteMetadata.ghUser}	
								issueId={this.props.issueId}
								update={this.update}
							/>

							{
								this.state.comments.map(comment => (
									<Comment
										key={comment.id}
										avatar={comment.user.avatar_url}
										userLogin={comment.user.html_url}
										author={comment.user.login}
										time={comment.created_at}
										body={comment.body}
										ghRepo={data.site.siteMetadata.ghRepo}
										ghUser={data.site.siteMetadata.ghUser}
									/>
								))
							}
						</div>
					);
				}}
			/>
		)
	}
};

export default Comments;
