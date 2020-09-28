function timeRightNow() {
    setInterval(timeRightNow, 1000);

    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    if (hour < 12) {
        var ampm = "AM";
    } else {
        ampm = "PM";
        hour = hour % 12;
    }

    hour = updateThisTime(hour);
    minute = updateThisTime(minute);
    second = updateThisTime(second);


    document.getElementById("clock").innerHTML = hour + " : " + minute + " : " + second + " " + ampm;
}


function updateThisTime(i) {
    if (i < 10) {
        return "0" + i;
    } else {
        return i;
    }

}
timeRightNow();