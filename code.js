var main_input = document.querySelector("#main-scr input");
var func_btn = document.querySelector(".btn");
var quest = document.querySelector("#q-scr p");
const history_box = document.querySelector("#nav #history_box");
const history = document.querySelector("#history p");
function exebtn(x) {
    main_input.value = main_input.value +x;
}
var funct = '';
var z = '';
// func_btn.click = quest;
function functexe(y) {
    if (y == 'ac') {
      main_input.value = '';
      quest.innerHTML= '';
      z =main_input.value;
    } 
    else if (y == 'del'){
      main_input.value=z.substring(0,z.length-1);
    }
    else if (funct=='divide'|| funct=='add' || funct=='sub'|| funct=='multiply' || funct=='percent') {
        // var nq = quest.innerHTML.substring(0,quest.innerHTML.length-1);
        switch(y) {
            case 'add':
                quest.innerHTML= z + ' +' ;
                main_input.value='';
                funct = 'add';
              break;
            case 'sub':
                quest.innerHTML= z + ' -' ;
                main_input.value='';
                funct = 'sub';
              break;
            case 'multiply':
                quest.innerHTML= z + ' x' ;
                main_input.value='';
                funct = 'multiply';
              break;
            case 'divide':
                quest.innerHTML= z + ' /';
                main_input.value='';
                funct = 'divide';
              break;
            case 'percent':
                quest.innerHTML= z + ' %' ;
                main_input.value='';
                funct = 'percent';
              break;
            
          }
    } 
    else {
        switch(y) {
            case 'add':
                z=main_input.value;
                quest.innerHTML= z + ' +' ;
                main_input.value='';
                funct = 'add';
              break;
            case 'sub':
                z=main_input.value;
                quest.innerHTML= z + ' -' ;
                main_input.value='';
                funct = 'sub';
              break;
            case 'multiply':
                z=main_input.value;
                quest.innerHTML= main_input.value + ' x' ;
                main_input.value='';
                funct = 'multiply';
              break;
            case 'divide':
                z=main_input.value;
                quest.innerHTML= main_input.value + ' /';
                main_input.value='';
                funct = 'divide';
              break;
            case 'percent':
                z=main_input.value;
                quest.innerHTML= main_input.value + ' %' ;
                main_input.value='';
                funct = 'percent';
              break;
            
          }
    }
}
function equal() {

  switch(funct) {
    case 'add':
        quest.innerHTML=quest.innerHTML +' '+ main_input.value;
        main_input.value = parseInt(z) + parseInt(main_input.value);
        z= main_input.value;
        funct='' 
        history.innerHTML=history.innerHTML+'<br>'+ quest.innerHTML +" = "+ main_input.value;
        console.log(quest.innerHTML +" = "+ main_input.value);
      break;
    case 'sub':
        quest.innerHTML=quest.innerHTML +' '+ main_input.value;
        main_input.value = parseInt(z) - parseInt(main_input.value);
        z= main_input.value;
        funct=''
        history.innerHTML=history.innerHTML+'<br>'+ quest.innerHTML +" = "+ main_input.value;
        console.log(quest.innerHTML +" = "+ main_input.value);
      break;
    case 'multiply':
        quest.innerHTML=quest.innerHTML +' '+ main_input.value;
        main_input.value = parseInt(z) * parseInt(main_input.value);
        z= main_input.value;
        funct=''
        history.innerHTML=history.innerHTML+'<br>'+ quest.innerHTML +" = "+ main_input.value;
        console.log(quest.innerHTML +" = "+ main_input.value);
      break;
    case 'divide':
        quest.innerHTML=quest.innerHTML +' '+ main_input.value;
        main_input.value = parseInt(z) / parseInt(main_input.value);
        z= main_input.value;
        funct=''
        history.innerHTML=history.innerHTML+'<br>'+ quest.innerHTML +" = "+ main_input.value;
        console.log(quest.innerHTML +" = "+ main_input.value);
      break;
    case 'percent':
        quest.innerHTML=quest.innerHTML +' '+ main_input.value;
        main_input.value = parseInt(z) % parseInt(main_input.value);
        z= main_input.value;
        funct=''
        history.innerHTML=history.innerHTML+'<br>'+ quest.innerHTML +" = "+ main_input.value;
        console.log(quest.innerHTML +" = "+ main_input.value);
      break;
    
  }
}