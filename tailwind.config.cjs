const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter var', ...defaultTheme.fontFamily.sans],
			},
			height: {
				custom: 'calc(100vh - var(--header-height))',
			},
			screens: {
        'tall': { 'raw': '(min-height: 800px)' },
      }
		},
	},
	plugins: [require('@tailwindcss/typography'),],
};
