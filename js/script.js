/*

    Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
    Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
     Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell'array delle bombe non potranno esserci due numeri uguali.
    In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba 
    - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
    La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
    Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha cliccato su una cella che non era una bomba.


    Bonus
    Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
    - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
    - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
    - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

    STEP 1
    1 CREARE UN ARRAY, CREARE 16 NUMERI RANDO DA 1 A 16, NON SI DEVONO RIPETERE     -- fatto --
    2 INSERIRE NELLA GRAGLIA  I NUMERI CASUALLI CREATI NELL'ARRAY                   -- fatto --
    STOP 2 
    1 INSERIRE L'ARRAY NELLA LISTA DEI NUMERI 
    2 SE FACCIAMO CLICK SU UN NUMERO DELL'ARRAY FINIRE LA PARTITA 
    3 SE SELEZIONIAMO TUTTI GLI ALTRI NUMERI FINIRE LA PRTITA (VITTORIA)
    

*/

// Creazione array numeri casuali 

// Variabile Bottone
const clickMe = document.getElementById('click-me')
// Variabile container 
const gridContainer = document.querySelector('.grid-container');

const arr = [];


clickMe.addEventListener('click',
    function(){

        //CREAZIONE array

while (arr.length < 16) {
    const random = Math.floor(Math.random() * 100) + 1;
    if (arr.indexOf(random) === -1) {
    arr.push(random);
    }
}
    console.log('array',arr ,arr.length, typeof arr);
    

    // Variabile container 
    const gridContainer = document.querySelector('.grid-container');
    // reset 
    gridContainer.innerHTML = '';

    for (let number = 1 ; number <= 100; number++) {
        // creazione div 
    const newCell = document.createElement('div');

        //aggiunto la classe al div
    newCell.classList.add('cell');
        //aggiunto il valore al div
    newCell.append(number);
        // aggiunta la classe active al div cliccatto
    newCell.addEventListener('click', function () {
        this.classList.toggle('active');
        
        console.log( 'Cella numero',this.innerHTML);

        console.log(newCell.value)

        // if(newCell.value == arr.length){
        //     alert('sbagliato')
        // }

        

    });

        //aggiunto il div al container
    gridContainer.append(newCell);

}





/*
        // GENERAIZONE NUMERI RANDOM

       
            for (let number = 1 ; number <= 16; number++) {
                number = arr.length
                // creazione div 
            const newCellBomb = document.createElement('div');
        
                //aggiunto la classe al div
            newCellBomb.classList.add('bomb');
                //aggiunto il valore al div
            newCellBomb.append(number);
        
                // aggiunta la classe active al div cliccatto
            newCellBomb.addEventListener('click', function () {
                this.classList.toggle('active-bomb');
                console.log(this.innerHTML);
            });
            gridContainer.append(newCellBomb);
    
        
    }

    */
    // CHIUSURA ADDEVENTLISSENTER
});


        


