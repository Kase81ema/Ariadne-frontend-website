# Pacchetto di passaggio · sito e community Ariadne

Questa cartella contiene tutto ciò che serve per riprendere il progetto del nuovo sito e della community Ariadne da un altro account Claude o da un'altra persona, senza dipendere da chat, artefatti o memoria di un account specifico. Aggiornata il 6 novembre 2026.

## Da dove ripartire, in ordine

1. **`Piano_lavoro_sito_Ariadne.html`** — il piano di lavoro: 5 fasi, 30 task, sottotask, dipendenze, Gantt. Si apre nel browser; lo stato si salva nel browser e si incorpora nel file con «Salva file aggiornato». I dati stanno in un unico blocco JSON (`<script id="pm-data">`) in fondo al file: Claude può aggiornarli direttamente nel repository.
2. **`Ariadne_Specifiche_Sito_Community_2026-11-05.md`** — il documento di specifiche: punto della situazione, identità visiva e voce, pagine e origine dei contenuti, Notion come fonte di verità, area riservata, pagamenti, architettura tecnica e costi, lavoro da fare, decisioni, revisione dell'esperto (sezione 10).
3. **`Revisione_esperto_sito_2026-11-05.md`** — la revisione indipendente del documento, da sola.
4. **`../CONTEXT.md`** — regole di brand, palette, font, terminologia, tono di voce. Vale per ogni pagina e per l'area riservata.
5. **`../drafts/2026-11/`** — le tre pagine ridisegnate a novembre 2026 (Scuola di coaching v4, Core Quadrant® v2, Il filo di Ariadne v1): sono il riferimento di stile e contenuto più recente, da integrare nel sito nella task 2.2 del piano. Le pagine omonime nella radice del repository sono la versione di giugno 2026, con header e footer condivisi.

## Gli altri file

| File | Cosa contiene | Quando serve |
| --- | --- | --- |
| `Contesto_Design_Scuola.md` | Struttura e regole della pagina Scuola di coaching per lavorarci in Claude Design | Task 2.2 |
| `Prompt_Design_Pagina_Scuola.md` | Prompt pronto per Claude Design sulla pagina Scuola | Task 2.2 |
| `Briefing_Area_Riservata_Emergent_2026-07.md` | Stato dell'area riservata costruita con Emergent (repository `Ariadne`), dati reali raccolti, decisioni architetturali | Task 3.1 |
| `Notion_Gestione_scuola_guida.md` | Database Notion esistenti, ID, campi e convenzioni per lavorarci con Claude | Task 0.4, 1.2, 3.1, 3.3 |
| `Messaggio_Freelance_Frontend.md`, `Fiverr_Message_EN.md` | Brief per un eventuale freelance frontend (oggi opzionale: il sito lo costruisce Claude) | Decisione 0.7 |

## Cosa resta fuori da questa cartella

- Le foto e i video: stanno nella cartella «Website Ariadne / Materiale foto video website Ariadne» sul computer di Emanuele e andranno nell'archivio media (task 1.3).
- I testi revisionati di homepage e Il filo di Ariadne: stanno in Notion «Gestione scuola» e diventeranno record del database Contenuti (task 0.4 e 1.1).
- I programmi dettagliati dei moduli (PDF dei moduli online e slide Team Coaching): nel Project Claude «Ariadne» e nella cartella Website Ariadne.
- L'area riservata Emergent: repository GitHub `Kase81ema/Ariadne`, da archiviare come riferimento (task 0.3).

## Come si pubblica il sito oggi

Ogni push su `main` viene pubblicato da Vercel sul progetto «Ariadne · v10» (dominio non collegato). La destinazione prevista è Cloudflare Pages con il dominio ariadne.training (task 2.6 del piano); fino ad allora Vercel serve solo come anteprima.
