function calcularTiempoParaSiguienteGrado() {
  let seguirCalculando = true;

  while (seguirCalculando) {
    let usuario = {};
    usuario.nombre = prompt("¿Cuál es tu nombre?");
    usuario.gradoActual = prompt("¿Cuál es tu grado actual? (blanco, azul, purpura, cafe, negro)").toLowerCase();
    usuario.añosEntrenando = parseInt(prompt("¿Cuántos años llevas entrenando?"));

    let añosParaSiguienteGrado = 0;
    let gradoSiguiente = "";

    if (usuario.gradoActual === "blanco") {
      if (usuario.añosEntrenando >= 0) {
        añosParaSiguienteGrado = 2 - usuario.añosEntrenando;
        gradoSiguiente = "azul";
      } else {
        alert(`Debe haber ingresado un número positivo de años, ${usuario.nombre}.`);
        seguirCalculando = confirm(`¿${usuario.nombre}, deseas calcular nuevamente el tiempo para el siguiente grado?`);
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
        alert(`No llevas el tiempo suficiente para ser cinturón azul, ${usuario.nombre}. Faltan ${añosParaSiguienteGrado} años para alcanzarlo.`);
        seguirCalculando = confirm(`¿${usuario.nombre}, deseas calcular nuevamente el tiempo para el siguiente grado?`);
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
        alert(`No llevas el tiempo suficiente para ser cinturón purpura, ${usuario.nombre}. Faltan ${añosParaSiguienteGrado} años para alcanzarlo.`);
        seguirCalculando = confirm(`¿${usuario.nombre}, deseas calcular nuevamente el tiempo para el siguiente grado?`);
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
        alert(`No llevas el tiempo suficiente para ser cinturón cafe, ${usuario.nombre}. Faltan ${añosParaSiguienteGrado} años para alcanzarlo.`);
        seguirCalculando = confirm(`¿${usuario.nombre}, deseas calcular nuevamente el tiempo para el siguiente grado?`);
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
        alert(`No llevas el tiempo suficiente para ser cinturón negro, ${usuario.nombre}. Faltan ${añosParaSiguienteGrado} años para alcanzarlo.`);
        seguirCalculando = confirm(`¿${usuario.nombre}, deseas calcular nuevamente el tiempo para el siguiente grado?`);
        continue;
      }
    } else {
      alert("El grado ingresado no es válido.");
      seguirCalculando = confirm(`¿${usuario.nombre}, deseas calcular nuevamente el tiempo para el siguiente grado?`);
      continue;
    }

    if (añosParaSiguienteGrado >= 0) {
      alert(`${usuario.nombre}, te faltan ${añosParaSiguienteGrado} años para obtener el cinturón ${gradoSiguiente}. ¡Vamos que se puede!`);
    } else {
      let añosSuperados = Math.abs(añosParaSiguienteGrado);
      alert(`${usuario.nombre}, ¡ya has superado el tiempo necesario para obtener el cinturón ${gradoSiguiente} por ${añosSuperados} años! Te recomiendo hablar con tu instructor...`);
    }

    const verDetalleGrado = confirm(`¿Deseas ver el detalle del cinturón ${gradoSiguiente}?`);
    if (verDetalleGrado) {
      mostrarDetalleGrado(gradoSiguiente);
    }

    const verDetalleOtroGrado = confirm(`¿Deseas ver el detalle de otro cinturón?`);
    if (verDetalleOtroGrado) {
      const otroGrado = prompt("¿Cuál es el nombre del cinturón que deseas ver?\n(blanco, azul, purpura, cafe, negro o coral)");
      mostrarDetalleGrado(otroGrado);
    }

    seguirCalculando = confirm(`¿${usuario.nombre}, deseas calcular nuevamente el tiempo para el siguiente grado?`);
  }
}

function mostrarDetalleGrado(grado) {
  const grados = [
    { nombre: "blanco", descripcion: "Grado inicial en el Jiu-Jitsu Basileño: Fundamentos básicos y dedicación en el aprendizaje y práctica regular del BJJ." },
    { nombre: "azul", descripcion: "Grado básico en el Jiu-Jitsu Basileño: Conocimiento sólido de las técnicas fundamentales, capacidad para aplicarlas en situaciones de combate y experiencia en la participación en competiciones. Mínimo 2 años de entrenamiento." },
    { nombre: "purpura", descripcion: "Grado intermedio en el Jiu-Jitsu Basileño: Dominio de una amplia variedad de técnicas, habilidad para adaptarse a diferentes estilos de lucha y una comprensión profunda de las estrategias del BJJ. Mínimo 5 años de entrenamiento." },
    { nombre: "cafe", descripcion: "Grado avanzado en el Jiu-Jitsu Basileño: Perfeccionamiento de técnicas avanzadas, capacidad para enseñar y transmitir conocimientos a estudiantes y participación destacada en competiciones de alto nivel. Mínimo 7 años de entrenamiento." },
    { nombre: "negro", descripcion: "Grado experto en el Jiu-Jitsu Basileño: Dominio completo del arte, habilidad para desarrollar nuevas técnicas y contribuir al avance y difusión del BJJ a nivel mundial. Mínimo 12 años de entrenamiento." },
    { nombre: "coral", descripcion: "Grado maestro en el Jiu-Jitsu Basileño: Reconocido nivel de maestría, honra la experiencia y sabiduría en Brazilian Jiu-Jitsu. Mínimo 25 años de entrenamiento." }
  ];

  const gradoEncontrado = grados.find(gradoObj => gradoObj.nombre === grado);

  if (gradoEncontrado) {
    alert(`Detalle del cinturón ${gradoEncontrado.nombre}:\n${gradoEncontrado.descripcion}`);
  } else {
    alert(`No se encontró información para el cinturón ${grado}.`);
  }
}

calcularTiempoParaSiguienteGrado();