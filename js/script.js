// Ciao ragazzi,
// Esercizio di oggi: Simon Says
// nome repo: js-simon
// Descrizione:
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.
// Buon lavoro ragazzi


// genero i 5 numeri casuali

const listNumbers = generateNumber();



// funzione che deve creare un array di numeri casuali non ripetuti

function generateNumber() {
    const arrayNumbers = [];

    while (arrayNumbers.length < 5) {
        const randomNumbers = getRndInteger(1, 200);
        if (!arrayNumbers.includes(randomNumbers)) {
            arrayNumbers.push(randomNumbers);
        }
    }
}

//funzione che genera numeri casuali

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}