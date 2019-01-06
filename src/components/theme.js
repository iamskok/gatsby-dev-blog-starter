import { createMuiTheme } from '@material-ui/core/styles';

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
			dark: '#001970',
			light: '#666ad1',
			main: '#303f9f',
			contrastText: "#fff"
		},
		secondary: {
			dark: '#8e0000',
			light: '#ff5f52',
			main: '#c62828',
			contrastText: "#fff"
		}
	},
	typography: {
		useNextVariants: true
	}
});
