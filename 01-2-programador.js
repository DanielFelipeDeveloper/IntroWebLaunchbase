const programador = {
    nome: "Daniel",
    idade: 18,
    tecnologias: [
        { nome: 'Javascript', especialidade: 'React/Node' },
        { nome: 'C#', especialidade: 'Desktop' },
        { nome: 'Python', especialidade: 'Data Science' }
    ]
}

console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia 
${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`)