const usuarios = [
    { nome: "Daniel", tecnologias: ["Javascript", "Node.js", "React"] },
    { nome: "João", tecnologias: ["Html", "Css", "Javascript"] },
    { nome: "Marcela", tecnologias: ["C#", "SQL"] }
]

for (usuario of usuarios) {
    console.log(`${usuario.nome} trabalha com ${usuario.tecnologias}`)
}