//1.Создать страницу, которая выводит нумерованный список песен

let playList = [
  {
    author: "LED ZEPPELIN",
    song: "STAIRWAY TO HEAVEN",
  },
  {
    author: "QUEEN",
    song: "BOHEMIAN RHAPSODY",
  },
  {
    author: "LYNYRD SKYNYRD",
    song: "FREE BIRD",
  },
  {
    author: "DEEP PURPLE",
    song: "SMOKE ON THE WATER",
  },
  {
    author: "JIMI HENDRIX",
    song: "ALL ALONG THE WATCHTOWER",
  },
  {
    author: "AC/DC",
    song: "BACK IN BLACK",
  },
  {
    author: "QUEEN",
    song: "WE WILL ROCK YOU",
  },
  {
    author: "METALLICA",
    song: "ENTER SANDMAN",
  },
];
const ol = document.createElement("ol");
const mainDiv = document.getElementById("list");
mainDiv.append(ol);
for (let i in playList) {
  const li = document.createElement("li");
  const pBtn = document.createElement("p");
  pBtn.append(playList[i].author);
  pBtn.append(" : ");
  pBtn.append(playList[i].song);
  li.append(pBtn);
  ol.append(li);
}

//2.Создать HTML-страницу с кнопкой "Открыть" и модальным окном. На модальном окне должен быть текст и кнопка "Закрыть".
//  Изначально модальное окно не отображается.
//  При клике на кнопку "Открыть" появляется модальное окно, на кнопку "Закрыть" – исчезает.

const btn = document.createElement("button");
const p = document.createElement("p");
p.textContent = "Открыть";
btn.append(p);
mainDiv.append(btn);
btn.addEventListener("click", () => {
  const div = document.createElement("div");
  div.setAttribute("id", "modal__div");
  const p = document.createElement("p");
  p.textContent =
    "При клике на кнопку Открыть появляется модальное окно, на кнопку Закрыть – исчезает.";
  div.append(p);
  const innerBtn = document.createElement("button");
  const innerBtnP = document.createElement("p");
  innerBtnP.textContent = "Закрыть";
  innerBtn.append(innerBtnP);
  div.append(innerBtn);
  mainDiv.append(div);
  btn.disabled = true;
  innerBtn.addEventListener("click", () => {
    div.remove();
    btn.disabled = false;
  });
});

//3.Создать HTML-страницу со светофором и кнопкой, которая переключает светофор на следующий цвет.

const trafficLights = document.querySelector("div.wrapper");

const redlight = document.getElementById("red");
const yellowlight = document.getElementById("yellow");
const greenlight = document.getElementById("green");
const butn = document.getElementById("pressButton");

butn.addEventListener("click", function () {
  if (redlight.classList.contains("circle__red")) {
    redlight.classList.remove("circle__red");
    yellowlight.classList.add("circle__yellow");
  } else if (yellowlight.classList.contains("circle__yellow")) {
    yellowlight.classList.remove("circle__yellow");
    greenlight.classList.add("circle__green");
  } else if (greenlight.classList.contains("circle__green")) {
    greenlight.classList.remove("circle__green");
    redlight.classList.add("circle__red");
  }
});

///Сразу горят все цвета.Можно убрать в HTML классы circle__yellow и circle__green и будет с самого начала гореть только красный)
