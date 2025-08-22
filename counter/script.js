// functionality


const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const counterLable = document.getElementById("counterLable");

let count = 0;

increaseBtn.onclick = function () {
  count++;
  counterLable.textContent = count;
};

decreaseBtn.onclick = function () {
  count--;
  counterLable.textContent = count;
};

resetBtn.onclick = function () {
  count = 0;
  counterLable.textContent = count;
};

