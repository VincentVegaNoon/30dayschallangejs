// 1.1 Declare an empty array; [✅] [❌] [❓]
// const arr = Array()
// console.log(arr)

// 1.2 Declare an array with more than 5 number of elements [✅]
// const fruits = ['banana', 'orange', 'mango', 'lemon', 'apple']

// 1.3 Find the length of your array [✅]
// const fruits = ['banana', 'orange', 'mango', 'lemon', 'apple']
// console.log(fruits.length)

// 1.4 Get the first item, the middle item and the last item of the array [✅]
// const fruits = ['banana', 'orange', 'mango', 'lemon', 'apple']
// console.log(fruits[0])
// console.log(fruits[2])
// console.log(fruits[4])

// 1.5 Declare an array called mixedDataTypes,put different data types in your array and find length of the array. You are should size be greater than 5 [❓]
// const arr = ['Asabeneh', 250, true, 'Finland', 'apple', 2.5, 'Warsaw', 'Null',]

// 1.6 Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon [❌]
// const itCompanies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'

// 1.7 Print the array using console.log() [✅]
// console.log(itCompanies)

// 1.8 Print the number of companies in the array
// console.log('Number of companies:', itCompanies.length) [✅]

// 1.9 Print the first company, middle and last company [✅]
// console.log(itCompanies[0])
// console.log(itCompanies[3])
// console.log(itCompanies.length - 1)

// 1.10 Print out each company [✅]
// console.log(itCompanies.join())

// 1.11 Change each company name to uppercase one by one and print them out [❌]
// console.log(itCompanies.toUpperCase())

// 1.12 Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies. [❌]
// console.log(itCompanies.join(' '))

// 1.13 Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found [❌]
// const itCompanies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' 
// if(index != -1){
//     console.log('Company not found')  
//  } else {
//      console.log('Company not found')
//  }

// 1.14 Filter out companies which have more than one 'o' without the filter method [❓]

// 1.15 Sort the array using sort() method [✅]
// itCompanies.sort()

// 1.16 Reverse the array using reverse() method [✅]
// itCompanies.reverse()

// 1.17 Slice out the first 3 companies from the array [❌]
// const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
// console.log(itCompanies.sclice(0,2))

// 1.18 Slice out the last 3 companies from the array [❌]
// const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
// console.log(itCompanies.sclice(4,6))

// 1.19 Slice out the middle IT company or companies from the array [❌][❓]
// const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
// console.log(itCompanies.sclice(3,3))

// 1.20 Remove the first IT company from the array [❓]
// const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
// console.log(itCompanies.splice(0,1))

// 1.21 Remove the middle IT company or companies from the array [❌][❓]
// const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
// console.log(itCompanies.splice(3,4))

// 1.22 Remove the last IT company from the array [❌]
// const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
// console.log(itCompanies.splice(6,6))

// 1.23 Remove all IT companies [❌]
// const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
// console.log(itCompanies.splice())

// 2.1 Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js ans store the webTechs array in to this file. Access both file in main.js file [✅][❓]
// const countries = ['Albania','Bolivia','Canada','Denmark','Ethiopia','Finland','Germany','Hungary','Ireland','Japan','Kenya']
// const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Python']
// const main = [countries, webTechs]

// 2.2 First remove all the functions and change the string to array and count the number of words in the array [✅]
// let textString = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// const text = textString.split(' ')
// console.log(text.length)

// 2.3 In the following shopping cart add, remove, edit items [✅]
// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// shoppingCart.unshift('meat')
// shoppingCart.push('sugar')
// shoppingCart.pop()
// shoppingCart[2] = 'GreenTea'

// 2.4 In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list. [✅][❓]
// const countrie = ['Albania','Bolivia','Canada','Denmark','Ethiopia','Finland','Germany','Hungary','Ireland','Japan','Kenya']
// let countries = countrie.indexOf('Ethiopia')
// if(countries !== -1){
//     console.log('Exist')  
//  } else {
//     countrie.push('Ethipoia')
//  }

// 2.5 In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array. [❌][❓]
//  const webTech = ['HTML','CSS','JavaScript','React','Redux','Node','MongoDB']
//  let webTechs = webTech.indexOf('Sass')
// if(webTechs !== -1){
//     console.log('Sass is a CSS preprocess')  
//  } else {
//     webTech.push('Sass')
//  }
//  console.log(webTechs)

// 2.6 Concatenate the following two variables and store it in a fullStack variable [❌]
// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node','Express', 'MongoDB']
// const fullStack = [frontEnd, backEnd]
// console.log(fullStack)

// 3.1 The following is an array of 10 students ages [❌][✅]
// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// // Sort the array and find the min and max age
// ages.sort()
// console.log(ages) 

