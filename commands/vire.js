const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('vire')
		.setDescription('Sélectionnez un membre et vire-le (mais pas vraiment).')
		.addUserOption(option => option.setName('cible').setDescription('Le membre à virer')),
	async execute(interaction) {
		const user = interaction.options.getUser('cible');
		return interaction.reply({ content: `Tu voulais virer : ${user.username}`, ephemeral: true });
	},
};