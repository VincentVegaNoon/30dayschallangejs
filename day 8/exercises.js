//1. Create an empty object called dog
const dog = {}
//2. Print the the dog object on the console
const dog = {}
console.log(dog)
//3. Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
const dog = {
dogName: 'Azor',
legs: 4,
color: 'black',
bark: 'woof woof',
getBark: function() {
    return `${this.bark}`
}
}
console.log(dog.getBark())
//4. Get name, legs, color, age and bark value from the dog object
const dog = {
    dogName: 'Azor',
    legs: 4,
    color: 'black',
    bark: 'woof woof',

getDogInfo: function() {
    return `I am ${this.dogName} and I got ${legs} legs, Im ${color} and i like doing ${bark}.`
}
}
    const values = Object.assign({}, dog)
console.log(values)
//5. Set new properties the dog object: breed, getDogInfo
