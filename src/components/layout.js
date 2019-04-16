import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {StaticQuery, graphql} from 'gatsby';
import Header from './header';
import Footer from './footer';
import '../styles/layout.scss';

const Layout = ({children}) => {
	const [pos, setPos] = useState(0);
	const handleScroll = e => setPos(e.target.scrollTop);

	return (
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
				<div className="layout" onScroll={handleScroll}>
					<Header siteTitle={data.site.siteMetadata.title} pos={pos} />
					<div className="layout__container">{children}</div>
					<Footer siteTitle={data.site.siteMetadata.title} />
				</div>
			)}
		/>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
