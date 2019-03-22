import React from 'react';
import {Link, graphql} from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Typography from '@material-ui/core/Typography';
import Particles from '../components/particles';
// import Particles from 'react-particles-js';
import Intro from '../components/intro';
import {StyleRoot} from 'radium';

const IndexPage = (props) => {
	const posts = props.data.allMarkdownRemark.edges;

	return (
		<StyleRoot>
			<Layout>
				<SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
				<Intro
					typedTexts={['React', 'Node.js', 'Gatsby', 'WordPress']}
					fixedText="Frontend engineer experienced with # techology"
					separator="#"
				/>
				<Particles />
				{/*Particles
					params={{
						particles: {
							line_linked: {
								shadow: {
									enable: true,
									color: '#ff0000',
									blur: 0.001
								}
							}
						},
						retina_detect: true
					}}

					width={'100%'}
					height={'calc(100vh - 130px)'}
				/>*/}
			</Layout>
		</StyleRoot>
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
