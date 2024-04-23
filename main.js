// variables
let firstName;
let lastName;
let favColour;
let randomNumber = 21;

firstName = prompt(message="Nome:");
lastName = prompt(message="Cognome:");
favColour = prompt(message="Colore prefertito:");

document.getElementById("result").innerHTML = firstName+lastName+favColour+randomNumber;

console.log(`
first name: ${firstName}
last name: ${lastName}
favourite colour: ${favColour}
random number: ${randomNumber}

result: ${firstName+lastName+favColour+randomNumber}
`);



