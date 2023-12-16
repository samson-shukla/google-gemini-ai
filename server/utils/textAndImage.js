import { GoogleGenerativeAI } from "@google/generative-ai";

import { aiConfig } from "../config/aiConfig.js";
import { processImages } from "./processImages.js";

const genAI = new GoogleGenerativeAI(aiConfig.gemini.apiKey);

// This function is used for a text only model of Gemini AI
export const textAndImage = async (prompt, images) => {
  const model = genAI.getGenerativeModel({
    model: aiConfig.gemini.textAndImageModel,
  });

  // prompt is a single string
  // imageParts is an array containing base64 strings of images

  let imageParts = await processImages(images);
  // console.log("textAndImage | imageParts", imageParts);

  try {
    const result = await model.generateContent([prompt, ...imageParts]);
    const response = await result.response;
    const chatResponse = response.text();
    console.log("textAndImage chatResponse", chatResponse);

    return { result: chatResponse };
  } catch (error) {
    return { Error: "Uh oh! Caught error while fetching AI response" };
  }
};
