export class File {
	icon?: string;
	title: string;
	link?: string;
	serviceId?: string;
	sectorId?: string;

	constructor(
		title: string,
		icon?: string,
		link?: string,
		serviceId?: string,
		sectorId?: string,
	) {
		this.title = title;
		this.icon = icon;
		this.link = link;
		this.serviceId = serviceId;
		this.sectorId = sectorId;
	}
}
