export interface ILinks {
	_id: string;
	icon: Icon;
	gradient: Gradient;
	link: string;
	title: string;
	isImportant?: boolean;
}

export interface Gradient {
	from: string;
	to: string;
}

export interface Icon {
	path: string;
	width: number;
}
