import React from "react";

import { serviceDataType } from "../@types/servicesData";

import { onTab } from "../utils/onTab";

type ModalProps = {
	isOpen: boolean;
	closeModal: () => void;
	data: serviceDataType;
};

export const Modal: React.FC<ModalProps> = ({ isOpen, closeModal, data }) => {
	const wrapperRef = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		let handleModalKeyboard: (event: KeyboardEvent) => void;

		if (isOpen) {
			if (wrapperRef.current) {
				const elems: NodeListOf<HTMLButtonElement & HTMLInputElement> =
					wrapperRef.current.querySelectorAll("button, input, a");
				const arrOfEllems = Array.from(elems);

				for (const elem of arrOfEllems) {
					elem.style.display = "block";
				}

				handleModalKeyboard = onTab(wrapperRef, arrOfEllems, closeModal);

				document.addEventListener("keydown", handleModalKeyboard);
			}
		} else {
			if (wrapperRef.current) {
				const elems: NodeListOf<HTMLButtonElement & HTMLInputElement> =
					wrapperRef.current.querySelectorAll("button, input, a");
				const arrOfEllems = Array.from(elems);

				for (const elem of arrOfEllems) {
					elem.style.display = "none";
				}
			}
		}

		return () => document.removeEventListener("keydown", handleModalKeyboard);
	}, [isOpen, closeModal]);

	React.useEffect(() => {
		if (isOpen) {
			wrapperRef.current?.querySelector("button")?.focus();
		}
	}, [isOpen]);

	return (
		<div
			aria-hidden={!isOpen}
			className={`modal ${isOpen ? "modal--visible" : ""}`}
			role="dialog"
			aria-modal="true"
			aria-label="Modal window"
		>
			<div ref={wrapperRef} className={`modal__content ${isOpen ? "modal__content--visivle " : ""}`}>
				<h3 className="modal__title">{data.title}</h3>
				<p className="modal__text">{data.text}</p>
				<h4 className="modal__text lng-linkModal">Price:</h4>
				<ul className="modal__list">
					{data.price.map((item, index) => (
						<li key={index} className="modal__item">
							{item}
						</li>
					))}
				</ul>
				{data.subtext ? <p className="modal__text">{data.subtext}</p> : null}
				<button type="button" className="modal__close" onClick={closeModal}>
					&#10540;
				</button>
			</div>
		</div>
	);
};
