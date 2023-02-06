/* 1.
"use script"
let num = document.querySelector('#num');
let result = document.querySelector('.result');
num.addEventListener('blur', function(){
    console.log(result);
    result.textContent = result.textContent + '' + num.ariaValueMax;
}); */

/* 19. 
"use script"
let inp = document.querySelector('input');
inp.addEventListener('blur', func);
function func () {
    let content = inp.value;
    if (content > 0 && content < 101){
        inp.style.background = 'green';

    } else {
        inp.style.background = 'red';
    }
}
*/


/* 21.

let elem = document.querySelector("#elem");
let button = document.querySelector("button");
button.addEventListener("click", func);
function func (){
    let a = ""
    let b = elem.value
    for (let i = 0; i<b.Length; i++){
        a += b.charAt(Math.floor(Math.random() * b.Length))
    }
    elem.value = a
}
*/


24.


/* let elem1 = document.querySelector("#elem1")
let elem2 = document.querySelector("#elem2")
let elem3 = document.querySelector("#elem3")
let p = document.querySelector("#p")
let button =  document.querySelector("button")
button.addEventListener("click", func)
function func () {
    let a = elem1.value
    let b = elem2.value
    let c = elem3.value

    let x = b*b-4*a*c
    if (x<0) {
        x1 = "нет корней";
        x2 = "нет корней";
    }
    else if (x===0){
        x1=-b/(2*a)
        x2=x1
    }
    else {
        x1=(-b+Math.sqrt(x))/(2*a)
        x2=(-b+Math.sqrt(x))/(2*a)
    }
    p.textContent = x1 + "" +x2
} */