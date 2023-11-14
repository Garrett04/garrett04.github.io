// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:
const validateCred = arr => {
    let sumOfOddPlaces = 0;
    let sumOfEvenPlaces = 0;

    for (let i = arr.length - 1; i >= 0; i--) {
        // console.log(arr[i]);
        if ((arr.length - 1 - i) % 2 !== 1) {
            sumOfOddPlaces += arr[i];
            // console.log(arr[i]);
        }
        
        if ((arr.length - 1 - i) % 2 === 1) {
            // console.log(arr[i]);
            if (arr[i] * 2 > 9) {
                sumOfEvenPlaces += arr[i] * 2 - 9;
            } else {
                sumOfEvenPlaces += arr[i] * 2;
            }
        }
    }

    if ((sumOfOddPlaces + sumOfEvenPlaces) % 10 === 0) {
        return true;
    } else {
        return false;
    }

    // console.log(sumOfOddPlaces);
    // console.log(sumOfEvenPlaces);
    // console.log(sumOfEvenPlaces + sumOfOddPlaces);
}

// Test functions:
console.log(validateCred(valid1)); // Should print true
console.log(validateCred(invalid1)); // Should print false

const findInvalidCards = nestedArr => {
    let invalidCards = [];
    for (let i = 0; i < nestedArr.length; i++) {
        if (!validateCred(nestedArr[i])) {
            invalidCards.push(nestedArr[i]);
        }
    }
    return invalidCards;
}

// Test function
console.log(findInvalidCards([valid1, valid2, valid3, valid4, valid5]));// Shouldn't print anything
console.log(findInvalidCards([invalid1, invalid2, invalid3, invalid4, invalid5])); // Should print all of the numbers

console.log(findInvalidCards(batch)); // Test what the mystery numbers are

const idInvalidCardCompanies = nestedArr => {
    let invalidCardCompanies = [];

    for (let i = 0; i < nestedArr.length; i++) {
        // console.log(nestedArr[i][0]);
        switch (nestedArr[i][0]) {
            case 3:
                invalidCardCompanies.push('Amex (American Express)');
                break;
            case 4:
                invalidCardCompanies.push('Visa');
                break;
            case 5:
                invalidCardCompanies.push('Mastercard');
                break;
            case 6:
                invalidCardCompanies.push('Discover');
                break;
            default:
                invalidCardCompanies.push('Company not found');
                break;
        }
    }

    invalidCardCompanies = invalidCardCompanies.filter((company, index, self) => {
        return self.indexOf(company) === index;
    });

    return invalidCardCompanies;
}


// console.log(validateCred([4, 8, 4, 7, 3, 5, 2, 9, 8, 9, 2, 6, 3, 0, 9, 4]));
// console.log(validateCred(mystery5));
// console.log(findInvalidCards(batch));
console.log(idInvalidCardCompanies([invalid1])); // Should print['visa']
console.log(idInvalidCardCompanies([invalid2])); // Should print ['mastercard']
console.log(idInvalidCardCompanies(batch)); // Find out which companies have mailed out invalid cards
console.log(idInvalidCardCompanies([[0,6,0,4,5,9,3,9,8,0,1,4,7,2,0,5]])); // Prints [ 'Company not found' ]
console.log(validateCred([3,7,4,0,9,6,8,0,7,5,1,6,6,5,9])); // Prints true