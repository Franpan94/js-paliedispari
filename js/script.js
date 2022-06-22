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