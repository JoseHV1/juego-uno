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
                alert('Por favor. Seleccione una Opcion');
            }else if(limite == 5 || limite == 10 || limite == 15 || limite == 20){
                limiteSeleccionado.innerText = "Limite Ganadas "+limite;
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
    // imagen.classList = 'rounded-md';
    // imagen.src = 'assets/img/default.png';
    resultadoJugado.appendChild(imagen);

    var imagen_dos = document.createElement('img');
    // imagen_dos.classList = 'rounded-md';
    // imagen_dos.src = 'assets/img/default.png';
    resultadoCPU.appendChild(imagen_dos);

    // Logica Juego
    function juego(opcionJugada) {
        if(puntosJugador >= limite || puntosCPU >= limite){
            alert('Finalizó el Juego. Por favor espere el Resultado');
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
                        }, 3000);
                        break;
                
                    case 2:
                        imagen.src = 'assets/img/papel.png';
                        efectoImagenes();
                        setTimeout(() => {
                            imagen_dos.src = 'assets/img/papel.png';
                            resultadoJugado.appendChild(imagen);
                            resultadoCPU.appendChild(imagen_dos); 
                            mostrar.innerText = 'Empate Ambos sacaron Papel';
                        }, 3000);
                        break;
    
                    case 3:
                        imagen.src = 'assets/img/tijeras.png';
                        efectoImagenes();
                        setTimeout(() => {
                            imagen_dos.src = 'assets/img/tijeras.png';
                            resultadoJugado.appendChild(imagen);
                            resultadoCPU.appendChild(imagen_dos); 
                            mostrar.innerText = 'Empate Ambos sacaron Tijeras';
                        }, 3000);
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
                    }, 3000);
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
                    }, 3000);
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
                    }, 3000);
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
                    }, 3000);
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
                    }, 3000);
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
                    }, 3000);
                }else{
                    alertify.error('Error. Recarga la Pagina');
                }
            }
        }
    }

    function finalizarJuego(){
        // Finalizar Juego
        if(limite != 'infinito'){
            if(puntosJugador >= limite || puntosCPU >= limite){
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
                }, 2000);
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
            resultado.innerText = '';
            puntosJugador = 0;
            puntosCPU = 0;
            contadorJugador.innerText = puntosJugador;
            contadorCPU.innerText = puntosCPU;
            mostrar.innerText = 'Seleccione una Opcion para Jugar';
            imagen.src = 'assets/img/default.png';
            resultadoJugado.appendChild(imagen);
            imagen_dos.src = 'assets/img/default.png';
            resultadoCPU.appendChild(imagen_dos);        
        }else if(opcionMenu == 'No'){
            resultado.innerHTML = `
                <h3 class="text-lg md:text-xl text-center">Gracias por Jugar</h3>
                <p class="text-gray-600 mt-3 text-sm text-center">by José Hernández</p>
            `
            window.location.href = "https://www.google.es";
        }else{
            // alertify.error('Por favor no sabotee el Juego');
            alert('Por favor no sabotee el Juego');
        }
    }

    // Efecto de Imagenes
    function efectoImagenes(){
        setTimeout(() => {
            imagen_dos.src = 'assets/img/tijeras.png';
            console.log('tijeras');
        }, 300);
        setTimeout(() => {
            imagen_dos.src = 'assets/img/papel.png';
            console.log('papel');
        }, 600);
        setTimeout(() => {
            imagen_dos.src = 'assets/img/piedra.png';
            console.log('piedra');
        }, 900);
        setTimeout(() => {
            imagen_dos.src = 'assets/img/tijeras.png';
            console.log('tijeras');
        }, 1200);
        setTimeout(() => {
            imagen_dos.src = 'assets/img/papel.png';
            console.log('papel');
        }, 1500);
        setTimeout(() => {
            imagen_dos.src = 'assets/img/piedra.png';
            console.log('piedra');
        }, 1800);
        setTimeout(() => {
            imagen_dos.src = 'assets/img/tijeras.png';
            console.log('tijeras');
        }, 2100);
        setTimeout(() => {
            imagen_dos.src = 'assets/img/papel.png';
            console.log('papel');
        }, 2400);
        setTimeout(() => {
            imagen_dos.src = 'assets/img/piedra.png';
            console.log('piedra');
        }, 2700);
    }