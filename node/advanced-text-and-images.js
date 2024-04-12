import {
	genAI,
	fileToGenerativePart,
	displayTokenCount,
	streamToStdout
} from "./utils/common.js";

async function run() {
	const model = genAI.getGenerativeModel({
		model: "gemini-pro-vision",
		generationConfig: {
			temperature: 0
		}
	});

	const prompt =
		"What do you see? Use lists. Start with a headline for each image and provide narratives of it .";

	// Note: The only accepted mime types are some image types, image/*.
	const imageParts = [
		fileToGenerativePart("./utils/salestable.png", "image/png"),
		fileToGenerativePart("./utils/chart.png", "image/png")
	];

	displayTokenCount(model, [prompt, ...imageParts]);

	const result = await model.generateContentStream([prompt, ...imageParts]);

	// Stream the first candidate text
	await streamToStdout(result.stream);

	// Display the aggregated response
	const response = await result.response;
	console.log(JSON.stringify(response, null, 2));
}

run();
