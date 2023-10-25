document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".container");
    const comenzarButton = document.getElementById("comenzar");
  
    comenzarButton.addEventListener("click", comenzarJuego);
  
    function comenzarJuego() {
      container.innerHTML = `
        <h1>Juego de Aventuras</h1>
        <p>Estás en una encrucijada. Debes elegir un camino.</p>
        <button id="camino1">Tomar el camino de la izquierda</button>
        <button id="camino2">Tomar el camino de la derecha</button>
      `;
  
      const camino1Button = document.getElementById("camino1");
      const camino2Button = document.getElementById("camino2");
  
      camino1Button.addEventListener("click", () => {
        container.innerHTML = `
          <h1>Juego de Aventuras</h1>
          <p>Has encontrado un tesoro escondido en el bosque. ¡Eres un verdadero aventurero!</p>
          <button id="continuar">Continuar la aventura</button>
        `;
        const continuarButton = document.getElementById("continuar");
        continuarButton.addEventListener("click", continuarAventura);
      });
  
      camino2Button.addEventListener("click", () => {
        container.innerHTML = `
          <h1>Juego de Aventuras</h1>
          <p>Te has perdido en el bosque oscuro. ¡Ten cuidado la próxima vez!</p>
          <button id="reiniciar">Jugar de nuevo</button>
        `;
        const reiniciarButton = document.getElementById("reiniciar");
        reiniciarButton.addEventListener("click", comenzarJuego);
      });
    }
  
    function continuarAventura() {
      container.innerHTML = `
        <h1>Juego de Aventuras</h1>
        <p>Estás frente a un río. ¿Qué vas a hacer?</p>
        <button id="cruzar">Intentar cruzar el río</button>
        <button id="seguir">Seguir el camino junto al río</button>
      `;
  
      const cruzarButton = document.getElementById("cruzar");
      const seguirButton = document.getElementById("seguir");
  
      cruzarButton.addEventListener("click", () => {
        container.innerHTML = `
          <h1>Juego de Aventuras</h1>
          <p>¡Has cruzado el río con éxito! Has llegado a un pueblo amigable.</p>
          <button id="finalizar">Finalizar la aventura</button>
        `;
        const finalizarButton = document.getElementById("finalizar");
        finalizarButton.addEventListener("click", finalizarAventura);
      });
  
      seguirButton.addEventListener("click", () => {
        container.innerHTML = `
          <h1>Juego de Aventuras</h1>
          <p>Has seguido el camino junto al río y te has perdido aún más en el bosque.</p>
          <button id="reiniciar">Jugar de nuevo</button>
        `;
        const reiniciarButton = document.getElementById("reiniciar");
        reiniciarButton.addEventListener("click", comenzarJuego);
      });
    }
  
    function finalizarAventura() {
      container.innerHTML = `
        <h1>Juego de Aventuras</h1>
        <p>¡Felicidades! Has completado la aventura con éxito. ¡Eres un verdadero héroe!</p>
        <button id="reiniciar">Jugar de nuevo</button>
      `;
      const reiniciarButton = document.getElementById("reiniciar");
      reiniciarButton.addEventListener("click", comenzarJuego);
    }
  });
  