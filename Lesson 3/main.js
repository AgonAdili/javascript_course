// getElementById selects the HTML element based on its ID
var button1 = document.getElementById('btn_1');

button1.onclick = function(){
    alert('Hello!');
}

// querySelector selects the first tag of that name
// var button_click = document.querySelector('button');

// button_click.onclick = function(){
//     alert('Told you not to click me!');
// }


// Event listeners
var button2 = document.getElementById('btn_2');

button2.addEventListener('click', function(){
    alert("DON'T CLICK !!");
});

var button_3 = document.getElementById('btn_3');

function function_1(){
    console.log('Function 1 has been executed!');
}

function function_2(){
    console.log('Function 2 has been executed!');
}

function function_3(){
    console.log('Function 3 has been executed!');
}

button_3.addEventListener('mouseover', function_1);
button_3.addEventListener('mouseleave', function_2);
button_3.addEventListener('mousewheel', function_3);