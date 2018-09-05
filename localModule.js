const fs = require('fs');
const _ = require('lodash');

const fct = (dir, filter, callback) => {
    filterExtension = '.' + filter;
    fs.readdir(dir, (err, files) => {
        var filteredArray = _.remove(files,function(n) {
            return _.includes(n,filterExtension)
        })
        callback(filteredArray)
    })
}
module.exports = {
    fct
}