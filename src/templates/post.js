import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/layout';
import Typography from '@material-ui/core/Typography';
import '../styles/post.scss';

export default function Template({data}) {
	const {markdownRemark} = data;
	const {frontmatter, html} = markdownRemark;
	return (
		<Layout>
			<Typography gutterBottom variant="h3" component="h1">
				{frontmatter.title}
			</Typography>
			<Typography gutterBottom variant="h6">{frontmatter.date}</Typography>

			<div dangerouslySetInnerHTML={{ __html: html }} className="post" />
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
