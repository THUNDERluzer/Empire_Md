const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="efeurhobobullish@gmail.com"
global.location="Africa/Lagos."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://wa.me/qr/P6WADRJOKAFUK1";
global.gurl  =process.env.GURL  || "https://wa.me/qr/P6WADRJOKAFUK1";
global.website=process.env.GURL || "https://wa.me/qr/P6WADRJOKAFUK1" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/7721cf222f9790f3fcd1b.jpg" || "https://github.com/efeurhobo/Empire_Md-main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "😏💖" 


global.devs = "2348078582627" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94782543893";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/7721cf222f9790f3fcd1b.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,234xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_26_11_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxLFxuICAgICAgICAxMSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjksXG4gICAgICAgIDkzLFxuICAgICAgICA5MSxcbiAgICAgICAgMTExLFxuICAgICAgICA4NCxcbiAgICAgICAgMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDk3LFxuICAgICAgICAxOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDczLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5LFxuICAgICAgICA3MSxcbiAgICAgICAgMTMyLFxuICAgICAgICA5MixcbiAgICAgICAgMTczLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDM0LFxuICAgICAgICA4OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzksXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDE1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDY3LFxuICAgICAgICAzMixcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMSxcbiAgICAgICAgMTIxLFxuICAgICAgICAzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDg5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTA4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMixcbiAgICAgICAgMTIzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjUxLFxuICAgICAgICA2NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA2NCxcbiAgICAgICAgMTI0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDQsXG4gICAgICAgIDQzLFxuICAgICAgICA3NyxcbiAgICAgICAgMjIyLFxuICAgICAgICAzNixcbiAgICAgICAgOTIsXG4gICAgICAgIDk1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDc3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDY3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTAwLFxuICAgICAgICA2MSxcbiAgICAgICAgNCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxODksXG4gICAgICAgIDM3LFxuICAgICAgICAxNjksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMCxcbiAgICAgICAgODgsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDUwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDYsXG4gICAgICAgIDQsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDM1LFxuICAgICAgICA5MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDU4LFxuICAgICAgICA3OCxcbiAgICAgICAgNyxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTIxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMzksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTc2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTE2LFxuICAgICAgICA0MixcbiAgICAgICAgMTM2LFxuICAgICAgICA4NCxcbiAgICAgICAgODksXG4gICAgICAgIDk1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjAwLFxuICAgICAgICA5OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjksXG4gICAgICAgIDM3LFxuICAgICAgICA2MixcbiAgICAgICAgMjksXG4gICAgICAgIDgxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTkxLFxuICAgICAgICA0MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDc5LFxuICAgICAgICAxODEsXG4gICAgICAgIDYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxODEsXG4gICAgICAgIDYyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjksXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEzMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQVlRdzd6aWlMNGJTQ1V2UjhJTDFhOTNkUXBkOWlKNFNIR1VpMWJibVBGdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwieFlLejkzbF9UVi02dXBzNTJzdDM1QVwiLFxuICBcInBob25lSWRcIjogXCJlZDM5NTFkNi0xZjkyLTQzZjEtYjg5ZS1hNjQzZGY5Yzk3NTJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAwLFxuICAgICAgMTg2LFxuICAgICAgMjE5LFxuICAgICAgMjUyLFxuICAgICAgMjE3LFxuICAgICAgOCxcbiAgICAgIDY1LFxuICAgICAgMjQ0LFxuICAgICAgNDYsXG4gICAgICAyMjcsXG4gICAgICAxMjUsXG4gICAgICA5OCxcbiAgICAgIDE2MyxcbiAgICAgIDE3NixcbiAgICAgIDMyLFxuICAgICAgMTUwLFxuICAgICAgNSxcbiAgICAgIDEwOSxcbiAgICAgIDIyLFxuICAgICAgMTg3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1LFxuICAgICAgMTYwLFxuICAgICAgMTQsXG4gICAgICAxNjMsXG4gICAgICAxOTMsXG4gICAgICAyNDUsXG4gICAgICA5MCxcbiAgICAgIDUwLFxuICAgICAgMTgyLFxuICAgICAgOTMsXG4gICAgICAyMzYsXG4gICAgICAyMCxcbiAgICAgIDM5LFxuICAgICAgMTQzLFxuICAgICAgMTE1LFxuICAgICAgMjEyLFxuICAgICAgMTQ2LFxuICAgICAgMjMyLFxuICAgICAgMjEzLFxuICAgICAgOTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTDgxUkM5WkxcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzgyNTQzODkzOjk4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMzgyMDc4MTk3MzkyNTA6OThAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTlRzcC80RUVKQ1ZycmtHR0I4Z0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIxRUNoWDh2UnVDL2FVVTlLZ2dBaHRYRE8yZUxoZi9VbFRpTGJKLzM4STBRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm9rckhuZDBjVTAwR3QxY0RBbWxWaVJWQjNublptb2FrMnk4L2p5VThLdmtVV0R0WUJ2RHAwNXRQY0ZQSEFCMytOWjFuSmZxTkR4ZnBFYnVZaWxBZkRRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjIrTHVjaldOTVoyWTcyNWdaSzhMOVhYenRWdEl2cEEwdm1HblBzVC9tcXJYajZTVC9GbEhlZDlCbkFvalliUEI0WENwZEZ1NUNNYTZGUUZMYjhNdmpBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzgyNTQzODkzOjk4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA2OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwOTA2NzcyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRU03XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFTTcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJuRmRkRUMxVzBwSk9TSjdjTHRldFY4LzFZWTgvTjR1Qm9ZellNRi9RRTFnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzMzg2MzU4NjAsXCJjdXJyZW50SW5kZXhcIjoxMSxcImRldmljZUluZGV4ZXNcIjpbMCwyLDYsMTBdfSxcInRpbWVzdGFtcFwiOlwiMTcyNzA3NjEwNjMzMVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "😏💖" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝐻𝑎𝑐𝑘𝑒𝑟 𝑂𝑛𝑙𝑦_𝑜𝑛𝑒_🥇𝐸𝑚𝑝𝑖𝑟𝑒 ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • 𝐻𝑎𝑐𝑘𝑒𝑟 𝑂𝑛𝑙𝑦_𝑜𝑛𝑒_🥇𝐸𝑚𝑝𝑖𝑟𝑒 𝐶ℎ𝑎𝑛𝑛𝑒𝑙』*\n youtube.com/@only_one_empire"),
 
  author : process.env.PACK_AUTHER|| "😏💖",
  packname: process.env.PACK_NAME || "Sticker by",
  botname : process.env.BOT_NAME  || "හසා😏💖",
  ownername:process.env.OWNER_NAME|| "😏💖",


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
