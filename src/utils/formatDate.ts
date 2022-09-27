export const formatDate = (date: string) => {
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

	return `${day} ${months[month]} ${year}`;
};
