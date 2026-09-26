document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('Button');
    const counterSpan = document.getElementById('counter');

    // 1. Читаємо збережене значення очок з localStorage. Якщо немає — 0.
    let currentValue = localStorage.getItem('userCounter') 
        ? parseInt(localStorage.getItem('userCounter')) 
        : 0;
    
    // Одразу виводимо очки на екран
    counterSpan.textContent = currentValue;

    // 2. Обробка кліку по головній кнопці
    button.addEventListener('click', function() {
        // ЗАВЖДИ знову зчитуємо актуальну силу кліку з localStorage, 
        // щоб гра знала, якщо ти щойно купив покращення в магазині!
        let currentClickPower = localStorage.getItem('clickPower') 
            ? parseInt(localStorage.getItem('clickPower')) 
            : 1;

        // Додаємо до очок силу кліку (а не просто 1)
        currentValue += currentClickPower;
        
        // Змінюємо текст на сторінці
        counterSpan.textContent = currentValue;
        
        // Зберігаємо оновлене число очок в пам'ять браузера
        localStorage.setItem('userCounter', currentValue);
    });
});

// Логіка темної теми
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
