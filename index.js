const main_slider_box = document.querySelector(".main_slider_box").children;
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");

let x = 0;
onload = function () {
  setInterval(function () {
    index();
  }, 4000);
};

function index() {
  if (x === main_slider_box.length - 2) {
    x = 0;
  } else {
    x++;
  }
  colorCheck();

  change();
}
function change() {
  for (let i = 0; i < main_slider_box.length; i++) {
    main_slider_box[i].classList.remove("active");
  }
  main_slider_box[x].classList.add("active");
}

btn1.addEventListener("click", function () {
  x = 0;
  change();
  colorCheck();
});
btn2.addEventListener("click", function () {
  x = 1;
  change();
  colorCheck();
});
btn3.addEventListener("click", function () {
  x = 2;
  change();
  colorCheck();
});

function bt1Color() {
  btn1.style.backgroundColor = "white";
  btn2.style.backgroundColor = "gray";
  btn3.style.backgroundColor = "gray";
}
function bt2Color() {
  btn1.style.backgroundColor = "gray";
  btn2.style.backgroundColor = "white";
  btn3.style.backgroundColor = "gray";
}
function bt3Color() {
  btn1.style.backgroundColor = "gray";
  btn2.style.backgroundColor = "gray";
  btn3.style.backgroundColor = "white";
}

function colorCheck() {
  if (x === 0) {
    bt1Color();
  } else if (x === 1) {
    bt2Color();
  } else if (x === 2) {
    bt3Color();
  }
}

const anchor = document.querySelector("main").children;
for (let i = 0; i < anchor.length; i++) {
  const element = anchor[i];
  const in_div = element.children;
  element.onmouseover = function () {
    in_div[1].classList.add("inc_bg_big");
  };
  element.onmouseout = function () {
    in_div[1].classList.remove("inc_bg_big");
  };
}
