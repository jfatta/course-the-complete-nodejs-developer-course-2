console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

// console.log(_.isString(true));
// console.log(_.isString('jorge'));
var filteredArray = _.uniq(['jorge', 1, 'jorge', 1, 2, 3, 4]);
console.log(filteredArray);

// var res = notes.add(6, -4);
// console.log('Result:',res);
// var user = os.userInfo();



// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}`, function(err){
//     if (err){
//         console.log('Unable to write to file');
//     } 
// });