const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config()
var fs = require('fs');
var items = require('./objects.js');

input = `${items.input} using the format title -, history -`;

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function runScript () {
const completion = await openai.createChatCompletion({
  model: "gpt-3.5-turbo",
  "messages": [{"role": "user", "content": input}]
});

phrase = completion.data.choices[0].message.content;
regexTitle = phrase.match(/(?!Title - )([A-Za-z]+( [A-Za-z]+)+)/g);

try {
  if (!fs.existsSync(regexTitle[0])) {
    fs.mkdirSync(regexTitle[0]);
	fs.writeFile(`${regexTitle[0]}/README.md`, phrase, function (err) {
		if (err) throw err;
	});
  fs.open("README.md", "a", (err, fd)=>{
    if(err){
        console.log(err.message);
    }else{
        fs.write(fd, `* [${regexTitle[0]}] ()`, (err, bytes)=>{
            if(err){
                console.log(err.message);
            }else{
                console.log("Tale was created successfully");
            }
        })        
    }
})
  }
} catch (err) {
  console.error(err);
}
}


runScript();