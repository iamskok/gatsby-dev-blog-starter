import React from 'react';
import {Link, graphql} from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Typography from '@material-ui/core/Typography';
import Particles from '../components/particles';
import Intro from '../components/intro';

const IndexPage = (props) => {
	const posts = props.data.allMarkdownRemark.edges;

	return (
		<Layout>
			<SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
			<Intro
				typedTexts={['React', 'Node.js', 'Gatsby', 'WordPress']}
				fixedText="Frontend engineer experienced with # techology"
				separator="#"
			/>
			<Particles />
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
