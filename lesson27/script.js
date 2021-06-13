// 1. Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта, необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.

// Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
// Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую.
// Покупка продукта. Функция принимает название продукта и отмечает его как купленный.

let arr = [
  { name: "RabbitKiller", count: 1, purchaseStatus: true },
  { name: "Drugs", count: 28, purchaseStatus: false },
  { name: "Ferrari", count: 2, purchaseStatus: true },
  { name: "Pasta", count: 60, purchaseStatus: false },
  { name: "Raccoon", count: 2, purchaseStatus: true },
  { name: "Ostrich", count: 5, purchaseStatus: false },
];
console.log(arr);
let res = arr.slice();
let compare = (a, b) => {
  if (a.purchaseStatus === false && b.purchaseStatus === true) return -1;
  if (a.purchaseStatus === true && b.purchaseStatus === false) return 1;
  return 0;
};

console.log(res.sort(compare));

let addProduct = (name, count) => {
  let b = {};
  b.name = name;
  b.count = count;
  b.purchaseStatus = false;
  for (let i in res) {
    let nname = res[i].name;
    if (nname.toLowerCase() == name.toLowerCase()) {
      res[i].count += count;
      res[i].purchaseStatus = false;
      break;
    } else if (nname.toLowerCase() != name.toLowerCase()) {
      res.unshift(b);
      break;
    }
  }
  return res;
};

addProduct("armyOfElephantsRevengeOnTheRabbits", 300);

let buyIt = (name) => {
  let b = {};
  b.name = name;
  b.count = 1;
  b.purchaseStatus = true;
  for (let i in res) {
    let nname = res[i].name;
    if (nname.toLowerCase() == name.toLowerCase()) {
      res[i].purchaseStatus = true;
      break;
    } else if (nname.toLowerCase() != name.toLowerCase()) {
      res.unshift(b);
      break;
    }
  }
};
buyIt("rabbitWeapon");
res.sort(compare);

// 2.Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за единицу товара. Написать следующие функции:

// Распечатка чека на экран;
// Подсчет общей суммы покупки;
// Получение самой дорогой покупки в чеке;
// Подсчет средней стоимости одного товара в чеке.

// 3. Создать массив CSS-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.).
// Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля.
// Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью document.write() в тегах <p></p>,
//  добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.

class Style {
  constructor(xName, xValue) {
    this.Name = xName;
    this.Value = xValue;
  }
  get Style() {
    return this.Name + ":" + this.Value;
  }
}
let styles = [
  new Style("background-color", "#03fc6f"),
  new Style("font-size", "100px"),
  new Style("text-decoration", "underline"),
  new Style("text-align", "center"),
  new Style("border", "solid 5px red"),
  new Style("width", "100%"),
  new Style("height", "800px"),
];
let i = 0;
function display(styles) {
  {
    document.write(
      `<p style="${styles
        .map((style) => style.Style)
        .join("; ")}">Hello World!</p>`
    );
  }
}
display(styles);
