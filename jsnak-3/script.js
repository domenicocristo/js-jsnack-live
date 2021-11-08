let persone = [
    {
        "nome" : "marco",
        "cognome" : "pinco",
        "età" : "16"
    },

    {
        "nome" : "mario",
        "cognome" : "rossi",
        "età" : "20"
    },

    {
        "nome" : "francesco",
        "cognome" : "pallo",
        "età" : "23"
    },

    {
        "nome" : "roberto",
        "cognome" : "tal",
        "età" : "40"
    },

    {
        "nome" : "stefano",
        "cognome" : "detali",
        "età" : "35"
    }
]

const guida = persone.map((persona) => {
    if (persona.età < 18) {
        return `${persona.nome} ${persona.cognome} non può guidare`;
    } else {
        return `${persona.nome} ${persona.cognome} può guidare`;
    }
}
);
console.log(guida);