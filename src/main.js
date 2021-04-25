const placeh = document.getElementById('inputWindow')
const button1 = document.getElementById('number1')
const button2 = document.getElementById('number2')
const button3 = document.getElementById('number3')
const button4 = document.getElementById('number4')
const button5 = document.getElementById('number5')
const button6 = document.getElementById('number6')
const button7 = document.getElementById('number7')
const button8 = document.getElementById('number8')
const button9 = document.getElementById('number9')
const button0 = document.getElementById('number0')
const point = document.getElementById('point')

/* 
---------------BOTONES DE OPERACIONES */

const sum = document.getElementById('buttonSum')
const rest = document.getElementById('buttonRest')
const multiplication = document.getElementById('buttonMulti')
const division = document.getElementById('buttonDivi')
const resultado = document.getElementById('buttonResult')
const clean = document.getElementById('clear')

function cleanImput() {
    placeh.value = ""
}

function ModifyPlaceHolder() {
    let num = document.calculator.numero1.value
    placeh.value += num

}

function ModifyPlaceHolder2() {
    let num = document.calculator.numero2.value
    placeh.value += num
}

function ModifyPlaceHolder3() {
    let num = document.calculator.numero3.value
    placeh.value += num
}

function ModifyPlaceHolder4() {
    let num = document.calculator.numero4.value
    placeh.value += num
}

function ModifyPlaceHolder5() {
    let num = document.calculator.numero5.value
    placeh.value += num
}

function ModifyPlaceHolder6() {
    let num = document.calculator.numero6.value
    placeh.value += num
}

function ModifyPlaceHolder7() {
    let num = document.calculator.numero7.value
    placeh.value += num
}

function ModifyPlaceHolder8() {
    let num = document.calculator.numero8.value
    placeh.value += num
}

function ModifyPlaceHolder9() {
    let num = document.calculator.numero9.value
    placeh.value += num
}

function ModifyPlaceHolder0() {
    let num = document.calculator.numero0.value
    placeh.value += num
}


function ModifyPlaceHolderPunt() {
    let num = document.calculator.point.value
    placeh.value += num
}

function suma() {
    valor1 = Number(placeh.value)
    cleanImput()
    operacion = 'suma'
}

function resta() {
    valor1 = Number(placeh.value)
    cleanImput()
    operacion = 'resta'
}

function multiplicacion() {
    valor1 = Number(placeh.value)
    cleanImput()
    operacion = 'multiplicacion'
}

function divition() {
    valor1 = Number(placeh.value)
    cleanImput()
    operacion = 'division'
}

function resultant() {
    valor2 = Number(placeh.value)
    if (operacion === 'suma') {
        const opResult = valor1 + valor2
        placeh.value = opResult
    } else if (operacion === 'resta') {
        const opResult = valor1 - valor2
        placeh.value = opResult
    } else if (operacion === 'multiplicacion') {
        const opResult = valor1 * valor2
        placeh.value = opResult
    } else if (operacion === 'division') {
        const opResult = valor1 / valor2
        placeh.value = opResult
    } else {
        const error = new error(place.value = 'Cagaste');
    }
}



/* 
---------------BOTONES DE OPERACIONES  */

sum.addEventListener("click", suma)
rest.addEventListener("click", resta)
multiplication.addEventListener("click", multiplicacion)
division.addEventListener("click", divition)
clean.addEventListener("click", cleanImput)
resultado.addEventListener("click", resultant)



/* 
---------------BOTONES DE TECLADO  */

button1.addEventListener("click", ModifyPlaceHolder)
button2.addEventListener("click", ModifyPlaceHolder2)
button3.addEventListener("click", ModifyPlaceHolder3)
button4.addEventListener("click", ModifyPlaceHolder4)
button5.addEventListener("click", ModifyPlaceHolder5)
button6.addEventListener("click", ModifyPlaceHolder6)
button7.addEventListener("click", ModifyPlaceHolder7)
button8.addEventListener("click", ModifyPlaceHolder8)
button9.addEventListener("click", ModifyPlaceHolder9)
button0.addEventListener("click", ModifyPlaceHolder0)
point.addEventListener("click", ModifyPlaceHolderPunt)