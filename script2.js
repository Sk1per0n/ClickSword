document.addEventListener('DOMContentLoaded', function() {
    const up1Button = document.getElementById('up1');
    const up2Button = document.getElementById('up2');
    const up3Button = document.getElementById('up3');
    const up4Button = document.getElementById('up4');
    const up5Button = document.getElementById('up5');
    const up6Button = document.getElementById('up6');
    const up7Button = document.getElementById('up7');
    const up8Button = document.getElementById('up7');
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

 up3Button.addEventListener('click', function() {
        const cost = 500;
        
        if (currentValue >= cost) {
            currentValue -= cost; 
            clickPower += 5;
         
            localStorage.setItem('userCounter', currentValue);
            localStorage.setItem('clickPower', clickPower);
            
            
            shopCounter.textContent = currentValue;
            alert('успішна покупка! Тепер клік дає більше.');
        } else {
            alert('Недостатньо очок!');
        }
    });

 up4Button.addEventListener('click', function() {
        const cost = 1500;
        
        if (currentValue >= cost) {
            currentValue -= cost; 
            clickPower += 10;
         
            localStorage.setItem('userCounter', currentValue);
            localStorage.setItem('clickPower', clickPower);
            
            
            shopCounter.textContent = currentValue;
            alert('успішна покупка! Тепер клік дає більше.');
        } else {
            alert('Недостатньо очок!');
        }
    });

 up5Button.addEventListener('click', function() {
        const cost = 2000;
        
        if (currentValue >= cost) {
            currentValue -= cost; 
            clickPower += 15;
         
            localStorage.setItem('userCounter', currentValue);
            localStorage.setItem('clickPower', clickPower);
            
            
            shopCounter.textContent = currentValue;
            alert('успішна покупка! Тепер клік дає більше.');
        } else {
            alert('Недостатньо очок!');
        }
    });

 up6Button.addEventListener('click', function() {
        const cost = 3000;
        
        if (currentValue >= cost) {
            currentValue -= cost; 
            clickPower += 20;
         
            localStorage.setItem('userCounter', currentValue);
            localStorage.setItem('clickPower', clickPower);
            
            
            shopCounter.textContent = currentValue;
            alert('успішна покупка! Тепер клік дає більше.');
        } else {
            alert('Недостатньо очок!');
        }
    });

 up7Button.addEventListener('click', function() {
        const cost = 50000;
        
        if (currentValue >= cost) {
            currentValue -= cost; 
            clickPower += 50;
         
            localStorage.setItem('userCounter', currentValue);
            localStorage.setItem('clickPower', clickPower);
            
            
            shopCounter.textContent = currentValue;
            alert('успішна покупка! Тепер клік дає більше.');
        } else {
            alert('Недостатньо очок!');
        }
    });

 up8Button.addEventListener('click', function() {
        const cost = 150000;
        
        if (currentValue >= cost) {
            currentValue -= cost; 
            clickPower += 100;
         
            localStorage.setItem('userCounter', currentValue);
            localStorage.setItem('clickPower', clickPower);
            
            
            shopCounter.textContent = currentValue;
            alert('успішна покупка! Тепер клік дає більше.');
        } else {
            alert('Недостатньо очок!');
        }
    });
