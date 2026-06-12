# Timer-modus – Dokumentasjon

## 1. UX-design

### Formål
Timer-modus skal gi brukeren en mer realistisk og motiverende skriveøvelse, med tidspress som ligner på ekte skrivesituasjoner.

### Brukerflyt
1. Brukeren ser «Timer mode»-knappen sammen med «Strict mode» og «Flow mode».
2. Når brukeren trykker på «Timer mode», vises tre valg: 30s, 60s og 120s. Disse vises rett under knappen, slik at det er tydelig at de hører sammen.
3. Brukeren velger en tid og starter skriveøvelsen.
4. En nedtellingsklokke vises tydelig, uten at den dekker over teksten.
5. Når tiden er ute, viser systemet resultatet (nøyaktighet, antall ord).
6. Brukeren kan trykke «Choose new time» for å gå tilbake til samme skriveøvelse og velge en ny tid.

### Designvalg
- Nedtellingsklokken har solid bakgrunn for god lesbarhet.
- «Back»-knappen fører tilbake til skriveøvelsen, ikke til hovedsiden, slik at brukeren ikke mister fremdriften sin.
- De tre tidsvalgene (30s/60s/120s) er plassert nær «Timer mode»-knappen, slik at brukeren tydelig forstår at de hører sammen som en gruppe.

---

## 2. Teknisk dokumentasjon (for utviklere)

### Teknologi
Funksjonen er bygget med Astro og TypeScript. Stiling er gjort med SCSS (ingen Tailwind).

### Implementasjon
- Knappene for 30s/60s/120s vises betinget (conditional rendering) når «Timer mode» er valgt.
- Nedtellingen håndteres med JavaScript (`setInterval`/`setTimeout`) og oppdaterer DOM hvert sekund.
- Nedtellingselementet bruker `position: absolute` med justert `z-index` for å vises over annet innhold, uten å overlappe teksten.
- Navigasjon etter fullført øvelse styres via samme funksjon/lenke som «Choose new time»-knappen, slik at brukeren returnerer til skriveøvelsen i stedet for hovedsiden.

### Filer involvert
- Komponent for skriveøvelse
- SCSS-fil for styling av timer-elementer
- Logikkfil for nedtelling (TypeScript)

### Mulige forbedringer
- Legge til lydsignal når tiden er ute.
- La brukeren sette egen tid (custom timer).