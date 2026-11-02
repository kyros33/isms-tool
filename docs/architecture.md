# Architektur

Die Anwendung wird als React-SPA mit Worker-API betrieben. D1 speichert relationale Metadaten; R2 speichert Dokumentdateien und Nachweise. Alle fachlichen Tabellen führen eine `tenant_id`. Serverseitige Autorisierung und Audit-Protokollierung sind zwingend.

## Fachliche Grenzen

- `documents`: Dokumente, Versionen, Review, Freigaben
- `risks`: Risiken, Bewertungen, Massnahmen, Akzeptanzen
- `kpis`: Definitionen, Messwerte, Trends
- `shared`: Benutzer, Rollen, Aufgaben, Audit-Trail
