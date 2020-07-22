function onClickIngredients() {
    const btnIngredients = document.getElementById('btn-ingredients')
    const ingredients = document.getElementById('ingredients')

    if (btnIngredients.innerHTML == 'Esconder') {
        btnIngredients.innerHTML = 'Mostrar'
        ingredients.style.display = "none"
    } else {
        btnIngredients.innerHTML = 'Esconder'
        ingredients.style.display = "initial"
    }
}

function onClickPreparation() {
    const btnPreparation = document.getElementById('btn-preparation')
    const preparation = document.getElementById('preparation')

    if (btnPreparation.innerHTML == 'Esconder') {
        btnPreparation.innerHTML = 'Mostrar'
        preparation.style.display = "none"
    } else {
        btnPreparation.innerHTML = 'Esconder'
        preparation.style.display = "initial"
    }
}

function onClickInformation() {
    const btnInformation = document.getElementById('btn-information')
    const information = document.getElementById('information')

    if (btnInformation.innerHTML == 'Esconder') {
        btnInformation.innerHTML = 'Mostrar'
        information.style.display = "none"
    } else {
        btnInformation.innerHTML = 'Esconder'
        information.style.display = "initial"
    }
}