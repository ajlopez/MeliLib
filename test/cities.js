
var melilib = require('..');
var sl = require('simplelists');

exports['get city'] = function (test) {
    test.async();
    
    melilib.getCity("TUxBQ1FVSWI1MzY", function (err, data) {
        test.equal(err, null);
        test.ok(data);
        test.equal(data.id, "TUxBQ1FVSWI1MzY");
        test.equal(data.name, "Quilmes");
        
        test.equal(data.state.id, "AR-B");
        test.equal(data.state.name, "Buenos Aires");
        
        test.equal(data.country.id, "AR");
        test.equal(data.country.name, "Argentina");
        
        test.ok(data.geo_information.location.latitude);
        test.ok(data.geo_information.location.longitude);
        
        test.done();
    });    
};
