## Try out a sample app

This repository contains sample Node and web apps demonstrating how the SDK can access and utilize the Gemini model for various use cases.

**To try out the sample Node app, follow these steps:**



1.  [Obtain an API key](https://makersuite.google.com/app/apikey) to use with the Google AI SDKs.

1.  cd into the `node` folder and run `npm install`.

1.  Assign your API key to an environment variable: `export API_KEY=MY_API_KEY` for window set `API_KEY=MY_API_KEY`.

1.  Run the sample file you're interested in. Example: `node simple-text.js`.

**To try out the sample web app, follow these steps:**



1.  [Obtain an API key](https://makersuite.google.com/app/apikey) to use with the Google AI SDKs.

1.  cd into the `web` folder and run `npm install`.

1.  Assign your API key to an environment variable: `export API_KEY=MY_API_KEY` for window `set API_KEY=MY_API_KEY`.

1.  Serve your web app by running: `npm run http-server`. Open the displayed URL in a browser.

## Installation and usage

- For Node.js (or web projects using NPM), run `npm install @google/generative-ai`.
- For web, add `import  { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai"`.

## Documentation

Find complete documentation for the Google AI SDKs and the Gemini model in the Google documentation:\
https://ai.google.dev/docs

Find reference docs for this SDK [here in the repo](/docs/reference/generative-ai.md).
