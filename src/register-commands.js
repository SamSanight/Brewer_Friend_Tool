require('dotenv').config();
const { REST, Routes, ApplicationCommandOptionType, ApplicationCommand, ApplicationCommandType } = require('discord.js');

const commands = [
    {
        name: 'calculate-abv-specific-gravities',
        description: 'OG(original Gravity), FG(Final Gravity), Formula(Standard(131.25) or Alternate)',
        options: [
            {
                name: 'beverage-title',
                description: 'Name of the beverage',
                type: ApplicationCommandOptionType.String,
            },
            {
                name: 'original-gravity',
                description: 'First reading before fermentation',
                type: ApplicationCommandOptionType.Number,
                required: true,
            },
            {
                name: 'final-gravity',
                description: 'Last readering when fermentation is complete',
                type: ApplicationCommandOptionType.Number,
                required: true,
            },
            {
                name: 'formula-type',
                description: 'formula: (OG – FG) * 131.25, alternate(76.08 * (OG - FG) / (1.775 - OG)) * (FG / 0.794)',
                type: ApplicationCommandOptionType.String,
                choices: [
                    {
                        name: 'standard',
                        value: "standard",
                    },
                    {
                        name: 'alternative',
                        value: "alternate",
                    },
                ],
                required: true,
            },  
        ],
    },
];

const rest = new REST({version: '10'}).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log('Registering slash commands...');
        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            { body: commands }
        );

        console.log('Slash commands were registered successfully!');
    } catch (error) {
        console.log(`There was an error: ${error}`);
    }
})();