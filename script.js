function register(ev) {
    console.log(ev)
    const sectionElement = ev.currentTarget.parentNode
    const username = sectionElement.children.username.value
    const password = sectionElement.children.password.value
    const passwordConfirmation = sectionElement.children.passwordConfirmation.value

    if(password === passwordConfirmation){
        console.log(`Usuario ${username} registrado`)
    } else {
        console.log('Usuarios não conferem')
    }
}

function removeEvent() {
    button.removeEventListener('click', register)
    console.log('Evento removido')
}


// Eventos
const button = document.getElementById('register-button')
button.addEventListener('click', register)

