

function cargarOfertas(identificador){

       var parametros={
        "valor1":identificador
    };
    $.ajax({
        datos: parametros,
        url: './clases/cargar_ofertas.php',
        type: 'post',
      
        beforeSend: function(){
            $(identificador).html("Cargando....");
        },
        success: function(resultado){
            $(identificador).html(resultado);
        }
    });

}