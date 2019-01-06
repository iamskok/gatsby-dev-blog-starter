import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/layout';

export default function Template({data}) {
	const { markdownRemark } = data;
	const { frontmatter, html } = markdownRemark;
	return (
		<Layout>
			<div className="blog-post-container">
				<h1>{frontmatter.title}</h1>
				<h2>{frontmatter.date}</h2>
				<div dangerouslySetInnerHTML={{ __html: html }} />
			</div>
		</Layout>
	)
};

export const postQuery = graphql`
	query($path: String!) {
		markdownRemark(frontmatter: {path: {eq: $path}}) {
			html
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				path
				title
			}
		}
	}
`;
