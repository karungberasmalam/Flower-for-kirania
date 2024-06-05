document.addEventListener('DOMContentLoaded', () => {
    const greetingText = 'HALLO KIRANIA <3';  
    const descriptionText = 'This is flower for you!'; 
    const greetingElement = document.getElementById('greeting-text');
    const descriptionElement = document.getElementById('description-text');
    const nextButton = document.getElementById('nextButton');
    const greetings = document.getElementById('greetings');
    const flowerContainer = document.getElementById('flower-container');

    let index = 0;

    function typeWriter() {
        if (index < greetingText.length) {
            const span = document.createElement('span');
            span.textContent = greetingText.charAt(index);
            greetingElement.appendChild(span);
            span.classList.add('fade-in');
            index++;
            setTimeout(typeWriter, 150);
        } else {
            descriptionElement.textContent = descriptionText;
            descriptionElement.classList.add('fade-in');
        }
    }

    nextButton.addEventListener('click', () => {
        greetings.classList.add('hidden');
        flowerContainer.classList.remove('hidden');
    });

    typeWriter();
});

