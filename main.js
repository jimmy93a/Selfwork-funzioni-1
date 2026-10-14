


let giocatore1 = prompt('Inserisci giocatore 1');
let giocatore2 = prompt('Inserisci giocatore 2');
let tiri = Number(prompt('Quanti tiri di dadi volete effettuare?'));

function tiro(nome, tiri){
    
    
    let punteggio = 0;
    
    
    for (let i = 1; i <= tiri; i++) {
        
        let random = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
        punteggio = punteggio + random;
        console.log(`${nome} il totale è: ${punteggio}`);
        
        
    }
    
    return punteggio;
    
}

let punteggio1 = tiro(giocatore1, tiri);
let punteggio2 = tiro(giocatore2, tiri);

console.log(punteggio1);
console.log(punteggio2);

if(punteggio1 > punteggio2){
    console.log(`Vince ${giocatore1}`);
    
}else if (punteggio1 === punteggio2) {
    console.log('pareggio incredibile');
    
} else {
    console.log(`Vince ${giocatore2}`);
    
}







// let gara = tiro('Carlo', 'Giovanni', prompt("Quante volte vuoi tirare il dado?"), 6) 
// console.log(gara);
