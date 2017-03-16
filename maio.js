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
        return new Promise((resolve, reject) => {
            request(`${MAIO_URL}/v1/content/tips`,
                requestOptions,
                function (error, response, body) {
                    if (error) {
                        reject(`Could not connect to the MAIO server: ${error}`);
                    }
                    if (response.statusCode != 200) {
                        reject(`Non successful response (${response.statusCode}) from the MAIO server: ${body}`);
                    }

                    resolve(JSON.parse(body));
                });
        });
    }

}

module.exports = new Maio();
