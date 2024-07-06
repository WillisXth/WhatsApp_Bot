const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="Winspertech.100@gmail.com"
global.location="Kisumu,Kenya."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://Willis254:d5_!LpGM#i_w.U!@cluster0.hhbfqup.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github=process.env.GITHUB|| "https://github.com/WillisKE/Suhail";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaZ8Q0Y1XquZ673Uvs0m";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaZ8Q0Y1XquZ673Uvs0m" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d7b133573a5a3622775e6.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ɢɛռɛʀǟȶɛɖ ᏰᎩ ᏇᎥᏝᏝᎥᏕ" 


global.devs = "254786273945" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "254786273945,254702365210,254708336448,254762508828";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254786273945,254702365210,254708336448,254762508828,254101827915";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '3'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" //"text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "unavailable" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNk1NcUR2TlkzU2ZmSVVhSGl3NFJOQ2ErNFI3TlN2ZVB4SFpJUFR0elBVWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVC91ZVBKWkdreWxzejFpUHZZUEp1QjJKMGhJa2pub1pFei9vSnRMQWhrWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlS1NuU1U3amVNWnhYYTlsM1JGNHZyejczNUJqQy93aE5IUHBxdjhjRFZjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHM2ZYV1dIVGNwR2JLVzdHMjZ3UTYxa09GZFhHS2FWMUZlK2RiMUlLSlI4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdEbDluc3lqUEgyWmZpZnhDWEl4YXI0clJ2bmx3ZWw5d2dLb0hRNEtoRUU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imxkcks4eFBrb28yaHQvblUxcVpQaGpNanl0R0h3TVZYRHpkM3c4YkpjeTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0FvUm0yczFHRlRtaGUzM0NaRXBXMkZ6bEh1WURsVitUb1hYNXVaWTVGST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicGxWd09haFRsZTM2cHdLanJTZER2Q1V0ZTREVWtmdTZVMDZVbWNjdVZCYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVmeEcrd1l2UmU4Zk5mQm1SbXhWVGs0Rm8xN0R3WUZsS0lOcmlzeFBCbEFWblhQVE5xak05cmlOek1zcEFNRVI0TExjcFlQOEhFRU9PeDBETWNXYWpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAsImFkdlNlY3JldEtleSI6ImtrNjhhTUxHMTlVcUZxU043SG1WU2VLSTRwdEdEL2hIUldTTUd2TXAxSUE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjZMa19LcGtmUnlDUFNnbjJlaVh6MmciLCJwaG9uZUlkIjoiYjY3OTI4N2UtMDlkMC00ZWU2LTgwMDEtODA4YjQ4MGJlNzk0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBsYU5icGp1T21mc1FoZzZBK21uVkk2cHk3VT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWQ0tnV0tJNmtkVHJNTXJHbzk5YzVic0QzeVU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiOVFLUVJXUkciLCJtZSI6eyJpZCI6IjI1NDc4NjI3Mzk0NTo1MkBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTVR1bTVvQkVPblNqN1FHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiMTRrUUEyWkh6c05qOHNnSmh4cTRnSVpaNFJBUGxkbi90YVJUbkk0NWVHST0iLCJhY2NvdW50U2lnbmF0dXJlIjoiMG1Jd2thWUpFMzdJK3QrZzNvaTArdzZWbEkrSEZHQ0FUZ3pUQ3pzSGZSRVp1SUdISGdtV1dJbmVSM1VmSWhJMWNXQ3ZIOVVVYWZ4TzFyYUVvUTh4RGc9PSIsImRldmljZVNpZ25hdHVyZSI6IlhaM0NEKzRiMklBMFdrbU9LN3N6UlZEclJtKzA4bjNWd1NZRnd0VlZwWjExWWltNUFPaytSNHVxWURUa1YvS0lXS2JKd1puUnlXZ24vUzRXeXNwb2hnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0Nzg2MjczOTQ1OjUyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmRlSkVBTm1SODdEWS9MSUNZY2F1SUNHV2VFUUQ1WFovN1drVTV5T09YaGkifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTk5MjEwMTZ9"


module.exports = {

  menu: process.env.MENU || "3", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/
  style : process.env.STYLE || "3",  // put '1' & "2" here to check bot styles
  thumbimage: process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d7b133573a5a3622775e6.jpg",

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "ɢɛռɛʀǟȶɛɖ ᏰᎩ ᏇᎥᏝᏝᎥᏕ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "〃Willis",
  packname: process.env.PACK_NAME || "〃",
  botname : process.env.BOT_NAME  || "ᴡɪʟʟɪꜱ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "≛ Willis",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "ADAM"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "bb60b12577e6c25424883cc9f72ffe88";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
