const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const am = document.getElementById("am");
const pm = document.getElementById("pm");
setInterval(() => {
    const currentHours = new Date().getHours();
    const currentMinutes = new Date().getMinutes();
    const currentSeconds = new Date().getSeconds();
    hours.innerText = currentHours < 10 ? "0" + currentHours.toString() : currentHours > 12 ? (currentHours - 12) : currentHours;
    minutes.innerText = currentMinutes < 10 ? "0" + currentMinutes.toString() : currentMinutes;
    seconds.innerText = currentSeconds < 10 ? "0" + currentSeconds.toString() : currentSeconds;
    currentHours > 12 ? (pm.style["display"] = "block", am.style["display"] = "none") : (pm.style["display"] = "none", am.style["display"] = "block");
}, 1000)