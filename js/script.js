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
let number = parseInt(prompt('inserisci un numero da 1 a 5:'));
let outputnumber = document.getElementById('output-number');
let outputsum = document.getElementById('output-sum');
let outputmessage = document.getElementById('output-message');

if(number <= 5) {
    if(number % 2 === 0){
        
        outputnumber.innerHTML = 'Il giocatore ha inserito un numero pari: ' + number;
     } else {
        
        outputnumber.innerHTML = 'Il giocatore ha inserito un numero dispari: ' + number;
     }

     function random(min, max) {
        casual = Math.floor(Math.random() * (max - min) + min);
        
        document.getElementById('casual').innerHTML = casual;
     }
     
     random (1, 5);
     
     let sum = number + casual;
     
     
     function even(newnumber) {
         if(newnumber % 2 === 0) {
             
             outputsum.innerHTML = 'La somma dei numeri inseriti è pari: ' + sum;
         } else {
             console.log('la somma è dispari');
             console.log(sum);
             outputsum.innerHTML = 'La somma dei numeri inseriti è dispari: ' + sum;
         }
     }

     even (sum);

     function winner(usernumber, pcnumber) {
        if(usernumber > pcnumber) {
           
            outputmessage.innerHTML = 'Il giocatore vince';
        } else if(usernumber < pcnumber) {
       
            outputmessage.innerHTML = 'Il computer vince';
        } else {
   
            outputmessage.innerHTML = 'pareggio, perciò non esiste un vincitore';
        }
     }

     winner (number, casual);
     
}  else {
  
    outputnumber.innerHTML = 'Hai sbagliato, riprova';
}


