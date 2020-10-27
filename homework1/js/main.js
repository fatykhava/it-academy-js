let yourName = prompt('ВВЕДИТЕ ВАШЕ ИМЯ');

while (!yourName || isFinite(yourName)) {
	yourName = prompt('ВЫ НЕ ВВЕЛИ ИМЯ, ВВЕДИТЕ, ПОЖАЛУЙСТА');
}

let lastName = prompt('ВВЕДИТЕ ВАШУ ФАМИЛИЮ');

while (!lastName || isFinite(lastName)) {
	lastName = prompt('ВЫ НЕ ВВЕЛИ ФАМИЛИЮ, ВВЕДИТЕ, ПОЖАЛУЙСТА');
}

let patronymic = prompt('ВВЕДИТЕ ВАШЕ ОТЧЕСТВО');

while (!patronymic || isFinite(patronymic)) {
	patronymic = prompt('ВЫ НЕ ВВЕЛИ ОТЧЕСТВО, ВВЕДИТЕ, ПОЖАЛУЙСТА');
}

let age = prompt('ВАШ ВОЗРАСТ');

while (age > 80 || age < 18 || isNaN(age)) {
	age = prompt('НЕКОРРЕКТНЫЙ ВОЗВРАСТ, ВВЕДИТЕ ВАШ ВОЗРАСТ (ОТ 18 ДО 80)')
}

let ageInDays = age * 365;
let ageInFifeYears = parseInt(age) + 5;
let sex = confirm('Вы женщина?'),
	textFio = 'Ваше ФИО:',
	textAgeYears = 'Ваш возраст в годах:',
	textAgeDays = 'Ваш возраст в днях:',
	textFutureAge = 'Через 5 лет вам будет:',
	textSexWoman = 'Ваш пол: женский',
	textSexMan = 'Ваш пол: мужской',
	textNotOld = 'Вы на пенсии: нет',
	textOld = 'Вы на пенсии: да';

if (sex === true) {
	if (age > 60) {
		alert(`${textFio} ${lastName} ${yourName} ${patronymic}\n${textAgeYears} ${age}\n${textAgeDays} ${ageInDays}\n${textFutureAge} ${ageInFifeYears}\n${textSexWoman}\n${textOld}`);
	} 	else {
		alert(`${textFio} ${lastName} ${yourName} ${patronymic}\n${textAgeYears} ${age}\n${textAgeDays} ${ageInDays}\n${textFutureAge} ${ageInFifeYears}\n${textSexWoman}\n${textNotOld}`);
	} 
} else {
		if (age > 64) {
			alert(`${textFio} ${lastName} ${yourName} ${patronymic}\n${textAgeYears} ${age}\n${textAgeDays} ${ageInDays}\n${textFutureAge} ${ageInFifeYears}\n${textSexMan}\n${textOld}`);
		} else {
			alert(`${textFio} ${lastName} ${yourName} ${patronymic}\n${textAgeYears} ${age}\n${textAgeDays} ${ageInDays}\n${textFutureAge} ${ageInFifeYears}\n${textSexMan}\n${textNotOld}`);
		} 
	}
