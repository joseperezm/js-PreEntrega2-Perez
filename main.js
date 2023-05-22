function calcularTiempoParaSiguienteGrado() {
  let seguirCalculando = true;

  while (seguirCalculando) {
    let usuario = {};
    usuario.gradoActual = prompt("¿Cuál es tu grado actual? (blanco, azul, purpura, cafe, negro)").toLowerCase();
    usuario.añosEntrenando = parseInt(prompt("¿Cuántos años llevas entrenando?"));

    let añosParaSiguienteGrado = 0;
    let gradoSiguiente = "";

    if (usuario.gradoActual === "blanco") {
      if (usuario.añosEntrenando >= 0) {
        añosParaSiguienteGrado = 2 - usuario.añosEntrenando;
        gradoSiguiente = "azul";
      } else {
        alert("Debe haber ingresado un número positivo de años.");
        seguirCalculando = confirm("¿Deseas calcular nuevamente el tiempo para el siguiente grado?");
        continue;
      }
    } else if (usuario.gradoActual === "azul") {
      if (usuario.añosEntrenando >= 2) {
        añosParaSiguienteGrado = 5 - usuario.añosEntrenando;
        gradoSiguiente = "purpura";
      } else {
        añosParaSiguienteGrado = 2 - usuario.añosEntrenando;
        if (añosParaSiguienteGrado < 0) {
          añosParaSiguienteGrado = 0;
        }
        alert(`No llevas el tiempo suficiente para ser cinturón azul. Faltan ${añosParaSiguienteGrado} años para alcanzarlo.`);
        seguirCalculando = confirm("¿Deseas calcular nuevamente el tiempo para el siguiente grado?");
        continue;
      }
    } else if (usuario.gradoActual === "purpura") {
      if (usuario.añosEntrenando >= 5) {
        añosParaSiguienteGrado = 7 - usuario.añosEntrenando;
        gradoSiguiente = "cafe";
      } else {
        añosParaSiguienteGrado = 5 - usuario.añosEntrenando;
        if (añosParaSiguienteGrado < 0) {
          añosParaSiguienteGrado = 0;
        }
        alert(`No llevas el tiempo suficiente para ser cinturón purpura. Faltan ${añosParaSiguienteGrado} años para alcanzarlo.`);
        seguirCalculando = confirm("¿Deseas calcular nuevamente el tiempo para el siguiente grado?");
        continue;
      }
    } else if (usuario.gradoActual === "cafe") {
      if (usuario.añosEntrenando >= 7) {
        añosParaSiguienteGrado = 10 - usuario.añosEntrenando;
        gradoSiguiente = "negro";
      } else {
        añosParaSiguienteGrado = 7 - usuario.añosEntrenando;
        if (añosParaSiguienteGrado < 0) {
          añosParaSiguienteGrado = 0;
        }
        alert(`No llevas el tiempo suficiente para ser cinturón cafe. Faltan ${añosParaSiguienteGrado} años para alcanzarlo.`);
        seguirCalculando = confirm("¿Deseas calcular nuevamente el tiempo para el siguiente grado?");
        continue;
      }
    } else if (usuario.gradoActual === "negro") {
      if (usuario.añosEntrenando >= 12) {
        añosParaSiguienteGrado = 25 - usuario.añosEntrenando;
        gradoSiguiente = "coral";
      } else {
        añosParaSiguienteGrado = 12 - usuario.añosEntrenando;
        if (añosParaSiguienteGrado < 0) {
          añosParaSiguienteGrado = 0;
        }
        alert(`No llevas el tiempo suficiente para ser cinturón negro. Faltan ${añosParaSiguienteGrado} años para alcanzarlo.`);
        seguirCalculando = confirm("¿Deseas calcular nuevamente el tiempo para el siguiente grado?");
        continue;
      }
    } else {
      alert("El grado ingresado no es válido.");
      seguirCalculando = confirm("¿Deseas calcular nuevamente el tiempo para el siguiente grado?");
      continue;
    }

    if (añosParaSiguienteGrado >= 0) {
      alert(`Te faltan ${añosParaSiguienteGrado} años para obtener el cinturón ${gradoSiguiente}. ¡Vamos que se puede!`);
    } else {
      alert(`¡Ya has superado el tiempo necesario para obtener el cinturón ${gradoSiguiente}! Te recomiendo hablar con tu instructor...`);
    }

    seguirCalculando = confirm("¿Deseas calcular nuevamente el tiempo para el siguiente grado?");
  }
}

calcularTiempoParaSiguienteGrado();
