const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('avatar')
		.setDescription('Obtenez l\'URL de l\'avatar de l\'utilisateur sélectionné, ou votre propre avatar.')
		.addUserOption(option => option.setName('cible').setDescription('L\'avatar de l\'utilisateur à montrer')),
	async execute(interaction) {
		const user = interaction.options.getUser('cible');
		if (user) return interaction.reply(`${user.username}'s avatar: ${user.displayAvatarURL({ dynamic: true })}`);
		return interaction.reply(`Your avatar: ${interaction.user.displayAvatarURL({ dynamic: true })}`);
	},
};