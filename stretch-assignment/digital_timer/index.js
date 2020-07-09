let seconds = document.getElementsByClassName("secondOnes");
seconds.window.setInterval(countSeconds, 1000)
seconds.textContent(countSeconds)

let ms = document.getElementsByClassName("msTens");
ms.window.setInterval(countMS, 1)

countSeconds();{
    if (i<10) {
        i = 1+i;
        return i;
    }
}

countMS();{
    if (i<1000){
        i = 1+i;
        return i; 
    }
}
