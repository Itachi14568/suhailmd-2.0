const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://Itachi:Itachi@cluster0.vkdxcxa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_21_11_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjEwLFxuICAgICAgICA1NyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTEsXG4gICAgICAgIDI1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTA1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1MixcbiAgICAgICAgODQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgODQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODUsXG4gICAgICAgIDU4LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxODcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDg4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTc2LFxuICAgICAgICA5OSxcbiAgICAgICAgMjM0LFxuICAgICAgICA3NixcbiAgICAgICAgMTU4LFxuICAgICAgICAzMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxODUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTc2LFxuICAgICAgICA4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDM1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTUyLFxuICAgICAgICA0MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICA2NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDU3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTczLFxuICAgICAgICAxODcsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTczLFxuICAgICAgICAzNixcbiAgICAgICAgODgsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTM4LFxuICAgICAgICA5LFxuICAgICAgICA4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTY5LFxuICAgICAgICA3OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDgyLFxuICAgICAgICA0MSxcbiAgICAgICAgMjE4LFxuICAgICAgICA2NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDU2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIxLFxuICAgICAgICAyOCxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyOSxcbiAgICAgICAgODYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMDksXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDc5LFxuICAgICAgICA1OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjksXG4gICAgICAgIDY0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDExLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjMyLFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTc1LFxuICAgICAgICA0MyxcbiAgICAgICAgMjI3LFxuICAgICAgICA3NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTE0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAzMixcbiAgICAgICAgMzEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTk0LFxuICAgICAgICA0OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMDJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDQwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDY0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0LFxuICAgICAgICAzNixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxODEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTM2LFxuICAgICAgICA0MSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI2LFxuICAgICAgICA4NixcbiAgICAgICAgMTMsXG4gICAgICAgIDk3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDY4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDcsXG4gICAgICAgIDgwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAzNixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxLFxuICAgICAgICA4NixcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDczLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTg1LFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ3L0I0SjBnZmI5WnJRQ0gxWnBGYXFsSzBVTnU2YVgxZlkxQ0pvZlBsU0RvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIzYlZHUEJNUlRMNko3VkVaZERkV1pBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjJhZWRiOGJjLTkyNjAtNDc2MS05MTJjLWRkMTRlMjkwMzllM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2NCxcbiAgICAgIDE1OCxcbiAgICAgIDMxLFxuICAgICAgNjcsXG4gICAgICAyMTksXG4gICAgICAyMjksXG4gICAgICAyNCxcbiAgICAgIDI0LFxuICAgICAgMjE2LFxuICAgICAgMTEzLFxuICAgICAgODgsXG4gICAgICAxMjksXG4gICAgICAxODEsXG4gICAgICAxNTUsXG4gICAgICAxMzUsXG4gICAgICAyMzksXG4gICAgICAxMjMsXG4gICAgICA2MyxcbiAgICAgIDk5LFxuICAgICAgMjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg4LFxuICAgICAgOTUsXG4gICAgICAxODQsXG4gICAgICAyMDgsXG4gICAgICAyMDAsXG4gICAgICAxMDksXG4gICAgICAyMzQsXG4gICAgICAxMTMsXG4gICAgICA1MCxcbiAgICAgIDE2MyxcbiAgICAgIDE5OCxcbiAgICAgIDM4LFxuICAgICAgNjMsXG4gICAgICAxNjAsXG4gICAgICA3OCxcbiAgICAgIDIyNCxcbiAgICAgIDEyNyxcbiAgICAgIDE2LFxuICAgICAgMTQyLFxuICAgICAgMjQ5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkE1MTdRM1lCXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDQzNTQ2ODU2OjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI0OTIzODQ2MjUwNjIwOjlAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiLlwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09ySWwrRURFTm5JbkxrR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMnVEckw0OGdoaUtsOW9GWTNSM05zZVNMTDJRRDBPMkhaSDJxeHkxQ1gxYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJhTm9rem5qbGVoMHpVM2FsM25hdTU1UzYrUERUUlRWdFZrZ01QY0dqZXVFakJqeThqa3Axbmw3VWlxcm9rendvNW9MNzI3TGJLSk5VNnUyMUVrRUNBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJPaE1qSjZuRHZPaXJRZmVwTkFCZXFxSXFrcWdtT1BaV1RIMkxhZ1FTUE0xUXIwWGJGMWdYSFBVMTc5Q2tuT3ZMektCTTIxemhxM3VxcFVtcW5BUUhCZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDQzNTQ2ODU2OjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDg3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzA2MTg0NjEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBcGRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFwZC5qc29uIjogIntcImtleURhdGFcIjpcIjdHU3lYdUR0anpRSWlJa054eXk5eVl5SjAxUDBSR3JTNGFjcFRVdHlTOG89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTAwOTExNjI2NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMwNjE4NDY2MjEwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "+",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "下K・ÎTÃÇHÎ",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
