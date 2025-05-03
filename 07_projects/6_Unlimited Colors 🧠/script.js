

const randomColor = function () {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;

}



let interval;
const startColor = function () {
    
    if(!interval){
        interval = setInterval(changBgColor, 1000)
    }
    
    
    
    function changBgColor() {
        document.body.style.backgroundColor = randomColor();
    }
}


const stopColor = function () {
    clearInterval(interval)
    interval = nall;
}



document.getElementById("start").addEventListener("click", startColor)
document.getElementById("stop").addEventListener("click", stopColor)