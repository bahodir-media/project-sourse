const del = require("del");

function clean() {
  return del(["build"]);
}
exports.clean = clean;
