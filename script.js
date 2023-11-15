

// Create a new SpeechSynthesisUtterance object
let speech = new SpeechSynthesisUtterance();

// Create an array to store available voices
let voices = [];

// Select element for choosing voices
let voiceSelect = document.querySelector("select");

// Event handler for when voices change
window.speechSynthesis.onvoiceschanged = () => {
    // Get the available voices
    voices = window.speechSynthesis.getVoices();

    // Set the default voice for the SpeechSynthesisUtterance
    speech.voice = voices[0];

    // Populate the voice selection dropdown with available voices
    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
};






// Attach an event listener to a button click
document.querySelector("button").addEventListener("click", () => {
    // Set the text property of the SpeechSynthesisUtterance to the value of a textarea
    speech.text = document.querySelector("textarea").value;

    // Use the SpeechSynthesis API to speak the utterance
    window.speechSynthesis.speak(speech);
});
