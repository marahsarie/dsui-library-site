module.exports = {
	server: {
		baseDir: './dist/',
		directory: true,
		index: 'index.html',
		routes: {}
	},
	files: ['dist'],
	ignore: [],
	single: false,
	watch: true,
	watchEvents: ['add', 'change', 'unlink'],
	watchTask: true,
	injectChanges: true,
	ghostMode: {
		clicks: false,
		scroll: false,
		forms: {
			submit: false,
			inputs: false,
			toggles: false
		}
	},
	logLevel: 'info',
	logPrefix: 'BS',
	logConnections: false,
	logFileChanges: true,
	logSnippet: true,
	open: true,
	browser: 'default',
	startPath: null,
	reloadOnRestart: true,
	notify: {
		styles: {
			top: 'auto',
			bottom: 0,
			padding: '5px 15px',
			'border-radius': '6px 0 0 0',
			'background-color': 'rgba(0, 0, 0, .6)'
		}
	},
	hostnameSuffix: false,
	scrollProportionally: false,
	scrollThrottle: 100,
	scrollRestoreTechnique: 'window.name',
	scrollElements: [],
	scrollElementMapping: []
};
