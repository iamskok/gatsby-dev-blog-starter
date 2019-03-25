import React, {Component} from 'react';
import Particles from 'react-particles-js';
import '../styles/particles.scss';

const particleStyles = {
	base: {
		position: 'fixed',
		backgroundIimage: 'url("")',
		backgroundSize: 'cover',
		backgroundPosition: '50% 50%',
		backgroundRepeat: 'no-repeat'
	}
};

export default class extends Component {
	render() {
		return (
			<div className="particles">
				<Particles
					params={{
						particles: {
							line_linked: {
								shadow: {
									enable: true,
									color: '#ff0000',
									blur: 0.001
								}
							}
						},
						retina_detect: true
					}}

					style={particleStyles.base}
					width={'100%'}
					height={'calc(100vh - 130px)'}
				/>
			</div>
		);
	}
};
