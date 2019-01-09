import { createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import red from '@material-ui/core/colors/red';

export default createMuiTheme({
	breakpoints: {
		values: {
			xs: 0,
			sm: 480,
			md: 640,
			lg: 960,
			xl: 1280
		}
	},
	palette: {
		primary: {
			main: indigo[900]
		},
		secondary: {
			main: red[900]
		}
	},
	typography: {
		useNextVariants: true
	}
});
