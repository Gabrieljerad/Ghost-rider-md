/*
   *GABBY MD BOT OFFICIAL*
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': '805a6c3fa9',
}
////////////////////////////////////////////////////|:|             OWNER DETAILS             |:|//////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
global.session = process.env.SESSION_ID || 'PUT HERE',
global.ownername = process.env.OWNER_NAME === undefined ? "Gabby" : process.env.OWNER_NAME
let fake = process.env.OWNER_NUMBER === undefined ? '254106516012' : process.env.OWNER_NUMBER
global.owner = [`${fake}`]
global.ownernumber = [`${fake}`]
global.premium = [`${fake}`]
global.anticall = process.env.ANTICALL === undefined ? 'false' : process.env.ANTICALL
global.packname = process.env.PACK_NAME === undefined ? 'Gabby-MD' : process.env.PACK_NAME
global.author = process.env.STICKER_AUTHOR_NAME === undefined ? 'Gabby-md' : process.env.STICKER_AUTHOR_NAME
global.pmblock = process.env.PM_BLOCK === undefined ? 'false' : process.env.PM_BLOCK
global.chatbot_pm = process.env.PM_CHATBOT === undefined ? 'false' : process.env.PM_CHATBOT
global.chatbot_group = process.env.GROUP_CHATBOT === undefined ? 'false' : process.env.GROUP_CHATBOT

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
global.Botname = 'G'+'a'+'b'+'b'+'y'+'-'+'m'+'d'
global.prefa = [',']
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
global.mess = {
        wait: '*chill naleta..*',
        owner: '*only Gabby can use this..*',
        group: '*🔰️ hii comand ni ya group.!*',
        admin: '*🔰️ darling hadi uwe admin !*',
        botadmin: '*zii😔️, nipe cheo kwanza.*',
        botAdmin: '*zii😔️, nipe cheo kwanza.*',
        banned: '*💀umekula ban msee omba msamaha Gabby !*',
        bangc: '*❌️ group imekula ban so mjisort !*',
}
//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright("✅️ ᴜᴘᴅᴀᴛᴇ config.js"))
	delete require.cache[file]
	require(file)
})
