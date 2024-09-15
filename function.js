function addtwonumber(num1, num2){
    let firstnumber = num1
    let secondnumber = num2

    let total = firstnumber + secondnumber

    console.log(total);
    
}

addtwonumber(54, 75)
addtwonumber(20, 120)

function multiplythreenumber(num1, num2, num3){
    let firstnumber = num1
    let secondnumber = num2
    let thirdnumber = num3

    let answer = firstnumber * secondnumber * thirdnumber

    console.log(answer);
    
}

multiplythreenumber(2,4,6)

function generateRandomInRange(num){
    let rn = Math.random() * num

    console.log(rn);
    
}

generateRandomInRange(100)  

// Area = pi * r ^ 2

// function aoc(r){
//     let area = 3.142 * r ** 2

//     console.log(r);

//     aoc(23)
    
// }

// f2c = (32F -32) * 5/9
// let b = 5
// let c = a + b

// function f2c(F){
//     let result = 32 * F - 32 *5/9

//     console.log(result);   
// }

// f2c(12)

// function drive(age){
//     if(age >= 18){
//         console.log("You can drive");
//     }else{
//         console.log("You are not old enough to drive");
//     }
// }

// drive(110)

let countries = ['finland','germany','iceland','ireland']

// let countriesendwithland = countries.filter((ctry) => ctry.endsWith("land"))
// console.log(countriesendwithland);

let countriesendwithland = countries.find((ctry) => ctry.endsWith("land"))
console.log(countriesendwithland);

// let countriesendwithland = countries.some((ctry) => ctry.endsWith("land"))
// console.log(countriesendwithland);

// countries.forEach((ctry) =>console.log(ctry));
// countries.map((ctry) =>console.log(ctry));