const messages = {
	inspirationalMessages: ['There is always light. If only we\'re brave enough to see it. If only we\'re brave enough to be it.', 'You\'re braver than you believe, stronger than you seem, and smarter than you think.', 'Believe you can and you\'re halfway there.'],
    nonsensicalJokes: ['How do you make an octopus laugh? You give him ten tickles.', 'What does a house wear? Address.', 'Did you hear the rumor about butter? Never mind, I shouldn\'t spread it.'],
    puns: ['The guy who invented the door knocker got a no-bell prize.', 'His theory on inertia never seemed to gain momentum.' , 'The dead batteries were given out free of charge.']
}

randomPicker = Math.floor(Math.random() * 3);

console.log(messages.inspirationalMessages[randomPicker]);