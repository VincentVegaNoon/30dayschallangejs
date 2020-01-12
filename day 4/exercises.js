//1.Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:You are old enough to drive but if not 18 give feedback to wait for the years he supposed to wait for.

let userAge = prompt('enter your age')
18 <= userAge ? console.log('You are old enough to drive.') : console.log('You are left with 3 years to drive.')

//2.Compare the values of myAge and yourAge using if … else. Based on the comparison log to console who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
let yourAge = prompt('enter your age')
let myAge = 30
if (myAge > yourAge)  {console.log('You are ' + (myAge - yourAge) +  'years younger than me')} else {console.log('You are' + (yourAge - myAge) + 'years older than me')}
//3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement in to ways
let aBlock = 4
let bBlock = 3
if (aBlock > bBlock) {console.log(aBlock + ' is greater than ' + bBlock)} else {console.log(bBlock + ' is greater than ' + aBlock)}
//3.1
let aBlock = 4
let bBlock = 3
aBlock > bBlock ? console.log(aBlock + ' is greater than ' + bBlock) : console.log(bBlock + ' is greater than ' + aBlock)
//4.Even numbers are divisible by 2 and the remainder is zero. How do you check if a number is even or not using JavaScript?
let number = prompt('enter number')
if (number % 2 == 0) {console.log(number + ' is even number')} else {console.log(number + ' is is an odd number')} 
//5.Write a code which can give grade to students according to theirs scores:
let yourScore = prompt('enter your score')
if (yourScore >100) {console.log('wrong score, try agian')}
else if (yourScore >= 80) {console.log('for ' + yourScore + ' u get A')}
else if (yourScore >= 70) {console.log('for ' + yourScore + ' u get B')}
else if (yourScore >= 60) {console.log('for ' + yourScore + ' u get C')}
else if (yourScore >= 50) {console.log('for ' + yourScore + ' u get D')}
else if (yourScore < 50) {console.log('for ' + yourScore + ' u get F')}
//6. Check if the season is Autumn, Winter, Spring or Summer.
let month = prompt('enter month')
if (month === 'September') {console.log('the season is Autumn')}
else if (month === 'October') {console.log('the season is Autumn')}
else if (month === 'November') {console.log('the season is Autumn')}
else if (month === 'December') {console.log('the season is Winter')}
else if (month === 'January') {console.log('the season is Winter')}
else if (month === 'February') {console.log('the season is Winter')}
else if (month === 'March') {console.log('the season is Spring')}
else if (month === 'April') {console.log('the season is Spring')}
else if (month === 'May') {console.log('the season is Spring')}
else if (month === 'June') {console.log('the season is Summer')}
else if (month === 'July') {console.log('the season is Summer')}
else if (month === 'August') {console.log('the season is Summer')}
//7.Check if a day is weekend day or a working day. Your script will take day as an input.
let day = prompt('What is the day is today?')
if (day === 'Monday') {console.log('Monday is a working day.')}
else if (day === 'Tuesday') {console.log('Tuesday is a working day.')}
else if (day === 'Wednesday') {console.log('Wednesday is a working day.')}
else if (day === 'Thursday') {console.log('Thursday is a working day.')}
else if (day === 'Friday') {console.log('Friday is a working day.')}
else if (day === 'Saturday') {console.log('Saturday is a weekend day.')}
else if (day === 'Sunday') {console.log('Sunday is a weekend day.')}
//8.Write a program which tells the number days in a month.
let month = prompt('Enter Month')
if (month === 'january') {console.log('January has 31 days')}
else if (month === 'february') {console.log('February has 28 days')}
else if (month === 'march') {console.log('march has 31 days')}
else if (month === 'april') {console.log('april has 30 days')}
else if (month === 'may') {console.log('may has 31 days')}
else if (month === 'june') {console.log('june has 30 days')}
else if (month === 'july') {console.log('july has 31 days')}
else if (month === 'august') {console.log('august has 31 days')}
else if (month === 'september') {console.log('september has 30 days')}
else if (month === 'october') {console.log('october has 31 days')}
else if (month === 'november') {console.log('november has 30 days')}
else if (month === 'december') {console.log('december has 31 days')}









