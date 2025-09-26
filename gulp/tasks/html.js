import gulp from 'gulp';
import fileInclude from 'gulp-file-include';

const { src, dest } = gulp;

export function html() {
  return src('*.html')
    .pipe(fileInclude())
    .pipe(dest('build'));
}
