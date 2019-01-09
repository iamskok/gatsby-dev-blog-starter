import {Link} from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';
import Logo from './logo';
import LogoIcon from './logoIcon';
import Nav from './nav';
import Headroom from 'react-headroom';
import './headroom.css';

function Header(props) {
	const {classes} = props;
	return (
		<Headroom className="headroom--unpinned">
			<div className={classes.root}>
				<AppBar position="static">
					<Nav>
						<Logo
							component={Link}
							disableRipple={true}
							className="button"
							to="/"
						>
							<LogoIcon />
						</Logo>
						<div>
							<Button component={Link} className={classes.button} to="/blog">
								Blog
							</Button>
							<Button component={Link} className={classes.button} to="/about">
								About
							</Button>
							<Button component={Link} className={classes.button} to="/contact">
								Contact
							</Button>
						</div>
					</Nav>
				</AppBar>
			</div>
		</Headroom>
	);
};

Header.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles({
	root: {
		marginBottom: 20
	},
	button: {
		color: '#fff',
		'&:hover': {
			backgroundColor: 'rgba(255, 255, 255, 0.05)'
		}
	}
})(Header);
