alert("Boas vindas ao jogo do número secreto!")
let tentativas = 0
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
let numeroMaximo = 1000
let numeroSecreto = parseInt((Math.random() * numeroMaximo) + 1)

function verificar() {
    while (true) {
        tentativas++
        let chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}. Se quiser parar, digite "parar"`)
        if (chute == "parar") {
            break
        }
        if (chute == numeroSecreto) {
            alert("Você acertou!")
            alert(`O número secreto era ${numeroSecreto}`)
            palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
            alert(`Voce acertou em ${tentativas} ${palavraTentativa}`)
            if (confirm('Vamos jogar novamente?')) {
                numeroSecreto = parseInt((Math.random() * numeroMaximo) + 1)
                tentativas = 0
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