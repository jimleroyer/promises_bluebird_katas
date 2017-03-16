const express = require('express');
const app = express();
const Promise = require('bluebird');

const maio = require('./maio');
const gaia = require('./gaia');

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});

app.get('/', function (req, res) {
    res.send('Welcome to the katas around Promises!')
});

/*********************************** Katas ***********************************/

/**
 * The Promise katas are centered around the Bluebird implementation. For
 * reference of the API, refer to this page:
 * http://bluebirdjs.com/docs/api-reference.html
 */

/**
 * First Kata is to explore how a promise is created. How does it make resolution
 * or rejection happen?
 *
 * The task is to transform the maio#getTipsPromise function which receives a callback
 * into a function that returns a promise.
 */
app.get('/kata-01', function (req, res) {

    // This is the traditional way of handling async code via a callback. Let's comment
    // this and uncomment the next section.

    maio.getTipsCallback(function (error, response, body) {
        if (error) {
            res.send(`Error happened while calling service: ${error}`);
            return;
        }
        if (response.statusCode != 200) {
            res.send(`Non 200 response (${response.status}) while calling service: ${response}`);
            return;
        }

        res.json(JSON.parse(body));
    });

    // Uncomment the following to make it work with the promise, and modify the maio
    // service to return one.

    // const promise = maio.getTipsPromise();
    // promise.then(function (response) {
    //     res.send(response);
    // }).catch(function (error) {
    //     res.send(`Caught an error while trying to contact MAIO: ${error}`);
    // });
});

/**
 * Second kata is to see how we can sequence actions with the Promise API.
 */
app.get('/kata-02', function (req, res) {

    // 1- Get the tips from MAIO, then pick the 1st one only.
    // maio.getTipsPromise()...

    // 2- From the first tip, get its geo ID and get the geographic region
    //    with a call to GAIA: gaia.getRegion(geoId)

    // 3- Append the region name as a property to the 1st tip, then return
    //    the enriched tip back in the response.

    res.json({msg: 'Send back a response!'});
});

/**
 * Third kata is to launch parallel & async execution for each individual item
 * of a list.
 */
app.get('/kata-03', function (req, res) {

    // 1- Get all the tips from MAIO.
    // maio.getTipsPromise()...

    // 2- For each tip, create a promise...

    // 3- ...and for each of these promise, chain another promise to get the
    //    geographic region name: enrich the tip with the property of the
    //    region name under `geoName` field.

    // 4- Wait on all promises to end altogether, and combine them all into
    //    one.

    // 5- Send the list of enriched tips with geo name back to the client.

    res.json({msg: 'Send back a response!'});
});
