let Interface = document.querySelector('.container');
let Component = document.querySelector('.showContainer');
let btn = document.querySelector('.showContainer input');
let x = document.querySelector('.container input');
let body = document.querySelector('body');

btn.onclick = function(){
    Interface.classList.toggle('disappear');
    Component.classList.toggle('disappear');
    body.classList.toggle('shadow');
}

x.onclick = function(){
    Interface.classList.toggle('disappear');
    Component.classList.toggle('disappear');
    body.classList.toggle('shadow');
}