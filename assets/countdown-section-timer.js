let timer;
let dayEl = document.getElementById("days");
let hoursEl = document.getElementById("hours");
let minutesEl = document.getElementById("minutes");
let secondsEl = document.getElementById("seconds");
let compareDate = new Date();
compareDate.setDate(compareDate.getDate() + 183);

timer = setInterval(function () {
  timeBetweenDates(compareDate);
}, 1000);

function timeBetweenDates(toDate) {
  let now = new Date();
  let difference = toDate.getTime() - now.getTime();

  if (difference <= 0) {
    clearInterval(timer);
  } else {
    let seconds = Math.floor(difference / 1000) % 60;
    let minutes = Math.floor(difference / (1000 * 60)) % 60;
    let hours = Math.floor(difference / (1000 * 60 * 60)) % 24;
    let days = Math.floor(difference / (1000 * 60 * 60 * 24));

    dayEl.textContent = days;
    hoursEl.textContent = hours;
    minutesEl.textContent = minutes;
    secondsEl.textContent = seconds;
  }
}
