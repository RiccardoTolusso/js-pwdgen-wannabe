// variables
let firstName;
let lastName;
let favColour;
let randomNumber = 21;

firstName = prompt(message="Nome:");
lastName = prompt(message="Cognome:");
favColour = prompt(message="Colore prefertito:");

// valore per scegliere la soluzione da adottare
let solution = 2; 

switch (solution){
    case 1:
        randomNumber = Math.floor(Math.random()*100);
        break;

    case 2:
        randomNumber = parseInt(String(new Date().getTime()).slice(-2))
        break;
}

document.getElementById("result").innerHTML = firstName+lastName+favColour+randomNumber;

console.log(`
first name: ${firstName}
last name: ${lastName}
favourite colour: ${favColour}
random number: ${randomNumber}

result: ${firstName+lastName+favColour+randomNumber}
`);



