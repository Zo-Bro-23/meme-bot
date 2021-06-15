const Discord = require('discord.js')
const bot = new Discord.Client()
const fs = require('fs')
const ohGod = new Discord.MessageEmbed()
    .setImage('http://www.quickmeme.com/img/bb/bb7ce044d6a0418439e22fbe1e2efd5b263db02ead428742adf51a9c05488272.jpg')
const lol = new Discord.MessageEmbed()
    .setImage('https://i.pinimg.com/originals/2b/07/70/2b0770b248e05f26b5d697da196a74b3.gif')
const iHateYou = new Discord.MessageEmbed()
    .setImage('https://m.media-amazon.com/images/I/81q6iEiZaJL._SS500_.jpg')
const iAmDaBest = new Discord.MessageEmbed()
    .setImage('https://m.media-amazon.com/images/I/81q6iEiZaJL._SS500_.jpg')
const bruh = new Discord.MessageEmbed()
    .setImage('https://media.makeameme.org/created/bruh-seriously-1035111945.jpg')
const msgs = ['Ya styubid...', 'What up boiii?', `Can't a bot sleep by himself?`, ohGod, 'Bruuuuuuuuh!!!!!', 'Lol!!!', iHateYou, iAmDaBest, lol, bruh]
    bot.once('ready', () => {console.log(bot.user.username)
        const channel01 = bot.channels.cache.find(channel => channel.id == "804291539605651466")
        channel01.send('hey')
        console.log(bot.user.bot)

    })
    console.log()
bot.login(JSON.parse(fs.readFileSync('cred.json')).bot)
bot.on('message', message => {console.log(message.content)
    if(message.content == '!fu'){
message.channel.send(msgs[Math.floor(Math.random() * (msgs.length))])
    }

    if(!message.author.bot){
message.author.dmChannel.send("hey")
const user = new Discord.User(message.author)
}

console.log(message.author.verified)})


