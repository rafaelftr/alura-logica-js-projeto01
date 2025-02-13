alert("Boas vindas ao jogo do número secreto!")
let tentativas = 0
let numeroMaximo = 1000
let numeroSecreto = parseInt((Math.random() * numeroMaximo) + 1)

function verificar() {
    while (true) {
        tentativas++
        let chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}. Se quiser parar, digite "parar"`)
        if (isNaN(chute)) {
            alert("O jogo acabou.")
            break
        }
        if (chute == numeroSecreto) {
            alert("Você acertou!")
            alert(`O número secreto era ${numeroSecreto}`)
            const plural = tentativas > 1 ? 's' : '';
            alert(`Voce acertou em ${tentativas} tentativa${plural}!`);
            if (confirm('Vamos jogar novamente?')) {
                numeroSecreto = parseInt((Math.random() * numeroMaximo) + 1)
                tentativas = 0
            } else {
                alert('Obrigado por jogar!')
                break
            }
        } else {
            alert(`O número secreto é ${chute > numeroSecreto ? 'menor' : 'maior'}`);
        }
    }
}

verificar()