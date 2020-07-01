const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener('click', function () {
        const index = card.getAttribute('id')
        window.location.href = `/recipes/${index}`
    })
}

function onClick1() {
    const btn1 = document.getElementById('btn1')
    const ingredients = document.getElementById('ingredients')

    if (btn1.innerHTML == 'Esconder') {
        btn1.innerHTML = 'Mostrar'
        ingredients.style.display = "none"
    } else {
        btn1.innerHTML = 'Esconder'
        ingredients.style.display = "initial"
    }
}

function onClick2() {
    const btn2 = document.getElementById('btn2')
    const preparation = document.getElementById('preparation')

    if (btn2.innerHTML == 'Esconder') {
        btn2.innerHTML = 'Mostrar'
        preparation.style.display = "none"
    } else {
        btn2.innerHTML = 'Esconder'
        preparation.style.display = "initial"
    }
}

function onClick3() {
    const btn3 = document.getElementById('btn3')
    const information = document.getElementById('information')

    if (btn3.innerHTML == 'Esconder') {
        btn3.innerHTML = 'Mostrar'
        information.style.display = "none"
    } else {
        btn3.innerHTML = 'Esconder'
        information.style.display = "initial"
    }
}