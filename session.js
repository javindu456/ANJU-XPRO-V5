//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUtJV2VqWWJCMnB3ODM4WldsN2pCbFI4aG83YUU4Nlhyd015c2dOTFNYTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYmw4S3laMHh3UFdQaUY2RHBhdHBrRTRtNUtnVmVWS2RxemNoNk03ZnBoQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4REU3TW9SWEhoOHdqVHBjZDZoZVU0R0g4Vm1SVTJJL0l5emNNeHVnSkZrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrVEhnR05ZSEZaK1ZBREc2M3gvdUpNNlM2RXlZZi9UaXFHR0hFSHRBK3pJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFQb2trZE04eVBUMkIyWlhFakI0Tng3d2hWbkFBMFliUGEyNGdyekRTMjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBJVFAwVFZvNXNHV1FSNzRwNnVEaHc5eG1BK0NXNzV5QmZLd3JBNkttMzA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUJUTktLTFZZc2srZzY4ZFJuSWFzUnpGeXZTR24yYitkQXFJOFI5SVRuRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSXdwTlJnTTJmaXNkc212SU56M1JybnJ4NzA5aE5OdnBuVzYrSmVjZkNVUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktjL2lheVhOTkdqRnIxQ1QyTTZiMGJlcnM5L0JKU0NBUkhXejNEWjlvQXdGVWVaRUNPdENVZFREeEc0c3hLelVkTEk0WUM3UFRvdDNwcERpeFExQWdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTgsImFkdlNlY3JldEtleSI6Iit2RUU0N0luZGVVbC9UeDBDaW9Qdk5XNWZBa3ZyWUVCTHdNMEZsQ1RHS1E9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImxCdEhrQ29pU3VtSmRrel9MZ2t3OXciLCJwaG9uZUlkIjoiZjNjZTA5NWMtY2RmMy00YzcyLTk5ODItYzdlYTFkMWU5ODMzIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imx4cDlQRXNwbHc2aVBRZG9HcHpBeFk3M1c0VT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJobld2NFVwZzFwdlZ0Q0VqSWtzOU16MlBFeDA9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUjRGNEtRVjkiLCJtZSI6eyJpZCI6Ijk0NzY5OTY5MjgwOjhAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiI2MzczNzkzNTQ3NDg3Nzo4QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTCtaK1BzREVPbnVtc01HR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZmc1azR0bWJnNUQ5LzhlRW5rN1ZxeENtQXZWTk5FdldheXo5RGdmRGhDOD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiWDFxSjJiY1lBdm84L0JtejBVQXY1Qlh3akNUVDZhYVlzQWcwNHBzZDRpcVBiMnJucEV1YkVRam51L1BRRTI2aDhtNVZiYjVwczh3T0V2SEVOSmpWQnc9PSIsImRldmljZVNpZ25hdHVyZSI6Ik9YNVhVeTc0bTdGMmtLYUNLS1R0bEpNS1FhMWI2VDZHSnlIL2o0c01PVjZlQXY1cjVMYmwwaUpyR2pVOW81SERqNStVMHB4Vi9va1lsdHI3MWNVUGdBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3Njk5NjkyODA6OEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYNE9aT0xabTRPUS9mL0hoSjVPMWFzUXBnTDFUVFJMMW1zcy9RNEh3NFF2In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQUlJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTE1NjIxMDIsImxhc3RQcm9wSGFzaCI6IjNSOVozOSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTWs0In0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "your account crated number",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
