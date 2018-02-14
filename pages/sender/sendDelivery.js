
//'use strict';
var au = require('autoit');

function fileUpload(browser) {
    console.log('Bla bla...'+browser);
    if(browser=='firefox'){
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
}

module.exports = {

    url: '',



    elements: {
        composeDelivery: {
            selector: 'a[id=compose-delivery-link]'
        },
        recipientInput: {
            selector: 'input[id=token-input-recipientsToInput]'
        },
        subject: {
            selector: 'input[id=subject]'
        },
        uploadButton:{
            selector:'label[class="btn bds-upload-btn btn-default btn-sm"]',
            locateStrategy: 'css'
        },
        submit: {
            selector:'button[type=submit]'
        }
    },
    commands: [{
        compose:function (recipient) {
            return this
                .waitForElementVisible('@composeDelivery',80000)
                .click('@composeDelivery')
                .waitForElementVisible('@recipientInput',8000)
                .setValue('@recipientInput',recipient)
                .setValue('@subject','Hello Nightwatch')
                .click('.bds-upload-btn')
                // .saveScreenshot('./screenshots/compose.png')
        },

        uploadFileHTML:function(browser){
            fileUpload(browser)
        },
        send:function () {
            this.waitForElementVisible('@submit',8000)
            return this
                .click('@submit')
        },


    }]
};