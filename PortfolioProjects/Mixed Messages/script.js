inspirationalMessages = ['There is always light. If only we\'re brave enough to see it. If only we\'re brave enough to be it.', 'You\'re braver than you believe, stronger than you seem, and smarter than you think.', 'Believe you can and you\'re halfway there.'];
nonsensicalJokes = ['How do you make an octopus laugh? You give him ten tickles.', 'What does a house wear? Address.', 'Did you hear the rumor about butter? Never mind, I shouldn\'t spread it.'];
puns = ['The guy who invented the door knocker got a no-bell prize.', 'His theory on inertia never seemed to gain momentum.', 'The dead batteries were given out free of charge.'];

let messages = [inspirationalMessages, nonsensicalJokes, puns]

const randomPicker = num => {
  return Math.floor(Math.random() * num);
}

let pickMessage = 0;
let messageArr = [];

for (let i = 0; i < messages.length; i++) {
  pickMessage = randomPicker(messages.length);
  
  if (i === 0) {
    messageArr.push(`Inspirational quote for the day: ${messages[0][pickMessage]}`);
  } else if (i === 1) {
    messageArr.push(`Pun for the day: ${messages[1][pickMessage]}`);
  }
}


console.log(messageArr.join('\n'));