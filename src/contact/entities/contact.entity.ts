export class Contact {
	id?: string;
	title: string;
	responsible: string;
	email?: string;
	phone?: string;
	sectorsId?: string[];

	constructor(
		id?: string,
		title?: string,
		responsible?: string,
		email?: string,
		phone?: string,
		sectorsId?: string[],
	) {
		this.id = id;
		this.title = title;
		this.email = email;
		this.phone = phone;
		this.responsible = responsible;
		this.sectorsId = sectorsId;
	}
}
