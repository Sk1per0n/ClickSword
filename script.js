document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('Button');
    const counterSpan = document.getElementById('counter');
    const authContainer = document.getElementById('authContainer');
    const userPanel = document.getElementById('userPanel');
    const currentUserNameSpan = document.getElementById('currentUserName');
    const logoutBtn = document.getElementById('logoutBtn');
    const greeting = document.getElementById('greeting');

    // Перевіряємо, хто зараз увійшов в систему
    let currentUser = localStorage.getItem('currentUser');

    // Якщо ніхто не увійшов, створюємо/використовуємо гостьовий акаунт або вимагаємо вхід
    if (!currentUser) {
        currentUser = 'Гість';
    } else {
        authContainer.style.display = 'none';
        userPanel.style.display = 'flex';
        currentUserNameSpan.textContent = `Аккаунт: ${currentUser}`;
        greeting.textContent = `Привіт, ${currentUser}!`;
    }

    // Унікальні ключі для localStorage для конкретного гравця
    const counterKey = 'userCounter_' + currentUser;
    const powerKey = 'clickPower_' + currentUser;

    let currentValue = localStorage.getItem(counterKey) 
        ? parseInt(localStorage.getItem(counterKey)) 
        : 0;
    
    counterSpan.textContent = currentValue;

    // Клік по головній кнопці
    button.addEventListener('click', function() {
        let currentClickPower = localStorage.getItem(powerKey) 
            ? parseInt(localStorage.getItem(powerKey)) 
            : 1;

        currentValue += currentClickPower;
        counterSpan.textContent = currentValue;
        
        // Зберігаємо очки для цього гравця
        localStorage.setItem(counterKey, currentValue);

        // Оновлюємо загальний список для лідерборду
        updateLeaderboardData(currentUser, currentValue);
    });

    // Кнопка Виходу з аккаунта
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            localStorage.removeItem('currentUser');
            location.reload();
        });
    }
});

// Функція оновлення бази гравців для лідерборду
function updateLeaderboardData(username, score) {
    let users = JSON.parse(localStorage.getItem('gameUsers')) || {};
    users[username] = score;
    localStorage.setItem('gameUsers', JSON.stringify(users));
}

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
