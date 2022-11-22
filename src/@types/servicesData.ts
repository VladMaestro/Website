export type serviceDataType = {
	title: string;
	text: string;
	price: string[];
	subtext?: string;
};

export type servicesDataType = {
	[key: string]: {
		[key: string]: serviceDataType;
	};
};

export type translationType = {
	[key: string]: {
		[key: string]: string;
	};
};
