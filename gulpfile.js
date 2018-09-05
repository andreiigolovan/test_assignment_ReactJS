var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer'),
    del = require('del'),
    babel = require('gulp-babel'),
    concat = require('gulp-concat');

gulp.task('sass', function() {
    return gulp.src(['src/sass/**/*.sass', 'src/sass/**/*.scss'])
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.reload({ stream: true }))
});

function handleError(error) {
    console.log(error.toString());
    this.emit('end');
}

gulp.task('babel', function() {
    return gulp.src('src/js/babel/*.js')
        .pipe(babel()).on('error', handleError)
        .pipe(concat('common.js'))
        .pipe(gulp.dest('src/js/'))
        .pipe(browserSync.reload({ stream: true }))
})

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'src/'
        },
        notify: false
    });
});

gulp.task('clean', function() {
    return del.sync('dist');
});

gulp.task('watch', ['browser-sync', 'sass'], function() {
    gulp.watch('src/sass/**/*.sass', ['sass']);
    gulp.watch('src/*.html', browserSync.reload);
    // gulp.watch('src/js/**/*.js', browserSync.reload);
    gulp.watch('src/js/**/*.js', ['babel']);
});

gulp.task('build', ['clean', 'sass', 'babel'], function() {

    let buildCss = gulp.src('src/css/style.css')
        .pipe(gulp.dest('dist/css'));

    let buildFonts = gulp.src('src/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'));

    let buildJs = gulp.src('src/js/common.js')
        .pipe(gulp.dest('dist/js'))

    // let buildJs = gulp.src('src/js/**/*.js')
    //     .pipe(babel())
    //     .pipe(concat('common.js'))
    //     .pipe(gulp.dest('dist/js'));

    let buildHtml = gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));

    let copyImg = gulp.src('src/img/**/*')
        .pipe(gulp.dest('dist/img'));

});

gulp.task('default', ['watch']);