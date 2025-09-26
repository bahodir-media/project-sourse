const { src, dest } = require("gulp");
const concat = require("gulp-concat");
const terser = require("gulp-terser");
const sourcemaps = require("gulp-sourcemaps");
const gulpIf = require("gulp-if");
const rev = require("gulp-rev");

const isProd = process.env.NODE_ENV === "production";

function js() {
  return src("js/**/*.js")
    .pipe(gulpIf(!isProd, sourcemaps.init()))
    .pipe(concat("main.js"))
    .pipe(gulpIf(isProd, terser()))
    .pipe(gulpIf(isProd, rev())) // ✅ versioning only in production
    .pipe(gulpIf(!isProd, sourcemaps.write(".")))
    .pipe(dest("build/js"))
    .pipe(gulpIf(isProd, rev.manifest("rev-manifest.json", { merge: true })))
    .pipe(gulpIf(isProd, dest("build")));
}
exports.js = js;
