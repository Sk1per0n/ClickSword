document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('Button');
    const counterSpan = document.getElementById('counter');

    // 1. Читаємо збережене значення з localStorage. Якщо його немає — беремо 0.
    let currentValue = localStorage.getItem('userCounter') 
        ? parseInt(localStorage.getItem('userCounter')) 
        : 0;
    
    // Одразу виводимо це значення на екран при завантаженні
    counterSpan.textContent = currentValue;

    // 2. Обробка кліку
    button.addEventListener('click', function() {
        currentValue++;
        
        // Змінюємо текст на сторінці
        counterSpan.textContent = currentValue;
        
        // Зберігаємо оновлене число в пам'ять браузера
        localStorage.setItem('userCounter', currentValue);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    // 1. Проверяем сохраненную тему при загрузке страницы
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-theme');
        if (toggleButton) {
            toggleButton.textContent = '☀️ Світла тема';
        }
    }

    // 2. Если кнопки нет на этой конкретной странице — просто завершаем работу
    if (!toggleButton) return;

    // 3. Слушаем клик по кнопке (если она есть на странице)
    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-theme');

        if (body.classList.contains('dark-theme')) {
            toggleButton.textContent = '☀️ Світла тема';
            localStorage.setItem('theme', 'dark');
        } else {
            toggleButton.textContent = '🌙 Темна тема';
            localStorage.setItem('theme', 'light');
        }
    });
});
