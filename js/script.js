let character = prompt('inserisci parola:')
console.log(character);

let reversecharacter;

let newcharacter='';

let i = character.length - 1 ;


while(i >= 0){
    reversecharacter = character[i];

    newcharacter = newcharacter + reversecharacter;
    
    i--;
}

console.log(newcharacter);

function characters(word, reverseword){
    if(word === reverseword){
        console.log('La parola è palindroma');
    } else {
        console.log('La parola non è palindroma');
    }
}

characters(character, newcharacter);