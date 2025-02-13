alert("Boas vindas ao jogo do número secreto!")

let numeroSecreto = parseInt((Math.random() * 9) + 1)

function verificar() {
    while (true) {
        let chute = prompt("Escolha um número entre 1 e 10")
        if (chute == numeroSecreto) {
            alert("Você acertou!")
            alert(`O número secreto era ${numeroSecreto}`)
            if (confirm('Vamos jogar novamente?')) {
                numeroSecreto = parseInt((Math.random() * 9) + 1)
            } else {
                break
            }
        } else {
            if (chute > numeroSecreto) {
                alert("O número secreto é menor")
            } else {
                alert("O número secreto é maior")
            }
        }
    }
}

verificar()