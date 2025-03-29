console.log('Goodbye Coder');

// Deklarimi i variablave
var x = 10;
var _vlera = 'Digital School';

// Deklarimi qe nuk lejohet
// var 123 = 10;
// var *ds = 320;


// Arithmetic Operators

var a = 50;
var b = 25;
var c = a + b;
console.log('Shuma e variablave a dhe b eshte', c);

var d = c - b;
console.log('Ndryshimi i variablave c dhe b eshte', d);

var e = a / b;
console.log('Heresi i variablave a dhe b eshte', e);

var f = e * c;
console.log('Prodhimi i variablave e dhe c eshte', f);

var g = 10;
var h = 4;
var i = g % h;
console.log('Mbetjen nga pjestimi i variablave g dhe h eshte', i);

var j = 99;
j++;
console.log('Variabla j =', j);

var k = 100;
k--;
console.log('Variabla k =', k);

var l = 20;
console.log('Variabla l ne katror eshte', l ** 2);

// Assignment Operators

var x = 10;
x += 5;
console.log('Vlera e x, te cilen nuk e dinte askush eshte:', x);

var r = 35;
r -= 5;
console.log('Vlera e r eshte', r);

var s = 10;
s *= 7;     // * nenkupton shumezim
console.log('Vlera e s eshte', s);

var t = 200;
t /= 2;     // / nenkupton pjestim
console.log('Vlera e t eshte', t);

var u = 10;
u %= 5;
console.log('Vlera e u eshte', u);

// Comparison Operators

// operatori == kontrollon nese 2 vlera jane te barabarta. 
// te barabarta --> true
// jo te barabarta --> false
var v = 5;
var w = 5;
console.log(v == w); // true


// operatori != kontrollon nese 2 vlera jane te ndryshme.
// te ndryshme --> true
// te njejta --> false
var x = 6;
var y = 7;
console.log(x != y);

// operatori > kontrollon nese vlera 1 eshte me e madhe se vlera 2
var n1 = 20;
var n2 = 15;
console.log(n1 > n2);

// operatori < kontrollon nese vlera 1 eshte me e vogel se vlera 2
var a1 = 20;
var a2 = 40;
console.log(a1 < a2);

// operatori === kontrollon nese 2 vlerat dhe llojet e tyre jane te njejta.
var vlera_1 = 123;   // integer / number
var vlera_2 = '123'; // string  / text
console.log(vlera_1 === vlera_2);

// operatoret >= dhe <= kontrollojne nese njera prej vlerave eshte me e madhe ose e barabarte / me e vogel ose e barabarte
var v1 = 30;
var v2 = 30;
console.log(v1 >= v2);

// String Operators

// Operatori + (konkatenimi) perdoret per ti ngjitur 2 stringje bashke

var firstName = 'Agon';
var lastName = 'Adili';
var fullName = firstName + ' ' + lastName;
console.log(fullName);

// Template Literals
var name = 'Agon';
var surname = 'Adili';
var age = 27;
var school = 'Digital School';

console.log(`Welcome ${name}`);
console.log(`Une jam ${name} ${surname}, ${age} vjec, dhe ligjeroj ne ${school}`);

// Logical Operators AND, OR, NOT

// Operatori &&
var mosha = 27;
console.log(age >= 13 && age <= 30);

// Operatori ||
console.log(age < 18 || age > 65);

// Operatori !
var var1 = 9;
var var2 = 10;
console.log(!(var1 == var2));