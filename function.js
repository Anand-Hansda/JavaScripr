function sayMyName(){
    console.log("A");
    console.log("N");
    console.log("A");
    console.log("N");
    console.log("D");
}

// sayMyName()

// function add(number1, number2){
//     console.log(number1 + number2)

// }
function add(number1, number2){
    
    let result = number1 + number2
    return result
}

const result = add(3,5)
// console.log("Result", result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("Plese enter a username");
        return
    }
    return `${username} Just loged in`
}

console.log(loginUserMessage("Harry"))

