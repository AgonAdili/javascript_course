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
// var button2 = document.getElementById('btn_2');

// button2.addEventListener('click', function(){
//     alert("DON'T CLICK !!");
// });

// var button_3 = document.getElementById('btn_3');

// function function_1(){
//     console.log('Function 1 has been executed!');
// }

// function function_2(){
//     console.log('Function 2 has been executed!');
// }

// function function_3(){
//     console.log('Function 3 has been executed!');
// }

// button_3.addEventListener('mouseover', function_1);
// button_3.addEventListener('mouseleave', function_2);
// button_3.addEventListener('mousewheel', function_3);

// Styling using JS
var ds_button = document.getElementById('btn_1');
var ds_text = document.getElementById('text_1');
var hide_button = document.getElementById('hide_btn');

ds_button.onclick = function(){
    ds_text.style.display = 'block';
    ds_text.style.color = 'red';
    ds_text.style.backgroundColor = 'lightgrey';
    ds_text.style.textAlign = 'center';
    ds_text.style.fontSize = '100px';
    ds_text.style.padding = '20px';
    ds_text.style.transitionTimingFunction = 'linear';
    ds_text.style.transition = '1s';
}

ds_text.onmouseover = function(){
    ds_text.style.cssText = "color: blue; background-color: yellow; text-align: center; font-size: 100px; padding: 20px;";
}

ds_button.onmouseleave = function(){
    ds_text.setAttribute("class", "websiteAnimation");
}

hide_button.onclick = function(){
    ds_text.setAttribute("class", "hideClass");
}