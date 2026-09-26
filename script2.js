document.addEventListener('DOMContentLoaded', function() {
    const shopCounter = document.getElementById('shop-counter');

    let currentValue = localStorage.getItem('userCounter') 
        ? parseInt(localStorage.getItem('userCounter')) 
        : 0;

    let clickPower = localStorage.getItem('clickPower') 
        ? parseInt(localStorage.getItem('clickPower')) 
        : 1;

    shopCounter.textContent = currentValue;

    function setupUpgrade(buttonId, baseCost, powerIncrease, costMultiplier = 1.15) {
        const button = document.getElementById(buttonId);
        if (!button) return;

        // Знаходимо елементи ціни та лічильника всередині конкретної кнопки
        const costSpan = button.querySelector('.cost');
        const countSpan = button.querySelector('.count');

        let count = localStorage.getItem(buttonId + '_count') 
            ? parseInt(localStorage.getItem(buttonId + '_count')) 
            : 0;

        function getCurrentCost() {
            return Math.floor(baseCost * Math.pow(costMultiplier, count));
        }

        // Оновлюємо значення лише у відповідних span-тегах
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
                
                localStorage.setItem('userCounter', currentValue);
                localStorage.setItem('clickPower', clickPower);
                localStorage.setItem(buttonId + '_count', count);
                
                shopCounter.textContent = currentValue;
                updateDisplay();
                
                alert('Успішна покупка! Тепер клік дає більше.');
            } else {
                alert('Недостатньо очок!');
            }
        });
    }

    // Підключаємо апгрейди
    setupUpgrade('up1', 100, 1, 1.30);
    setupUpgrade('up2', 250, 2, 1.30);
    setupUpgrade('up3', 500, 5, 1.30);
    setupUpgrade('up4', 1500, 10, 1.30);
    setupUpgrade('up5', 2000, 15, 1.30);
    setupUpgrade('up6', 3000, 20, 1.30);
    setupUpgrade('up7', 50000, 50, 1.30);
    setupUpgrade('up8', 150000, 100, 1.30);
});
