// Компонент повинет створюватися за допомогою функції з двома параметрами: ID контейнера, об'єкт з параметрами відображення компонента (колір, відступи, форма і т.і.).
// SPINNER
// -------------JavaScript--------------

let objArray = { //Об'єкт з параметрами компоненту
    'width':'200px',
    'height':'200px',
    'border': '25px solid rgb(48, 44, 44)',
    'borderRadius':'100%',
    'margin':'70px auto',
    'borderTopColor':'rgb(238, 26, 26)',
    'transition':'all ease 0.5s'
}

// setInterval(goSpinner,1000);
let spinner = document.querySelector('#spinner'); // id контейнеру.
let step = 0;
let timer;
 document.querySelector('.btn-start').onclick = function(){ //Викликаємо функцію по кліку(стартуємо спіннер).
   timer =  setInterval(function(){
        goSpinner(spinner,objArray);
    },1000);
}

document.querySelector('.btn-stop').onclick = function(){ // Зупиняємо спінер.
    clearInterval(timer);
}


// Функція яка приймає два параметри - id контейнеру та об'єкт зі стилями.
function goSpinner(id_Komponent,objectStyle){

    id_Komponent.style.width = objectStyle.width;
    id_Komponent.style.height = objectStyle.height;
    id_Komponent.style.border = objectStyle.border;
    id_Komponent.style.borderRadius = objectStyle.borderRadius;
    id_Komponent.style.margin = objectStyle.margin;
    id_Komponent.style.borderTopColor = objectStyle.borderTopColor;
    id_Komponent.style.transition = objectStyle.transition;
    
    step = step + 360;
    id_Komponent.style.transform = 'rotate' + '('+ step +'deg)';
    return id_Komponent;
}


// ------------------jquery------------------------

$(document).ready(function(){
    let spinnerJq = $('#spinner-jq');
    spinnerJq.css({'width': objArray.width,'height': objArray.height,'border': objArray.border, 'borderRadius': objArray.borderRadius,'margin':objArray.margin,'borderTopColor':objArray.borderTopColor,'transition': objArray.transition});
    
    let stepJq = 0;
    let timerJq = 0;

    $('.btn-start-jq').on('click',function(){
      timerJq =  setInterval(function(){
        stepJq += 360;
        spinnerJq.css('transform','rotate('+stepJq+'deg)');
       },1000);
    });

    $('.btn-stop-jq').on('click',function(){
        clearInterval(timerJq);
    });
    
});