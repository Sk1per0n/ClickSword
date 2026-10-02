document.addEventListener('DOMContentLoaded', function() {
    const shopCounter = document.getElementById('shop-counter');

    // Визначаємо поточного гравця
    let currentUser = localStorage.getItem('currentUser') || 'Гість';

    const counterKey = 'userCounter_' + currentUser;
    const powerKey = 'clickPower_' + currentUser;

    let currentValue = localStorage.getItem(counterKey) 
        ? parseInt(localStorage.getItem(counterKey)) 
        : 0;

    let clickPower = localStorage.getItem(powerKey) 
        ? parseInt(localStorage.getItem(powerKey)) 
        : 1;

    shopCounter.textContent = currentValue;

    function setupUpgrade(buttonId, baseCost, powerIncrease, costMultiplier = 1.30) {
        const button = document.getElementById(buttonId);
        if (!button) return;

        const costSpan = button.querySelector('.cost');
        const countSpan = button.querySelector('.count');

        const countKey = buttonId + '_count_' + currentUser;
        let count = localStorage.getItem(countKey) 
            ? parseInt(localStorage.getItem(countKey)) 
            : 0;

        function getCurrentCost() {
            return Math.floor(baseCost * Math.pow(costMultiplier, count));
        }

        function updateDisplay() {
            if (costSpan) costSpan.textContent = getCurrentCost();
            if (countSpan) countSpan.textContent = count;
        }

        updateDisplay();

        button.addEventListener('click', function() {
            let currentCost = getCurrentCost();

            if (currentValue >= currentCost) {
                currentValue -= currentCost; 
                clickPower += powerIncrease;
                count++;
                
                // Зберігаємо персональні дані для цього аккаунта
                localStorage.setItem(counterKey, currentValue);
                localStorage.setItem(powerKey, clickPower);
                localStorage.setItem(countKey, count);
                
                // Також оновлюємо глобальну таблицю лідерів
                let users = JSON.parse(localStorage.getItem('gameUsers')) || {};
                users[currentUser] = currentValue;
                localStorage.setItem('gameUsers', JSON.stringify(users));

                shopCounter.textContent = currentValue;
                updateDisplay();
                
                alert('Успішна покупка!');
            } else {
                alert('Недостатньо очок!');
            }
        });
    }

    setupUpgrade('up1', 100, 1);
    setupUpgrade('up2', 250, 2);
    setupUpgrade('up3', 500, 5);
    setupUpgrade('up4', 1500, 10);
    setupUpgrade('up5', 2000, 15);
    setupUpgrade('up6', 3000, 20);
    setupUpgrade('up7', 50000, 50);
    setupUpgrade('up8', 150000, 100);
});
