import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';

export default withStyles({
	root: {
		display: 'flex',
		flexGrow: 1,
		flexDirection: 'row',
		justifyContent: 'space-between'
	}
})(Toolbar);
