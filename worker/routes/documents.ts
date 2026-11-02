import { Hono } from "hono";
import { z } from "zod";
import type { Env } from "../types";

export const documents = new Hono<{ Bindings: Env }>();

const createDocumentSchema = z.object({
  tenantId: z.string().min(1, "Mandant fehlt"),
  title: z.string().trim().min(3, "Der Titel muss mindestens 3 Zeichen enthalten").max(200),
  category: z.string().trim().min(1, "Dokumenttyp fehlt").max(100),
  classification: z
    .enum(["PUBLIC", "INTERNAL", "CONFIDENTIAL", "STRICTLY_CONFIDENTIAL"])
    .default("INTERNAL"),
  nextReviewAt: z.string().nullable().optional(),
  actorId: z.string().min(1, "Benutzer fehlt")
});

function mapDocument(row: Record<string, unknown>) {
  return {
    id: row.id,
    documentNumber: row.document_number,
    title: row.title,
    category: row.category,
    status: row.status,
    currentVersion: row.current_version,
    classification: row.classification,
    ownerId: row.owner_id,
    nextReviewAt: row.next_review_at,
    createdAt: row.created_at,
    updatedAt: row.updated_at
  };
}

/**
 * Alle Dokumente eines Mandanten abrufen
 *
 * GET /api/documents?tenantId=...
 */
documents.get("/", async (c) => {
  const tenantId = c.req.query("tenantId");

  if (!tenantId) {
    return c.json(
      {
        error: "VALIDATION_ERROR",
        message: "tenantId fehlt"
      },
      400
    );
  }

  try {
    const result = await c.env.DB.prepare(
      `
        SELECT
          id,
          document_number,
          title,
          category,
          status,
          current_version,
          classification,
          owner_id,
          next_review_at,
          created_at,
          updated_at
        FROM documents
        WHERE
