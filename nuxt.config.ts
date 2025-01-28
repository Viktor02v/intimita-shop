// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	modules: [
	  '@nuxtjs/tailwindcss',
	  '@nuxt/image',
	  '@nuxt/icon',
	  '@pinia/nuxt',
	  '@nuxtjs/color-mode',
	  [
		 '@vee-validate/nuxt',
		 {
			autoImports: true,
		 },
	  ],
	  [
		 '@nuxtjs/google-fonts',
		 {
			families: {
			  Garamond: {
				 wght: [300, 400, 700],
				 ital: [300],
			  },
			  Comfortaa: {
				 wght: [300, 400, 700],
				 ital: [300],
			  },
			},
		 },
	  ],
	  'shadcn-nuxt',
	],
	shadcn: {
	  prefix: 'Ui',
	  componentDir: './components/ui',
	},
	pinia: {
	  storesDirs: ['./store/**'],
	},
 });
 