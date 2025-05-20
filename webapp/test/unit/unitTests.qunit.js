/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/acn/training/sapui5exercises/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
