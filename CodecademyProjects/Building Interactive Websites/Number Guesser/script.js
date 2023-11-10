let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.floor(Math.random() * 10)

const getAbsoluteDistance = (num1, num2) => Math.abs(num1 - num2);


const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
    if (humanGuess < 0 || humanGuess > 10) {
        window.alert(`${humanGuess} is out of range. Please choose between 0 and 9!`);
    }
    const humanDiff = getAbsoluteDistance(humanGuess, targetGuess);
    const computerDiff = getAbsoluteDistance(computerGuess, targetGuess);
    
    return humanDiff <= computerDiff;
};

const updateScore = winner => winner === 'human' ? humanScore++ : computerScore++;

const advanceRound = () => currentRoundNumber++;