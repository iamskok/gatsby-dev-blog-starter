import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import '../styles/card.scss';

const oneColumnLayout = '(max-width: 640px) calc(100vw - 30px)';
const twoColumnLayout = '(min-width: 641px) and (max-width: 960px) calc(50vw - 40px)';
const defaultLayout = '450px';
const imgSizes = `${oneColumnLayout}, ${twoColumnLayout}, ${defaultLayout}`;

const Card = (props) => {
	return (
		<div className="card">
			<Link to={props.link} className="card__img-link">
				<Img
					className="card__img"
					fluid={{...props.cover, sizes: imgSizes, aspectRatio: 3.5/1}}
				/>
			</Link>

			<div className="card__content">
				<Link to={props.link} className="card__title-link">
					<h2 className="card__title">{props.title}</h2>
				</Link>
				<p className="card__text">{props.excerpt}</p>
				<time className="card__timestamp">{props.date}</time>
			</div>
		</div>
	);
}

export default Card;
