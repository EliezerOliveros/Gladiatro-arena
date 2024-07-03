function iniciaArena() {
    const nombreJugador = prompt("¡Bienvenido Gladiador! Ingresa tu nombre:");

    if (!nombreJugador) {
        console.log("No ingresaste un nombre válido. Refresca la página para intentarlo de nuevo.");
        return;
    }

    console.log(`Hola Gladiador, ${nombreJugador}! Vamos a la Arena.`);

    let puntajeJugador = 0;
    let puntajeComputadora = 0;
    let rondasJugadas = 0;
    const opciones = ['espada', 'hacha', 'mazo', 'lanza', 'daga'];

    
    function obtenerEleccionComputadora() {
        return opciones[Math.floor(Math.random() * opciones.length)];
    }

    
    function determinarResultado(eleccionJugador, eleccionComputadora) {
        if (eleccionJugador === eleccionComputadora) {
            return 'Empate';
        } else if (
        (eleccionJugador === 'espada' && eleccionComputadora === 'lanza') ||
        (eleccionJugador === 'espada' && eleccionComputadora === 'daga') ||
        (eleccionJugador === 'hacha' && eleccionComputadora === 'espada') ||
        (eleccionJugador === 'hacha' && eleccionComputadora === 'lanza') ||
        (eleccionJugador === 'mazo' && eleccionComputadora === 'espada') ||
        (eleccionJugador === 'mazo' && eleccionComputadora === 'hacha') ||
        (eleccionJugador === 'lanza' && eleccionComputadora === 'mazo') ||
        (eleccionJugador === 'lanza' && eleccionComputadora === 'daga') ||
        (eleccionJugador === 'daga' && eleccionComputadora === 'hacha') ||
        (eleccionJugador === 'daga' && eleccionComputadora === 'mazo')
        ) {
            puntajeJugador++;
            return '¡Ganaste el combate!';
        } else {
            puntajeComputadora++;
            return '¡Perdiste el combate!';
        }
    }

    function jugarRonda(eleccionJugador) {
        const eleccionComputadora = obtenerEleccionComputadora();
        const resultado = determinarResultado(eleccionJugador, eleccionComputadora);
        rondasJugadas++;

        console.log(`Ronda ${rondasJugadas}: Jugador eligió ${eleccionJugador}, Computadora eligió ${eleccionComputadora}. ${resultado}`);
        console.log(`Puntaje actual - Jugador: ${puntajeJugador}, Computadora: ${puntajeComputadora}\n`);
    }

    function iniciarJuego() {
        const rondasTotales = 3; 

        while (rondasJugadas < rondasTotales) {
            const eleccionJugador = prompt(`Ronda ${rondasJugadas + 1}: Elige espada, hacha, mazo, lanza, o daga:`).toLowerCase();
            
            if (!opciones.includes(eleccionJugador)) {
                console.log('¡Esa no es una opción válida! Intenta de nuevo.');
                continue;
            }

            jugarRonda(eleccionJugador);
        }

        if (puntajeJugador > puntajeComputadora) {
            console.log('¡Felicidades Gladiador! ¡Has ganado la arena!');
        } else if (puntajeComputadora > puntajeJugador) {
            console.log('¡El enemigo te a derrotado en la arena! Mejor suerte en la próxima vida Gladiador.');
        } else {
            console.log('La arena ha terminado en empate gladiadores .');
        }
    }

    
    iniciarJuego();
}

console.log('Bienvenido a Gladiator Arena, escoje tus armas. Gladiador te explica cómo funcionan. En esta arena, tenemos para escoger 5 tipos de armas: espadas, hacha, mazo, lanza y daga. Cada arma tiene ventaja y desventaja; en esto te dejo cuáles le ganan a cuáles y con cuáles pierde contra otras.')
console.log('La espada: un arma versatil que le puede ganar fácilmente a las lanzas y dagas, pero contra las hachas y mazas no te ira tan bien.')
console.log('El hacha: un arma con un gran filo frontal, la cual le ganará a las espadas y a las lanzas, pero muy lenta contra dagas y sin defensa contra los mazos.')
console.log('El mazo: un arma pesada capaz de destruir la armadura de tus enemigos, fuerte contra las espadas y las hachas, pero muy lenta contra las dagas y con un corto alcance contra las lanzas.')
console.log('La lanza: un arma con una punta filosa y un gran alcance, perfecta para peliar contra las pequeñas dagas y los lentos mazos, pero no tan rápida contra las versatiles espadas y sin equilibrio contra las hachas.')
console.log('La daga: un arma rápida y versatil, muy eficiente contra las hachas y los lentos mazos, pero no puede contra el alcance de las lanzas y las espadas.')



iniciaArena();
