'use strict';

module.exports = {

    url: function() {
        return this.api.launchUrl + '/bds';
    },
    elements: {
        usernameField: {
            selector: 'input[name=username]'
        },
        passwordField: {
            selector: 'input[name=password]'
        },
        submit: {
            selector: 'button[type=submit]'
        }
    },
    commands: [{
        signIn: function(username,password) {
            // this.api.pause(5000)
            this.waitForElementVisible('body', 8000)
            return this
                .setValue('@usernameField', username)
                .setValue('@passwordField', password)
                .click('@submit')
        },

        serverConfig: function () {
            return this
                .click('server');
        }

    }]
};