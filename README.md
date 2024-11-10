### Esercizio biglietto del treno

## Dati

- Far fornire dall'utente tramite prompt i Km da percorrere;
- Far fornire dall'utente tramite prompt l'età;
- Prezzo del biglietto per Km: 0.21 euro;

sconti applicati:
- -20% per i minorenni;
- -40% per gli over 65;


## Esecuzione Logica

- mostrare un prompt input per inserire i Km da percorrere e salvare il valore in una variabile
- mostrare un prompt input per inserire l'età e salvare il valore in una variabile
- effettuare un controllo per accertarsi che i valori non risultino NaN
    | se sono NaN manda un alert di invito alla ricompilazione col tipo corretto e interrompi il processo.

- convertire il valore ottenuto dagli input da stringa a numero

- Eseguire un calcolo sulla base dell'età dell'utente:
    - Se l'età sarà minore a 18 sarà minorenne,
    - Altrimenti se l'età sarà maggiore di 65 sarà over 65,
    - Altrimenti sarà maggiorenne.

- Eseguire un calcolo del prezzo del biglietto in base ai Km da percorrere moltiplicato per il prezzo per Km :
    es. 10Km * 0.21 euro = 2.10 euro

    - Se l'utente sarà minorenne, calcolare il costo del biglietto rimuovendone lo sconto riservato ai minorenni: 20%;
        | (2.10 / 100) * 20 = 0.42 euro;

    -  Invece se l'utente sarà over 65, eseguire lo stesso calcolo ma con lo sconto del 40%
        | Over65 (2.10 / 100) * 40 = 0.84 euro.


- In base all'età applicare uno sconto sul prezzo totale del biglietto. 
    - tot prezzo minorenni: prezzo (in questo caso 2.10 euro) - valore sconto (in questo caso 0.42 euro) = 1.68 euro.
    - tot prezzo Over65: prezzo (in questo caso 2.10 euro) - valore sconto (in questo caso 0.84 euro) = 1.26 euro
    - Negli altri casi il prezzo rimarrà invariato.

Il valore finale sarà il prezzo del biglietto dell'utente.

## Output

 Stampare in console il prezzo totale del biglietto con massimo 2 decimali, e se presente, lo sconto applicato in percentuale.

