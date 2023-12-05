let cron;

let zero = 0o0;

let h = zero;

let m = zero;

let s = zero;

const hour = document.querySelector(".hour");

const minute = document.querySelector(".minute");

const second = document.querySelector(".second");

function start() {
  cron = setInterval(function () {
    s++;
    s <= 9 ? (second.innerHTML = "0" + s) : (second.innerHTML = s);

    if (s == 60) {
      s = zero;
      second.innerHTML = "0" + s;
      m++;
      m <= 9 ? (minute.innerHTML = "0" + m) : (minute.innerHTML = m);
    }

    if (m == 60) {
      m = zero;
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
  //clearInterval(cron);

  h = zero;
  hour.innerHTML = "00";

  m = zero;
  minute.innerHTML = "00";

  s = zero;
  second.innerHTML = "00";
}
