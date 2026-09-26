document.addEventListener('DOMContentLoaded', function() {
    const up1Button = document.getElementById('up1');
    const up2Button = document.getElementById('up2');
    const shopCounter = document.getElementById('shop-counter');

    // Отримуємо поточні дані з localStorage
    let currentValue = localStorage.getItem('userCounter') 
        ? parseInt(localStorage.getItem('userCounter')) 
        : 0;

    let clickPower = localStorage.getItem('clickPower') 
        ? parseInt(localStorage.getItem('clickPower')) 
        : 1;

    // Показуємо баланс
    shopCounter.textContent = currentValue;

    // Покупка першого покращення (+1 до кліку, ціна 10)
    up1Button.addEventListener('click', function() {
        const cost = 10;
        
        if (currentValue >= cost) {
            currentValue -= cost; // Віднімаємо ціну
            clickPower += 1;      // Збільшуємо силу кліку на 1
            
            // Зберігаємо нові дані
            localStorage.setItem('userCounter', currentValue);
            localStorage.setItem('clickPower', clickPower);
            
            // Оновлюємо відображення очок
            shopCounter.textContent = currentValue;
            alert('успішна покупка! Тепер клік дає більше.');
        } else {
            alert('Недостатньо очок!');
        }
    });

    // Покупка другого покращення (+2 до кліку, ціна 25)
    up2Button.addEventListener('click', function() {
        const cost = 25;
        
        if (currentValue >= cost) {
            currentValue -= cost; // Віднімаємо ціну
            clickPower += 2;      // Збільшуємо силу кліку на 2
            
            // Зберігаємо нові дані
            localStorage.setItem('userCounter', currentValue);
            localStorage.setItem('clickPower', clickPower);
            
            // Оновлюємо відображення очок
            shopCounter.textContent = currentValue;
            alert('успішна покупка!');
        } else {
            alert('Недостатньо очок!');
        }
    });
});
