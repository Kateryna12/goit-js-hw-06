const textInput = document.querySelector('#validation-input');
console.log(textInput.placeholder);

const validLength = parseInt(textInput.getAttribute("data-length"))
console.log(validLength);

textInput.addEventListener('blur', (event) => {
    if (event.currentTarget.value.length === validLength) {
        event.currentTarget.classList.add('valid')
        event.currentTarget.classList.remove('invalid')
    }
    else {
        event.currentTarget.classList.add('invalid')
        event.currentTarget.classList.remove('valid')
    }
});
