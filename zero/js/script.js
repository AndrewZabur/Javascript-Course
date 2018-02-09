$("#input").keypress(function(event){
               if(event.keyCode==13){
                event.preventDefault();
                answer();
               }
 });

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

function scroll(){
    $('#indiv').animate({scrollTop: 9999});
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
                              ul.appendChild(li);}, 1000);   
         scroll(); 
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
                              ul.appendChild(li);}, 1000);
         scroll(); 
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
                              ul.appendChild(li);}, 1000);    
         scroll();     
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
                              ul.appendChild(li);}, 1000); 
         scroll();        
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
                              ul.appendChild(li);}, 1000);  

        scroll(); 

    }
    else {
        let text = document.createTextNode('Sorry I can`t answer. Try something else.');
        

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
                              ul.appendChild(li);}, 1000);  

        scroll(); 

    }

    scroll();
}

 
  

