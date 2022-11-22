import { useState, useEffect } from "react";

const useFormattedDate = (date: string) => {
	const [formattedDate, setFormattedDate] = useState<string>("");

	useEffect(() => {
		const convertedToDate = new Date(date);

		const months = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December",
		];

		const year = convertedToDate.getFullYear();
		const month = convertedToDate.getMonth();
		const day = convertedToDate.getDate();

		setFormattedDate(`${day} ${months[month]} ${year}`);
	}, [date]);

	return formattedDate;
};

export default useFormattedDate;
