
const { Client } = require('discord.js')
const M = new Client()

M.on('message', (message) => {
    if (message.author.bot) return
    setInterval(function() {
        message.channel.send('<--MESSAGE-->')
    },)

})

M.login('<--TOKEN-->')