const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
// const uglify = require('gulp-uglify');
const uglify = require('gulp-uglify-es').default;


gulp.task('sass', function() {
    return gulp.src('src/scss/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            errLogToConsole: true,
            outputStyle: 'expanded'
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('src/css'))
});

// gulp.task('js', () =>
//     gulp.src('src/js/app.js')
//         .pipe(babel({
//             presets: ['@babel/env']
//         }))
//         .pipe(gulp.dest('src/jsfile'))
// );

gulp.task('scripts', function() {
  gulp.src(['src/js/app.js', 'src/js/contact.js', 'src/js/gallery.js', 'src/js/o_nas.js'])
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('src/js/jsfile/'))
});

gulp.task('watch', function(){
    gulp.watch('src/scss/**/*.scss', ['sass']);
    gulp.watch('src/js/**/*.js', ['scripts']);
});