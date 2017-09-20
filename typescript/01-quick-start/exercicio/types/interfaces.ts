interface LabelledValue {
    label: string;
}

function printLabel(labelledObj: LabelledValue) {
    console.log('labelledObj.label', labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);

// PRIORIDADES OPCIONAIS
/*
interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: null, area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({color: "black"});
*/


// READONLY PROPRIEDADES
interface Point {
    readonly x: number;
    readonly y: number;
}
let p1: Point = { x: 10, y: 20 };
// p1.x = 5; // error!

let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
// ro[0] = 12; // error!
// ro.push(5); // error!
// ro.length = 100; // error!
// a = ro; // error!


// EXCESSO DE VERIFICAÇÃO DE PROPRIEDADES
interface SquareConfig {
    color?: string;
    width?: number;
    // propname 
    [propName: string]: any;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    // ...
    return null;    
}

let mySquare = createSquare({ color: "red", width: 100 }); // OK
let mySquare1 = createSquare({ colour: "red", width: 100 }); // error without propname in interface SquareConfig

// TIPOS DE FUNÇÃO
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
}

// Para os tipos de função verificar corretamente o tipo, os nomes dos parâmetros não precisam corresponder. 
//Poderíamos, por exemplo, escrever o exemplo acima como este:
let mySearch1: SearchFunc;
mySearch1 = function(src: string, sub: string): boolean {
    let result = src.search(sub);
    return result > -1;
}

let mySearch3: SearchFunc;
mySearch = function(src, sub) {
    let result = src.search(sub);
    return result > -1;
}

// TIPOS INDEXÁVEIS
interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];
console.log(myStr);

class Animal {
    name: string;
}
class Dog extends Animal {
    breed: string;
}

// Error: indexing with a 'string' will sometimes get you an Animal!
interface NotOkay {
    // [x: number]: Animal;
    [x: string]: Dog;
}

interface NumberDictionary {
    [index: string]: number;
    length: number;    // ok, length is a number
    name: number;      // error, the type of 'name' is not a subtype of the indexer
}

// TIPOS DE CLASSE
interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
    tick();
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("beep beep");
    }
}
class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("tick tock");
    }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);

digital.tick();
analog.tick();


// EXTENSÃO DE INTERFACES
interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;

console.log(square);
