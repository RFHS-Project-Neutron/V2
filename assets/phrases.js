// phrases.js

function getRandomPhrase() {
    const phrases = [
        "Phrase 1",
        "Phrase 2",
        "Phrase 3"
    ];
    const randomIndex = Math.floor(Math.random() * phrases.length);
    return phrases[randomIndex];
}

document.addEventListener('DOMContentLoaded', function() {
    const randomTextElement = document.getElementById('randomText');
    randomTextElement.textContent = getRandomPhrase();
});
