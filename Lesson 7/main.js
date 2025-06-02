// var input_1 = document.getElementById('input_1');
// var input_2 = document.getElementById('input_2');
// var button = document.getElementById('btn_id');
// var text = document.getElementById('teksti_id');

// // text1 + text2  -> concatenation

// button.addEventListener('click', function(){
//     text.innerHTML = parseInt(input_1.value) + parseInt(input_2.value);
// });

// Regular Expressions - REGEX

// Search Method
// var text = 'The best school is Digital School!';
// var result = text.search(/Digital School/);
// document.getElementById('result').innerHTML = result;

// Replace Method
// var text = 'The best school is Digital School!';
// var result = text.replace(/Digital School/, 'Gjimnazi');
// document.getElementById('result').innerHTML = result;

// Test Method
// var text = 'abcdef';
// var regex = new RegExp('abc');
// document.getElementById('result').innerHTML = regex.test(text);

// Match Method 
// we use /g to show us every occurrence of that word
// var text = 'My school is the best school of every other school.';
// var regex = /l/g;
// document.getElementById('result').innerHTML = text.match(regex);

// var text = 'A de vaje delja pi Amerike?';
// var regex = /[dev]/g;
// document.getElementById('result').innerHTML = text.match(regex);

// var text = 'Pi 97 deleve, vec 1 shkoj ne Amerik!';
// var regex = /[0-9]/g;
// document.getElementById('result').innerHTML = text.match(regex);

// var text = 'Delja shkoj ne amerik!';
// var regex = /(amerik|tearc|gjermani)/g;
// document.getElementById('result').innerHTML = text.match(regex);

// var text = 'Shkolla Digjitale numeron mbi 150 nxenes.';
// var regex = /\d/g;
// document.getElementById('result').innerHTML = text.match(regex);

// var text = 'Shkolla Digjitale numeron mbi 150 nxenes.';
// var regex = /\s/g;
// document.getElementById('result').innerHTML = text.match(regex);

// var text = 'Shkolla Digjitale numeron mbi 150 nxenes.';
// var regex = /i+/g;
// document.getElementById('result').innerHTML = text.match(regex);

// /shko*/g - kerkon 0 apo me shume perseritje
// var text = 'Shkolla Digjitale numeron mbi 150 nxenes. Shkolla Digjitale ...';
// var regex = /Shko*/g;
// document.getElementById('result').innerHTML = text.match(regex);

// /hi?/g - kerkon 0 ose 1 perseritje
// var text = 'hey, hi, hiiiii';
// var regex = /hi?/g;
// document.getElementById('result').innerHTML = text.match(regex);

// var text = 'Shkooolla Digjitale edhe Shkoolla Digjitale nuk eshte e njejte.';
// var regex = /o{3}/g;
// document.getElementById('result').innerHTML = text.match(regex);

// var text = 'Shkooolla Digjitale edhe Shkoooolla Digjitale nuk eshte e njejte.';
// var regex = /o{3,5}/g;
// document.getElementById('result').innerHTML = text.match(regex);

// var text = 'bestfriend, boyfriend, girlfriend';
// var regex = /end$/g;
// document.getElementById('result').innerHTML = text.match(regex);

var text = 'cat, catalog, category';
var regex = /^cat/g;
document.getElementById('result').innerHTML = text.match(regex);