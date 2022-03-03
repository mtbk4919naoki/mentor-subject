const btn = document.getElementById('btn');
btn.addEventListener('click', function() {
  const answer = window.confirm('元気ですか？');
  console.log(answer);
});