const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

const getInputValue = ({ currentTarget }) =>
(nameOutput.innerText = currentTarget.value.trim()
    ? currentTarget.value.trim()
    : 'Anonymous');

nameInput.addEventListener('input', getInputValue);
