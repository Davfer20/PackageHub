

// Funcion para manejar el registro de estudiantes
function loginEstudianteListener(event) {
    event.preventDefault(); // Prevent the default form submission
    console.log("Submitted")
    window.location.href = "mainPageC.html";
}

// Attach an event listener to the form's submit event
const estudianteForm = document.getElementById('loginEstudianteForm');
console.log(estudianteForm);
estudianteForm.addEventListener('submit', loginEstudianteListener);
