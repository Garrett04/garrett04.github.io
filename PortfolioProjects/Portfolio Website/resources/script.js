let bodyImage = document.body.style;
let headerColor = document.getElementsByTagName('header')[0].style;
let toggleButton = document.getElementsByTagName('button')[0];
let grayscaleImage = "url(./resources/images/background-image-grayscale.png)";


function colorSwitch() {
    if (toggleButton.innerHTML === 'Dark Theme') {
        bodyImage.backgroundImage = '';
        headerColor.backgroundColor = '';
        toggleButton.innerHTML = 'Light Theme';
    } else {
        bodyImage.backgroundImage = grayscaleImage;
        headerColor.backgroundColor = 'black';
        toggleButton.innerHTML = 'Dark Theme';
    }
}