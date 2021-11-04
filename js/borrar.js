function borrarCategoria(numIdCategoria) {

    var datosTabCategoria = {
        id: numIdCategoria
    }

    //Conversion a JSON
    let dataToSendCategoria = JSON.stringify(datosTabCategoria);

    //Petición Ajax

    $.ajax({

        url: "https://129.146.17.50:8080/api/Category/delete",
        data: dataToSendCategoria,
        type: 'DELETE',
        contentType: "application/JSON",
        success: function(respuesta) {
            console.log("BORRADO");
            consulta();
        },

        error: function(xhr, status) {
            console.log(status);
        }

    })

}

//---------------------Borrar Cabañas--------------------

function borrarCabin(numIdCabin) {

    var datosTabCabin = {
        id: numIdCabin
    }

    //Conversion a JSON
    let dataToSendCabin = JSON.stringify(datosTabCabin);

    //Petición Ajax

    $.ajax({

        url: "https://129.146.17.50:8080/api/Cabin/delete",
        data: dataToSendCabin,
        type: 'DELETE',
        contentType: "application/JSON",
        success: function(respuesta) {
            console.log("BORRADO");
            consulta();
        },

        error: function(xhr, status) {
            console.log(status);
        }

    })

}

//---------------------Borrar Clientes--------------------

function borrarClientes(numIdClientes) {
    var datosTabClientes = {
        id: numIdClientes
    }

    //Conversion a JSON
    let dataToSendClientes = JSON.stringify(datosTabClientes);

    //Petición Ajax
    $.ajax({
        url: "https://129.146.17.50:8080/api/Client/delete",
        data: dataToSendClientes,
        type: "DELETE",
        contentType: "application/JSON",
        success: function(respuesta) {
            console.log("BORRADO");
            consultaCli();
        },

        error: function(xhr, status) {
            console.log(status);
        },
    });
}


//---------------------- Borrar Mensajes--------------------

function borrarMensajes(numIdMensajes) {
    var datosTabMensajes = {
        id: numIdMensajes
    }

    //Conversion a JSON
    let dataToSendMensajes = JSON.stringify(datosTabMensajes);

    //Petición Ajax
    $.ajax({
        url: "https://129.146.17.50:8080/api/Message/delete",
        data: dataToSendMensajes,
        type: "DELETE",
        contentType: "application/JSON",
        success: function(respuesta) {
            console.log("BORRADO");
            consultaMess();
        },

        error: function(xhr, status) {
            console.log(status);
        },
    });
}