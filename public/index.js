import '../dist/main.js';

let app = window.addEventListener('load', async () => {
    removeError();
    setMenu(App.getSceneTypes());
    await startApp();
});

function setMenu(items) {
    const select = document.createElement('select');

    for (const itemName of items) {
        const option = document.createElement('option');
        option.setAttribute('value', itemName);
        option.innerText = itemName;

        select.appendChild(option);
    }

    select.addEventListener('change', async e => {
        const newScene = e.target.value;
        console.log(`changing scene to ${newScene}`);
        await startApp(newScene);
    });

    document.getElementById('container').appendChild(select);
}

async function startApp(sceneType = 'cube') {
    removeError();

    const canvasElements = document.getElementsByTagName('canvas');
    for (const element of canvasElements) {
        element.remove();
    }

    try {
        console.log(`creating app of type ${sceneType}`);
        app = await new App(document).run(sceneType);
    } catch (error) {
        console.log(error);
        addError(error);
    }
}

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
