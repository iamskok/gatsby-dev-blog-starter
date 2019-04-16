import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Typography from '@material-ui/core/Typography';
import PageTitle from '../components/pageTitle';
import PageSubtitle from '../components/pageSubtitle';

const AboutPage = () => (
	<Layout>
		<SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
		<PageTitle title="About" />
		<PageSubtitle text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex saepe odio." />
	</Layout>
);

export default AboutPage;
