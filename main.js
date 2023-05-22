function calcularTiempoParaSiguienteGrado() { // Aquí se realiza el cálculo del tiempo necesario para alcanzar el siguiente grado en Jiu-Jitsu.
  let seguirCalculando = true;

  while (seguirCalculando) {
    let usuario = {};
    usuario.nombre = prompt("¿Cuál es tu nombre?"); // Solicita el nombre del usuario
    usuario.gradoActual = prompt("¿Cuál es tu grado actual? (blanco, azul, purpura, cafe, negro)").toLowerCase(); // Solicita el grado actual del usuario y lo convierte a minúsculas
    usuario.añosEntrenando = parseInt(prompt("¿Cuántos años llevas entrenando?")); // Solicita la cantidad de años de entrenamiento del usuario y lo convierte a un número entero

    let añosParaSiguienteGrado = 0;
    let gradoSiguiente = "";

    if (usuario.gradoActual === "blanco") {
      if (usuario.añosEntrenando >= 0) {
        añosParaSiguienteGrado = 2 - usuario.añosEntrenando; // Calcula los años restantes para alcanzar el siguiente grado
        gradoSiguiente = "azul"; // Establece el siguiente grado como "azul"
      } else {
        alert(`Debe haber ingresado un número positivo de años, ${usuario.nombre}.`); // Muestra un mensaje de error si se ingresó un número negativo de años
        seguirCalculando = confirm(`¿${usuario.nombre}, deseas calcular nuevamente el tiempo para el siguiente grado?`); // Pregunta al usuario si desea calcular nuevamente el tiempo para el siguiente grado
        continue; // Salta a la siguiente iteración del bucle while
      }
    } else if (usuario.gradoActual === "azul") {
      if (usuario.añosEntrenando >= 2) {
        añosParaSiguienteGrado = 5 - usuario.añosEntrenando; // Calcula los años restantes para alcanzar el siguiente grado
        gradoSiguiente = "purpura"; // Establece el siguiente grado como "purpura"
      } else {
        añosParaSiguienteGrado = 2 - usuario.añosEntrenando; // Calcula los años restantes para alcanzar el siguiente grado
        if (añosParaSiguienteGrado < 0) {
          añosParaSiguienteGrado = 0;
        }
        alert(`No llevas el tiempo suficiente para ser cinturón azul, ${usuario.nombre}. Faltan ${añosParaSiguienteGrado} años para alcanzarlo.`); // Muestra un mensaje indicando los años faltantes para alcanzar el grado azul
        seguirCalculando = confirm(`¿${usuario.nombre}, deseas calcular nuevamente el tiempo para el siguiente grado?`); // Pregunta al usuario si desea calcular nuevamente el tiempo para el siguiente grado
        continue; // Salta a la siguiente iteración del bucle while
      }
    } else if (usuario.gradoActual === "purpura") {
      if (usuario.añosEntrenando >= 5) {
        añosParaSiguienteGrado = 7 - usuario.añosEntrenando; // Calcula los años restantes para alcanzar el siguiente grado
        gradoSiguiente = "cafe"; // Establece el siguiente grado como "cafe"
      } else {
        añosParaSiguienteGrado = 5 - usuario.añosEntrenando; // Calcula los años restantes para alcanzar el siguiente grado
        if (añosParaSiguienteGrado < 0) {
          añosParaSiguienteGrado = 0;
        }
        alert(`No llevas el tiempo suficiente para ser cinturón purpura, ${usuario.nombre}. Faltan ${añosParaSiguienteGrado} años para alcanzarlo.`); // Muestra un mensaje indicando los años faltantes para alcanzar el grado purpura
        seguirCalculando = confirm(`¿${usuario.nombre}, deseas calcular nuevamente el tiempo para el siguiente grado?`); // Pregunta al usuario si desea calcular nuevamente el tiempo para el siguiente grado
        continue; // Salta a la siguiente iteración del bucle while
      }
    } else if (usuario.gradoActual === "cafe") {
      if (usuario.añosEntrenando >= 7) {
        añosParaSiguienteGrado = 10 - usuario.añosEntrenando; // Calcula los años restantes para alcanzar el siguiente grado
        gradoSiguiente = "negro"; // Establece el siguiente grado como "negro"
      } else {
        añosParaSiguienteGrado = 7 - usuario.añosEntrenando; // Calcula los años restantes para alcanzar el siguiente grado
        if (añosParaSiguienteGrado < 0) {
          añosParaSiguienteGrado = 0;
        }
        alert(`No llevas el tiempo suficiente para ser cinturón cafe, ${usuario.nombre}. Faltan ${añosParaSiguienteGrado} años para alcanzarlo.`); // Muestra un mensaje indicando los años faltantes para alcanzar el grado cafe
        seguirCalculando = confirm(`¿${usuario.nombre}, deseas calcular nuevamente el tiempo para el siguiente grado?`); // Pregunta al usuario si desea calcular nuevamente el tiempo para el siguiente grado
        continue; // Salta a la siguiente iteración del bucle while
      }
    } else if (usuario.gradoActual === "negro") {
      if (usuario.añosEntrenando >= 12) {
        añosParaSiguienteGrado = 25 - usuario.añosEntrenando; // Calcula los años restantes para alcanzar el siguiente grado
        gradoSiguiente = "coral"; // Establece el siguiente grado como "coral"
      } else {
        añosParaSiguienteGrado = 12 - usuario.añosEntrenando; // Calcula los años restantes para alcanzar el siguiente grado
        if (añosParaSiguienteGrado < 0) {
          añosParaSiguienteGrado = 0;
        }
        alert(`No llevas el tiempo suficiente para ser cinturón negro, ${usuario.nombre}. Faltan ${añosParaSiguienteGrado} años para alcanzarlo.`); // Muestra un mensaje indicando los años faltantes para alcanzar el grado negro
        seguirCalculando = confirm(`¿${usuario.nombre}, deseas calcular nuevamente el tiempo para el siguiente grado?`); // Pregunta al usuario si desea calcular nuevamente el tiempo para el siguiente grado
        continue; // Salta a la siguiente iteración del bucle while
      }
    } else {
      alert("El grado ingresado no es válido."); // Muestra un mensaje de error si el grado ingresado no es válido
      seguirCalculando = confirm(`¿${usuario.nombre}, deseas calcular nuevamente el tiempo para el siguiente grado?`); // Pregunta al usuario si desea calcular nuevamente el tiempo para el siguiente grado
      continue; // Salta a la siguiente iteración del bucle while
    }

    if (añosParaSiguienteGrado >= 0) {
      alert(`${usuario.nombre}, te faltan ${añosParaSiguienteGrado} años para obtener el cinturón ${gradoSiguiente}. ¡Vamos que se puede!`); // Muestra un mensaje indicando los años restantes para obtener el siguiente grado
    } else {
      let añosSuperados = Math.abs(añosParaSiguienteGrado); // Calcula los años superados por el usuario
      alert(`${usuario.nombre}, ¡ya has superado el tiempo necesario para obtener el cinturón ${gradoSiguiente} por ${añosSuperados} años! Te recomiendo hablar con tu instructor...`); // Muestra un mensaje indicando los años superados y recomienda al usuario hablar con su instructor
    }

    const verDetalleGrado = confirm(`¿Deseas ver el detalle del cinturón ${gradoSiguiente}?`); // Pregunta al usuario si desea ver el detalle del siguiente grado
    if (verDetalleGrado) {
      mostrarDetalleGrado(gradoSiguiente); // Llama a la función mostrarDetalleGrado para mostrar el detalle del siguiente grado
    }

    const verDetalleOtroGrado = confirm(`¿Deseas ver el detalle de otro cinturón?`); // Pregunta al usuario si desea ver el detalle de otro grado
    if (verDetalleOtroGrado) {
      const otroGrado = prompt("¿Cuál es el nombre del cinturón que deseas ver?\n(blanco, azul, purpura, cafe, negro o coral)").toLowerCase(); // Solicita al usuario el nombre del grado que desea ver
      mostrarDetalleGrado(otroGrado); // Llama a la función mostrarDetalleGrado para mostrar el detalle del grado especificado por el usuario
    }

    seguirCalculando = confirm(`¿${usuario.nombre}, deseas calcular nuevamente el tiempo para el siguiente grado?`); // Pregunta al usuario si desea calcular nuevamente el tiempo para el siguiente grado
  }
}

function mostrarDetalleGrado(grado) { //mostramos el detalle de cada grado
  const grados = [
    { nombre: "blanco", descripcion: "Grado inicial en el Jiu-Jitsu Basileño: Fundamentos básicos y dedicación en el aprendizaje y práctica regular del BJJ." },
    { nombre: "azul", descripcion: "Grado básico en el Jiu-Jitsu Basileño: Conocimiento sólido de las técnicas fundamentales, capacidad para aplicarlas en situaciones de combate y experiencia en la participación en competiciones. Mínimo 2 años de entrenamiento." },
    { nombre: "purpura", descripcion: "Grado intermedio en el Jiu-Jitsu Basileño: Dominio de una amplia variedad de técnicas, habilidad para adaptarse a diferentes estilos de lucha y una comprensión profunda de las estrategias del BJJ. Mínimo 5 años de entrenamiento." },
    { nombre: "cafe", descripcion: "Grado avanzado en el Jiu-Jitsu Basileño: Perfeccionamiento de técnicas avanzadas, capacidad para enseñar y transmitir conocimientos a estudiantes y participación destacada en competiciones de alto nivel. Mínimo 7 años de entrenamiento." },
    { nombre: "negro", descripcion: "Grado experto en el Jiu-Jitsu Basileño: Dominio completo del arte, contribución significativa al desarrollo y promoción del BJJ, y reconocimiento por parte de la comunidad. Mínimo 12 años de entrenamiento." },
    { nombre: "coral", descripcion: "Grado maestro en el Jiu-Jitsu Basileño: Reconocimiento excepcional, dedicación de toda una vida al arte y contribución significativa al desarrollo del BJJ. Mínimo 25 años de entrenamiento." }
  ];

  const gradoEncontrado = grados.find(gradoInfo => gradoInfo.nombre === grado); // Busca la información del grado en el array grados

  if (gradoEncontrado) {
    alert(`Detalle del cinturón ${gradoEncontrado.nombre}:\n${gradoEncontrado.descripcion}`); // Muestra el detalle del grado encontrado
  } else {
    alert(`No se encontró información para el cinturón ${grado}.`); // Muestra un mensaje de error si no se encontró información para el grado especificado
  }
}

calcularTiempoParaSiguienteGrado(); // Llama a la función principal para comenzar el cálculo del tiempo para el siguiente grado