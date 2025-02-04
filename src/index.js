require('dotenv').config(); // gets token from env 
const { Client, IntentsBitField, EmbedBuilder } = require('discord.js');
const eventHandler = require('./handlers/eventHandler');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,

    ],
});

eventHandler(client);

/*
client.on('ready', (c) => {
    console.log(`${c.user.tag}`);
});

client.on('interactionCreate', (interaction) => {
    if(!interaction.isChatInputCommand()){
        return;
    }
    if(interaction.commandName === 'add'){
        const num1 = interaction.options.get('first-number').value;
        const num2 = interaction.options.get('second-number').value;
        interaction.reply('answer is: '+(num1+num2));
    }
    if(interaction.commandName === 'embed'){
        const embed = new EmbedBuilder()
            .setTitle('Embed title')
            .setDescription('This is an embed');
        interaction.reply({ embeds: [embed]})
    }
    if(interaction.commandName === 'calculate-abv-specific-gravities'){
        const OG = interaction.options.get('original-gravity').value;
        const FG = interaction.options.get('final-gravity').value;
        let answer;
        const embed = new EmbedBuilder()
            .setTitle('Abv for ')
        if(interaction.options.get('formula-type').value === 'standard'){
            answer = Math.round(((OG - FG) * 131.25) * 100) / 100;
            interaction.reply(`The approximate abv is: ${answer}%`);
        } 
        else if(interaction.options.get('formula-type').value === 'alternate'){
            answer = Math.round(((76.08 * (OG - FG) / (1.775 - OG)) * (FG / 0.794)) * 100 ) / 100;
            interaction.reply(`The approximate abv is: ${answer}%`);
        }
    }
});

*/
client.login(process.env.TOKEN);