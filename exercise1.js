"use strict"
let tasks = []
while(true){
    let readlineSync = require('readline-sync'),
    menu = ['Insert a new task', 'Remove a task', 'Show all existing tasks, in alphabetic order', 'Close the program'],
    index = readlineSync.keyInSelect(menu, 'What do you want to do?');
    console.log('Ok, ' + menu[index] + ' is your selected option.');
    if(index==0){
        // a textual description (mandatory)
        var description = readlineSync.question('Insert task description');
        // • whether it is urgent or not (default to “not urgent”)
        var urgent = readlineSync.keyInYN('Is it urgent?'); // No colon
        // • whether it is a private or a shared task (default to “private”)
        var private = readlineSync.keyInYN('Is it private?'); // No colon
        // • a deadline (i.e., a date with or without a time, optional)
        var deadline = readlineSync.question('Insert Deadline in format mm-dd-yyyy');
    }
    if(index==1){
    }
    if(index==2){
    }
    if (index==3){
        break
    }
}



// readlineSync.promptCLLoop({
//     add: function(element) {
//       console.log(element + ' is added.');
//     },
//     copy: function(from, to) {
//       console.log(from + ' is copied to ' + to + '.');
//     },
//     bye: function() { return true; }
//   });
//   console.log('It\'s exited from loop.');