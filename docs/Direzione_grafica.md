# Direzione grafica · evoluzione distintiva di ariadne.training

Decisione di Emanuele del 6 novembre 2026. Il sito di giugno nel repository e le bozze di novembre in `drafts/2026-11/` sono la base per struttura, contenuti e navigazione. La loro veste grafica va rinnovata in modo sostanziale: oggi porta molti tratti tipici dei siti progettati con l'intelligenza artificiale, e Ariadne vuole una linea grafica riconoscibile come propria, evoluzione del sito attuale ariadne.training e coerente con gli elementi distintivi descritti nelle specifiche (sezione 2). Il lavoro si considera riuscito quando la nuova linea valorizza un'immagine di Ariadne più moderna e inconfondibile.

## Cosa c'è oggi nel repository (misurato il 6 novembre 2026)

- Lo sfondo di tutte le pagine è panna `#FBF8F2` (impostato sul `body` di `ariadne.css`); panna e crema compaiono circa 155 volte contro 85 del bianco.
- L'intestazione è traslucida panna con sfocatura dello sfondo.
- Il serif segnaposto (Playfair Display) compare 374 volte; corsivi ed enfasi 275.
- Le sole tre bozze di novembre contengono 63 etichette maiuscole spaziate sopra i titoli, e usano anch'esse sfondi panna.
- Le sezioni seguono un'alternanza regolare di fasce bianco, panna, crema, viola.

## I segni dell'estetica «generata» da eliminare

1. Beige, panna e crema come colore di base e fasce alternate di sfondo.
2. Etichetta in maiuscoletto spaziato sopra ogni titolo.
3. Titolo serif con una parola in corsivo o colorata in ogni sezione.
4. Griglie di tre o quattro card identiche con icona, titolo e due righe.
5. Pill, badge e chip arrotondati come decorazione.
6. Numeri grandi 01 · 02 · 03 decorativi; file di statistiche («2.500+ ore»).
7. Hero centrato con titolo, sottotitolo grigio e due bottoni affiancati.
8. Ombre morbide, sfocature, gradienti sfumati come sfondo.
9. Icone lineari generiche ed emoji.
10. Dissolvenza in entrata su ogni elemento, la stessa animazione ovunque.
11. Caroselli di testimonianze con virgolette giganti.
12. Foto stock, immagini piccole o puramente decorative.
13. Nei testi: frasi a effetto in tre battute, sottotitoli che ripetono il titolo, la costruzione «A, non B».

## Gli elementi distintivi di Ariadne

- **Bianco puro come materia della pagina.** Il colore arriva in piani pieni, mai in tinte sbiadite.
- **Piani di colore della palette**, uno per area (arancio Core Coaching e community, rosso Advanced, verde Team Coaching, viola Core Quadrant® e Training, azzurro Aziende), a tutta larghezza o su porzioni della composizione, con testo bianco o ink sopra: i blocchi della brochure, tradotti per lo schermo.
- **I cubi del logo come sistema.** Il modulo quadrato del cubo diventa la griglia di composizione: impaginati asimmetrici costruiti su quadrati, marcatori di sezione, outline di sfondo, base del diagramma dei percorsi.
- **Il filo.** Una linea continua che attraversa la pagina e collega le tappe, con i nodi; il labirinto nella pagina Il filo di Ariadne. Funziona come strumento di lettura e orientamento, uno per pagina, mai come decoro ripetuto.
- **Fotografia reale protagonista.** Aule, mani, materiali, persone; grandi formati, tagli decisi, in dialogo con i piani di colore. Video di Ofman e van Doorn e video interviste.
- **Segni dai materiali esperienziali.** Dadi narrativi, carte per metafore, mappe, disegno onirico, mattoncini: fotografati o ridisegnati diventano segni grafici originali, che nessun altro sito può avere.
- **Tipografia.** Afterglow a grande scala per i titoli, regular, senza corsivo; Montserrat per navigazione ed etichette che portano un'informazione (date, ore, livello ICF, prezzo); Open Sans per il testo.
- **Voce** genuina e professionale, accanto al lettore.

## Regole operative proposte (da validare nella task 1.6)

- Sfondo di pagina `#FFFFFF`. Panna e crema escono dagli sfondi; restano solo per oggetti che rappresentano carta, come il diploma cartaceo.
- Il ritmo della pagina nasce da bianco, fotografia e piano di colore; al massimo un piano di colore pieno per schermata.
- Un'etichetta sopra un titolo compare solo se porta un dato.
- Il corsivo resta per titoli di opere e termini stranieri.
- Card senza ombra: le delimita un piano di colore o un filetto sottile.
- Animazione: il filo che si traccia, e poco altro; sempre rispettando `prefers-reduced-motion`.
- Impaginati asimmetrici sulla griglia del cubo; la composizione centrata simmetrica diventa l'eccezione.

## Come si arriva alla nuova linea (task 1.6 del piano)

1. Analisi visiva del sito attuale ariadne.training, pagina per pagina, e della brochure 2026: che cosa è DNA da portare avanti.
2. Due direzioni grafiche messe a confronto su due pagine pilota (homepage e una scheda corso), costruite con fotografie reali.
3. Revisione con Silvia (grafica del brand), Arianna ed Emanuele; scelta della direzione.
4. Traduzione nel design system: `ariadne.css`, `CONTEXT.md`, componenti comuni.

**Prova di fatto:** le due pagine pilota non contengono nessuno dei tredici segni elencati sopra e sono riconoscibili come Ariadne anche senza logo.
