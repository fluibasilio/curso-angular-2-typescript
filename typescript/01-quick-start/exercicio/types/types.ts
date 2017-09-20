// boolean
let isDone: boolean = false;

// number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// string
let color: string = "blue";
color = 'red';

// string + interpolacao
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }.

I'll be ${ age + 1 } years old next month.`;

// string + sentence
let sentence1: string = "Hello, my name is " + fullName + ".\n\n" +
"I'll be " + (age + 1) + " years old next month.";

// array
let list: number[] = [1, 2, 3];
let list1: Array<number> = [1, 2, 3];

//Declare a tuple type
let x: [string, number];
x = ["hello", 10]; // OK
// x = [10, "hello"]; // Error

// Enum
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
console.log(c);

enum Color1 {Red = 1, Green, Blue}
let c1: Color1 = Color1.Green;
console.log(c1);

enum Color2 {Red = 1, Green = 2, Blue = 4}
let c2: Color2 = Color2.Green;
console.log(c2);

enum Color3 {Red = 33, Green, Blue}
let colorName: string = Color3[1];
console.log(Color3);
console.log(colorName);

let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean