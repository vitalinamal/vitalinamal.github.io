const { src, dest } = require('gulp');

function move() {
    return src('./task/**/*.*').pipe(dest('./build/'));
}

exports.move = move;