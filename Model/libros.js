
class Libro {
    nombre
    descripcion
    reseña
    nombreautor
    apellidoautor
    genero
    tipopublico
    fechapublicacion
    idgenero

    //constructor
    constructor(nombre, descripcion, reseña, nombreautor, apellidoautor, genero, tipopublico, fechapublicacion,idgenero) {
        this.nombre = nombre
        this.descripcion = descripcion
        this.reseña = reseña
        this.nombreautor = nombreautor
        this.apellidoautor = apellidoautor
        this.genero = genero
        this.tipopublico = tipopublico
        this.fechapublicacion = fechapublicacion
        this.idgenero = idgenero
    }
    //metodos
    get nombrecompleto() {
        return `${this.nombreautor} ${this.apellidoautor}`
    }

    mensaje(msj){
        console.log(`Yo,  ${this.nombreCompleto}, Les informo que : ${mensaje} `)
    }

    publicarlibros(){
        const mensajeNota = `El Libro,${this.nombre} cuyo autor: ${this.nombreCompleto} 
                            del genero ${this.genero} y para el tipo de publico: ${this.tipopublico}
                            sera publicado en la siguiente fecha : ${this.fechapublicacion}`
        console.log(mensajeNota)
        return mensajeNota
    }

}
module.exports = Libro