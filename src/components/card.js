import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Img from 'gatsby-image';

const oneColumnLayout = '(max-width: 640px) calc(100vw - 30px)';
const twoColumnLayout = '(min-width: 641px) and (max-width: 960px) calc(50vw - 40px)';
const defaultLayout = '450px';
const sizes = `${oneColumnLayout}, ${twoColumnLayout}, ${defaultLayout}`;

function ImgMediaCard(props) {
	const {classes} = props;
	return (
		<Card>
			<CardActionArea href={props.link}>
				<Img 
					imgStyle={{marginBottom: 0}}
					fluid={{
						...props.cover,
						sizes: sizes,
						aspectRatio: 16/9
					}}
				/>
				<CardContent className={classes.content}>
					<Typography gutterBottom variant="h5" component="h2" className={classes.title}>
						{props.title}
					</Typography>
				
					<Typography component="p">
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
		height: 250
	},
	title: {
		alignItems: 'flex-start',
		padding: 0,
		height: 80
	}
})(ImgMediaCard);
