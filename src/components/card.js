import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Img from 'gatsby-image';
import LinesEllipsis from 'react-lines-ellipsis';
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC';
import theme from './theme';

const oneColumnLayout = '(max-width: 640px) calc(100vw - 30px)';
const twoColumnLayout = '(min-width: 641px) and (max-width: 960px) calc(50vw - 40px)';
const defaultLayout = '450px';
const imgSizes = `${oneColumnLayout}, ${twoColumnLayout}, ${defaultLayout}`;
const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis);

const ImgMediaCard = (props) => {
	const {classes} = props;

	return (
		<Card raised={true} className={classes.card}>
			<CardActionArea href={props.link}>
				<Img 
					imgStyle={{marginBottom: 0}}
					fluid={{...props.cover, sizes: imgSizes, aspectRatio: 16/9}}
				/>

				<CardContent className={classes.content}>
					<Typography gutterBottom variant="h5" component="h2" className={classes.title}>
						<ResponsiveEllipsis text={props.title} maxLine='2' basedOn='words' />
					</Typography>

					<Typography variant="body1" className={classes.excerpt}>
						{props.excerpt}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

ImgMediaCard.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles({
	content: {
		display: 'flex',
		flexDirection: 'column',
		height: 190,
		[theme.breakpoints.up(380)]: {
			height: 170,
		},
		[theme.breakpoints.up(420)]: {
			height: 160,
		},
		[theme.breakpoints.up('sm')]: {
			height: 145
		},
		[theme.breakpoints.up('md')]: {
			height: 195
		},
		[theme.breakpoints.up(800)]: {
			height: 175
		},
		[theme.breakpoints.up('lg')]: {
			height: 150
		}
	},
	excerpt: {
		marginTop: 'auto'
	},
	title: {
		height: 65
	}
})(ImgMediaCard);
