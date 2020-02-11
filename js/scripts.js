$( document ).ready(function() {

    $.validate({
        form : '#formulario_contacto'
      });

    $("#formulario_contacto").submit(e => {
        e.preventDefault()
        const nombre = $("#formulario_contacto-nombre").val()
        const correo = $("#formulario_contacto-correo").val()
        const mensaje = $("#formulario_contacto-mensaje").text()
        console.log(nombre, correo, mensaje)
        axios.post('https://mefaltaweb.com/publiapps/sendMail.php', {
            nombre,
            correo,
            mensaje,
        })
        .then(res => {
            console.log(res);
            Swal.fire({
                title: '¡Enviadro!',
                text: 'Tu mensaje ha sido enviado correctamente',
                icon: 'succes',
                confirmButtonText: 'Aceptar'
              })
        })
        .catch(err => {
            console.log(err);
            Swal.fire({
                title: '¡Error!',
                text: 'Ha ocurrido un error. Intente más tarde.',
                icon: 'error',
                confirmButtonText: 'Aceptar'
              })
        })
    })
});