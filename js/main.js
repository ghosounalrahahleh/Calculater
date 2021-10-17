
var screen= document.querySelector('.screen');

function insert(num){
    screen.innerHTML=document.querySelector('.screen').innerHTML+num;
   
}

function equal(){
    var exp=screen.innerHTML;
    screen.innerHTML=eval(screen.innerHTML);
   if( screen.innerHTML %10 !=0)
   screen.innerHTML=eval(screen.innerHTML).toFixed(10);
}
function c(){
    screen.innerHTML="";
}