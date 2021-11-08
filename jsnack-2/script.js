let automobili = [
    {
        "marca" : "mercedes",
        "modello" : "",
        "alimentazione" : "benzina"
    },

    {
        "marca" : "ferrari",
        "modello" : "",
        "alimentazione" : "benzina"
    },

    {
        "marca" : "audi",
        "modello" : "tt",
        "alimentazione" : "benzina"
    },

    {
        "marca" : "ford",
        "modello" : "fiesta",
        "alimentazione" : "disel"
    },

    {
        "marca" : "opel",
        "modello" : "",
        "alimentazione" : "disel"
    },

    {
        "marca" : "tesla",
        "modello" : "s",
        "alimentazione" : "elettrico"
    },

    {
        "marca" : "porsche",
        "modello" : "tycan",
        "alimentazione" : "elettrico"
    },

    {
        "marca" : "",
        "modello" : "",
        "alimentazione" : "gpl"
    },

    {
        "marca" : "fiat",
        "modello" : "500",
        "alimentazione" : "metano"
    },

    {
        "marca" : "fiat",
        "modello" : "panda",
        "alimentazione" : "metano"
    }
]

const automobiliBenzina = automobili.filter((auto) => {
    return auto.alimentazione == "benzina";
}
);
console.log(automobiliBenzina);

const automobiliDisel = automobili.filter((auto) => {
    return auto.alimentazione == "disel";
}
);
console.log(automobiliDisel);

const restoAutomobili = automobili.filter((auto) => {
    return auto.alimentazione !== "benzina" && auto.alimentazione !== "disel";
}
);
console.log(restoAutomobili);