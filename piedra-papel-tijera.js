// se declaran las variables
var usuario;
var ia;
// se declara la variable temporal Cheked
let Checked = null;
//ciclo for para identificar si mas de un checkbox a sido selecionado en cuyo caso el anterior sera deselecionado en automatico, el ciclo for recorrera los chekboxes y validara si esta en estado true o false guiandose por la clase only-one para identificar cuales elementos va a validar, despues el if validara si esta cekeado y de ser asi el anterior sera des-selecionado
for (let CheckBox of document.getElementsByClassName('only-one')){
	CheckBox.onclick = function(){
        switch(Checked){
            case null:
                Checked = CheckBox;
                break;
            default:
                Checked.checked = false;
                Checked = CheckBox;
                break;
        }
    }
}
//////////////////////////////////////////////////////////////////////////////
// esta linea inicia todo, al dar clic en el boton arrancara la funcion maquina()
document.getElementById("start").onclick = maquina;

// esta funcion es la inteligencia artifical de la maquina, genera numeros aleatorios del 1 al 10 segun su rango elijira piedra, papel o tijeras: 1 al 4 sera piedra del 5 al 7 sera papel y del 8 al 10 sera tijeras, si alguna de estas condiciones se cumple pasara a la funcion seleccion()
function maquina(){
    let numero = Math.floor(Math.random() * (4 - 1)) + 1;
    console.log(numero)
    switch (numero){
        case 1:
            ia ='piedra';
            seleccion();
            break;
        case 2:
            ia ='tijeras';
            seleccion();
            break;
        default:
            ia = 'papel';
            seleccion();
    }
}

// en esta funcion le asignamos el valor a usuario de null para resetear su valor en caso de que deselcionemos algun check box el valor no se quede con el anterior, se revisa el estatus de los checkboxes y se guarda en una variable, en caso se que los check boxes no esten seleccionados nos mandara a la funcion error() si por el contrario uno esta seleccionado le asignara un valor de piedra papel o tijeras segun el check box elegido y seguira a la funcion ppt()
function seleccion(){
    usuario = null;
    let piedra = document.getElementById('piedra-chk').checked;
    let papel = document.getElementById('papel-chk').checked;
    let tijeras = document.getElementById('tijeras-chk').checked;
    
    switch(piedra){
        case true:
            usuario = 'piedra';
            console.log(usuario);
            ppt(usuario, ia);
            break;
        default:
            switch(papel){
                case true:
                    usuario = 'papel';
                    console.log(usuario);
                    ppt(usuario, ia);
                    break;
                default:
                    switch(tijeras){
                        case true:
                            usuario = 'tijeras';
                            console.log(usuario);
                            ppt(usuario, ia);
                            break
                        default:
                            error();
                    }
            }
    }                            
}
// esta funcion es por si no se selecciono ningun chekbox, lo que hace es escribir en el h2 asignado que por favor se seleccione uno de los checkboxes
function error(){
    document.getElementById('resultado').innerHTML='Seleciona por favor, Piedra, Papel o Tijeras';
}
// esta funcion piedra papel tijeras abreviada toma 2 valores dados en la funcion anterior en este caso 'usuario' y 'ia', usuario es validado por un if, en caso de cumplirse entrara a otro siclo de ifs donde se comparara con la variable ia que es el resultado de la funcion maquina, segun los valores de las variables se cumplira 1 de los 9 esenarios diferentes
function ppt(){
    switch(usuario){
        case 'piedra':
            switch(ia){
                case 'papel':
                    document.getElementById('resultado').innerHTML='La Maquina uso papel, Tu pierdes';
                    break;
                case 'tijeras':
                    document.getElementById('resultado').innerHTML='La Maquina uso tijeras, Tu ganas';
                    break;
                default:
                    document.getElementById('resultado').innerHTML='La Maquina uso piedra, es un empate';
                    break;
            }
            break;
        case 'papel':
            switch(ia){
                case 'papel':
                    document.getElementById('resultado').innerHTML='La Maquina uso papel, es un empate';
                    break;
                case 'tijeras':
                    document.getElementById('resultado').innerHTML='La Maquina uso tijeras, Tu pierdes';
                    break;
                default:
                    document.getElementById('resultado').innerHTML='La Maquina uso piedra, Tu ganas';
                    break;
            }
            break;
        default:
            switch(ia){
                case 'papel':
                    document.getElementById('resultado').innerHTML='La Maquina uso papel, Tu ganas';
                    break;
                case 'tijeras':
                    document.getElementById('resultado').innerHTML='La Maquina uso tijeras, es un empate';
                    break;
                default:
                    document.getElementById('resultado').innerHTML='La Maquina uso piedra, Tu pierdes';
                    break;
            }
            break;
    }
}