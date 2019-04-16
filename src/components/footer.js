import React from 'react';
import '../styles/footer.scss';

const Footer = (props) => (
	<footer className="footer">
		<div className="footer__text">
			© 2019&nbsp;
			<a
				href="https://www.github.com/iamskok/gatsby-dev-blog-starter"
				className="footer__link"
			>
				{props.siteTitle}
			</a>
		</div>
	</footer>
);

export default Footer;
