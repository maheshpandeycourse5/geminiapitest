import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";

export const genAI = new GoogleGenerativeAI(process.env.API_KEY);

export function fileToGenerativePart(path, mimeType) {
	return {
		inlineData: {
			data: Buffer.from(fs.readFileSync(path)).toString("base64"),
			mimeType
		}
	};
}

export async function streamToStdout(stream) {
	console.log("Streaming...\n");
	for await (const chunk of stream) {
		// Get first candidate's current text chunk
		const chunkText = chunk.text();
		// Print to console without adding line breaks
		process.stdout.write(chunkText);
	}
	// Print blank line
	console.log("\n");
}

export async function displayTokenCount(model, request) {
	const { totalTokens } = await model.countTokens(request);
	console.log("Token count: ", totalTokens);
}

export async function displayChatTokenCount(model, chat, msg) {
	const history = await chat.getHistory();
	const msgContent = { role: "user", parts: [{ text: msg }] };
	await displayTokenCount(model, { contents: [...history, msgContent] });
}
