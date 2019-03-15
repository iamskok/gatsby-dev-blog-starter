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
import rehypePrism from 'rehype-prism-template';
import sanitize from 'rehype-sanitize';
import sanitizeConfig from 'hast-util-sanitize/lib/github';
import merge from 'deepmerge';

const schema = merge(sanitizeConfig, {
	attributes: {
		'span': ['className'],
		'pre': ['className'],
		'iframe': ['src']
	},
	tagNames: ['span', 'iframe']
});

export default function(Component) {
	return class extends React.Component {
		render() {
			const props = this.props;

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

			console.log('props.body', props.body);
			console.log('body after', body);

			return (
				<Component {...this.props} body={body} />
			);
		}	
	}
}













