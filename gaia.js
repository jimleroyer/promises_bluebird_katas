'use strict';

const request = require('request-promise');
const Promise = require('bluebird');

const GAIA_URL = "http://gaiaro.int.expedia.com";
const requestOptions = {
    timeout: 10000
};

/**
 * Interfaces with Expedia GAIA API.
 */
class Gaia {

    /**
     * Gets a geographic region.
     *
     * @param geoId Region ID
     * @returns {string} Region name
     */
    getRegionName(geoId) {
        /**
         * Gets the geo name out of a GAIA response.
         */
        function getGeoName(gaiaResponse) {
            const json = JSON.parse(gaiaResponse);
            const name = json.name;
            const geoName = name.split(',')[0];
            return geoName;
        }

        const gaiaUrl = `${GAIA_URL}/features/${geoId}?cid=CAPS&apk=PROMISE_TUTO`;
        return request(gaiaUrl, requestOptions).then(function (gaiaResponse) {
            return getGeoName(gaiaResponse);
        });
    }

}

module.exports = new Gaia();
