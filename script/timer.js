let time = 1800;
const countDownEl = document.getElementById("time");

setInterval(updateCountDown, 1000);

function updateCountDown() {
    const minutes =Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    countDownEl.innerHTML = `${minutes}:${seconds}`;
    time -= 1;
}