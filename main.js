const converter = document.querySelector('#converter')
const result = document.querySelector('.result')
const convBtn = document.querySelector('.conv')
const resetBtn = document.querySelector('.reset')
const changeBtn = document.querySelector('.change')
const one = document.querySelector('.one')
const two = document.querySelector('.two')

let fahrenheit
let celsius

// T(°F) = T(°C) x 1.8 + 32
// T(°C) = (T(°F) - 32) / 1.8

// Cel funkcji: zamiana tekstu C na F i na odwrót
// 1. Sprawdz jaka wartosc przechowuje span.one
// 2. Na jej podstawie zmien tresc w span.one oraz span.two
// 3. Funkcja ma sie odpalac na klikniecie w przycisk 'zmien'

const swap = () => {
    if (one.textContent === '°C') {
        one.textContent = '°F'
        two.textContent = '°C'
        result.textContent = ''
    } else {
        one.textContent = '°C'
        two.textContent = '°F'
        result.textContent = ''
    }
}

// Cel funkcji: zmien °F na °C
// 1. Musimy podstawic odpowiednie wartosci pod wzór
// 2. Stopnie °C musimy pobierac z inputa.
// 3. Funkcja ma wypisywać wynik w paragrafie, który jest pobrany do zmiennej result, np "X°C to X°F"

const fahrToCel = () => {
    fahrenheit = converter.value * 1.8 + 32
    result.textContent = `${converter.value}°C to ${fahrenheit.toFixed(1)}°F`
    converter.value = ''
}

const celToFahr = () => {
    celsius = (converter.value - 32) / 1.8
    result.textContent = `${converter.value}°F to ${celsius.toFixed(1)}°C`
    converter.value = ''
}

const conversion = () => {
    if (conversion.value !== '') {
        if (one.textContent === '°C') {
            fahrToCel()
        } else {
            celToFahr()
        }
    } else {
        result.textContent = 'Musisz podac jakąś wartość'
    }
}

const reset = () => {
    converter.value = ''
    result.textContent = ''
}

changeBtn.addEventListener('click', swap)
convBtn.addEventListener('click', conversion)
resetBtn.addEventListener('click', reset)
//
sasadsd
/////
/////
asdasasasd
///asas
//asfasf/

/
//efqfqwf//feww//
/fqe/f/wef/wf
/fw/ef/d

/
//efqfqwf//feww//
/fqe/f/wef/wf
/fw/ef/d

/
//efqfqwf//feww//
/fqe/f/wef/wf
/fw/ef/d

/
//efqfqwf//feww//
/fqe/f/wef/wf
/fw/ef/d