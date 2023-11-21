let bodyImage = document.body.style;
let toggleButton = document.getElementsByTagName('button')[0];
let grayscaleImage = "url(./resources/images/background-image-grayscale.png)";


function colorSwitch() {
    if (toggleButton.innerHTML === 'Dark Theme') {
        bodyImage.backgroundImage = '';
        bodyImage.color = '';
        toggleButton.innerHTML = 'Light Theme';
    } else {
        bodyImage.backgroundImage = grayscaleImage;
        bodyImage.color = 'white';
        toggleButton.innerHTML = 'Dark Theme';
    }
}