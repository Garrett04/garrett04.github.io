let bodyImage = document.body.style;
let headerColor = document.getElementsByTagName('header')[0].style;
let h1Border = document.getElementsByTagName('h1')[0].style;
let toggleButton = document.getElementsByTagName('button')[0];
let grayscaleImage = "url(./resources/images/background-image-grayscale.png)";


function colorSwitch() {
    if (toggleButton.innerHTML === 'Dark Theme') {
        bodyImage.backgroundImage = '';
        headerColor.backgroundColor = '';
        h1Border.borderBottomColor = '';
        headerColor.borderBottomColor = '';
        toggleButton.innerHTML = 'Light Theme';
    } else {
        bodyImage.backgroundImage = grayscaleImage;
        headerColor.backgroundColor = 'black';
        h1Border.borderBottomColor = 'white';
        headerColor.borderBottomColor = 'white';
        toggleButton.innerHTML = 'Dark Theme';
    }
}