<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: origin, content-type, accept");
header("HTTP/1.1 200 OK");
header('Content-type: application/json');

$nombre = $_POST["nombre"];
$correo = $_POST["correo"];
$mensaje = $_POST["mensaje"];

$correo = "Nombre: " . $nombre . "\nCorreo: " . $correo  ."\nMensaje: " . $mensaje;

if(mail("pedropool13@gmail.com", "Formulario de contacto PubliApps", $correo)) {
    echo "Correo Enviado"
} else {
    echo "Correo no enviado"
}


?>