//1.Подсчитать сумму всех чисел в заданном пользователем диапазоне.

let firstNumber = prompt("Введите пожалуйста первое число:");
let secondNumber = prompt("Введите пожалуйста Второе число:");
let sum = 0;
for (i = firstNumber; i <= secondNumber; i++) {
  sum += firstNumber++;
}
alert(`Ваш ответ: ${sum}`);

//2.Запросить 2 числа и найти только наибольший общий делитель.

let firstNumber = prompt("Введите пожалуйста первое число:");
let secondNumber = prompt("Введите пожалуйста Второе число:");
let constant = 0;

if (secondNumber > firstNumber) {
  constant = secondNumber;
} else {
  constant = firstNumber;
}
for (i = constant; i >= 1; i--) {
  if (secondNumber % i == 0 && firstNumber % i == 0) {
    alert(`Наибольший общий делитель: ${i}`);
    break;
  }
}

// document.write(`Наибольший общий делитель: ${i}`);
//Нашел такой вариант вывода ответа.Думаю в Примерах где ответ слишком большой и занимает много места ето норм сработалоб)

//3.Запросить у пользователя число и вывести все делители этого числа.

let number = prompt("Введите пожалуйста число:");
console.log(`Делители для числа - ${number}`);
for (i = number - 1; i >= 1; i--) {
  if (number % i == 0) {
    console.log(`${i}`);
  }
}
//С console.log и document.write работает все супер а если alert выводит каждый делитель в новом окне а не все в одном

//4.Определить количество цифр в введенном числе.

let number = prompt("Введите пожалуйста число:");
let variable = 0;
do {
  number /= 10;
  variable++;
} while (number >= 1);
alert(`${variable}`);

//5.Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.

let zeros = 0;
let positive = 0;
let negative = 0;
let notEven = 0;
let even = 0;
let number;
for (i = 0; i < 10; i++) {
  number = prompt(
    "Введите пожалуйста 10 чисел(да ето долго,но я сам чуть мозг не сломал)"
  );
  if (number == 0) zeros++;
  if (number > 0) positive++;
  if (number < 0) negative++;
  if (number % 2 != 0 || number != 0) notEven++;
  if (number % 2 == 0 || number != 0) even++;
}
alert(
  `Положительных: ${positive}\nОтрицательных: ${negative}\nНулей: ${zeros}\nЧетных: ${even}\nНечетных: ${notEven}`
);

//6.Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется.

alert(`Окуратно Агресивный калькулятор)`);
let res = 0;
let proceed = true;
while (proceed) {
  let firstNumber = prompt("Тыкни сюда первое число:");
  let sign = prompt(
    "Ведите математический символ:\nТолько давай что то простое(+,-,*,/)\nА то я устал."
  );
  let secondNumber = prompt("Давай тыкай Второе число:");
  switch (sign) {
    case "+":
      res = firstNumber + secondNumber;
      alert(`Ну ладно дам тебе ответ: ${res}`);
      proceed = confirm(
        "Еще что то посчитать?\nДавай решай у меня дел полно.\nА то найду по IP)"
      );
      break;
    case "-":
      res = firstNumber - secondNumber;
      alert(`Ну ладно дам тебе ответ: ${res}`);
      proceed = confirm(
        "Еще что то посчитать?\nДавай решай у меня дел полно.\nА то найду по IP)"
      );
      break;
    case "*":
      res = firstNumber * secondNumber;
      alert(`Ну ладно дам тебе ответ: ${res}`);
      proceed = confirm(
        "Еще что то посчитать?\nДавай решай у меня дел полно.\nА то найду по IP)"
      );
      break;
    case "/":
      if (secondNumber != 0) {
        res = firstNumber / secondNumber;
        alert(`Ну ладно дам тебе ответ: ${res}`);
      } else {
        alert("Плиз не Тупи на 0 делить нельзя.\nТы меня Печалишь)");
      }
      proceed = confirm(
        "Еще что то посчитать?\nДавай решай у меня дел полно.\nА то найду по IP)"
      );
      break;
  }
}

//7.Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).

let number = prompt("Введите число:");
let pos = prompt("На сколько цифр его сдвинуть?");
let buf = [];
let res = "";
for (let i = 0; i < pos; i++) {
  buf[i] = number[i];
}
for (i = pos; i < number.length; i++) {
  res += number[i];
}
for (i = 0; i < buf.length; i++) {
  res += buf[i];
}
alert(res);
// Долго думал и толку ноль) Ответ нашел в Великом Гугле)Везде решение через function а ето одно нашел что нет.

//8.Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.

let dayWeek = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];
let value = true;
for (i = 0; i < dayWeek.length; i++) {
  value = confirm(dayWeek[i] + " Дальше?");
  if (value == false) break;
  if (i == dayWeek.length - 1) i = -1;
}

//Решение задачи нашел читая MDN Web Docs)

//9.Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.
alert(`Сейчас в консоле выводится вам таблица умножения.`);
for (let i = 2; i < 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(i + "*" + j + "=" + i * j);
  }
}

//Нашел такой вариант решения увидил в нем document.write(вот где его можно применить) И первый раз увидил <br>

for (i = 2; i <= 9; i++) {
  for (j = 1; j <= 10; j++) {
    document.write(i, "*", j, "=", i * j);
    document.write("<br>");
  }
  document.write("<br>");
}

//10.Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом: каждую итерацию цикла делите диапазон чисел пополам, записываете результат в N и спрашиваете у пользователя «Ваше число > N, < N или == N?». В зависимости от того, что указал пользователь, уменьшаете диапазон. Начальный диапазон от 0 до 100, поделили пополам и получили 50. Если пользователь указал, что его число > 50, то изменили диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N.

//Сам не понял как ето реализовать)Даже гугл не особо помог Есть решения через function.Предыдущие решения если и находи то понятно как работают а ето ваще темный лес

let numByUser = prompt("Загадайте число (от 0 до 100)");

function guessTheNumber(left, right) {
  let middle = parseInt((left + right) / 2);

  if (confirm(`Ето твое число ${middle}?`)) return "Отгадал";

  let isMore = confirm(`Твое Число Больше : ${middle}`);

  if (isMore) {
    return guessTheNumber(middle, right);
  } else {
    return guessTheNumber(left, middle);
  }
}
alert(guessTheNumber(0, 100));

//P.S.  JS - Ето зло!)
