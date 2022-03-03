let count = 0;
const btn = document.getElementById('btn');
btn.addEventListener('click', function() {
  count++;
  console.log(count+'回目');
});