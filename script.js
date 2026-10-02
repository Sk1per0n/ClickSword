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
    } else {
        authContainer.style.display = 'none';
        userPanel.style.display = 'flex';
        currentUserNameSpan.textContent = `Аккаунт: ${currentUser}`;
        greeting.textContent = `Привіт, ${currentUser}!`;
    }

    const counterKey = 'userCounter_' + currentUser;       // Баланс для покупок
    const totalClicksKey = 'totalClicks_' + currentUser; // Загальна кількість для лідерборду
    const powerKey = 'clickPower_' + currentUser;

    // Поточні очки для магазину
    let currentValue = localStorage.getItem(counterKey) 
        ? parseInt(localStorage.getItem(counterKey)) 
        : 0;
    
    counterSpan.textContent = currentValue;

    // Клік по головній кнопці
    button.addEventListener('click', function() {
        let currentClickPower = localStorage.getItem(powerKey) 
            ? parseInt(localStorage.getItem(powerKey)) 
            : 1;

        // Збільшуємо баланс для покупок
        currentValue += currentClickPower;
        counterSpan.textContent = currentValue;
        localStorage.setItem(counterKey, currentValue);

        // Збільшуємо ЗАГАЛЬНУ кількість кліків (вона ніколи не зменшується!)
        let totalClicks = localStorage.getItem(totalClicksKey) 
            ? parseInt(localStorage.getItem(totalClicksKey)) 
            : 0;
        totalClicks += currentClickPower;
        localStorage.setItem(totalClicksKey, totalClicks);
    });

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
