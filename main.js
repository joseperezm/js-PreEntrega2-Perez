function calcularTiempoParaSiguienteGrado() {
  let seguirCalculando = true;

  while (seguirCalculando) {
    const nombre = prompt("¿Cuál es tu nombre?");
    const usuario = {
      nombre: nombre,
      gradoActual: prompt(`${nombre}, ¿Cuál es tu grado actual? (blanco, azul, purpura, cafe, negro)`).toLowerCase(),
      añosEntrenando: parseInt(prompt(`${nombre}, ¿Cuántos años llevas entrenando?`)),
    };

    const grados = {
      blanco: { nombre: "azul", tiempoRequerido: 2 },
      azul: { nombre: "purpura", tiempoRequerido: 5 },
      purpura: { nombre: "cafe", tiempoRequerido: 7 },
      cafe: { nombre: "negro", tiempoRequerido: 12 },
      negro: { nombre: "coral", tiempoRequerido: 25 },
    };

    if (usuario.gradoActual === "negro" && usuario.añosEntrenando >= grados.negro.tiempoRequerido) {
      const añosParaSiguienteGrado = grados.negro.tiempoRequerido - usuario.añosEntrenando;
      alert(`${usuario.nombre}, te faltan ${añosParaSiguienteGrado} años para obtener el cinturón ${grados.negro.nombre}. ¡Vamos que se puede!`);
    } else if (!grados.hasOwnProperty(usuario.gradoActual)) {
      alert(`${usuario.nombre}, el grado ingresado no es válido.`);
    } else if (usuario.añosEntrenando >= grados[usuario.gradoActual].tiempoRequerido) {
      const añosParaSiguienteGrado = grados[usuario.gradoActual].tiempoRequerido - usuario.añosEntrenando;
      alert(`${usuario.nombre}, te faltan ${añosParaSiguienteGrado} años para obtener el cinturón ${grados[usuario.gradoActual].nombre}. ¡Vamos que se puede!`);
    } else {
      alert(`${usuario.nombre}, no llevas el tiempo suficiente para ser cinturón ${usuario.gradoActual}...`);
    }

    seguirCalculando = confirm(`${usuario.nombre}, ¿deseas calcular nuevamente el tiempo para el siguiente grado?`);
  }
}

calcularTiempoParaSiguienteGrado();