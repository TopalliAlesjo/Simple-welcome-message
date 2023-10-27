const Discord = require("discord.js")
const client = new Discord.Client(
    { intents: 32767 }

)

client.login("TOKEN")


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });

client.on('guildMemberAdd', (member) => {

    const channel = client.channels.cache.get("ID-CHAT-JOIN")

    const benvenuto = new Discord.EmbedBuilder() 
    .setColor(0x0099FF)
    .setTitle("BENVENUTO ")
    .setDescription(``)
    .setTimestamp()
    .setFooter({ text: 'NAME', iconURL: 'ICONE-URL' })
    .setThumbnail('PHOTO-URL')
    .addFields(
		{ name: 'RULE 1', value: 'DESCRIPTION-RULE1' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'RULE 2', value: 'DESCRIPTION-RULE2', inline: true },
		{ name: 'RULE 3', value: 'DESCRIPTION-RULE3', inline: true },
        { name: 'RULE 4', value: 'DESCRIPTION-RULE4', inline: true },
        { name: 'RULE 5', value: 'DESCRIPTION-RULE5', inline: true },
    )
    channel.send({ embeds: [benvenuto] })
})

  
