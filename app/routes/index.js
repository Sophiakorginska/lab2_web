/**
 * Created by Sofia on 05.12.2017.
 */

const noteRoutes = require('./note_routes');
const noteRoutes2 = require('./note_routes2');
module.exports = function(app, db) {
    noteRoutes(app, db);
    noteRoutes2(app, db);
};