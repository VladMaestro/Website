import React, { FC } from "react";

export const Refund: FC = () => {
	return (
		<section>
			<div className="article__container">
				<h1 className="article__title">Refund policy and Terms of Use</h1>
				<h2 className="article__h2">EASY EN&apos;s All Types of Classes and Trial Classes</h2>
				<ol className="article__list">
					<li>
						We offer a refund up to 24 hours before the start of the first class session for all group or private class
						package purchases.
					</li>
					<li>
						We reschedule classes when they are canceled 24 hours in advance. If a student doesn&apos;t show up to class
						or cancels after the 24-hour deadline, there will be no makeup lesson. Please understand that teachers plan
						their lessons around your schedule and other students can not meet teachers because you have already booked
						a lesson.
					</li>
					<li>There are no makeup lessons or refunds for group or private classes after the starting time.</li>
					<li>Your purchased lessons are valid for up to 3 months after the date of purchase.</li>
					<li>
						Each student in private lessons is only allowed to reschedule one class per month, even if the request to
						reschedule is received more than 24 hours in advance.
					</li>
					<li>
						EASY EN reserves the right to not work with students who exhibit the following characteristics:
						unwillingness to work during or outside of class, excessive disrespect to EASY ENp instructors, or
						inappropriate conduct that has a negative impact on the learning environment.
					</li>
				</ol>
				<h2 className="article__h2">EASY EN&apos;s Ebooks</h2>
				<ol className="article__list">
					<li>
						All book sales are final and non-refundable. Students are encouraged to download the free preview of the
						book before purchase.
					</li>
				</ol>
			</div>
		</section>
	);
};
