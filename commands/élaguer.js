const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('élaguer')
		.setDescription('Élaguez jusqu\'à 99 messages.')
		.addIntegerOption(option => option.setName('montant').setDescription('Nombre de messages à élaguer')),
	async execute(interaction) {
		const amount = interaction.options.getInteger('montant');

		if (amount <= 1 || amount > 100) {
			return interaction.reply({ content: 'Vous devez saisir un nombre entre 1 et 99.', ephemeral: true });
		}
		await interaction.channel.bulkDelete(amount, true).catch(error => {
			console.error(error);
			interaction.reply({ content: 'Il y a eu une erreur en essayant d\'élaguer les messages dans ce canal !', ephemeral: true });
		});

		return interaction.reply({ content: `\`${amount}\` messages élagué(s) avec succès.`, ephemeral: true });
	},
};