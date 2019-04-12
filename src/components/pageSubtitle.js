import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const pageSubtitle = (props) => <Typography className={props.classes.base} variant="body1" paragraph={true}>{props.text}</Typography>;

export default withStyles({
	base: {
		marginBottom: '30px'
	}
})(pageSubtitle);
