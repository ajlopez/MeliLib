
var melilib = require('..');
var sl = require('simplelists');

exports['get countries'] = function (test) {
    test.async();
    
    melilib.getCountries(function (err, data) {
        test.equal(err, null);
        test.ok(data);
        test.ok(Array.isArray(data));
        test.ok(sl.exist(data, { id: "AR", name: "Argentina" }));
        test.done();
    });    
};
