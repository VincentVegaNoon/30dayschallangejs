//1.1 Iterate 0 to 10 using for loop, do the same using while and do while loop
for (let i = 0; i <= 10; i++) {
    console.log(i)
}

let i = 0
while (i <= 10) {
    console.log(i)
    i++
}

let i = 0
do {
    console.log(i)
    i++
} while (i <= 10)
//1.2 Iterate 10 to 0 using for loop, do the same using while and do while loop
for (let i = 10; i >= 0; i--) {
    console.log(i)
}

let i = 10
while (i >= 0) {
    console.log(i)
    i--
}

let i = 10
do {
    console.log(i)
    i--
} while (i >= 0)

//1.3 Iterate 0 to n using for loop
let n = prompt('enter number')
for (let i = 0; i <= n; i++) {
    console.log(i)
}
//1.4 Write a loop that makes the following pattern using console.log():
let emptyValue = ''
for (let i = 0; i < 7; i++) {
    let emptyValueWithHash = '#'
    console.log((emptyValue = emptyValue + emptyValueWithHash
    ))
}
//1.5 Use loop to print the following pattern:
for (let i = 0; i <= 10; i++) {
    console.log(`${i} x ${i} = ${i * i}`)
}
//1.6 Using loop print the following pattern
let firstValue = 'i    i^2   i^3'
for (let i = 0; i <= 10; i++) {
    console.log(firstValue)
    firstValue = (`${i}   ${i * i}   ${i * i * i}`)
}
//1.7 Use for loop to iterate from 0 to 100 and print only even numbers
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) { console.log(i) }
}
//1.8 Use for loop to iterate from 0 to 100 and print only odd numbers
for (let i = 0; i <= 100; i++) {
    if (i % 2 != 0) { console.log(i) }
}
//1.9 Use for loop to iterate from 0 to 100 and print only prime numbers
/*for (let i = 2; i <= 100; i++) {
    let isPrime = true;
    for let (j = 2; j <=i; j++) {
        if (i % j === 0 && i ! === j) {
            isPrime = false;
        }
    }
    if (isPrime === true) {
        console.log(i);
    }
}*/
//1.10 Use for loop to iterate from 0 to 100 and print and print the sum of all numbers
let sum = 0
for (let i = 0; i < 100; i++) {
    sum++;
    sum = sum + i;
    console.log(sum)
}
//1.11 Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let even = 0;
let odd = 0;
for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        even++;
        even = even + i;
        if (i >= 98) {
            console.log(`even(parzyste) ${even}`)
        }
    } else {
        odd++;
        odd = odd + i;
        if (i >= 99) {
            console.log(`odd(nieparzyste) ${odd}`)
        }
    }
}
//1.12 Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
let even = 0;
let odd = 0;
for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        even++;
        even = even + i;
        if (i >= 98) {
            console.log(`even(parzyste) ${even}`)
        }
    } else {
        odd++;
        odd = odd + i;
        if (i >= 99) {
            console.log(`odd(nieparzyste) ${odd}`)
        }
    }
}
const arr = [even, odd]
console.log(arr)
/* let numbersArray = [0,0];
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        numbersArray[0] = numbersArray[0] + i;
    } else {
        numbersArray[1] = numbersArray[1] + i;
    }
}
console.log(numbersArray)*/

//1.13 Develop a small script which generate array of 5 random numbers
let arr = []
for (let i = 1; i <= 5; i++) {
    let random = Math.floor(Math.random() * 9)
    arr.push(random)
}
console.log(arr)

//1.14 Develop a small script which generate array of 5 random numbers and the numbers must be unique
let randomArray = [];
while (randomArray.length < 5) {
    let randomNumber = Math.floor(Math.random() * 10);
    if (!randomArray.includes(randomNumber)) {
        randomArray.push(randomNumber)
    }
}
console.log(randomArray)
//1.15 Develop a small script which generate a six characters random id:
let randomArray = [];
let randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
for (let i = 0; i <= 5; i++) {
    let randomChar = Math.floor(Math.random() * randomChars.length)
    randomArray.push(randomChars[randomChar])
}
console.log(randomArray.join(""))
//2.1 Develop a small script which generate any number of characters random id:
let randomArray = [];
let randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let randomNumber = Math.floor(Math.random() * 30)
for (let i = 0; i <= randomNumber; i++) {
    let randomChar = Math.floor(Math.random() * randomChars.length)
    randomArray.push(randomChars[randomChar])
}
//2.2 Write a script which generates a random hexadecimal number.
let letters = '0123456789ABCDEF'
let randomArray = ['#'];
for (let i = 0; i <= 6; i++) {
    let randomIndex = Math.floor(Math.random() * letters.length)
    randomArray.push(letters[randomIndex])
} console.log(randomArray.join(""))
//2.3 Write a script which generates a random rgb color number
let red = ''
let green = ''
let blue = ''
 red = Math.floor(Math.random() * 255)
 green = Math.floor(Math.random() * 255)
 blue = Math.floor(Math.random() * 255)
 console.log(`rgb(${red},${green},${blue})`)
//2.4 Using the above countries array, create the following new array.
let countries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
//2.5 Using the above countries array, create an array for countries length'.
const countries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
let numCountries = []
for (i = 0; i < countries.length; i++) {
numCountries.push(countries[i].length)   
  }
console.log(numCountries)
//2.6 Use the countries array to create the following array of arrays:


  

