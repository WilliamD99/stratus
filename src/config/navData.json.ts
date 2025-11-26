export interface navLinkItem {
	text: string;
	link: string;
	newTab?: boolean; // adds target="_blank" rel="noopener noreferrer" to link
}


export type navItem = navLinkItem;

const navConfig: navItem[] = [
	{
		text: "About Us",
		link: "#about",
	},
	{
		text: "Our Values",
		link: "#values",
	},

];

export default navConfig;