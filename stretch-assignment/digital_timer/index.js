// SECONDS 
setInterval(changeSeconds, 1000);
let seconds = 0;
document.getElementById("secondTens").textContent = 0;
document.getElementById("secondOnes").textContent = 0;
function changeSeconds(){
    if (seconds < 11){
        document.getElementById("secondOnes").textContent = seconds++;
    }
    if (seconds == 11){
        document.getElementById("secondOnes").textContent = 0;
        return document.getElementById("secondTens").textContent = 1;
    }
}

setInterval(changeMS, 1);
let ms = 0;
let msHundred = 0;
document.getElementById("msHundreds").textContent = 1;
document.getElementById("msTens").textContent = 0;

function changeMS(){
    if (document.getElementById("secondTens").textContent == 0){
    if (ms < 10){
        document.getElementById("msTens").textContent = ms++;
    }
    else if (ms === 10){
        document.getElementById("msTens").textContent = 0;
        ms = 0;
        document.getElementById("msHundreds").textContent = msHundred++;
        if(msHundred === 6){
            msHundred = 0;
        }
    }
}
    if (document.getElementById("secondTens").textContent == !0){
        document.getElementById("msHundreds").textContent = 0;
        document.getElementById("msTens").textContent = 0;
    }
}

// let secondOnes & msTens = 0;
// if secondOnes or msTens < 10
// secondOnes++ msTens++;
// if msTens == 60 then msTens = 0;

//let msTens = document.getElementsByClassName("msTens");
// if secondOnes = 10 then secondTens++; 
// if msTens = 60 then msHundreds++;