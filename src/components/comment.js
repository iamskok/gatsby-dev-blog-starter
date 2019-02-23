import React from 'react';
import unified from 'unified';
import markdown from 'remark-parse';
import emoji from 'remark-emoji';
import breaks from 'remark-breaks';
import remark2rehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeFormat from 'rehype-format';
import html from 'rehype-stringify';
import github from 'remark-github';
import rehypePrism from '@mapbox/rehype-prism';
import sanitize from 'rehype-sanitize';
import sanitizeConfig from 'hast-util-sanitize/lib/github';
import merge from 'deepmerge';
import { format, distanceInWordsToNow } from 'date-fns';
import '../styles/comment.scss';

const schema = merge(sanitizeConfig, {
	attributes: {
		'span': ['className'],
		'pre': ['className'],
		'iframe': ['src']
	},
	tagNames: ['span', 'iframe']
});

const Comment = (props) => {
	const body = unified()
		.use([
			markdown,
			emoji,
			breaks,
			[remark2rehype, { allowDangerousHTML: true }],
			rehypeRaw,
			[github, { repository: `${props.ghUser}/${props.ghRepo}` }],
			[
				rehypePrism,
				{
					ignoreMissing: true
				}
			],
			rehypeFormat,
			html,
			[sanitize, schema]
		])
		.processSync(props.body)
		.toString();

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

			<div className="comment__body" dangerouslySetInnerHTML={{ __html: body }} />
		</div>
	);
}

export default Comment;
