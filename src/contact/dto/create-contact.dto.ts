export class CreateContactDto {
	title: string;
	responsible: string;
	email?: string;
	phone?: string;
	sectorsId: string[];
}
