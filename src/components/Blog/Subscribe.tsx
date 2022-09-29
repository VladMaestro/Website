import { useState, ChangeEvent, FC, FormEvent } from "react";

export const Subscribe: FC = () => {
	const [emailInput, setEmailInput] = useState("");
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState<string | null>(null);
	const [error, setError] = useState<string | null>(null);

	const emailInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setEmailInput(event.target.value);
	};

	const formSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		setLoading(true);
		setSuccess(null);
		setError(null);

		const options = {
			method: "POST",
			headers: {
				accept: "application/json",
				"content-type": "application/json",
				"api-key": "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",
			},
			body: JSON.stringify({
				email: emailInput,
				emailBlacklisted: false,
				smsBlacklisted: false,
				listIds: [2],
				updateEnabled: false,
			}),
		};

		try {
			const request = await fetch("https://api.sendinblue.com/v3/contacts", options);

			if (request.ok) {
				const response = (await request.json()) as { id: number };

				setLoading(false);
				if (response.id) {
					setSuccess("You have successfully subscribed!");
				}

				return;
			} else {
				const response = (await request.json()) as { code: string; message: string };
				throw new Error(response.message);
			}
		} catch (error) {
			setLoading(false);
			if (error instanceof Error) {
				setError(error.message);
			}
		}
	};

	return (
		<section className="subscribe">
			<div className="container">
				<h2 className="subscribe__title">Subscribe to our newsletter</h2>
				<p className="subscribe__text">Be the first to get exclusive offers and the latest news.</p>
				{success ? (
					<p className="subscribe__info">{success}</p>
				) : (
					<form id="sib-form" onSubmit={formSubmit} className="subscribe__form">
						<label htmlFor="EMAIL" className="subscribe__label">
							<input
								type="email"
								id="EMAIL"
								name="EMAIL"
								className="subscribe__input"
								placeholder="Your email adress"
								value={emailInput}
								onChange={emailInputHandler}
							/>
						</label>
						<button type="submit" className="button">
							Subscribe
						</button>
						{loading && <p className="subscribe__info">{loading}</p>}
						{error && <p className="subscribe__info">{error}</p>}
					</form>
				)}
			</div>
		</section>
	);
};
