import React from 'react';
import markdownWrapper from './markdownWrapper';
import { format, distanceInWordsToNow } from 'date-fns';
import '../styles/comment.scss';

const Comment = (props) => {
	return (
		<div className="comment">
			<div className="comment__header">
				<img src={props.avatar} alt="" className="comment__avatar" />
				&nbsp;
				<div className="comment__author">
					<a href={props.userLogin} className="comment__author-link">{props.author}</a> commented
				</div>
				&nbsp;
				<time
					className="comment__time" 
					dateTime={format(props.time, 'YYYY-MM-DD HH:mm')}
				>
					{ distanceInWordsToNow(props.time, new Date(), {includeSeconds: true}) } ago
				</time>
			</div>

			<div className="comment__body" dangerouslySetInnerHTML={{ __html: props.body }} />
		</div>
	);
}

export default markdownWrapper(Comment);
