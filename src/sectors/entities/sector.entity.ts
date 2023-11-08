export class Sector {
	id?: string;
	name: string;
	description: string;
	generalInfo?: generalInfo[];
	contacts?: Contact[];

	constructor(
		name: string,
		description: string,
		generalInfo: generalInfo[],
		contacts: Contact[],
	) {
		this.name = name;
		this.description = description;
		this.generalInfo = generalInfo;
		this.contacts = contacts;
	}
}
