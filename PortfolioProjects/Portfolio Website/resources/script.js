let bodyImage = document.body.style;
let headerColor = document.getElementsByTagName('header')[0].style;
let h1Border = document.getElementsByTagName('h1')[0].style;
let toggleButton = document.getElementsByTagName('button')[0];

/*Mobile*/
let toggleButtonMobile = document.getElementsByClassName('mobile')[0];
let grayscaleImage = "url(./resources/images/background-image-grayscale.png)";
let grayscaleImageMobile = "url(./resources/images/background-image-grayscale-mobile.png)";


function colorSwitch() {
    if (toggleButton.innerHTML === 'Dark Theme') {
        bodyImage.backgroundImage = '';
        headerColor.backgroundColor = '';
        headerColor.borderBottomColor = '';
        toggleButton.innerHTML = 'Light Theme';
    } else {
        bodyImage.backgroundImage = grayscaleImage;
        headerColor.backgroundColor = 'black';
        headerColor.borderBottomColor = 'white';
        toggleButton.innerHTML = 'Dark Theme';
    }
}

function colorSwitchMobile() {
    if (toggleButtonMobile.innerHTML === 'Dark Theme') {
        bodyImage.backgroundImage = '';
        headerColor.backgroundColor = '';
        h1Border.borderBottomColor = '';
        headerColor.borderBottomColor = '';
        toggleButtonMobile.innerHTML = 'Light Theme';
    } else {
        bodyImage.backgroundImage = grayscaleImageMobile;
        headerColor.backgroundColor = 'black';
        h1Border.borderBottomColor = 'white';
        headerColor.borderBottomColor = 'white';
        toggleButtonMobile.innerHTML = 'Dark Theme';
    }
}