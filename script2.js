document.addEventListener('DOMContentLoaded', function() {
    // Збираємо всі кнопки в об'єкт або масив для зручності
    const shopCounter = document.getElementById('shop-counter');

    let currentValue = localStorage.getItem('userCounter') 
        ? parseInt(localStorage.getItem('userCounter')) 
        : 0;

    let clickPower = localStorage.getItem('clickPower') 
        ? parseInt(localStorage.getItem('clickPower')) 
        : 1;

    shopCounter.textContent = currentValue;

    // Універсальна функція для покупки апгрейдів
    function setupUpgrade(buttonId, cost, powerIncrease) {
        const button = document.getElementById(buttonId);
        if (!button) return; // Якщо кнопка не знайдена, йдемо далі

        button.addEventListener('click', function() {
            if (currentValue >= cost) {
                currentValue -= cost; 
                clickPower += powerIncrease;      
                
                localStorage.setItem('userCounter', currentValue);
                localStorage.setItem('clickPower', clickPower);
                
                shopCounter.textContent = currentValue;
                alert('Успішна покупка! Тепер клік дає більше.');
            } else {
                alert('Недостатньо очок!');
            }
        });
    }

    // Підключаємо кожну кнопку з її ціною та приростом сили кліку
    setupUpgrade('up1', 100, 1);
    setupUpgrade('up2', 250, 2);
    setupUpgrade('up3', 500, 5);
    setupUpgrade('up4', 1500, 10);
    setupUpgrade('up5', 2000, 15);
    setupUpgrade('up6', 3000, 20);
    setupUpgrade('up7', 50000, 50);
    setupUpgrade('up8', 150000, 100);
});
