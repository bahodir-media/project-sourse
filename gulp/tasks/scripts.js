import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import concat from 'gulp-concat';
import terser from 'gulp-terser';
import gulpIf from 'gulp-if';

const { src, dest } = gulp;
const isProd = process.env.NODE_ENV === 'production';

export function scripts() {
  return src('js/**/*.js')
    .pipe(gulpIf(isProd, sourcemaps.init()))   // only maps in production
    .pipe(concat('main.js'))
    .pipe(gulpIf(isProd, terser()))
    .pipe(gulpIf(isProd, sourcemaps.write('.')))
    .pipe(dest('build/js'));
}