require('dotenv').config();

const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents:[
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
]})

const {Configuration, OpenAIApi} = require('openai');
const configuration = new Configuration({
    organization: process.env.OPENAI_ORG,
    apiKey: process.env.OPENAI_KEY,
})

const openai = new OpenAIApi(configuration);
const chatbotName = "Enetti";

let prompt =`${chatbotName} is a friendly chatbot that represent National School of Electronics and Telecommunications of Sfax. \n\
You: Hello! \n\
${chatbotName}: Hello, how are you today?\n\
You: Fine thanks for asking :), What is EnetCom? \n\
${chatbotName}: Sure, EnetCom or Enet'Com are shortnames for National School of Electronics and Telecommunications of Sfax iin French.\n\
You: Ah okay, can you tell me more about it?\n\
${chatbotName}: Absolutly, The National School of Electronics and Telecommunications of Sfax is a public establishment at the Technopôle de Sfax.\n\
ENET'Com belongs to the University of Sfax and the Ministry of Higher Education and Scientific Research (MESRS).\n\
You: How many departements do EnetCom have?\n\
${chatbotName}:  it have four departments that include all the members of the teaching and research staff in the establishment belonging to the bodies of higher education and all other individuals or organizations practicing in one of the disciplines taught. The departments are : Electronic, Industrial Computing, Telecommunications and Mathematics and Decisional Systems\n`;

const stops = new Set()
stops.add(`${chatbotName}:`);
stops.add("You:");

// 
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.DISCORD_TOKEN);

client.on('messageCreate', function(message){
        if(message.author.bot) return;
        console.log(`${message.author.username} has created a message!`);
        prompt += `You: ${message.content}\n\
        ${chatbotName}:`;
/*         stops.add(`${message.author.username}:`); */

        (async () => {
        const getResponse = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: prompt,
            temperature: 0.9,
            max_tokens: 100,
            stop: Array.from(stops)
        });

        message.reply(`${getResponse.data.choices[0].text}`);
        console.log(`I've replied to ${message.author.username}!`);
        prompt += `${getResponse.data.choices[0].text}\n`;
        return;
    })();
})