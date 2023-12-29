const prompt = require('prompt-sync')({sigint: true});

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

    static generateField(height, width) {
        const newField = [];
        for (let i = 0; i <= height; i++) {
            newField.push([]);
            for (let j = 0; j <= width; j++) {
                const random = Math.floor(Math.random() * height) < height / 2 ? hole : fieldCharacter; 
                newField[i].push(random);
            }
        }
        const instance = new Field();
        instance.field = newField;
        // console.log(this.field);
        instance.print();
        instance.userInput();
    }
    
    print() {
        this.field.forEach(row => {
            console.log(row.join(''));
        });
    }

    updateField(direction) {
        switch(direction) {
            case 'd':
                this.playerCol++;
                break;
            case 'a':
                this.playerCol--;
                break;
            case 's':
                this.playerRow++;
                // this.field[this.playerRow] = pathCharacter;
                break;
            case 'w':
                this.playerRow--;
                break;
            default:
                console.log('Please enter a valid key.');
                this.userInput();
        }

        if (!this.field[this.playerCol] || !this.field[this.playerRow]) {
            console.log('Out of bounds! Game Over!');
            this.exitGame = true;
        } else {
            const currentTile = this.field[this.playerRow][this.playerCol];

            if (currentTile === hole) {
                console.log('You fell in a hole. Game Over!');
                this.exitGame = true;
            } else if (currentTile === hat) {
                console.log('You won!');
                this.exitGame = true;
            }
            this.field[this.playerRow][this.playerCol] = pathCharacter;
        }

        if (this.exitGame) {
            return;
        } else {
            this.print();
            this.userInput();
        }
    }

    userInput() {
        if (this.exitGame) {
            return;
        }
        const direction = prompt('Which way? d for right, a for left, w for top, s for down > ');
        this.updateField(direction);
    }

    
}

const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
]);

// myField.print();

// myField.userInput();

Field.generateField(2, 2);