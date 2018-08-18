const gulp = require('gulp')
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')
const del = require('del')

const { NODE_ENV } = process.env

gulp.task('clean', function() {
  return del(['./dist/css/'])
})

gulp.task('sass', function(done) {
  if (NODE_ENV === 'production') {
    gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'))
  } else if (NODE_ENV === 'development') {
    gulp.src('./src/sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/css'))
  }
  done()
})

gulp.task('sass:watch', function() {
  gulp.watch('./src/sass/*.scss', gulp.series('clean', 'sass'))
})

gulp.task('sass:build', gulp.series('clean', 'sass', function(done) {
  done()
}))