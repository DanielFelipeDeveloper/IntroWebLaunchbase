const nome = "Daniel"
const peso = 62
const altura = '1.77'

imc = peso / (altura * altura)

if (imc >= 30) {
    console.log(`${nome} você está acima do peso`)
} else if (imc < 29.9) {
    console.log(`${nome} você não está acima do peso`)
}

