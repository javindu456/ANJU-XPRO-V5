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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUhVekhySmcxRHpwQjFyRkUzQjJQdGcxcDVORGR2L1FYMzl2MmNDRGttcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieWFMTy9WR3ZNZDhBUmJlR0NueDAzbk91cHQvaDJZSlljQm8vbGVDWlBrYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3RUx5ZFJ2Y3Rkalk2QnNRYXBJZkZPQWx0THphTTA0WWF5OTgwOFB2c2tVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtL2hIV3hTbkRYTlFGOGgxcGxmdU1PRlZvUWpBMEhPbVlOeVpZalZWTUY4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitFRXhzNVhGRFR2QkJUTkVKUm56YjZnZ0w5OVRjQkJMdXB6ZDRZMU5DSGs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRZa29VcG81K3BYa3c2TWFGMXVqbVlqK2RsbGs5TjlOUHY5Si9iMGZFVkE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEkrOTB6cmFYTDF0S3Q0eUV2MVptZlpsSlIrczFOd203U0FPbncwbmZIQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibFlvMHRFSm85ZTFQeEozOEQwNDJnLzE2bjZrNGVXQ1JSU01IT3lIcW9Ecz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhNT2ppVXgydkczeFAxS1k4OXpwVE9VUy9pNmNreERnVGhhb21yZHlNTlJkRmI2L0ZuN2hiZmVMUTF1aCtTOHhac2dmTEl1T0JZbzhnODlTVG9WNGl3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzUsImFkdlNlY3JldEtleSI6IkZXZjV3UDBVTjhVc1RCTnpKTjFCK1RGRWs0c1ExanFaa1FFZnlGQ0NpRDA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ik5hYTBYXzlDUTBlQ3JENVYxcHQ3c1EiLCJwaG9uZUlkIjoiODU3NThhODEtOWQ4ZC00Y2JjLWE3ZGUtMWRhMTI5YjYxZmIyIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik85bjByZHFWMnZnUXk2NmFlbVRNcy9RWCs3OD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWaldiTnJvTUJPNXpwTWxCQUFsQlhTcURHWUU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiV1dDSzNBTjgiLCJtZSI6eyJpZCI6Ijk0NzY5OTY5MjgwOjVAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiI2MzczNzkzNTQ3NDg3Nzo1QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTHlaK1BzREVNVEhrc01HR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZmc1azR0bWJnNUQ5LzhlRW5rN1ZxeENtQXZWTk5FdldheXo5RGdmRGhDOD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiMVV5WEg5RTlsWmMrMnQvUkNSUXZzQ0NZOXBZTG5vQTZMdzRYZzdscFc1cnM4T2ZQK2FDZjlYU1JaWWxZQysraW9tN2kzNGhuTU1aSmE2UndYaGR4Q3c9PSIsImRldmljZVNpZ25hdHVyZSI6Ik1xZUFKM2tBaGRLSFJ0Umh6SFBFYWdqY3R0UlF6Tlh6eENQTWFRckthazhYUWhLcEFYRFpvRkZpNDNhWURteDEraTJ1MmRTQkkxM05CZkZ3WjZqZ2l3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3Njk5NjkyODA6NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYNE9aT0xabTRPUS9mL0hoSjVPMWFzUXBnTDFUVFJMMW1zcy9RNEh3NFF2In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQUlJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTE0MjYwMDIsImxhc3RQcm9wSGFzaCI6IjNSOVozOSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBR1NDIn0=",
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
