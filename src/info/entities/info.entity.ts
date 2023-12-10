export class Info {
	id?: string;
	title: string;
	description: string;

	icon?: string;

	sectorId?: string;

	constructor(
		id?: string,
		title?: string,
		description?: string,
		sectorId?: string,
		icon?: string,
	) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.sectorId = sectorId;
		this.icon = icon;
	}
}
