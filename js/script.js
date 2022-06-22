let character = prompt('inserisci parola:');
document.getElementById('character').innerHTML = character;
let output = document.getElementById('output');

let reversecharacter;

let newcharacter='';

let i = character.length - 1 ;


while(i >= 0){
    reversecharacter = character[i];
    
    newcharacter = newcharacter + reversecharacter;
    
    i--;
}

document.getElementById('new-character').innerHTML = newcharacter;

function characters(word, reverseword){
    if(word === reverseword){
        
        output.innerHTML = 'La parola è palindroma';
    } else {
        
        output.innerHTML = 'La parola non è palindroma';
    }
}

characters(character, newcharacter);

// Pari e dispari
let casual;
let number = parseInt(prompt('inserisci un numero da 1 a 5:'))

if(number <= 5) {
    if(number % 2 === 0){
        console.log('hai inserito un numero pari')
        console.log(number);
     } else {
        console.log('hai inserito un numero dispari');
        console.log(number);
     }

     function random(min, max) {
        casual = Math.floor(Math.random() * (max - min) + min);
        console.log('numero inserito dal computer');
        console.log(casual);
     }
     
     random (1, 5);
     
     let sum = number + casual;
     
     
     function even(newnumber) {
         if(newnumber % 2 === 0) {
             console.log('la somma è pari');
             console.log(sum);
         } else {
             console.log('la somma è dispari');
             console.log(sum);
         }
     }

     function winner(usernumber, pcnumber) {
        if(usernumber > pcnumber) {
            console.log()
        }
     }
     
     even (sum);

} else {
    console.log('Hai sbagliato, riprova');
}


