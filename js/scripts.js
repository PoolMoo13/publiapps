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
        })
        .catch(err => {
            console.log(err);
        })
    })
});