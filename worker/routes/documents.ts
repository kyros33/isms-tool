import { Hono } from "hono"; import type { Env } from "../types";
export const documents = new Hono<{Bindings:Env}>();
documents.get("/", async c => { const tenantId = c.req.query("tenantId"); if(!tenantId) return c.json({error:"tenantId fehlt"},400); const result=await c.env.DB.prepare("SELECT id, document_number, title, status, current_version, next_review_at FROM documents WHERE tenant_id = ? AND deleted_at IS NULL ORDER BY updated_at DESC").bind(tenantId).all(); return c.json(result.results); });
