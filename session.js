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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUVsMzZid1RZc0R5cDFORTRGMnpDSkY5WGQ1RkFpejRCenBobGpKWU5HVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUFByd1VCdVR5cTQyVm4ya1dIR0dOTDJxZ2ppanBYR1p1UDNTSWUvcWRTaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDTUROVWVudndLanBueXBuN2Zpc0FxcmxUcU9rc2YyVjlmK042U2RLVjNZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXM1dZOGlpemFNVmZmMitXSVBpNHhWbTM4aDJaejNnRGNlVW9LNDB5MGdzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBKTDhMK1kraktabUFVRm9YOGRzTjJydjVMdS9SSzVya05GcDNUMFNjVlk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhObWlvWUswelQwbzhKTjlONU44U2Q5RHBIZXpoN3Z5UGlVK0xoanhZQjA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMk4yUkhsNHIvNkRLNE1aaEJxMVlOM0JyN2ZmaTFkVzVUOXpHeStoQkNtZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUDJhZlpZSFJkNGg0eUs3MWpUZ0FaR0JyQit5eitZcEpYMHdGN1dMSVBTQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImQwUy9aaG41Q3ltd2gxM3p0bjloNWNFQ0lCQlNkT2lQR1JoTjRERUcvYVNZcVlYR3d6bklaaGZnZmFlbjRQM2xjYk1oN2FrK0Y2Vzg5RmJJV0hYbENnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk1LCJhZHZTZWNyZXRLZXkiOiJFN01VSmhIZ2o1V0FOZXJwb0wrNHo0VWM1MkZTR0YvMU1aSzlRblkwT09nPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI4QTR3X01vNlNfYTU4SmVtWEdzQ2x3IiwicGhvbmVJZCI6ImJjZWY0OTY1LTFkMmItNGMyNy04YTY5LTg2YmZhZGY0YTZmNiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLZUJSeTltcllDYXZpTmZ3dDNUcHFnSlV2dGM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieWRqODQxNnhMaVhJNDN1REFBTW9wRXRWV244PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjdITjcxTVZCIiwibWUiOnsiaWQiOiI5NDc2MzkwODg1ODo4QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjY2NTY3NzE1Njg0NDUwOjhAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJR3g3NTRERVBMSXBjTUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI4aWt2aGJ6ZDlpakRnTlJlY1BsMHhlSDY5ejhBSkY0bGx3emNiWEVLZ1NjPSIsImFjY291bnRTaWduYXR1cmUiOiJuTHI0MmcxRmNEU1hNNmZiMFF2Vk5NL2ppZFIybG83bC9wbG4rUjYrYWNIMTk3VXBIZll2cWwyQTVWRmwxS254UG9lTkF1QmU0RDVQVlpKTS95MUNCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiaFZUTlJaN1hHM3g1Y0dTdEFNK3FQWWpUdDgvemgxMkM3amUrRjJGSktEaUtVYlcwU3krbFcyYmxTa2xhdm5lRWE0UE0razVCMWtaWSt2anlqbDF4RFE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc2MzkwODg1ODo4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmZJcEw0VzgzZllvdzREVVhuRDVkTVhoK3ZjL0FDUmVKWmNNM0cxeENvRW4ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElCUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1MTczNzQ3MSwibGFzdFByb3BIYXNoIjoiMUs0aEg0IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFOa28ifQ==",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94763908858",
  PASSWORD: 
    process.env.PASSWORD || "javindu@2006",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
