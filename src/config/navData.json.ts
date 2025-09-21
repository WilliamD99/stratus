export interface navLinkItem {
	text: string;
	link: string;
	newTab?: boolean; // adds target="_blank" rel="noopener noreferrer" to link
}


export type navItem = navLinkItem;

const navConfig: navItem[] = [
	{
		text: "About",
		link: "#about",
	},
	{
		text: "Services",
		link: "#services",
	},
	{
		text: "Why Choose Us",
		link: "#values",
	},

];

export default navConfig;