const { Client, Collection, SlashCommandBuilder } = require('discord.js')

const { token } = require('../../settings.json')

export default class Bot {
  commands = []

  constructor(client) {
    this.client.login(token)

    this.client.commands = new Collection()

    this.client.on('ready', () => {
      console.log(`${this.client.user.username} ready!`)
    })
  }

  initCommand() {
    //this.commands.push(new Command(''))
  }
}