'use strict';

var _gulp = require('gulp');

var _gulp2 = _interopRequireDefault(_gulp);

var _gulpSass = require('gulp-sass');

var _gulpSass2 = _interopRequireDefault(_gulpSass);

var _gulpRename = require('gulp-rename');

var _gulpRename2 = _interopRequireDefault(_gulpRename);

var _gulpPxrem = require('gulp-pxrem');

var _gulpPxrem2 = _interopRequireDefault(_gulpPxrem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pxSrc = './src/scss/px/**/**.scss';
var pxName = './src/scss/px/px.scss';
var remSrc = './src/scss/rem/';
var remName = 'rem.scss';

//编译Sass，
_gulp2.default.task('px', function () {
    return _gulp2.default.src(pxName).pipe((0, _gulpSass2.default)().on('error', _gulpSass2.default.logError)).pipe((0, _gulpPxrem2.default)({
        baseDpr: 2, // base device pixel ratio (default: 2)
        threeVersion: false, // whether to generate @1x, @2x and @3x version (default: false)
        remVersion: true, // whether to generate rem version (default: true)
        remUnit: 72, // rem unit value (default: 75)
        remPrecision: 6
    })).pipe((0, _gulpRename2.default)(remName)).pipe(_gulp2.default.dest(remSrc));
}

// 静态服务器 + 监听 scss/html 文件
);_gulp2.default.task('dev', ['px'], function () {

    _gulp2.default.watch(pxSrc, ['px']);
});

_gulp2.default.task('default', ['dev']);