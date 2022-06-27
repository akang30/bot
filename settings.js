global.language = "id"
global.nomerOwner ="6287895536422"
global.nomerOwner2 = "6287895536422"
global.runWith = "Replit"
global.ownerName = "DHAAZ"
global.botName = "DHAAZ - BOT" 
global.sessionName ="session"
global.setmenu ="gif"
global.docType = "docx"
global.Qoted = "ftoko"
global.baileysMd = true
global.multi = true
global.nopref = false
global.allpref = false
global.prefa = "."
global.fake = botName
global.Console = false
global.autorespon = false
global.copyright = "© DHAAZ - BOT 2022" 
global.On = "On"
global.Off ="Off"
global.autoblockcmd = false
global.fake1 ="DHAAZ"
global.packName = "Sticker by"
global.authorName = "Dhaaz"
global.replyType = "web"
global.setwelcome = "type1"
global.autoblockcmd = false
global.autoReport = true
global.autoLevel = false
global.autoSticker = false
global.gamewaktu = 60
global.limitCount = 30
global.gcount = {
prem : 60,
user : 20
} 





const fs = require("fs");
const { color } = require("./lib/color");
const chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})






