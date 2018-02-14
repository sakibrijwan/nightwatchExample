'use strict';

var username='sarja1@nilavodev.com';
var password='1';

module.exports = {
    'Login to Admin Panel' : function (browser) {

        var login = browser.page.common.login();


        login.navigate()
            .signIn(username,password);

        browser.end();

    }
};