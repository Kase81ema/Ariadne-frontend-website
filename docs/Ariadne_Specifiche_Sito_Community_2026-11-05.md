# Nuovo sito e community Ariadne — punto della situazione e specifiche

Nov 5, 2026 · @Emanuele

## Punto della situazione al 5 novembre 2026

Esistono già tutti i pezzi del nuovo impianto, ma vivono in sei posti diversi e a stadi di maturità diversi: la bozza grafica del sito è la più avanzata, l'area riservata è una base tecnica con contenuti segnaposto, Notion è la fonte dei dati ma non ancora collegata a nulla di pubblico.

| Componente | Dove vive | Stato | Cosa vale la pena riprendere |
| --- | --- | --- | --- |
| Sito pubblico attuale | ariadne.training su Wix (DNS su Wix) | Online, struttura vecchia (menu: Ariadne · Programmi · Corsi di approfondimento · Core Quadrant · Kaospilot) | Testi integrali della pagina Core Quadrant®, bio trainer, foto e loghi ICF/CQI |
| Bozza grafica del nuovo sito | Artefatto Claude Design (canvas migrato, 325 file) + deploy Vercel «Ariadne · v10» (15 pagine) | Riferimento stilistico più vicino al risultato voluto; menu nuovo già definito | Impianto, menu, blocchi colore, cubi, filo, ritmo delle pagine |
| Repository sito statico | GitHub `Kase81ema/Ariadne-frontend-website` (18 pagine HTML, `CONTEXT.md`, `ariadne.css`) | Ultimo aggiornamento 3 giugno 2026; Vercel pubblica a ogni push; dominio non collegato | Base di codice; le pagine `scuola`, `core-quadrant` e `il-filo-di-ariadne` rifatte in questa conversazione sono più recenti del repository |
| Area riservata (Emergent) | GitHub `Kase81ema/Ariadne` — React + FastAPI + MongoDB, 28 pagine, 7 endpoint iscrizioni | Ultimo aggiornamento 4 luglio 2026; contenuti e trainer segnaposto, prezzi errati, nessuna sincronizzazione con Notion, contratto nel wizard ancora vuoto | Mappa delle funzioni (profilo, wizard iscrizione a 6 passi, rate, materiali, bacheca, eventi, admin) e il modello dei dati |
| Notion «Gestione scuola» | Workspace segreteria@ariadne.training, piano Pro | Database Corsisti, Edizioni, Iscrizioni, Pagamenti, Percorsi, Abbonamenti; testi del sito revisionati; archivio post; iscritti in arrivo da Tally | Fonte di verità per dati, testi e voce |
| Moduli | Tally (decisione del 4 novembre: unico strumento per i moduli; Make, Zapier e Jotform escono) | Da creare per i corsi; le risposte vanno in Notion con l'integrazione diretta | Schema domande e consenso dal modello HumanAImpact |
| Email | Brevo, lista «Rubrica corsisti Ariadne», newsletter mensile | Attivo | Liste, doppio opt-in, template |
| Base44 | Valutazione in corso | Connettore Notion nativo, automazioni schedulate, pagamenti; piano Builder solo per costruire (decisione del 4 novembre) | Candidato per l'area riservata; per il sito pubblico la scelta è aperta (sezione 7) |

Il documento di architettura del 4 novembre fissa già tre principi che vincolano questo progetto: Notion unica fonte di verità per date, prezzi, sedi e posti; il check mattutino legge le pagine pubbliche del sito e apre task «aggiorna il sito»; le immagini vivono in un archivio con URL permanenti fuori da Base44.

## Identità visiva e voce: i vincoli di design

Il nuovo sito è l'evoluzione stilistica di ariadne.training, con la bozza grafica come riferimento più vicino al risultato: questi vincoli valgono per ogni pagina, nel sito pubblico come nell'area riservata, e vanno consegnati a Base44 come regole fisse prima di qualsiasi prompt.

| Elemento | Regola | Fonte |
| --- | --- | --- |
| Sfondo | Bianco puro `#FFFFFF` predominante; panna `#FBF8F2` e crema `#F5EFE3` solo per dare ritmo; viola `#655a9c` per footer e blocchi istituzionali | CONTEXT.md, revisione di Silvia |
| Blocchi di colore | Card e sezioni piene nei colori dei cubi, una per area: arancio `#df7a4a` Core Coaching e community, rosso `#d33935` Advanced, verde `#9ec165` Team Coaching, viola `#655a9c` Core Quadrant® e Training, azzurro `#568dc1`/`#67b2e2` riservati ad Aziende; magenta `#d95d84` e verde chiaro `#d4d965` come accenti | Palette ufficiale |
| Cubi del logo | Elemento identitario principale: marcatori di sezione, texture in outline, base del diagramma dei percorsi; mai forme decorative generiche (cerchi, ovali) | CONTEXT.md |
| Il filo | Nuovo elemento grafico: linea sottile che si traccia allo scroll e collega le tappe di un percorso, il labirinto SVG nella pagina Il filo di Ariadne, i nodi circolari al posto dei blocchi rigidi | Pagine `scuola`, `core-quadrant`, `il-filo-di-ariadne` rifatte in questa conversazione |
| Font | Afterglow per i titoli (file .woff2 da fornire; finché manca, Playfair Display); nessun corsivo e nessun punto finale nei titoli; parole chiave in bold colorato | CONTEXT.md |
| Immagini e video | Molte più foto reali e video rispetto al sito attuale (shooting Core Quadrant, aule, Open Day, video di Ofman e van Doorn); mai foto stock; URL permanenti dall'archivio immagini | Richiesta del 5 novembre; architettura del 4 novembre |
| Forme | Card 16 px, bottoni 6 px, foto trainer quadrate con angoli 16 px | CONTEXT.md |
| Voce | Relazionale, accanto al lettore, genuina e professionale; invita, non vende; vietati «mindset», «resilienza», «journey», urgenza e scarsità; terminologia ICF precisa (sessioni, cliente); il corpus dei post approvati in Notion è il registro di verità | voice-and-communication, corpus luglio 2026 |
| Terminologia | «Program» solo per i percorsi completi; moduli = Core Coaching, Advanced Coaching, Team Coaching; sempre «Coaching Atelier» e «Laboratori Ariadne»; mai «tragitto»; «approccio» al posto di «metodo» salvo per Ofman | CONTEXT.md |

Font deciso il 5 novembre: Afterglow per i titoli, Montserrat per navigazione ed etichette, Open Sans per il corpo del testo. Resta da consegnare Afterglow in formato web (.woff2).

## Sito pubblico: menu, pagine e origine dei contenuti

Il menu della bozza è la struttura definitiva: **Il filo di Ariadne · Scuola di coaching (con sottomenu) · Core Quadrant® · Training · Workshop · Calendario · Aziende →**, più l'accesso all'area riservata nell'intestazione. Diciassette pagine coprono tutto; per ciascuna la tabella dice da dove arriva il testo e quali dati devono leggere da Notion.

| Pagina | Contenuto | Origine del testo | Dati da Notion | Modulo Tally |
| --- | --- | --- | --- | --- |
| Homepage | Hero; i quattro passi «Si impara facendo, si integra riflettendo»; le quattro anime; «Come sai che troverai ciò che ti serve?» (tre ingressi per intento); trainer; la rete che resta (Coaching Atelier, Laboratori, Webinar, Mentoring di gruppo, Book Club, Convivio); workshop; aziende; testimonianze | Revisionato in Notion | Prossimi 3 eventi, edizioni in partenza, testimonianze | Newsletter |
| Il filo di Ariadne | Mito e parallelismo, tesi sul potenziale, approccio esperienziale, kit degli 8 strumenti in carosello, quattro coppie di valori, trainer con link ai percorsi, citazione Thurman | Revisionato in Notion; impianto nella bozza v1 di questa conversazione | Trainer e loro percorsi | Colloquio |
| Scuola di coaching (hub) | «Cosa vuoi diventare?», cosa è incluso, i quattro programmi con diploma e credenziali ICF, aziende, moduli singoli, configuratore guidato, FAQ | Bozza v4 di questa conversazione, da allineare ai testi Notion | Prezzi, early bird, date di partenza, posti | Colloquio, pre-iscrizione |
| Core Coaching · Advanced Coaching · Team Coaching | Scheda modulo: contenuti per giornata, ore, trainer, sede, prerequisiti, cosa ottieni, prossima edizione | Repository (giugno 2026), da arricchire con i programmi dettagliati | Edizione, date, prezzo, posti, stato iscrizioni | Iscrizione o pre-iscrizione |
| Core Quadrant® | Testi integrali del sito attuale, quattro capitoli, sei cose incluse, video Ofman e van Doorn, trainer, due edizioni l'anno | Bozza v2 di questa conversazione | Edizioni, date, prezzo, posti | Iscrizione |
| Training (hub) + LSP + Kaospilot | Formazione esperienziale per individui e organizzazioni | Repository, da rivedere | Date quando in calendario | Informazioni |
| Workshop | Per tutti e per coach, incontri brevi | Repository, da rivedere | Elenco workshop e date | Iscrizione con pagamento |
| Calendario | Tutti gli eventi filtrabili per tipo (8 tipi) e per mese | Struttura nella bozza | Tutto: è una vista del database Eventi | Iscrizione per evento |
| Coaching Atelier · Laboratori · Webinar | Community: formati, ritmi, tre modi di essere dentro, prossimi appuntamenti | Repository, da allineare ai nuovi formati (Book Club, Convivio, Mentoring di gruppo) | Prossimi appuntamenti | Prenotazione Apericoaching |
| Aziende | Sito nel sito B2B in azzurro: executive e team coaching, group coaching, formazione esperienziale, Hogan, retreat | Brochure aziendale 2026; da scrivere per il web | Nessuno | Richiesta per le organizzazioni |
| Contatti, Privacy, Termini | Colloquio gratuito, sede, informativa | Da scrivere | Nessuno | Colloquio |

Quattro miglioramenti chiesti il 5 novembre valgono per tutte le pagine: schede corso più dettagliate, navigazione pensata per il mobile (menu a scomparsa con il sottomenu Scuola, filtri del calendario leggibili su telefono), collegamenti espliciti tra pagine (da ogni modulo al programma che lo contiene, da ogni evento al modulo Tally giusto, da ogni trainer ai suoi percorsi) e moduli di adesione più efficaci.

Il calendario merita una scelta precisa: oggi è una pagina con eventi scritti a mano. Nel nuovo impianto diventa una vista del database Eventi di Notion, così il check mattutino del sistema di comunicazione confronta sito e Notion sulla stessa fonte.

## Notion come fonte di verità: dati, moduli Tally e flussi

Notion «Gestione scuola» ha già i database operativi; per alimentare sito e area riservata mancano quattro cose: una casella «Pubblica sul sito» sui record da esporre, un database Eventi per la community, i testi del sito come record (non come pagine libere) e un posto per testimonianze e trainer.

Nota per questa sessione: il connettore Notion collegato oggi espone solo gli strumenti di configurazione (barra laterale), senza ricerca né lettura delle pagine, quindi i testi revisionati di homepage e Il filo di Ariadne non sono leggibili da qui. Nella conversazione di ottobre il workspace Ariadne era raggiungibile con ricerca e lettura (database «All content» dei post). Va ricollegato il connettore completo, oppure i testi vanno incollati in questa conversazione.

| Dato | Database Notion | Stato | Da aggiungere per il sito e l'area riservata |
| --- | --- | --- | --- |
| Programmi e moduli (nome, ore, livello ICF, prerequisiti, prezzo, early bird, colore) | Percorsi | Esiste | Campi prezzo, early bird, prerequisiti, «Pubblica sul sito», pagina del sito collegata |
| Edizioni (codice, date, sede, posti, stato iscrizioni) | Edizioni | Esiste (CC, TC, CQ 2026) | Posti disponibili, stato iscrizioni (aperte, ultimi posti, chiuse), link al modulo Tally, «Pubblica sul sito»; il «Prezzo edizione» attuale non è affidabile e va reso tale |
| Eventi community (Apericoaching, Laboratori, webinar, workshop, Open Day, Book Club, Convivio) | Manca | Da creare | Un database Eventi: tipo, data e ora, sede o link, prezzo, posti, pubblico (aperto, alumni, iscritti), modulo Tally, «Pubblica sul sito» |
| Testi del sito (homepage, Il filo, schede corso) | Pagine revisionate in Notion | Esistono per homepage e Il filo | Database Contenuti con un record per blocco (pagina, sezione, testo approvato, stato), come previsto dall'architettura del 4 novembre |
| Post approvati (voce) | All content | Esiste (corpus luglio 2026) | Nessuna modifica: resta il registro di verità del tono |
| Trainer e testimonianze | Mancano come record | Da creare | Database Persone pubbliche: nome, ruolo, bio breve, foto (URL archivio), percorsi tenuti; database Testimonianze con consenso, testo e link alla video intervista (esistono già interviste video) |
| Contatti, iscritti, community | Corsisti (da Tally) | Esiste | Campo «Accesso area riservata» e ruolo community (iscritto, alumnus, partecipante Apericoaching, coach di altra scuola) |
| Iscrizioni e rate | Iscrizioni, Pagamenti | Esistono | Scrittura automatica dall'area riservata quando un'iscrizione o un pagamento online va a buon fine |

I moduli Tally da creare, uno per scopo, tutti con consenso privacy e consenso newsletter come domande del modulo e risposta che finisce in Notion con l'integrazione diretta:

1. Richiesta di colloquio (nome, email, telefono, interesse, messaggio).
2. Pre-iscrizione a un'edizione (edizione scelta, dati, modalità di pagamento preferita).
3. Prenotazione Apericoaching e Laboratori (evento, dati, consenso immagini).
4. Iscrizione newsletter (va anche nella lista Brevo).
5. Richiesta per le organizzazioni (azienda, ruolo, esigenza).

Il flusso dei dati ha una sola direzione per ciascun dato: Tally scrive in Notion; Notion alimenta sito e area riservata; l'area riservata scrive in Notion solo iscrizioni e pagamenti conclusi. Così il check mattutino trova in Notion tutto quello che il pubblico vede.

## Area riservata e community: requisiti

L'area riservata diventa lo spazio della community Ariadne, aperto a chi frequenta un corso e a chi si avvicina da un Apericoaching: un profilo Ariadne per ciascuno, con contenuti e funzioni che crescono con il ruolo. La base Emergent fornisce la mappa delle funzioni e il modello dei dati; i contenuti, la voce e i pagamenti sono da rifare.

**Pubblici e ruoli** (il ruolo vive nel profilo e in Notion · Corsisti):

| Ruolo | Chi è | Cosa vede |
| --- | --- | --- |
| Ospite registrato | Si è registrato da solo dal sito, o ha partecipato a un Apericoaching o a un webinar, senza corsi | Bacheca in sola lettura, eventi aperti, canali, promo dedicate, il proprio profilo; pubblica in bacheca e vede i profili degli altri solo dopo l'approvazione della segreteria |
| Coach di altra scuola | Vuole incontrare il modo di lavorare Ariadne | Come l'ospite, più Laboratori aperti e peer to peer |
| Iscritto a un corso | Edizione in corso | Tutto quanto sopra, più materiali, il mio percorso, iscrizioni e rate, mentoring |
| Alumnus | Ha completato un programma | Come l'iscritto, più retreat e promo alumni |
| Trainer e segreteria | Gestione | Pannello di amministrazione |

**Funzioni**, con ciò che la base Emergent già contiene:

| Funzione | Nella base Emergent (luglio 2026) | Nella nuova versione |
| --- | --- | --- |
| Registrazione e profilo | Login, profilo con dati personali e di fatturazione | Profilo Ariadne con ruolo, consensi, dati fiscali per la fattura, foto, link LinkedIn |
| Home | Dashboard con onboarding e widget generici | Widget «prossimo passo» in base allo stato (nuovo, interessato, iscritto, rata in scadenza) |
| Catalogo e schede corso | Pagine con dati inventati e prezzi errati | Letti da Notion · Percorsi ed Edizioni, prerequisiti visibili, collegamenti al sito pubblico |
| Iscrizione | Wizard in 6 passi (dati, motivazione, pagamento, contratto click-wrap, documenti, conferma); contratto ancora vuoto | Stesso wizard con il contratto reale (19 articoli, recesso 14 giorni), prefill dal profilo, scrittura in Notion · Iscrizioni |
| Pagamenti | Rate gestite a mano dall'admin | Pagamento online di Apericoaching, Laboratori, workshop; rate dei corsi con carta o bonifico; fattura automatica (sezione 6) |
| Il mio percorso | Tracciamento credenziali ICF e corsi | Mantenuto, con ore di pratica e mentoring verso ACC, PCC, ACTC |
| Materiali | Repository per coorte | Mantenuto, solo per iscritti e alumni |
| Bacheca e community | Feed con post, immagini, like e commenti; banner | Mantenuti; in più collegamenti ai canali LinkedIn, WhatsApp e Instagram da settembre 2027, promo dedicate, pagina dei valori |
| Eventi | Elenco eventi | Letti da Notion · Eventi, con iscrizione e pagamento in un passo |
| Assistente | Ariadne AI | Tolto per ora, da riprendere più avanti (decisione del 5 novembre) |
| Amministrazione | Utenti, coorti, iscrizioni e pipeline, rate, banner, template email, inbox con regole | Ridotta a ciò che Notion non copre: utenti e ruoli, rate, banner; comunicazioni restano in Brevo e nel sistema di comunicazione |

Tre scelte di progettazione (5 novembre): la registrazione è libera, così chi è curioso può entrare e guardarsi intorno, ma chi si registra da solo ha permessi limitati finché la segreteria non lo approva (legge la bacheca, non pubblica, non vede i contatti degli altri), a tutela della community da contenuti inadeguati o molestie; i contenuti condivisi dai membri restano visibili solo dentro; ogni funzione nuova entra solo se riduce un passaggio manuale della segreteria.

## Pagamenti e amministrazione

La soluzione più snella per la SRL è Stripe per gli importi piccoli e frequenti, bonifico per i programmi, e una fattura elettronica emessa in automatico a ogni pagamento riuscito: più leggera dei corrispettivi telematici, che richiedono registratore o procedura web dell'Agenzia e dal 2026 il collegamento con gli strumenti di pagamento.

| Cosa si paga online | Importo tipico | Strumento | Costo per transazione (listini 2026) |
| --- | --- | --- | --- |
| Apericoaching, Laboratori, workshop, webinar a pagamento | 15–150 € | Stripe (carte, Apple Pay, Google Pay; PayPal attivabile come metodo in Stripe) | 1,5 % + 0,25 € su carte europee; 2,8 % su carte premium o aziendali; Satispay 0,95 % sopra i 10 € da verificare per l'e-commerce |
| Core Quadrant® (1.895 €) e moduli singoli | 1.800–3.200 € | Stripe o bonifico a scelta del cliente | Stripe circa 28–48 €; bonifico gratuito con riconciliazione manuale |
| Programmi completi e rate | 2.900–5.500 € | Bonifico, con rate registrate in Notion · Pagamenti | Nessuno |

Il flusso automatico: il cliente inserisce una volta i dati fiscali nel profilo; paga con Stripe; la funzione backend riceve la conferma; chiama l'API del software di fatturazione (Fatture in Cloud o Aruba, da scegliere con la commercialista) che emette la fattura e la invia via SdI e per email; scrive l'incasso in Notion · Pagamenti. Nessun intervento manuale e nessun documento commerciale da emettere.

Decisione del 5 novembre: Stripe, PayPal e Satispay tutti attivi purché senza costi di attivazione (Stripe e PayPal non hanno canoni fissi; Satispay Business da verificare). Software di fatturazione candidato: Sibill, da attivare dopo la risposta della commercialista.

Domande da chiudere con la commercialista prima di costruire:

- [ ] Un Apericoaching pagato online e svolto in presenza o in diretta rientra nei corrispettivi o in un esonero?
- [ ] Possiamo emettere fattura elettronica immediata per ogni pagamento, al posto del documento commerciale?
- [ ] Trattamento IVA per chi paga dalla Svizzera o da altri paesi UE ed extra UE.
- [ ] Quale software di fatturazione con API usa già lo studio, per evitare un secondo abbonamento.

## Architettura tecnica proposta e ruolo di Base44

Base44 costruisce l'area riservata; il sito pubblico resta statico su GitHub e Vercel, come raccomanda l'architettura del 4 novembre (via B); Notion sta al centro e ogni dato ha un solo verso.

&#91;embedded content: architettura proposta · Notion al centro, Base44 per l'area riservata, sito statico su Vercel\]

Tally scrive in Notion; Notion alimenta il sito a ogni pubblicazione e l'area riservata con una sincronizzazione ogni 2 giorni più un pulsante «Aggiorna ora»; l'area riservata rimanda in Notion iscrizioni e pagamenti conclusi; Claude legge Notion e il sito ogni mattina e aggiorna il repository.

| Scelta | Opzione consigliata | Alternativa | Perché |
| --- | --- | --- | --- |
| Sito pubblico | Statico (Astro o HTML) su GitHub con Cloudflare Pages (gratuito) o Vercel Pro (20 $ al mese), mantenuto da Claude | Tutto in Base44 con Builder nei mesi di costruzione, poi editor AI (via C) | Velocità su mobile e SEO migliori, costo zero, coerente con la via B; Base44 rende le pagine nel browser, meno adatto a pagine pubbliche da posizionare |
| Area riservata | Base44: login, tabelle, connettore Notion, automazioni schedulate, Stripe via funzioni backend | Far evolvere la base Emergent | Funzioni native per tutto ciò che serve; il repository Emergent resta su GitHub come specifica e riferimento |
| Dati nell'area riservata | Copia in tabelle Base44 sincronizzata da Notion ogni 2 giorni, solo record con «Pubblica sul sito» | Lettura diretta da Notion a ogni visita | Velocità, token Notion nascosto lato server, nessun limite di frequenza dell'API Notion |
| Immagini e video | Repository statico pubblicato da Vercel, URL permanenti; video su YouTube o Vimeo non in elenco | Storage di Base44 | Gli URL dei file Notion scadono; un solo archivio serve sito, area riservata, Buffer e Brevo |
| Domini | ariadne.training su Cloudflare Pages o Vercel Pro; community.ariadne.training su Base44 | Tutto su Base44 | DNS oggi su Wix, da spostare (Cloudflare previsto); da verificare il dominio personalizzato nel piano Base44 successivo al Builder |
| Dopo il Builder | Aggiornamenti periodici dall'editor AI di Base44 con le istruzioni pronte del check (via A) | Mantenere Builder | Piano Builder solo per costruire (decisione del 4 novembre) |

### Cosa cambia rispetto a Base44 Builder tutto l'anno

Con il repository su GitHub, Claude legge, modifica e pubblica il sito come oggi in Base44: Claude Code (web, desktop, mobile) lavora su qualsiasi repository GitHub a cui hai accesso, modifica il codice, esegue i comandi di verifica e pubblica le modifiche su un ramo, e Vercel o Cloudflare generano un'anteprima per ogni ramo. In questa conversazione il repository si collega con accesso in scrittura; la lettura dell'intero sito e la segnalazione delle incoerenze avvengono nello stesso modo, perché Claude clona tutto il codice.

| Cosa fai oggi in Base44 | Con GitHub e un hosting statico | Differenza reale |
| --- | --- | --- |
| Progetti in chat e Claude modifica il codice senza che tu lo veda | Uguale: Claude Code o questa conversazione con il repository collegato; ogni modifica è un commit | Nessuna |
| Anteprima accanto alla chat | Link di anteprima per ogni ramo, 30–60 secondi dopo la modifica, oppure screenshot che Claude si fa da solo | Una scheda in più e qualche secondo di attesa |
| Claude legge tutto il sito e segnala incoerenze | Uguale, con in più il confronto con Notion | Nessuna |
| Qualità grafica | Stesso modello; il CSS è scritto sul brand invece che sui componenti standard di Base44 | A favore del sito statico per un brand già definito |
| Arianna o la segreteria chiedono una modifica nell'editor AI | Passano da Claude (Claude Code richiede un abbonamento con accesso al repository) oppure dalla task «aggiorna il sito» che Claude esegue | Qui si rinuncia a qualcosa: l'editor per chi lavora senza Claude |
| Clic su un elemento per cambiarlo | Si descrive la modifica o si manda uno screenshot | Una comodità in meno |
| Storico e ritorno a una versione | Git conserva ogni versione, per sempre | A favore di GitHub: Base44 tiene solo i checkpoint |
| Hosting, login, database, funzioni incluse | Il sito pubblico non ne ha bisogno; l'area riservata le prende da Base44 | Nessuna per il sito |
| Costo | Nessun piano Base44 per il sito; uso di Claude dentro l'abbonamento | Risparmio del Builder sul sito |

### Dominio e costi di hosting

Il dominio resta registrato dove è oggi (Wix): si cambiano solo i record DNS (un record A e un CNAME, oppure i nameserver), con la propagazione nelle 3 ore stimate. I domini personalizzati sono inclusi in tutti i piani di Vercel (50 per progetto sul piano Hobby); il vincolo è un altro: il piano Hobby gratuito è riservato all'uso personale e non commerciale, e il sito di una SRL rientra nell'uso commerciale.

| Hosting | Costo | Note |
| --- | --- | --- |
| Vercel Pro | 20 $ al mese per posto sviluppatore (uno basta), con 20 $ di utilizzo inclusi; posti viewer gratuiti | Anteprime per ramo; password sulle anteprime a 20 $ al mese per progetto; dominio del primo anno gratuito con Pro a pagamento |
| Cloudflare Pages, piano Free | 0 $ | 500 build al mese, 100 domini per progetto, nessuna restrizione all'uso commerciale nei limiti pubblicati; anteprime per ramo incluse; era già la destinazione prevista per DNS e hosting |
| Vercel Hobby | 0 $ | Solo uso personale: va bene per le anteprime di lavoro, da non usare per ariadne.training |

Raccomandazione: Cloudflare Pages per il sito statico e per l'archivio immagini, DNS su Cloudflare; Vercel Pro a 20 $ al mese se preferisci tenere un solo strumento già collegato. Fonti: [Vercel Hobby Plan](https://vercel.com/docs/plans/hobby), [Cloudflare Pages limits](https://developers.cloudflare.com/pages/platform/limits), [Claude Code in the cloud](https://support.claude.com/en/articles/12618689-use-claude-code-in-the-cloud).

### Costo reale: Base44 non si sostituisce, si affianca

Il risparmio di 30 $ al mese non esiste. L'area riservata ha bisogno di funzioni backend (sincronizzazione con Notion, webhook Stripe, fattura automatica, automazioni schedulate) e del dominio community.ariadne.training: in Base44 entrambe le cose iniziano dal piano Builder. Il piano Starter (16 $ annuale, 20 $ mensile) non ha né funzioni backend né dominio personalizzato, e un piano «Lite» non esiste. Quindi, in ogni scenario che tenga l'area riservata in Base44, il Builder resta attivo tutto l'anno e l'hosting del sito si aggiunge, non si sostituisce. Questo supera la decisione del 4 novembre «Builder solo per costruire»: valeva per un sito, vale meno per un'area riservata con integrazioni.

| Scenario | Base44 | Hosting sito | Totale al mese | Cosa si ottiene |
| --- | --- | --- | --- | --- |
| Tutto in Base44 (sito + area) | Builder 40 $ (annuale) o 50 $ (mensile) | incluso | 40–50 $ | Un solo strumento; sito reso nel browser, con SEO e velocità su mobile inferiori; CSS del brand da rifare sui componenti Base44 |
| Sito statico su Cloudflare Pages + area su Base44 (consigliato) | Builder 40–50 $ | 0 $ | 40–50 $ | Stesso costo; sito veloce e indicizzabile con il CSS già scritto; storico Git; il sito sopravvive a Base44 |
| Sito statico su Vercel Pro + area su Base44 | Builder 40–50 $ | 20 $ | 60–70 $ | Come sopra, con 20 $ in più solo per tenere lo strumento già collegato |
| Area su Base44 Starter, senza backend | Starter 16–20 $ | 0 $ | 16–20 $ | Area su dominio base44.app, senza sincronizzazione Notion automatica e senza Stripe con fattura automatica: non copre i requisiti della sezione 5 |

Partire ora con il Builder e spostare dopo solo il sito: non serve. Il sito pubblico esiste già come HTML nel repository GitHub e nelle bozze di questa conversazione; costruirlo in Base44 vorrebbe dire rifarlo una terza volta e poi riportarlo indietro, perché l'export GitHub di Base44 produce un'app React con il suo SDK, non un sito statico. Il sito resta su GitHub dal primo giorno; il Builder parte quando le specifiche dell'area riservata (passo 10) sono pronte, e da lì resta attivo.

Vercel: non necessario. Cloudflare Pages fa le stesse cose gratis (anteprime per ramo, pubblicazione a ogni push, dominio personalizzato) ed era già la destinazione prevista per il DNS. Vercel Pro ha senso solo se preferisci pagare 20 $ al mese per non cambiare strumento.

Fonti prezzi Base44 (listini luglio–settembre 2026): [Jet Admin, Base44 pricing 2026](https://www.jetadmin.io/blog/base44-pricing-2026-guide-to-plans-credits-and-real-total-cost/), [Softr, Base44 pricing](https://www.softr.io/blog/base44-pricing). Da confermare sulla pagina prezzi di Base44 prima di sottoscrivere.


## Lavoro da fare prima di Base44

Base44 parte quando Notion contiene i record che il sito deve leggere, i testi revisionati sono nelle pagine, le immagini hanno URL permanenti e la commercialista ha risposto sui pagamenti: dieci passi, in quest'ordine, ciascuno con la sua prova.

1. Ricollegare il connettore Notion completo (ricerca e lettura), oppure incollare in questa conversazione i testi revisionati di homepage e Il filo di Ariadne. Prova: Claude rilegge il database All content e le pagine dei testi.
2. Completare Notion per il sito: campi prezzo, early bird, prerequisiti e «Pubblica sul sito» su Percorsi ed Edizioni; database Eventi; database Contenuti con un record per blocco di testo; Trainer e Testimonianze; ruolo community su Corsisti. Prova: una scheda corso si ricostruisce solo dai record.
3. Allineare le pagine ai testi revisionati: homepage e Il filo da Notion; Scuola di coaching e Core Quadrant® già rifatte; schede Core, Advanced e Team Coaching arricchite dai programmi dettagliati (i moduli online e le slide Team Coaching sono già nel progetto). Prova: nessun testo segnaposto in nessuna pagina.
4. Archivio immagini e video: repository statico pubblicato da Vercel, catalogo delle foto reali (Core Quadrant, aule, Open Day), video di Ofman e van Doorn, sostituzione di ogni foto stock. Prova: ogni `<img>` del sito punta a un URL permanente.
5. Font: file Afterglow in formato web e decisione sul font del corpo. Prova: titoli renderizzati in Afterglow sulla bozza.
6. Navigazione e collegamenti: menu a scomparsa con il sottomenu Scuola, filtri del calendario su telefono, link incrociati modulo ↔ programma ↔ evento ↔ trainer, accesso all'area riservata nell'intestazione. Prova: ogni pagina raggiungibile in due tocchi da telefono.
7. Moduli Tally: i cinque moduli della sezione 4 con consensi e integrazione Notion; sostituzione dei link JotForm nelle pagine. Prova: una risposta di test compare in Corsisti.
8. Pagina Aziende dalla brochure 2026, in azzurro, con il modulo per le organizzazioni.
9. Pagamenti: risposte della commercialista, account Stripe della SRL, scelta del software di fatturazione con API.
10. Specifiche per Base44 dell'area riservata: tabelle (profili, ruoli, edizioni, eventi, iscrizioni, pagamenti), mappatura campo per campo con Notion, flussi (registrazione, iscrizione con contratto reale, pagamento, sync), prompt separati per area (dati, area riservata, integrazioni, pagamenti). Prova: il documento è sufficiente a Base44 senza domande.

In parallelo, senza bloccare: piano DNS (Wix → Cloudflare o Vercel) con il sottodominio community.ariadne.training, e verifica sulla pagina prezzi di Base44 del piano successivo al Builder.

## Decisioni aperte

Le prime quattro condizionano l'architettura e vanno prese prima del passo 10; le altre possono aspettare la costruzione.

- [ ] Sito pubblico: statico su GitHub e Vercel (consigliato) oppure tutto in Base44?
- [ ] Ingresso nella community: su invito dopo un evento o un'iscrizione (consigliato) oppure registrazione libera?\
\- registrazione libera così intanto le persone possono curiosare e incuriosirsi. Magari è meglio prevedere un'autorizzazione limitata per chi arriva e semplicemente si registra:in questo modo evitiamo che qualche matto pubblichi in bacheca cose indecenti o stalkerizzi gli utenti o faccia danni.
- [ ] Pagamenti online: solo Stripe (con PayPal come metodo interno) oppure anche Satispay?\
\- Se non hanno costi di attivazione, attiviamo tutti e tre
- [ ] Software di fatturazione con API e risposte della commercialista sui corrispettivi.\
\- vorrei attivare sibill.com ma non ancora. Non ho ancora risposta commercialista.
- [ ] Font: Afterglow anche per il corpo del testo, oppure Afterglow per i titoli e Montserrat/Open Sans per il resto? AG+Montserrat/Opensans
- [ ] Ariadne AI nell'area riservata: mantenerlo, rinviarlo o toglierlo? \
\- Togliamo per ora, riprenderemo più avanti
- [ ] Sottodominio dell'area riservata (area., community., my.) e tempi del passaggio DNS da Wix.\
\- sottodominio community. ; tempi 3h
- [ ] Piano Base44 dopo il Builder: dominio personalizzato ed editor AI inclusi? Risposta del 5 novembre: il Builder resta tutto l'anno; lo Starter non ha dominio personalizzato né funzioni backend (vedi «Costo reale» nella sezione 7).
- [ ] Prezzi inventati da me nelle bozze, da sostituire con quelli veri: Team Coaching Program autonomo (ho scritto 3.500 €, early bird 3.150 €) e moduli singoli (Core 1.800 €, Advanced 2.000 €, Team 2.200 €).\
\- non ho capito
- [ ] Testimonianze reali con consenso, al posto delle citazioni segnaposto.\
\- sì e abbiamo anche video interviste
- [ ] Chi opera: Claude sul repository del sito, la segreteria sull'area riservata e su Notion.\
\- ok
- [ ] Instagram: quando entra tra i canali collegati.\
settembre 2027

## Revisione di un esperto webmaster e designer (5 novembre)

Revisione indipendente delle sezioni 1–9, condotta da un revisore che non aveva partecipato alla stesura, con il profilo di un webmaster e web designer senior esperto di siti per piccole organizzazioni formative, UX mobile, SEO tecnica, GDPR e integrazioni Notion, Tally, Stripe e Base44. I punti sono riportati integralmente; le decisioni restano nella sezione 9.
### Giudizio complessivo

L'impianto regge: Notion fonte di verità, flussi a un solo verso, sito statico separato dall'area riservata, prerequisiti con una prova ciascuno. Il rischio principale è il perimetro: il documento cura dove vivono i dati e lascia implicito quanto si costruisce in una volta — 17 pagine, 5 moduli, 10 funzioni dell'area riservata, fatturazione automatica e una community da moderare, con una segreteria senza sviluppatore. Senza fasi datate il progetto si fermerà a metà, con Wix ancora online. Secondo rischio: scelte date per definitive che si contraddicono (ruolo «nel profilo e in Notion»; immagini «su Vercel» con hosting su Cloudflare).

### Da tenere così com'è

- **Notion fonte di verità con flag «Pubblica sul sito»**: segreteria e automazione convivono senza doppio inserimento.
- **Sito statico, area riservata a parte**: velocità, SEO e costo zero.
- **Un solo verso per ogni dato**: regola semplice da difendere.
- **Tally unico strumento, Make e Zapier fuori**: un pezzo in meno da mantenere.
- **Archivio media fuori da Notion**: gli URL dei file Notion scadono davvero dopo un'ora.
- **Stripe per gli importi piccoli, bonifico per i programmi**: proporzionato a volumi e commissioni.
- **Registrazione libera con permessi limitati**: giusto, se si definisce chi approva e quando .

### Da migliorare o ripensare (per impatto)

1. **Perimetro e fasi.** Tutto insieme: una bacheca con venti iscritti sembra morta e la fatturazione dipende da risposte che mancano. Fare: Fase 1 = sito statico, Tally, redirect, calendario, Wix spento; Fase 2 = login, profilo, materiali per coorte, eventi con pagamento, iscrizione col contratto; Fase 3 = bacheca, rate online, percorso ICF. Ogni fase con una data.

2. **Architettura dell'informazione.** Diciassette pagine è la misura giusta; il problema è il primo livello: sette voci più CTA e login, «Il filo di Ariadne» per prima (a un visitatore nuovo dice poco) e le tre pagine community raggiungibili solo da homepage e footer. Fare: cinque voci — Scuola di coaching ▾ · Core Quadrant® · Formazione esperienziale (Training e Workshop) · Community ▾ · Aziende — «Il filo» dentro «Chi siamo», Calendario e login come link di servizio, una sola CTA. Sottomenu Scuola su mobile: accordion a tocco.

3. **Schede corso e conversione.** Colloquio, pre-iscrizione e iscrizione a pari peso dimezzano la conversione; per un programma da 3–5 mila euro la vendita avviene al colloquio. Fare: una regola per fascia. Fino a 150 € → «Paga e partecipa» (Stripe Checkout); moduli singoli e Core Quadrant® → «Iscriviti»; programmi → «Prenota il colloquio» primaria, «Ricevi il programma» (PDF via Brevo) secondaria. Blocco «Prossima edizione» identico su ogni scheda.

4. **Calendario come «vista Notion».** Se è un iframe: niente SEO, dipende da una pagina Notion pubblica. Fare: Astro legge Eventi via API al build e genera una pagina per evento (schema.org/Event) più un `eventi.json`; rebuild quotidiano con Deploy Hook di Cloudflare Pages da una GitHub Action, lo stesso hook dietro «Aggiorna ora»; il check mattutino confronta il JSON con Notion; se l'API tace, il build riusa l'ultimo JSON committato. Posti disponibili calcolati (posti − iscrizioni confermate), mai digitati. Nell'area riservata sync quotidiana e posti riletti al pagamento: due giorni sono troppi.

5. **Tally e GDPR.** Due caselle separate, nessuna preselezionata: privacy obbligatoria con finalità e link, newsletter facoltativa; consenso immagini solo negli eventi. Doppio opt-in: Tally non lo fa e Brevo manca tra le sue integrazioni native (verificato: [tally.so/help/integrations](https://tally.so/help/integrations)); senza Make, il modulo newsletter va fatto col form Brevo (DOI incluso) o via webhook e funzione. Responsabili esterni da elencare nell'informativa: Tally (UE), Notion (USA, Data Privacy Framework), Brevo (UE). Tally crea una riga a ogni invio: far scrivere in un database «Richieste», collegato a Corsisti dalla segreteria.

6. **Area riservata con registrazione libera.** Verifica email e Cloudflare Turnstile; profilo visibile agli altri solo con consenso esplicito; pulsante «Segnala»; regole accettate al primo accesso; SLA di approvazione (due giorni lavorativi); cancellazione account self-service. L'approvazione avviene in Base44, con effetto immediato, e scrive il ruolo in Notion; con la sola sync l'utente aspetta giorni. Servono DPA e regione di hosting di Base44.

7. **Pagamenti e fattura automatica.** Tre chiamate in catena che possono fallire. Fare: Stripe Checkout o Payment Links (PCI minimo); webhook idempotente; la fattura non blocca la conferma: stato «da emettere» con riprova e coda visibile in admin; CF o P.IVA validati prima del pagamento; IVA con Stripe Tax. Sibill: verificare che esponga un'API di fatturazione; Fatture in Cloud ce l'ha documentata.

8. **Archivio immagini e video.** «Repository statico su Vercel» contraddice Cloudflare e il divieto d'uso commerciale del piano Hobby. Fare: Cloudflare R2 (10 GB ed egress gratuiti) su `media.ariadne.training`; nomi file immutabili (nuova versione = nuovo nome); AVIF/WebP con fallback JPEG, `srcset` a tre larghezze, lato lungo ≤ 1.600 px; `loading="lazy"` e `width`/`height` sempre; video YouTube o Vimeo con facade click-to-load e `youtube-nocookie.com`.

9. **SEO e redirect da Wix.** Assente; decide se il sito parte da zero. Fare: sitemap Wix e dati Search Console; mappa di ogni URL vecchio su uno nuovo (Core Quadrant® posiziona quasi certamente più di tutto: stesso slug o 301); `_redirects` su Pages; 404 personalizzata; canonical, sitemap, robots; Search Console verificata via DNS prima del cambio; dati strutturati Course ed Event. Attendersi 2–6 settimane di oscillazione.

10. **Performance, accessibilità, font.** Filo animato e caroselli: `prefers-reduced-motion`; il carosello degli 8 strumenti diventa griglia. Contrasto: «bold colorato» su bianco con arancio #df7a4a (≈3:1), verde #9ec165 (≈2:1), azzurro #67b2e2 (≈2,3:1) fallisce WCAG AA per il testo; usarli come sfondi con testo scuro o scurirli. Afterglow: «.woff2 da fornire» suggerisce una licenza desktop; convertire e pubblicare viola di norma l'EULA, e la Web Font License si compra a parte (es. [youworkforthem.com](https://youworkforthem.com/font/T9465/afterglow), da verificare quale Afterglow sia). Comprare la licenza web o fissare Playfair Display; `font-display: swap` e fallback con `size-adjust` contro il FOUT.

11. **Analytics e cookie.** Assenti. Fare: Cloudflare Web Analytics o Plausible, senza cookie e senza banner; YouTube con nocookie e click-to-load; nessun pixel Meta o LinkedIn in Fase 1, che imporrebbe banner con blocco preventivo (Garante 2021) e cookie policy.

12. **Manutenzione e bus factor.** Senza Claude nessuno tocca il sito. Fare: contenuti in Markdown/JSON con Decap CMS o Pages CMS (gratuiti), così la segreteria cambia un prezzo da sola; `RUNBOOK.md` con le dieci operazioni ricorrenti; account intestati alla SRL con 2FA e password manager; GitHub sync di Base44 come uscita.

### Cosa manca del tutto

- Piano redirect e pagina 404.
- Inventario dei record DNS su Wix (MX, SPF, DKIM, DMARC di segreteria@): spostare i nameserver senza ricopiarli ferma la posta; TTL abbassati una settimana prima.
- Cookie policy; informative distinte per sito e area riservata; condizioni di vendita online con recesso; regole della community.
- Email transazionali (conferma, ricevuta, reset password): chi le manda e da quale dominio.
- Backup ed export (Notion, Base44 via GitHub sync, Stripe); ownership di account e credenziali.
- Staging: anteprima protetta su Pages; Base44 con chiavi Stripe test.
- Piano di test: checklist per pagina su telefono; flussi end-to-end con pagamento da 1 €.
- Chi approva le modifiche e in quanto tempo; criteri di «fatto» (nessun segnaposto, 301 verificati, moduli testati, Lighthouse mobile ≥ 90, Search Console attiva).
- Data di lancio; monitoraggio di uptime e webhook falliti.

### Statico + Base44 oppure tutto in Base44

Confermo l'ibrido. Base44 rende le pagine nel browser con metadati limitati: per 17 pagine da posizionare è un handicap strutturale. Costi: Cloudflare Pages a zero; il listino Base44 ([base44.com/pricing](https://www.base44.com/pricing)) dà Builder a 40 $/mese annuale e Starter a 16 $/mese con dominio personalizzato ma senza GitHub sync. Lock-in: il sito statico è HTML in un repository e lo serve chiunque; l'uscita da Base44 è il GitHub sync, da Builder in su. Manutenzione: senza Claude nessuna via è self-service; il CMS git-based aiuta solo il sito. «Builder solo per costruire» va verificato dopo un mese: le funzioni backend consumano crediti di integrazione (Starter 2.000/mese, Builder 10.000) e la pagina prezzi tace su cosa si perde con il downgrade. Contro il cambio in corsa: fissare per iscritto le interfacce (schema Notion, URL media, webhook Stripe), così l'area riservata può passare a Supabase+Astro o Softr senza toccare il resto.

Nota di Claude: sul dominio personalizzato nel piano Starter le fonti discordano (il revisore lo dà incluso leggendo la pagina prezzi; le guide di luglio e settembre 2026 lo escludono). Il punto decisivo resta uguale in tutte le fonti: le funzioni backend partono dal Builder. Da verificare direttamente sulla pagina prezzi prima di sottoscrivere.

### Tre cose da fare nelle prossime due settimane

1. **Crawl del sito Wix, export Search Console, inventario DNS** → tabella redirect e piano DNS con TTL abbassati. Mezza giornata.
2. **Prototipo Notion → sito**: database Eventi e flag «Pubblica»; un Astro minimo che genera calendario e una scheda corso dai record, con rebuild schedulato. Dimostra la catena prima di scrivere una riga per Base44.
3. **Un solo giro delle questioni bloccanti esterne**: commercialista (corrispettivi e fattura), licenza web di Afterglow, informative e condizioni di vendita, analytics senza cookie.
