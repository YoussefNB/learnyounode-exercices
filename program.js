//6
/*const LocalModule = require('./localModule.js') 
var directory = process.argv[2];
var filter = process.argv[3];

const callbackFunction = (filteredArray) => {
  for (i = 0; i < filteredArray.length; i++) {
    console.log(filteredArray[i] + '\n')
  }
}
LocalModule.fct(directory,filter,(err,files) => callbackFunction(err,files))*/



//5
/*const fs = require('fs');
const _ = require('lodash')
var directory = process.argv[2];
var filter = process.argv[3];
console.log('Dir : ' + directory)
console.log('Filter : ' + filter)
fs.readdir(directory, (err, files) => {
  var filteredArray = _.remove(files, function (n) {
    return _.includes(n, filter);
  });
  for (i = 0; i < filteredArray.length; i++) {
    console.log(filteredArray[i] + '\n')
  }
})*/



//4
/*const fs=require('fs');
file=process.argv[2];
var data=fs.readFile(file,(err,data)=> {var res=data.toString().split('\n').length;
console.log(res-1);});*/



//3
/*const fs=require('fs');
file=process.argv[2];
var data=fs.readFileSync(file);
var res=data.toString().split('\n').length;
console.log(res-1);*/



//2
/*var sum = 0
for (var i = 2; i < process.argv.length; i++)
  sum += Number(process.argv[i])
console.log(sum)*/



//1
//console.log('HELLO WORLD')
