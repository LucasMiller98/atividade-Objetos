var btnButton = document.querySelector('button')
var time = document.querySelector('time')
var body = document.querySelector('body')
var res = document.querySelector('#show-objects')
var txtInput1 = document.querySelector('#car-brand') // marca
var txtInput2 = document.querySelector('#car-model') // modelo
var txtInput3 = document.querySelector('#car-color') // cor
var numInput = document.querySelector('#car-age') // ano
var mainContent = document.querySelector('main')

const renderObjects = () => {
    let brand = txtInput1.value
    let model = txtInput2.value
    let color = txtInput3.value
    let age = numInput.value

    let user = {
        brand,
        model,
        color,
        age,
        showEverything() {
            res.innerHTML = `{Marca: ${this.brand}, Modelo: ${this.model}, Cor: ${this.color}, Ano: ${this.age}}`
        }
    }
    user.showEverything()
}
renderObjects()

const clickButton = () => {

    if(txtInput1.value.length == 0 || txtInput2.value.length == 0 || txtInput3.value.length == 0 || numInput.value == 0) {
        alert('Erro! Não deixe nenhum campo vazio.')
        console.warn('Campo vazio.')
    }else{
        renderObjects()
    }
    txtInput1.value = ``
    txtInput2.value = ``
    txtInput3.value = ``
    numInput.value = ``
}
btnButton.onclick = clickButton

const setDateHours = () => {
    let days_of_the_week = [
        'Domingo',
        'Segunda-feira',
        'Terça-feira',
        'Quarta-feira',
        'Quinta-feira',
        'Sexta-feira',
        'Sábado'
    ]
    let months_year = [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
    ]
    let today = new Date()
    let hours = today.getHours()
    let day = today.getDate()
    let year = today.getFullYear()

    if(hours >= 0 && hours < 5) {
        time.innerHTML = `${days_of_the_week[today.getDay()]}, ${day} de ${months_year[today.getMonth()]} de ${year}. Boa madrugada!`
    }else if(hours >= 5 && hours < 12) {
        time.innerHTML = `${days_of_the_week[today.getDay()]}, ${day} de ${months_year[today.getMonth()]} de ${year}. Bom dia!`
    }else if (hours >= 12 && hours < 18) {
        time.innerHTML = `${days_of_the_week[today.getDay()]}, ${day} de ${months_year[today.getMonth()]} de ${year}. Boa tarde!`
    }else{
        time.innerHTML = `${days_of_the_week[today.getDay()]}, ${day} de ${months_year[today.getMonth()]} de ${year}. Boa noite!`
    }
}
body.onload = setDateHours