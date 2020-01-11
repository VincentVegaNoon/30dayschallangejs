//1.Declare a variable name challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = '30 Days Of JavaScript'
//2.Print the string on the browser console using console.log()
console.log(challenge)
//3.Print the length of the string on the browser console using console.log()
console.log(challenge.length)
//4.Change all the string to capital letters using toUpperCase() method
console.log(challenge.toUpperCase())
//5.Change all the string to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase())
//6.Cut(slice) out the first word of the string using substr() or substring() method
console.log(challenge.substr(3,4))
console.log(challenge.substring(3,7))
//7.Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript
console.log(challenge.substring(3,))
//8.Use substr to slice out the phase because because because in the following sentence:'You cannot end a sentence with because because because is a conjunction
let because = 'You cannot end a sentence with because because because is a conjunction'
console.log(because.substr(31,23))
//9.Check if the string contains a word Script using includes() method
console.log(challenge.includes('Script'))
//10.Split the string into array using split() method
console.log(challenge.split())
//11.Split the string 30 Days Of JavaScript at the space using split() method
console.log(challenge.split(' '))
//12.'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(companies.split(','))
//13. Change 30 Days Of JavaScript to 30 Days Of Python using replace() method
console.log(challenge.replace('JavaScript', 'Python'))
//14.What is character at index 15 in '30 Days Of JavaScript' string use charAt() method
console.log(challenge.charAt(15))
//15.What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challenge.charCodeAt(11))
//16.Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challenge.indexOf('of'))
//17.Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf('of'))
//18.Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let because = 'You cannot end a sentence with because because because is a conjunction'
console.log(because.indexOf('because'))
//19.Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(because.lastIndexOf('because'))
//20.Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(because.search('because'))
//21.Use trim() to remove if there is trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
let spaceJava = ' 30 Days Of JavaScript '
console.log(spaceJava.trim(' '))
//22.Use startsWith() method with the string 30 Days Of JavaScript make the result true
console.log(challenge.startsWith('30'))
//23.Use endsWith() method with the string 30 Days Of JavaScript make the result true
console.log(challenge.endsWith('JavaScript'))
//24.Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(challenge.match(/a/gi))
//25.Use match() to count the number all because's in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(because.match(/because/gi))
//26.Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let chall = ""
console.log(chall.concat('30 Days of', ' JavaScript'))
//27.Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(challenge.repeat(2))
//28.** 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let love = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(love.split('love').length)
//29.** Calculate the total annual income of the person by extract the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let income = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let salary = 5000;
let annualBonus = 10000;
let onlineCourses = 15000;
console.log('Total annual income: ' + (salary * 12 + annualBonus + onlineCourses * 12));
//30.** Clean the following text and find the most frequent word(hint, use replace and regular express).
//31. Using console.log() print out the following statement.
//The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help to one another.
console.log(`'There is no exercise better for the heart than reaching down and lifting people up.'by John Holmes teaches us to help to one another.`)
//32.Using console.log() print out the following quote by Mother Teresa.
//"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")
//33.Check if 'on' is found in both python and jargon
let pJ = 'python and jargon'
console.log(pJ.includes('on'))
//34.I hope this course is not full of jargon. Check if jargon is in the sentence.
let sentence = 'I hope this course is not full of jargon'
console.log(sentence.includes('jargon'))
//35.Generate a random number between 0 and 100 inclusive.
Math.floor(Math.random() * 101)
//36.Generate a random number between 50 and 100 inclusive
Math.floor(Math.random() * 51) + 50
//37.Generate a random number between 0 and 255 inclusive
Math.floor(Math.random() * 256)
//38.Access the 'JavaScript' string characters using a random number
let js = 'JavaScript'
Math.floor(Math.random() * js.length)
//39.Use console.log() and escape characters to print the following pattern
console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125\n')
//.40 Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

//.41 Check if parseInt('9.8') is equal to 10 if not make it exactly equal with 10.
