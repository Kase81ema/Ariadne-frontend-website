# Notion «Gestione scuola» — database, ID e convenzioni

Workspace Notion di Ariadne SRL, account `segreteria@ariadne.training`, piano Pro. È la fonte di verità per dati, testi e voce del nuovo sito e dell'area riservata (documento di specifiche, sezione 4). Questa guida riassume come lavorarci con Claude; gli esempi con dati personali sono stati sostituiti da segnaposto.

## Database esistenti

| Database | Data Source ID | Uso |
| --- | --- | --- |
| Corsisti | `5f70433b-0c96-48bf-b43f-e5f813794bf6` | Anagrafica contatti, alumni, lead (arrivano da Tally) |
| Edizioni | `996ea2c5-2312-4e47-800b-e45b11232e58` | Corsi attivi e storici |
| Iscrizioni | `1433ada2-7237-433d-a552-7187330262f5` | Legame Corsista ↔ Edizione |
| Pagamenti | `4515ba41-a5a5-4182-913c-c99c744f4c65` | Rate, fatture, incassi |
| Percorsi | `9b551b2b-d53d-448d-8ee5-7aeea9ca7db1` | Core Coaching, Team Coaching, Core Quadrant®, Advanced |
| Abbonamenti Software | `a4a70dbe-9135-4954-a733-58c384050233` | SaaS, rinnovi, costi |

Database da creare per il sito e la community (task 0.4 del piano): Contenuti sito, Eventi, Persone pubbliche, Testimonianze, Richieste. Campi da aggiungere: su Percorsi prezzo, early bird, prerequisiti, ore, livello ICF, «Pubblica sul sito», slug; su Edizioni posti, stato iscrizioni, link Tally, «Pubblica sul sito»; su Corsisti ruolo community e accesso area riservata.

## Campi del database Corsisti

```
Nome                 → testo (titolo)
Cognome              → testo
Email                → email
Telefono             → testo
Città                → testo
Stato relazione      → select: Da ricontattare | In contatto | Iscritto attivo | Alumnus | Non più attivo
Tipo persona         → multi-select, es. ["Partecipante"]
Fonte primo contatto → select: Form sito | Referral | Evento dal vivo | Webinar | Social | Email diretta | Altro
Interessato a        → multi-select: Core Coaching Program · Team Coaching Program · Core Quadrant® ·
                       Advanced Coaching · Professional Coaching Program completo · Visual Coaching ·
                       LSP Coaching · Teen Coaching · Parent Coaching · Non so ancora
Consenso GDPR        → Sì | No
Note libere          → testo
Data primo contatto  → data (YYYY-MM-DD)
Messaggio dal form   → testo
```

Regola già decisa: la provenienza di un contatto (webinar, evento, form) resta distinta dal ruolo o stato attuale, così si sa sempre da dove è arrivato.

## Operazioni tipiche

- **Cercare un record**: ricerca Notion con `data_source_url = collection://[data_source_id]`.
- **Aggiungere un contatto**: creare una pagina in Corsisti con i campi sopra (esempio: Nome, Cognome, Email, Telefono, Stato relazione «Da ricontattare», Tipo persona ["Partecipante"], Interessato a [...], Consenso GDPR «Sì»).
- **Aggiornare un record**: cercare la pagina per ottenere il `page_id`, poi aggiornare le proprietà (es. Note libere, Stato relazione).
- **Creare un'iscrizione**: pagina in Iscrizioni con `ID iscrizione` (es. `CC2-Cognome`), relazione a Corsisti e a Edizioni (URL Notion), Stato iscrizione «Confermato», Modalità pagamento «Rate» o «Unica soluzione», Numero rate, Note iscrizione.
- **Aggiungere una rata**: pagina in Pagamenti con Riferimento (es. `CC2-Cognome R1`), Importo, relazione all'iscrizione, Data scadenza, Stato pagamento (Da fatturare | Fattura inviata | Incassato | Scaduto), Numero rata.

## Edizioni 2026 (storiche; il calendario 2027 va creato)

| Codice | Corso |
| --- | --- |
| CC-2026-Ed1 | Core Coaching Ed. 1 |
| CC-2026-Ed2 | Core Coaching Ed. 2 |
| TC-2026-Ed1 | Team Coaching Ed. 1 |
| TC-2026-Ed2 | Team Coaching Ed. 2 |
| CQ-2026-Ed1 | Core Quadrant Ed. 1 |

## Note operative

- Le relazioni si passano come array di URL Notion: `["https://app.notion.com/p/[id-senza-trattini]"]`.
- I multi-select si passano come array JSON: `["Core Coaching Program", "Core Quadrant®"]`.
- Le date in formato `YYYY-MM-DD`; le email devono essere valide.
- Il campo «Aree di interesse» (rich text) resta vuoto: è riservato ai valori grezzi dei moduli.
- Il «Prezzo edizione» attuale non è affidabile: il compenso dei trainer e i ricavi si calcolano sulle rate imponibili delle iscrizioni.
- Limiti noti dell'integrazione: le opzioni dei campi di tipo Status si creano o rinominano solo dall'interfaccia Notion; l'ordine delle colonne e i raggruppamenti per Status si sistemano solo a mano; i filtri sulle proprietà di tipo Persona non si impostano via API.
