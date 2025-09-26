import gulp from 'gulp';
import { serve } from './gulp/tasks/serve.js';
import { html } from './gulp/tasks/html.js';
import { styles } from './gulp/tasks/styles.js';
import { scripts } from './gulp/tasks/scripts.js';
import { images } from './gulp/tasks/images.js';
import { clean } from './gulp/tasks/clean.js';

const { series, parallel } = gulp;

export const build = series(
  clean,
  parallel(html, styles, scripts, images)
);

export const dev = series(
  build,
  serve
);

export default dev;