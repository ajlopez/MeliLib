
var melilib = require('..');
var sl = require('simplelists');

exports['get sites'] = function (test) {
    test.async();
    
    melilib.getSites(function (err, data) {
        test.equal(err, null);
        test.ok(data);
        test.ok(Array.isArray(data));
        test.ok(sl.exist(data, { id: "MLA", name: "Argentina" }));
        test.done();
    });    
};

exports['get site'] = function (test) {
    test.async();
    
    melilib.getSite('MLA', function (err, data) {
        test.equal(err, null);
        test.ok(data);
        test.equal(data.id, "MLA");
        test.equal(data.name, "Argentina");
        test.equal(data.country_id, "AR");
        test.done();
    });    
};

