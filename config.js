u7//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "254705260735@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Kenya";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || 
global.website = process.env.GURL || 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "254705260735";
global.owner = process.env.OWNER_NUMBER || "254705260735";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUFPOTFweW9JY1JKV25oczB1VzBWK3hyV1Q3QVU5NEV5blB4MGF1NzlVaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZGxVbnV4RDNPYXBYL29iM0lISzhPTWJnbDd4bCtBZkl5MHg5NmlHMTNDVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2RFRFY1F5VWhtNFFSYjdJWVpOYXJPdXJBK3RhcGcxdC9hOXU4WXlEOUV3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlb284U2VaR0R3R3UvelBGUlR4Q0U3aXhDZVhMa050eXIwRDlDdGVVUUc4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlMRC9QV1FtTFBVWGFWcDUvVXJaUWFxTUh6V2lZanBxakd0alhuMDZYMUk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inp4MGZvYXdsajJ4cjVERTNscFk0SjdZaXU5MXBDK3RiYm1ZMkllY1BMek09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkxONWhTZG9ZSWR3L0NTWXVFN0ROSFJHMlY2ank4M3RPU0J2SmhDQkRuTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicW1tWTVuc2FPZHJMR1JjRzgyWTIyK0tiamNIU2tSK3pBYmVpUy9hUm9tUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im14MXVjNFZWZE9pTjBKSVBkOENtcUlwSmJwSEdjNDFlamtLRDlhY0RrQWt5WGJydGdkQ1J3SE4xOW1RbTgyUnlGSmZSN21CVjJnZHRubjBMYjJscENBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg3LCJhZHZTZWNyZXRLZXkiOiJWMVdJYWhhQTIzRk80ZzBwT0d2V1lZV1pxcStIRmluUmp0ZG5NWSsvL0hNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDcwNTI2MDczNUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzRjRFMEU5Mjg0Q0JDOTNDNTBGOTk4MDVERjg1NkM3MSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyNzI2Mjc3fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTQ3MDUyNjA3MzVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNUVCRDNBNTlFRkI0NUE4Nzk2RTk2MjNDRDhERjNFQjUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMjcyNjI3OH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiMzRkOWVHUkVSaDJxMDI5TXpRUFRrZyIsInBob25lSWQiOiJjOTQzMjA2MC00ODc2LTQzYWUtYjQzYy0zZGMwN2VhZTc0MmIiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic3FnRTc2a1I2b3k2ZGFyNlp2YjFpVFlLVGhjPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpGdkFqR0hFU2lJeUlvSHhVS0dVL3lnTzA3ST0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJGWDdTNEg3UCIsIm1lIjp7ImlkIjoiMjU0NzA1MjYwNzM1OjNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiRUBmaXgifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0wrL3VkMENFUGJ1dXJVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImtTbHlhNUFaaDdpYy9wN1Z5cDhxSDl6emc0QmpXcVQ3QnZYYlI5YVU0R0k9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlVnaDZVN2xBeERYSHBYSTNJSDExc0pPeHp1aS9ON3llMURGSHZQWXlFYUdWb1U0UVlKSE92TzVSTXIrSkpwRnBJcUxYTTRUam84TlF4c1BKZW9rbkFnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJva2tXZTlaQWFOLzFwSUpIVGlveVo1NlQ3N2lkVm5lbWRnaW8vR0tadEZOemtWc2xMR1grNVB4SHhvSGtmelFjUHlHK09DMmxkRFJNd1kwV1lrUmtCZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDcwNTI2MDczNTozQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlpFcGNtdVFHWWU0blA2ZTFjcWZLaC9jODRPQVkxcWsrd2IxMjBmV2xPQmkifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjI3MjYyNzUsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQ3F0In0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-ELIAKIM-TECH-😍",
  author: process.env.PACK_AUTHER || "ELI",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "ELIAKIM-md",
  ownername: process.env.OWNER_NAME || "eliakimtech",
  errorChat: process.env.ERROR_CHAT || "254705260735",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
