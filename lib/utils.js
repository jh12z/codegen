var fs = require("fs");
var path = require("path");

function mkdirsSync(pathname) {
	try {
		if (!fs.statSync(pathname).isDirectory()) {
			throw new Error("Unable to create directory at: " + pathname);
		}
	} catch (e) {
		if (e.code === 'ENOENT') {
			mkdirsSync(path.dirname(pathname));
			fs.mkdirSync(pathname);
		} else {
			throw e;
		}
	}
}

exports.mkdirsSync = mkdirsSync;