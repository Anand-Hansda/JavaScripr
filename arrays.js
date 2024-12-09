// const myArr = [0,3,5,8,1,6]

// const heros = ["hulk", "Thor", "Shaktiman", "Ironman"]


// const myArr2 = new Array(1, 2, 3, 4)


// ///// Array methods /////////////////////

// myArr.push(9)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(5));
// console.log(myArr.indexOf(3))

// const newArr = myArr.join()
// console.log(myArr)
// console.log(newArr)




// ///slice, splice


// console.log("A", myArr)
// const myn1 = myArr.slice(1, 3)

// console.log(myn1)
// console.log("B", myArr)



const marval_heros =["thor", "ironman", "hulk", "caption"]
const dc_heros = ["flash", "batman", "superman"]

// marval_heros.push(dc_heros)


const allHeros = [...marval_heros, ...dc_heros]

console.log(allHeros)


const another_arry =[1,2,3,[4,5,6],7,[6,7[4,5]]]
const real_another_arry = another_arry.flat()