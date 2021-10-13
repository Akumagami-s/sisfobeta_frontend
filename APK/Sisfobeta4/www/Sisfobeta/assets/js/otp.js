var timeleft = 60;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countDown").innerHTML = "Waktu Habis";
  } else {
    document.getElementById("countDown").innerHTML = timeleft;
  }
  timeleft -= 1;
}, 1000);