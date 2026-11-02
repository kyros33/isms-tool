# ISMS Platform

MVP-Grundstruktur für ein mandantenfähiges ISMS-Tool auf Cloudflare und GitHub.

## Module

- Dashboard
- Dokumentenmanagement mit Versionen und Freigaben
- Risikoregister und Massnahmen
- KPI-Katalog und Messwerte
- Aufgaben und Audit-Trail

## Technologie

- React + TypeScript + Vite
- Cloudflare Worker API mit Hono
- Cloudflare D1 für strukturierte Daten
- Cloudflare R2 für Dateien und Nachweise
- GitHub Actions für Qualitätsprüfung und Deployment

## Lokaler Start

1. `npm install`
2. `.dev.vars.example` nach `.dev.vars` kopieren
3. D1-Datenbank erstellen: `npx wrangler d1 create isms-db`
4. Die ausgegebene ID in `wrangler.jsonc` eintragen
5. R2-Bucket erstellen: `npx wrangler r2 bucket create isms-documents`
6. Migration lokal anwenden: `npm run db:migrate:local`
7. Anwendung starten: `npm run dev`

## Deployment

Für GitHub Actions die Repository-Secrets `CLOUDFLARE_API_TOKEN` und `CLOUDFLARE_ACCOUNT_ID` hinterlegen. Danach wird bei einem Push auf `main` automatisch deployed.

## Sicherheitsgrundsätze

- Mandantentrennung über `tenant_id`
- Keine Secrets im Repository
- Jede Mutation erzeugt einen Audit-Log-Eintrag
- R2-Objekte sind nicht öffentlich
- Rollen und Berechtigungen werden serverseitig geprüft
- Dokumentversionen sind nach Freigabe unveränderlich
