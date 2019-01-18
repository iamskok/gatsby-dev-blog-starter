import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import theme from './theme';
import Img from 'gatsby-image';

const oneColumnLayout = '(max-width: 640px) calc(100vw - 30px)';
const twoColumnLayout = '(min-width: 641px) and (max-width: 960px) calc(50vw - 40px)';
const defaultLayout = '450px';
const imgSizes = `${oneColumnLayout}, ${twoColumnLayout}, ${defaultLayout}`;

const ImgMediaCard = (props) => {
	const {classes} = props;

	return (
		<Card raised={true} className={classes.card}>
			<CardActionArea href={props.link}>
				<Img 
					imgStyle={{marginBottom: 0}}
					fluid={{...props.cover, sizes: imgSizes, aspectRatio: 3.5/1}}
				/>

				<CardContent className={classes.content}>
					<Typography
						gutterBottom 
						variant="caption"
						component="span"
						className={classes.date}
					>
						Published on {props.date}
					</Typography>
					<Typography
						gutterBottom
						variant="h5"
						component="h2"
						className={classes.title}
					>
						{props.title}
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
	card: {
		borderRadius: 0,
		padding: 0,
		marginBottom: 15,

		[theme.breakpoints.up('md')]: {
			marginBottom: 30
		},
	},
	content: {
		display: 'flex',
		flexDirection: 'column'
	},
	title: {
		color: theme.palette.primary.main,
		fontWeight: 100
	},
	date: {
		fontWeight: 100
	},
	excerpt: {
		fontWeight: 100
	}
})(ImgMediaCard);
