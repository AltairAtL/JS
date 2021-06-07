///1.Создать HTML-страницу для отображения/редактирования текста.
// При открытии страницы текст отображается с помощью тега div.
// При нажатии Ctrl + E, вместо div появляется textarea с тем же текстом, который теперь можно редактировать.
// При нажатии Ctrl + , вместо textarea появляется div с уже измененным текстом.
// Не забудьте выключить поведение по умолчанию для этих сочетаний клавиш.

document.body.addEventListener("keydown", (event) => {
  const resizer = document.createElement("div");
  if ((event.code === "KeyE" || event.code === "Comma") && event.ctrlKey) {
    event.returnValue = false;
    let elem = document.querySelector(".content__text");
    if (event.code === "KeyE" && elem.nodeName === "DIV") {
      let newEl = document.createElement("textarea");
      newEl.setAttribute("cols", 50);
      newEl.setAttribute("rows", 20);
      newEl.className = "content__text";
      newEl.textContent = elem.textContent;
      elem.replaceWith(newEl);
    } else if (event.code === "Comma" && elem.nodeName === "TEXTAREA") {
      let newEl = document.createElement("div");
      newEl.className = "content__text";
      newEl.textContent = elem.value;
      newEl.append(resizer);
      elem.replaceWith(newEl);
    }
  }
});

//3.Создать HTML-страницу с блоком текста в рамочке.
// Реализовать возможность изменять размер блока, если зажать мышку в правом нижнем углу и тянуть ее дальше.

const resDiv = document.getElementById("content__text");
const resizer = document.querySelector("div.content__text--resizer");

const initResize = (e) => {
  e.preventDefault;
  window.addEventListener("mousemove", startResize);
  window.addEventListener("mouseup", stopResize);
};

const startResize = (e) => {
  resDiv.style.width = e.clientX - resDiv.offsetLeft + "px";
};
const stopResize = () => {
  window.removeEventListener("mousemove", startResize);
  window.removeEventListener("mouseup", stopResize);
};
resizer.addEventListener("mousedown", initResize);
