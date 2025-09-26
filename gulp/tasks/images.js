import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminOptipng from 'imagemin-optipng';
import imageminSvgo from 'imagemin-svgo';
import webp from 'gulp-webp';

const { src, dest } = gulp;

export function images() {
  return src('img/**/*.{jpg,jpeg,png,svg,gif}', { encoding: false })
    .pipe(imagemin([
      imageminMozjpeg({ quality: 75, progressive: true }),
      imageminOptipng({ optimizationLevel: 5 }),
      imageminSvgo()
    ]))
    .pipe(dest('build/img'))
    .pipe(webp())
    .pipe(dest('build/img'));
}
