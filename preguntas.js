// 1️⃣ Responde las siguientes preguntas:
// ¿Qué es una variable y para qué sirve?
// Una variable es un espacio en memoria que permite que se le asigne información o un valor, esta puede tener un identificador o nombre.
// ¿Cuál es la diferencia entre declarar e inicializar una variable?
// La declaración de la variable se da cuando se le da un nombre o identificador pero aún no se le asigna un valor, por tanto, la inicialización se da
// cuando se le asigna un valor y ha sido declarada anteriormente. 
// ¿Cuál es la diferencia entre sumar números y concatenar strings?
// La suma de números es una operación matematica mientras que concatenar strings es la unión de datos de este tipo.
// ¿Cuál operador me permite sumar o concatenar?
// El operador para la suma o concatenación se llama adición (+).

// 2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:
//Nombre:  
let name = "string"

//Apellido: 
let lastname = "string"

//Nombre de usuario en Platzi: 
let username = "string"

//Edad: 
let age = number

//Correo electrónico: 

let email = "string"

//Mayor de edad: 
let adult = boolean

//Dinero ahorrado: 
let savings = number

//Deudas: 
let debts = number

//4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:
//Nombre completo (nombre y apellido)
let nombreCompleto = name + " " + lastname

//Dinero real (dinero ahorrado menos deudas)

let dineroReal = savings - debts

//1️⃣ Responde las siguientes preguntas en la sección de comentarios:
//¿Qué es una función?
// Una función es un bloque de código que evita repetir código y permite realizar operaciones o instruciones, puede ser reutilizada recibiendo argumentos para su uso.
//¿Cuándo me sirve usar una función en mi código?
//Cuando se está repitiendo código para realizar la misma operación o instrución ahorrando lineas de código.
//¿Cuál es la diferencia entre parámetros y argumentos de una función?
//Los paramentros en una función son los valores que se declaran dentro de ella para realizar alguna operación mientras que los argumentos son valores que se le pasan a la función al momento de llamarla.

// 2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

// const name = "Juan David";
// const lastname = "Castro Gallego";
// const completeName = name + lastname;
// const nickname = "juandc";

// console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

sobrenombre = function(name, lastname, nickname){
    let completeName = name +" " +lastname;
    return console.log("Mi nombre es " +completeName+ " , pero prefiero que me digas " +nickname+ "." );

}

// 1️⃣ Responde las siguientes preguntas en la sección de comentarios:
// ¿Qué es un condicional?
// Una condicional permite evaluar una expresión con el fin de ejecutar un bloque de codigo si es verdadera o falsa
// ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
// if: permite evaluar si una expresion es verdadera ejercutar un bloque de código.
// else if: Permite evaluar otra condición en caso de que la primera no sea verdadera para ejecutar otro bloque de .
// else: Reliza alguna acción en caso de que la expresión sea falsa.
// switch case: Evalua una expresión y define diferentes casos y que bloque de código ejecutar de acuerdo al caso que cumpla con la condición. 
// ¿Puedo combinar funciones y condicionales?
// Si

// Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:
// const tipoDeSuscripcion = "Basic";

// switch (tipoDeSuscripcion) {
//    case "Free":
//        console.log("Solo puedes tomar los cursos gratis");
//        break;
//    case "Basic":
//        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
//        break;
//    case "Expert":
//        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
//        break;
//    case "ExpertPlus":
//        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
//        break;
// }

function suscripcion(tipoDeSuscripcion){

    if (tipoDeSuscripcion === "Free"){
        console.log("Solo puedes tomar los cursos gratis")
    }else if(tipoDeSuscripcion === "Basic"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes")
    }else if(tipoDeSuscripcion === "Expert"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año")
    }else if(tipoDeSuscripcion === "ExpertPlus"){
        console.log("Tú y alguien más pueden tomar todos los cursos de Platzi durante un año")
    }else{
        console.log("No tienes ninguna suscripción")
    }
}
// 3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).
// 💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays u objetos y un solo condicional. 😏

let suscripcionDisponible = [
    {
        "free" : "Solo puedes tomar los cursos gratis",
    },
    {
        "basic" : "Puedes tomar casi todos los cursos de Platzi durante un mes",
    },
    {
        "expert": "Puedes tomar casi todos los cursos de Platzi durante un año",
    },
    {
        "expertPlus": "Tú y alguien más pueden tomar todos los cursos de Platzi durante un año"
    }
]

function suscripcionUsuario(suscripcionDisponible, suscripcion){

    let suscripcionDeUsuario = suscripcionDisponible.map((suscripcionDisponible) => suscripcionDisponible[suscripcion]);

        return suscripcionDeUsuario;
}

// 1️⃣ Responde las siguientes preguntas en la sección de comentarios:
// ¿Qué es un ciclo?
// Un ciclo es un bloque de codigo que permite iterar cuantas veces sea necesarias para cumplir con alguna condición
// ¿Qué tipos de ciclos existen en JavaScript?
// Existen los ciclos for, while y do while
// ¿Qué es un ciclo infinito y por qué es un problema?
// Es un ciclo que va a seguir iterando sin parar porque la condición nunca se cumple
// ¿Puedo mezclar ciclos y condicionales?
// Si se pueden combinar de diferentes maneras para evaluar diferentes condiciones resultado del ciclo o realizar un ciclo si se cumple cierta condicioón

// 2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

let a = 0;

while(a < 5){
  
    console.log("El valor de i es: " + a);
    a += 1; 
}

let i = 10;

while(i >= 2){
  
    console.log("El valor de i es: " + i);
    i -= 1; 
} 

// 3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.
// 💡 Pista: puedes usar la función prompt de JavaScript.

function validar (){
    let suma = parseInt(prompt("Cuánto es 2 + 2: "))
    if(suma === 4){
        alert("Felicitaciones")
    }else{
        alert("Intentalo de nuevo")
        validar()
    }
}

// 1️⃣ Responde las siguientes preguntas en la sección de comentarios:
// ¿Qué es un array?
// Los arrays son objetos que tienen funciones similares a los de una lista respecto a la colección de diferentes tipos y con asignación de indices, se asigna a una variable y se representan con [].
// ¿Qué es un objeto?
// Los objetos son entidades independiente que sirven para almacenar diferentes datos, accedidos por medio de una variable, a su vez los objetos pueden tener propiedades
// ¿Cuándo es mejor usar objetos o arrays?
// Los objetos son de mayor uso en la manipulación de multiples elementos
// ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
// Si, un array puede contener objetos y los objetos pueden contener arrays

// 2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
function imprimirPrimerElemento(array){
    return array[0]

}
// 3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

function imprimirTodosLosElementos(array){
    for(let i =0; i < array.length; i++){
        console.log(array[i])
    }
}
// 4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

function imprimirElementosObjeto(obj){
    for(let i in obj){
        console.log(obj[i])
    }
}

