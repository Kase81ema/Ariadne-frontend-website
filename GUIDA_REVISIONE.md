# Guida alla revisione testi del sito Ariadne

## Come aprire il sito in modalità revisione

1. Scarica la cartella del sito dal drive condiviso sul tuo computer.
2. Fai doppio clic sul file `index.html` — si apre nel browser.
3. Dal navigatore vai sulla pagina che vuoi revisionare.

Niente server, niente installazioni. Tutto funziona aprendo i file direttamente nel browser.

## Come usare l'editor

In alto a destra di ogni pagina trovi una barra viola scuro con questi pulsanti:

**✎ Modifica testi** — attiva la modalità revisione. Quando è attiva, tutti i testi del sito diventano cliccabili e modificabili. Passando il mouse sopra un testo vedrai un bordo tratteggiato arancio che indica "questo è modificabile".

**Modificare un testo** — clicca sul testo, posiziona il cursore, scrivi/cancella come in un qualsiasi documento Word. Il bordo arancio solido mostra i testi che hai modificato.

**Lasciare un commento senza modificare** — fai doppio clic sul testo. Si apre una finestra dove puoi scrivere la tua osservazione (es. "questa frase non mi convince, proporrei di riformularla diversamente"). I testi commentati hanno il bordo blu puntinato.

**Contatore modifiche** — accanto al pulsante di modifica vedi quante revisioni hai fatto sulla pagina corrente.

**⬇ Esporta** — quando hai finito la revisione di una pagina, clicca esporta. La prima volta ti chiede il tuo nome (serve per identificare le tue revisioni). Viene scaricato un file `revisioni-NOMEPAGINA-DATA-TUONOME.json`. Carica questo file sul drive condiviso nella cartella "revisioni ricevute".

**↺ Reset** — cancella tutte le revisioni della pagina corrente. Attenzione, è irreversibile.

**? Aiuto** — ripete questa guida in breve.

## Cosa succede dopo

Le revisioni che fai sono **locali al tuo browser** finché non esporti il file JSON — quindi se chiudi il browser e riapri la pagina le ritrovi, ma non sono condivise con nessuno finché non carichi il JSON sul drive.

Una volta caricati i JSON sul drive, Emanuele li raccoglie e li gira a Claude per applicare le modifiche al codice vero del sito. Il risultato diventa la nuova versione del pacchetto sito.

## Consigli pratici

**Revisiona una pagina alla volta ed esporta subito dopo.** Non accumulare revisioni su più pagine senza esportare — il contatore è per pagina e le revisioni di pagine diverse si salvano separatamente.

**Usa i commenti quando non hai una proposta concreta.** È perfettamente legittimo scrivere "questa sezione va ripensata, ma non so come" — serve a far emergere i problemi prima di risolverli.

**Non modificare i numeri dei prezzi a meno che non sia concordato con Emanuele.** I prezzi sono decisioni strategiche, non scelte editoriali.

**Se vuoi aggiungere paragrafi completamente nuovi,** lascia un commento che dice "aggiungere paragrafo X su tema Y" invece di scrivere il nuovo paragrafo dentro un testo esistente — così è più chiaro applicarlo al codice.

## Limitazioni

L'editor non modifica le immagini, i colori, i layout — solo i testi. Per queste cose scrivi a Emanuele.

L'editor non lavora sui testi dentro le immagini, sulle attribuzioni delle foto, sui nomi dei file.

Il backup è solo nel tuo browser finché non esporti il JSON. Se pulisci la cache del browser prima di esportare, perdi le revisioni. Esporta spesso.
