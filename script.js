document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('Button');
    const counterSpan = document.getElementById('counter');
    const authContainer = document.getElementById('authContainer');
    const userPanel = document.getElementById('userPanel');
    const currentUserNameSpan = document.getElementById('currentUserName');
    const logoutBtn = document.getElementById('logoutBtn');
    const greeting = document.getElementById('greeting');

    let currentUser = localStorage.getItem('currentUser');

    if (!currentUser) {
        currentUser = 'Гість';
        if (authContainer) authContainer.style.display = 'flex';
        if (userPanel) userPanel.style.display = 'none';
    } else {
        if (authContainer) authContainer.style.display = 'none';
        if (userPanel) userPanel.style.display = 'flex';
        if (currentUserNameSpan) currentUserNameSpan.textContent = `Аккаунт: ${currentUser}`;
        if (greeting) greeting.textContent = `Привіт, ${currentUser}!`;
    }

    const counterKey = 'userCounter_' + currentUser;       
    const totalClicksKey = 'totalClicks_' + currentUser; 
    const powerKey = 'clickPower_' + currentUser;

    let currentValue = localStorage.getItem(counterKey) 
        ? parseInt(localStorage.getItem(counterKey)) 
        : 0;
    
    if (counterSpan) counterSpan.textContent = currentValue;

    if (button) {
        // Повністю забороняємо спрацьовування кнопки від клавіатури
        button.addEventListener('keydown', function(event) {
            if (event.code === 'Space' || event.code === 'Enter') {
                event.preventDefault();
            }
        });

        // Клік по головній кнопці (тільки мишкою)
        button.addEventListener('click', function() {
            let currentClickPower = localStorage.getItem(powerKey) 
                ? parseInt(localStorage.getItem(powerKey)) 
                : 1;

            currentValue += currentClickPower;
            if (counterSpan) counterSpan.textContent = currentValue;
            localStorage.setItem(counterKey, currentValue);

            let totalClicks = localStorage.getItem(totalClicksKey) 
                ? parseInt(localStorage.getItem(totalClicksKey)) 
                : 0;
            totalClicks += currentClickPower;
            localStorage.setItem(totalClicksKey, totalClicks);

            // Знімаємо фокус, щоб пробіл та Enter не активували кнопку знову
            button.blur();
        });
    }

    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            localStorage.removeItem('currentUser');
            location.reload();
        });
    }
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

async function updateCloudScore(username, newScore) {
    const BIN_ID = '6ac0c050ac6210605a0ee2a3';
    const API_KEY = '$2a$10$.4uggn6AMRp8c0UYkvUTM.OhfSsg0iRZckZJ9CeiJLH57c7eNyKnu';

    try {
        // 1. Спочатку завантажуємо поточну хмарну базу
        const getRes = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
            headers: { 'X-Master-Key': API_KEY }
        });
        const getData = await getRes.json();
        let players = getData.record.players || {};

        // 2. Оновлюємо або додаємо гравця (зберігаємо максимальний результат)
        if (!players[username] || newScore > players[username]) {
            players[username] = newScore;

            // 3. Відправляємо оновлений об'єкт назад у хмару
            await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Master-Key': API_KEY
                },
                body: JSON.stringify({ players: players })
            });
        }
    } catch (e) {
        console.error("Не вдалося оновити результат у хмарі", e);
    }
}
