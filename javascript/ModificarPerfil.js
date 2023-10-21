
// funcion para activar la edicion del perfil
function activarEdit() {
    nameProfile.disabled = false;
    passwordProfile.disabled = false;
    emailProfile.disabled = false;
    phoneProfile.disabled = false;
    sedeProfile.disabled = false;
    carreraProfile.disabled = false;
    descripcionProfile.disabled = false;
    asoProfile.disabled = false;
    saveButton.disabled = false;
}

// Funcion para manejar el registro de estudiantes
function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/u;
    return regex.test(email);
}

// Funcion para manejar el registro de estudiantes
async function editPerfilListener(event) {

    displayMessage("Aviso", "Su perfil se ha modificado correctamente.");
}

function displayMessage(title, message) {
    const errorTitle = document.querySelector('.errorTitle');
    const errorContainer = document.querySelector('.errorContainer');
    errorContainer.style.opacity = 1;
    errorContainer.style.zIndex = 1;

    errorTitle.textContent = title;
    const errorText = document.querySelector('.errorText');
    errorText.textContent = message;
}

function displayError(error) {
    const errorTitle = document.querySelector('.errorTitle');
    const errorContainer = document.querySelector('.errorContainer');
    errorContainer.style.opacity = 1;
    errorContainer.style.zIndex = 1;

    errorTitle.textContent = "Alerta";
    const errorText = document.querySelector('.errorText');
    errorText.textContent = error;
}

function closeError() {
    const errorContainer = document.querySelector('.errorContainer');
    errorContainer.style.opacity = 0;
    errorContainer.style.zIndex = -1;
}

function deleteAccount() {
    const deleteContainer = document.querySelector('.deleteContainer');
    deleteContainer.style.opacity = 1;
    deleteContainer.style.zIndex = 1;
}

async function confirmDelete() {
    if (type === 0) {
        let username = (nameProfile.value || userInfo.username);
        let email = (emailProfile.value || userInfo.email);
        let phone = (phoneProfile.value || userInfo.phone);
        let carnet = userInfo.carnet;
        let sede = (sedeProfile.value || userInfo.sede);
        let password = (passwordProfile.value || userInfo.password);
        let carrera = (carreraProfile.value || userInfo.carrera);
        await set(ref(database, `users/${carnet}`), {
            carnet: carnet,
            username: username,
            password: password,
            email: email,
            phone: phone,
            sede: sede,
            carrera: carrera,
            enable: false
        });
    } else if (type === 1) {
        console.log(userInfo.username);
        await remove(ref(database, `asociaciones/${userInfo.username}`));
    } else {
        console.log(userInfo.username);
        await remove(ref(database, `colaboradores/${userInfo.username}`));
    }
    localStorage.clear();
    window.location.href = "../index.html";
}

function cancelDelete() {
    const deleteContainer = document.querySelector('.deleteContainer');
    deleteContainer.style.opacity = 0;
    deleteContainer.style.zIndex = -1;
}


const editButton = document.getElementById('editarProfileButton');
editButton.addEventListener('click', activarEdit);

// Attach an event listener to the form's submit event
const modificarPerfilForm = document.getElementById('modificarPerfilForm');
modificarPerfilForm.addEventListener('submit', editPerfilListener);

const errorButton = document.querySelector('.errorButton');
errorButton.addEventListener('click', closeError);

const eliminarProfileButton = document.getElementById('eliminarProfileButton');
eliminarProfileButton.addEventListener('click', deleteAccount);

const confirmDelButton = document.getElementById('confirmDelButton');
confirmDelButton.addEventListener('click', confirmDelete);

const cancelDelButton = document.getElementById('cancelDelButton');
cancelDelButton.addEventListener('click', cancelDelete);