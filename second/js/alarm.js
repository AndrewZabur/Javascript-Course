document.getElementById("press").onclick = function(){
    let myAlarm = new MyAlarm();
    myAlarm.appendNewAlarmNode();
    setTimeout(function(){
        myAlarm.provideSound();
    }, myAlarm.alarmingTime(myAlarm.setAlarmDate()));  
} 

class MyAlarm {
                 
    constructor(){
        this.getTime = document.getElementById("setTime");
        this.getDate = document.getElementById("setDate");
        this.alarms = document.getElementById("event");
        this.audio = new Audio();
    }


    setAlarmDate(){
       let time = this.getTime.valueAsNumber;
       let date = this.getDate.valueAsDate;
       date.setMinutes(0);
       date.setHours(0);
       return date.getTime() + time;  
    }   

    alarmingTime(alarmTime){
        return alarmTime - new Date().getTime();
    }

    provideSound(){
        this.audio.src = 'js/Sound_18565.mp3';
        this.audio.play();
    }

    createNewAlarmNode(){
        let position = this.alarms.children.length + 1;
        return `<li id = "alarmEvent${position}">
                    <span>Время: ${this.getTime.value}; Дата: ${this.getDate.value};</span>
                    <button class="btn btn-secondary" type="button" id="delete${position}">Удалить</button>
                </li>`;
    }

    appendNewAlarmNode(){
        let newAlarm = this.createNewAlarmNode();
        this.alarms.insertAdjacentHTML('beforeend', newAlarm);
    }
}


