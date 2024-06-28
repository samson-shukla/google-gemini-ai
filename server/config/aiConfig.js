import "dotenv/config";
import { HarmBlockThreshold, HarmCategory } from "@google/generative-ai";

export const aiConfig = {
  // These Gemini models are updated upto September 2021
  gemini: {
    textOnlyModel: "gemini-1.5-flash",
    textAndImageModel: "gemini-1.5-flash",
    apiKey: process.env.GEMINI_API_KEY,

    // Gemini Safety Settings
    // Explore all Harm categories here -> https://ai.google.dev/api/rest/v1beta/HarmCategory
    // Explore all threshold categories -> https://ai.google.dev/docs/safety_setting_gemini
    safetySettings: [
      {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
      },
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
      },
      {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
    ],
  },
};
