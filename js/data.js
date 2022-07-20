import {user_ob} from './usuarios.js';
import {user} from './user_arrive.js'

let caja_texto = document.querySelector("#caja_texto");
let caja_usuario = document.querySelector('#root')


let bt_siguiente = document.getElementById("bt_siguiente");
let bt_anterior = document.getElementById("bt_anterior");
let bt_user = document.getElementById("bt_user");

// USUARIO ACTUAL
 let nameUser = 0;
caja_texto.innerHTML = user[0][1]

function boton_siguiente(){
    if(nameUser <=6){
        nameUser++;
        caja_texto.innerHTML = user[nameUser][1];
    }

}

function boton_anterior(){
    if(nameUser>=1)
    nameUser--;
    caja_texto.innerHTML = user[nameUser][1];
}


bt_siguiente.addEventListener('click', boton_siguiente)
bt_anterior.addEventListener('click', boton_anterior)

//INERT HTML
function mostrar(){
    caja_usuario.innerHTML = '<h1>' + user_ob[nameUser].nickname +'<h1>'+
    '<h1>' + user_ob[nameUser].name + '</h1>'+
    '<h1>' + user_ob[nameUser].address + '</h1>'+
    '<h1>' + user_ob[nameUser].email + '</h1>'+
    '<h1>' + user_ob[nameUser].phone_number + '</h1>';
}

bt_user.addEventListener('click', mostrar);
