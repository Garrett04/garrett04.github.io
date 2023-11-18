inspirationalMessages = ['There is always light. If only we\'re brave enough to see it. If only we\'re brave enough to be it.', 'You\'re braver than you believe, stronger than you seem, and smarter than you think.', 'Believe you can and you\'re halfway there.'];
nonsensicalJokes = ['How do you make an octopus laugh? You give him ten tickles.', 'What does a house wear? Address.', 'Did you hear the rumor about butter? Never mind, I shouldn\'t spread it.'];
puns = ['The guy who invented the door knocker got a no-bell prize.', 'His theory on inertia never seemed to gain momentum.', 'The dead batteries were given out free of charge.'];

let messages = [inspirationalMessages, nonsensicalJokes, puns] // An array that nests all the messages

// A function that picks a random number
const randomPicker = num => {
  return Math.floor(Math.random() * num);
} 

let messagesArr = [];

for (let i = 0; i < messages.length; i++) {
  let index = randomPicker(messages.length);
  
  // Using if/else if/else
  /*
  if (i === 0) {
    messagesArr.push(`Inspirational quote for the day: ${messages[0][pickMessage]}`);
  } else if (i === 1) {
    messagesArr.push(`Nonsensical joke for the day: ${messages[1][pickMessage]}`);
  } else {
    messagesArr.push(`Pun for the day: ${messages[2][pickMessage]}`);
  }
  */
  
  // Using switch case
  switch (i) {
    case 0:
      messagesArr.push(`Inspirational quote for the day: ${messages[0][index]}`);
      break;
    case 1:
      messagesArr.push(`Nonsensical joke for the day: ${messages[1][index]}`);
      break;
    case 2:
      messagesArr.push(`Pun for the day: ${messages[2][index]}`);
      break
  }
}

let messagesStr = messagesArr.join('\n\n'); // Storing all messages as a string in messagesStr.

console.log(messagesStr);
