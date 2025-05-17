var wakeUpTime;
var dsTime;
var sleepTime;
var noon = 12;

function showCurrentTime(){
    var clock = document.getElementById('clock');
    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    var meridian = 'AM';

    if(hours >= noon){
        meridian = 'PM';
    }

    var clockTime = hours + ':' + minutes + ':' + seconds + ' ' + meridian;
    clock.innerText = clockTime;
    changeImage();
}

var oneSecond = 1000;
setInterval(showCurrentTime, oneSecond);

function changeImage(){
    var time = new Date().getHours();
    var image = 'clock.png';
    var imageHTML = document.getElementById('clockImage');

    if(time == wakeUpTime){
        image = 'good_morning.jpeg';
        console.log('Good Morning!');
    }
    else if(time == dsTime){
        image = 'class_time.jpg';
    }
    else if(time == sleepTime){
        image = 'good_night.jpg';
    }

    imageHTML.src = image;
    console.log(imageHTML.src);
}

function updateClock(){
    var wakeUpTimeSelector = document.getElementById('wakeUpTimeSelector');
    wakeUpTime = wakeUpTimeSelector.value;

    var dsTimeSelector = document.getElementById('dsTimeSelector');
    dsTime = dsTimeSelector.value;

    var sleepTimeSelector = document.getElementById('sleepTimeSelector');
    sleepTime = sleepTimeSelector.value;
}

var saveButton = document.getElementById('saveButton');
saveButton.addEventListener('click', updateClock);