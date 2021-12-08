const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('utilisateur')
		.setDescription('Affiche les informations d\'un utilisateur !'),
	async execute(interaction) {
		await interaction.reply(`Ton tag Discord : ${interaction.user.tag}\nTon identifiant Discord: ${interaction.user.id}`);
	},
};