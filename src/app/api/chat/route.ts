import { NextResponse } from "next/server";
import { ChatRequestSchema } from "@/types/chat";
import { executeChatCompletion } from "@/lib/groq";

/**
 * POST /api/chat
 * Secure server-side endpoint for Groq AI chat interactions.
 * - Validates incoming payloads using Zod
 * - Accesses Groq SDK on the server only
 * - Enforces no-store caching and structured responses
 * - Prevents sensitive info leakage and empty content submissions
 */
export async function POST(req: Request) {
  try {
    let json: unknown;
    try {
      json = await req.json();
    } catch {
      return NextResponse.json(
        {
          error: "Invalid JSON format",
          message: "Unable to parse request body.",
        },
        {
          status: 400,
          headers: { "Cache-Control": "no-store, max-age=0" },
        }
      );
    }

    const parseResult = ChatRequestSchema.safeParse(json);

    if (!parseResult.success) {
      return NextResponse.json(
        {
          error: "Invalid request payload",
          details: parseResult.error.flatten().fieldErrors,
        },
        {
          status: 400,
          headers: {
            "Cache-Control": "no-store, max-age=0",
          },
        }
      );
    }

    const { messages } = parseResult.data;

    // Filter and sanitize messages (disallow empty or whitespace-only messages)
    const sanitizedMessages = messages.map((m) => ({
      ...m,
      content: m.content.trim(),
    }));

    const hasEmpty = sanitizedMessages.some((m) => m.content.length === 0);
    if (hasEmpty) {
      return NextResponse.json(
        {
          error: "Validation error",
          message: "Message content cannot be blank or whitespace only.",
        },
        {
          status: 400,
          headers: { "Cache-Control": "no-store, max-age=0" },
        }
      );
    }

    // Keep conversation history bounded to last 15 messages to prevent token overflows
    const boundedMessages = sanitizedMessages.slice(-15);

    const response = await executeChatCompletion(boundedMessages);

    return NextResponse.json(response, {
      status: 200,
      headers: {
        "Cache-Control": "no-store, max-age=0",
      },
    });
  } catch (error) {
    // Log safely on server without logging customer personal data
    console.error("[API_CHAT_ERROR]", error instanceof Error ? error.name : "UnknownError");

    return NextResponse.json(
      {
        error: "Internal Server Error",
        message: "Unable to complete request at this time. Please connect with our team on WhatsApp at +91 9551080470.",
      },
      {
        status: 500,
        headers: {
          "Cache-Control": "no-store, max-age=0",
        },
      }
    );
  }
}
