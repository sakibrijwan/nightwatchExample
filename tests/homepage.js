/**
 * Created by Sakib on 12/31/2017.
 *
 * how to run nightwatch tests/homepage.js -e chrome

 */
var au = require('autoit');

/* Same options as when using the built in nightwatch reporter option */

// var remote = require('selenium-webdriver/remote');
var fileToUpload='test.txt'


module.exports = {

    before : function(client,browser) {
        console.log('My browser'+client.browserName)
       console.log('Setting up...'+browser.options.desiredCapabilities.browserName);


    },
    'Login Page': function (client) {
        client
             .url(client.launch_url)
            .waitForElementPresent('body', 5000)
            //
            //.assert.containsText
            //.expect.element('body').to.be.present.before(1000)
            //.setValue('input[name="password]', 'p455w0rdZ')
            //.click('button[type="submit"]')
            //.assert.containsText('main', 'News feed')
            // .end();
    },
    tags:['Sign in with user name/pass'],
    'Login using username/password': function (client) {
        client
            .setValue('input[name="username"]', 'sarja1@nilavodev.com')
            .setValue('input[name="password"]', '1')
            .click('button[type="submit"]')
            .waitForElementPresent('body', 10000)
            // .assert.containsText('body','Inbox')
    },
    'Compose delivery':function (client) {
        client
            .click('a[id="compose-delivery-link"]')
            .setValue('input[id="token-input-recipientsToInput"]','sarja2@nilavodev.com')
            .setValue('input[id="subject"]','Hello Nightwatch')

     },
    'Upload file':function(browser){
        browser
            .click('label[class="btn bds-upload-btn btn-default btn-sm"]')
        // .setFileDetector(new remote.FileDetector());
        // var absolutePath = path.resolve(__dirname, fileToUpload);
        // var fileElem = element(by.css('input[type="file"]'));
        if(browser.options.desiredCapabilities.browserName=="firefox"){
            var widowTitle = "File Upload"
            au.WinWait(widowTitle)
            console.log(widowTitle)
            au.WinWait(widowTitle, "File &name:", 10);
            au.ControlSetText(widowTitle, "", "[CLASS:Edit; INSTANCE:1]", "G:\\test.txt");
            au.ControlClick(widowTitle, "", "[CLASS:Button; INSTANCE:1]");
            au.WinWaitClose(widowTitle, "File &name:", 10);
        }else{
        var widowTitle = "Open"
        au.WinWait(widowTitle)
        console.log(widowTitle)
        au.WinWait(widowTitle, "File &name:", 10);
        au.ControlSetText(widowTitle, "", "[CLASS:Edit; INSTANCE:1]", "G:\\test.txt");
        au.ControlClick(widowTitle, "", "[CLASS:Button; INSTANCE:1]");
        au.WinWaitClose(widowTitle, "File &name:", 10);
        }

    },
    'Send Express delivery':function (client) {
        client
            // .waitForElementPresent('//*[@id="bds-uploader-panel"]/div[2]/table/tbody/tr"]', 5000)
            // .assert.containsText('class','success upload-success')
            .click('button[type="submit"]')
    },
    'Sign Out':function (client) {
        client
            .useXpath().click("//a[text()='Sign out']")
            // .useCss()
    },
    // write : function(results, options, done) {
    //     reporter.fn(results, done);
    // },
    // reporter:  reporter.fn,

    after : function(browser,done) {
        console.log('Closing up...'+browser.options.desiredCapabilities.browserName);
         browser
          .end();
         done();
    }
    };