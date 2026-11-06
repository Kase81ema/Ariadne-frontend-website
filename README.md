# Ariadne — nuovo sito ariadne.training

Sito pubblico di Ariadne SRL, scuola italiana di coaching creativo-esperienziale (Milano). HTML statico, pubblicato a ogni push: oggi da Vercel come anteprima, in futuro da Cloudflare Pages con il dominio ariadne.training.

**Da dove ripartire: `docs/README.md`.** Lì stanno il piano di lavoro, le specifiche del 5 novembre 2026 e tutto il pacchetto di passaggio per chi riprende il progetto (anche da un altro account Claude).

## Struttura

```
├── homepage.html             # Home
├── il-filo-di-ariadne.html   # Chi siamo e approccio (ex "L'approccio")
├── scuola.html               # Hub Scuola di coaching
├── core-coaching.html        # Modulo Core Coaching
├── advanced-coaching.html    # Modulo Advanced Coaching
├── team-coaching.html        # Modulo Team Coaching
├── core-quadrant.html        # Certificazione Core Quadrant® (Ofman)
├── training.html             # Hub formazione esperienziale
├── training-lsp.html         # Lego® Serious Play®
├── training-kaospilot.html   # Kaospilot Masterclass
├── workshop.html             # Workshop brevi
├── calendario.html           # Calendario eventi
├── coaching-atelier.html     # Community: Coaching Atelier
├── laboratori.html           # Laboratori Ariadne
├── webinar.html              # Webinar e testimonianze
├── Open Day Ariadne.html     # Pagina evento
├── homepage-print.html       # Versione stampabile della home
├── ariadne.css / ariadne.js  # Stili e animazioni condivisi
├── revisione.css / .js       # Editor di revisione (opzionale)
├── CONTEXT.md                # Regole di brand, palette, font, terminologia, voce
├── GUIDA_REVISIONE.md        # Come usare l'editor di revisione
├── docs/                     # Pacchetto di passaggio: piano, specifiche, revisione, guide
└── drafts/2026-11/           # Pagine ridisegnate a novembre 2026 (riferimento per la task 2.2)
```

## Regole in breve

- Prima di toccare una pagina: leggere `CONTEXT.md` (brand) e la sezione 2 delle specifiche (vincoli di design e voce).
- Date, prezzi, posti e sedi arrivano da Notion «Gestione scuola»; nel nuovo impianto le pagine li leggono al build (task 2.1 del piano). Nessun dato di questo tipo va scritto a mano nell'HTML.
- Ogni modifica è un commit con un messaggio che dice cosa cambia per chi legge il sito.

## Pubblicazione

Vercel pubblica `main` sul progetto «Ariadne · v10» (dominio non collegato). Il passaggio a Cloudflare Pages e al dominio è la task 2.6 del piano, prevista per febbraio 2027, dopo collaudo e piano dei redirect dal sito Wix attuale.
