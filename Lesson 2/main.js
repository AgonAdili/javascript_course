// function bonBajram(){
//     alert("E gzofshi Bajramin!");
//     alert("Welcome to the Digital School!");
// }

// bonBajram();

// -----------------------------------------

// num_1 dhe num_2 quhen parametra / parametra hyrese
// function shuma_2_numra(num_1, num_2){
//     console.log('Ky funksion do e llogarise shumen e 2 numrave');
//     console.log('Vlera e numrit 1 eshte:', num_1);
//     console.log('Vlera e numrit 2 eshte:', num_2);
//     console.log('Shuma e numrave 1 dhe 2 eshte:', num_1 + num_2);
// }

// 15 dhe 94 quhen argumente
// shuma_2_numra(15, 94);

// function sum(num_1, num_2){
//     return num_1 + num_2;
// }

// console.log('Vlera e 2 numrave eshte:', sum(15, 15));


// F = C × (9/5) + 32
function toFahrenheit(number){
    F = number * (9/5) + 32
    return F
}

console.log(toFahrenheit(22));

// Arrow Functions
var greeting = name => alert(`Hello and welcome, ${name}`);
greeting('Agon');

// Local Variables
function dsFunction(){  
    var localVar = 'Digital School';
    alert(localVar);
}

dsFunction();