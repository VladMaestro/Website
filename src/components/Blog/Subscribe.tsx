import { FC } from "react";

export const Subscribe: FC = () => {
	return (
		<section className="subscribe">
			<div className="container">
				<h2 className="subscribe__title">Subscribe to our newsletter</h2>
				<p className="subscribe__text">Be the first to get exclusive offers and the latest news.</p>
				<form className="subscribe__form">
					<label htmlFor="email" className="subscribe__label">
						<input type="email" name="email" id="email" className="subscribe__input" placeholder="Your email adress" />
					</label>
					<button type="submit" className="button">
						Subscribe
					</button>
				</form>
			</div>
		</section>
	);
};
