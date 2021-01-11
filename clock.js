const clock = document.querySelector(".js-clock"),
  span = clock.querySelector("span");

function startTime() {
  const date = new Date();
  let h = date.getHours();
  const m = date.getMinutes();
  let s = date.getSeconds();
  h = h < 10 ? "0" + String(h) : h;
  s = s < 10 ? "0" + String(s) : s;
  span.innerText = `${h} : ${m} : ${s}`;
}

function init() {
  startTime();
  setInterval(startTime, 1000);
}

init();
