$( document ).ready(function() {

    $.validate({
        form : '#formulario_contacto'
      });

    $("#formulario_contacto").submit(e => {
        e.preventDefault()
        $("#contacto #formulario_contacto").addClass("loader-active")
        $("#contacto .loader").addClass("loader-active")
        const nombre = $("#formulario_contacto-nombre").val()
        const correo = $("#formulario_contacto-correo").val()
        const mensaje = $("#formulario_contacto-mensaje").val()
        console.log(nombre, correo, mensaje)
        axios.post('https://mefaltaweb.com/publiapps/sendMail.php', {
            nombre,
            correo,
            mensaje,
        })
        .then(res => {
            console.log(res);
            Swal.fire({
                title: '¡Enviado!',
                text: 'Tu mensaje ha sido enviado correctamente',
                icon: 'success',
                confirmButtonText: 'Aceptar'
            })
            $("#contacto #formulario_contacto").removeClass("loader-active")
            $("#contacto .loader").removeClass("loader-active")
            $("#formulario_contacto").trigger("reset");
        })
        .catch(err => {
            console.log(err);
            Swal.fire({
                title: '¡Error!',
                text: 'Ha ocurrido un error. Intente más tarde.',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            })
            $("#contacto #formulario_contacto").removeClass("loader-active")
            $("#contacto .loader").removeClass("loader-active")
        })
    })
});