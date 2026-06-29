let menu = [
    {
        nombre: "Sanji",
        categoria: "Principal",
        precio: 18.50
    },
    {
        nombre: "All Blue Pasta",
        categoria: "Pasta",
        precio: 22.75
    },
    {
        nombre: "Gomu Gomu no Mi",
        categoria: "Para Compartir",
        precio: 35.00
    },
    {
        nombre: "Mugiwara Salad",
        categoria: "Entrada",
        precio: 12.99
    },
    {
        nombre: "Thousand Sunny Dessert",
        categoria: "Postre",
        precio: 14.50
    }
];

const tablaMenu = document.getElementById("tablaMenu");
const txtNombre = document.getElementById("txtNombre");
const txtCategoria = document.getElementById("txtCategoria");
const txtPrecio = document.getElementById("txtPrecio");
const btnAgregar = document.getElementById("btnAgregar");


function mostrarMenu() {
    tablaMenu.innerHTML = "";

    menu.forEach(platillo => {
        tablaMenu.innerHTML += `
            <tr>
                <td>${platillo.nombre}</td>
                <td>${platillo.categoria}</td>
                <td>$${platillo.precio.toFixed(2)}</td>
            </tr>
        `;
    });
}

function agregarPlatillo() {
    const nombre = txtNombre.value.trim();
    const categoria = txtCategoria.value.trim();
    const precio = parseFloat(txtPrecio.value);

    if (nombre === "" || categoria === "" || isNaN(precio)) {
        alert("Por favor completa todos los campos correctamente.");
        return;
    }

    menu.push({
        nombre: nombre,
        categoria: categoria,
        precio: precio
    });

    txtNombre.value = "";
    txtCategoria.value = "";
    txtPrecio.value = "";

    mostrarMenu();
}

btnAgregar.addEventListener("click", agregarPlatillo);

mostrarMenu();