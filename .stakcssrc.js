module.exports = {
	html_angularjs: {
		source: 'src/angularjs/home.html',
		output: 'dist/angularjs/index.html',
		bundlers: ['@brikcss/stakcss-bundler-ejs'],
		watchPaths: './src/briks/**/*.ejs.html'
	},
	html_vanillajs: {
		source: 'src/vanillajs/index.html',
		output: 'dist/vanillajs/index.html',
		bundlers: ['@brikcss/stakcss-bundler-ejs'],
		watchPaths: './src/briks/**/*.ejs.html'
	},
	sass: {
		source: [
			// DS UI SASS config (variables).
			'./src/angularjs/config/_config.scss',
			// Core component abstracts.
			'./node_modules/@brikcss/core/dist/sass/colors/_colors.abstract.scss',
			'./node_modules/@brikcss/core/dist/sass/{reset,typography,rhythm}/*.abstract.scss',
			// Non-core component abstracts.
			'./node_modules/@brikcss/spinner/dist/sass/_spinner.abstract.scss',
			'./src/briks/**/*.abstract.scss',
			// Core components init.
			'./node_modules/@brikcss/core/dist/sass/core.init.scss',
			// Other components init.
			'./src/briks/{tabs,header,footer,sidebars,show-hide,burger-button,code-editor,spinner}/*.init.scss',
			// Utility classes.
			'./node_modules/@brikcss/core/dist/sass/rhythm/_rhythm.utilities.scss',
			// Site specific code.
			'./node_modules/highlight.js/styles/atom-one-dark.css',
			'./src/angularjs/**/*.scss'
		],
		output: './dist/angularjs/css/dsui-angularjs.css',
		bundlers: [
			{ run: '@brikcss/stakcss-bundler-sass', options: { sourceMap: false } },
			{
				run: '@brikcss/stakcss-bundler-postcss',
				options: {},
				plugins: [
					require('autoprefixer')({ cascade: false }),
					require('postcss-reporter')({ clearReportedMessages: true })
				]
			}
		]
	},
	css: {
		source: 'src/vanillajs/app.css',
		output: './dist/vanillajs/css/app.css',
		bundlers: [
			{
				run: '@brikcss/stakcss-bundler-postcss',
				options: {},
				plugins: [
					require('autoprefixer')({ cascade: false }),
					require('postcss-reporter')({ clearReportedMessages: true })
				]
			}
		]
	},
	fonts: {
		source: './node_modules/@brikcss/core/dist/sass/typography/fonts/*.{woff,woff2,ttf}',
		output: 'dist/angularjs/css/fonts/',
		bundlers: ['@brikcss/stakcss-bundler-copy']
	},
	assets: {
		source: 'static/**/*',
		output: 'dist/angularjs/assets/',
		root: 'static',
		bundlers: ['@brikcss/stakcss-bundler-copy']
	},
	svg: {
		source: './node_modules/@mdi/svg/svg/**',
		output: 'dist/vanillajs/svg/',
		root: 'node_modules/@mdi/svg/svg',
		bundlers: [
			{
				run: './lib/stakcss-bundler-svg.js',
				options: { plugins: [{ removeViewBox: false }, { removeDimensions: true }] }
			}
		]
	},
	svg_angularjs: {
		source: './node_modules/@mdi/svg/svg/**',
		output: 'dist/angularjs/svg/',
		root: 'node_modules/@mdi/svg/svg',
		bundlers: [
			{
				run: './lib/stakcss-bundler-svg.js',
				options: { plugins: [{ removeViewBox: false }, { removeDimensions: true }] }
			}
		]
	}
};
