//*4. Перетягування (Drag and Drop) елементів
// Завдання: Реалізуйте можливість перетягувати елементи (наприклад, картки або блоки) в межах сторінки. При «відпусканні» миші елемент
// залишається у новій позиції.
//
// Підказки:
//
// Скористайтеся подіями mousedown, mousemove, mouseup.
// Під час mousedown зберігайте початкову позицію курсора та елемента.
// На mousemove змінюйте позицію елемента відповідно до поточної позиції миші.
// Не забудьте відміняти дію за замовчуванням, якщо це необхідно (наприклад, при перетягуванні посилань).

const redBox = document.querySelector(".red");
const yellowBox = document.querySelector(".yellow");
const greenBox = document.querySelector(".green");

let isRedBoxTake = false;
let isYellowBoxTake = false;
let isGreenBoxTake = false;

redBox.addEventListener("mousedown", () => {
  isRedBoxTake = true;
});

redBox.addEventListener("mouseup", () => {
  isRedBoxTake = false;
});

window.addEventListener("mousemove", (e) => {
  if (isRedBoxTake === true) {
    redBox.style.left = `${e.clientX}px`;
    redBox.style.top = `${e.clientY}px`;
  }
});

yellowBox.addEventListener("mousedown", () => {
  isYellowBoxTake = true;
});

yellowBox.addEventListener("mouseup", () => {
  isYellowBoxTake = false;
});

window.addEventListener("mousemove", (e) => {
  if (isYellowBoxTake === true) {
    yellowBox.style.left = `${e.clientX}px`;
    yellowBox.style.top = `${e.clientY}px`;
  }
});

greenBox.addEventListener("mousedown", () => {
  isGreenBoxTake = true;
});

greenBox.addEventListener("mouseup", () => {
  isGreenBoxTake = false;
});

window.addEventListener("mousemove", (e) => {
  if (isGreenBoxTake === true) {
    greenBox.style.left = `${e.clientX}px`;
    greenBox.style.top = `${e.clientY}px`;
  }
});
