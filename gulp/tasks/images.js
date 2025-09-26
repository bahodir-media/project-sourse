const { src, dest } = require("gulp");
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");

function images() {
  return src("img/**/*.{jpg,jpeg,png,svg,gif}")
    .pipe(imagemin())
    .pipe(dest("build/img"))
    .pipe(src("img/**/*.{jpg,jpeg,png}"))
    .pipe(webp())
    .pipe(dest("build/img"));
}
exports.images = images;
