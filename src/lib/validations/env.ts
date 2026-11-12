import { z } from "zod";

/**
 * Server-side environment variables schema.
 * Ensures security: API keys are validated only on the server.
 */
export const serverEnvSchema = z.object({
  GROQ_API_KEY: z.string().min(1, "GROQ_API_KEY is required for live AI responses").optional(),
  GROQ_MODEL: z.string().default("llama-3.3-70b-versatile"),
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
});

/**
 * Client-side public environment variables schema.
 */
export const clientEnvSchema = z.object({
  NEXT_PUBLIC_APP_URL: z.string().url().optional(),
  NEXT_PUBLIC_SITE_NAME: z.string().optional(),
});

export function getServerEnv() {
  if (typeof window !== "undefined") {
    throw new Error("getServerEnv() must never be called on the client side.");
  }
  return serverEnvSchema.parse(process.env);
}

