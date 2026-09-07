const sound = new Audio(
    "pop.wav"
);

popit.onclick = function (event) {
    const target = event.target;
    if (!target.matches(".circle")) {
        return;
    }

    sound.pause();
    sound.currentTime = 0;
    sound.play();
    if("vibrate" in navigator) {
        navigator.vibrate(100);
    }
    target.classList.toggle("pressed");
};

const btn = document.getElementById("btn");
let randomNum = () => {
    return Math.floor(Math.random() * 256);
};

let changeColor = () => {
    let randomColor = `rgb(${randomNum()},${randomNum()},${randomNum()})`;
    document.body.style.backgroundColor = randomColor;
};

btn.addEventListener("click",changeColor);