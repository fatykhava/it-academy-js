class MyString {
  constructor(str) {
    this.str = str;
  }

  reverse() {
    return this.str.split("").reverse().join("");
  }

  ucFirst() {
    return this.str.slice(0,1).toUpperCase() + this.str.slice(1);
  }

  ucWord() {
    return this.str.split(' ').map((v)=>{return v.slice(0,1).toUpperCase() + v.slice(1)}).join(' ');
  }
}

let string  = new MyString('we learn javascript');
console.log(string.reverse());
console.log(string.ucFirst());
console.log(string.ucWord());