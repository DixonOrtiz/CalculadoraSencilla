const numero1 = {
    demand: "true",
    alias: "a",
    desc: "Primer número recibido por parámetro."
};

const numero2 = {
    demand: "true",
    alias: "b",
    desc: "Segundo número recibido por parámetro."
};

const numeros = {
    numero1,
    numero2
}

const argumentos = require("yargs")
    .command("sumar", "Suma dos números", numeros)
    .command("restar", "Resta dos números", numeros)
    .command("multiplicar", "Multiplica dos números", numeros)
    .command("dividir", "Divide dos números", numeros)
    .argv;

module.exports = {
    argumentos
}