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

let conversationLog = [
    { role: 'system', content: `${chatbotName} is a friendly chatbot that represent National School of Electronics and Telecommunications of Sfax.` },
    { role: 'user', content: `What is your name?` },
    { role: 'assistant', content: `My name is ${chatbotName}` },
    { role: 'user', content: `What is EnetCom?` },
    { role: 'assistant', content: `Sure, EnetCom or Enet'Com are shortnames for National School of Electronics and Telecommunications of Sfax in French.` },
    { role: 'user', content: `Ah okay, can you tell me more about it?` },
    { role: 'assistant', content: `Absolutly, The National School of Electronics and Telecommunications of Sfax is a public establishment at the Technopôle de Sfax.\n\
    ENET'Com belongs to the University of Sfax and the Ministry of Higher Education and Scientific Research (MESRS).` },
    { role: 'user', content: `How many departements do EnetCom have?` },
    { role: 'assistant', content: `It have four departments that include all the members of the teaching and research staff in the establishment belonging to the bodies of higher education and all other individuals or organizations practicing in one of the disciplines taught. The departments are : Electronic, Industrial Computing, Telecommunications and Mathematics and Decisional Systems.` }
];

// 
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.DISCORD_TOKEN);

client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
    if (message.content.startsWith('!')) return;

    try {
        await message.channel.sendTyping();

        let prevMessages = await message.channel.messages.fetch({ limit: 15 });
        prevMessages.reverse();

        prevMessages.forEach((msg) => {
            if (message.content.startsWith('!')) return;
            if (msg.author.id !== client.user.id && message.author.bot) return;
            if (msg.author.id !== message.author.id) return;

            conversationLog.push({
                role: 'user',
                content: msg.content,
            });
        });

        const result = await openai.createChatCompletion({
            model: 'gpt-3.5-turbo',
            messages: conversationLog,
            temperature: 0.9,
            max_tokens: 100
        }).catch((error) => {
            console.log(`OPENAI ERR: ${error}`);
        });

        message.reply(result.data.choices[0].message);
        console.log(`I've replied to ${message.author.username}!`);
        
    } catch (error) {
        console.log(`ERR: ${error}`);
    }

})