let bodyColor = document.body;
let toggleButton = document.getElementsByTagName('button')[0];

function colorSwitch() {
    if (bodyColor.style.backgroundColor === 'black') {
        bodyColor.style.backgroundColor = '';
        bodyColor.style.color = '';
        toggleButton.innerHTML = 'Light Theme';
    } else {
        bodyColor.style.backgroundColor = 'black';
        bodyColor.style.color = 'white';
        toggleButton.innerHTML = 'Dark Theme'
    }
}