const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('options-info')
		.setDescription('Informations sur les options proposées.')
		.addStringOption(option => option.setName('entrée').setDescription('L\'entrée à renvoyer en retour')),
	async execute(interaction) {
		const value = interaction.options.getString('entrée');
		if (value) return interaction.reply(`La valeur des options est : \`${value}\``);
		return interaction.reply('Aucune option n\'a été prévue !');
	},
};