import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET() {
	return rss({
		title: 'Astro Learner | Blog',
		description: 'My journy learning Astro',
		site: 'https://eclectic-kheer-5562a5.netlify.app',
		items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
		customData: '<language>en-us</language>',
	});
}
