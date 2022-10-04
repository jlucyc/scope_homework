console.log('Hello World!');

var name = "Mickey";
console.log("name:", name);

var greeting = "hello";
greeting = 5;
console.log(greeting);

console.log(1*2);
console.log("hello"+"Lucy");

console.log(9/7);


console.log(typeof(greeting));
console.log(typeof("string"));

console.log('hello'.toUpperCase());

console.log(2**3);
console.log(String(9%2));

var name = "Donald";
var message = `Hello, ${name}`;
console.log(message);

var myVariable;
console.log(myVariable);


if (1<0){
    var message = "1 is greater than 0";
} else if (1==0){
    var message = "1 is greater than 0";
} else {
    var message = "1 is greater than 0";
}
console.log(message);

if (null) {
    var result='null has a value of true';
}   else {
    var result='null has a value of false';
}

console.log(result)

console.log(Boolean(null));

console.log(Boolean('hello'));

console.log(Boolean(''));

console.log(Boolean(0));

console.log(Boolean(2));

console.log(Boolean(myVariable));

console.log(Boolean("lol"-"l"));

console.log(3+"hello");
console.log("route"+6+6);
console.log(6+6+"route");

console.log(2==2);
console.log(2=="2");
console.log(2==="2");       // triple === checks value and data type

console.log(2!=2);
console.log(2!='2');
console.log(2!=='2');

console.log(!((1+1)===2 || (1+1===4)));  // ! negates the expression



