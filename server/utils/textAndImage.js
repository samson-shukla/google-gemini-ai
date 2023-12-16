import { GoogleGenerativeAI } from "@google/generative-ai";

import { aiConfig } from "../config/aiConfig.js";
import { processImages } from "./processImages.js";

const genAI = new GoogleGenerativeAI(aiConfig.gemini.apiKey);

// This function is used for a text only model of Gemini AI
export const textAndImage = async (prompt, images) => {
  const model = genAI.getGenerativeModel({
    model: aiConfig.gemini.textAndImageModel,
    safetySettings: aiConfig.gemini.safetySettings,
  });

  // prompt is a single string
  // imageParts is an array containing base64 strings of images

  let imageParts = await processImages(images);

  try {
    const result = await model.generateContent([prompt, ...imageParts]);
    const chatResponse = result?.response?.text();

    return { result: chatResponse };
  } catch (error) {
    console.error("textAndImage | error", error);
    return { Error: "Uh oh! Caught error while fetching AI response" };
  }
};
