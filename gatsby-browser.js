import React from "react"
import {MuiThemeProvider} from '@material-ui/core/styles';
import theme from './src/components/theme';

export const wrapRootElement = ({element}) => {
	return (
		<MuiThemeProvider theme={theme}>
			{element}
		</MuiThemeProvider>
	);
};
