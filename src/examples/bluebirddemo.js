// var fs = require('fs');
// var Promise = require('bluebird');

// var readFileAsync = function(name){
//     return new Promise(function(resolve, reject){
//         fs.readFile(name, function(err, data){
//             console.log(err, data, name)
//
//             if(err) {
//                 reject(err);
//             } else {
//                 resolve(data);
//             }
//         });
//     })
// }

// readFileAsync('static/1.txt')
//     .then(function(data1){
//         console.log(data1);
//         return readFileAsync('static/2.txt');
//     })
//     .then(function(data2){
//         console.log(data2);
//     })
//     .catch(function(err){
//         console.error(err)
//     })

var fs = require('fs');
var Promise = require('bluebird');
var readFileAsync = Promise.promisify(fs.readFile)

readFileAsync('static/1.txt')
    .then(function(data1){
        console.log(data1);
        return readFileAsync('static/2.txt');
    })
    .then(function(data2){
        console.log(data2);
    })
    .catch(function(err){
        console.error(err)
    })

