/**
 * Created by Sofia on 05.12.2017.
 */
var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {
    app.post('/news', function(req, res){
        console.log(req.body);
        res.send(req.body)
    });
};

module.exports = function(app, db) {
    app.get('/news/:id', function(req, res){
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        db.collection('news').findOne(details, function(err, item){
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                res.send(item);
            }
        });
    });

    app.post('/news', function(req, res){
        const note = { text: req.body.body, title: req.body.title,img: req.body.img };
        db.collection('news').insert(note, function(err, result){
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(result.ops[0]);
            }
        });
    });
};



