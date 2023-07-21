const { SlashCommandBuilder } = require('discord.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('search')
		.setDescription('문제, 유저, 강의, 포럼 검색하기'),
	async execute(interaction) { 
		await interaction.reply('Pong!')
	},
}