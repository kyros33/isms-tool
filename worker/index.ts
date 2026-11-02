import { Hono } from "hono";
import type { Env } from "./types";
import { documents } from "./routes/documents";
import { risks } from "./routes/risks";
import { kpis } from "./routes/kpis";

const app = new Hono<{ Bindings: Env }>();
app.get("/api/health", c => c.json({ status: "ok", environment: c.env.APP_ENV }));
app.route("/api/documents", documents);
app.route("/api/risks", risks);
app.route("/api/kpis", kpis);
app.notFound(c => c.json({ error: "Nicht gefunden" }, 404));
app.onError((error, c) => { console.error(error); return c.json({ error: "Interner Fehler" }, 500); });
export default app;
