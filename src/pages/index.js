import React from 'react';
import {Link, graphql} from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Typography from '@material-ui/core/Typography';

const IndexPage = (props) => {
	const posts = props.data.allMarkdownRemark.edges;

	return (
		<Layout>
			<SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
			
			<Typography gutterBottom variant="h3" component="h1">Home page</Typography>

			<Typography variant="body1" paragraph={true}>
				Welcome to your new Gatsby dev blog. Now go build something great
			</Typography>

			<ul>
				{posts.map(post => (
				<li key={post.node.frontmatter.path}>
					<Typography variant="body1">
						<Link to={post.node.frontmatter.path}>{post.node.frontmatter.title}</Link>
					</Typography>
				</li>
				))}
			</ul>
		</Layout>
	)
};

export default IndexPage;

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
}`;
