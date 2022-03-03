const txt = document.getElementById('txt');
const btn = document.getElementById('btn');
let count = 16;
btn.addEventListener('click', function() {
  count++;
  const fontsize = count+'px';
  console.log(fontsize);
  txt.style.fontSize = fontsize;
});