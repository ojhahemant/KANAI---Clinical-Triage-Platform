
import { GoogleGenAI, Type } from "@google/genai";
import { DemoAnalysis } from "../types";

/**
 * Analyzes a clinical referral note using Gemini 3 Pro to perform risk stratification and triage.
 * Uses JSON response schema to ensure structured output for clinical decision support.
 */
export async function analyzeReferral(note: string): Promise<DemoAnalysis> {
  // Initialize the Google GenAI client using the environment's API key.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  // Use 'gemini-3-pro-preview' for complex medical reasoning and triage classification.
  const response = await ai.models.generateContent({
    model: 'gemini-3-pro-preview',
    contents: `Please perform a clinical triage analysis on the following patient referral note: "${note}"`,
    config: {
      systemInstruction: `You are an expert clinical triage assistant. 
      Analyze the input clinical text and determine the triage urgency (Emergency, High, Medium, Low).
      Provide a concise reasoning, suggested medical pathway, and identify patient risk factors.
      Always prioritize patient safety. Return the analysis in structured JSON format.`,
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          urgency: {
            type: Type.STRING,
            description: "The triage urgency level: Emergency, High, Medium, or Low.",
          },
          reasoning: {
            type: Type.STRING,
            description: "A brief clinical explanation for the priority assigned.",
          },
          suggestedPathway: {
            type: Type.STRING,
            description: "The recommended next clinical step or specialist department.",
          },
          patientRisk: {
            type: Type.STRING,
            description: "Assessment of patient-specific risk factors identified in the note.",
          },
        },
        required: ["urgency", "reasoning", "suggestedPathway", "patientRisk"],
      },
    },
  });

  // Extract text output from the response.
  const text = response.text;
  if (!text) {
    throw new Error("The AI model failed to generate a triage analysis.");
  }

  try {
    return JSON.parse(text);
  } catch (error) {
    console.error("Failed to parse AI response as JSON:", text);
    throw new Error("Received an invalid response format from the analysis engine.");
  }
}
