'use strict';

const request = require('request');
const Promise = require('bluebird');

const MAIO_URL = "https://maio-repository-service.us-west-2.int.expedia.com";
const requestOptions = {
    timeout: 10000
};

/**
 * Interfaces with Expedia MAIO repository.
 */
class Maio {

    /**
     * Get traveling tips.
     *
     * @param callback A function that will receive these parameters: error, response, body.
     */
    getTipsCallback(callback) {
        request(`${MAIO_URL}/v1/content/tips`,
            requestOptions,
            callback);
    }

    getTipsPromise() {
        // 1- Create promise here
        // ...

        request(`${MAIO_URL}/v1/content/tips`,
            requestOptions,
            function (error, response, body) {
                if (error) {
                    // 2- Reject promise
                    // ...
                }
                if (response.statusCode != 200) {
                    // 3- Reject promise
                    // ...
                }

                // 4- Resolve promise
                // JSON.parse(...)
            });

        // 5- Don't forget to return the promise!
    }

}

module.exports = new Maio();
