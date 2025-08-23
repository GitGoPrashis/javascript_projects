
// for generating the random number 

const mybutton = document.getElementById("rollbtn");
const mynumber = document.getElementById("myLabel");
const min = 1;
const max = 6;
let randomnum;

mybutton.onclick = function(){
    randomnum = Math.floor(Math.random()*max) + min;
    mynumber.textContent = randomnum
}
