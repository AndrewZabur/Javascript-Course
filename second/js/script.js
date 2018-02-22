let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let textMonths = ["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"];
let daysOfWeek = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "cуббота"];

window.onload = function() {
	setInterval(function(){
		todaysDay();		
		clock();		
		toTheNewYear(new Date().getYear());	
	}, 1000);
}

function todaysDay(){
	let monthNumber = new Date().getMonth();
	let dayOfTheWeek = new Date().getDay();
	let day = new Date().getDate();
	document.getElementById("today").innerHTML = `Сегодня ${daysOfWeek[dayOfTheWeek]}, ${day}-е ${textMonths[monthNumber]}.`;
}

function clock() {
    let date = new Date();
    let textDate = date.toLocaleTimeString();
    document.getElementById("time").innerHTML = `Текущее время: ${textDate}`;
}

function toTheNewYear(year){
	let daysToTheNewYear;
	let newYear = new Date().getFullYear() + 1;	
	if(isLeapYear(year)){
		months[1] = 29;
		daysToTheNewYear = 366 - daysOverThisYear();
		document.getElementById("toTheNewYear").innerHTML = `До ${newYear} года осталось ${daysToTheNewYear} дней.`;
	}
	else{
		daysToTheNewYear = 365 - daysOverThisYear();
		document.getElementById("toTheNewYear").innerHTML = `До ${newYear} года осталось ${daysToTheNewYear} дней.`;
	}
}

function daysOverThisYear(){
	let daysOverThisYear = 0;
	for (let i = 0; i < new Date().getMonth(); i++) {
			daysOverThisYear += months[i];
	}
	daysOverThisYear += new Date().getDate() - 1;
	console.log(daysOverThisYear);
	return daysOverThisYear;
}

function isLeapYear(year){
	if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)){
		return true;	
	}
	else{
		return false;
	}
}







