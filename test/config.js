var requirejs = {
	paths: {
		qunit: "../external/qunit/qunit/qunit",
		cldr: "../external/cldrjs/dist/cldr",
		"cldr-data": "../external/cldr-data",
		globalize: "../dist/globalize",
		"iana-tz-data": "../node_modules/iana-tz-data/iana-tz-data",
		json: "../external/requirejs-plugins/src/json",
		src: "../src",
		text: "../external/requirejs-text/text"
	},

	// Increase the default of 7 seconds for high-latency envs like browserstack-runner.
	waitSeconds: 60
};
