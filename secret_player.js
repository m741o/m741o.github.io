const thoughts = 'misanthropy';
let inputBuffer = [];

const audio = document.getElementById('secret-audio');

document.addEventListener('keydown', function(e) {
  if (e.key.length !== 1) return;

  inputBuffer.push(e.key.toLowerCase());
  if (inputBuffer.length > thoughts.length) {
    inputBuffer.shift();
  }

  if (inputBuffer.join('') === thoughts) {
    audio.currentTime = 0;
    audio.play();
    inputBuffer = [];
  }
});
