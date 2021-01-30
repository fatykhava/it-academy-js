//** match */ 

let str2 = 'Температура воздуха составляет 25.2 градуса по цельсию';
let str = 'Температура воздуха составляет 25.2 градуса по цельсию';
let re = /(составляет \d+(\.\d градуса)*)/i;
let re2 = /температура (воздуха)/i;
let found = str.match(re);
let found2 = str.match(re2);


//console.log(found);
//console.log(found2);


// match /g

let str3 = 'При создании генератора мы использовали небезизвестный универсальный код речей.';
//console.log(str3.match(/использовали (небезизвестный)/g));

// match not found

let str4 = 'При создании генератора мы использовали небезизвестный универсальный код речей.';
//console.log(str4.match(/не разработан (известный)/g));






//** matchAll */

const str5 = "ReguralExpresion RegExr";
const regexp = /E(x)([a-z])/g;
const match = str5.matchAll(regexp);
//Array.from(match, (res) => console.log(res));

//console.log(match);

// matchAll error

const str6 = "ReguralExpresion RegExr";
const regex2 = /E(x)([a-z])/;
//const match2 = str6.matchAll(regex2);
//console.log(match2);







//** split */ 

//console.log('+375-33-999-99-99'.split('-'));



let str7 = 'It iS a 5r&e@@t Day.'
let array = str7.split(" ",2);

//console.log(array);





//** search */

let str8 = "Hello World!";

let regexp3 = /World.+/;

console.log( str8.search(regexp3) );







//** replace */

//console.log('+375-33-999-99-99'.replace( "-", "--" ))
//console.log('+375-33-999-99-99'.replace( /-/g, "--" ))


//(Второй аргумент)
// $$	вставляет "$"
// $&	вставляет всё найденное совпадение
// $`	вставляет часть строки до совпадения
// $'	вставляет часть строки после совпадения
// $n	если n это 1-2 значное число, то вставляет содержимое n-й скобки
// $<имя>	вставляет содержимое скобки с указанным именем


console.log("test-TEST-Test".replace(/test/gi, (match, offset) => offset)); 


let str9 = "I like to eat, eat, eat apples and bananas";
let re4 = /apples|bananas/gi;

let newStr = str9.replace(re4, (match) => { 
    // console.log({match}); 
    return match.toUpperCase();
});

console.log(newStr);



let str10 = "Test1 Test2";

let result = str10.replace(/(\w+) (\w+)/, (match, name1, name2) => `${name2}, ${name1}`);

//console.log(result); // Smith, John







//** exec  */

let str11 = 'Вы найдете информацию о методе exec https://exec.com';
let regexp4 = /exec/ig;

let result2;

while (result2 = regexp4.exec(str11)) {
  //console.log( `Найдено ${result2[0]} на позиции ${result2.index}` );
  // Найдено exec на позиции 31,
  // Найдено exec на позиции 44
}




let str12 = 'Hello, world!';

let regexp5 = /\w+/y;
regexp5.lastIndex = 5; // ищем ровно на 5-й позиции

//console.log( regexp5.exec(str) ); // null







//** test */

let str13 = "Регулярные выражения появились раньше чем стандарт ES6.";

// эти два теста делают одно и же
console.log( /выражения/i.test(str13) ); // true
console.log( str13.search(/выражения/i) != -1 ); // true





/// Описание про флаги регулярных выражений https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/RegExp

