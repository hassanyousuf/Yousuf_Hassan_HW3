var gulp = require ('gulp');
var sass = require ('gulp-sass');
var browserSync = require ('browser-sync').create();

gulp.task('styles', function (){
    gulp.src('./scss/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('serve', function (){

    browserSync.init({
        server:{
            burgDir: './'
            // these are the sass files compiled
        }
    });
    gulp.watch('./scss/*.scss', ['styles']);
    gulp.watch('./**/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['styles', 'serve']);






// refrence: (how to install) https://www.youtube.com/watch?v=kfvxaPizDew