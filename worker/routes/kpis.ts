import { Hono } from "hono"; import type { Env } from "../types";
export const kpis = new Hono<{Bindings:Env}>();
kpis.get("/", async c => { const tenantId=c.req.query("tenantId"); if(!tenantId) return c.json({error:"tenantId fehlt"},400); const result=await c.env.DB.prepare("SELECT id, kpi_number, name, unit, target_value, status FROM kpis WHERE tenant_id = ? AND deleted_at IS NULL ORDER BY name").bind(tenantId).all(); return c.json(result.results); });
