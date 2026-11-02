# Sicherheitsmodell

1. Authentifizierung via Cloudflare Access oder externer OIDC-Anbieter.
2. Serverseitige RBAC-Prüfung pro API-Endpunkt.
3. Strikte Mandantentrennung über `tenant_id` in jeder Abfrage.
4. Private R2-Buckets mit kurzlebigen, kontrollierten Downloads.
5. Audit-Logs append-only behandeln.
6. Secrets ausschliesslich via Cloudflare Secrets und GitHub Secrets.
7. Eingaben validieren, Dateiarten und Dateigrössen beschränken.
