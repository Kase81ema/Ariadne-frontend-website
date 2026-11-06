# Revisione esperta — Specifiche sito e community Ariadne (5 nov 2026)

## 1. Giudizio complessivo

L'impianto regge: Notion fonte di verità, flussi a un solo verso, sito statico separato dall'area riservata, prerequisiti con una prova ciascuno. Il rischio principale è il perimetro: il documento cura dove vivono i dati e lascia implicito quanto si costruisce in una volta — 17 pagine, 5 moduli, 10 funzioni dell'area riservata, fatturazione automatica e una community da moderare, con una segreteria senza sviluppatore. Senza fasi datate il progetto si fermerà a metà, con Wix ancora online. Secondo rischio: scelte date per definitive che si contraddicono (ruolo «nel profilo e in Notion»; immagini «su Vercel» con hosting su Cloudflare).

## 2. Da tenere così com'è

- **Notion fonte di verità con flag «Pubblica sul sito»**: segreteria e automazione convivono senza doppio inserimento.
- **Sito statico, area riservata a parte**: velocità, SEO e costo zero.
- **Un solo verso per ogni dato**: regola semplice da difendere.
- **Tally unico strumento, Make e Zapier fuori**: un pezzo in meno da mantenere.
- **Archivio media fuori da Notion**: gli URL dei file Notion scadono davvero dopo un'ora.
- **Stripe per gli importi piccoli, bonifico per i programmi**: proporzionato a volumi e commissioni.
- **Registrazione libera con permessi limitati**: giusto, se si definisce chi approva e quando (punto 6).

## 3. Da migliorare o ripensare (per impatto)

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

## 4. Cosa manca del tutto

- Piano redirect e pagina 404.
- Inventario dei record DNS su Wix (MX, SPF, DKIM, DMARC di segreteria@): spostare i nameserver senza ricopiarli ferma la posta; TTL abbassati una settimana prima.
- Cookie policy; informative distinte per sito e area riservata; condizioni di vendita online con recesso; regole della community.
- Email transazionali (conferma, ricevuta, reset password): chi le manda e da quale dominio.
- Backup ed export (Notion, Base44 via GitHub sync, Stripe); ownership di account e credenziali.
- Staging: anteprima protetta su Pages; Base44 con chiavi Stripe test.
- Piano di test: checklist per pagina su telefono; flussi end-to-end con pagamento da 1 €.
- Chi approva le modifiche e in quanto tempo; criteri di «fatto» (nessun segnaposto, 301 verificati, moduli testati, Lighthouse mobile ≥ 90, Search Console attiva).
- Data di lancio; monitoraggio di uptime e webhook falliti.

## 5. Statico + Base44 oppure tutto in Base44

Confermo l'ibrido. Base44 rende le pagine nel browser con metadati limitati: per 17 pagine da posizionare è un handicap strutturale. Costi: Cloudflare Pages a zero; il listino Base44 ([base44.com/pricing](https://www.base44.com/pricing)) dà Builder a 40 $/mese annuale e Starter a 16 $/mese con dominio personalizzato ma senza GitHub sync. Lock-in: il sito statico è HTML in un repository e lo serve chiunque; l'uscita da Base44 è il GitHub sync, da Builder in su. Manutenzione: senza Claude nessuna via è self-service; il CMS git-based aiuta solo il sito. «Builder solo per costruire» va verificato dopo un mese: le funzioni backend consumano crediti di integrazione (Starter 2.000/mese, Builder 10.000) e la pagina prezzi tace su cosa si perde con il downgrade. Contro il cambio in corsa: fissare per iscritto le interfacce (schema Notion, URL media, webhook Stripe), così l'area riservata può passare a Supabase+Astro o Softr senza toccare il resto.

## 6. Tre cose da fare nelle prossime due settimane

1. **Crawl del sito Wix, export Search Console, inventario DNS** → tabella redirect e piano DNS con TTL abbassati. Mezza giornata.
2. **Prototipo Notion → sito**: database Eventi e flag «Pubblica»; un Astro minimo che genera calendario e una scheda corso dai record, con rebuild schedulato. Dimostra la catena prima di scrivere una riga per Base44.
3. **Un solo giro delle questioni bloccanti esterne**: commercialista (corrispettivi e fattura), licenza web di Afterglow, informative e condizioni di vendita, analytics senza cookie.
