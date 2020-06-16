const usuarios = [
    { nome: "Daniel", tecnologias: ["Javascript", "Node.js", "React"] },
    { nome: "João", tecnologias: ["Html", "Css", "Javascript"] },
    { nome: "Marcela", tecnologias: ["C#", "SQL"] }
]

// for (let usuario of usuarios) {
//     console.log(`${usuario.nome} trabalha com ${usuario.tecnologias}`)
// }

function checaSeUsuarioUsaCSS(usuario) {
    for (let tecnologia of usuario.tecnologias) {
        if (tecnologia == 'Css') {
            return true
        }
    }

    return false
  }

  for (let i = 0; i < usuarios.length; i++) {
        const usuarioUsaCSS = checaSeUsuarioUsaCSS(usuarios[i])

        if (usuarioUsaCSS) {
            console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`)
        }
  }