let peliculasArray = [
    {id: 1001, nombre: "AVATAR EL CAMINO DEL AGUA", genero: "FICCION", calificacion:4, precio: 10500},
    {id: 1002, nombre: "GATO CON BOTAS ULTIMO DESEO", genero:"INFANTIL", calificacion:3, precio: 9300},
    {id: 1003, nombre: "UN MUNDO EXTRANIO", genero:"INFANTIL", calificacion:4, precio: 9300},
    {id: 1004, nombre: "BABYLON", genero:"COMEDIA", calificacion:5, precio: 10500},
    {id: 1005, nombre: "DESASTRE INMINENTE", genero:"ACCION", calificacion:4, precio: 10200},
    {id: 1006, nombre: "EL ARO 4", genero:"TERROR", calificacion:4, precio: 10300},
    {id: 1007, nombre: "ALERTA EXTREMA", genero:"ACCION", calificacion:3, precio: 10000},
    {id: 1008, nombre: "GENERACION LOW COST", genero:"DRAMA", calificacion:4, precio: 10100},
    {id: 1009, nombre: "MEGAN", genero:"TERROR", calificacion:3, precio: 9900},
    {id: 10010, nombre: "AGENTE FORTUNE", genero:"ACCION", calificacion:4, precio: 10200},
    {id: 10011, nombre: "EL PEOR VECINO DEL MUNDO", genero:"COMEDIA", calificacion:4, precio: 10100},
    {id: 10012, nombre: "LA FARSA", genero:"DRAMA", calificacion:4, precio: 10150},
    {id: 10013, nombre: "TERRIFIER 2", genero:"TERROR", calificacion:3, precio: 10100},
    {id: 10014, nombre: "EL PRODIGIO", genero:"DRAMA", calificacion:5, precio: 10500},
    {id: 10015, nombre: "EL MENU", genero:"SUSPENSO", calificacion:4, precio: 10400}
]
let carroCompra = []

function ListarPeliculas(){
    let listado = ""
    peliculasArray.forEach(pelicula => {
        listado += "Id: " + pelicula.id + " Nombre: " + pelicula.nombre + " Genero: " + pelicula.genero + " Calificacion: " + pelicula.calificacion + " Precio: $" + pelicula.precio + "\n" + "\n"
    });
    alert(listado)
}

function AgregarProCarro(idPelicula){
    const resultado = peliculasArray.find(pelicula => pelicula.id === idPelicula)
    if(resultado === undefined){
        alert("No se encuentro el id " + idPelicula + " para agregarlo al carro de compra")
    }
    else{
        carroCompra.push(resultado)
    }
    if(carroCompra.length != 0){
        ListarCarro(false)
      }
      else{
          alert("Tu carro de compra se encuentra vacio")
      }
}

function EliminarProCarro(idPelicula){
    let indice = carroCompra.findIndex(pelicula => pelicula.id === idPelicula)
    if(indice != -1){
        carroCompra.splice(indice,1)
    }
    else{
        alert("Id de pelicula no encontrado dentro del carro de compra, no se elimino ningun articulo")
    }

    
    if(carroCompra.length != 0){
        ListarCarro(false)
    }
    else{
        alert("Tu carro de compra se encuentra vacio")
    }
}


function ListarCarro(totalizar){
    let listado = carroCompra.reduce((acc,peli) => acc += "Id: " + peli.id + " Nombre: " + peli.nombre + " Genero: " + peli.genero + " Calificacion: " + peli.calificacion + " Precio: $" + peli.precio + "\n" + "\n", "Tu lista de compra es: \n")
    
    if(totalizar){
        let totalVenta = carroCompra.reduce((acc,peli) => acc += peli.precio, 0)
        listado += "\n Total a pagar : $" + totalVenta
    }
    alert(listado)
}


function BuscarPelicula(nombrePelicula){
    var peliIngresada = peliculasArray.filter(peli => peli.nombre.includes(nombrePelicula))
    let listado = ""
    for (let index = 0; index < peliIngresada.length; index++) {
        const element = peliIngresada[index];
        listado += "Id: " + element.id + " Nombre: " + element.nombre + " Genero: " + element.genero + " Calificacion: " + element.calificacion + " Precio: $" + element.precio + "\n" + "\n"
    }
    if(listado == ""){
        alert(nombrePelicula + " no se encuentra en nuestro listado")
    }
    else{
        alert(listado)
    }
}

function ListarxGenero(nombreGenero){
    let peliculasGenero = []
    for (let index = 0; index < peliculasArray.length; index++) {
        if(peliculasArray[index].genero === nombreGenero)
        {
            peliculasGenero.push(peliculasArray[index])
        }
    }
    let listado =""
    if(peliculasGenero.length > 0){
        for (let index = 0; index < peliculasGenero.length; index++) {
            const element = peliculasGenero[index];
            listado += "Id: " + element.id + " Nombre: " + element.nombre + " Genero: " + element.genero + " Calificacion: " + element.calificacion + " Precio: $" + element.precio + "\n" + "\n"
        }
        alert(listado)
    }
    else{
        alert("No hay peliculas del genero " + nombreGenero)
    }
}

let continuar = true
do{
    let opcIngresada = Number(prompt("LAS MEJORES PELICULAS  ingrese una opcion \n 1 Listar Peliculas\n 2 Agregar una pelicula al carro \n 3 Eliminar una pelicula del carro\n 4 Listar carro de compra \n 5 Buscar pelicula \n 6 Buscar genero \n 7 Finalizar compra \n 8 Salir"))
    let idIngresado = 0
    switch(opcIngresada){
        case 1:
            ListarPeliculas()
            break
        case 2:        
            idIngresado = Number(prompt("Ingrese el id de la pelicula ha ingresar al carro de compra"))
            if(idIngresado != 0){
                AgregarProCarro(idIngresado);
            }
            break
        case 3:
            idIngresado = Number(prompt("Ingrese el id de la pelicula para eliminar del carro de compra"))
            if(idIngresado != 0){
                EliminarProCarro(idIngresado);
            }
            break
        case 4:
            ListarCarro(false)
            break
        case 5:
            let nombrePelicula = prompt("Ingrese el nombre de la pelicula que desea buscar").toUpperCase()
            if(nombrePelicula != 0){
                BuscarPelicula(nombrePelicula)
            }
            break
        case 6:
            let nombreGenero = prompt("Ingrese el nombre del genero que desea buscar: Ficcion, Infantil, Accion, Drama, Terror, Comedia o Suspenso").toUpperCase()
            if(nombreGenero != 0){
                ListarxGenero(nombreGenero)
            }
            break
        case 7:
            ListarCarro(true)
            continuar = false
            break
        case 8:
            continuar = false
            break
        default:
            alert("Opcion ingresada incorrecta")
            break
    }

}while(continuar)
alert("Fin, gracias por adquirir las mejores peliculas!!!")