document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('Button');
    const counterSpan = document.getElementById('counter');

    // Читаємо кількість очок з localStorage
    let currentValue = localStorage.getItem('userCounter') 
        ? parseInt(localStorage.getItem('userCounter')) 
        : 0;

    // Читаємо силу кліку (за замовчуванням 1)
    let clickPower = localStorage.getItem('clickPower') 
        ? parseInt(localStorage.getItem('clickPower')) 
        : 1;
    
    // Виводимо поточні очки на екран
    counterSpan.textContent = currentValue;

    // Обробка кліку по головній кнопці
    button.addEventListener('click', function() {
        // Додаємо до поточного значення силу кліку (а не просто 1)
        currentValue += clickPower;
        
        // Змінюємо текст на сторінці
        counterSpan.textContent = currentValue;
        
        // Зберігаємо оновлене число в пам'ять браузера
        localStorage.setItem('userCounter', currentValue);
    });
});

// Логіка темної теми залишається без змін
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-theme');
    if (toggleButton) toggleButton.textContent = '☀️ Світла тема';
}

if (toggleButton) {
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
}
