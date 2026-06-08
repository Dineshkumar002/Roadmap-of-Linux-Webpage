// Terminal rain effect
const rain = document.getElementById('rain');
if (rain) {
  const chars = '$ ls -la grep cat chmod sudo ping curl bash#!/usr/bin/env'.split('');
  let html = '';
  for (let i = 0; i < 120; i++) {
    const x = Math.random() * 100;
    const delay = Math.random() * 8;
    const dur = 4 + Math.random() * 6;
    const char = chars[Math.floor(Math.random() * chars.length)];
    html += `<span style="position:absolute;left:${x}%;top:-20px;animation:fall ${dur}s ${delay}s linear infinite">${char}</span>`;
  }
  rain.innerHTML = html;

  const style = document.createElement('style');
  style.textContent = `@keyframes fall { to { top: 110%; } }`;
  document.head.appendChild(style);
}

// Typed effect for hero terminal
const cmdEl = document.querySelector('.cmd.typed');
if (cmdEl) {
  const text = cmdEl.textContent;
  cmdEl.textContent = '';
  let i = 0;
  setTimeout(() => {
    const iv = setInterval(() => {
      cmdEl.textContent += text[i++];
      if (i >= text.length) clearInterval(iv);
    }, 60);
  }, 800);
}

// Smooth active states for chapter cards
document.querySelectorAll('.chapter-card').forEach(card => {
  card.addEventListener('mouseenter', () => card.style.willChange = 'transform');
  card.addEventListener('mouseleave', () => card.style.willChange = '');
});
