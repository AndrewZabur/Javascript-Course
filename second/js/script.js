let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let textMonths = ["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"];
let daysOfWeek = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "cуббота"];
let endings = ["день","дня","дней"];

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
		document.getElementById("toTheNewYear").innerHTML = `До ${newYear} года ${left(daysToTheNewYear)} ${daysToTheNewYear} ${endOfWord(daysToTheNewYear)}.`;
	}
	else{
		daysToTheNewYear = 365 - daysOverThisYear();
		document.getElementById("toTheNewYear").innerHTML = `До ${newYear} года ${left(daysToTheNewYear)} ${daysToTheNewYear} ${endOfWord(daysToTheNewYear)}.`;
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

function endOfWord(dayNum){
	if((dayNum%100 > 1) && (dayNum%100 < 5)){
		return endings[1];
	}
	else if((dayNum%10 > 1 && dayNum%10 < 10) || (dayNum%10 == 0) || (dayNum%100 == 11)){
		return endings[2];
	}
	else if(dayNum%10 == 1){
		return endings[0];
	}
}

function left(dayNum){
	return endOfWord(dayNum)==endings[0] ? "остался" : "осталось";
}








