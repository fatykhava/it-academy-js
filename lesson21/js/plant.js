class Plant {
  constructor(name, age, description, place, founder, using) {
    this._name = name;
    this._age = age;
    this._description = description;
    this._place = place;
    this._founder = founder;
    this._using = using;
  }

  getInfo() {
    return `Название растения: ${this._name},
    Возраст: ${this._age},
    Описание: ${this._description},
    Место произрастания: ${this._place},
    Впервые обнаружен: ${this._founder}, 
    Область применения: ${this._using}`
  }

  get name() {
    return this._name;
  }

  set name(str) {
    this._name = str;
  }

  get age() {
    return this._age;
  }

  set age(val) {
    this._age = val;
  }

  get description() {
    return this._description;
  }

  set description(str) {
    this._description = str;
  }

  get place() {
    return this._place;
  }

  set place(str) {
    this._place = str;
  }

  get founder() {
    return this._founder;
  }

  set founder(str) {
    this._founder = str;
  }

  get using() {
    return this._using;
  }

  set using(str) {
    this._using = str;
  }

}

class Paporotnik extends Plant {
  constructor(classPlant, color) {
    super('Name', 20, 'discription', 'place', 'Nik and Rick', 'IT');
    this._classPlant = classPlant;
    this._color = color;
  }

  getFullInfo() {
    return `${super.getInfo()},
    Класс: ${this._classPlant}, 
    Цвет растения: ${this._color}.`
  }

  get classPlant() {
    return this._classPlant;
  }

  set classPlant(str) {
    this._classPlant = str;
  }

  get color() {
    return this._color;
  }

  set color(str) {
    this._color = str;
  }
}

class Elka extends Plant {
  constructor(danger, price) {
    super('Name1', 10, 'discription1', 'place1', 'Rick', 'IT2');
    this._danger = danger;
    this._price = price;
  }

  getFullInfo() {
    return `${super.getInfo()},
    Класс опасности: ${this._danger}, 
    Цена: ${this._price}.`
  }

  get danger() {
    return this._danger;
  }

  set danger(str) {
    this._danger = str;
  }

  get price() {
    return this._price;
  }

  set price(val) {
    this._price = val;
  }
}

let elka = new Elka('very', 100);
console.log(elka.getFullInfo());

let paporotnik = new Paporotnik('First', 'green');
console.log(paporotnik.getFullInfo());
