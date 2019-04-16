import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import {Link} from 'gatsby';

const NotFoundPage = () => (
	<Layout>
		<SEO title="404: Not found" />

		<h1>Page not found</h1>

		<p>
			You just hit a route that doesn&#39;t exist... the sadness. 
			Check out the <Link to="/blog/">blog</Link> instead.
		</p>
	</Layout>
);

export default NotFoundPage;
