// Javascript Arrays / Lists
            // index   =      0           1             
var programmingLanguage = ['Javascript', 'PHP', 
//     2        3       4     5
    'Python', 'Java', 'C#', 'C++'];

console.log(programmingLanguage[programmingLanguage.length - 1]);

console.log(programmingLanguage[programmingLanguage.lastIndexOf('Python')]);


// Array Functions
console.log(programmingLanguage);

programmingLanguage.push('CSS');
console.log(programmingLanguage);

programmingLanguage.pop();
console.log(programmingLanguage);

programmingLanguage.unshift('Ruby');
console.log(programmingLanguage);

programmingLanguage.shift();
console.log(programmingLanguage);

// .splice(3, 2, 'elem.')
// 3 - tregon indexin ku doni ta shtoni ni element
// 2 - nenkupton sa elemente doni ti fshini nga lista prej te indexi 3
// elem - eshte elementi qe doni ta shtoni te lista
programmingLanguage.splice(1, 2, '.NET');
console.log(programmingLanguage);

// Random Numbers

console.log(Math.floor(Math.random() * 10));

console.log(programmingLanguage[Math.floor(Math.random() * (programmingLanguage.length - 1))]);

// Array Destructuring