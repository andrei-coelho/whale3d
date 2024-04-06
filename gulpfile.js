const gulp = require('gulp');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');

function compileTS() {
  return tsProject.src()
    .pipe(tsProject())
    .js.pipe(gulp.dest('js'));
}

function watch() {
  gulp.watch('src/**/*.ts', compileTS);
}

exports.default = gulp.series(compileTS, watch);