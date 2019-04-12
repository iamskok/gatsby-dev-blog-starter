import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const pageTitle = (props) => <Typography className={props.classes.base} gutterBottom variant="h3" component="h1">{props.title}</Typography>;

export default withStyles({
	base: {
		marginTop: '30px'
	}
})(pageTitle);
