import '../dist/main.js';

window.addEventListener('load', () => {
    removeError();

    try {
        new App(document);
    } catch (err) {
        console.log(err);
        addError(err);
    }
});

function addError(errorText) {
    const errorDiv = document.getElementById('error');
    errorDiv.innerText = errorText;
    errorDiv.classList.add('active');
}

function removeError() {
    const errorDiv = document.getElementById('error');
    errorDiv.innerText = '';
    errorDiv.classList.remove('active');
}
