import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PageTitle from '../components/pageTitle';
import PageSubtitle from '../components/pageSubtitle';
import Form from '../components/form';

const ContactPage = () => (
	<Layout>
		<SEO title="Contact" keywords={[`gatsby`, `application`, `react`]} />
		<PageTitle title="Contact" />
		<PageSubtitle text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex saepe odio quidem culpa fugit nostrum sit dolorum velit fuga placeat quo, perferendis explicabo expedita dolores maiores eveniet." />
		<Form />
	</Layout>
);

export default ContactPage;
