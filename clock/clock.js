function refreshTime(){
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes();
    document.getElementById("clock").innerHTML = time;
    }

    setInterval(refreshTime, 1000);