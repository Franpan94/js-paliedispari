let character = prompt('inserisci parola:')

let reversecharacter;

let newcharacter='';

let i = character.length - 1 ;


while(i >= 0){
    reversecharacter = character[i];

    newcharacter = newcharacter + reversecharacter;
    
    i--;
}

console.log(newcharacter);