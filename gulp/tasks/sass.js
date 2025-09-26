const { src, dest } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");
const sourcemaps = require("gulp-sourcemaps");
const gulpIf = require("gulp-if");
const rev = require("gulp-rev");

const isProd = process.env.NODE_ENV === "production";

function styles() {
  return src("scss/**/*.scss")
    .pipe(gulpIf(!isProd, sourcemaps.init()))
    .pipe(sass().on("error", sass.logError))
    .pipe(gulpIf(isProd, cleanCSS()))
    .pipe(gulpIf(isProd, rev())) // ✅ versioning only in production
    .pipe(gulpIf(!isProd, sourcemaps.write(".")))
    .pipe(dest("build/css"))
    .pipe(gulpIf(isProd, rev.manifest("rev-manifest.json", { merge: true })))
    .pipe(gulpIf(isProd, dest("build")));
}
exports.sass = styles;
