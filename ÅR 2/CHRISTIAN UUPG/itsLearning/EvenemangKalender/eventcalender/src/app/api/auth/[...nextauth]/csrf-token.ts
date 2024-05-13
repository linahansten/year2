// pages/api/csrf-token.ts

// Import necessary modules
import { getSession } from "next-auth/react";
import { Session } from "next-auth";

// Define CustomSession interface
interface CustomSession extends Session {
  csrfToken?: string;
}

// Function to generate CSRF token
function generateCSRFToken() {
  // Generate a random token
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

// Generate CSRF token
export default async function handler(req, res) {
  try {
    const session = await getSession({ req }) as CustomSession;

    if (!session) {
      throw new Error("Session not found");
    }

    const csrfToken = generateCSRFToken(); // Generate CSRF token
    session.csrfToken = csrfToken; // Store CSRF token in session
    // Save session
    // Example: req.session.csrfToken = csrfToken;
    res.json({ csrfToken });
  } catch (error) {
    console.error("Error generating CSRF token:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
