//**1 */
//Дана строка 'aaa@bbb@ccc'. Замените все @ на '!' с помощью глобального поиска и замены.
let string = 'aaa@bbb@ccc';
console.log(string.replace(/@/g, '!'));




//**2 */
//Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами (через substr, substring, slice).
string = 'aaa bbb ccc';
let searchNum = string.search(/bbb.+/);
let result1 = string.substr(0, searchNum) + string.substr(searchNum + 3);
console.log(result1);
result1 = string.substring(0, searchNum) + string.substring(searchNum + 3);
console.log(result1);
result1 = string.slice(0, searchNum) + string.slice(searchNum + 3);
console.log(result1);


//**3 */
//В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31/12/2025'.
let date = '2025-12-31';
let arr = date.split('-');
result1 = '';
for (let i = arr.length - 1; i >= 0; i--) {
  result1 += arr[i] + '/';
}
console.log(result1.substr(0, result.length-1));




//**4 */
//Дана строка 'JS'. Сделайте из нее строку 'js
string = 'JS';
console.log(string.toLowerCase());




//**5 */
//Дана строка 'я учу javascript!'. Вырежите из нее слово 'учу' и слово 'javascript'
string = 'я учу javascript!';
console.log(string.replace("учу javascript", ' '));


//**6 */
//Дана строка 'я учу javascript!'. Найдите позицию подстроки 'учу'.
string = 'я учу javascript!';
console.log(string.search(/учу.+/));


//**7 */
//Дана строка 'Я-учу-javascript!'. Замените все дефисы на '!' с помощью глобального поиска и замены.
string = 'Я-учу-javascript!';
console.log(string.replace(/-/g, '!'));



//**8 */
//Преобразуйте первую букву строки в верхний регистр.
string = 'я учу javascript!';
// console.log(string[0].toUpperCase() + string.substr(1));
console.log(string.replace(/^[a-z]|[а-я]/, string[0].toUpperCase()));



//**9 */
//Преобразуйте первую букву каждого слова строки в верхний регистр.
string = 'я учу javascript!';
result = string.replace(/(^[a-zа-я])|( [a-zа-я])/gi, (match) => { 
  return match.toUpperCase();
});
console.log(result);



//**10 */
//Преобразуйте строку 'var_test_text' в 'varTestText'. Скрипт, конечно же, должен работать с любыми аналогичными строками
string = 'var_test_text';
result = string.replace(/(_[a-zа-я])/gi, (match) => { 
  return match.substr(1).toUpperCase();
});
console.log(result);