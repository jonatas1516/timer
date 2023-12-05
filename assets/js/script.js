let cron;

let h = 0;

let m = 0;

let s = 0;

let hour = document.querySelector(".hour");

let minute = document.querySelector(".minute");

let second = document.querySelector(".second");

function start() {
  cron = setInterval(function () {
    s++;

    s <= 9 ? (second.innerHTML = "0" + s) : (second.innerHTML = s);

    if (s == 60) {
      s = 0;

      second.innerHTML = "0" + s;

      m++;

      m <= 9 ? (minute.innerHTML = "0" + m) : (minute.innerHTML = m);
    }

    if (m == 60) {
      m = 0;

      m <= 9 ? (minute.innerHTML = "0" + m) : (minute.innerHTML = m);

      h++;

      h <= 9 ? (hour.innerHTML = "0" + h) : (hour.innerHTML = h);
    }
  }, 1000);
}

function pause() {
  clearInterval(cron);
}

function clean() {
  h = 0;

  hour.innerHTML = "00";

  m = 0;

  minute.innerHTML = "00";

  s = 0;

  second.innerHTML = "00";
}
