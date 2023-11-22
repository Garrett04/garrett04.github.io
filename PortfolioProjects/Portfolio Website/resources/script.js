let bodyImage = document.body.style;
let toggleButton = document.getElementsByTagName('button')[0];
let grayscaleImage = "url(./resources/images/background-image-grayscale.png)";


function colorSwitch() {
    if (toggleButton.innerHTML === 'Dark Theme') {
        bodyImage.backgroundImage = '';
        toggleButton.innerHTML = 'Light Theme';
    } else {
        bodyImage.backgroundImage = grayscaleImage;
        toggleButton.innerHTML = 'Dark Theme';
    }
}