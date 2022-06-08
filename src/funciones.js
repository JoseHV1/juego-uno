'use strict'
    const opciones = document.getElementById("opciones");
    const puntajeJugador = document.getElementById("puntajeJugador");
    const puntajeCPU = document.getElementById("puntajeCPU");
    const resultado = document.getElementById("resultado");
    resultado.innerText = 'Seleccione una Opcion';
    const imgJugador = document.getElementById("img_jugador");
    const imgCPU = document.getElementById("img_cpu");
    const mensaje = document.getElementById("mensajeResultado");
    var puntosJugador = 0;
    var puntosCPU = 0;
    var limite = 0;

    // Duracion Juego
    opciones.addEventListener('change', function(){
        limite = opciones.value;
        if(limite == 5 || limite == 10 || limite == 15 || limite == 20 || limite == 'infinito'){
            document.getElementById("menu_inicio").toggleAttribute('hidden');
            document.getElementById("area_juego").toggleAttribute('hidden');
        }else if(limite == 0){
            alert('Debe seleccionar una opcion para jugar');
        }else{
            alert('Por favor no intente sabotear el juego');
        }
    });

    // Logica Juego
    function jugar(opcionJugador){
        var opcionCPU = Math.floor(Math.random()*(4 - 1)+1);

        if(opcionJugador == opcionCPU){
            switch (opcionJugador) {
                case 1:
                    resultado.innerText = 'Empate ambos sacaron piedra';
                    imgJugador.src = "imgs/piedra.png";
                    imgCPU.src = "imgs/piedra.png";
                    break;
                
                case 2:
                    resultado.innerText = 'Empate ambos sacaron papel';
                    imgJugador.src = "imgs/papel.png";
                    imgCPU.src = "imgs/papel.png";
                    break;

                case 3:
                    resultado.innerText = 'Empate ambos sacaron tijeras'; 
                    imgJugador.src = "imgs/tijeras.png";
                    imgCPU.src = "imgs/tijeras.png";                   
                    break;
            
                default:
                    console.log('error');
                    break;
            }
        }else{
            if(opcionJugador == 1 && opcionCPU == 2){
                resultado.innerText = 'Papel le gana a Piedra (Perdiste)';
                imgJugador.src = "imgs/piedra.png";
                imgCPU.src = "imgs/papel.png";
                puntosCPU += 1;
            }else if(opcionJugador == 1 && opcionCPU == 3){
                resultado.innerText = 'Piedra le gana a Tijeras (Ganaste)';
                imgJugador.src = "imgs/piedra.png";
                imgCPU.src = "imgs/tijeras.png";
                puntosJugador += 1;
            }else if(opcionJugador == 2 && opcionCPU == 1){
                resultado.innerText = 'Papel le gana a Piedra (Ganaste)';
                imgJugador.src = "imgs/papel.png";
                imgCPU.src = "imgs/piedra.png";
                puntosJugador += 1;
            }else if(opcionJugador == 2 && opcionCPU == 3){
                resultado.innerText = 'Tijeras le gana a Papel (Perdiste)';
                imgJugador.src = "imgs/papel.png";
                imgCPU.src = "imgs/tijeras.png";
                puntosCPU += 1;
            }else if(opcionJugador == 3 && opcionCPU == 1){
                resultado.innerText = 'Piedra le gana a Tijeras (Perdiste)';
                imgJugador.src = "imgs/tijeras.png";
                imgCPU.src = "imgs/piedra.png";
                puntosCPU += 1;
            }else if(opcionJugador == 3 && opcionCPU == 2){
                resultado.innerText = 'Tijeras le gana a Papel (Ganaste)';
                imgJugador.src = "imgs/tijeras.png";
                imgCPU.src = "imgs/papel.png";
                puntosJugador += 1;
            }else{
                alert('Ocurrio un error');
            }
            puntajeJugador.innerText = puntosJugador;
            puntajeCPU.innerText = puntosCPU;
        }
        finJuego();
    }

    // Fin Juego
    function finJuego(){
        if(puntosJugador >= limite || puntosCPU >= limite){
            if(puntosJugador > puntosCPU){
                mensaje.innerText = 'Felicidades has Ganado';
            }else{
                mensaje.innerText = 'Ops has Perdido';
            }
            console.log(mensaje);
            
            document.getElementById("area_juego").toggleAttribute('hidden');
            document.getElementById("area_volver").toggleAttribute('hidden');
        }
    }

    // Volver a Jugar