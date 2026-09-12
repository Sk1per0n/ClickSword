const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Перевіряємо, чи була збережена тема в пам'яті браузера при завантаженні
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-theme');
    toggleButton.textContent = '☀️ Світла тема';
}

// Слухаємо клік по кнопці
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-theme');

    // Змінюємо текст кнопки та зберігаємо вибір
    if (body.classList.contains('dark-theme')) {
        toggleButton.textContent = '☀️ Світла тема';
        localStorage.setItem('theme', 'dark');
    } else {
        toggleButton.textContent = '🌙 Темна тема';
        localStorage.setItem('theme', 'light');
    }
});
