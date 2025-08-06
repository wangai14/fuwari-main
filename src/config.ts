import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "码境Code Realm",
	subtitle: "爱你一生",
	lang: "zh_CN", // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko', 'es', 'th'
	themeColor: {
		hue: 250, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: false, // Hide the theme color picker for visitors
	},
	banner: {
		enable: true,
		src: "https://img.xn--ohqu9y07ujpb.dpdns.org/file/1754446851075_banner.DBvCl2Qg_ZBX2hI.webp", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: true, // Display the credit text of the banner image
			text: "Pixiv @chokei", // Credit text to be displayed
			url: "https://www.pixiv.net/users/175341486", // (Optional) URL link to the original artwork or artist's page
		},
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		{
			src: "https://e5bf5984.cloudflare-imgbed-csc.pages.dev/file/1753414862012_0_b67f5a87763bc15d58d147d89ff8823c_1753414687712.webp", // Path of the favicon, relative to the /public directory
			theme: "light", // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
			sizes: "32x32", // (Optional) Size of the favicon, set only if you have favicons of different sizes
		},
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		{
			name: "统计",
			url: "https://cloud.umami.is/share/azr29Ow6KU9YfL2U/kejidao.ggff.net", // Internal links should not include the base path, as it is automatically added
			external: true, // Show an external link icon and will open in a new tab
		},
		{
			name: "GitHub",
			url: "https://github.com/saicaca/fuwari", // Internal links should not include the base path, as it is automatically added
			external: true, // Show an external link icon and will open in a new tab
		},
		{
			name: "友链",
			url: "https://github.com/saicaca/fuwari", // Internal links should not include the base path, as it is automatically added
			external: false, // Show an external link icon and will open in a new tab
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/demo-tx.jpg", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "码境Code Realm",
	bio: "Protect What You Love./爱你所爱！",
	links: [
		{
			name: "YouTube",
			icon: "fa6-brands:youtube", // Visit https://icones.js.org/ for icon codes
			// You will need to install the corresponding icon set if it's not already included
			// `pnpm add @iconify-json/<icon-set-name>`
			url: "https://www.youtube.com/@xs.903",
		},
		{
			name: "QQ",
			icon: "fa6-brands:qq",
			url: "https://wpa.qq.com/msgrd?v=3&uin=584524731&site=qq&menu=yes",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/wangai14/fuwari",
		},
		{
			name: "B站",
			icon: "fa6-brands:bilibili",
			url: "https://space.bilibili.com/485156002?spm_id_from=333.1007.0.0",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
	// Please select a dark theme, as this blog theme currently only supports dark background color
	theme: "github-dark",
};
