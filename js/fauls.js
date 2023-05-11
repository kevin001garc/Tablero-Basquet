let fVisit = document.querySelector('[data-faulVisit]');

let btnFvisit = document.querySelector('[data-visit-faul]');

function faulVisitante(){
    let x = parseInt(fVisit.innerHTML);
    if( x < 5){
        x += 1;
    }

    return fVisit.innerHTML = x;
}
btnFvisit.addEventListener("click",faulVisitante);


let fLocal = document.querySelector('[data-faulLocal]');

let btnFlocal =  document.querySelector('[data-local-faul]');

function faulLocal(){
    let x = parseInt(fLocal.innerHTML);
    if( x < 5){
        x += 1;
    }

    return fLocal.innerHTML = x;
}
btnFlocal.addEventListener("click",faulLocal);