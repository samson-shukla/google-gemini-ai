# Google Gemini API Node.js Server

This Node.js server is designed to consume Google's Gemini API, a powerful generative AI tool. It includes two primary functionalities:

1. **Text Generation from Text-Only Input**

   - Model Name: `gemini-1.5-flash`

2. **Text Generation from Text-and-Image Input (Multimodal)**
   - Model Name: `gemini-1.5-flash`

## Prerequisites

Before running the project, make sure you have the following:

- Node.js version 18 and above installed.
- Gemini API keys generated from [Google AI Studio](https://aistudio.google.com/app/apikey).

## Getting Started

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/samson-shukla/google-gemini-ai.git
   cd google-gemini-ai
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Configure Settings:**

   - Create a `.env` file in the project root with the following environment variables:

   ```env
   PORT=3000
   GEMINI_API_KEY=your_api_key
   ```

   - Adjust other settings in the `server/config` folder if needed.

4. **Run the Server:**
   ```bash
   npm run start
   ```

## Usage and Making API Calls

- The server will be running at `http://localhost:3000` by default.
- Access the API endpoints by making a POST request at `http://localhost:3000/chat-with-gemini`
- The request body must contain the following: - `"modelType"` (valid values are `"text_only"` and `"text_and_image"`) - `"prompt"` as a string where you ask what you want to ask. - `"imageParts"` is an array of image URLs of the images you want to ask your prompt for.
- For `"text_only"` model, modelType and prompt is required
- For `"text_and_image"` model, modelType, prompt and imageParts is required

Request body example of `"text_only"` model

```json
{
  "modelType": "text_only",
  "prompt": "What can you do for me?"
}
```

Request body example of `"text_and_image"` model

```json
{
  "modelType": "text_and_image",
  "prompt": "What do you see in these images?",
  "imageParts": ["https://firstImage.jpg", "https://secondImage.png"]
}
```

## Integration with Frontend

To implement the views, you can integrate any frontend library of your choice, such as ReactJs, Swelte, etc.

Feel free to enhance and customize the project to meet your specific needs. If you encounter any issues or have suggestions for improvements, please [open an issue](https://github.com/samson-shukla/google-gemini-ai/issues).

Happy coding! 🚀
