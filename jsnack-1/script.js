let bici = [
    {
        "nome" : "bici1",
        "peso" : "10kg",
        "brand" : "bho"
    },

    {
        "nome" : "bici2",
        "peso" : "9kg",
        "brand" : "bho"
    },

    {
        "nome" : "bici3",
        "peso" : "8kg",
        "brand" : "bho"
    },

    {
        "nome" : "bici4",
        "peso" : "7kg",
        "brand" : "bho"
    },

    {
        "nome" : "bici5",
        "peso" : "6kg",
        "brand" : "bho"
    },

    {
        "nome" : "bici6",
        "peso" : "5kg",
        "brand" : "bho"
    },

    {
        "nome" : "bici7",
        "peso" : "4kg",
        "brand" : "bho"
    }
]

let nuovaBici = {
    "nome" : "bici8",
    "peso" : "3kg",
    "brand" : "bho",
}

const copiaNuovaBici = {...nuovaBici, "numeroMarce" : "4"};

bici.push(copiaNuovaBici);

for (let i = 0; i < bici.length; i++) {
const oggetto = bici[i];
const nome = oggetto.nome;
const peso = oggetto.peso;
const brand = oggetto.brand;
document.getElementById("elenco-bici").innerHTML +=
        `<div class="bici">
            <h2>"${nome}</h2>
            <div>"${peso}</div>
            <div>"${brand}</div>
        </div>`;
}