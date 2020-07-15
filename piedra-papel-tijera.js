var usuario;
var ia;

let Checked = null;
//The class name can vary
for (let CheckBox of document.getElementsByClassName('only-one')){
	CheckBox.onclick = function(){
  	if(Checked!=null){
      Checked.checked = false;
      Checked = CheckBox;
    }
    Checked = CheckBox;
  }
}
//////////////////////////////////////////////////////////////////////////////

document.getElementById("start").onclick = maquina;


function maquina(){
    let numero = Math.floor(Math.random() * (11 - 1)) + 1;
    console.log(numero)
    if (numero <= 4){
        ia ='piedra';
        seleccion();
    } else if (numero >= 8) {
        ia ='tijeras';
        seleccion();
    } else {
        ia = 'papel';
        seleccion();
    }
}


function seleccion(){
    usuario = null;
    let piedra = document.getElementById('piedra-chk').checked;
    let papel = document.getElementById('papel-chk').checked;
    let tijeras = document.getElementById('tijeras-chk').checked;
    
    if(piedra){
      usuario = 'piedra';
      console.log(usuario);
      ppt(usuario, ia);
    }else if (papel){
        usuario = 'papel';
        console.log(usuario);
        ppt(usuario, ia);
    }else if (tijeras) {
        usuario = 'tijeras';
        console.log(usuario);
        ppt(usuario, ia);    
    } else if (usuario === null){
        error();
    }
}

function error(){
    document.getElementById('resultado').innerHTML='Seleciona por favor, Piedra, Papel o Tijeras';
}

function ppt(valor1, valor2){
    if(usuario === 'piedra'){
        if(ia === 'papel'){
            document.getElementById('resultado').innerHTML='La Maquina uso papel, Tu pierdes';
        }else if(ia === 'tijeras'){
            document.getElementById('resultado').innerHTML='La Maquina uso tijeras, Tu ganas';
        }else {
            document.getElementById('resultado').innerHTML='La Maquina uso piedra, es un empate';
        }
    } else if(usuario === 'papel'){
        if(ia === 'papel'){
            document.getElementById('resultado').innerHTML='La Maquina uso papel, es un empate';
        }else if(ia === 'tijeras'){
            document.getElementById('resultado').innerHTML='La Maquina uso tijeras, Tu pierdes';
        }else {
            document.getElementById('resultado').innerHTML='La Maquina uso piedra, Tu ganas';
        }
    } else{
        if(ia === 'papel'){
            document.getElementById('resultado').innerHTML='La Maquina uso papel, Tu ganas';
        }else if(ia === 'tijeras'){
            document.getElementById('resultado').innerHTML='La Maquina uso tijeras, es un empate';
        }else {
            document.getElementById('resultado').innerHTML='La Maquina uso piedra, Tu pierdes';
        }
    }
}
