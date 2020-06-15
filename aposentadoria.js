// CÁLCULO DE APOSENTADORIA

const nome = "Santana"
const sexo = "M"
const idade = 55
const contribuicao = 40
const regra8595 = idade + contribuicao

// COM BASE NAS REGRAS DE CONTRIBUIÇÃO E NA REGRA 85-95 RESPECTIVAMENTE
// O tempo de contribuição mínimo para homens é de 35 anos e, para mulheres, 30 anos;
// a soma da idade com o tempo de contribuição do homem precisa ser de no mínimo 95 anos, enquanto a mulher precisa ter no mínimo 85 anos na soma;

if (sexo == 'F') {
    if (contribuicao >= 30 && regra8595 >= 85) {
        console.log(`${nome} você já pode se aposentar!`)
    } else {
        console.log(`${nome} você ainda não pode se aposentar!`)
    }
} else if (sexo == 'M') {
    if (contribuicao >= 35 && regra8595 >= 95) {
        console.log(`${nome} você já pode se aposentar!`)
    } else {
        console.log(`${nome} você ainda não pode se aposentar!`) 
    }
}