import React from 'react'
import PropTypes from 'prop-types'
import {StaticQuery, graphql} from 'gatsby'
import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
	<StaticQuery
		query={graphql`
			query SiteTitleQuery {
				site {
					siteMetadata {
						title
					}
				}
			}
		`}
		render={data => (
			<>
				<Header siteTitle={data.site.siteMetadata.title} />
				<div
					style={{
						margin: `0 auto`,
						maxWidth: 960,
						padding: `0 15px`,
						paddingTop: 0,
					}}
				>
					{children}
					<footer>
						© 2018, Built with&nbsp;
						<a href="https://www.github.com/iamskok/gatsby-dev-blog-starter">
							{data.site.siteMetadata.title}
						</a>
					</footer>
				</div>
			</>
		)}
	/>
);

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
