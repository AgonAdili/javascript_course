// var mosha = 15;

// if(mosha >= 18){
//     console.log("You can apply for your driver's license!");
// }
// else{
//     console.log("You are too yound to drive!");
// }

// var mosha = 45;

// if(mosha <= 12){
//     console.log("You are still a kid!");
//     console.log("You are still a kid!");
//     console.log("You are still a kid!");
// }
// else if(mosha <= 19){
//     console.log("You are a teenager!");
// }
// else if(mosha <= 65){
//     console.log('You are an adult!')
// }
// else{
//     console.log('You are an old person!');
//     console.log('You are an old person!');
// }
// var mosha = document.getElementById('mosha_id');
// var button = document.getElementById('button_id');
// var text = document.getElementById('text_id');


// button.onclick = function(){
//     if(mosha.value <= 12){
//         text.innerHTML = "You are still a kid!";
//     }
//     else if(mosha.value <= 19){
//         text.innerHTML = "You are a teenager!";
//     }
//     else if(mosha.value <= 65){
//         text.innerHTML = "You are an adult!";
//     }
//     else{
//         text.innerHTML = "You are an old person!";
//     }
// }

var input = document.querySelector('input');
var button = document.getElementById('button_id');
var text = document.getElementById('text_id');

button.onclick = function(){
    text.innerHTML = input.value;
}