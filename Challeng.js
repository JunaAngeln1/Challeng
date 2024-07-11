

// Función para validar la contraseña al presionar el botón
function validatePassword() {
    const passwordInput = document.getElementById('password-input').value;

    if (passwordInput === "123456") {
        // Contraseña correcta, permitir el uso del programa
        document.getElementById('password-modal').style.display = 'none'; // Ocultar modal de contraseña
        initProgram(); // Iniciar el programa
    } else {
        // Contraseña incorrecta, mostrar mensaje de error
        alert("Contraseña incorrecta. Inténtalo de nuevo.");
    }
}

// Función para inicializar el programa una vez que la contraseña es correcta
function initProgram() {
    const messageInput = document.getElementById('message-input');
    const resultDiv = document.getElementById('result');
    const encryptButton = document.getElementById('encrypt-button');
    const decryptButton = document.getElementById('decrypt-button');
    const copyButton = document.getElementById('copy-button');


    // Función para encriptar un mensaje según las reglas dadas
    function encryptMessage(message) {
        return message.replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');
    }

    // Función para desencriptar un mensaje según las reglas dadas
    function decryptMessage(message) {
        return message.replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');
    }

    // Función para mostrar el resultado en la página
    function displayResult(result) {
        resultDiv.textContent = result;
    }


    /*  // Event listeners para los botones de encriptar, desencriptar y copiar
     encryptButton.addEventListener('click', function() {
         const message = messageInput.value.toLowerCase(); // Convertir a minúsculas
         const encryptedMessage = encryptMessage(message);
         displayResult(encryptedMessage);
     });
 
     decryptButton.addEventListener('click', function() {
         const message = messageInput.value.toLowerCase(); // Convertir a minúsculas
         const decryptedMessage = decryptMessage(message);
         displayResult(decryptedMessage);
     }); */

    function showLoadingAnimation() {
        const loadingAnimation = document.createElement('div');
        loadingAnimation.id = 'loading-animation';

        const hourglass = document.createElement('img');
        hourglass.src = 'icons8-hourglass-32.png'; // Asegúrate de usar la ruta correcta
        hourglass.alt = 'Reloj de arena';
        hourglass.style.width = '30px'; // Ajusta el tamaño según necesites

        const loadingText = document.createElement('div');
        loadingText.id = 'loading-text';

        // Animación de puntos en el texto "Codificando..."
        let dots = 0;
        const textInterval = setInterval(() => {
            loadingText.textContent = `Codificando${'.'.repeat(dots % 4)}`;
            dots++;
        }, 500);

        loadingAnimation.appendChild(hourglass);
        loadingAnimation.appendChild(loadingText);
        resultDiv.innerHTML = '';
        resultDiv.appendChild(loadingAnimation);

        // Esperar 3 segundos antes de mostrar el resultado
        setTimeout(() => {
            clearInterval(textInterval);
            resultDiv.innerHTML = ''; // Limpia la animación
        }, 3000);
    }

    // Modificación en el event listener de encriptar
    encryptButton.addEventListener('click', function () {
        const message = messageInput.value.toLowerCase(); // Convertir a minúsculas
        showLoadingAnimation();
        setTimeout(() => {
            const encryptedMessage = encryptMessage(message);
            displayResult(encryptedMessage);
        }, 3000); // Mostrar el resultado después de 3 segundos
    });

    // Modificación en el event listener de desencriptar
    decryptButton.addEventListener('click', function () {
        const message = messageInput.value.toLowerCase(); // Convertir a minúsculas
        showLoadingAnimation();
        setTimeout(() => {
            const decryptedMessage = decryptMessage(message);
            displayResult(decryptedMessage);
        }, 3000); // Mostrar el resultado después de 3 segundos
    });


    copyButton.addEventListener('click', function () {
        const range = document.createRange();
        range.selectNode(resultDiv);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
    });
}

// Event listener para el botón de validación de contraseña
document.getElementById('password-submit').addEventListener('click', function (event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario
    validatePassword();
});
