const express = require('express');
const app = express();
const Promise = require('bluebird');

const maio = require('./maio');

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
 * The task is to transform the maio#getTips function which receives a callback
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
