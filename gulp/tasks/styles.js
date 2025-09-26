import gulp from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import cleanCSS from 'gulp-clean-css';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import gulpIf from 'gulp-if';

const sass = gulpSass(dartSass);
const { src, dest } = gulp;

const isProd = process.env.NODE_ENV === 'production';

export function styles() {
  return src('scss/**/*.scss')
    .pipe(gulpIf(isProd, sourcemaps.init()))   // only create maps in production
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(gulpIf(isProd, cleanCSS()))
    .pipe(gulpIf(isProd, sourcemaps.write('.')))
    .pipe(dest('build/css'));
}
