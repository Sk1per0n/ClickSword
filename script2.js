document.addEventListener('DOMContentLoaded', function() {
    const up1Button = document.getElementById('up1');
    const up2Button = document.getElementById('up2');
    const shopCounter = document.getElementById('shop-counter');

    
    let currentValue = localStorage.getItem('userCounter') 
        ? parseInt(localStorage.getItem('userCounter')) 
        : 0;

    let clickPower = localStorage.getItem('clickPower') 
        ? parseInt(localStorage.getItem('clickPower')) 
        : 1;

  
    shopCounter.textContent = currentValue;

    
    up1Button.addEventListener('click', function() {
        const cost = 100;
        
        if (currentValue >= cost) {
            currentValue -= cost; // Віднімаємо ціну
            clickPower += 1;      // Збільшуємо силу кліку на 1
            
         
            localStorage.setItem('userCounter', currentValue);
            localStorage.setItem('clickPower', clickPower);
            
            
            shopCounter.textContent = currentValue;
            alert('успішна покупка! Тепер клік дає більше.');
        } else {
            alert('Недостатньо очок!');
        }
    });

    
    up2Button.addEventListener('click', function() {
        const cost = 250;
        
        if (currentValue >= cost) {
            currentValue -= cost; // Віднімаємо ціну
            clickPower += 2;      // Збільшуємо силу кліку на 2
            
            
            localStorage.setItem('userCounter', currentValue);
            localStorage.setItem('clickPower', clickPower);
            
         
            shopCounter.textContent = currentValue;
            alert('успішна покупка!');
        } else {
            alert('Недостатньо очок!');
        }
    });
});
