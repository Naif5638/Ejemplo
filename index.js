const formulario = document.querySelector("form");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  const persona = {
    nombre: event.target.nombre.value,
    apellido: event.target.apellido.value,
    fechaNacimiento: event.target.nacimiento.value,
  };

  const objectJson = document.getElementById('objectJson');
  objectJson.textContent = JSON.stringify(persona);
  formulario.reset();
});
