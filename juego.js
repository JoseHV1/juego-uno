'use strict'
    // Inicio
    const btnJugar = document.getElementById("btnJugar");
    const contenedorJuego = document.getElementById("juego");
    var opcion = document.getElementById("limite");
    var limiteSeleccionado = document.getElementById("limiteSeleccionado");
    var limite;
    var puntosCPU = 0; 
    var puntosJugador = 0;

    btnJugar.addEventListener('click', function(){
        setTimeout(() => {
            limite = opcion.value;

            if(limite != 5 && limite != 10 && limite != 15 && limite != 20 && limite != 'infinito'){
                alertify.warning('Por favor seleccione cuantas partidas durara el juego');
            }else if(limite == 5 || limite == 10 || limite == 15 || limite == 20){
                limiteSeleccionado.innerText = "Limite partidas Ganadas "+limite;
                document.getElementById("presentacion").classList.add('hidden');
                contenedorJuego.classList.remove('hidden');
            }else if(limite == 'infinito'){
                limiteSeleccionado.innerText = "Juego "+limite;
                document.getElementById("presentacion").classList.add('hidden');
                contenedorJuego.classList.remove('hidden');
            }
        }, 2000);
    });

    // Puntaje
    const mostrar = document.getElementById("mostrar");
    mostrar.innerText = 'Seleccione una Opcion para Jugar';

    const resultadoJugado = document.getElementById("resultado_jugador");
    const resultadoCPU = document.getElementById("resultado_cpu");
    contadorJugador.innerText = puntosJugador;
    contadorCPU.innerText = puntosCPU;

    // Imagenes
    var imagen = document.createElement('img');
    resultadoJugado.appendChild(imagen);

    var imagen_dos = document.createElement('img');
    resultadoCPU.appendChild(imagen_dos);

    // Logica Juego
    function juego(opcionJugada) {
        if(puntosJugador >= limite || puntosCPU >= limite){
            alertify.notify('Finalizó el Juego. Por favor espere el Resultado');
        }else{
            var opciones = Math.floor(Math.random() * (4-1) + 1);

            if(opciones == opcionJugada){
                switch (opcionJugada) {
                    case 1:
                        imagen.src = 'assets/img/piedra.png';
                        efectoImagenes()
                        setTimeout(() => {
                            imagen_dos.src = 'assets/img/piedra.png';
                            resultadoJugado.appendChild(imagen);
                            resultadoCPU.appendChild(imagen_dos);
                            mostrar.innerText = 'Empate Ambos sacaron Piedra';
                        }, 1850);
                        break;
                
                    case 2:
                        imagen.src = 'assets/img/papel.png';
                        efectoImagenes();
                        setTimeout(() => {
                            imagen_dos.src = 'assets/img/papel.png';
                            resultadoJugado.appendChild(imagen);
                            resultadoCPU.appendChild(imagen_dos); 
                            mostrar.innerText = 'Empate Ambos sacaron Papel';
                        }, 1850);
                        break;
    
                    case 3:
                        imagen.src = 'assets/img/tijeras.png';
                        efectoImagenes();
                        setTimeout(() => {
                            imagen_dos.src = 'assets/img/tijeras.png';
                            resultadoJugado.appendChild(imagen);
                            resultadoCPU.appendChild(imagen_dos); 
                            mostrar.innerText = 'Empate Ambos sacaron Tijeras';
                        }, 1850);
                        break;
                    
                    default:
                        mostrar.innerText = 'Error. Vuelve a intentar';
                        break;
                }
            }else{
                if(opciones == 1 && opcionJugada == 2)
                {
                    imagen.src = 'assets/img/papel.png';
                    efectoImagenes();
                    setTimeout(() => {
                        imagen_dos.src = 'assets/img/piedra.png';
                        resultadoJugado.appendChild(imagen);
                        resultadoCPU.appendChild(imagen_dos);
                        mostrar.innerText = 'Papel le gana a Piedra (Ganaste)';
                        puntosJugador += 1;
                        puntos();
                        finalizarJuego();
                    }, 1850);
                }else if(opciones == 1 && opcionJugada == 3)
                {
                    imagen.src = 'assets/img/tijeras.png';
                    efectoImagenes();
                    setTimeout(() => {
                        imagen_dos.src = 'assets/img/piedra.png';
                        resultadoJugado.appendChild(imagen);
                        resultadoCPU.appendChild(imagen_dos);
                        mostrar.innerText = 'Piedra le gana a Tijeras (Perdiste)';
                        puntosCPU += 1;
                        puntos();
                        finalizarJuego();
                    }, 1850);
                }else if(opciones == 2 && opcionJugada == 1 )
                {
                    imagen.src = 'assets/img/piedra.png';
                    efectoImagenes();
                    setTimeout(() => {
                        imagen_dos.src = 'assets/img/papel.png';
                        resultadoJugado.appendChild(imagen);
                        resultadoCPU.appendChild(imagen_dos);
                        mostrar.innerText = 'Papel le gana a Piedra (Perdiste)';
                        puntosCPU += 1;
                        puntos();
                        finalizarJuego();
                    }, 1850);
                }else if(opciones == 2 && opcionJugada == 3)
                {
                    imagen.src= 'assets/img/tijeras.png';
                    efectoImagenes();
                    setTimeout(() => {
                        imagen_dos.src= 'assets/img/papel.png';
                        resultadoJugado.appendChild(imagen);
                        resultadoCPU.appendChild(imagen_dos);
                        mostrar.innerText = 'Tijeras le gana a Papel (Ganaste)';
                        puntosJugador += 1;
                        puntos();
                        finalizarJuego();
                    }, 1850);
                }else if(opciones == 3 && opcionJugada == 1)
                {
                    imagen.src= 'assets/img/piedra.png';
                    efectoImagenes();
                    setTimeout(() => {
                        imagen_dos.src= 'assets/img/tijeras.png';
                        resultadoJugado.appendChild(imagen);
                        resultadoCPU.appendChild(imagen_dos);
                        mostrar.innerText = 'Piedra le gana a Tijeras (Ganaste)';
                        puntosJugador += 1;
                        puntos();
                        finalizarJuego();
                    }, 1850);
                }else if(opciones == 3 && opcionJugada == 2)
                {
                    imagen.src= 'assets/img/papel.png';
                    efectoImagenes();
                    setTimeout(() => {
                        imagen_dos.src= 'assets/img/tijeras.png';
                        resultadoJugado.appendChild(imagen);
                        resultadoCPU.appendChild(imagen_dos); 
                        mostrar.innerText = 'Tijeras la gana a Papel (Perdiste)';
                        puntosCPU += 1;
                        puntos();
                        finalizarJuego();
                    }, 1850);
                }else{
                    alertify.error('Por favor recarga la Pagina');
                }
            }
        }
    }

    function finalizarJuego(){
        // Finalizar Juego
        if(limite != 'infinito'){
            if(puntosJugador >= limite || puntosCPU >= limite){
                document.querySelector("#btns").classList.add('hidden');

                setTimeout(() => {
                    // Notificar Resultado
                    limiteSeleccionado.innerText = '';
                    contenedorJuego.classList.add('hidden');
                    document.getElementById("notificacion").classList.remove('hidden');
                    let resultado = document.getElementById("resultado");

                    if(puntosJugador > puntosCPU){
                        resultado.innerText = 'Felicidades! Has Ganado el Juego';
                    }else{
                        resultado.innerText = 'Opsss! Has Perdido el Juego';
                    }

                    document.getElementById("jugarNuevo").classList.remove('hidden');
                }, 3000);
            }
        }
    }

    function puntos(){
        contadorJugador.innerText = puntosJugador;
        contadorCPU.innerText = puntosCPU;
    }

    // Jugar de Nuevo
    function volverJugar(opcionMenu){
        document.getElementById("jugarNuevo").classList.add('hidden');
        if(opcionMenu == 'Si'){
            document.getElementById("presentacion").classList.remove('hidden');
            document.querySelector("#btns").classList.remove('hidden');
            resultado.innerText = '';
            puntosJugador = 0;
            puntosCPU = 0;
            contadorJugador.innerText = puntosJugador;
            contadorCPU.innerText = puntosCPU;
            mostrar.innerText = 'Seleccione una Opcion para Jugar';
            imagen.src = '';
            resultadoJugado.appendChild(imagen);
            imagen_dos.src = '';
            resultadoCPU.appendChild(imagen_dos);        
        }else if(opcionMenu == 'No'){
            resultado.innerHTML = `
                <h3 class="text-xl text-center">Gracias por Jugar</h3>
                <p class="text-gray-600 mt-4 text-center">by José Hernández</p>
            `
            window.location.href = "https://www.google.es";
        }else{
            alertify.warning('Por favor no sabotee el Juego');
        }
    }

    // Efecto de Imagenes
    function efectoImagenes(){
        setTimeout(() => {
            imagen_dos.src = 'assets/img/tijeras.png';
            console.log('tijeras');
        }, 200);
        setTimeout(() => {
            imagen_dos.src = 'assets/img/papel.png';
            console.log('papel');
        }, 400);
        setTimeout(() => {
            imagen_dos.src = 'assets/img/piedra.png';
            console.log('piedra');
        }, 600);
        setTimeout(() => {
            imagen_dos.src = 'assets/img/tijeras.png';
            console.log('tijeras');
        }, 800);
        setTimeout(() => {
            imagen_dos.src = 'assets/img/papel.png';
            console.log('papel');
        }, 1000);
        setTimeout(() => {
            imagen_dos.src = 'assets/img/piedra.png';
            console.log('piedra');
        }, 1200);
        setTimeout(() => {
            imagen_dos.src = 'assets/img/tijeras.png';
            console.log('tijeras');
        }, 1400);
        setTimeout(() => {
            imagen_dos.src = 'assets/img/papel.png';
            console.log('papel');
        }, 1600);
        setTimeout(() => {
            imagen_dos.src = 'assets/img/piedra.png';
            console.log('piedra');
        }, 1800);
    }