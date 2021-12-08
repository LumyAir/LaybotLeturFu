const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('serveur')
		.setDescription('Affiche les informations sur ce serveur.'),
	async execute(interaction) {
		await interaction.reply(`Nom du serveur : ${interaction.guild.name}\nNombre total de membres : ${interaction.guild.memberCount}\nDate de création du serveur : ${interaction.guild.createdAt}\nNiveau de vérification du serveur : ${interaction.guild.verificationLevel}`);
	},
};