var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var meridian =document.getElementById("meridian");

function clock() {
    var data = new Date();
    var hr = data.getHours();
    var min = data.getMinutes();
    var sec = data.getSeconds();

            if(hr>12){
                    hr=hr-12;
                }

    if(hr<10) { hr = "0" + hr};
    if(min<10) { min = "0" + min};
    if(sec<10) { sec = "0" + sec};
    if(hr>=12){meridian="PM"};

    hours.textContent = hr;
    minutes.textContent = min;
    seconds.textContent = sec;
}
setInterval(clock, 1000);