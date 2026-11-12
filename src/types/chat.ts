import { z } from "zod";

export const ChatRoleSchema = z.enum(["user", "assistant", "system"]);
export type ChatRole = z.infer<typeof ChatRoleSchema>;

export const ChatMessageSchema = z.object({
  id: z.string().optional(),
  role: ChatRoleSchema,
  content: z.string().min(1, "Message content cannot be empty").max(2000, "Message content exceeds limit"),
  createdAt: z.string().or(z.date()).optional(),
});
export type ChatMessage = z.infer<typeof ChatMessageSchema>;

export const ChatRequestSchema = z.object({
  messages: z.array(ChatMessageSchema).min(1, "At least one message is required").max(30),
  stream: z.boolean().optional().default(false),
});
export type ChatRequest = z.infer<typeof ChatRequestSchema>;

export interface ChatResponse {
  message: ChatMessage;
  usage?: {
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
  };
}

export interface ChatAction {
  id: string;
  label: string;
  type: "whatsapp" | "link" | "question";
  href?: string;
  query?: string;
  isExternal?: boolean;
}

export interface UIChatMessage extends ChatMessage {
  status?: "idle" | "loading" | "error";
  actions?: ChatAction[];
  error?: string;
}


