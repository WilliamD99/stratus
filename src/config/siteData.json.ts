export interface SiteDataProps {
	name: string;
	title: string;
	description: string;
	useViewTransitions?: boolean; // defaults to false. Set to true to enable some Astro 3.0 view transitions
	defaultImage: {
		src: string;
		alt: string;
	};
}

// Update this file with your site specific information
const siteData: SiteDataProps = {
	name: "Stratus Janitorial",
	// Your website's title and description (meta fields)
	title: "Stratus Janitorial – Professional Commercial Cleaning Services",
	description:
		"Stratus Janitorial provides reliable commercial cleaning and janitorial services. Experienced team ensures spotless offices, buildings, and facilities.",
	useViewTransitions: true,

	// default image for meta tags if the page doesn't have an image already
	defaultImage: {
		src: "/images/cosmic-themes-logo.jpg",
		alt: "Blogsmith logo",
	},
};

export default siteData;