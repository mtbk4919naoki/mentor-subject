const txt = document.getElementById('txt');
btn.addEventListener('click', function() {
  const answer = window.prompt('猫の名前は？');
  txt.innerText = answer;
});
