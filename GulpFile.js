const htmlmin = require('gulp-htmlmin');
const cssmin = require('gulp-cssmin');
const jsmin = require('gulp-jsmin');
const {src,dest}=require('gulp')

function htmlTask() {
    return src("*.html")
    .pipe(htmlmin({collapseWhitespace:true,removeComments:true}))
    .pipe(dest("dest"))
}
exports.html=htmlTask

function cssTask() {
    return src("*.css")
    .pipe(cssmin({collapseWhitespace:true,removeComments:true}))
    .pipe(dest("dest"))
}
exports.css=cssTask

function jsTask() {
    return src("*.js")
    .pipe(jsmin({collapseWhitespace:true,removeComments:true}))
    .pipe(dest("dest"))
}
exports.js=jsTask