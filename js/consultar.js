//------------------- Consulta Categoria -------------------

function consultaCategoria() {
    console.log("se esta ejecutando");
    $.ajax({
        url: "http://129.146.17.50:8080/api/Category/all",
        type: "GET",
        datatype: "JSON",
        success: function(respuesta) {
            console.log(respuesta);
            consultaRespuestaCategoria(respuesta);
            let $select = $("#selectCategory");
            $.each(respuesta, function(idCategory, name) {
                $select.append(
                    "<option value=" + name.idCategory + ">" + name.name + "</option>"
                );
                console.log("select " + name.idCategory);
            });
        },
    });
}

function consultaRespuestaCategoria(respuesta) {
    var tabla = `<table border="1">
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th colspan="2">Acciones</th>
                </tr>`;

    for (i = 0; i < respuesta.length; i++) {
        tabla += `<tr>
                    <td>${respuesta[i].idCategory} </td>
                    <td>${respuesta[i].name} </td>                 
                    <td>${respuesta[i].description} </td>                                   
                    <td><button onclick="editarRegistroCategoria(${respuesta[i].idCategory})">Editar</button> </td>
                    <td><button onclick="borrarCategoria(${respuesta[i].idCategory})">Borrar</button> </td>
                </tr>`;
    }

    tabla += `</table>`;
    $("#listadoCategoria").html(tabla);
}

//----------------------- Consulta Cabañas --------------------------

function consultaCabin() {
    console.log("se esta ejecutando");
    $.ajax({
        url: "http://129.146.17.50:8080/api/Cabin/all",
        type: "GET",
        datatype: "JSON",
        success: function(respuesta) {
            console.log(respuesta);
            consultaRespuestaCabin(respuesta);
            let $select = $(".selectSelectCategory");
            $.each(respuesta, function(idCabin, name) {
                $select.append(
                    "<option value=" + name.idCabin + ">" + name.name + "</option>"
                );
                console.log("select " + name.idCabin);
            });
        },
    });
}


function consultaRespuestaCabin(respuesta) {
    var tabla = `<table border="1">
                <tr>
                    <th>Id</th>
                    <th>Name</th>                    
                    <th>Brand</th>
                    <th>Rooms</th>
                    <th>Description</th>
                    <th>Category</th>                    
                    <th colspan="2">Acciones</th>
                </tr>`;

    for (i = 0; i < respuesta.length; i++) {
        tabla += `<tr>
                    <td>${respuesta[i].idCabin} </td>
                    <td>${respuesta[i].name} </td>
                    <td>${respuesta[i].brand} </td>
                    <td>${respuesta[i].rooms} </td>
                    <td>${respuesta[i].description} </td>  
                    <td>${respuesta[i].category.name} </td>                   
                    <td><button onclick="editarRegistroCabin(${respuesta[i].idCabin})">Editar</button> </td>
                    <td><button onclick="borrarCabin(${respuesta[i].idCabin})">Borrar</button> </td>
                </tr>`;
    }

    tabla += `</table>`;
    $("#listadoCabin").html(tabla);
}

//-------------------- Consulta Clientes -------------------------

function consultaClientes() {
    console.log("se esta ejecutando");
    $.ajax({
        url: "http://129.146.17.50:8080/api/Client/all",
        type: "GET",
        datatype: "JSON",
        success: function(respuesta) {
            console.log(respuesta);
            consultaRespuestaClientes(respuesta);
            let $select = $(".selectClient");
            $.each(respuesta, function(idClient, name) {
                $select.append(
                    "<option value=" + name.idClient + ">" + name.name + "</option>"
                );
                console.log("select " + name.idClient);
            });
        },
    });
}

function consultaRespuestaClientes(respuesta) {
    var tabla = `<table border="1">
                  <tr>
                      <th>Id</th>                     
                      <th>E-mail</th>
                      <th>Password</th>
                      <th>Name</th>
                      <th>Age</th>
                      <th colspan="2">Acciones</th>
                  </tr>`;

    for (let i = 0; i < respuesta.length; i++) {
        tabla += `<tr>
                      <td>${respuesta[i].idClient} </td>
                      <td>${respuesta[i].email} </td>
                      <td>${respuesta[i].password} </td>
                      <td>${respuesta[i].name} </td>                      
                      <td>${respuesta[i].age} </td>  
                      <td><button onclick="editarRegistroClientes(${respuesta[i].idClient})">Editar</button> </td>
                      <td><button onclick="borrarClientes(${respuesta[i].idClient})">Borrar</button> </td>
                  </tr>`;
    }

    tabla += `</table>`;

    $("#listadoClientes").html(tabla);
}

//----------------- Consulta Mensajes ---------------------

function consultaMensajes() {
    $.ajax({
        url: "http://129.146.17.50:8080/api/Message/all",
        type: "GET",
        dataType: "json",

        success: function(respuesta) {
            console.log(respuesta);
            consultaRespuestaMensajes(respuesta);
            let $select = $("#selectMessage");
            $.each(respuesta, function(idMessage, name) {
                $select.append(
                    "<option value=" + name.idMessage + ">" + name.name + "</option>"
                );
                console.log("select " + name.idMessage);
            });
        },
    });
}

function consultaRespuestaMensajes(respuesta) {
    var tabla = `<table border="1">
                  <tr>
                      <th>Id</th>
                      <th>Message</th>                      
                      <th>Audience</th>
                      <th>Client</th>
                      <th colspan="2">Acciones</th>
                  </tr>`;

    for (let i = 0; i < respuesta.length; i++) {
        tabla += `<tr>
                      <td>${respuesta[i].idMessage} </td>
                      <td>${respuesta[i].messageText} </td>
                      <td>${respuesta[i].cabin.name} </td>  
                      <td>${respuesta[i].client.name} </td>   
                      <td><button onclick="editarMensajes(${respuesta[i].idMessage})">Editar</button> </td>
                      <td><button onclick="borrarMensajes(${respuesta[i].idMessage})">Borrar</button> </td>
                  </tr>`;
    }

    tabla += `</table>`;

    $("#listadoMensajes").html(tabla);
}

//----------- consulta reservaciones -----------------

function consultaResrvaciones() {
    $.ajax({
        url: "http://129.146.17.50:8080/api/Reservation/all",
        type: "GET",
        dataType: "json",

        success: function(respuesta) {
            console.log(respuesta);
            consultaRespuestaReservaciones(respuesta);
            let $select = $("#selectReservation");
            $.each(respuesta, function(idReservation, name) {
                $select.append(
                    "<option value=" + name.idReservation + ">" + name.name + "</option>"
                );
                console.log("select " + name.idReservation);
            });
        },
    });
}

function consultaRespuestaReservaciones(respuesta) {
    var tabla = `<table border="1">
                  <tr>
                      <th>Id</th>
                      <th>Start Date</th>                      
                      <th>Devolution Date</th>
                      <th>Audience</th>
                      <th>Client</th>
                      <th colspan="2">Acciones</th>
                  </tr>`;

    for (let i = 0; i < respuesta.length; i++) {
        tabla += `<tr>
                      <td>${respuesta[i].idReservation} </td>
                      <td>${respuesta[i].startDate} </td>
                      <td>${respuesta[i].devolutionDate} </td>
                      <td>${respuesta[i].cabin.name} </td> 
                      <td>${respuesta[i].client.name} </td>  
                                             
                      <td><button onclick="editarReservaciones(${respuesta[i].idReservation})">Editar</button> </td>
                      <td><button onclick="borrarReservaciones(${respuesta[i].idReservation})">Borrar</button> </td>
                  </tr>`;
    }

    tabla += `</table>`;

    $("#listadoReservaciones").html(tabla);
}