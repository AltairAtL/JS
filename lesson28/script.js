//1.Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:

// поле, хранящее радиус окружности;
// get-свойство, возвращающее радиус окружности;
// set-свойство, устанавливающее радиус окружности;
// get-свойство, возвращающее диаметр окружности;
// метод, вычисляющий площадь окружности;
// метод, вычисляющий длину окружности.

class SomeClass {
  constructor(x) {
    this.x = x;
  }
  get radius() {
    return this.x;
  }
  set radius(x) {
    this.x = x;
  }
  get y() {
    return this.x * 2;
  }
  area() {
    return Math.PI * this.x * this.x;
  }
  circumference() {
    return Math.PI * this.x * 2;
  }
}

let output = new SomeClass(5);
console.log(output.radius);
console.log(output.y);
console.log(output.area().toFixed(2));
console.log(output.circumference().toFixed(2));

//Свойство Math.PI представляет отношение длины окружности круга к его диаметру
//Метод toFixed() форматирует число, используя запись с фиксированной запятой
