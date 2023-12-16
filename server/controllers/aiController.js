import { textOnly } from "../utils/textOnly.js";
import { textAndImage } from "../utils/textAndImage.js";

export const aiController = async (req, res) => {
  const modelType = req.body.modelType;

  if (modelType === "text_only") {
    const botReply = await textOnly(req.body.prompt);

    if (botReply?.Error) {
      return res.status(404).json({ Error: botReply.Error });
    }

    res.status(200).json({ result: botReply.result });
  } else if (modelType === "text_and_image") {
    const botReply = await textAndImage(req.body.prompt, req.body.imageParts);

    if (botReply?.Error) {
      return res.status(404).json({ Error: botReply.Error });
    }

    res.status(200).json({ result: botReply.result });
  } else {
    res.status(404).json({ result: "Invalid Model Selected" });
  }
};
