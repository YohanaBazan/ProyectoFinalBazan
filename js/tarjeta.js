const tarjeta = document.querySelector('#tarjeta'),
    btnAbrirFormulario = document.querySelector('#btn-abrir-formulario'),
    formulario = document.querySelector('#formulario-tarjeta'),
    numeroTarjeta = document.querySelector('#tarjeta .numero'),
    nombreTarjeta = document.querySelector('#tarjeta .nombre'),
    logoMarca = document.querySelector('#logo-marca'),
    firma = document.querySelector('#tarjeta .firma p'),
    mesExpiracion = document.querySelector('#tarjeta .mes'),
    yearExpiracion = document.querySelector('#tarjeta .year');
ccv = document.querySelector('#tarjeta .ccv');


const mostrarFrente = () => {
    if (tarjeta.classList.contains('active')) {
        tarjeta.classList.remove('active');
    }
}


tarjeta.addEventListener('click', () => {
    tarjeta.classList.toggle('active');
});


btnAbrirFormulario.addEventListener('click', () => {
    btnAbrirFormulario.classList.toggle('active');
    formulario.classList.toggle('active');
});


for (let i = 1; i <= 12; i++) {
    let opcion = document.createElement('option');
    opcion.value = i;
    opcion.innerText = i;
    formulario.selectMes.appendChild(opcion);
}


const yearActual = new Date().getFullYear();
for (let i = yearActual; i <= yearActual + 8; i++) {
    let opcion = document.createElement('option');
    opcion.value = i;
    opcion.innerText = i;
    formulario.selectYear.appendChild(opcion);
}


formulario.inputNumero.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    formulario.inputNumero.value = valorInput

        .replace(/\s/g, '')
    
        .replace(/\D/g, '')

        .replace(/([0-9]{4})/g, '$1 ')

        .trim();

    numeroTarjeta.textContent = valorInput;

    if (valorInput == '') {
        numeroTarjeta.textContent = '#### #### #### ####';

        logoMarca.innerHTML = '';
    }

    if (valorInput[0] == 4) {
        logoMarca.innerHTML = '';
        const imagen = document.createElement('img');
        imagen.src = '/img/visa (1).png';
        logoMarca.appendChild(imagen);
    } else if (valorInput[0] == 5) {
        logoMarca.innerHTML = '';
        const imagen = document.createElement('img');
        imagen.src = '/img/mastercard.png';
        logoMarca.appendChild(imagen);
    }

    
    mostrarFrente();
});


formulario.inputNombre.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    formulario.inputNombre.value = valorInput.replace(/[0-9]/g, '');
    nombreTarjeta.textContent = valorInput;
    firma.textContent = valorInput;

    if (valorInput == '') {
        nombreTarjeta.textContent = 'Jhon Doe';
    }

    mostrarFrente();
});


formulario.selectMes.addEventListener('change', (e) => {
    mesExpiracion.textContent = e.target.value;
    mostrarFrente();
});


formulario.selectYear.addEventListener('change', (e) => {
    yearExpiracion.textContent = e.target.value.slice(2);
    mostrarFrente();
});


formulario.inputCCV.addEventListener('keyup', () => {
    if (!tarjeta.classList.contains('active')) {
        tarjeta.classList.toggle('active');
    }

    formulario.inputCCV.value = formulario.inputCCV.value

        .replace(/\s/g, '')

        .replace(/\D/g, '');

    ccv.textContent = formulario.inputCCV.value;
});

formulario.addEventListener("submit", (e) => {
    e.preventDefault()
    if (numeroTarjeta.textContent === '#### #### #### ####' || nombreTarjeta.textContent === 'Nombre' || yearExpiracion.textContent === 'YY' || mesExpiracion.textContent === 'MM' || ccv.textContent === '') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debe completar todos los datos!',
        })
    } else {
        Swal.fire({
            icon: 'success',
            title: 'Su compra fue realizada con éxito!',
            text: 'Gracias por elegirnos'
        }).then(() => {
            window.location.href = '/pages/tienda.html'
            carrito.splice(0, carrito.length)
            localStorage.setItem("carritoJson", JSON.stringify(carrito));
            contadorCarrito()
            pintarCarrito()
        })
    }
})