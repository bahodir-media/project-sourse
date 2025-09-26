import gulp from 'gulp';
import browserSync from 'browser-sync';

import { html } from './html.js';
import { styles } from './styles.js';
import { scripts } from './scripts.js';
import { images } from './images.js';

const { watch, series } = gulp;
const server = browserSync.create();

function reload(done) {
  server.reload();
  done();
}

export function serve() {
  server.init({
    server: {
      baseDir: 'build'
    },
    port: 3000,
    notify: false
  });

  // 🔥 Watch HTML
  watch('*.html', series(html, reload));

  // 🔥 Watch SCSS
  watch('scss/**/*.scss', series(styles, reload));

  // 🔥 Watch JS
  watch('js/**/*.js', series(scripts, reload));

  // 🔥 Watch Images
  watch('img/**/*.{jpg,jpeg,png,svg,gif}', series(images, reload));
}
