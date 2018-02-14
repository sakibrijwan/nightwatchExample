/**
 * Created by Sakib on 12/31/2017.
 *
 * nightwatch --tag android tests/androidApp.js -e androidNative
 */
var au = require('autoit');

/* Same options as when using the built in nightwatch reporter option */

// var remote = require('selenium-webdriver/remote');
var fileToUpload='test.txt'


module.exports = {
    tags:['android'],
    before : function(browser) {
        console.log('Setting up...'+browser.options.desiredCapabilities.browserName);


    },
    'Login Page': function (client) {
        client
            .useXpath()
            .click("//android.widget.Button[@text='5']")
            .click("//android.widget.Button[@text='+']")
            .click("//android.widget.Button[@text='5']")
            .click("//android.widget.Button[@text='=']")
     },
    // tags:['Sign in with user name/pass'],
    // 'Login using username/password': function (client) {
    //     client
    //         .setValue('input[name="username"]', 'sarja1@nilavodev.com')
    //         .setValue('input[name="password"]', '1')
    //         .click('button[type="submit"]')
    //         .waitForElementPresent('body', 10000)
    //     // .assert.containsText('body','Inbox')
    // },
    // 'Compose delivery':function (client) {
    //     client
    //         .click('a[id="compose-delivery-link"]')
    //         .setValue('input[id="token-input-recipientsToInput"]','sarja2@nilavodev.com')
    //         .setValue('input[id="subject"]','Hello Nightwatch')
    //         .click('label[class="btn bds-upload-btn btn-default btn-sm"]')
    // },
    // 'Upload file':function(browser){
    //     // .setFileDetector(new remote.FileDetector());
    //     // var absolutePath = path.resolve(__dirname, fileToUpload);
    //     // var fileElem = element(by.css('input[type="file"]'));
    //     if(browser.options.desiredCapabilities.browserName=="firefox"){
    //         var widowTitle = "File Upload"
    //         au.WinWait(widowTitle)
    //         console.log(widowTitle)
    //         au.WinWait(widowTitle, "File &name:", 10);
    //         au.ControlSetText(widowTitle, "", "[CLASS:Edit; INSTANCE:1]", "G:\\test.txt");
    //         au.ControlClick(widowTitle, "", "[CLASS:Button; INSTANCE:1]");
    //         au.WinWaitClose(widowTitle, "File &name:", 10);
    //     }else{
    //     var widowTitle = "Open"
    //     au.WinWait(widowTitle)
    //     console.log(widowTitle)
    //     au.WinWait(widowTitle, "File &name:", 10);
    //     au.ControlSetText(widowTitle, "", "[CLASS:Edit; INSTANCE:1]", "G:\\test.txt");
    //     au.ControlClick(widowTitle, "", "[CLASS:Button; INSTANCE:1]");
    //     au.WinWaitClose(widowTitle, "File &name:", 10);
    //     }
    //
    // },
    // 'Send Express delivery':function (client) {
    //     client
    //     // .waitForElementPresent('//*[@id="bds-uploader-panel"]/div[2]/table/tbody/tr"]', 5000)
    //     // .assert.containsText('class','success upload-success')
    //         .click('button[type="submit"]')
    // },
    // 'Sign Out':function (client) {
    //     client
    //         .useXpath().click("//a[text()='Sign out']")
    //     // .useCss()
    // },
    // // write : function(results, options, done) {
    // //     reporter.fn(results, done);
    // // },
    // // reporter:  reporter.fn,

    after : function(browser,done) {
        console.log('Closing up...'+browser.options.desiredCapabilities.browserName);
        browser
            .end();
        done();
    }
};