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

    // ЗАБОРОНА КЛІКІВ З КЛАВІАТУРИ (тільки мишка)
    if (button) {
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
        });
    }

    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            localStorage.removeItem('currentUser');
            location.reload();
        });
    }
});
