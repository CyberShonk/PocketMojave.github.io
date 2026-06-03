document.querySelectorAll('pre').forEach((pre) => {
  const btn = document.createElement('button');
  btn.className = 'copy-btn';
  btn.type = 'button';
  btn.textContent = 'Copy';
  btn.addEventListener('click', async () => {
    const text = pre.innerText.replace(/^Copy\n/, '');
    try {
      await navigator.clipboard.writeText(text);
      btn.textContent = 'Copied';
      setTimeout(() => btn.textContent = 'Copy', 1200);
    } catch (e) {
      btn.textContent = 'Select text';
      setTimeout(() => btn.textContent = 'Copy', 1600);
    }
  });
  pre.appendChild(btn);
});
