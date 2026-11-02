import { Hono } from "hono"; import type { Env } from "../types";
export const risks = new Hono<{Bindings:Env}>();
risks.get("/", async c => { const tenantId=c.req.query("tenantId"); if(!tenantId) return c.json({error:"tenantId fehlt"},400); const result=await c.env.DB.prepare("SELECT id, risk_number, title, inherent_score, residual_score, status FROM risks WHERE tenant_id = ? AND deleted_at IS NULL ORDER BY inherent_score DESC").bind(tenantId).all(); return c.json(result.results); });
