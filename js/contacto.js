const contenedorContactos = document.getElementById("contenedor");

const divContenedor = document.createElement("div");
divContenedor.className = "divContenedor";
divContenedor.innerHTML =
    `<div class="divTexto">
                        <h2 class="h2">Si tenés alguna duda sobre nuestros productos ¡Contáctanos!</h2>
                        </div>
                        <div class="divGrid">
                        <div class="divForm">
                        <form id="form">
                            <label >INGRESE SU NOMBRE</label>
                            <input id= "nombre" type="text">

                            <label for=""> NÚMERO DE CONTACTO</label>
                            <input id="telefono" type="number">

                            <label for="">C0NSULTA</label>
                            <input id="comentario" class="inputComentario"type="text">
                            <button class="botonForm">Enviar</button>
                            </form>
                        </div>
                        <div class="info">

                        <div>
                        <img src="/img/location.png" alt="icono pin ubicacion">
                        <p><span>Direccion</span> <br> Av.Colon 2000 <br> Cordoba Capital, Argentina</p>
                    </div>
                    <div>
                        <img src="/img/reloj.png" alt="icono reloj">
                        <p><span>Horarios</span> <br> Lunes a Sabados <br> Desde 10:00hs a 20:00hs <br> Domingos cerrado </p>
                    </div>

                        </div>
                        </div>
                        `;
contenedorContactos.appendChild(divContenedor);

class Consulta {
    constructor(nombre, telefono, comentario) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.comentario = comentario;
    };
};


const form = document.getElementById("form");

form.onsubmit = (e) =>{
    e.preventDefault();
    const nombre = document.getElementById ("nombre");
    const tlf = document.getElementById ("tlf");
    const comentario = document.getElementById ("comentario");

if (nombre.value === "" || telefono.value === "" || comentario.value === "" ){
    Toastify({
        text: "Por favor complete todos los campos",
        duration: 3000,
        gravity:"top",
        position: "right",
        destination: "",
        style :{
            background: "red" ,
            color : "black"
        }
        }).showToast();
} else{
    Toastify({
        text: "Consulta enviada",
        duration: 3000,
        gravity:"top",
        position: "right",
        destination: "",
        style :{
            background: "linear-gradient(to right, #ffdde1, #febbbc)" ,
            color : "black"
        }
        }).showToast();
    const consulta = new Consulta (nombre.value, telefono.value, comentario.value);
    form.reset();

    const consultaJson = JSON.stringify(consulta);

    localStorage.setItem("consulta", consultaJson);
}

};

