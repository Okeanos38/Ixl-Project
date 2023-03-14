function speak() {
    var text = document.getElementById("speechTitle").textContent;
    var msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
}