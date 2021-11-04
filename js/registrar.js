//----------- registro Categorias-------------------

function registroCategoria() {
    var datosTabCategory = {
        name: $("#nameCategoria").val(),
        description: $("#descriptionCategoria").val(),
    };

    //Conversion a JSON
    let dataToSendCategoria = JSON.stringify(datosTabCategoria);

    //Petición Ajax
    $.ajax({
        url: "http://129.146.17.50:8080/api/Category/save",
        data: dataToSendCategoria,
        type: "POST",
        contentType: "application/JSON",
        success: function(respuesta) {
            console.log("Insertado");
            consultaCatg();
        },
        error: function(xhr, status) {
            console.log(status);
        },
    });
}

//--------------------- registro Cabañas --------------------------

function registro() {
    var datosTabCabin = {
        name: $("#name").val(),
        brand: $("#brand").val(),
        rooms: $("#rooms").val(),
        description: $("#description").val(),
        category: { id: +$("#selectCategory").val() },
    };

    //Conversion a JSON
    let dataToSendCabin = JSON.stringify(datosTabCabin);

    //Petición Ajax
    $.ajax({
        url: "http://129.146.17.50:8080/api/Audience/save",
        data: dataToSendCabin,
        type: "POST",
        contentType: "application/JSON",
        success: function(respuesta) {
            console.log("Insertado");
            consulta();
        },
        error: function(xhr, status) {
            console.log(status);
        },
    });
}

//-------------------- registro Cliente -------------------

function registroClientes() {
    var datosTabcli = {
        email: $("#emailClientes").val(),
        password: $("#passwordClientes").val(),
        name: $("#nameClients").val(),
        age: $("#ageClientes").val(),
    };

    //Conversion a JSON
    let dataToSendClientes = JSON.stringify(datosTabClientes);

    //Petición Ajax
    $.ajax({
        url: "http://129.146.17.50:8080/api/Client/save",
        data: dataToSendClientes,
        type: "POST",
        contentType: "application/JSON",
        success: function(respuesta) {
            console.log("Insertado");
            consultaCli();
        },

        error: function(xhr, status) {
            console.log(status);
        },
    });
}

//--------------------funcion Registro message-------------------

function registroMensajes() {
    var datosTabMensajes = {
        messageText: $("#message").val(),
        cabin: { id: +$(".selectCabin").val() },
        client: { idClient: +$(".selectClient").val() },
    };

    //Conversion a JSON
    var dataToSendMensajes = JSON.stringify(datosTabMensajes);

    //Petición Ajax

    $.ajax({
        url: "http://129.146.17.50:8080/api/Message/save",
        data: dataToSendMensajes,
        type: "POST",
        contentType: "application/JSON",
        success: function(respuesta) {
            console.log("Insertado");
            consultaMess();
        },

        error: function(xhr, status) {
            console.log(status);
        },
    });
}

//--------------- funcion Registro Respositorio ----------------

function registroReservaciones() {
    var datosTabReservaciones = {
        startDate: $("#startDate").val(),
        devolutionDate: $("#devolutionDate").val(),
        cabin: { id: +$(".selectCabin").val() },
        client: { idClient: +$(".selectClient").val() },
    };

    //Conversion a JSON
    var dataToSendReservaciones = JSON.stringify(datosTabReservaciones);

    //Petición Ajax

    $.ajax({
        url: "http://129.146.17.50:8080/api/Reservation/save",
        data: dataToSendReservaciones,
        type: "POST",
        contentType: "application/JSON",
        success: function(respuesta) {
            console.log("Insertado");
            consultaRes();
        },

        error: function(xhr, status) {
            console.log(status);
        },
    });
}