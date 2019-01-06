/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from "react"
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './src/components/theme';

export const wrapRootElement = ({element}) => {
	return (
		<MuiThemeProvider theme={theme}>
			{element}
		</MuiThemeProvider>
	);
};
