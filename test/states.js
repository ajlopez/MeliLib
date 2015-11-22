
var melilib = require('..');
var sl = require('simplelists');

exports['get state'] = function (test) {
    test.async();
    
    melilib.getState("AR-B", function (err, data) {
        test.equal(err, null);
        test.ok(data);
        test.equal(data.id, "AR-B");
        test.equal(data.name, "Buenos Aires");
        test.ok(data.cities);
        test.ok(Array.isArray(data.cities));
        test.ok(data.cities.length);
        test.done();
    });    
};
