
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

function doJsonRequest(method, pageurl, cb) {
    doRequest(method, pageurl, function (err, data) {
        if (err) return cb(err, null);
        
        try {
            cb(null, JSON.parse(data));
        }
        catch (ex) {
            cb(ex, null);
        }
    });
}

function getSites(cb) {
    doJsonRequest('GET', 'https://api.mercadolibre.com/sites/', cb);
}

function getSite(siteId, cb) {
    doJsonRequest('GET', 'https://api.mercadolibre.com/sites/' + siteId, cb);
}

function getCountries(cb) {
    doJsonRequest('GET', 'https://api.mercadolibre.com/countries/', cb);
}

module.exports = {
    getSites: getSites,
    getSite: getSite,
    getCountries: getCountries
};
