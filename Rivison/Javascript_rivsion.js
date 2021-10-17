
let data = [
    { name: "shubham", age: 25 },
    { name: "vaibhav", age: 30 },
    { name: "dhanjay", age: null },
    { name: "dipak", age: undefined },
    { name: null, age: undefined },
]

const newAge = data.filter((elem) => {
    // console.log(elem.age)
    return elem.age > 26
})

// console.log(newAge)

let array = [10, 5, 20, 41, 2, 6, 89, 35]

let array1 = array.filter((elem) => {
    // console.log(elem)
    return elem < 15
})

// console.log(array1)

// *****************************************************


const array3 = [5, 16, 12, 50, 45, 30]

const newarray = array3.find((elem) => {
    return elem > 12
})

// console.log(newarray)

// ****************************************************************

let name = ["shubham", "vaibav", "dhanjay", "harshal", "hii"]

// name.map((elem)=>{
//     console.log(elem)
// })

// for (let i = 0; i < name.length; i++) {
//     const element = name[i];
//     console.log(element)
// }

// for (const iterator of name) {
//     console.log(iterator)
// }


// ****************************************************************************


const test = () => {
    let a = 55
    let b = 20


    // let c = a
    // a = b
    // b = c

    // a = a + b
    // b = a - b
    // a = a - b


    console.log("a is = ", a)
    console.log("b is = ", b)
}

// test()

// *******************************************************************

let numbers = [1, 2, 3, 4]
let total = numbers.reduce((sum, current) => sum + current, 0)
let avaerage = total / numbers.length
// console.log(avaerage)


let num = [1, 2, 3, 4]
let arratavg = num.reduce((sum, curr, index, array) => {
    let sum1 = sum + curr
    if (index == array.length - 1) {
        let avg = sum1 / num.length
        return avg
    }
    return sum1
})
// console.log(arratavg)



let list = [
    ["name1", "name2"],
    ["name3", "name4"],
    ["name5", "name6"],
    ["name7", ["name5", "name6"],],
]

let listitems = list.reduce((prev, curr) => {
    return prev.concat(curr)
})

// console.log(list)
// console.log(listitems)


let list1 = [
    ["name1", "name2"],
    ["name3", "name4"],
    ["name5", "name6"],
    // ["name7",["name5",["name5","name6"],],],
]

let value = list1.flat()
// console.log(value)

// ************************************************************

let names = ["vinod", "badhur", "thhapa", 'SHUBHAM']

// let newnames = names.splice(names.length,0,"thapatechnical")
// let newnames = names.splice(1,1,"Thapatechnical")
let newnames = names.splice(2, 1)

// console.log(names)
// console.log(newnames)


// ************************************

let listitem = [50, 20, 80, 45, 60]

let findvalue = listitem.sort().reverse()
// console.log(findvalue)

// console.log(findvalue[2])


// *********************************************

let string5 = "welcome to javascrtpt"

function reversewords(s) {
    return s.split(" ").reverse().join(" ")
}

// console.log(reversewords(string5))

// ***************************************************

const arrayall =[
    {name:"SHubham", rollno:01},
    {name:"vaibhav", rollno:02},
    {name:"dhanjay", rollno:03}
]

let people = []


console.log(people.push(arrayall))
console.log( people )

let singlearray = {}

// let doublearray = {name:"shubham", age:23}
// singlearray.gender = doublearray

// console.log(singlearray)


