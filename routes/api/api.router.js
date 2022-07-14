'use strict';

let routes = new Array();

const user_api_routes = require('./user.api.router');

routes = routes.concat(user_api_routes);

routes.map((r) => {
    r.path = `/api/v1${r.path}`;
    return null;
});

module.exports = routes;