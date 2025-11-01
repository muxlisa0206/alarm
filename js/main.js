let audio = document.getElementById("audio");
let pauseBtn = document.getElementById("pause-alarm");
let alarm = document.getElementById("alarm");
let selectedTime;

alarm.addEventListener("submit" , function(e){
    e.preventDefault();
    selectedTime = e.target[0].value;
    
})


let stopAlarm = setInterval(() => {
    let date =  new Date();
    let time = date.toTimeString().split(" ")[0];
    let realTime = time.split(":").slice(0,2).join(":");
    console.log(time);
    
    console.log(realTime);

    if(selectedTime === realTime){
        audio.play();
    }
    
}, 1000)

pauseBtn.addEventListener("click", function(){
    audio.pause();
    clearInterval(stopAlarm);
})