//1.1 Declare a function fullName and it print out your full name
function generateFullName (){
    let firstName = 'Jan'
    let lastName = 'Owczarczyk'
    let space = ' '
    let fullName = firstName + space + lastName
    return fullName
}
console.log(generateFullName())
//1.2 Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`
}
console.log(fullName('Jan', 'Owczarczyk'))
//1.3 Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers() {
let numOne = 10
let numTwo = 20
let sum = numOne + numTwo

console.log(sum)
}
addNumbers()
//1.4 An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function rectangle() {
    let length = 10
    let width = 6
    let area = length * width
    
    console.log(area)
}
rectangle()
//1.5 A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle() {
    let length = 10
    let width = 6
    let perimeter = 2 * (length + width)
    
    console.log(perimeter)
}
perimeterOfRectangle()
//1.6 A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function volumeOfRectPrism() {
    let length = 10
    let width = 6
    let height = 8
    let volume = length * width * height
    
    console.log(volume)
}
volumeOfRectPrism()
//1.7 Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCircle(r) {
    let area = Math.PI * r * r
    return area
}
//1.8 Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumOfCircle() {
    let r = 8
    let circumference = 2 * Math.PI * r
    console.log(circumference)
}
circumOfCircle()
//1.9 Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function densityOfSubstance() {
    let mass = 10
    let volume = 15
    density = mass / volume
    console.log(density)
}
densityOfSubstance()
 