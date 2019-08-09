const {argumentos} = require("./configuraciones/yargs");
const {sumar, restar, multiplicar, dividir} = require("./funciones/funciones")
const {colors} = require("colors")

let comando = argumentos._[0];

let {numero1, numero2} = argumentos;

switch(comando){
    case "sumar":
        let suma = sumar(numero1, numero2);        
        console.log(`${numero1} + ${numero2} = ${suma}`.bgGreen);
        break;

    case "restar":
            let resta = restar(numero1, numero2);       
            console.log(`${numero1} - ${numero2} = ${resta}`.bgRed);
            break;
    
    case "multiplicar":
            let multiplicacion = multiplicar(numero1, numero2);        
            console.log(`${numero1} * ${numero2} = ${multiplicacion}`.bgBlue);
            break;
    
    case "dividir":
            let division = dividir(numero1, numero2);        
            console.log(`${numero1} / ${numero2} = ${division}`.bgYellow);  
            break;
    
    default:
        console.log("Comando no reconocido");

}