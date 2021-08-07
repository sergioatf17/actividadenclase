function validar() {

    var nombre, tipomensaje, edad

    nombre = document.getElementById("name").value
    tipomensaje = document.getElementById("type").value
    edad = document.getElementById("age").value 

    /*if(nombre == ""){
        alert("El campo nombre esta vacio")
    }

    if(tipomensaje == ""){
        alert("El campo tipo de mensaje esta vacio")
    }
    
    if (edad == "") {
        alert("El campo edad esta vacio")
    }*/

    //if (edad == "")  alert("El campo edad esta vacio")

    //  || = O
    //  && = Y

    //if(nombre == "" || tipomensaje == "" || edad == ""){
        var mensaje = ""

        if(edad == ""){
            mensaje += "El campo edad esta vacio"
            //mensaje = mensaje + "el campo edad esta vacio"
        }

        if(tipomensaje == ""){
            mensaje += "\nEl campo tipo de mensaje esta vacio"
        }

        if(nombre == ""){
            mensaje += "\nEl campo nombre esta vacio"
        }


        document.getElementById("mensaje").innerHTML = "<p style='background-color: blue;'>" +  mensaje + "</p>"
       

        //alert(mensaje)

        
    //}




    //a = hola

    //a = 1
    //b = "1"
    //a == b SI Valida si el valor es igual
    //a === b NO Valida si el valor es igual, pero tambien valida si el tipo de dato es igual 
    // ! es para negar

    //Operador ternario
    //        Condicion  ?  Respuesta Verdadero   :  Respuesta Falso
    //edad = (edad=="") ? alert("El campo edad esta vacio") : "" 
    //var miedad = 27
    //var mayoredad = (miedad > 18 ) ? "Si eres mayor de edad" : "No eres mayor de edad"
    //alert(mayoredad)
    

}