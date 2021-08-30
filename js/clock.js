const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock, 1000);

/*const time = [date.getHours(), date.getMinutes(), date.getSeconds()];

  for (let i = 0; i < time.length; i++) {
    if (time[i] >= 0 && time[i] < 10) time[i] = "0" + time[i];
  }
  clock.innerText = `${time[0]}:${time[1]}:${time[2]}`;
*/
