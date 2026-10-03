document.addEventListener('DOMContentLoaded', function() {
    const shopCounter = document.getElementById('shop-counter');

    let currentUser = localStorage.getItem('currentUser') || 'Гість';

    const counterKey = 'userCounter_' + currentUser;
    const powerKey = 'clickPower_' + currentUser;

    let currentValue = localStorage.getItem(counterKey) 
        ? parseInt(localStorage.getItem(counterKey)) 
        : 0;

    let clickPower = localStorage.getItem(powerKey) 
        ? parseInt(localStorage.getItem(powerKey)) 
        : 1;

    if (shopCounter) shopCounter.textContent = currentValue;

    // Функція для красивих спливаючих сповіщень
    function showToast(message) {
        const toast = document.getElementById('toast');
        if (!toast) return;

        toast.textContent = message;
        toast.classList.add('show');

        setTimeout(() => {
            toast.classList.remove('show');
        }, 1500);
    }

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
                
                localStorage.setItem(counterKey, currentValue);
                localStorage.setItem(powerKey, clickPower);
                localStorage.setItem(countKey, count);
                
                if (shopCounter) shopCounter.textContent = currentValue;
                updateDisplay();
                
                showToast('✨ Успішна покупка!');
            } else {
                showToast('❌ Недостатньо очок!');
            }
        });
    }

    setupUpgrade('up1', 50, 1);
    setupUpgrade('up2', 150, 2);
    setupUpgrade('up3', 400, 5);
    setupUpgrade('up4', 1000, 10);
    setupUpgrade('up5', 2500, 20);
    setupUpgrade('up6', 5000, 35);
    setupUpgrade('up7', 9000, 50);   
    setupUpgrade('up8', 15000, 75);  
});

// Автоматичне застосування темної теми в магазині
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
}
