import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Typography from '@material-ui/core/Typography';

const NotFoundPage = () => (
	<Layout>
		<SEO title="404: Not found" />

		<Typography gutterBottom variant="h3" component="h1" align="center">NOT FOUND</Typography>

		<Typography variant="body1" paragraph={true} align="center">
			You just hit a route that doesn&#39;t exist... the sadness.
		</Typography>
	</Layout>
);

export default NotFoundPage;
