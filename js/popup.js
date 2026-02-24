let popupBg = document.querySelector('.login-popup');
let openPopupButtons = document.querySelectorAll('.open-popup'); 

openPopupButtons.forEach((button) => { 
    button.addEventListener('click', (e) => { 
        e.preventDefault(); 
        popupBg.classList.add('open'); 
    })
});

document.addEventListener('click', (e) => {
    if(e.target === popupBg) {
        popupBg.classList.remove('open');
    }
});
let moneyBg = document.querySelector('.money-popup');
let openmoneyButtons = document.querySelectorAll('.money-open'); 

openmoneyButtons.forEach((button) => { 
    button.addEventListener('click', (e) => { 
        e.preventDefault(); 
        moneyBg.classList.add('open'); 
    })
});

document.addEventListener('click', (e) => {
    if(e.target === moneyBg) {
        moneyBg.classList.remove('open');
    }
});
let doneBg = document.querySelector('.money-done');
let opendoneButtons = document.querySelectorAll('.done-open');
let buttonmoney = document.querySelector('.done-open')

opendoneButtons.forEach((button) => { 
    button.addEventListener('click', (e) => { 
        e.preventDefault(); 
        doneBg.classList.add('open'); 
    })
});
document.addEventListener('click', (e) => {
    if(e.target === doneBg) {
        doneBg.classList.remove('open');
    }
    
});
document.getElementById('hide-btn').onclick = function() {
    document.getElementById('money-done').hidden = true;
  }

let outBg = document.querySelector('.out-popup');
let openoutButtons = document.querySelectorAll('.out-open'); 

openoutButtons.forEach((button) => { 
    button.addEventListener('click', (e) => { 
        e.preventDefault(); 
        outBg.classList.add('open'); 
    })
});

document.addEventListener('click', (e) => {
    if(e.target === outBg) {
        outBg.classList.remove('open');
    }
});
document.getElementById('hide-out').onclick = function() {
    document.getElementById('money-out').hidden = true;
  }