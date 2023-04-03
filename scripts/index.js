const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config()

message = "Hello";


const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function runCompletion () {
const completion = await openai.createChatCompletion({
  model: "gpt-3.5-turbo",
  "messages": [{"role": "user", "content": message}]
});
console.log(completion.data.choices[0].message.content);
}

runCompletion();