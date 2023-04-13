const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config()
var fs = require('fs');
var items = require('./content.js');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function runScript () {
  
input = `${items.generateText()}, give it a creative title`;

const completion = await openai.createChatCompletion({
  model: "gpt-3.5-turbo",
  "messages": [{"role": "user", "content": input}]
});

phrase = completion.data.choices[0].message.content;
regexTitle = phrase.match(/(?!Title: )([A-Za-z]+( [A-Za-z]+)+)/g);

try {
  if (!fs.existsSync(`tales${regexTitle[0]}`)) {
    fs.mkdirSync(`tales/${regexTitle[0]}`);
	fs.writeFile(`tales/${regexTitle[0]}/README.md`, phrase, function (err) {
		if (err) throw err;
	});
  fs.open("README.md", "a", (err, fd)=>{
    if(err){
        console.log(err.message);
    }else{
        transformStringIntoURL = regexTitle[0].replaceAll(" ", "%20");
        fs.write(fd, `\n* [${regexTitle[0]}](https://github.com/JonanthaW/AI_Tales/tree/main/tales/${transformStringIntoURL})`, (err, bytes)=>{
            if(err){
                console.log(err.message);
            }else{
                console.log(`input: ${input}`);
                console.log("Tale was created successfully");
            }
        })        
    }
})
  }
} catch (err) {
  console.error(err);
}

await sleep(5000);
runScript();

}
runScript();

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
