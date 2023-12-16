import "dotenv/config";

export const aiConfig = {
  // These Gemini models are updated upto September 2021
  gemini: {
    textOnlyModel: "gemini-pro",
    textAndImageModel: "gemini-pro-vision",
    apiKey: process.env.GEMINI_API_KEY,
  },
};
