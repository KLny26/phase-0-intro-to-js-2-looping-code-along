const newArr = [];


function writeCards(names, event){
    for (let i = 0; i < names.length; i++){
        
    newArr.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        debugger;
    }
    return newArr
}

function countDown(init = 10) {
    while (init >= 0) {
        console.log(init--);
    }
}