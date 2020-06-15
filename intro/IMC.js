// Desafio 1-1
// Cálculo IMC - Índice de Massa Corpórea

const nome = "Daniel"
const peso = 62
const altura = '1.75'

imc = (peso / (altura * altura)).toFixed(2)

let msg = `${nome} seu imc é de ${imc} e você entra na classificação:`
let classificação = ''

if (imc < 18.5) {

    classificação = 'MAGREZA'
    console.log(`${msg} "${classificação}"`)

} else if (imc < 24.9) {

    classificação = 'NORMAL'
    console.log(`${msg} "${classificação}"`)

} else if (imc < 29.9) {

    classificação = 'SOBREPESO'
    console.log(`${msg} "${classificação}"`)

} else if (imc < 39.9) {

    classificação = 'OBESIDADE'
    console.log(`${msg} "${classificação}"`)

} else if (imc > 40) {

    classificação = 'OBESIDADE GRAVE'
    console.log(`${msg} "${classificação}"`)

}

