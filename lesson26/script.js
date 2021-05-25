// 1.Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом:
// Функция для вывода на экран информации об автомобиле;
// Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.

const myCar = {
  manuf: "Subaru",
  model: "Legacy",
  year: "2001",
  speed: 100,
};
function allData() {
  myCar.manuf, myCar.model, myCar.year, myCar.speed;
}
function time(s) {
  let t = s / myCar.speed;
  if (t > 4) {
    let relax = parseInt(t / 4);
    t = t + relax;
  }
  alert(t);
}

//2.Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом:

// Функция сложения 2-х объектов-дробей;

// Функция вычитания 2-х объектов-дробей;

// Функция умножения 2-х объектов-дробей;

// Функция деления 2-х объектов-дробей;

// Функция сокращения объекта-дроби.

const fraction = {
  numerator: 10,
  denominator: 20,
};
const fraction2 = {
  numerator2: 30,
  denominator2: 40,
};

function additions() {
  fraction = function () {
    additions(fraction.numerator, fraction.denominator);
  };
  fraction2 = function () {
    additions(fraction2.numerator2, fraction2.denominator2);
  };

  function sokr(fraction) {
    let x = nod(fraction.numerator, fraction.denominator);
    if (x != 1) {
      fraction.numerator = fraction.numerator / x;
      fraction.denominator = fraction.denominator / x;
    }
    return fraction;
  }
}

function multiplication(fraction, fraction2) {
  fracRez.numerator = fraction.numerator * fraction2.numerator2;
  fracRez.denominator = fraction.denominator * fraction2.denominator2;
}
//Печалька со второй задачей)Мозг не хочет работать)

//3.Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом:

// Функция вывода времени на экран;

// Функция изменения времени на переданное количество секунд;

// Функция изменения времени на переданное количество минут;

// Функция изменения времени на переданное количество часов.

// Учтите, что в последних 3-х функциях, при изменении одной части времени, может измениться и другая. Например, если ко времени «20:30:45» добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75».

const time = {
  hour: 3,
  minute: 40,
  seconds: 50,

  timeDisplayOnTheScreen: function () {
    if (this.seconds >= 60) {
      this.seconds -= 60;
      this.minute += 1;
    }
    if (this.minute >= 60) {
      this.minute -= 60;
      this.hour += 1;
    }
    alert(this.hour + ":" + this.minute + ":" + this.seconds);
  },
  timeSec: function (sec) {
    this.seconds += sec;
  },
  timeMin: function (min) {
    this.minute += min;
  },
  timeHour: function (h) {
    this.hour += h;
  },
};

//Читал про Методы объекта, "this". Прикольная штука ,вложеность тип scss)))
