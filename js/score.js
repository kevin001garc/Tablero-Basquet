let scoreL =  document.querySelector('[data-scoreLocal]');
let btnUnoLocal = document.querySelector('[data-local-uno]');
let btnDosLocal = document.querySelector('[data-local-dos]');
let btnTresLocal = document.querySelector('[data-local-tres]');

function ptsLocal(){
    let x = parseInt(scoreL.innerHTML);
    x += 1;
    return scoreL.innerHTML = x;
}
function ptsLocalDos(){
    let x = parseInt(scoreL.innerHTML);
    x += 2;
    return scoreL.innerHTML = x;
}
function ptsLocalTres(){
    let x = parseInt(scoreL.innerHTML);
    x += 3;
    return scoreL.innerHTML = x;
}
btnUnoLocal.addEventListener("click",ptsLocal);
btnDosLocal.addEventListener("click",ptsLocalDos);
btnTresLocal.addEventListener("click",ptsLocalTres);

let scoreV =  document.querySelector('[data-scoreVisit]');
let btnUnoVisit = document.querySelector('[data-visit-uno]');
let btnDosVisit = document.querySelector('[data-visit-dos]');
let btnTresVisit = document.querySelector('[data-visit-tres]');
function ptsVisit(){
    let x = parseInt(scoreV.innerHTML);
    x += 1;
    return scoreV.innerHTML = x;
}
function ptsVisitDos(){
    let x = parseInt(scoreV.innerHTML);
    x += 2;
    return scoreV.innerHTML = x;
}
function ptsVisitTres(){
    let x = parseInt(scoreV.innerHTML);
    x += 3;
    return scoreV.innerHTML = x;
}
btnUnoVisit.addEventListener("click",ptsVisit);
btnDosVisit.addEventListener("click",ptsVisitDos);
btnTresVisit.addEventListener("click",ptsVisitTres);