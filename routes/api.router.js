'use strict';

let routes = new Array();

const homeRoutes = require('./home.router');
const userRoutes = require('./user.router');

routes = routes.concat(homeRoutes);
routes = routes.concat(userRoutes);

routes.map((r) => {
    r.path = `/api/v1${r.path}`;
    return null;
});

module.exports = routes;