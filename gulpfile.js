const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create(); // create local server
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

// Compile Sass Function
function compilaSass(){
    return gulp.src('scss/*.scss') // get all files from folder scss
    .pipe(sass({outputStyle : 'compressed'})) //minified css
    .pipe(autoprefixer({ // create autoprefixer
        overrideBrowserslist: ['last 2 versions'],
        cascade: false,
    })) 
    .pipe(gulp.dest('css/')) // destination folder
    .pipe(browserSync.stream()); // inject css into the page
}
gulp.task('sass', compilaSass); // task (need a name)  default for all execute

// Concat all plugins CSS
function pluginsCSS(){
    return gulp.src('css/lib/*.css')
    .pipe(concat('plugins.css'))
    .pipe(gulp.dest('css/'))
    .pipe(browserSync.stream())
}
gulp.task('plugincss', pluginsCSS);

// Concat all JS 
function gulpJS(){
    return gulp.src('js/scripts/*.js')
    .pipe(concat('all.js')) // put all files in the scripts folder to one single file
    .pipe(babel({ // compile modern JS
        presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('js/'))
    .pipe(browserSync.stream()); // inject js into the page
}
gulp.task('allJS', gulpJS);

// Concat all plugins JS
function pluginsJS(){
    return gulp
    .src(['./js/lib/aos.min.js', './js/lib/swiper.min.js']) // name of files
    .pipe(concat('plugins.js')) // all these files will be going into plugins.js
    .pipe(gulp.dest('js/'))
    .pipe(browserSync.stream())
}
gulp.task('pluginjs', pluginsJS);

// Browser Function
function browser(){
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
}
gulp.task('browser-sync', browser);

// Watch Function
function watch(){
    gulp.watch('scss/*.scss', compilaSass); // gulp.series('name-of-task') or use parrallel
    gulp.watch('css/lib/*.css', pluginsCSS);
    gulp.watch('*.html').on('change', browserSync.reload); // refresh html when changes made
    gulp.watch('js/scripts/*.js', gulpJS);
    gulp.watch('js/lib/*.js', pluginsJS);
}
gulp.task('watch', watch);

// Gulp default
gulp.task('default', gulp.parallel('watch', 'browser-sync', 'sass','plugincss', 'allJS', 'pluginjs'));