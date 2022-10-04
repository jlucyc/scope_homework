
var name ='Jen'
var secretFunction = function () {
    var pinCode =[1,2,3,4]
    console.log("The name can be accessed inside the function:", name)     //if you declare a variable inside the function it only works in the function
}                                                                          //laxical scope
secretFunction();
// console.log(pinCode)




var filterNamesByFirstLetter = function (names, letter) {
    var filteredNames = [];
    for(let name of names) { // 'let' allows the variable only to be accessed within the for loop (blocks code)
        if(name[0]=== letter){
            filteredNames.push(name);
        }
    }
    console.log(name)
    return filteredNames
}

var students = ['Alice', 'Bob', "Ada", "Brian", "Adam"];
var filteredStudent = filterNamesByFirstLetter(students, 'A');
console.log(filteredStudent)

let isItFive = function (number) {
    let result;
    if (number === 5) {
         result = true;
    } else {
         result = false;
    }
    return result;
}

let calculateEnergy = function (mass) {
    const speedOfLight = 299792458;
    // speedOfLight++;
    return mass * speedOfLight ** 2;

}
let energyOfMe = calculateEnergy(75);
console.log(energyOfMe)

const song = {
    title: 'Raspberry Beret',
    artist: 'Price'
}
console.log(song)
song.title = 'When Doves Cry'
console.log(song);

