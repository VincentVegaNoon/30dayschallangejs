//1. Exercises: Data types Part
    //1.1 Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it.
    let firstName = 'Jan'
    let lastName = 'Nowak'
    let country = 'Poland'
    let city = 'Warsaw'
    let age = '23'
    let isMarried = false
    let year = 1996
    //1.2 The JavaScript typeof operator uses to check different data types. Check the data type of each variables from question number 1.
    console.log(typeof firstName)
    console.log(typeof lastName)
    console.log(typeof country)
    console.log(typeof city)
    console.log(typeof age)
    console.log(typeof isMarried)
    console.log(typeof year)
    //1.3 Check if type of '10' is equal to 10
    let variable1 = 10
    let variable2 = 10
    console.log(variable1 === variable2)
    //1.4 Check if parseInt('9.8') is equal to 10
    let num = 9.8
    let numInt = parseInt(num)
    let num2 = 10
    console.log(num === num2)
//2. Exercises: Arithmetic Operators Part
    //2.1     Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
             /*Enter base: 20
            Enter height: 10
            The area of the triangle is 50*/
            let base = prompt('enter base')
            let height = prompt('enter height')
            let triangleArea = 0.5 * base * height
    //2.2 Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
            let a = prompt('enter a of triangle')
            let b = prompt('enter b of triangle')
            let c = prompt('enter c of triangle')
            let aInt = parseInt(prompt('enter a of triangle'))
            let bInt = parseInt(prompt('enter b of triangle'))
            let cInt = parseInt(prompt('enter c of triangle'))
            let perimeter = a + b + c
    //2.3 Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
            let lenght = prompt('enter lenght')
            let width = prompt('enter width')
            let perimeter = 2 * (lenght + width)
            let rectangleArea = lenght * width
    //2.4 Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
            const PI = 3.14
            let r = prompt('enter r')
            let circleArea = PI * r * r
            let circumferenceCircle = 2 * PI * r
    //2.5 Calculate the slope, x-intercept and y-intercept of y = 2x -2

    //2.9 Write a script that prompt a user to enters hours and rate per hour. Calculate pay of the person?
            let hours = prompt('enter hours')
            let ratePerHour = prompt('enter rate per hour')
            let pay = hours * ratePerHour
    //2.10 Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
            let years = prompt('enter your age')
            let seconds = years * 365 * 24 * 3600
//3. Exercises: Booleans Part
    //3.1 Write three JavaScript statement which provide truthy value.
            let isCarpetOnFloor = true
            let isComputerOn = true
            let isHungry = true
    //3.2 Write three JavaScript statement which provide falsy value.
            let myHealth = 0
            let imOld = ''
            let iWillEndThisChallange = false
//4. Exercises: Comparison Operators.
            4 > 3 //true
            4 >= 3 //true
            4 < 3 //false
            4 <= 3 //false
            4 == 4 //true
            4 === 4 //true
            4 != 4 //false
            4 !== 4 //false
            4 != '4' //false
            4 == '4' //false
            4 === '4' //false
    //4.1 Find the length of python and jargon and make a falsy comparison statement.
            let pN = 'python'
            let jN = 'jargon'
            console.log(pN.length)
            console.log(jN.length)
            pN.lenght != jN.lenght
//5. Exercises: Logical Operators
    //5.1Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
            4 > 3 && 10 < 12 // true and true -> true
            4 > 3 && 10 > 12 //true and false -> false
            4 > 3 || 10 < 12 //true and true -> true
            4 > 3 || 10 > 12 //true and false -> true
            !(4 > 3) //false
            !(4 < 3) //true
            !(false) //true
            !(4 > 3 && 10 < 12) //false and false -> false
            !(4 > 3 && 10 > 12) //false and true -> true
            !(4 === '4') //true
    //5.2 There is no 'on' in both dragon and python //false
//6. Ternary Operator
            //6.1 If the length of your name is greater than 7 say, your name is long else say your name is short.
            let name = prompt ('enter your name')
            name.length > 7 ? console.log(${name} your name is long) : console.log(${name} your name is short)
            //6.2 Compare your first name length and your family name length and you should get this output. 
            let firstName = 'Asabeneh'
            let lastName = 'Yetayeh'
            firstName.length > lastName.length ? console.log(${firstName} Your first name,  is longer than your family name, ${lastName}) : console.log(${lastName} Your last name is longer)
            //6.3 Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
            let myAge = 250
            let yourAge = 25
            myAge > yourAge ? console.log('I am' + (myAge - yourAge) + 'years older than you') : console.log('You are' + (yourAge - myAge) + 'years older than me')
            
            //7. Exercises: Date time Object
    //7.1 What is the year today?
        const now = new Date()
        console.log(now.getFullYear()) 
    //7.2 What is the month today as a number?
        const now = new Date()
        console.log(now.getMonth())
    //7.3 What is the date today?
        const now = new Date()
        console.log(now.getDate())
    //7.4 What is the day today as a number?
        const now = new Date()
        console.log(now.getDay())
    //7.5 What is the hours now?
        const now = new Date()
        console.log(now.getHours())
    //7.6 What is the minutes now?
        const now = new Date()
        console.log(now.getMinutes())
    //7.7 Find out the numbers of seconds elapsed from January 1, 1970 to now.
        const now = new Date() 
        console.log(now.getTime()) 
    //7.8 Create a human readable time format
        //7.8 a) YYY-MM-DD HH:mm:ss
            const now = new Date()
            const year = now.getFullYear() // return year
            const month = now.getMonth() + 1 // return month(0 - 11)
            const date = now.getDate() // return date (1 - 31)
            const hours = now.getHours() // return number (0 - 23)
            const minutes = now.getMinutes()
            const seconds = now.getSeconds()
            console.log(`${year}-${month}-${date}, ${hours}:${minutes}:${seconds}`)



    