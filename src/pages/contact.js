import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Typography from '@material-ui/core/Typography';

const ContactPage = () => (
	<Layout>
		<SEO title="Contact" keywords={[`gatsby`, `application`, `react`]} />

		<Typography gutterBottom variant="h3" component="h1">Contact page</Typography>

		<Typography variant="body1" paragraph={true}>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex saepe odio quidem culpa 
			fugit nostrum sit dolorum velit fuga placeat quo, perferendis explicabo expedita dolores 
			maiores eveniet.
		</Typography>
	</Layout>
);

export default ContactPage;
