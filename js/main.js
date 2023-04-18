const emailPartecipanti = ["partecipante1@gmail.com", "partecipante2@gmail.com"];

emailPartecipanti.push("partecipante3@gmail.com");
emailPartecipanti.push("partecipante4@gmail.com");
emailPartecipanti.push("partecipante5@gmail.com");
emailPartecipanti.push("partecipante6@gmail.com");
emailPartecipanti.push("partecipante7@gmail.com");
emailPartecipanti.push("partecipante8@gmail.com");
emailPartecipanti.push("partecipante9@gmail.com");
emailPartecipanti.push("partecipante10@gmail.com");

let richiestaEmail= prompt("Inserisci qui la tua e-mail") ;

let match = false;

for (let i = 0; i < emailPartecipanti.length; i++) {

    let emailListaAttualmenteProcessata = emailPartecipanti[i];

    if (emailListaAttualmenteProcessata == richiestaEmail) {
        match = true;
    }
}

if (match == true) {
    console.log("Email utente corretta");
} else {
    alert("Email utente non valida")
}
