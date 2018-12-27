import React from 'react';
import { Link } from 'gatsby'

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = (props) => {
	const posts = props.data.allMarkdownRemark.edges;

	return (
		<Layout>
			<SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
			<h1>Home page</h1>
			<p>Welcome to your new Gatsby dev blog.</p>
			<p>Now go build something great.</p>
			
			<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
				<Image />
			</div>

			<ul>
				{posts.map(post => (
				<li key={post.node.frontmatter.path}>
					<Link to={post.node.frontmatter.path}>{post.node.frontmatter.title}</Link>
				</li>
				))}
			</ul>
		</Layout>
	)
}

export default IndexPage

export const pageQuery = graphql`
	query IndexQuery {
		site {
			siteMetadata {
				title
				author
			}
		}
	allMarkdownRemark(
		limit: 5
		sort: { fields: [frontmatter___date], order: DESC }
	) {
		edges {
			node {
				id
				frontmatter {
					title
					date
					path
				}
			}
		}
	}
}`
