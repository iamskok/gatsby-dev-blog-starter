import {Link} from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';
import Logo from './logo';
import LogoIcon from './logoIcon';
import Nav from './nav';

function Header(props) {
	const {classes} = props;
	return (
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
					<div className="navContainer">
						<Button component={Link} to="/blog">Blog</Button>
						<Button component={Link} to="/about">About</Button>
						<Button component={Link} to="/contact">Contact</Button>
					</div>
				</Nav>
			</AppBar>
		</div>
	);
};

Header.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles({
	root: {
		marginBottom: 20
	}
})(Header);
