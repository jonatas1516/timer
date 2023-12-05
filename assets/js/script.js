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
    second.innerHTML = s;

    if (s == 2) {
      s = zero;
      second.innerHTML = s;
      m++;
      minute.innerHTML = m;
    }

    if (m == 2) {
      m = zero;
      minute.innerHTML = m;
      h++;
      hour.innerHTML = h;
    }
  }, 1000);
}

function pause() {
  clearInterval(cron);
}

const btn = document.querySelector("#btn");

btn.addEventListener("click", clear);

function clear() {
  //clearInterval(cron);

  h = zero;
  hour.innerHTML = h;

  m = zero;
  minute.innerHTML = m;

  s = zero;
  second.innerHTML = s;
}
