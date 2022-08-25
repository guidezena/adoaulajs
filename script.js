const resultado = document.querySelector('#resultado');
const altura = document.querySelector('#altura');
const peso = document.querySelector('#peso');

const calcIMC = () => {
    if (altura.value !== '' && peso.value !== '') {
        const imc = (peso.value / (altura.value * altura.value)).toFixed(2)
        let resultadoIMC = ''
        if (imc < 18) {
            resultadoIMC = "Abaixo do peso"
        } else if (imc < 25) {
            resultadoIMC = "Peso normal"
        } else if (imc < 30) {
            resultadoIMC = "Acima do peso"
        } else if (imc < 35) {
            resultadoIMC = "Obesidade grau 1"
        } else if (imc < 41) {
            resultadoIMC = "Obesidade gra2"
        } else {
            resultadoIMC = "Obesidade grau 3"
        }
        resultado.innerHTML = `IMC : ${imc} (${resultadoIMC})`
    } else {
        resultado.innerHTML = "Preencha todos os campos"
    }
}
