module.exports = {
	globDirectory: 'app_RBLF',
	globPatterns: [
		'**/*.{html,js,json,css}'
	],
	swDest: 'app_RBLF/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/,
		/^source/
	]
};