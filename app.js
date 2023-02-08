var messages = ['I Love You 💞💞', 'Meri babbbuuuu 🫣🫣', 'Meri Shooonnnnaaa 🥰🥰🥰'];
var images = ['bg1.jpg', 'bg2.jpg', 'bg3.jpg'];
var loveImages = ['love1.png', 'love2.png', 'love3.png'];
var messageIndex = -1;
document.getElementById("toggleButton").addEventListener("click", function() {
  messageIndex++;
  if (messageIndex >= messages.length) {
    messageIndex = 0;
  }
  document.getElementById("message").innerHTML = messages[messageIndex];
  document.body.style.backgroundImage = `url('${images[messageIndex]}')`;
  document.getElementById("loveImage").src = `${loveImages[messageIndex]}`;
});
