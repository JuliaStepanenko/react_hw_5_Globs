const { src, dest, parallel } = require('gulp');

const copyOnlyJs = () => {
    return src('src/js/*.js')
        .pipe(dest('prod/js/'));
};

const copyOnlySvg = () => {
    return src('src/img/**/*.svg')
        .pipe(dest('prod/img/'));
};

const copyAllHtml = () => {
    return src('src/**/*.html')
        .pipe(dest('prod/'));
};

const copyAndExcludeScss = () => {
    return src(['src/**/*.scss', '!src/**/_*.scss'])
        .pipe(dest('prod/'));
};

exports.copy = parallel(copyOnlyJs, copyOnlySvg, copyAllHtml, copyAndExcludeScss);
