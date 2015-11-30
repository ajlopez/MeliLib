
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

exports['get category'] = function (test) {
    test.async();
    
    melilib.getCategory('MLA5725', function (err, data) {
        test.ok(!err);
        test.ok(data);

        test.equal(data.id, 'MLA5725');
        test.equal(data.name, "Accesorios para Vehículos");
        
        test.ok(data, data.children_categories);
        test.ok(Array.isArray(data.children_categories));
        test.ok(data.children_categories.length);
        
        sl.all(data.children_categories, function (cat) { return cat.id && cat.name && cat.total_items_in_this_category; });
        
        test.done();
    });
}