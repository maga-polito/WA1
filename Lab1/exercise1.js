"use strict"
let tasks = []
while(true){
    let readlineSync = require('readline-sync'),
    menu = ['Insert a new task', 'Remove a task', 'Show all existing tasks, in alphabetic order', 'Close the program'],
    index = readlineSync.keyInSelect(menu, 'What do you want to do?');
    console.log(`You selected, ${menu[index]}`);
    if(index==0){
        // a textual description (mandatory)
        let description = readlineSync.question('Insert task description\n');
        // • whether it is urgent or not (default to “not urgent”)
        let urgent = readlineSync.keyInYN('Is it urgent?\n'); // No colon
        // • whether it is a private or a shared task (default to “private”)
        let isPrivate = readlineSync.keyInYN('Is it private?\n'); // No colon
        // • a deadline (i.e., a date with or without a time, optional)
        let deadline = readlineSync.question('Insert Deadline in format mm-dd-yyyy\n');
        tasks.push({
            description: description,
            urgent: urgent,
            private: isPrivate,
            deadline: new Date(deadline)
        })
    }
    if(index==1){
        let taskToRemove = readlineSync.question('Insert the description for the task you want to delete\n');
        tasks.forEach((task, index)=>{
            if(taskToRemove == task.description){
                console.log('task found')
                tasks.splice(index,1)
            }
        })
    }
    if(index==2){
        console.log(tasks)
    }
    if (index==3){
        break
    }
}

