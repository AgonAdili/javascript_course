// Callbacks jan funksionet qe mund te jepen si argumente te ni funksion tjeter.

// function printNames(){
//     document.write("Ylli");
//     document.write("<br>");
//     setTimeout(function(){document.write('Ana');}, 3000);
//     document.write('Evlan');
// }

// printNames();

// var par_1 = document.getElementById('p1');
// var par_2 = document.getElementById('p2');
// var par_3 = document.getElementById('p3');

// function showNames(){
//     par_1.innerText = 'Xhevdet';
//     par_2.innerText = 'Andrra';
//     setTimeout(function() {par_3.innerText = 'Meral';}, 3000);
// }

// showNames();

var colors = ['red', 'green', 'blue', 'purple'];

function changeBgColor(){
    document.querySelector('body').style.background = 
    colors[Math.floor(Math.random() * colors.length)];
}

var names = ['John', 'Ana', 'Bob', 'Mark'];

function changeNames(){
    document.querySelector('p').innerHTML = 
    names[Math.floor(Math.random() * names.length)];
}

setInterval(changeBgColor, 1500);
setInterval(changeNames, 1500);