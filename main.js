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
      const gradoEncontrado = grados.find((grado) => grado.nombre.toLowerCase() === gradoSiguiente);
      if (gradoEncontrado) {
        mostrarDetalleGrado(gradoEncontrado);
      } else {
        alert(`No se encontró información para el cinturón ${gradoSiguiente}.`);
      }
    }

    seguirCalculando = confirm(`¿${usuario.nombre}, deseas calcular nuevamente el tiempo para el siguiente grado?`);
  }
}

function mostrarDetalleGrado(grado) {
  const grados = [
    { nombre: "Blanco", descripcion: "Grado inicial en el Jiu-Jitsu Basileño: Fundamentos básicos y dedicación en el aprendizaje y práctica regular del BJJ." },
    { nombre: "Azul", descripcion: "Grado intermedio en el Jiu-Jitsu Basileño: Conocimiento sólido de las técnicas fundamentales, capacidad para aplicarlas en situaciones de combate y experiencia en la participación en competiciones." },
    { nombre: "Purpura", descripcion: "Grado intermedio en el Jiu-Jitsu Basileño: Dominio de una amplia variedad de técnicas, habilidad para adaptarse a diferentes estilos de lucha y una comprensión profunda de las estrategias del BJJ." },
    { nombre: "Cafe", descripcion: "Grado avanzado en el Jiu-Jitsu Basileño: Perfeccionamiento de técnicas avanzadas, capacidad para anticipar movimientos del oponente, experiencia en competiciones de alto nivel y demostración de liderazgo en el arte marcial." },
    { nombre: "Negro", descripcion: "Grado maestro en el Jiu-Jitsu Basileño: Amplio conocimiento y dominio de todas las técnicas del BJJ, habilidad para enseñar y transmitir conocimientos a otros practicantes, y contribución significativa al desarrollo del arte marcial." }
  ];

  const gradoEncontrado = grados.find((g) => g.nombre.toLowerCase() === grado.nombre.toLowerCase());
  if (gradoEncontrado) {
    alert(`Detalle del cinturón ${gradoEncontrado.nombre}: ${gradoEncontrado.descripcion}`);
  } else {
    alert(`No se encontró información para el cinturón ${grado.nombre}.`);
  }
}

const grados = [
  { nombre: "blanco", tiempo: 2 },
  { nombre: "azul", tiempo: 5 },
  { nombre: "purpura", tiempo: 7 },
  { nombre: "cafe", tiempo: 10 },
  { nombre: "negro", tiempo: 12 },
  { nombre: "coral", tiempo: 25 }
];

calcularTiempoParaSiguienteGrado();