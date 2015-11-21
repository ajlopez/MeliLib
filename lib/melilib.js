
'use strict';

var http = require('https');
var url = require('url');

// From liqueed project (no post data, cookies)

function doRequest(method, pageurl, cb) {
    var urldata = url.parse(pageurl);

    if (!cb) {
        cb = data;
        data = null;
    }

    var options = {
        host: urldata.hostname,
        port: urldata.port,
        path: urldata.path,
        method: method
    };

    var req = http.request(options, function(res) {
        var buffer = '';

        res.on('data', function(d) {
            var text = d.toString();
            buffer += text;
        });

        res.on('err', function(err) {
            cb(err);
        });

        res.on('end', function(d) {
            if (d) {
                var text = d.toString();
                buffer += text;
            }
            
            cb(null, buffer);
        });
    });

    req.end();
}

function getSites(cb) {
    doRequest('GET', 'https://api.mercadolibre.com/sites/', function (err, data) {
        if (err) return cb(err, null);
        
        try {
            cb(null, JSON.parse(data));
        }
        catch (ex) {
            cb(ex, null);
        }
    });
}

function getSite(siteId, cb) {
    doRequest('GET', 'https://api.mercadolibre.com/sites/' + siteId, function (err, data) {
        if (err) return cb(err, null);
        
        try {
            cb(null, JSON.parse(data));
        }
        catch (ex) {
            cb(ex, null);
        }
    });
}

function getCountries(cb) {
    doRequest('GET', 'https://api.mercadolibre.com/countries/', function (err, data) {
        if (err) return cb(err, null);
        
        try {
            cb(null, JSON.parse(data));
        }
        catch (ex) {
            cb(ex, null);
        }
    });
}

module.exports = {
    getSites: getSites,
    getSite: getSite,
    getCountries: getCountries
};
