const { src, dest } = require("gulp");
const fileInclude = require("gulp-file-include");
const webpHTML = require("gulp-webp-html-nosvg");
const revReplace = require("gulp-rev-replace");
const gulpIf = require("gulp-if");

const isProd = process.env.NODE_ENV === "production";

function html() {
  const manifest = src("build/rev-manifest.json", { allowEmpty: true });

  return src("*.html")
    .pipe(fileInclude())
    .pipe(webpHTML())
    .pipe(gulpIf(isProd, revReplace({ manifest }))) // ✅ replace references
    .pipe(dest("build"));
}
exports.html = html;
