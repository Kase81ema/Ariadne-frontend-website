# Ariadne Website — Contesto progettuale per Claude Design

## Chi è Ariadne

Ariadne SRL è una scuola italiana di coaching creativo-esperienziale con sede a Milano (Via Pietro Paleocapa, 7). Tre partner fondatori che sono anche i trainer principali:

- **Arianna Perrone** — Master Certified Coach ICF, 2500+ ore certificate, 18 anni in azienda HR, facilitatrice Lego® Serious Play® e Sikkhona®
- **Emanuele Ciccarelli** — Integral Coach™, fondatore LABORINTUS, trainer Kaospilot, facilitatore LSP e Disegno Onirico Bermolen-Dal Porto™
- **Emanuele Casero** — Professional Certified Coach ICF, opera tra Italia e Svizzera, specializzato in team coaching e sviluppo organizzativo

Ariadne è l'unica scuola italiana autorizzata da Core Quality International (Daniel Ofman) a erogare la certificazione Core Quadrant® delle Qualità Autentiche.

---

## Posizionamento strategico — cosa sta diventando Ariadne

Il sito è in fase di riposizionamento: da "scuola di coaching" a **ecosistema formativo** con tre anime:

**Anima 1 — La Scuola.** Percorso strutturato verso le credenziali ICF (ACC, PCC, ACTC), con un modello di business annuale che include formazione + kit esperienziale + laboratori + community + tutoring + sconti.

**Anima 2 — Il Training.** Formazione esperienziale (Lego® Serious Play®, Kaospilot Masterclass, Core Quadrant® aziendale) per individui e organizzazioni.

**Anima 3 — Il Core Quadrant®.** Certificazione internazionale Ofman, autonoma, con doppia versione individuale e aziendale.

---

## Struttura del sito — 18 pagine consumer

### Menù principale
L'approccio · Scuola (con sotto-menù) · Core Quadrant® · Training · Workshop · Calendario · Aziende →

### Mappa pagine completa

**Hub e pagine principali:**
- `homepage.html` — Hub principale, riflette le voci del menù
- `approccio.html` — Chi siamo, l'approccio creativo-esperienziale, i 4 valori, i trainer, le partnership ICF e CQI, citazione Thurman
- `scuola.html` — **CUORE del sito** — Proposta di valore annuale: kit esperienziale, laboratori inclusi, community, tutoring, sconti. Tre percorsi in sintesi + link alle sotto-pagine
- `core-quadrant.html` — Certificazione Ofman, 4 concetti (Core Quality, Trappola, Sfida, Allergia), colore VIOLA
- `training.html` — Hub formazione esperienziale, doppio target individuo/azienda, card LSP/Kaospilot/CQ
- `workshop.html` — Workshop brevi divisi in "Per tutti" e "Per coach"
- `calendario.html` — Hub eventi con filtri per tipo

**Sotto-pagine Scuola:**
- `il-tuo-percorso.html` — Diagramma verticale a cubotti-freccia dei 3 percorsi ICF
- `coaching-atelier.html` — Community (in arancio, non verde)
- `laboratori.html` — Lab online mensili e in presenza trimestrali
- `webinar.html` — Presentazioni corsi e testimonianze registrate

**Pagine dettaglio moduli formativi:**
- `core-coaching.html` — Modulo base ICF Level 1 (arancio #df7a4a)
- `advanced-coaching.html` — Modulo avanzato (rosso #d33935)
- `team-coaching.html` — Modulo team (verde #9ec165)

**Sotto-pagine Training:**
- `training-lsp.html` — Lego® Serious Play® certificazione facilitatore
- `training-kaospilot.html` — Kaospilot Masterclass | Learning Design

**Altre:**
- `area-riservata.html` — Landing pre-login alumni (nel footer)

---

## Brand system — regole visive definitive

### Palette colori (confermata da Silvia, grafica del brand)

**Colori dei cubotti del logo:**
- Arancio: `#df7a4a` (colore firma Ariadne, usato per Core Coaching e mondo Atelier)
- Rosso: `#d33935` (Advanced Coaching, Percorso 2)
- Magenta: `#d95d84`
- Verde chiaro: `#d4d965`
- Verde scuro: `#9ec165` (Team Coaching)
- Viola: `#655a9c` (Core Quadrant®, Training, sfondi istituzionali)
- Azzurro: `#568dc1` (riservato all'area Aziende)
- Cyan: `#67b2e2` (riservato all'area Aziende)

**Colori di sfondo:**
- Bianco puro: `#FFFFFF` — usare come sfondo principale, alternato con panna per dare ritmo
- Panna caldo: `#FBF8F2` — scalda il sito, NON eliminare ma usare meno che nelle versioni precedenti dove era troppo dominante
- Crema: `#F5EFE3` — per blocchi di approfondimento e sezioni di stacco
- Viola brand: `#655a9c` — per sfondi istituzionali (footer, blocchi CQ, blocchi Training, "Cosa intendiamo per creativo-esperienziale")

**Colori testo:**
- Ink principale: `#1F1813`
- Ink morbido: `#5A4A3D`
- Ink muto: `#9C8B7B`

### Tipografia

**IMPORTANTE:** Il sito attuale ariadne.training usa questa gerarchia tipografica:
- **Afterglow** — per titoli principali e testi "strillati" (font decorativo serif). Usato in stile regular, NON italic. Se non disponibile come web font, usare **Playfair Display** come placeholder
- **Montserrat** — per sottotitoli, navigazione, label, badge, bottoni
- **Open Sans** (o simile) — per corpo del testo, paragrafi, descrizioni

**Regole tipografiche:**
- NO corsivi nei titoli (mai). Usare solo colore e bold per evidenziare le parole chiave
- NO punto finale nei titoli
- Evidenziare parole chiave nei testi lunghi con bold colorato per facilitare la lettura veloce

### Elementi grafici

- **Cubotti del logo** — sono l'elemento identitario principale. Usati come marcatori semantici, texture di sfondo (in outline), e come base per il diagramma dei percorsi
- **Border-radius card:** 16px
- **Border-radius bottoni:** 6px (squadrati con curva accennata, non pill)
- **Foto trainer:** quadrate con angoli stondati 16px (NON tonde)
- **NO forme decorative generiche** (cerchi, ovali) negli hero — usare solo elementi derivati dal cubotto (archi, outline)

### Codifica colori per area

| Area | Colore | Uso |
|---|---|---|
| Core Coaching | Arancio #df7a4a | Hero, bordi, accenti |
| Advanced Coaching | Rosso #d33935 | Hero, bordi, accenti |
| Team Coaching | Verde #9ec165 | Hero, bordi, accenti |
| Core Quadrant® | Viola #655a9c | Hero, bordi, accenti, 4 concetti |
| Training | Viola #655a9c | Hero, card |
| Coaching Atelier | Arancio #df7a4a | Hero, tutto il mondo community è ARANCIO |
| Laboratori Ariadne | Arancio #df7a4a | Coerente col mondo community |
| Aziende (futuro) | Azzurro #568dc1 | Riservato |
| Percorso 1 (PCP) | Arancio #df7a4a | Card percorso |
| Percorso 2 (PTCP) | Verde #9ec165 | Card percorso |
| Percorso 3 (CCE) | Rosso #d33935 | Card percorso |

---

## Terminologia — regole definitive

- **"Program"** si usa SOLO per i percorsi completi: Professional Coaching Program, Professional Team Coaching Program
- I singoli moduli si chiamano solo: **Core Coaching**, **Advanced Coaching**, **Team Coaching** (senza "Program")
- **"Percorso"** si usa per il percorso evolutivo del partecipante
- **"Tragitto"** NON si usa MAI da nessuna parte
- **"Metodo"** sostituito con **"Approccio"** quando ci si riferisce alla modalità di erogazione (es. "l'approccio creativo-esperienziale"). "Metodo" resta valido quando si parla del metodo di Daniel Ofman (Core Quadrant)
- **"Atelier"** da solo NON si usa — sempre **"Coaching Atelier"** per evitare equivoci
- **"Laboratori Ariadne"** è il nome definitivo (non "Lab", non "Ariadne's Lab")

---

## I tre percorsi — struttura dei diagrammi

### Percorso 1 — Professional Coaching Program
**Livello 1:** Core Coaching → Mentoring → Esame → ACC
**Livello 2:** Advanced Coaching → Mentoring → Esame → PCC

### Percorso 2 — Professional Team Coaching Program
Core Coaching → Team Coaching → Mentoring → Esame → ACTC

### Percorso 3 — Coaching Creativo Esperienziale (senza credenziali ICF)
Core Coaching → Advanced e/o Team Coaching → Competenze di leadership

Il diagramma è **verticale** (scrollabile da mobile), con cubotti colorati che hanno una **punta sotto** (freccia) che si incastra in un **incavo** (ricevente) del cubotto successivo. Ogni cubotto è cliccabile e porta alla pagina dettaglio del modulo.

---

## Modello di business annuale — la proposta di valore della Scuola

Per ogni annualità (Core Coaching, Advanced Coaching, Team Coaching), il partecipante riceve:
1. La formazione del modulo (ore ICF)
2. Il **kit esperienziale** fisico: dadi narrativi, carte per metafore, playlist per il lavoro in aula, mappe cognitive, materiali per il disegno onirico, guida strumenti e bibliografia
3. Accesso ai **Laboratori Ariadne** di approfondimento (inclusi per l'anno)
4. Accesso al **Coaching Atelier** (incluso per l'anno)
5. Esperienze **P2P** e **tutor/buddies** a supporto
6. **Sconti** workshop extra

---

## Prezzi

- Core Coaching: €3.200 pieno / €2.900 early bird + IVA
- Team Coaching: €3.200 pieno / €2.900 early bird + IVA
- Professional Coaching Program (Percorso 1 completo): €5.500 pieno / €4.950 early bird + IVA
- Advanced Coaching: pilota 2026, prezzo in co-costruzione con i partecipanti
- Core Quadrant®: €1.890 + IVA (prezzo fisso, no early bird)

**Form early bird:** 2 campi (nome + email), CTA "Blocca il prezzo early bird →", nota "Ti contatteremo appena apriranno le iscrizioni confermandoti la tariffa early bird. Zero pressione.", conferma "Grazie, ci siamo."

---

## Tono di voce — regole fondamentali

- **Relazionale, mai promozionale.** Scrivere come se si continuasse una conversazione già iniziata, non come un funnel di vendita
- **Diretto, non urgente.** Nessuna scarcity forzata, nessun conto alla rovescia, nessun "solo 3 posti rimasti"
- **Onesto anche quando costa.** Se un programma non è adatto, lo diciamo. "Se sei ancora in fase di esplorazione, ha più senso iniziare dal Core Coaching"
- **Seconda persona singolare** (tu, non voi)
- **Anti-pattern:** urgency, scarcity forzata, pressione, linguaggio guru, consulenziale
- La frase ancora del brand: "Fa già parte del modo in cui lavoriamo"
- La frase sul ritmo: "Il tempo tra X e Y è tuo"

---

## Citazione identitaria (intoccabile)

"Non chiederti di cosa ha bisogno il mondo. Chiediti piuttosto cosa ti rende vivo, vai e realizzalo. Perché ciò di cui il mondo ha bisogno sono persone che realizzino ciò che le rende vive." — Howard Thurman

Questa citazione appare in homepage e nella pagina L'approccio. Non va mai modificata, tradotta o abbreviata.

---

## Pattern di design validati (da mantenere e migliorare)

- **Blocchi colorati saturi** per i programmi — gradient del colore di area come sfondo hero. Sono identità di brand riconoscibili dalla brochure, non si toccano
- **Sticky scroll asimmetrico** — testo a sinistra che scorre, foto a destra che resta sticky. Usato per "Come lavoriamo" in homepage e "Come si lavora" nelle pagine modulo
- **Fade-in progressivo** con IntersectionObserver — gli elementi entrano con opacity + translateY quando scrollano nel viewport
- **Parallax leggero** — max 10-15px di movimento, non appariscente
- **Alternanza sfondi** bianco/panna/crema/viola per dare ritmo alla pagina
- **Divisione 50/50** — usata con parsimonia come "momento di respiro" (foto grande a metà, titolo grande dall'altra metà)
- **Foto grandi e centrali** — le immagini devono avere peso e presenza, non essere decorative. Ariadne è un'attività esperienziale e le foto fanno molto
- **Citazione Thurman** — blocco contemplativo su crema deep, serif grande, virgolette arancio. NON modificare con immagini di sfondo o effetti

---

## Feedback di Silvia (grafica del brand) — decisioni prese

Dalla revisione di Silvia sono state accettate e applicate queste decisioni:
- Palette aggiornata ai codici esadecimali originali del brand
- Font: Afterglow per titoli, Montserrat per nav/sottotitoli, Open Sans per corpo
- Corsivi rimossi dai titoli (solo colore e bold per evidenziare)
- Punti finali rimossi dai titoli
- Forme decorative (cerchi/ovali) rimosse dagli hero
- Foto trainer quadrate con angoli stondati (non più tonde)
- Footer su sfondo viola brand
- Frase footer: "La scuola italiana di coaching professionale ICF dove l'approccio si impara sperimentando"
- Core Quadrant® in viola (non più azzurro)
- Percorso 2 in rosso (non più azzurro)
- Advanced Coaching aggiunto nella pagina Il tuo percorso

**Suggerimenti di Silvia ancora da implementare/valutare:**
- Cubotti in outline come motivo grafico di sfondo nelle sezioni bianche (serve SVG)
- Loghi ufficiali ICF e Core Quality International nelle partnership
- Schema grafico dei cubotti/valori come nella brochure
- Foto Ofman nella pagina Core Quadrant®
- Cornici colorate cubotto sulle foto trainer (come nella brochure)

---

## Sede e contatti

Ariadne SRL · Via Pietro Paleocapa, 7 · 20121 Milano
P.IVA 11640010960
Tel. +39 339 272 4113
Email: info@ariadne.training
Web: ariadne.training

**Venue formazione:**
- Team Coaching: Spazio Cascina Ovi, Segrate (MI)
- Core Quadrant®: NTT Data, Milano (metro Romolo M2)

---

## Stato attuale del file allegato (v10)

Il file ZIP contiene 18 pagine HTML + CSS + JS + asset grafici. La struttura informativa è corretta e validata. **Il design grafico necessita di miglioramento significativo** — le pagine sono funzionali come template ma non sono ancora al livello di qualità visiva del sito attuale ariadne.training. In particolare:

- Le immagini sono poche e non abbastanza centrali
- Il ritmo visivo (alternanza blocchi, respiri bianchi, 50/50) è da raffinare
- I cubotti come elemento decorativo di sfondo non sono ancora implementati
- Il font Afterglow va caricato come web font (al momento c'è Playfair Display come placeholder)
- Le pagine nuove (scuola, training, laboratori, webinar, training-lsp, training-kaospilot) hanno bisogno di maggiore cura grafica
- Il diagramma a cubotti-freccia nella pagina "Il tuo percorso" è funzionale ma graficamente da rifinire

**L'obiettivo del passaggio a Design è portare la qualità visiva al livello del sito attuale ariadne.training mantenendo la nuova struttura informativa.**
