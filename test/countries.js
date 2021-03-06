
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

exports['get country'] = function (test) {
    test.async();
    
    melilib.getCountry("AR", function (err, data) {
        test.equal(err, null);
        test.ok(data);
        test.equal(data.id, "AR");
        test.equal(data.name, "Argentina");
        
        test.ok(data.states);
        test.ok(Array.isArray(data.states));
        test.ok(data.states.length);
        
        test.done();
    });    
};
