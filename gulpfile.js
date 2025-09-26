const { series, parallel } = require("gulp");
const requireDir = require("require-dir");

// load all tasks from gulp/tasks
requireDir("./gulp/tasks", { recurse: true });

exports.dev = series("clean", parallel("sass", "js", "images", "html"), "serve");
exports.build = series("clean", parallel("sass", "js", "images", "html"));
