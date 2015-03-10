/**
 * Created by brock.fredin on 3/9/15.
 */
var gulp = require('gulp');
var jasmine = require('gulp-jasmine-phantom');
var karma = require('gulp-karma');

gulp.task('test', function () {
    gulp.src('/test')
        .pipe(karma({
            configFile: 'test/karma.conf.js',
            action: 'run'
        }));
});

gulp.task('watch', function () {
    // Watch .js files
    gulp.watch('script.js', ['unitTests']);
});


