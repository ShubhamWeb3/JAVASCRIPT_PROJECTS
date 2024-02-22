let [hours, minutes, seconds, milliseconds] = [0,0,0,0];
let timeRef = document.querySelector(".timer-display");
let uint = null;

document.getElementById("start-timer").addEventListener("click",()=>{
    if(uint!==null){
        clearInterval(uint);
    }
    uint = setInterval(displayTimer,10);
});

document.getElementById("pause-timer").addEventListener("click",()=>{
    clearInterval(uint);
});

document.getElementById("reset-timer").addEventListener("click",()=>{
    clearInterval(uint);
    [hours, minutes, seconds, milliseconds] =[0,0,0,0];
    timeRef.innerHTML = "00 : 00 : 00 : 000";
});

const displayTimer =()=>{
    milliseconds += 10;
    if(milliseconds==1000){
        milliseconds =0;
        seconds++;
        if(seconds==60){
            seconds = 0;
            minutes++;
            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds;

    timeRef.innerHTML =`${h} : ${m} : ${s} : ${ms}`;
}
