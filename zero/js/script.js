$("#input").keypress(function(event){
    if(event.keyCode==13){
        event.preventDefault();
        answer();
    }
});

function scroll(){
        let divElem = document.getElementById('indiv'); 
        divElem.scrollTop = divElem.scrollHeight - divElem.clientHeight;
}

function formatTime(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let strTime;
    if(minutes < 10)
    {
       strTime = hours + ":" + "0" + minutes;
    }
    else{
       strTime = hours + ":" + minutes;   
    }
    
    return strTime;
}

function text() {

    let ul = document.getElementById('msgList');
    
    let li = document.createElement('li');
    let div = document.createElement('div');
    let img = document.createElement('img');
    let p = document.createElement('p');
    let span = document.createElement('span');

    let msg = document.querySelector('input[type="text"]').value;
    let text = document.createTextNode(msg);
    let time = document.createTextNode(formatTime(new Date()));

    if(msg !== ""){
        
        div.classList.add('inn', 'lighter');
        img.setAttribute('src', 'img/tom.png');
        p.appendChild(text);
        span.classList.add('time-right');
        span.appendChild(time);

        div.appendChild(img);
        div.appendChild(p);
        div.appendChild(span);
        li.appendChild(div);
        ul.appendChild(li);
        
        document.querySelector('input[type="text"]').value = ""; 

        scroll(); 
    
    }

        return msg;
}

function answer() {

    let question = text();

    let ul = document.getElementById('msgList');
    
    let li = document.createElement('li');
    let div = document.createElement('div');
    let img = document.createElement('img');
    let p = document.createElement('p');
    let span = document.createElement('span');

    let time = document.createTextNode(formatTime(new Date()));    

    if((/(^|\W)Hello|Hi(\W|$)/i).test(question)) {                         
        
        let text = document.createTextNode('Hello Tom! I can answer for a couple of your questions.');
        
        div.classList.add('inn', 'darker');
        img.classList.add('right');
        p.classList.add('text-right');
        span.classList.add('time-left') 

        img.setAttribute('src', 'img/alberto.png');
        p.appendChild(text);
        span.appendChild(time);

        div.appendChild(img);
        div.appendChild(p);
        div.appendChild(span);
        setTimeout(function(){li.appendChild(div);
                              ul.appendChild(li);
                              scroll();}, 1000);   
    }

    else if((/^When the javascript was invented\?$/).test(question)){

        let text = document.createTextNode('Javascript was invented by Brandan Ayk in 1995!');
        

        div.classList.add("inn", "darker");
        img.classList.add("right");
        p.classList.add("text-right");    
        span.classList.add('time-left') 

        img.setAttribute('src', 'img/alberto.png');
        p.appendChild(text);
        span.appendChild(time);

        div.appendChild(img);
        div.appendChild(p);
        div.appendChild(span);
        
        setTimeout(function(){li.appendChild(div);
                              ul.appendChild(li);
                              scroll();}, 1000);
    }

    else if((/^Do you think javascript worth learning\?$/).test(question)){
        let text = document.createTextNode('Sure this language is very popular nowadays!');
        

        div.classList.add("inn", "darker");
        img.classList.add("right");
        p.classList.add("text-right");    
        span.classList.add('time-left') 

        img.setAttribute('src', 'img/alberto.png');
        p.appendChild(text);
        span.appendChild(time);

        div.appendChild(img);
        div.appendChild(p);
        div.appendChild(span);
        
        setTimeout(function(){li.appendChild(div);
                              ul.appendChild(li);
                              scroll();}, 1000);      
    }

    else if((/(^|\W{1,})Jquery(\W|$)/i).test(question)){
        let text = document.createTextNode('Jquery is a powerful javascript library!');
        

        div.classList.add("inn", "darker");
        img.classList.add("right");
        p.classList.add("text-right");    
        span.classList.add('time-left') 

        img.setAttribute('src', 'img/alberto.png');
        p.appendChild(text);
        span.appendChild(time);

        div.appendChild(img);
        div.appendChild(p);
        div.appendChild(span);
        
        setTimeout(function(){li.appendChild(div);
                              ul.appendChild(li);
                              scroll();}, 1000);     
    }

    else if((/^Where did you find this facts\?$/).test(question)){
        let text = document.createTextNode('I have an internet and a browser, so thats was easy)');
        

        div.classList.add("inn", "darker");
        img.classList.add("right");
        p.classList.add("text-right");    
        span.classList.add('time-left') 

        img.setAttribute('src', 'img/alberto.png');
        p.appendChild(text);
        span.appendChild(time);

        div.appendChild(img);
        div.appendChild(p);
        div.appendChild(span);
        
        setTimeout(function(){li.appendChild(div);
                              ul.appendChild(li);
                              scroll();}, 1000);  
    }
}

 
  

