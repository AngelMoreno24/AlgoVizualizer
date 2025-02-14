import React from 'react'

const numberGen = (size) => {


    let array = [];
    
    for(let i=0;i<size;i++){
        
        array.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1);
    }


    return array;
}

export default numberGen
