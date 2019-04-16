import React, {Component} from 'react';
import '../styles/form.scss';

class ContactForm extends Component {
	render() {
		return (
			<form
				className="form"
				onSubmit={this.handleSubmit}
				action="https://formspree.io/skok@vova.io"
				method="POST"
			>
				<input
					id="subject"
					name="subject"
					className="form__input"
					type="text"
					placeholder="Subject"
					required
				/>
				<input
					id="name"
					name="name"
					className="form__input"
					type="text"
					placeholder="Don Joe"
					required
				/>
				<input
					id="email"
					name="email"
					className="form__input"
					type="email"
					placeholder="your@email.com"
					required
				/>
				<textarea
					id="message"
					name="message"
					className="form__textarea"
					required
				/>
				<button
					className="form__button"
					type="submit"
				>
					Send
				</button>
			</form>
		);
	}
}

export default ContactForm;
