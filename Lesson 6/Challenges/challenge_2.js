var students = ['Erdin', 'Andrra', 'Endrit'];

var names_input = document.getElementById('name_input');
var btnAdd = document.getElementById('btnAdd');
var btnShow = document.getElementById('btnShow');
var resultHeading = document.getElementById('result');

btnAdd.onclick = function(){
    students.push(names_input.value);
}

btnShow.onclick = function(){
    var people = '';
    for(i = 0; i < students.length; i++){
        people += students[i] + ' ';
    }
    resultHeading.innerHTML = people;
}