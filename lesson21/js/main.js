class Worker {
  constructor(name, surname, rate, days) {

      this._name = name;
      this._surname = surname;
      this._rate = rate;
      this._days = days;

  }

  getSalary() {
    return this._rate * this._days;
  }

  get name() {
    return this._name;
  }

  get surname() {
    return this._surname;
  }

  get rate() {
    return this._rate;
  }

  set rate(v) {
    this._rate = v;
  }

  get days() {
    return this._days;
  }

  set days(d) {
    this._days = d;
  }

}

let misha = new Worker('Misha', "Smith", 35, 20);

console.log(misha.days);
console.log(misha.getSalary());
misha.days = 300;
console.log(misha.days);
console.log(misha.getSalary());