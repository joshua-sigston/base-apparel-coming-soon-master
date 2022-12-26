const container = document.getElementById('input-container')
const email = document.getElementById('email')
const errorMessage = document.createElement('p')
const btn = document.getElementById('btn')

const regexEmail = /^([a-z A-Z 0-9 \. _]+)@([a-z A-Z]+).([a-z A-Z]{2,6})(.[a-z]{2,6})?$/
errorMessage.textContent = 'please provide a valid email'

const validate = (e) => {
    e.preventDefault()
    if (!regexEmail.test(email.value) || email.value === '') {
        email.classList.add('icon')
        email.classList.add('border_red')
        errorMessage.classList.add('error_msg')
        container.appendChild(errorMessage)
        return false
    } else {
        window.location.reload()
        return true
    }
}

btn.addEventListener('click', validate)


