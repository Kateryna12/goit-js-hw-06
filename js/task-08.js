const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password },
    } = event.currentTarget;

    if (email.value.trim() === '' || password.value.trim() === '') {
        return alert('Please fill in all the fields!');
    } else {
        const formData = new FormData(event.currentTarget);

        formData.forEach((value, name) => {
            console.log(`${name} ${value}`);
        });
    }
    event.currentTarget.reset();
}

