console.group("create")
const arraySimple = [
    1,
    "alfa",
    true,
    [2, 3, 5, 6],
    { UserName: "Simòn", lastName: "Arias" },
    false
]

const arraySimple2 = []
const arraySimple3 = Array("uno", "dos", "tres")
const arraySimple4 = new Array(3) // [ , , ,]
arraySimple4.push("hola mundo")



console.log(arraySimple)
console.log(arraySimple2)
console.log(arraySimple3)
console.log(arraySimple4)

console.log(arraySimple[4].UserName) //para sacar un valor de una propiedad del array

const option1 = Array.from(arraySimple[4].UserName) // primera opciòn from
const option2 = arraySimple[4].UserName.split("") // segunda opciòn con split
console.log(option1)
console.log(option2)

console.groupEnd()


console.groupCollapsed("Manejo bàsico")
//EXTRAER ELEMENTOS DE UN ARRAY

const alphabet = ["a", "b", "c", "d", "e", "f", [1,2,3,4]] //posiciones, ejm la c està en la posiciòn 2. la a en la cero.
console.log(alphabet[6])
console.log(alphabet[0])
console.log(alphabet.at(0)) //los corchetes y el ".at()" hacen exactamente los mismo.
console.log(alphabet.at(-3)) // pongo la posiciòn en negativo y se me devuelve
console.log(alphabet.at(-1)) //de atràs para aelante se comienza con la posiciòn (-1)

alphabet[0] = "alpa" //para reemplazar un valor
//alphabet.at(1) = "bravo" //el (.at()) solo sirve para mostrar, no para reemplazar. Para esto se usan los corchetes
alphabet[1] ="bravo" // esta serìa la forma correcta para reemplazar.


alphabet.push("h") //con el mètodo PUSH AGREGAMOS elementos al array, siempre agrega al final del array.
alphabet.push("i") //al final

alphabet.unshift(1) //a diferencia del PUSH, con este metodo UNSHIFT se agrega al inicio del array.
alphabet.unshift(2)
alphabet.unshift(3)

alphabet.pop() //con el .POP se me ELIMINA la ùltima posicion, cada vez que lo llame me eliminarà la ùltima posiciòn.
const letraEliminada = alphabet.pop()

alphabet.shift() // .SHIFT para eliminar desde el INICIO

delete alphabet[2] //elimina en la posiciòn dos pero me deja el espacio vacìo. "Deja el cuerpo en la escena del crimen a diferencia del .POP y .SHIFT que me reducen el array. 

alphabet[15] = "tango" // me pone el elemento "tango" en la posiciòn 15 y me deja espacios vaciòs en las proximas posiciones.

console.log(typeof alphabet) // para verificar que TIPO DE DATOS son.
console.log(alphabet)
console.log(alphabet.indexOf("zulu")) // me dà -1 porque no encuentra la palabra en el array
console.log(alphabet.includes("e4")) // si encuentra la palabra me retorna TRUE, sino FALSE, solo booleanos.
console.log(letraEliminada)

console.groupEnd


console.groupCollapsed("Uniòn de Arrays")

const clanGates = ["david", "luisa", "simon"]
const clanGosling = ["mariana", "kevin", "david"]

console.log(clanGates)
console.log(clanGosling)


console.log(clanGates.concat(clanGosling)) //para CONCATENAR DOS ARRAYS. Y QUEDAR EN UNO SOLO.
let clanUNido =clanGates.concat(clanGosling)
console.log(clanUNido) //me hace lo mismo que el ejemplo de arriba, creando una nueva variable-

console.log(clanUNido.join(", ")) //UNIR los elementos de un array y dentro de las comillas ponemos el simbolo con el que quieremos que se separe.
console.log(clanUNido.join("# "))

const arrayUnido = clanUNido.join(" ")
console.log(arrayUnido)
console.log(arrayUnido.split(" ")) //para partir las palabras del string en posiciones. 

console.groupEnd()

//FORMA COMO LO HICE YO
console.groupCollapsed("ejercicio")

let arrayNumbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(arrayNumbers)
console.log(arrayNumbers.join(",")) //con el .JOIN imprimo pero como una STRING.

const arrayNumbersUnido = arrayNumbers.join("")

console.log(arrayNumbersUnido.split(""))  //me la imprime pero como strings y  yo kla necesito como nùmeros por eso usarè .MAP(Number)

const arrayNumbersSplit = arrayNumbersUnido.split("")
const numbeers = arrayNumbersSplit.map(Number)
console.log(numbeers)

console.groupEnd()

//FORMA COMO LO HIZO EL PROFE
console.groupCollapsed("ejercicio segunda forma del profe")

let arrayCon10posiciones = [1,2,3,4,5,6,7,8,9,10]
let stringUnidoDeNumeros = arrayCon10posiciones.join(",")
let arrayCon10posicionesUnidoDeNuevo = stringUnidoDeNumeros.split(",")

console.log(arrayCon10posiciones);
console.log(stringUnidoDeNumeros);
console.log(arrayCon10posicionesUnidoDeNuevo);
console.log(arrayCon10posicionesUnidoDeNuevo) = arrayCon10posicionesUnidoDeNuevo.map(numero => {
    return parseInt(numero)
})



console.groupEnd()