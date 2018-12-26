import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const ContactPage = () => (
	<Layout>
		<SEO title="Contact" keywords={[`gatsby`, `application`, `react`]} />
		<h1>Contact page</h1>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex saepe odio quidem culpa 
		fugit nostrum sit dolorum velit fuga placeat quo, perferendis explicabo expedita dolores 
		maiores eveniet. Fugit.</p>
	</Layout>
);

export default ContactPage
