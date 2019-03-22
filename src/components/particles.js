import React, {Component} from 'react';
import Radium from 'radium';
import Particles from 'react-particles-js';
import '../styles/particles.scss';

const particleStyles = {
	base: {
		// margin: '0 -15px',
		position: 'fixed',
		// backgroundColor: 'green',
		backgroundIimage: 'url("")',
		backgroundSize: 'cover',
		backgroundPosition: '50% 50%',
		backgroundRepeat: 'no-repeat', 
		'@media screen and (minWidth: 560px)': {
			// backgroundColor: 'orange',
			// margin: '64px -15px',
		}
	}
};

export default Radium(class extends Component {
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
});
