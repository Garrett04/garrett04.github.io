const messages = {
  inspirationalMessages: ['There is always light. If only we\'re brave enough to see it. If only we\'re brave enough to be it.', 'You\'re braver than you believe, stronger than you seem, and smarter than you think.', 'Believe you can and you\'re halfway there.', 'When you have a dream, you\'ve got to grab it and never let go.', 'Life has got all those twists and turns. You\'ve got to hold on tight and off you go.'],
  nonsensicalJokes: ['How do you make an octopus laugh? You give him ten tickles.', 'What does a house wear? Address.', 'Did you hear the rumor about butter? Never mind, I shouldn\'t spread it.', 'What do you call an elephant that doesn’t matter? An irrelephant!', 'How does Moses make his tea? Hebrews it!'],
  puns: ['The guy who invented the door knocker got a no-bell prize.', 'His theory on inertia never seemed to gain momentum.', 'The dead batteries were given out free of charge.', 'How did the picture end up in jail? It was framed!', 'What did the sushi say to the bee? Wasabee!']
}

// Random ascii art
const asciiArt = {
  insects: [`
\\(")/
-( )-
/(_)\\`
,`
    _  _
   | )/ )
\\\\ |//,' __
(")(_)-"()))=-
   (\\\\`
   ,`
\\_/-.--.--.--.--.--.
(")__)__)__)__)__)__)
 ^ "" "" "" "" "" ""`
   ],
  leaves: [`
     .\\^/.          
   . |\`|/| .         
   |\\|\\|'|/|         
.--'-\\\`|/-''--.      
 \`-._\\|./.-'/       
  >\`-._|/.-'<         
 '~|/~~|~~\\|~'       
       |`
       ,`
   |
 .'|'.
/.'|\\ \\
| /|'.|
 \\ |\\/
  \\|/
   \``
   ,`
        /\\
 |\\    /  \\    /|
 | \\   \\  /   / |
 |  |  \\  /  |  |
  \\  \\ \\  / /  /
|\\__\\ \\\\  // /__/|
 \\___--    --___/
     /_/||\\_\\
        ||`],
  vehicles: [`
    __!__
_____(_)_____
   !  !  !`,`
   -----|-----
*>=====[_]L)
      -'-\`-`
      ,`
        _______
       //  ||\\ \\
 _____//___||_\\ \\___
 )  _          _    \\
 |_/ \\________/ \\___|
___\\_/________\\_/______
    `]
}

// A function that picks a random number
const randomPicker = num => {
  return Math.floor(Math.random() * num);
} 

let messagesArr = [];

for (let message in messages) {
  let index = randomPicker(messages[message].length);
  
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
  switch (message) {
    case 'inspirationalMessages':
      messagesArr.push(`Inspirational quote for the day: ${messages[message][index]}`);
      break;
    case 'nonsensicalJokes':
      messagesArr.push(`Nonsensical joke for the day: ${messages[message][index]}`);
      break;
    case 'puns':
      messagesArr.push(`Pun for the day: ${messages[message][index]}`);
      break;
  }
}

// Creating random ascii Art

let asciiArr = [];

for (let ascii in asciiArt) {
  let index = randomPicker(asciiArt[ascii].length)
  
  switch (ascii) {
    case 'insects':
      asciiArr.push(asciiArt[ascii][index]);
      break;
    case 'leaves':
      asciiArr.push(asciiArt[ascii][index]);
      break;
    case 'vehicles':
      asciiArr.push(asciiArt[ascii][index]);
      break;
  }
}

let messagesStr = messagesArr.join('\n\n'); // Storing all messages as a string in messagesStr.

let asciiStr = asciiArr.join('\n\n');

console.log(messagesStr);
console.log(asciiStr);