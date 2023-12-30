const prompt = require('prompt-sync')({ sigint: true });

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';


class Field {
    constructor(field) {
        this.field = field;
        this.playerRow = 0;
        this.playerCol = 0;
        this.exitGame = false;
    }

    static receiveResponse() { // To recieve a response from the user to generate a new field.
        const response = prompt('To generate a field, answer with a y or n. > ');

        if (response === 'y') {
            const height = Number(prompt('Enter height: '));
            const width = Number(prompt('Enter width: '));
            const percentage = Number(prompt('Enter percentage of holes to fill: '));

            // console.log(height, width, percentage)

            if (isNaN(height) || isNaN(width) || isNaN(percentage)) {
                console.log('Please enter in number format.');
                Field.receiveResponse();
                return;
            }
            Field.generateField(height, width, percentage);
        } else {
            console.log('Have a good day!');
            this.exitGame = true;
        }
    }

    static generateField(height, width, percentage) { // To generate a field taking in three parameters of height, width and percentage to fill holes.
        if (this.exitGame) {
            return;
        }
        const total = height * width;
        const instance = new Field();
        const field = [];

        for (let row = 0; row < height; row++) {
            field.push([]);
            for (let col = 0; col < width; col++) {
                const randomElement = Math.floor(Math.random() * total) < total * (percentage / 100) ? hole : fieldCharacter;
                field[row].push(randomElement)
            }
        }

        const randomNumRow = Math.floor(Math.random() * height);
        const randomNumColumn = Math.floor(Math.random() * width);
        field[randomNumRow][randomNumColumn] = hat;
        field[0][0] = pathCharacter;
        instance.field = field;
        // console.log(instance.field);

        instance.print();
        instance.userInput();
    }

    print() {
        this.field.forEach(row => {
            console.log(row.join(''));
        });
    }

    updateField(direction) { // Takes in user input and updates path character accordingly
        switch (direction) {
            // Move right
            case 'd':
                this.playerCol++;
                break;
            // Move left
            case 'a':
                this.playerCol--;
                break;
            // Move down
            case 's':
                this.playerRow++;
                // this.field[this.playerRow] = pathCharacter;
                break;
            // Move up
            case 'w':
                this.playerRow--;
                break;
            // If invalid input
            default:
                console.log('Please enter a valid key.');
                this.userInput();
                break;
        }

        // Handle game logic
        if (!this.field[this.playerCol] || !this.field[this.playerRow]) { // Out of bounds
            console.log('Out of bounds! Game Over!');
            this.exitGame = true;
        } else { // If player fell in hole or found the hat.
            const currentTile = this.field[this.playerRow][this.playerCol];

            if (currentTile === hole) {
                console.log('You fell in a hole. Game Over!');
                this.exitGame = true;
            } else if (currentTile === hat) {
                console.log('You won!');
                this.exitGame = true;
            }
            this.field[this.playerRow][this.playerCol] = pathCharacter; // Update path character to current direction.
        }

        if (this.exitGame) { // If true exit game
            Field.receiveResponse();
            return;
        } else {
            this.print();
            this.userInput();
        }
    }

    userInput() { // To recieve user's input and run updateField passing an argument of the user's input.
        if (this.exitGame) {
            return;
        } else {
            const direction = prompt('Which way? d for right, a for left, w for top, s for down.\nTo exit, type e.\n');
            if (direction.toLowerCase() === 'e') {
                Field.receiveResponse();
            } else {
                this.updateField(direction);
            }
        }
    }

    startGame() { // To start a game
        this.print();
        this.userInput();
    }
}

const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
]);

myField.startGame();

// Field.generateField(10, 20, 20);