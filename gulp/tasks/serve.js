const { watch, series } = require("gulp");
const browserSync = require("browser-sync").create();

function serve() {
  browserSync.init({
    server: { baseDir: "build" },
    notify: false,
    open: true,
  });

  watch("scss/**/*.scss", series("sass")).on("change", browserSync.reload);
  watch("js/**/*.js", series("js")).on("change", browserSync.reload);
  watch("img/**/*", series("images")).on("change", browserSync.reload);
  watch("*.html", series("html")).on("change", browserSync.reload);
}
exports.serve = serve;
