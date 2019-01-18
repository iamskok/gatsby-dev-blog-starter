import React from 'react';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import theme from './theme';

const Footer = (props) => {
	const {classes} = props;

	return (
		<footer className={classes.root}>
			<Typography variant="body1" align="center" className={classes.text}>
				© 2019, Built with&nbsp;
				<a
					className={classes.link}
					href="https://www.github.com/iamskok/gatsby-dev-blog-starter"
				>
					{props.siteTitle}
				</a>
			</Typography>
		</footer>
	);
}

export default withStyles({
	root: {
		display: 'flex',
		height: 57,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: theme.palette.primary.main,

		[theme.breakpoints.up('sm')]: {
			height: 64
		}
	},
	text: {
		color: '#fff',
		fontWeight: 100
	},
	link: {
		textDecoration: 'none',
		color: '#fff',
		'&:hover': {
			color: theme.palette.secondary.light
		}
	}
})(Footer);
