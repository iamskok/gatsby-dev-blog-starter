import React from "react";
import {MuiThemeProvider} from '@material-ui/core/styles';
import theme from './src/components/theme';
import 'gatsby-syntax-highlight-dracula';
import './src/styles/autolink-headers.scss';
import './src/styles/code-title.scss';
import './src/styles/code-button.scss';

export const wrapRootElement = ({element}) => {
	return (
		<MuiThemeProvider theme={theme}>
			{element}
		</MuiThemeProvider>
	);
};
