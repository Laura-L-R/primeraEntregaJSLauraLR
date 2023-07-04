alert ("Bienvenidxs a Animal Teatro")

const comprarEntradas = () => {
    let obras = ""
    let cantidad = 0
    let precio = 0
    let precioBruto = 0
    let seguirComprando = true

    do {
        obras = prompt ("¿Qué obra venís a ver? \nEl manifiesto de las alas rotas \nEntrometida \nHombreras").toUpperCase()
        cantidad = parseInt(prompt("¿Cuántas entradas querés comprar?"))

       let cantidadConfirmada = confirmarCantidad (cantidad)
      
        switch (obras) {
            case "EL MANIFIESTO DE LAS ALAS ROTAS":
                precio = 2500                
                break
            case "ENTROMETIDA":
                precio = 2200
                break
            case "HOMBRERAS":
                precio = 2300
                break
            default:
                alert("Esa obra no se encuentra en cartel")
                cantidadConfirmada = 0
        }

        precioBruto += precio * cantidadConfirmada

        seguirComprando = confirm("¿Querés ver otra obra?")
    } while (seguirComprando)

    return precioBruto 
}

const confirmarCantidad = (cantidad) => {
       while (Number.isNaN(cantidad) || cantidad === 0 || cantidad <= 0) {
        alert  ("Ingresar una cantidad válida")
        cantidad = parseInt(prompt("¿Cuántas entradas querés comprar?"))            
    }
    return cantidad 
}

let compraBruta = comprarEntradas()
console.log (compraBruta)

const calcularCostoServicio  = (valorEntradas) => valorEntradas * 0.10
const costoServicio = calcularCostoServicio (compraBruta)
console.log (costoServicio)

const entradasConServicio  = (a,b) => a + b
const compraConServicio = entradasConServicio (compraBruta, costoServicio)
console.log (compraConServicio)

const valorDescuentos = () => {
    let tipoDescuento = ""
    let descuentos = 0
    let valorBrutoEntradas = compraBruta
    
    tipoDescuento = prompt ("¿Tenés algún descuento? \nEstudiante \nJubilado/a \nNinguno").toUpperCase()
              
        switch (tipoDescuento) {
            case "ESTUDIANTE":
                descuentos = valorBrutoEntradas*0.20
                alert("Por ser estudiante, tenés un 20% sobre el precio de las entradas. No incluye el costo de servicio")             
                break
            case "JUBILADO":
                descuentos = valorBrutoEntradas*0.40
                alert("Por ser jubilado, tenés un 40% sobre el precio de las entradas. No incluye el costo de servicio")
                break          
            case "JUBILADA":
                descuentos = valorBrutoEntradas*0.40                
                alert("Por ser jubilada, tenés un 40% sobre el precio de las entradas. No incluye el costo de servicio")
                break            
            case "NINGUNO":
                descuentos = 0
                alert("Perfecto, continuamos con la compra")
                break
            default:
                alert("¡Aún no tenemos descuento para eso!")
                descuentos = 0
        }
        return descuentos
}

const incluirDescuentos = valorDescuentos()
console.log (incluirDescuentos)

const entradasConDescuento  = (a,b) => a - b
const compraConDescuento = entradasConDescuento (compraBruta, incluirDescuentos)
console.log (compraConDescuento)

const totalEntradas  = (a,b,c) => a + b - c 
const total = totalEntradas (compraBruta, costoServicio, incluirDescuentos)
console.log(total)
alert("El total de su compra es $"+total)

let confirmarEntradas = confirm("¿Desea recibir sus e-tickets al mail?")

const entradasFisicaDigital = (confirmarEntradas) => {
    switch (confirmarEntradas) {
        case confirmarEntradas = false:
            alert ("Puede imprimirlas desde esta página, o acercarse con su DNI a boletería el día de la función")                 
            break;
        default:
            alert ("Enviaremos sus entradas al mail") 
            break;
    }

return confirmarEntradas
}

const enviarAlMail = () => {
    let email = " "
    let confirmarEmail = " "
    let preguntarDeNuevo = true
    let adquisiciónEntradas = entradasFisicaDigital(confirmarEntradas)

    do{
        email = prompt("Ingrese su email: ")
        confirmarEmail = prompt("Confirme su email: ")

        if(email === confirmarEmail){
            alert ("Hemos enviado su e-ticket al correo "+email)
            preguntarDeNuevo = false
        }else{
            alert ("El email es incorrecto, vuelva a ingresarlo")
        }
    }while (preguntarDeNuevo)
}

const entradasEnviadas = enviarAlMail ()

alert ("¡Muchas gracias por tu compra! \nGracias por elegir a Animal Teatro")