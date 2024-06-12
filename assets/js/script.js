

// OFFCANVAS


const offcanvasEjemplo = document.getElementById('offcanvasExample')

offcanvasEjemplo.addEventListener('show.bs.offcanvas', function(event){
  console.log('se está abriendo el offcanva');


  const valor1 = document.getElementById('inputTitulo').value
  const valor2 = document.getElementById('inputContenido').value

  
  let boton = event.relatedTarget // etiquetado-relacionado
  let mensaje = boton.getAttribute('data-titulo')
  let contenido = boton.getAttribute('data-content') 

  // document.getElementById('tituloOffcanvas').innerText = mensaje 
  // document.getElementById('bodyOffcanvas').innerText = contenido

  if (valor1 === '') {
    document.getElementById('tituloOffcanvas').innerHTML = mensaje;
} else {
    document.getElementById('tituloOffcanvas').innerHTML = valor1;
}

if (valor2 === '') {
    document.getElementById('bodyOffcanvas').innerHTML = contenido;
} else {
    document.getElementById('bodyOffcanvas').innerHTML = valor2;
}


});


//TOAST










const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {

    let valor1 = document.getElementById('inputTitulo').value
    let valor2 = document.getElementById('inputContenido').value
  
    

      if (valor1 == '') {
      document.getElementById('tituloToast').innerHTML = mensaje;
  } else {
      document.getElementById('tituloToast').innerHTML = valor1;
  }

  if (valor2 == '') {
    document.getElementById('contenidoToast').innerHTML = contenido;
} else {
    document.getElementById('contenidoToast').innerHTML = valor2;
}
    toastBootstrap.show()
  })
}



















//ALERT******



const alertPlaceholder = document.getElementById('liveAlertPlaceholder');

const appendAlert = (message, type) => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('');

  alertPlaceholder.append(wrapper);
};

const alertTrigger = document.getElementById('liveAlertBtn');
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    const titulo = document.getElementById('inputTitulo').value;
    const contenido = document.getElementById('inputContenido').value;
    const message = `<strong>${titulo}</strong><br>${contenido}`;
    appendAlert(message, 'success');
  });
}


//POPOVER


const popoverButton = document.getElementById('popoverButton');
const popoverInstance = new bootstrap.Popover(popoverButton);

// actualiz los valores de los inputs
function actualizarPopover() {
  const valor1 = document.getElementById('inputTitulo').value;
  const valor2 = document.getElementById('inputContenido').value;

  // actualizo los atributos data-bs-title y data-bs-content
  popoverButton.setAttribute('data-bs-title', valor1);
  popoverButton.setAttribute('data-bs-content', valor2);

  // actualizar el contenido (estudiar el uso en prundidad para su lógica)
  popoverInstance.dispose();

  // contenido actualizado listo se muestra
  new bootstrap.Popover(popoverButton).show();
}


popoverButton.addEventListener('click', actualizarPopover);


popoverButton.addEventListener('shown.bs.popover', function () {
  console.log('Popover se ha mostrado');
});










//****************************************ANTIGUO************************************** */








