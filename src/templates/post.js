import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/layout';
// import Comments from '../components/comments';
import PageTitle from '../components/pageTitle';
import PageSubtitle from '../components/pageSubtitle';
import '../styles/post.scss';

export default function Template({data}) {
	const {markdownRemark} = data;
	const {frontmatter, html} = markdownRemark;
	return (
		<Layout>
			<PageTitle title={frontmatter.title} />
			<PageSubtitle text={frontmatter.date} />
			<div dangerouslySetInnerHTML={{ __html: html }} className="post" />
			{frontmatter.issue ? <Comments issueId={frontmatter.issue} /> : ''}
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
				issue
			}
		}
	}
`;

