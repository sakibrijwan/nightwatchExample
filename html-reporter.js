var HtmlReporter = require('nightwatch-html-reporter');
//To run: nightwatch --reporter ./html-repoerter.js
/* Same options as when using the built in nightwatch reporter option */
// var reporter = new HtmlReporter({
//     openBrowser: true,
//     reportsDirectory: __dirname + '/reports/'
// });
var reporter = new HtmlReporter({
    openBrowser: true,
    reportsDirectory: "reports",
    uniqueFilename: true,
    reportFilename: "generatedTestResults.html",
    themeName: "outlook",
    debug: {     savenightwatch: 'reports/debugreport.txt'   }
});

module.exports = {
    write : function(results, options, done) {
        reporter.fn(results, done);
    }
};