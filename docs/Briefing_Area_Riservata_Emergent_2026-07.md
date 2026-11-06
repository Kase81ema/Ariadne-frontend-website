# Area riservata Ariadne costruita con Emergent — briefing di continuità (4 luglio 2026)

Documento di passaggio sull'area riservata realizzata con Emergent, repository GitHub `Kase81ema/Ariadne`. Nel piano di novembre 2026 questa base resta come mappa delle funzioni e del modello dei dati per l'area riservata da costruire in Base44 (task 3.1); il repository va archiviato in sola lettura (task 0.3). I prezzi e le date qui sotto sono quelli del luglio 2026 e vanno riletti da Notion.

## 1. Stato dell'app al 4 luglio 2026

- Frontend `frontend/src/`: React + Tailwind + Radix UI + Shadcn. Backend `backend/server.py` + `backend/school_routes.py`: FastAPI + MongoDB. Deploy su Emergent.ai con Vercel.
- Fatto: rimosso lo «Studio comunicazione»; menu in tre gruppi («Il mio spazio»: Home, Il mio percorso, Materiali; «Scopri»: Percorsi formativi, Bacheca, Eventi, Ariadne AI; «Gestione»: solo admin, 6 voci); profilo con dati personali e di fatturazione (`ProfilePage.js`); le mie iscrizioni e rate (`MyEnrollmentsPage.js`); wizard di iscrizione in 6 passi: dati, motivazione, pagamento, contratto click-wrap, documenti, conferma (`EnrollmentWizardPage.js`); amministrazione iscrizioni con pipeline, operatività e pagamenti (`AdminEnrollmentsPage.js`); comunicazioni admin (`AdminCommsPage.js`); 7 endpoint backend per le iscrizioni (`POST/GET/PUT /school/enrollments`, `/contract`, `/documents`, `/confirm`, `GET /admin/enrollment-pipeline`).
- Da fare (mai completato): contenuti reali dei corsi e dei trainer, storia corretta di Ariadne, rimozione di testimonial e foto stock, prezzi corretti, separazione del catalogo tra percorso ICF e corsi di arricchimento, widget «prossimo passo» in Home, collegamenti tra pagine, prerequisiti visibili, tono dei testi, sincronizzazione con Notion (i dati restano in MongoDB), testo reale del contratto nel passo 4 del wizard.

| File | Ruolo |
| --- | --- |
| `Layout.js` | Sidebar, menu, navigazione |
| `App.js` | Definizione delle route |
| `api.js` | Tutti gli endpoint API lato frontend |
| `CommunityDashboardPage.js` | Home utente con mini-onboarding |
| `TrainingCoursesPage.js` | Catalogo corsi (con tab admin) |
| `CourseDetailPage.js` | Scheda corso (dati scritti nel codice) |
| `WelcomePage.js` | Landing del primo accesso (dati inventati) |
| `MyJourneyPage.js` | Tracciamento credenziali ICF e corsi |
| `EnrollmentWizardPage.js` | Wizard iscrizione in 6 passi |
| `ProfilePage.js` | Profilo personale e fatturazione |
| `MyEnrollmentsPage.js` | Le mie iscrizioni e rate |
| `school_routes.py` | Backend: endpoint della scuola |

## 2. Dati reali raccolti nel luglio 2026

**Trainer**

- Arianna Perrone — co-fondatrice e trainer. MCC ICF, oltre 2.500 ore di coaching; formatrice esperienziale su soft skill e intelligenza emotiva; facilitatrice certificata Lego® Serious Play® e Sikkhona®; 18 anni in azienda come responsabile sviluppo risorse umane; docente in master universitari e business school.
- Emanuele Ciccarelli — co-fondatore e trainer. PCC ICF, Integral Coach; co-creatore dell'approccio creativo-esperienziale; facilitatore certificato Lego® Serious Play®, Kaospilot; trainer nei percorsi Core Coaching, Team Coaching e Core Quadrant.
- Emanuele Casero — co-fondatore. PCC ICF; coach e imprenditore, sviluppo strategico della scuola e progettazione dei percorsi; trainer nei progetti aziendali.

**Percorso credenziali ICF**

- Core Coaching Program (Level 1 → ACC): 2.900 € rateizzabili 30/35/35; circa 6 mesi, 8 giornate in presenza più moduli online; massimo 15 partecipanti; trainer Perrone e Ciccarelli; nessun prerequisito.
- Professional Coaching Program (Level 2 → PCC): circa 10 mesi, 65 ore di formazione specifica; prerequisito un programma Level 1 ICF.
- Team Coaching Program (→ PCC e ACTC): 2.900 €; circa 6 mesi, 65 ore, moduli in presenza e 11 moduli online; contenuti: cinque discipline di Hawkins, Core Quadrant di team, Cynefin, Kantor; prerequisito un programma Level 1 ICF.

**Arricchimento e specializzazione**

- Core Quadrant® Pro Training (certificazione Daniel Ofman): 1.795 € nel 2026; 2 giornate consecutive più una di follow-up a sei settimane; NTT Data, Milano; massimo 12; Ariadne è l'unico partner italiano di Core Quality International.
- Visual Coaching: 20 ore, trainer Melissa Parrinello ed Emanuele Ciccarelli, massimo 8.
- Teen Coaching: 16 ore, massimo 12.
- Advanced Coaching (Level 3, sperimentale): prerequisito PCC o equivalente.

**Eventi**: webinar di presentazione dei corsi; Open Day in presenza a Cascina Ovi; Welcome Day di settembre; laboratorio mensile online per corsisti e alumni; laboratorio trimestrale in presenza; Coaching Atelier e Apericoaching mensili aperti alla community.

**Storia**: 2018 incontro tra Arianna Perrone ed Emanuele Ciccarelli; 2021 nasce Ariadne, scuola di coaching creativo-esperienziale; 2024 entra Emanuele Casero; 2025 nasce Ariadne SRL.

## 3. Tono di voce (estratto dai post reali)

Rivelatorio e accanto al lettore; frasi come «se senti che potrebbe essere il momento giusto per te», «porta con te le tue domande», «ci sarà spazio per ascoltarle». Mai «non perdere», «iscriviti ora», «offerta imperdibile», «mindset», «resilienza», «sbloccarti». Racconto personale senza archi narrativi performativi; la postura ICF è incarnata nel tono, mai nominata. Esempi: «Ariadne non è nata da un business plan. È nata da una serie di incontri.» · «Nel coaching la creatività non è una tecnica (un fare), ma un'attitudine (un essere): la creatività è nella relazione.»

## 4. Decisioni architetturali prese nel luglio 2026

- Catalogo in due aree: percorso coaching ICF (Core, Professional, Team, sequenziale con prerequisiti) e corsi di arricchimento (Core Quadrant®, Visual Coaching, Teen Coaching, Advanced). Ogni scheda mostra prerequisiti, a chi si rivolge e cosa si ottiene.
- Widget «prossimo passo» in Home in base allo stato: nuovo → esplora i percorsi; interesse registrato → completa l'iscrizione; iscritto → prossima sessione; rata in scadenza → promemoria.
- Collegamenti tra pagine: catalogo → profilo; Il mio percorso → iscrizioni; iscrizioni → scheda corso; wizard con dati precompilati dal profilo.
- Contratto di iscrizione: documento Word completo (19 articoli, caparra confirmatoria, recesso 14 giorni, clausole vessatorie, firma click-wrap), file `Ariadne_Contratto_Iscrizione_Privati.docx`, da inserire nel passo 4 del wizard.

## 5. Notion

Database del workspace «Gestione scuola» e convenzioni: vedi `Notion_Gestione_scuola_guida.md`. La sincronizzazione con Notion non è mai stata attivata: nel nuovo impianto è prevista in Base44 con funzione schedulata (task 3.3 del piano).
