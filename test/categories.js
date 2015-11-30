
var melilib = require('..');
var sl = require('simplelists');

exports['get site categories'] = function (test) {
    test.async();
    
    melilib.getSiteCategories('MLA', function (err, data) {
        test.ok(!err);
        test.ok(data);
        test.ok(Array.isArray(data));
        test.ok(data.length);
        
        sl.exist(data, { id: "MLA5725", name: "Accesorios para Vehículos" });
        sl.exist(data, { id: "MLA1071", name: "Animales y Mascotas" });
        sl.exist(data, { id: "MLA1051", name: "Celulares y Teléfonos" });
        
        test.done();
    });
}