export class Sector {
	id?: string;
	name: string;
	description: string;
	generalInfo?: generalInfo[];

	constructor(name: string, description: string, generalInfo: generalInfo[]) {
		this.name = name;
		this.description = description;
		this.generalInfo = generalInfo;
	}
}
