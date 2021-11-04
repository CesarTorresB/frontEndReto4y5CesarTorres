$(document).ready(function() {
        $("#btnGuardarCategoria").show();
        $("#btnGuardarCabin").show();
        $("#btnGuardarClientes").show();
        $("#btnGuardarMensajes").show();
    })
    //--------------------- Editar Categoria -----------------------
function editarRegistroCategoria(numIdCategoria) {

    // ocultar y mostrar botones
    $("#btnGuardarCategoria").show();
    $("#btnRegistrarCategoria").show();
    $("#btnConsultarCategoria").show();
    $("#btnBorrarCategoria").show();
    $("#numIdCategoria").prop('disabled', true);
    $("#nombreCategoria").focus();

    var datosTabCategoria = {
        id: numIdCategoria
    }

    //Conversion a JSON
    let dataToSendCategoria = JSON.stringify(datosTabCategoria);

    //Peticion Ajax
    $.ajax({
        url: "https://129.146.17.50:8080/Category/update" + numIdCategoria,
        type: 'GET',
        dataType: 'json',

        success: function(respuesta) {
            var items = respuesta.items;

            $("#numIdCategoria").val(items[0].id);
            $("#description").val(items[0].description);
            console.log(items);
        },

        error: function(xhr, status) {
            console.log(status);
        }
    });
}

// Actualizar datos tabla Cabañas

function actualizar() {

    $("#btnGuardarCategoria").show();
    $("#btnRegistrarCategoria").show();
    $("#btnConsultarCategoria").show();
    $("#btnBorrarCategoria").show();

    var datosTabCategoria = {
        id: $("#numIdCategoria").val(),
        description: $("#description").val(items[0].description)
    }

    //Conversion a JSON
    let dataToSendCategoria = JSON.stringify(datosTabCategoria);

    //Petición Ajax
    $.ajax({
        url: "https://129.146.17.50:8080/Category/update",
        data: dataToSendCategoria,
        type: 'PUT',
        contentType: "application/JSON",

        success: function(respuesta) {
            console.log("Actualizado");
            consulta();
        },

        error: function(xhr, status) {
            console.log(status);
        }
    })


}
//--------------------- Editar Cabañas -----------------------
function editarRegistro(numIdCabin) {

    // ocultar y mostrar botones
    $("#btnGuardarCabin").show();
    $("#btnRegistrarCabin").show();
    $("#btnConsultarCabin").show();
    ("#btnBorrarCabin").show();
    $("#numIdCabin").prop('disabled', true);
    $("#nombreCabin").focus();

    var datosTabCabin = {
        id: numIdCabin
    }

    //Conversion a JSON
    let dataToSendCabin = JSON.stringify(datosTabCabin);

    //Peticion Ajax
    $.ajax({
        url: "https://129.146.17.50:8080/Cabin/update" + numIdCabin,
        type: 'GET',
        dataType: 'json',

        success: function(respuesta) {
            var items = respuesta.items;

            $("#numIdCabin").val(items[0].id);
            $("#brand").val(items[0].brand);
            $("#rooms").val(items[0].rooms);
            $("#idCateg").val(items[0].category_id);
            $("#name").val(items[0].name);
            console.log(items);
        },

        error: function(xhr, status) {
            console.log(status);
        }
    });
}

// Actualizar datos tabla Cabañas

function actualizar() {

    $("#btnGuardarCabin").show();
    $("#btnRegistrarCabin").show();
    $("#btnConsultarCabin").show();
    $("#btnBorrarCabin").show();

    var datosTabCabin = {
        id: $("#numIdCabin").val(),
        brand: $("#brand").val(),
        rooms: $("#rooms").val(),
        category_id: $("#idCateg").val(),
        name: $("#name").val(),
    }

    //Conversion a JSON
    let dataToSendCabin = JSON.stringify(datosTabCabin);

    //Petición Ajax
    $.ajax({
        url: "https://129.146.17.50:8080/Cabin/update",
        data: dataToSendCabin,
        type: 'PUT',
        contentType: "application/JSON",

        success: function(respuesta) {
            console.log("Actualizado");
            consulta();
        },

        error: function(xhr, status) {
            console.log(status);
        }
    })


}
//---------------------------- Editar Clientes---------------------------


function editarRegistroClientes(numIdClientes) {

    // ocultar y mostrar botones
    $("#btnGuardarClientes").show();
    $("#btnRegistrarClientes").show();
    $("#btnConsultarClientes").show();
    $("#btnBorrarClientes").show();
    $("#numIdClientes").prop('disabled', true);
    $("#nameClientes").focus();

    var datosTabCliente = {
        id: numIdClientes
    }

    //Conversion a JSON
    let dataToSendClientes = JSON.stringify(datosTabCliente);

    //Peticion Ajax
    $.ajax({
        url: "https://129.146.17.50:8080/Client/update" + numIdClientes,
        type: 'GET',
        dataType: 'json',

        success: function(respuesta) {
            var items = respuesta.items;

            $("#numIdClientes").val(items[0].id);
            $("#nameClientes").val(items[0].name);
            $("#email").val(items[0].email);
            $("#age").val(items[0].age);
            console.log(items);

        },

        error: function(xhr, status) {
            console.log(status);
        }
    });
}

// Actualizar datos tabla cliente

function actualizarClientes() {

    $("#btnGuardarClientes").show();
    $("#btnRegistrarClientes").show();
    $("#btnConsultarClientes").show();
    $("#btnBorrarClientes").show();

    var datosTabCliente = {
        id: $("#numIdClientes").val(),
        name: $("#nameClientes").val(),
        email: $("#email").val(),
        age: $("#age").val(),
    }

    //Conversion a JSON
    let dataToSendClientes = JSON.stringify(datosTabCliente);

    //Petición Ajax
    $.ajax({
        url: "https://129.146.17.50:8080/Client/update",
        data: dataToSendClientes,
        type: 'PUT',
        contentType: "application/JSON",

        success: function(respuesta) {
            console.log("Actualizado");
            consultaCli();
        },

        error: function(xhr, status) {
            console.log(status);
        }
    })

}



//--------------------------- Editar Messages------------------------


function editarMensajes(numIdMensajes) {

    // ocultar y mostrar botones
    $("#btnGuardarMensajes").show();
    $("#btnRegistrarMensaje").show();
    $("#btnConsultarMensajes").show();
    $("#btnBorrarMensajes").show();
    $("#numIdMensajes").prop('disabled', true);
    $("#message").focus();

    var datosTabMensajes = {
        id: numIdMensajes
    }

    //Conversion a JSON
    let dataToSendMensajes = JSON.stringify(datosTabMensajes);

    //Peticion Ajax
    $.ajax({
        url: "https://129.146.17.50:8080/Message/update" + numIdMensajes,
        type: 'GET',
        dataType: 'json',

        success: function(respuesta) {
            var items = respuesta.items;

            $("#numIdMensajes").val(items[0].id);
            $("#message").val(items[0].messagetext);
            console.log(items);

        },

        error: function(xhr, status) {
            console.log(status);
        }
    });
}

// Actualizar datos tabla cliente

function actualizarMensajes() {

    $("#btnGuardarMensajes").show();
    $("#btnRegistrarMensajes").show();
    $("#btnConsultarMensajes").show();
    $("#btnBorrarMensajes").show();

    var datosTabMess = {
        id: $("#numIdMensajes").val(),
        messagetext: $("#message").val(),

    }

    //Conversion a JSON
    let dataToSendMensajes = JSON.stringify(datosTabMensajes);

    //Petición Ajax
    $.ajax({
        url: "https://129.146.17.50:8080/Message/update",
        data: dataToSendMensajes,
        type: 'PUT',
        contentType: "application/JSON",

        success: function(respuesta) {
            console.log("Actualizado");
            consultaMess();
        },

        error: function(xhr, status) {
            console.log(status);
        }
    })

}