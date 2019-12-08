let favicons = require('gulp-favicons')
    notify = require("gulp-notify"),
    inject = require('gulp-inject');

module.exports = function() {
  $.gulp.task('favicon:generate', function() {
    return $.gulp.src('./dev/static/images/**/favicon.svg')
      .pipe(favicons({
        // appName: null,
        // appDescription: null,
        // developerName: null,
        // developerURL: null,
        background: "#fff",
        // dir: "auto",
        // lang: "en-US",
        path: "static/images/general/favicons/",
        url: "/build/",
        // display: "standalone",
        // orientation: "any",
        // start_url: "/?homescreen=1",
        // version: "1.0",
        // logging: false,
        // online: false,
        // preferOnline: false,
        html: "./favicon.html",
        pipeHTML: true,
        replace: true,
        icons: {
          android: false,
          appleIcon: false,
          appleStartup: false,
          coast: false,
          favicons: true,
          firefox: false,
          windows: false,
          yandex: false
        }
      }))
      .on('error', notify.onError(function(error) {
        return {
          title: 'Favicon',
          message: error.message
        };
      }))
      .pipe($.gulp.dest('./build/static/images/general/favicons/'))
  });

  $.gulp.task('favicon:inject', function() {
    return $.gulp.src('./build/*.html')
      .pipe(inject($.gulp.src(['./build/static/images/general/favicons/favicon.html']), {
        starttag: '<!-- inject:head:{{ext}} -->',
        transform: function(filePath, file) {
          return file.contents.toString('utf8');
        }
      }))
      .pipe($.gulp.dest('./build/'));
  });

  $.gulp.task('favicon:clean', function() {
    return $.del(['./build/static/images/general/favicons/favicon.html']);
  });
};