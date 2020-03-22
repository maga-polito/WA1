"use strict"

const myArr = ['Nuevo', 'Array', 'Politecnico', 'a']

myArr.forEach((str, index)=>{
    if(str.length>2){
        myArr[index] = str.substr(0,2)+str.substr(str.length-2,2)
    }else{
        myArr[index] = ''
    }  
})

console.log(myArr)