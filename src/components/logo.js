import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

export default withStyles({
	root: {
		'&:hover': {
			backgroundColor: 'rgba(0,0,0,0)',
		}
	}
})(Button);
