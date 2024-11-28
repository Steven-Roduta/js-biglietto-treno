//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//- il prezzo del biglietto è definito in base ai km (0.21 € al km)
const bigliettoKm = 0.21;
const string = '€';
const bigliettoKmstring = (0.21 + '' + '€' );
//- va applicato uno sconto del 20% per i minorenni
const scontoMin = 20;
const stringPerc = '%';
const scontoMinstringPerc = (20 + '%');
const percentualeMin = 100;

const TicketCost = (bigliettoKm * scontoMin) / percentualeMin;
if (bigliettoKm < TicketCost ) {
    alert(" Discount for Minors -18")
}

//- va applicato uno sconto del 40% per gli over 65.

const scontoOv = 40;
const stringCent = '%';
const scontoMinstringCent = (40 + '%');
const percentualeOver = 100;

const TicketCostOver = (bigliettoKm * scontoOv) / percentualeOver;
if (bigliettoKm > TicketCostOver) {
    alert("Discount for Over +65")
}
//- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

