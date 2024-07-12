const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '94742637374'  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://SithumKalhara:97531@cluster0.iva7dbo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'Sithumkalhara271@gmail.com'
global.github = 'https://github.com/Sithuwa/SITHUWA-MD'
global.location = 'Sri Lanka'
global.gurl = 'https://instagram.com' // add your username
global.sudo = process.env.SUDO || "94742637374"
global.devs = '94761516805';
global.website = 'https://github.com/Sithuwa/SITHUWA-MD' //wa.me/+94000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/15b1dd8aeaa47888d75d7.jpg'
module.exports = {
  sessionName: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUhjT2YybUF2UG1yVWdtc2tMOWZRQXdVUWRWU3ZESmhkQ21UMk5UVGoyVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVVcrTjltUmVsSTF1cWZBMjg3UlBRMmpaYUdWM1FyeXp3c2hMaE5sd1hIaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3UGtadHNKZEdCblZGT3lXTGFJSTlkc3lFMXRJV3VOd3BNcmREQmlWNjJ3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWc0ZDazNvOTYvWDVBRU02cisra2FzTGlLZVM3RFFybi8yQjlVN0hJRzM4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9HbkxNUUExd0NpNmdWd1Y0MzNLeUMzMzgydlM1YnB1QVlmOUFFdmtzSFk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtqNUZGTjhOeElKS2JocXZnNmMvbkRKYmgzZFMraXBxaHdMQnZYb0R5WDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUFhb3hDQXgvaUNVNFQ3YXVRQndET2tYZFpDS1lTU3FKdEdaR2F5eHhHQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNXdWSWZjaTlBSHp3bkRZSCtvZGRiSWJ3TnVZUXZKNnR1QisrcGZ6TzdEbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFTSlJKOWhsQnVSb3ExZEJuYnBscjNtY211Nno3ekc3dFNrSDJlUjdkN2JlZGs1cnNYNnpGRXl1S3VFUUprdmJDMFRaQTJXUmdxa00rMngyVWRpR0RnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTEsImFkdlNlY3JldEtleSI6ImlnaUhPTzRSLzRXUGIvT29JYzBYR2pNTm56b0oxSW9XRGQxYUpLNHJUZ2s9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ilk5aWhuVzBvUWRhdDlQaFBzbWt1SFEiLCJwaG9uZUlkIjoiOTk1YzQ5YWItMThmYi00Nzk1LWI2ZGYtYjNjMDdjNGQ2MjgzIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBDN3U5enNleVFrejBtaUcvMnhreCtxVkFrRT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlSEpPcTBrNUF6Ky9BMWVGZHhld2hCdjRDUnM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiOFRZQllYWVYiLCJtZSI6eyJpZCI6Ijk0NzQyNjM3Mzc0Ojc4QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPUHpwY0lHRU1ldnc3UUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJpcVhIWTJjcUEyY3FFd1NpZHZybGZ3YnBZWXN2VjJ3ZWQ5SXdiOFFmRjN3PSIsImFjY291bnRTaWduYXR1cmUiOiJ1MklHNWV3MTBQQkxpT1cwWHRyYmhTUWhBK0FnbmtCd0twNzY5L3RPUU82enh2b2JUc2RlMjR2WTJrY2laa3lVZ1Nqc3gxTHNSN3R2S3RsSmxjeE1EQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiSWl6YTZLcFRqSHh3WnE4RHZ5bVJlL1ZwQmZuL1UycHptd0t6aUxqVHM1bnpiM0FCVXR6bXI1NXFxSGZUbk9ldk42N2VUTTFMWWpQWEE2Z002MXgvRHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc0MjYzNzM3NDo3OEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZcWx4Mk5uS2dObktoTUVvbmI2NVg4RzZXR0xMMWRzSG5mU01HL0VIeGQ4In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwNzY4NDY4fQ==",      //Put Your Session Id Here
  author:  process.env.PACK_AUTHER ||  'SITHUWA BOT',
  packname:  process.env.PACK_NAME || 'MADE BY SITHUM KALHARA',
  
  botname:   process.env.BOT_NAME === undefined ? "SITHUWA-MD" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'sithumkalhara' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '234' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  caption :process.env.CAPTION || "\t*•ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱɪᴛʜᴜᴡᴀ-ᴍᴅ•* ",   //*『sᴜʙsᴄʀɪʙᴇ • ʙʟᴀᴅᴇ ᴛᴇᴄʜ』*\n youtube.com/@blade444"),	
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'sithuwa-md',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 
