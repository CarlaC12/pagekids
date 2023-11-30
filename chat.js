document.addEventListener('DOMContentLoaded', function () {
    const chatHeader = document.getElementById('chat-header');
    const chatMessages = document.getElementById('chat-messages');
    const userMessageInput = document.getElementById('user-message');
    const sendButton = document.getElementById('send-button');

    sendButton.addEventListener('click', sendMessage);

    // Array de respuestas del chatbot
    const botResponses = {
        'hola': '¡Hola! ¿En qué puedo ayudarte?',
        'saludo': '¡Hola! ¿En qué puedo ayudarte?',
        'como estas': 'Muy bien,Gracias! Como podria ayudarte?',
        'producto': 'El softawre es un producto que esta altamente calificado en ayudar a la evaluación de la psicomotricidad de niños',
        'software': 'El softawre es un producto que esta altamente calificado en ayudar a la evaluación de la psicomotricidad de niños',
        'informacion': 'Si tienes mas dudas puedes contactar a traves de un sms en email',
        'precio': 'El precio de nuestro software varia segun los planes.',
        'caracteristicas': 'Nuestro software cuenta con características avanzadas como en Evaluación de psicomotricidad',
        'comprar': 'Puedes adquirir nuestros planes',
        'servicios': 'Acerca de nuestros Servicios estan descriptos en la plataforma',
        'gracias': 'Gracias por contactarnos. ¡Que tengas un buen día!'
    };

    function sendMessage() {
        const userMessage = userMessageInput.value;

        if (userMessage.trim() === '') {
            return; // Evitar mensajes vacíos
        }

        appendMessage('user', userMessage);
        userMessageInput.value = ''; // Limpiar el cuadro de entrada

        // Simular respuesta del chatbot (puedes personalizar esta lógica)
        const botMessage = getBotResponse(userMessage);
        appendMessage('bot', botMessage);
    }

    function appendMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
        messageElement.textContent = `${sender === 'user' ? 'You' : 'ChatBot'}: ${message}`;
        chatMessages.appendChild(messageElement);

        // Desplazar el contenedor hacia abajo para mostrar el último mensaje
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }


    function getBotResponse(userMessage) {
        // Convertir el mensaje del usuario a minúsculas para hacer coincidencias no sensibles a mayúsculas y minúsculas
        const lowerCaseUserMessage = userMessage.toLowerCase();

        // Buscar respuestas en el array de respuestas del chatbot
        for (const keyword in botResponses) {
            if (lowerCaseUserMessage.includes(keyword)) {
                return botResponses[keyword];
            }
        }
        // Respuesta por defecto si no se encuentra ninguna coincidencia
        return 'Lo siento, no entiendo. ¿Puedes ser más específico?';
    }
});
