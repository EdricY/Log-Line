import './style.css'

let number = 1;
let width = Math.log10(number);

function setup() {
  for (let i = 0; i < 8; i++) {
    const markerEl = document.createElement("div");
    markerEl.classList.add("marker");
    document.querySelector("#log-line-wrap").appendChild(markerEl);
    markerEl.setAttribute("draggable", "false")
  }
  const changeHandler = (e) => {
    const chSize = document.querySelector(".marker").getBoundingClientRect().width;
    const x = window.innerWidth - e.offsetX;
    const log = x / chSize;
    number = Math.round(10 ** log);
    setWidth();

  }

  document.querySelector("#log-line-wrap").addEventListener("mousemove", e => {
    if (e.buttons == 0) return;
    changeHandler(e)
  })
  document.querySelector("#log-line-wrap").addEventListener("click", changeHandler)
  document.querySelector("#btn-2").addEventListener("click", () => {
    number = number * 2;
    setWidth();
  })
  document.querySelector("#btn-10").addEventListener("click", () => {
    number = number * 10;
    setWidth();
  })
  document.querySelector("#btn-div-10").addEventListener("click", () => {
    number = Math.round(number / 10);
    setWidth();
  })


  document.querySelector("#btn-sq").addEventListener("click", () => {
    number = number * number;
    setWidth();
  })


}
setup();

function setWidth() {
  width = Math.log10(number);
  document.querySelector("#log-line").style.width = width + "ch";
  document.querySelector("#number").innerText = number;
  document.querySelector("#log-num").innerText = Math.log10(number).toFixed(3);

}

requestAnimationFrame(tick)

function tick() {
  number++;
  setWidth();
  requestAnimationFrame(tick)
}

setWidth();
