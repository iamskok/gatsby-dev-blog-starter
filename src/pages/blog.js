import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const BlogPage = (props) => {
	const posts = props.data.allMarkdownRemark.edges;

	return (
		<Layout>
			<SEO title="Blog" keywords={[`gatsby`, `application`, `react`]} />
			<h1>Blog page</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex saepe odio quidem culpa 
			fugit nostrum sit dolorum velit fuga placeat quo, perferendis explicabo expedita dolores 
			maiores eveniet. Fugit.</p>

			{posts.map(post => (
				<li key={post.node.frontmatter.path}>
					<Link to={post.node.frontmatter.path}>{post.node.frontmatter.title}</Link>
				</li>
			))}
		</Layout>
	)
}

export default BlogPage

export const pageQuery = graphql`
	query BlogQuery {
		site {
			siteMetadata {
				title
				author
			}
		}
	allMarkdownRemark(
		limit: 2000
		sort: { fields: [frontmatter___date], order: DESC }
	) {
		edges {
			node {
				frontmatter {
					title
					date
					path
				}
			}
		}
	}
}`
