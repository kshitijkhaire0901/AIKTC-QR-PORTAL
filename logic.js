const toggleBtn = document.getElementById('themeToggle');

toggleBtn.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  toggleBtn.textContent = newTheme === 'dark' ? '🌙 Dark Mode' : '☀️ Light Mode';
});
