// ⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈
//▮CLASSIC BOT INC 2024 ®️ALL RIGHTS RESERVED
//▮
//▮FORK AND DON'T FORGET TO GIVE A STAR
//▮
//▮THIS SOFTWARE IS UNDER UZ COPYRIGHT
//▮
//▮REPORT ABUSE OF THIS SOFTWARE EMAIL US
//▮reinhardtuna@mail.uk
//▮WHATSAPP US : +258 86 910 3969
//▮YOUTUBE CHANNELL: https://youtube.com/@SamuelCircute?si=cVq02S23tGxSiPjO
//▮
//╰▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
//
//┏━━━━━━━━━━━━━━━━━━━━━━━━━
//┃THIS SOFTWARE INCLUDES 
//┃SOME ENCRYPTED FILES
//┃
//┃THANKS FOR CHOOSING CLASSICBOT
//┃I WROTE THIS SCRIPT BY MYSELF THIS SCRIPT IS FOR EVERYONE DONT SELL IT
//┗━━━━━━━━━━━━━━━━━━━━━━━━━
//
process.on('uncaughtException', console.error)
require('./bot')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, WAZimBotIncection, MessageType, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType, fetchLatestBaileysVersion } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const crypto = require('crypto')
const chalk = require('chalk')
const { exec, spawn, execSync } = require('child_process')
const axios = require('axios')
const { fetchUrl, isUrl, processTime } = require("./lib/myfunc")
const path = require('path')
const url = require('url')
const os = require('os')
const got = require('got')
const hx = require('hxz-api')
const maker = require('mumaker')
const fetch = require('node-fetch')
const yts = require('youtube-yts')
const { Readability } = require('@mozilla/readability');
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const { igApi, getSessionId } = require('insta-fetcher')
let ig = new igApi("csrftoken=6wrPrUbsa05Csm9wlqxAOSqRwxxscjD;rur=16771\05427758921939\0541695476019:01f7994241f5e244ccf1bb676853d91b4f281e385e564f6c99a3592b27b0a39dada825e8;mid=Yy21jQALAAEmUl5E0beHHz_eVvyI;ds_user_id=27758921939;sessionid=27758921939%3ASGdS1WkMZToRfs%3A12%3AAYe5Sp23sp78pv0PnIRL6X-ySJdCDpe4uxbuJxtcxw;ig_did=09B76BA7-2D56-42E5-89BB-3584A9EAD69B");
ig.setCookie("csrftoken=6wrPrUbsa05Csm9wlqxAOSqRwxxscjD;rur=16771\05427758921939\0541695476019:01f7994241f5e244ccf1bb676853d91b4f281e385e564f6c99a3592b27b0a39dada825e8;mid=Yy21jQALAAEmUl5E0beHHz_eVvyI;ds_user_id=27758921939;sessionid=27758921939%3ASGdS1WkMZToRfs%3A12%3AAYe5Sp23sp78pv0PnIRL6X-ySJdCDpe4uxbuJxtcxw;ig_did=09B76BA7-2D56-42E5-89BB-3584A9EAD69B");
const Config = require('./drips');
const { color, bgcolor } = require("./lib/color");
const simpleGit = require('simple-git');
const git = simpleGit();
const Heroku = require('heroku-client');
const { PassThrough } = require('stream');
const { getLinkPreview, getPreviewFromContent } = require("link-preview-js");
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime,  sleep, clockString, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
/*let { addLevelingId, addLevelingLevel, addLevelingXp, getLevelingId, getLevelingLevel, getLevelingXp } = require("./lib/lvlfunction")*/
const speedofbot = require("performance-now")
const { mediafireDl } = require('./lib/mediafire.js')
const { lirikLagu } = require('./lib/lirik.js')
const { fromBuffer } = require('file-type')
const mel = require('kitsune-api');
let { msgFilter } = require('./Classic/zimbotii.js')
const { Boom } = require("@hapi/boom")
const ffmpeg = require('fluent-ffmpeg')
const { checkPetualangUser, addInventori, addBesi, sellBesi, getBesi, addDm, sellDm, getDm, addEmas, sellEmas, getEmas, addFish, sellFish, getFish } = require('./tez.js')
const { addLevelingId, addLevelingLevel ,addLevelingXp, getLevelingId, getLevelingLevel, getLevelingXp } = require('./level')
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require('./limit')

//xp and leveling database⧈⧈⧈⧈

//message type
/* let drips = fs.readFileSync('./Classic/drips.jpg') 
*/

//database
const  dripsno = JSON.parse(fs.readFileSync('./database/antilink.json'))
const _level = JSON.parse(fs.readFileSync('./database/leveluser.json'))
const _petualang = JSON.parse(fs.readFileSync('./database/inventori.json'))
const balance = JSON.parse(fs.readFileSync('./database/balance.json'))
const dripsanti = JSON.parse(fs.readFileSync('./lib/rude.json'))
let bad = JSON.parse(fs.readFileSync('./lib/rude.json'))
global.db = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db) global.db = {
    sticker: {},
    database: {},
    game: {},
    settings: {},
    others: {},
    users: {},
    chats: {},
    ...(global.db || {})
}

let vote = db.others.vote = []

module.exports = ZimBotInc = async (ZimBotInc, m, chatUpdate, store) => {
try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°┊π÷┊¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°┊π÷┊¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await ZimBotInc.decodeJid(ZimBotInc.user.id)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = q = args.join(" ")
const from = m.chat
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const isPetualang = checkPetualangUser(sender)
//----GROUP METADATA----\\
const groupMetadata = m.isGroup ? await ZimBotInc.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isAntinsfw = m.isGroup ?  dripsno.includes(m.chat) : false
const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
const antiToxic = m.isGroup ? dripsanti.includes(from) : false
const zimbotincv3 = body.slice(0).trim().split(/ +/).shift().toLowerCase()
//-----END HERE------\\

const runtime = function (seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var m = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " Day, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " Hour, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " Minute, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " second" : " Second") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
}



const tempButton = async (remoteJid, text, footer, content) => {
const templateMessage = {
 viewOnceMessage: {
 message: {
templateMessage: {
hydratedTemplate: {
hydratedContentText: text,
hydratedContentFooter: footer,
hydratedButtons: content,
},
},
},
},
};
const sendMsg = await ZimBotInc.relayMessage(remoteJid, templateMessage, {});
};
    
const reply = (teks) => {
  ZimBotInc.sendMessage(m.chat, {text: teks, contextInfo: {"externalAdReply": {title: "ᴢɪᴍ ʙᴏᴛ ᴠ5",mediaType: 3, renderLargerThumbnail: false, showAdAttribution: true, detectLinks: true,body: "DRIPS OFC", thumbnail: fs.readFileSync('./drips.jpg'),sourceUrl: ("https://chat.whatsapp.com/EPSGKau0IVi7J5lyOJO7Jk")}}})
}
const replay = (teks) => {
  ZimBotInc.sendMessage(m.chat, {text: teks, contextInfo: {"externalAdReply": {title: "ᴢɪᴍ ʙᴏᴛ ᴠ5",mediaType: 3, renderLargerThumbnail: false, showAdAttribution: true, body: "DRIPS OFC", thumbnail: fs.readFileSync('./drips.jpg'),sourceUrl: ("https://chat.whatsapp.com/EPSGKau0IVi7J5lyOJO7Jk")}}})
}    
 
const tempButtons = async (remoteJid, text, footer, content) => {
bufu = await getBuffer(picak+'OWNERMENU')
let message = await prepareWAMessageMedia({ image: bufu, jpegThumbnail:bufu }, { upload: ZimBotInc.waUploadToServer })
const templateMessage = {
viewOnceMessage: {
message: { 
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: text,
hydratedFooterText: `➢𝙰𝙻𝙻 𝙷𝙰𝙸𝙻 𝚃𝙾 𝙺𝙸𝙽𝙶 𝚂𝙰𝙼 \n➢𝙲𝙻𝙰𝚂𝚂𝙸𝙲 𝙱𝙾𝚃 2024`,
hydratedButtons: content,
},
},
},
},
};
const sendMsg = await ZimBotInc.relayMessage(remoteJid, templateMessage, {});
};
const tempButtoni = async (remoteJid, text, footer, content) => {
bufu = await getBuffer(picak+'DATABASEMENU')
let message = await prepareWAMessageMedia({ image: bufu, jpegThumbnail:bufu }, { upload: ZimBotInc.waUploadToServer })
const templateMessage = {
viewOnceMessage: {
message: { 
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: text,
hydratedFooterText: `➢𝙰𝙻𝙻 𝙷𝙰𝙸𝙻 𝚃𝙾 𝙺𝙸𝙽𝙶 𝚂𝙰𝙼 \n➢𝙲𝙻𝙰𝚂𝚂𝙸𝙲 𝙱𝙾𝚃 2024`,
 hydratedButtons: content,
},
},
},
},
};
const sendMsg = await ZimBotInc.relayMessage(remoteJid, templateMessage, {});
};
const tempButtonie = async (remoteJid, text, footer, content) => {
bufu = await getBuffer(picak+'PHOTOOXYMENU')
let message = await prepareWAMessageMedia({ image: bufu, jpegThumbnail:bufu }, { upload: ZimBotInc.waUploadToServer })
const templateMessage = {
viewOnceMessage: {
 message: { 
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: text,
hydratedFooterText: `➢𝙰𝙻𝙻 𝙷𝙰𝙸𝙻 𝚃𝙾 𝙺𝙸𝙽𝙶 𝚂𝙰𝙼 \n➢𝙲𝙻𝙰𝚂𝚂𝙸𝙲 𝙱𝙾𝚃 2024`,
hydratedButtons: content,
},
},
},
},
};
const sendMsg = await ZimBotInc.relayMessage(remoteJid, templateMessage, {});
};
const tempButtono = async (remoteJid, text, footer, content) => {
bufu = await getBuffer(picak+'GROUPMENU')
let message = await prepareWAMessageMedia({ image: bufu, jpegThumbnail:bufu }, { upload: ZimBotInc.waUploadToServer })
const templateMessage = {
viewOnceMessage: {
message: { 
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: text,
hydratedFooterText: `➢𝙰𝙻𝙻 𝙷𝙰𝙸𝙻 𝚃𝙾 𝙺𝙸𝙽𝙶 𝚂𝙰𝙼 \n➢𝙲𝙻𝙰𝚂𝚂𝙸𝙲 𝙱𝙾𝚃 2024`,
hydratedButtons: content,
},
},
},
},
};
const sendMsg = await ZimBotInc.relayMessage(remoteJid, templateMessage, {});
};
const tempButton1 = async (remoteJid, text, footer, content) => {
bufu = await getBuffer(picak+'ALL MENU')
let message = await prepareWAMessageMedia({ image: bufu, jpegThumbnail:bufu }, { upload: ZimBotInc.waUploadToServer })
const templateMessage = {
viewOnceMessage: {
message: { 
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: text,
hydratedFooterText: `➢𝙰𝙻𝙻 𝙷𝙰𝙸𝙻 𝚃𝙾 𝙺𝙸𝙽𝙶 𝚂𝙰𝙼 \n➢𝙲𝙻𝙰𝚂𝚂𝙸𝙲 𝙱𝙾𝚃 2024`,
hydratedButtons: content,
},
},
},
},
};
const sendMsg = await ZimBotInc.relayMessage(remoteJid, templateMessage, {});
};
const saerchmenu = async (remoteJid, text, footer, content) => {
bufu = await getBuffer(picak+'SEARCHMENU')
let message = await prepareWAMessageMedia({ image: bufu, jpegThumbnail:bufu }, { upload: ZimBotInc.waUploadToServer })
const templateMessage = {
viewOnceMessage: {
message: { 
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: text,
hydratedFooterText: `➢𝙰𝙻𝙻 𝙷𝙰𝙸𝙻 𝚃𝙾 𝙺𝙸𝙽𝙶 𝚂𝙰𝙼 \n➢𝙲𝙻𝙰𝚂𝚂𝙸𝙲 𝙱𝙾𝚃 2024`,
hydratedButtons: content,
},
},
},
},
};
const nsfmenu1 = async (remoteJid, text, footer, content) => {
bufu = await getBuffer(picak+'nsfmenu')
let message = await prepareWAMessageMedia({ image: bufu, jpegThumbnail:bufu }, { upload: ZimBotInc.waUploadToServer })
const templateMessage = {
viewOnceMessage: {
message: { 
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: text,
hydratedFooterText: `➢𝙰𝙻𝙻 𝙷𝙰𝙸𝙻 𝚃𝙾 𝙺𝙸𝙽𝙶 𝚂𝙰𝙼 \n➢𝙲𝙻𝙰𝚂𝚂𝙸𝙲 𝙱𝙾𝚃 2024`,
hydratedButtons: content,
},
},
},
},
};
const sendMsg = await ZimBotInc.relayMessage(remoteJid, templateMessage, {});
};


                    
const downloadmenu1 = async (remoteJid, text, footer, content) => {
bufu = await getBuffer(picak+'DOWNLOADMENU')
let message = await prepareWAMessageMedia({ image: bufu, jpegThumbnail:bufu }, { upload: ZimBotInc.waUploadToServer })
const templateMessage = {
viewOnceMessage: {
message: { 
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: text,
hydratedFooterText: `➢𝙰𝙻𝙻 𝙷𝙰𝙸𝙻 𝚃𝙾 𝙺𝙸𝙽𝙶 𝚂𝙰𝙼 \n➢𝙲𝙻𝙰𝚂𝚂𝙸𝙲 𝙱𝙾𝚃 2024`,
hydratedButtons: content,
},
},
},
},
};
const sendMsg = await ZimBotInc.relayMessage(remoteJid, templateMessage, {});
};
const photofiltermenu1 = async (remoteJid, text, footer, content) => {
bufu = await getBuffer(picak+'PHOTOFILTERMENU')
let message = await prepareWAMessageMedia({ image: bufu, jpegThumbnail:bufu }, { upload: ZimBotInc.waUploadToServer })
const templateMessage = {
viewOnceMessage: {
message: { 
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: text,
hydratedFooterText: `➢𝙰𝙻𝙻 𝙷𝙰𝙸𝙻 𝚃𝙾 𝙺𝙸𝙽𝙶 𝚂𝙰𝙼 \n➢𝙲𝙻𝙰𝚂𝚂𝙸𝙲 𝙱𝙾𝚃 2024`,
hydratedButtons: content,
},
},
},
},
};
const sendMsg = await ZimBotInc.relayMessage(remoteJid, templateMessage, {});
};
const toolmenu1 = async (remoteJid, text, footer, content) => {
bufu = await getBuffer(picak+'TOOLMENU')
let message = await prepareWAMessageMedia({ image: bufu, jpegThumbnail:bufu }, { upload: ZimBotInc.waUploadToServer })
const templateMessage = {
viewOnceMessage: {
message: { 
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: text,
hydratedFooterText: `➢𝙰𝙻𝙻 𝙷𝙰𝙸𝙻 𝚃𝙾 𝙺𝙸𝙽𝙶 𝚂𝙰𝙼 \n➢𝙲𝙻𝙰𝚂𝚂𝙸𝙲 𝙱𝙾𝚃 2024`,
hydratedButtons: content,
},
},
},
},
};
const sendMsg = await ZimBotInc.relayMessage(remoteJid, templateMessage, {});
};
const ephotomenu1 = async (remoteJid, text, footer, content) => {
bufu = await getBuffer(picak+'EPHOTOMENU')
let message = await prepareWAMessageMedia({ image: bufu, jpegThumbnail:bufu }, { upload: ZimBotInc.waUploadToServer })
const templateMessage = {
viewOnceMessage: {
message: { 
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: text,
hydratedFooterText: `➢𝙰𝙻𝙻 𝙷𝙰𝙸𝙻 𝚃𝙾 𝙺𝙸𝙽𝙶 𝚂𝙰𝙼 \n➢𝙲𝙻𝙰𝚂𝚂𝙸𝙲 𝙱𝙾𝚃 2024',
hydratedButtons: content,
},
},
},
},
};
const sendMsg = await ZimBotInc.relayMessage(remoteJid, templateMessage, {});
};
const convertmenu = async (remoteJid, text, footer, content) => {
bufu = await getBuffer(picak+'CONVERTMENU')
let message = await prepareWAMessageMedia({ image: bufu, jpegThumbnail:bufu }, { upload: ZimBotInc.waUploadToServer })
const templateMessage = {
viewOnceMessage: {
message: { 
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: text,
hydratedFooterText: `➢𝙰𝙻𝙻 𝙷𝙰𝙸𝙻 𝚃𝙾 𝙺𝙸𝙽𝙶 𝚂𝙰𝙼 \n➢𝙲𝙻𝙰𝚂𝚂𝙸𝙲 𝙱𝙾𝚃 2024`,
hydratedButtons: content,
},
},
},
},
};
const sendMsg = await ZimBotInc.relayMessage(remoteJid, templateMessage, {});
};                                  
const sendMsg = await ZimBotInc.relayMessage(remoteJid, templateMessage, {});
};
const drip =  {
  key : {
    fromMe: false,
participant : '0@s.whatsapp.net'
},
     contextInfo: {
    forwardingScore: 9999,
    isForwarded: false, 
showAdAttribution: true,
title: "𝐂𝐥𝐚𝐬𝐬𝐢𝐜-𝐕4",
body: "GIVE IT A STAR",
mediaType: "VIDEO",
mediaUrl: `https://github.com/Samue-l1/Classic-V4`,
description: '𝐊𝐈𝐍𝐆',
previewType: "PHOTO",
thumbnail: fs.readFileSync('./drips.jpg'),
sourceUrl: "",
detectLinks: false,
    }}



let blessedtuna = {
    key : {
        fromMe: false,
participant : '0@s.whatsapp.net'
},
  message: {
  documentMessage: {
showAdAttribution: true,
  title: "ᴢɪᴍ ʙᴏᴛ ᴠ5", 
  jpegThumbnail: fs.readFileSync('./drips.jpg')
}
}
 }

 
 let mudratunha = {
    key: { 
         fromMe: false,
         participant: `0@s.whatsapp.net`, ...(m.chat ? 
    { remoteJid: "17608914335-1625305606@g.us" } : {}) 
               },
    message: { 
       "extendedTextMessage": {
                "text":'𝐊𝐈𝐍𝐆',
                "title": '𝐂𝐥𝐚𝐬𝐬𝐢𝐜-𝐕4',
                'jpegThumbnail': fs.readFileSync('./drips.jpg')
             }
           } 
          }

let picaks = [flaming,fluming,flarun,flasmurf,mehk,awog,mohai,mhehe]
let picak = picaks[Math.floor(Math.random() * picaks.length)]
    try {
 let isNumber = x => typeof x === 'number' && !isNaN(x)
 let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
 let user = global.db.users[m.sender]
 if (typeof user !== 'object') global.db.users[m.sender] = {}
 if (user) {
   if (!isNumber(user.afkTime)) user.afkTime = -1
   if (!('afkReason' in user)) user.afkReason = ''
   if (!isNumber(user.limit)) user.limit = limitUser
 } else global.db.users[m.sender] = {
   afkTime: -1,
   afkReason: '',
   limit: limitUser,
 }
 let chats = global.db.chats[m.chat]
   if (typeof chats !== 'object') global.db.chats[m.chat] = {}
   if (chats) {
  if (!('mute' in chats)) chats.mute = false
  if (!('chatbot' in chats)) chats.chatbot = false
  if (!('antilink' in chats)) chats.antilink = true
  if (!('antilinkyt' in chats)) chats.antilinkyt = false
  if (!('autoblock' in chats)) chats.autoblock = false
  if (!('isWelcome' in chats)) chats.isWelcome = false
  if (!('localonly' in chats)) chats.localonly = true
  if (!('antilinkall' in chats)) chats.antilinkall = false
  if (!('antiytchannel' in chats)) chats.antiytchannel = false
  if (!('antitiktok' in chats)) chats.antitiktok = false
  if (!('antitelegram' in chats)) chats.antitelegram = false
  if (!('antiinstagram' in chats)) chats.antiinstagram = false
  if (!('antifb' in chats)) chats.antifb = false
  if (!('antibule' in chats)) chats.antibule = false
  if (!('antiwame' in chats)) chats.antiwame = false
  if (!('wame' in chats)) chats.wame = false
  if (!('antitwitter' in chats)) chats.antitwitter = false
  if (!('antivn' in chats)) chats.antivn = false
  if (!('antiphoto' in chats)) chats.antiphoto = false
  if (!('antisticker' in chats)) chats.antisticker = false
  if (!('antivideo' in chats)) chats.antivideo = false
 
} else global.db.chats[m.chat] = {
   mute: false,
   chatbot: false,
   wame: false,
   antilink: true,
   antilinkyt: false,
   isWelcome: false,
   antilinkall: false,
   antiytchannel: false,
   antitiktok: false,
   antitelegram: false,
   antiinstagram: false,
   antifb: false,
   antibule: false,
   antiwame: false,
   antitwitter: false,
   antisticker: false,
   antiphoto: false,
   antivn: false,
   antivideo: false,
   privatechat: true,
   localonly: true,
 }
 let setting = global.db.settings[botNumber]
 if (typeof setting !== 'object') global.db.settings[botNumber] = {}
    if (setting) {
if (!isNumber(setting.status)) setting.status = 0
if (!('autobio' in setting)) setting.autobio = true
if (!('chatbot' in setting)) setting.chatbot = false
if (!('grouponly' in setting)) setting.grouponly = false
if (!('autoblock' in setting)) setting.autoblock = false
if (!('privatechat' in setting)) setting.privatechat = true
if (!('chatgpt' in setting)) setting.chatgpt = false
    } else global.db.settings[botNumber] = {
status: 0,
autobio: true,
chatbot: false,
grouponly: false,
autoblock: false,
privatechat: true,
chatgpt: false,
    }
} catch (err) {
 console.error(err)
}
ZimBotInc.ws.on('CB:action,,battery', json => {
const batteryLevelStr = json[2][0][1].value
const batterylevel = parseInt (batteryLevelStr)
  battre = batterylevel
})  

ZimBotInc.ws.on('CB:action,,charger', json => {
const chargerLevelStr = json[2][0][1].value
const charging = parseInt (chargerLevelStr)
  charger = charging
})  
//public/self
if (!ZimBotInc.public) {
if (!m.key.fromMe) return
}

//push message to console && autoread

const Drips = require('drips-memes')
colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
let d = new Date(new Date + 3600000)
let locale = 'id'
let time = d.toLocaleString(locale, { hour: 'numeric', minute: 'numeric', second: 'numeric', timeZone: 'Africa/Harare'})
const { color } = require('./lib/color')
if (isCmd && !m.isGroup)
console.log(color('[ RECIEVED ]'), color(time, 'red'), color(`${command} [${args.length}]`), Drips.hr(), 'FROM', color(pushname))

if (isCmd && m.isGroup)
console.log(color('[ RECIEVED ]'), color(time, 'red'), color(`${command} [${args.length}]`), Drips.hr(), 'FROM', color(pushname), 'in', color(groupName))

//leveling
const levelRole = getLevelingLevel(sender, _level)
  var role = 'bronz'
  if (levelRole <= 3) {
role = 'Copper'
  } else if (levelRole <= 5) {
role = 'Iron'
  } else if (levelRole <= 7) {
role = 'Silver'
  } else if (levelRole <= 10) {
role = 'Gold'
  } else if (levelRole <= 12) {
role = 'Platinum'
  } else if (levelRole <= 15) {
role = 'Mithril'
  } else if (levelRole <= 18) {
role = 'Orichalcum'
  } else if (levelRole <= 25) {
role = 'Adamantite'
  } else if (levelRole <= 45) {
role = 'Good In Game'
  }
 

//CHATBOT
if (global.dripsreadgroup) {
if (m.isGroup) { ZimBotInc.readMessages(m.chat, m.sender, [m.key.id]) }
}
if (global.dripsreadall) { if (m.message) { ZimBotInc.readMessages(m.chat, m.sender, [m.key.id]) }
}
if (global.dripsrecord) { if (m.chat) { ZimBotInc.sendPresenceUpdate('recording', m.chat) }
}

if (global.dripstyping) { if (m.chat) { ZimBotInc.sendPresenceUpdate('composing', m.chat) }
}
if (global.available) { if (m.chat) { ZimBotInc.sendPresenceUpdate('available', m.chat) }
}
if (global.unavailable) { if (m.chat) { ZimBotInc.sendPresenceUpdate('unavailable', m.chat) }
}
//RPG FUNCTION BY DRIPS
function randomNomor(min, max = null) {
  if (max !== null) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
  } else {
  return Math.floor(Math.random() * min) + 1//removing credits is not any option
  }
  }

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
  }
let beedrips = [f1,f2,f3,f4,f5,f6]
        let dripsee = pickRandom(beedrips)
/*
if (budy.includes("://chat.whatsapp.com/")) {
  console.log(
    color("[AUTO-JOIN]", "red"),
    color("YAHAHAHHAHAH", "white")
  );
  ZimBotInc.query({
    json: [
      "action",
      "invite",
      `${budy.replace("https://chat.whatsapp.com/", "")}`,
    ],
  });
}
*/
if (isCmd && msgFilter.isFiltered(from) && !isGroup) {
  console.log(color('[SPAM]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
  return reply('〔ʙᴇ ᴘᴀᴛɪᴇɴᴛ 𝟻 sᴇᴄᴏɴᴅs/ᴄᴏᴍᴍᴀɴᴅ〕')}

const createSerial = (size) => {
  return crypto.randomBytes(size).toString('hex').slice(0, size)
  }

var elit = '*Oʀᴅɴᴀʀʏ ᴀᴅᴠᴇɴᴛᴜʀᴇ*'
if (isPremium)
{
elit = '*Aᴅᴠᴇɴᴛᴜʀᴇ ᴘʀᴏ*'
}
if (isCreator)
{
elit = '*Aᴅᴍɪɴ ɢᴀᴍᴇ*'
}
async function sendButLoc(from) {
  reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
  var button = [
{ urlButton: { displayText: `SCRIPT`, url : `${wame}` } },
{ quickReplyButton: { displayText: `INVENTORY`, id: `${prefix}inventori` } },
{ quickReplyButton: { displayText: `OWNER`, id: `${prefix}owner` } }
]
bufu = await getBuffer(picak+'RPG GAMES')
var DADYDR = `
 ┌───❴❏ 𝐀𝐁𝐎𝐔𝐓 ❏❵╼╼
 ┊ ➟𝐍𝐚𝐦𝐞 : ${pushname}
 ┊ ➟𝐑𝐚𝐧𝐤 : ${role}
 ┊ ➟𝐏𝐞𝐧𝐢𝐧 : ${elit}
 ┊ ➟𝐌𝐨𝐧𝐞𝐲 : $${(getBalance(sender, balance))}
 ┊ ➟𝐗𝐏 : ${getLevelingXp(sender)}/${reqXp}
 ┊ ➟𝐋𝐞𝐯𝐞𝐥 : ${getLevelingLevel(sender)}
 └───────────◕

 ┌───❴❏ 𝐈𝐍𝐅𝐎 ❏❵╼╼
 ┊ ➟𝐌𝐨𝐧𝐞𝐲 : $${(getBalance(sender, balance))}
 ┊ ➟𝐆𝐨𝐥𝐝 : ${getEmas(sender)}
 ┊ ➟𝐈𝐫𝐨𝐧 : ${getBesi(sender)}
 ┊ ➟𝐅𝐢𝐬𝐡 ${getFish(sender)}
 ┊ ➟𝐃𝐢𝐚𝐦𝐨𝐧𝐝 : ${getDm(sender)}
 └╼╼╼╼╼╼╼╼╼╼╼╼╼╼●

 ┌───❴❏ 𝐌𝐄𝐍𝐔 𝐑𝐏𝐆 ❏❵╼╼
 ┊ ➟${prefix}joinrpg
 ┊ ➟${prefix}quest 
 ┊ ➟${prefix}mining
 ┊ ➟${prefix}mancing
 ┊ ➟${prefix}luckyday
 ┊ ➟${prefix}luckytime
 ┊ ➟${prefix}adventure
 ┊ ➟${prefix}inventori
 └╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼●

 ┌───❴❏ 𝐅𝐀𝐑𝐌 𝐑𝐏𝐆 ❏❵╼╼
 ┊ ${prefix}killslime
 ┊ ${prefix}killgoblin
 ┊ ${prefix}killdevil
 ┊ ${prefix}killbehemoth
 ┊ ${prefix}killdemon
 ┊ ${prefix}killdemonking 
 └╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼●

 ┌───❴❏ 𝐓𝐑𝐀𝐃𝐄 𝐑𝐏𝐆 ❏❵╼╼
 ┊ ${prefix}sellikan
 ┊ ${prefix}sellbesi
 ┊ ${prefix}sellemas
 ┊ ${prefix}selldiamond
 └───────────●

 ┌───❴❏ 𝐓𝐇𝐀𝐍𝐊𝐒 ❏❵╼╼
 ┊ʏᴏᴜʀ ᴄʀᴇᴅɪᴛꜱ
 └───❴❏𝐂𝐋𝐀𝐒𝐒𝐈𝐂 𝐁𝐎𝐓❏❵╼
 `
let message = await prepareWAMessageMedia({ image: bufu, jpegThumbnail:bufu }, { upload: ZimBotInc.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: DADYDR,
hydratedFooterText: `ʀᴘɢ ɢᴀᴍᴇ ʙʏ 𝙲𝙻𝙰𝚂𝚂𝙸𝙲 𝙱𝙾𝚃`,
hydratedButtons:  [{        
    "urlButton": {
      "displayText": "https://chat.whatsapp.com/EPSGKau0IVi7J5lyOJO7Jk"
    }
}, {
quickReplyButton: {
    displayText: 'INVENTORY',
    id: `${prefix}inventori`
}},{
  quickReplyButton: {
      displayText: 'OWNER',
      id: `${prefix}owner`
  }
}
]
}
}
}), { userJid: m.chat })
ZimBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
.catch ((err) => reply(err))
}
async function sendButJoin(from, query) {
reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
 _petualang.push(sender)
fs.writeFileSync('./database/inventori.json', JSON.stringify(_petualang))        
addInventori(sender)
addLevelingId(sender) 
var name = args[0]
var serialUser = createSerial(14)
reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
bufut = await getBuffer(picak+'JOIN RPG')
var button = [
{ urlButton: { displayText: `SOURCE CODE`, url : `${wame}` } },
{ quickReplyButton: { displayText: `RPG MENU`, id: `${prefix}rpgmenu` } },
{ quickReplyButton: { displayText: `OWNER`, id: `${prefix}owner` } }
 ]
var hg = ` 
 ❴❏ 𝑺𝑼𝑪𝑪𝑬𝑭𝑼𝑳 𝑱𝑶𝑰𝑵𝑬𝑫 𝑹𝑷𝑮 ❏❵
 
╏➟ 𝐏𝐫𝐨𝐟𝐢𝐥𝐞╏
┊➟ 𝐍𝐚𝐦𝐞 : ${name}
┊➟ 𝐋𝐞𝐯𝐞𝐥 : ${getLevelingLevel(sender)}
┊➟ 𝐒𝐭𝐚𝐭𝐮𝐬 : ${elit}
┊➟𝐗𝐩  ${getLevelingXp(sender)}/${reqXp}
 ➥𝚁𝙿𝙶 𝙶𝙰𝙼𝙴➢`
  let message = await prepareWAMessageMedia({ image: bufut, jpegThumbnail:bufut }, { upload: ZimBotInc.waUploadToServer })
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
  templateMessage: {
  hydratedTemplate: {
  imageMessage: message.imageMessage,
  hydratedContentText: hg,
  hydratedFooterText: `ʀᴘɢ ɢᴀᴍᴇ ʙʏ ᴢɪᴍʙᴏᴛ`,
  hydratedButtons:  [{        
      "urlButton": {
        "displayText": "SUBSCRIBE",
        "url": "https://youtube.com/@zim-bot"
      }
  }, {
  quickReplyButton: {
      displayText: 'INVENTORY',
      id: `${prefix}inventori`
  }},{
    quickReplyButton: {
        displayText: 'OWNER',
        id: `${prefix}owner`
    }
  }
  ]
  }
  }
  }), { userJid: m.chat })
  ZimBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
  .catch ((err) => reply(err))
  }
          
async function sendButslime(from) {
ez = Math.ceil(Math.random() * 400)
addLevelingXp(sender, ez)
a = randomNomor(55)
b = randomNomor(400)
c = randomNomor(80)
d = randomNomor(3)
addLevelingXp(sender, ez)
addBalance(sender, b, balance)
addEmas(sender, a)
addBesi(sender, c)
addDm(sender, d)
bufutI = await getBuffer(picak+'KILL SLIME')
var button = [
{ urlButton: { displayText: `Script`, url : `${wame}` } },
{ quickReplyButton: { displayText: `Inventori`, id: `${prefix}inventori` } },
{ quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
]
var hg = `*Mission to kill Slime*\n\n🎁 *Reward for killing Slime*\n ┊ *Money:* $${b}\n ┊ *Iron:* ${c}\n ┊ *Gold:* ${a}\n ┊ *Diamond:* ${d}\n\n*Thank you for carrying out this mission*`
          let message = await prepareWAMessageMedia({ image: bufutI, jpegThumbnail:bufutI }, { upload: ZimBotInc.waUploadToServer })
          const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
          templateMessage: {
          hydratedTemplate: {
          imageMessage: message.imageMessage,
          hydratedContentText: hg,
          hydratedFooterText: `ʀᴘɢ ɢᴀᴍᴇ ʙʏ ᴢɪᴍʙᴏᴛ`,
          hydratedButtons:  [{        
              "urlButton": {
                "displayText": "SUBSCRIBE",
                "url": "https://chat.whatsapp.com/EPSGKau0IVi7J5lyOJO7Jk"
              }
          }, {
          quickReplyButton: {
              displayText: 'INVENTORY',
              id: `${prefix}inventori`
          }},{
            quickReplyButton: {
                displayText: 'OWNER',
                id: `${prefix}owner`
            }
          }
          ]
          }
          }
          }), { userJid: m.chat })
          ZimBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
          .catch ((err) => reply(err))
          }
          
            async function sendButgoblin(from) {
            ez = Math.ceil(Math.random() * 500)
            addLevelingXp(sender, ez)
            a = randomNomor(65)
            b = randomNomor(500)
            c = randomNomor(90)
            d = randomNomor(5)
            addLevelingXp(sender, ez)
            addBalance(sender, b, balance)
            addEmas(sender, a)
            addBesi(sender, c)
            addDm(sender, d)
            bufo = await getBuffer(picak+'KILL GLOBIN')
            var button = [
                { urlButton: { displayText: `Script`, url : `${wame}` } },
                { quickReplyButton: { displayText: `Inventori`, id: `${prefix}inventori` } },
                { quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
                ]
            var hg = `*Mission To kill Goblin*\n\n🎁 *Reward for killing Goblin*\n ┊ *Money:* $${b}\n ┊ *Iron:* ${c}\n ┊ *Gold:* ${a}\n ┊ *Diamond:* ${d}\n\n*Thank you for carrying out this misssion*`
            let message = await prepareWAMessageMedia({ image: bufo, jpegThumbnail:bufo }, { upload: ZimBotInc.waUploadToServer })
            const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
            templateMessage: {
            hydratedTemplate: {
            imageMessage: message.imageMessage,
            hydratedContentText: hg,
            hydratedFooterText: `ʀᴘɢ ɢᴀᴍᴇ ʙʏ ᴢɪᴍʙᴏᴛ`,
            hydratedButtons:  [{        
                "urlButton": {
                  "displayText": "SUBSCRIBE",
                  "url": "https://youtube.com/@zim-bot"
                }
            }, {
            quickReplyButton: {
                displayText: 'INVENTORY',
                id: `${prefix}inventori`
            }},{
              quickReplyButton: {
                  displayText: 'OWNER',
                  id: `${prefix}owner`
              }
            }
            ]
            }
            }
            }), { userJid: m.chat })
            ZimBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
            .catch ((err) => reply(err))
            }
          
            async function sendButdevil(from) {
            ez = Math.ceil(Math.random() * 600)
            addLevelingXp(sender, ez)
            a = randomNomor(70)
            b = randomNomor(600)
            c = randomNomor(95)
            d = randomNomor(6)
            addLevelingXp(sender, ez)
            addBalance(sender, b, balance)
            addEmas(sender, a)
            addBesi(sender, c)
            addDm(sender, d)
            bufas = await getBuffer(picak+'KILL DEVIL')
            var button = [
                { urlButton: { displayText: `Script`, url : `${wame}` } },
                { quickReplyButton: { displayText: `Inventori`, id: `${prefix}inventori` } },
                { quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
                ]
            var hg = `*Mission to kill 𝗗𝗲𝘃𝗶𝗹️*\n\n🎁 *Reward for killing Devil*\n ┊ *Money:* $${b}\n ┊ *Iron:* ${c}\n ┊ *Gold:* ${a}\n ┊ *Diamond:* ${d}\n\n*Thank you for carrying out this mission*`
            let message = await prepareWAMessageMedia({ image: bufas, jpegThumbnail:bufas }, { upload: ZimBotInc.waUploadToServer })
            const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
            templateMessage: {
            hydratedTemplate: {
            imageMessage: message.imageMessage,
            hydratedContentText: hg,
            hydratedFooterText: `ʀᴘɢ ɢᴀᴍᴇ ʙʏ ᴢɪᴍʙᴏᴛ`,
            hydratedButtons:  [{        
                "urlButton": {
                  "displayText": "SUBSCRIBE",
                  "url": "https://youtube.com/@zim-bot"
                }
            }, {
            quickReplyButton: {
                displayText: 'INVENTORY',
                id: `${prefix}inventori`
            }},{
              quickReplyButton: {
                  displayText: 'OWNER',
                  id: `${prefix}owner`
              }
            }
            ]
            }
            }
            }), { userJid: m.chat })
            ZimBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
            .catch ((err) => reply(err))
            }
          
            async function sendButbehemoth(from) {
            ez = Math.ceil(Math.random() * 700)
            addLevelingXp(sender, ez)
            a = randomNomor(75)
            b = randomNomor(600)
            c = randomNomor(100)
            d = randomNomor(7)
            addLevelingXp(sender, ez)
            addBalance(sender, b, balance)
            addEmas(sender, a)
            addBesi(sender, c)
            addDm(sender, d)
            batai = await getBuffer(picak+'KILL BEHEMOTH')
            var button = [
                { urlButton: { displayText: `Script`, url : `${wame}` } },
                { quickReplyButton: { displayText: `Inventori`, id: `${prefix}inventori` } },
                { quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
                ]
            var hg = `*Mission to kill Behemoth*\n\n🎁 *Reward for kiling Behemoth*\n ┊ *Money:* $${b}\n ┊ *Iron:* ${c}\n ┊ *Gold:* ${a}\n ┊ *Diamond:* ${d}\n\n*Thank you for carrying out this mission*`
            let message = await prepareWAMessageMedia({ image: batai, jpegThumbnail: batai }, { upload: ZimBotInc.waUploadToServer })
            const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
              templateMessage: {
              hydratedTemplate: {
              imageMessage: message.imageMessage,
              hydratedContentText: hg,
              hydratedFooterText: `${global.botname}`,
              mentions: [sender],
              hydratedButtons: [{        
              "urlButton": {
              "displayText": "𝙹𝙾𝙸𝙽",
              "url": "https://chat.whatsapp.com/EPSGKau0IVi7J5lyOJO7Jk"
              }
            }, {
              quickReplyButton: {
                  displayText: 'INVENTORY',
                  id: `${prefix}inventori`
              }},{
                quickReplyButton: {
                    displayText: 'OWNER',
                    id: `${prefix}owner`
                }
              }
              ]
              }
              }
              }), { userJid: m.chat })
              ZimBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
                  
            .catch ((err) => reply(err))
          }
          
            async function sendButdemon(from) {
            ez = Math.ceil(Math.random() * 850)
            addLevelingXp(sender, ez)
            a = randomNomor(90)
            b = randomNomor(900)
            c = randomNomor(120)
            d = randomNomor(10)
            addLevelingXp(sender, ez)
            addBalance(sender, b, balance)
            addEmas(sender, a)
            addBesi(sender, c)
            addDm(sender, d)
            bhuu = await getBuffer(picak+'KILL DEMON')
            var button = [
                { urlButton: { displayText: `Script`, url : `${wame}` } },
                { quickReplyButton: { displayText: `Inventori`, id: `${prefix}inventori` } },
                { quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
                ]
            var hg = `*Mission to kill Demon*\n🎁 *Demon Kill Reward*\n ┊ *Money:* $${b}\n ┊ *Iron:* ${c}\n ┊ *Gold*: ${a}\n ┊ *Diamond:* ${d}\n\n*Thank You for Carrying Out This Mission*`
            let message = await prepareWAMessageMedia({ image: bhuu, jpegThumbnail: bhuu }, { upload: ZimBotInc.waUploadToServer })
            const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
              templateMessage: {
              hydratedTemplate: {
              imageMessage: message.imageMessage,
              hydratedContentText: hg,
              hydratedFooterText: `${global.botname}`,
              mentions: [sender],
              hydratedButtons: [{        
              "urlButton": {
              "displayText": "SUBSCRIBE",
              "url": "https://youtube.com/@zim-bot"
              }
            }, {
              quickReplyButton: {
                  displayText: 'INVENTORY',
                  id: `${prefix}inventori`
              }},{
                quickReplyButton: {
                    displayText: 'OWNER',
                    id: `${prefix}owner`
                }
              }
              ]
              }
              }
              }), { userJid: m.chat })
              ZimBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
                  
            .catch ((err) => reply(err))
          }
          
            async function sendButdemonking(from) {
            ez = Math.ceil(Math.random() * 1000)
            addLevelingXp(sender, ez)
            addLevelingXp(sender, ez)
            addBalance(sender, 1999, balance)
            addEmas(sender, 99)
            addBesi(sender, 99)
            addDm(sender, 99)
            bhuud = await getBuffer(picak+'KILL DEMONKING ')
            var button = [
                { urlButton: { displayText: `Script`, url : `${wame}` } },
                { quickReplyButton: { displayText: `Inventori`, id: `${prefix}inventori` } },
                { quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
                ]
            var hg = `*Mission to kill DemonKing*\n\n🎁 *DemonKing Kill Reward*\n ┊ *Money* : $${b}\n ┊ *Iron :* ${c}\n ┊ *Gold :* ${a}\n ┊ *Diamond :* ${d}\n\n*Thank You for Carrying Out This Mission*`
            let message = await prepareWAMessageMedia({ image: bhuud, jpegThumbnail:bhuud }, { upload: ZimBotInc.waUploadToServer })
            const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
            templateMessage: {
            hydratedTemplate: {
            imageMessage: message.imageMessage,
            hydratedContentText: hg,
            hydratedFooterText: `ʀᴘɢ ɢᴀᴍᴇ ʙʏ ᴢɪᴍʙᴏᴛ`,
            hydratedButtons:  [{        
                "urlButton": {
                  "displayText": "SUBSCRIBE",
                  "url": "https://youtube.com/@zim-bot"
                }
            }, {
            quickReplyButton: {
                displayText: 'INVENTORY',
                id: `${prefix}inventori`
            }},{
              quickReplyButton: {
                  displayText: 'OWNER',
                  id: `${prefix}owner`
              }
            }
            ]
            }
            }
            }), { userJid: m.chat })
            ZimBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
            .catch ((err) => reply(err))
            }
          const emote = (satu, dua) => {
            try{	    
            const { EmojiAPI } = require("emoji-api");
            const emoji = new EmojiAPI();
            emoji.get(satu)
            .then(emoji => {
            const buttons = [{buttonId: "y", buttonText: {displayText:satu}, type: 1}]
            const buttonMessage = {image: {url: emoji.images[dua].url},caption: "ᴢɪᴍ ʙᴏᴛ ᴠ5",footerText: 'Loading...',buttons: buttons,headerType: 4}
            ZimBotInc.sendMessage(from, buttonMessage, {quoted:m})
            })
            } catch (e) {
            reply("Emoji error, please enter another emojinNOTE : Just enter 1 emoji")
            }
            }
//----ANTILINK AND CHATBOT-----\\
if (db.settings[botNumber].chatgpt) {
if (m.chat.endsWith("@s.whatsapp.net")) {
const { Configuration, OpenAIApi } = require('openai')
const configuration = new Configuration({
apiKey: process.env.OPENAI_API_KEY
})
const openai = new OpenAIApi(configuration)
const jsonu = await openai.createCompletion({
model: 'text-davinci-003',
prompt: text,
temperature: 0.7,
max_tokens: 3500,
top_p: 1,
frequency_penalty: 0,
presence_penalty: 0,
})
if (jsonu.statusText != 'OK' || jsonu.data.choices.length == 0) return reply('fail')
let bhabhi = jsonu.data.choices[0].text.trim()
ZimBotInc.sendMessage(m.chat,{ text: bhabhi},  {quoted: m})
}
}
if (db.settings[botNumber].privatechat) {
if (m.chat.endsWith("@s.whatsapp.net")) {
const got = require('got')
let {body} = await got(`http://api.brainshop.ai/get?bid=173030&key=zK0sxNKb6C9pA3gr&uid=[${m.sender}]&msg=[${budy}]`)
  let value = JSON.parse(body).cnt;
   m.reply(value)
 }
 }
 if (db.settings[botNumber].chatbot) {
const got = require('got')
let {body} = await got(`http://api.brainshop.ai/get?bid=173030&key=zK0sxNKb6C9pA3gr&uid=[${m.sender}]&msg=[${budy}]`)
  let value = JSON.parse(body).cnt;
   m.reply(value)
 }
 
if (db.chats[m.chat].antilink) {
if (budy.includes('https://chat.whatsapp.com/')) {
if (!m.key.fromMe) {
reply('[ 𝘾𝙇𝘼𝙎𝙎𝙄𝙑 𝗔𝗡𝗧𝗜𝗟𝗜𝗡𝗞 ]\n𝗟𝗶𝗻𝗸𝙨 𝙖𝙧𝙚 𝙣𝙞𝙜 𝙖𝙡𝙡𝙤𝙬𝙚𝙙 𝙝𝙚𝙧𝙚..,\n𝗚𝗼𝗼𝗱 𝗯𝘆𝗲 𝗜𝗺 𝗸𝗶𝗰𝗸𝗶𝗻𝗴 𝘂𝗿 𝗮𝘀𝘀 𝗻𝗼𝘄😈')
let sianj = m.sender
await ZimBotInc.groupParticipantsUpdate(m.chat, [sianj], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
}
}
if (db.chats[m.chat].wame) {
if (budy.match(`wa.me/`)) {
reply(`「 𝘾𝙇𝘼𝙎𝙎𝙄𝙑 𝗕𝗢𝗧 𝗔𝗡𝗧𝗜𝗟𝗜𝗡𝗞 」\n\n𝗬𝗼𝘂 𝗵𝗮𝘃𝗲 𝘀𝗲𝗻𝙩 𝘄𝗮.𝗺𝗲 𝗹𝗶𝗻𝗸, 𝗻𝗼 𝘁𝗶𝗺𝗲 𝘁𝗼 𝘄𝗮𝘀𝘁𝗲 𝙮𝙤𝙪 𝙖𝙧𝙚 𝗼𝘂𝘁!`)
if (!isBotAdmins) return reply(`Classic 𝘉𝘰𝘵 𝘮𝘶𝘴𝘵 𝘣𝘦 𝘢𝘥𝘮𝘪𝘯 𝘧𝘪𝘳𝘴𝘵😚`)
let gclink = (`https://wa.me/`)
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return reply(`𝘖𝘏 𝘠𝘦𝘢𝘩 𝘪𝘵 𝘥𝘪𝘥𝘯𝘵 𝘩𝘢𝘱𝘱𝘦𝘯, 𝘣𝘦𝘤𝘢𝘶𝘴𝘦 𝘺𝘰𝘶 𝘴𝘦𝘯𝘵 𝘵𝘩𝘪𝘴 𝘸𝘢.𝘮𝘦 𝘭𝘪𝘯𝘬 Unlucky Bastard😌`)
if (isAdmins) return reply(`𝘏𝘦𝘭𝘭 𝘯𝘰😱 𝘺𝘰𝘶 𝘢𝘥𝘮𝘪𝘯 and forgotten that antilink is on 😈`)
if (isCreator) return reply(`𝘖𝘰𝘰𝘰𝘩 𝘴𝘩𝘪𝘵😩 𝘴𝘰𝘳𝘳𝘺 𝘺𝘶 𝘢𝘳𝘦 𝘵𝘩𝘦 𝘰𝘸𝘯𝘦𝘳 𝘭𝘶𝘤𝘬𝘺 𝘺𝘰𝘶`)
ZimBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}
if (db.chats[m.chat].antiinstagram) {
    if (budy.includes("https://www.instagram.com/")){
 if (!isBotAdmins) return
 zimbotv3 = `*▊▊▊DETECTED▊▊▊*\n\n*lucky bastard*`
 if (isAdmins) return reply(zimbotv3)
 if (m.key.fromMe) return reply(zimbotv3)
 if (isCreator) return reply(zimbotv3)
 kice = m.sender
 await ZimBotInc.groupParticipantsUpdate(m.chat, [kice], 'remove')
 ZimBotInc.sendMessage(from, {text:`*▊▊▊DETECTED▊▊▊*\n\n@${kice.split("@")[0]} *I said no ig links here😈, now you are kicked 😤* `, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
 }
}

if (db.chats[m.chat].antisticker) {
let isSticker = m.mtype
if(isSticker === "stickerMessage"){		  
if (!m.key.fromMe) {
if (isAdmins) return reply(`*you are admin lucky you 😈dont send stickers here☠️*`)
if (isCreator) return reply(`*𝘖𝘰𝘰𝘰𝘩 𝘴𝘩𝘪𝘵😩 𝘴𝘰𝘳𝘳𝘺 𝘺𝘶 𝘢𝘳𝘦 𝘵𝘩𝘦 𝘰𝘸𝘯𝘦𝘳 𝘭𝘶𝘤𝘬𝘺 𝘺𝘰𝘶*`)
reply('*ANTI STICKER*\n\n*NO STICKERS  ALLOWED HERE OKAY GOODBYE*')
kice = m.sender
await ZimBotInc.groupParticipantsUpdate(m.chat, [kice], 'remove')
ZimBotInc.sendMessage(from, {text:`*▊▊▊DETECTED▊▊▊*\n\n@${kice.split("@")[0]} *I said no stickers here , now fuck off😈* `, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
}
}
}

if (db.chats[m.chat].antivn) {
let isAudio = m.mtype
if(isAudio === "audioMessage"){		  
if (!m.key.fromMe) {
if (isAdmins) return reply(`*you are admin lucky you dont send voice note here*`)
if (isCreator) return reply(`*𝘖𝘰𝘰𝘰𝘩 𝘴𝘩𝘪𝘵😩 𝘴𝘰𝘳𝘳𝘺 𝘺𝘶 𝘢𝘳𝘦 𝘵𝘩𝘦 𝘰𝘸𝘯𝘦𝘳 𝘭𝘶𝘤𝘬𝘺 𝘺𝘰𝘶*`)
reply('*ANTI VOICE NOTE*\n\n*NO VOICE ALLOWED HERE  OKAY GOODBYE*')
kice = m.sender
await ZimBotInc.groupParticipantsUpdate(m.chat, [kice], 'remove')
ZimBotInc.sendMessage(from, {text:`*▊▊▊DETECTED▊▊▊*\n\n@${kice.split("@")[0]} *I said no voice note here okay, now get out* `, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
}
}
}

if (db.chats[m.chat].antivideo) {
let isVideo = m.mtype
if(isVideo === "videoMessage"){		  
if (!m.key.fromMe) {
if (isAdmins) return reply(`*you are admin lucky you dont send videos here*`)
if (isCreator) return reply(`*𝘖𝘰𝘰𝘰𝘩 𝘴𝘩𝘪𝘵😩 𝘴𝘰𝘳𝘳𝘺 𝘺𝘶 𝘢𝘳𝘦 𝘵𝘩𝘦 𝘰𝘸𝘯𝘦𝘳 𝘭𝘶𝘤𝘬𝘺 𝘺𝘰𝘶*`)
reply('*ANTI VIDEO*\n\n*NO VIDEOS ALLOWED HERE  OKAY GOODBYE*')
kice = m.sender
await ZimBotInc.groupParticipantsUpdate(m.chat, [kice], 'remove')
ZimBotInc.sendMessage(from, {text:`*▊▊▊DETECTED▊▊▊*\n\n@${kice.split("@")[0]} *I said no videos here okay, now get out* `, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
}
}
}

if (db.chats[m.chat].antiphoto) {
let isPhoto = m.mtype
if(isPhoto === "imageMessage"){		  
if (!m.key.fromMe) {
if (isAdmins) return reply(`*you are admin lucky you dont send photos here*`)
if (isCreator) return reply(`*𝘖𝘰𝘰𝘰𝘩 𝘴𝘩𝘪𝘵😩 𝘴𝘰𝘳𝘳𝘺 𝘺𝘶 𝘢𝘳𝘦 𝘵𝘩𝘦 𝘰𝘸𝘯𝘦𝘳 𝘭𝘶𝘤𝘬𝘺 𝘺𝘰𝘶*`)
reply('*ANTI PHOTOS*\n\n*NO PHOTOS ALLOWED HERE  OKAY GOODBYE*')
kice = m.sender
await ZimBotInc.groupParticipantsUpdate(m.chat, [kice], 'remove')
ZimBotInc.sendMessage(from, {text:`*▊▊▊DETECTED▊▊▊*\n\n@${kice.split("@")[0]} *I said no photos here okay, now get out* `, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
}
}
}

if (db.chats[m.chat].antifb) {
if(budy.includes("https://facebook.com/")){
if (!isBotAdmins) return
zimbotv3 = `*▊▊▊DETECTED▊▊▊*\n\n*you are admin okay*`
if (isAdmins) return reply(zimbotv3)
if (m.key.fromMe) return reply(zimbotv3)
if (isCreator) return reply(zimbotv3)
kice = m.sender
await ZimBotInc.groupParticipantsUpdate(m.chat, [kice], 'remove')
 ZimBotInc.sendMessage(from, {text:`*▊▊▊DETECTED▊▊▊*\n\n@${kice.split("@")[0]} *I said no fb links here okay, now get out*`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} 
 }

 if (db.chats[m.chat].antitelegram) {
 if (budy.includes("https://t.me/")){
 if (!isBotAdmins) return
 zimbotv3 = `*▊▊▊DETECTED▊▊▊*\n*you are admin okay*`
 if (isAdmins) return reply(zimbotv3)
 if (m.key.fromMe) return reply(zimbotv3)
 if (isCreator) return reply(zimbotv3)
 kice = m.sender
 await ZimBotInc.groupParticipantsUpdate(m.chat, [kice], 'remove')
 ZimBotInc.sendMessage(from, {text:`*▊▊▊DETECTED▊▊▊*\n\n@${kice.split("@")[0]} *I said no telegram links here okay, now get out*`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} 
 }

if (db.chats[m.chat].antitiktok) {
if (budy.includes("https://www.tiktok.com/")){
if (!isBotAdmins) return
zimbotv3 = `*▊▊▊DETECTED▊▊▊*\n\n*you are bot admin okay*`
if (isAdmins) return m.reply(zimbotv3)
if (m.key.fromMe) return m.reply(zimbotv3)
if (isCreator) return m.reply(zimbotv3)
kice = m.sender
await ZimBotInc.groupParticipantsUpdate(m.chat, [kice], 'remove')
ZimBotInc.sendMessage(from, {text:`*▊▊▊DETECTED▊▊▊*\n\n@${kice.split("@")[0]} *I said no tiktok links here okay, now get out*`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
}
}

if (db.chats[m.chat].antitwitter) {
if (budy.includes("https://twitter.com/")){
if (!isBotAdmins) return
zimbotv3 = `*▊▊▊DETECTED▊▊▊*\n *you are bot admin okay*`
if (isAdmins) return reply(zimbotv3)
if (m.key.fromMe) return reply(zimbotv3)
if (isCreator) return reply(zimbotv3)
kice = m.sender
await ZimBotInc.groupParticipantsUpdate(m.chat, [kice], 'remove')
ZimBotInc.sendMessage(from, {text:`*▊▊▊DETECTED▊▊▊*\n\n@${kice.split("@")[0]} *I said no twittwer link here okay, now get out*`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
}
}

if (db.chats[m.chat].antilinkall) {
if (budy.includes("http")){ 
if (!isBotAdmins) return
zimbotv3 = `*▊▊▊DETECTED▊▊▊*\n *you are bot admin😈*`
if (isAdmins) return reply(zimbotv3)
if (m.key.fromMe) return reply(zimbotv3)
if (isCreator) return reply(zimbotv3)
kice = m.sender
await ZimBotInc.groupParticipantsUpdate(m.chat, [kice], 'remove')
ZimBotInc.sendMessage(m.chat, {text:`*▊▊▊DETECTED▊▊▊*\n@${kice.split("@")[0]} *I said no links here sikujali bye*`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
}
}


if (m.mtype == 'viewOnceMessage') {
if (!db.chats[m.chat].antionce) return
teks = `*▊▊▊DETECTED ONCE▊▊▊*

`
ZimBotInc.sendTextWithMentions(m.chat, teks, m)
await sleep(500)
m.copyNForward(m.chat, true, { readViewOnce: true }).catch(_ => reply(`*I opened it by force😈*`))
}



if (db.chats[m.chat].antilinkyt) {
if (budy.includes("https://youtube.com/")){ 
if (!isBotAdmins) return
zimbotv3 = `*▊▊▊DETECTED▊▊▊*\n*you are admin okay*`
if (isAdmins) return reply(zimbotv3)
if (m.key.fromMe) return reply(zimbotv3)
if (isCreator) return reply(zimbotv3)
kice = m.sender
await ZimBotInc.groupParticipantsUpdate(m.chat, [kice], 'remove')
ZimBotInc.sendMessage(from, {text:`*▊▊▊DETECTED▊▊▊*\n\n@${kice.split("@")[0]} *I said no yt links here okay, now get out*`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} 
}

if (db.chats[m.chat].antilink) {
if (budy.match(`chat.whatsapp.com`)) {
reply(`*▊▊▊ ANTILINK ▊▊▊*\n\n*You have been detected sending a group link, sorry you will be kicked by Classic Bot 😈*`)
if (!isBotAdmins) return reply(`*Classic must be admin 😈*`)
let gclink = (`https://chat.whatsapp.com/`+await ZimBotInc.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return reply(`*sorry I didn't kick you, because you sent the link of this group lucky you*`)
if (isAdmins) return reply(`*Lucky bastard 😈 I can't kick you*`)
if (isCreator) return reply(`*whoa you are  bot creator i wont kick you 😈*`)
ZimBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}
if (budy.length > 3500) {
if (!m.isGroup) return
if (!isAntiVirtex) return
if (groupAdmins) return
reply('Mark as read\n'.repeat(300))
reply(`*▊▊▊DETECTED▊▊▊*\n\n*You sent a virtex, sorry you will be kicked from the group*`)
console.log(('[KICK]', 'red'), color('Received a text virus!', 'yellow'))
ZimBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}  


if (db.chats[m.chat].antiwame) {
if (budy.includes(`http://wa.me`)) {
if (!isBotAdmins) return
zimbotv3 = `*▊▊▊DETECTED▊▊▊*\n\n*you are an admin lucky bastard 😈 *`
if (isAdmins) return reply(zimbotv3)
if (m.key.fromMe) return reply(zimbotv3)
if (isCreator) return reply(zimbotv3)
kice = m.sender
await ZimBotInc.groupParticipantsUpdate(m.chat, [kice], 'remove')
ZimBotInc.sendMessage(from, {text:`*▊▊▊DETECTED▊▊▊*\n\n@${kice.split("@")[0]} *I said no links 😈 now get out☠️*`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
}
}

if (db.settings[botNumber].autoblock) {
if (m.chat.endsWith("@s.whatsapp.net")) {
if (isCreator) reply('*you are bot creator okay*')
block = m.sender
await ZimBotInc.sendMessage(from, {text:`*▊▊▊AUTO BLOCK▊▊▊*\n\n@${block.split("@")[0]} *today I'm blocking dumps bye you are _blocked_* *if you want to use bot join this group* ${global.group1}\n\n${global.group2}`, m})
ZimBotInc.updateBlockStatus(m.sender,'block')
}
}

if (db.chats[m.chat].antilinkyt) {
if (budy.includes(`https://nando.com`)) {
if (!isBotAdmins) return reply('*BOT MUST BE ADMIN OKAY*')
reply(`*▊▊▊ ANTIYT ▊▊▊*\n\n*SOrry ${botname} will kick you out because what you sent is a youtube link in this group*`)
if (isAdmins) return reply(`*Ehh sorry you admin*`)
 if (isCreator) return reply(`*whoa you are  bot creator i wont kick you okay*`)
kice = m.sender
await ZimBotInc.groupParticipantsUpdate(m.chat, [kice], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
ZimBotInc.sendMessage(m.chat, {text:`*▊▊▊ ANTILINK ▊▊▊*\n\n@${kice.split("@")[0]} *Has been kicked for sending the youtube link in this group*`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
}
}


if (db.chats[m.chat].antibule)  {
if (m.sender.includes(`+212`)) {
if (!isBotAdmins) return reply('*BOT MUST BE ADMIN OKAY*')
reply(`*▊▊▊ ANTIBULE ▊▊▊*\n\n*Sorry ${botname} will kick you out because you are a stranger in this group*`)
if (isAdmins) return reply(`*Ehh sorry you admin*`)
if (isCreator) return reply(`*whoa you are  bot creator i wont kick you okay*`)
kice = m.sender
await ZimBotInc.groupParticipantsUpdate(m.chat, [kice], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
ZimBotInc.sendMessage(m.chat, {text:`*▊▊▊ ANTILINK ▊▊▊*\n\n@${kice.split("@")[0]} *You shouldn't be in this group*`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
}
}
if (db.settings[botNumber].grouponly) {
  if (!m.isGroup) {
    let a = 'a'
    if (!isCreator) throw `*INBOX NOT ALLOWED*`
    if (budy === a) 
    throw  '*inbox not allowed*'
   
    }
  }
var Apik = ''
var socket = fetchJson('wss://wss.allsportsapi.com/live_events?widgetKey='+ 'db7fca1f4dfd0fa8b50c30c3b4569a61e0c5c93a79c18864bf9c9b6ab635c427' +'&timezone=+02:00');
socket.onmessage = function(e) {
  if (e.data) {
    var matcheData = JSON.parse(e.data);
    console.log(`*JUST IN:*` + matcheData)
  }
}
//mute chat
 if (db.chats[m.chat].mute && !isAdmins && !isCreator) {
 return
 }
//write database every 1minute
setInterval(() => {
 fs.writeFileSync('./src/database.json', JSON.stringify(global.db, null, 2))
}, 60 * 1000)
//But5Loc
var nextMinutes = Math.random() * 300 + 1000;
setTimeout(function(){
  ZimBotInc.sendMessage(ZimBotInc.user.id, {text: `𝐂𝐋𝐀𝐒𝐒𝐈𝐂 𝐁𝐎𝐓\n\n𝐓𝐡𝐚𝐧𝐤 𝐲𝐨𝐮 𝐟𝐨𝐫 𝐜𝐡𝐨𝐨𝐬𝐢𝐧𝐠 𝐦𝐞 𝐚𝐬 𝐲𝐨𝐮𝐫 𝐚𝐢 𝐡𝐞𝐥𝐩𝐞𝐫\n\n𝐍𝐞𝐰 𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬 𝐚𝐫𝐞 𝐂𝐨𝐦𝐢𝐧𝐠 𝐒𝐨𝐨𝐧 𝐬𝐨 𝐬𝐭𝐚𝐲 𝐭𝐮𝐧𝐞𝐝\n\n𝐅𝐞𝐞𝐥 𝐅𝐫𝐞𝐞 𝐭𝐨 𝐛𝐫𝐢𝐧𝐠 𝐢𝐝𝐞𝐚𝐬 𝐨𝐧 𝐭𝐡𝐞 𝐭𝐚𝐛𝐥𝐞\n\n𝐅𝐨𝐫𝐤 𝐚𝐧𝐝 𝐬𝐭𝐚𝐫 𝐫𝐞𝐩𝐨\n\n𝐓𝐡𝐚𝐧𝐤𝐬 𝐟𝐨𝐫 𝐜𝐡𝐨𝐨𝐬𝐢𝐧𝐠 𝐂𝐥𝐚𝐬𝐬𝐢𝐜 𝐁𝐨𝐭`,contextInfo: { externalAdReply:{title:"𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕4",body:"𝐌𝐚𝐝𝐞 𝐛𝐲 𝐊𝐢𝐧𝐠 𝐒𝐚𝐦",showAdAttribution: true,mediaType:2,thumbnail: fs.readFileSync(`./drips.jpg`) ,mediaUrl:`https://chat.whatsapp.com/EPSGKau0IVi7J5lyOJO7Jk`, sourceUrl: `https://chat.whatsapp.com/EPSGKau0IVi7J5lyOJO7Jk` }}}, {quoted: m})
  //anouncement by drips 
}, nextMinutes * 300 * 1000);
const send5Butlmg = async (jid , text = '' , footer = '', img, but = [], options = {}) =>{
    var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
 hydratedTemplate: {
   locationMessage: { degreesLatitude: 0, degreesLongtitude: 0, jpegThumbnail: img },
 "hydratedContentText": text,
 "hydratedFooterText": footer,
 "hydratedButtons": but
   }
   }
   }), options)
    return ZimBotInc.relayMessage(jid, template.message, { messageId: template.key.id })
    }
//reset limit every 12hrs
let cron = require('node-cron')
cron.schedule('00 12 * * *', () => {
 let user = Object.keys(global.db.users)
 let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
 for (let jid of user) global.db.users[jid].limit = limitUser
 console.log('Reseted Limit')
}, {
 scheduled: true,
 timezone: "Africa/Harare"
})
//script by drips   
//respond to cmd
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
 userJid: ZimBotInc.user.id,
 quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, ZimBotInc.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
 ...chatUpdate,
 messages: [proto.WebMessageInfo.fromObject(messages)],
 type: 'append'
}
ZimBotInc.ev.emit('messages.upsert', msg)
}
    



    
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
 let user = global.db.users[jid]
 if (!user) continue
 let afkTime = user.afkTime
 if (!afkTime || afkTime < 0) continue
 let reason = user.afkReason || ''
 reply(`
Don't tag him!
He's in Offline/AFK, ${reason ? 'with reason ' + reason : 'no reason'}
Its been ${clockString(new Date - afkTime)}
`.trim())
}

if (db.users[m.sender].afkTime > -1) {
 let user = global.db.users[m.sender]
 reply(`
You came back online from AFK${user.afkReason ? ' after ' + user.afkReason : ''}
In ${clockString(new Date - user.afkTime)}
`.trim())
 user.afkTime = -1
 user.afkReason = ''
}
    
switch(command) {
  case 'quest':
    let sectionnya= [
    {
    "title": `MISSION 1`,
     rows: [
    {
    "title": `KILLING SLIME`,
    "description": `Hunting Slimes For Rewards`,
    "rowId": `${prefix}slime`
    }
    ]
    }
    ,
    {
    "title": `MISSION 2`,
     rows: [
    {
    "title": `KILLING GOBLIN`,
    "description": `Hunt Globin To Get Rewards`,
    "rowId": `${prefix}goblin`
    }
    ]
    }
    ,
    {
    "title": `MISSION 3`,
     rows: [
    {
    "title": `KILLING DEVIL`,
    "description": `Hunt Devils To Get Rewards`,
    "rowId": `${prefix}devil`
    }
    ]
    }
    ,
    {
    "title": `MISSION 4`,
     rows: [
    {
    "title": `KILLING BEHEMOTH`,
    "description": `Hunting Behemoths To Earn Rewards`,
    "rowId": `${prefix}behemoth`
    }
    ]
    }
    ,
    {
    "title": `MISSION 5`,
     rows: [
    {
    "title": `KILLING DEMONS`,
    "description": `Hunt Demons To Get Rewards`,
    "rowId": `${prefix}demon`
    }
    ]
    }
    ,
    {
    "title": `MISSION 6`,
     rows: [
    {
    "title": `KILLING DEMONKING`,
    "description": `DemonKing Hunting To Earn Rewards`,
    "rowId": `${prefix}demonking`
    }
    ]
    }
    ]
    ZimBotInc.sendList(m.chat, `Hi Chomie *${pushname}*`, `Please Select Below`, "CLICK", "ʀᴘɢ ɢᴀᴍᴇ ʙʏ 𝙲𝙻𝙰𝚂𝚂𝙸𝙲 𝙱𝙾𝚃 ", sectionnya, { quoted: m})
    break
    case 'slime':
    case 'killslime':
    if (!m.isGroup) return reply(mess.group) 
    if (!isPetualang) return reply(mess.noPetualang)
    await sendButslime(from)
    break
    case 'goblin':
    case 'killgoblin':
    if (!m.isGroup) return reply(mess.group) 
    if (!isPetualang) return reply(mess.noPetualang)
    await sendButgoblin(from)
    break
    case 'devil':
    case 'killdevil':
    if (!m.isGroup) return reply(mess.group) 
    if (!isPetualang) return reply(mess.noPetualang)
    await sendButdevil(from)
    break
    case 'behemoth':
    case 'killbehemoth':
    if (!m.isGroup) return reply(mess.group) 
    if (!isPetualang) return reply(mess.noPetualang)
    await sendButbehemoth(from)
    break
    case 'demon':
    case 'killdemon':
    if (!m.isGroup) return reply(mess.group) 
    if (!isPetualang) return reply(mess.noPetualang)
    await sendButdemon(from)
    break
    case 'demonking':
    case 'killdemonking':
    if (!m.isGroup) return reply(mess.group) 
    if (!isPetualang) return reply(mess.noPetualang)
    await sendButdemonking(from)
    break
    case 'rpgmenu':
case 'profile':
if (!m.isGroup) return reply(mess.group) 
if (!isPetualang) return reply(mess.noPetualang)
await sendButLoc(from)
break
case 'joinrpg':
if (!m.isGroup) return reply(mess.group)  
if (isPetualang) return reply(' *Youve Become an Adventurer*')
if (args.length < 1) return reply(`*Send a command ${prefix + command} name*`)
await sendButJoin(from, q)
break
case 'mining':
if (!m.isGroup) return reply(mess.group) 
if (!isPetualang) return reply(mess.noPetualang)
pp = randomNomor(75)
emas = randomNomor(15)
dm = randomNomor(3)
besi = randomNomor(50)
addBalance(sender, pp, balance)
addBesi(sender, besi)
addEmas(sender, emas)
addDm(sender, dm)
mining = ('*Wait mining......*')
setTimeout( () => {
buttons = [
{ buttonId: 'mining', buttonText: { displayText: 'Mining' }, type: 1 }
]
ZimBotInc.sendButtonText(m.chat, buttons, `*Completed Mining🚧nlist results:*\n*Gold* ${emas}🪙\n*Money:* $${pp}💰\n*Iron:* ${besi}⛓️\n*Diamond:* ${dm}💎`, ZimBotInc.user.name, m)
}, 9000) // 1000 = 1s,
setTimeout( () => {
ZimBotInc.sendMessage(from, { text: '🚧 Finished Kneading . . .🪙👷' }, { quoted: m })
}, 7000) // 1000 = 1s,
setTimeout( () => {
ZimBotInc.sendMessage(from, { text: '🚧 Finding Gold . . .⚒️🏔️️️' }, { quoted: m })
}, 4000) // 1000 = 1s,
setTimeout( () => {
ZimBotInc.sendMessage(from, { text: '🚧 Start Mining . . .⚒️🏔️️' }, { quoted: m })
}, 1500) // 1000 = 1s,
setTimeout( () => {
ZimBotInc.sendMessage(from, { text: mining }, {quoted: m}) 
}, 0) // 1000 = 1s,
break
case 'inventori':
if (!m.isGroup) return reply(mess.group) 
if (!isPetualang) return reply(mess.noPetualang)
var reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
buttons = [
{ buttonId: 'adventure', buttonText: { displayText: 'Adventure' }, type: 1 }
]
ZimBotInc.sendButtonText(m.chat, buttons, `➢ 𝗣𝗿𝗼𝗳𝗶𝗹𝗲 𝗣𝗹𝗮𝘆𝗲𝗿\n ┊➟𝐍𝐚𝐦𝐞 : ${pushname}\n ┊➟𝐑𝐚𝐧𝐤 : ${role}\n ┊ ➟𝐒𝐭𝐚𝐭𝐮𝐬 : ${elit}\n ┊➟ 𝐗𝐩 : ${getLevelingXp(sender)}/${reqXp}\n ┊➟𝐋𝐞𝐯𝐞𝐥 : ${getLevelingLevel(sender)}\n🎒 𝗜𝗻𝘃𝗲𝗻𝘁𝗼𝗿𝗶𝗲𝘀 :\n ┊➟𝐆𝐨𝐥𝐝 : ${getEmas(sender)}🪙\n ┊➟𝐌𝐨𝐧𝐞𝐲 : $${(getBalance(sender, balance))}💰\n ┊➟ 𝐈𝐫𝐨𝐧 : ${getBesi(sender)}⛓️\n ┊➟𝐃𝐢𝐚𝐦𝐨𝐧𝐝 : ${getDm(sender)}💎\n ┊➟𝐅𝐢𝐬𝐡  : ${getFish(sender)}🎣`, ZimBotInc.user.name, m)
break
case 'sellikan':
if (!m.isGroup) return reply(mess.group) 
if (!isPetualang) return reply(mess.noPetualang)
if (args.length < 1) return reply(`Send command *${prefix + command}* amount to sell`)
jmlh = body.slice(10)
rp = 5 * jmlh
if (getFish(sender) < jmlh) return reply(`*Your Fish Isn't Enough*`)
sellFish(sender, jmlh, balance)
addBalance(sender, rp, balance) 
buttons = [
{ buttonId: 'inventori', buttonText: { displayText: 'Inventori' }, type: 1 }
]
ZimBotInc.sendButtonText(m.chat, buttons, `🛒 *MARKET*\n ┊ Seller : ${pushname}\n ┊ Buyer : Admin\n ┊ Price/Fish : 5\n ┊ Status : Success\n ┊ Left FishPrice/Fish : ${getFish(sender)}\n ┊ Sales Results : $${rp}`,  ZimBotInc.user.name, m)
break
case 'sellbesi':
if (!m.isGroup) return reply(mess.group) 
if (!isPetualang) return reply(mess.noPetualang)
if (args.length < 1) return reply(`Send command *${prefix + command}* amount to sell`)
jmlh = body.slice(10)
rp = 10 * jmlh
if (getBesi(sender) < jmlh) return reply(`Besi Isn't Enough`)
sellBesi(sender, jmlh, balance)
addBalance(sender, rp, balance) 
buttons = [
{ buttonId: 'inventori', buttonText: { displayText: 'Inventori' }, type: 1 }
]
ZimBotInc.sendButtonText(m.chat, buttons, `🛒 MARKET\n ┊ Seller : ${pushname}\n ┊ Buyer : Admin\n ┊ Harga/Besi : 10\n ┊ Status : Sukses\n ┊ Sisa Besi : ${getBesi(sender)}\n ┊ Sales Results : $${rp}`, ZimBotInc.user.name, m)
break
case 'sellemas':
if (!m.isGroup) return reply(mess.group) 
if (!isPetualang) return reply(mess.noPetualang)
if (args.length < 1) return reply(`Send command *${prefix + command}* amount to sell`)
jmlh = body.slice(10)
rp = 25 * jmlh
if (getEmas(sender) < jmlh) return reply(`Your Gold Isn't Enough`)
sellEmas(sender, jmlh, balance)
addBalance(sender, rp, balance) 
buttons = [
{ buttonId: 'inventori', buttonText: { displayText: 'Inventori' }, type: 1 }
]
ZimBotInc.sendButtonText(m.chat, buttons, `🛒 𝐌𝐚𝐫𝐤𝐞𝐭\n ┊➟𝐒𝐞𝐥𝐥𝐞𝐫 : ${pushname}\n ┊➟𝐁𝐮𝐲𝐞𝐫 : 𝐀𝐝𝐦𝐢𝐦\n ┊➟𝐇𝐚𝐫𝐠𝐚/𝐄𝐦𝐚𝐬 : 25\n ┊➟𝐒𝐭𝐚𝐭𝐮𝐬 : 𝐒𝐞𝐤𝐬𝐮𝐬\n ┊➟𝐒𝐢𝐬𝐚 𝐄𝐦𝐚𝐬 : ${getEmas(sender)}\n ┊➟𝐒𝐚𝐥𝐞𝐬 𝐑𝐞𝐬𝐮𝐥𝐭 : $${rp}`, ZimBotInc.user.name, m)
break 
case 'selldiamond':
if (!m.isGroup) return reply(mess.group) 
if (!isPetualang) return reply(mess.noPetualang)
if (args.length < 1) return reply(`Send command *${prefix + command}* amount to sell`)
ttl = body.slice(13)
var etoo = 75 * ttl
if (getDm(sender) < ttl) return reply(`Iron Isn't Enough`)
sellDm(sender, ttl)
addBalance(sender, etoo, balance) 
buttons = [
{ buttonId: 'inventori', buttonText: { displayText: 'Inventori' }, type: 1 }
]
ZimBotInc.sendButtonText(m.chat, buttons, `🛒 𝙈𝘼𝙍𝙆𝙀𝙏\n ┊➟𝐬𝐞𝐥𝐥𝐞𝐫 : ${pushname}\n ┊➟𝐁𝐮𝐲𝐞𝐫 : 𝐀𝐝𝐦𝐤𝐦\n ┊➟𝐃𝐦 : 75\n ┊➟𝐒𝐭𝐚𝐟𝐮𝐬 : 𝐬𝐞𝐤𝐬𝐮𝐬\n ┊➟𝐒𝐢𝐬𝐚 𝐃𝐢𝐚𝐦𝐨𝐧𝐝 : ${getDm(sender)}\n ┊➟𝐒𝐚𝐥𝐞𝐬 𝐑𝐞𝐬𝐮𝐥𝐭𝐬 : $${etoo}`, ZimBotInc.user.name, m)
break 
case 'mancing':
if (!m.isGroup) return reply(mess.group) 
if (!isPetualang) return reply(mess.noPetualang)
ikannya = ikan[Math.floor(Math.random() * ikan.length)]
xp = Math.ceil(Math.random() * 350)
coin = randomNomor(50)	    
ditangkap = Math.ceil(Math.random() * 50)
cing = await getBuffer(`https://telegra.ph/file/d9b15de4f661808dfd0b9.jpg`)
setTimeout( () => {
var button = [
		{ urlButton: { displayText: `Script`, url : `${wame}` } },
		{ quickReplyButton: { displayText: `Inventori`, id: `${prefix}inventori` } },
		{ quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
		]
        var hg = `「 Memancing 」\n\n ┊ *Capture:* ${ikannya}\n ┊ *Total Get:* ${ditangkap} *Fish*\n ┊ MONEY : $${coin}\n ┊ EXP : ${xp}Xp`
        ZimBotInc.sendMessage(from, { caption: hg, location: { jpegThumbnail: cing }, templateButtons: button, footer: `ʀᴘɢ ɢᴀᴍᴇ ʙʏ ᴢɪᴍʙᴏᴛ`, mentions: [sender] })
        .catch ((err) => reply(mess.error))
}, 6000)
setTimeout( () => {
ZimBotInc.sendMessage(from, { text: 'Managed to Get a Fish . . .' }, { quoted: m })
}, 5000) // 1000 = 1s,
setTimeout( () => {
ZimBotInc.sendMessage(from, { text: '🎣 Attracting Kail. . .' }, { quoted: m })
}, 3000) // 1000 = 1s,
setTimeout( () => {
ZimBotInc.sendMessage(from, { text: '🎣 Start Fishing . . .' }, { quoted: m })
}, 1500) // 1000 = 1s,
addFish(sender, ditangkap)
addLevelingXp(sender, xp)
addBalance(sender, coin, balance) 
break
case 'adventure':
if (!m.isGroup) return reply(mess.group) 
if (!isPetualang) return reply(mess.noPetualang)
ngab = ['Avalanche','Volcanic Eruption','Tsunami','Earthquake','Meteor','Demon']
var sesuatu = ngab[Math.floor(Math.random() * ngab.length)]
var dungeon =['Whetstone','Willow Field','Rodeo','Verdant Blufs','Bull Holland','Fallen Tree','Dellnort','Verona Lush','Leafy Hollow','Chilliad Dome','Garcia','Pine Valley','Santa Florals','Guvero East','Cranbarry','Junever','Aldea Malvada','Green Palms','Green Oasis','Fort Carson','Prickel Pine','Pilson Meadow','Boca Roca','Rocksore East','Camel Toe','Hanky Panky','Fern Ridge','Montgomerry','Flint Yankton','Vespucci','fortress city', 'ravines valley', 'horizon valley', 'cyber city', 'end city', 'templar city', 'pochinki', 'peak','Vertical Zone','Sentainel Country','Night City','Flush City','Royals Canyon','Blackburn','Peterborough','Tarnstead','Jarren’s','Outpost','Landow','Nearon','Kincardine','Aysgarth','Veritas','Openshaw','Bredwardine','Berkton','Wolford','Norwich','Kald','Solaris','Kilead','Pitmerden','Acomb','Eldham','Warcester','Lingmell','Kilead','Cromerth','Wingston','Garmsby','Kingcardine','Perthlochry','Frostford','Hillford','Hardersfield','Tarrin','Holmfirth','Caerleon','Elisyum','Ballaeter','Penshaw','Bradford','Wigston','Accreton','Kameeraska','Ferncombe','Kilerth','Erostey','Carran','Jongvale','Larnwick','Queenstown','Whaelrdrake','Baerney','Wingston','Arkney','Strongfair','Lowestoft','Beggar’s Hole','Shepshed','Perthlochry','Ironforge','Tywardreath','Pontheugh','Foolshope','Hull','Dalmerlington','Aucteraden','Woodpine','Millstone','Windermere','Lancaster','Kirkwall','Rotherhithe','Astrakhan','Watford','Ritherhithe','Krosstoen','Pella’s','Wish','Grimsby','Ayrith','Ampleforth','Skystead','Eanverness','Penshaw','Peatsland','Astrakane','Pontybridge','Caershire','Snowbush','Sutton','Northwich','Hogsfeet','Claethorpes','Sudbury','Cherrytown','Blue Field','Orrinshire','Aempleforth','Garrigill','Jedburgh','Eastbourne','Taedmorden','Venzor','Grasmere','Ubbin','Falls','Violl’s Garden','Glanchester','Bailymena','Arkkukari','Skargness','Cardend','Llanybydder','Faversham','Yellowseed','Carlisle','Cirencester','Aramoor','Furness','Kincardine','Rotherham','Emelle','Boroughton','Carran','Ffestiniog','Mansfield','Huthwaite','Marclesfield','Pavv','Squall’s End','Glenarm','Dragontail','Moressley','Hardersfield','Gilramore','Aria','Ecrin','Clare View Point','Blackburn','Oakheart','Doonatel','Broughton','Carlisle','Murlayfield','Nuxvar']
anu = fs.readFileSync('./lib/dungeon.js');
var ad = dungeon[Math.floor(Math.random() * dungeon.length)]
jsonData = JSON.parse(anu);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
hasm = await getBuffer(randKey.result)  
var adven = Math.ceil(Math.random() * 1000)
var money = Math.ceil(Math.random() * 300)
setTimeout( () => {		
var button = [
		{ urlButton: { displayText: `Script`, url : `${wame}` } },
		{ quickReplyButton: { displayText: `Inventori`, id: `${prefix}inventori` } },
		{ quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
		]
        var hg = `「 DEATH 」\n\n *┊ Place*  ${ad}\n ┊ *MONEY :* $${money}\n ┊ *EXP :* ${adven}Xp`
        ZimBotInc.sendMessage(from, { caption: hg, location: { jpegThumbnail: hasm }, templateButtons: button, footer: `ʀᴘɢ ɢᴀᴍᴇ ʙʏ ᴢɪᴍʙᴏᴛ`, mentions: [sender] })
        .catch ((err) => reply(mess.error))
}, 7000)
setTimeout( () => {
ZimBotInc.sendMessage(from, { text: `Awass` }, { quoted: m })
}, 5000) // 1000 = 1s,
setTimeout( () => {
ZimBotInc.sendMessage(from, { text: `Suddenly There ${sesuatu}` }, { quoted: m })
}, 3000) // 1000 = 1s,
setTimeout( () => {
ZimBotInc.sendMessage(from, { text: `${pushname} On an Adventure` }, { quoted: m })
}, 1500) // 1000 = 1s,
addLevelingXp(sender, adven)
addBalance(sender, money, balance)
break
case 'luckyday':
case 'luckytime':
if (!m.isGroup) return reply(mess.group) 
if (!isPetualang) return reply(mess.noPetualang)
{
ez = Math.ceil(Math.random() * 450)
a = randomNomor(99)
b = randomNomor(500)
c = randomNomor(150)
addBalance(sender, b, balance)
addLevelingXp(sender, ez)
addEmas(sender, a)
addBesi(sender, c)
buttons = [
{ buttonId: `${command}`, buttonText: { displayText: `TRY LUCKY` }, type: 1 }
]
ZimBotInc.sendButtonText(m.chat, buttons, `🎰 *Lucky*\n┊ *Money:* $${b}\n┊ *Gold :* ${a}\n┊ *Iron :* ${c}\n┊ *XP :* ${ez}`, ZimBotInc.user.name, m)
}
break
case 'afk': {
   let user = global.db.users[m.sender]
   user.afkTime = + new Date
   user.afkReason = text
   reply(`${m.pushName} Already Afk${text ? ': ' + text : ''}`)
 }
 break
/* case 'anyapk': 
 const anyApkDl = require("any-apk-dl")
const provider = anyApkDl()

provider.download("com.fmwhatsapp","./apks/").then(res=>{
    console.log(res);
})
case 'apktes': //Script by zim-bot
  const downloader = require("apk-downloader")

downloader.downloadAPK("com.microbees.floatingapp")
*/

 
 
  /*  case 'donasi': case 'donate': case 'sewabot': case 'sewa': case 'buypremium': case 'donate': {
   ZimBotInc.sendMessage(m.chat, { image: { url: 'https://i.imgur.com/TfI3QYW.jpg' }, caption: `*𝗛𝗜 𝗕𝗥𝗢 ${m.pushName}*\n\n 𝗕𝗢𝗧 𝗥𝗘𝗡𝗧𝗔𝗟 𝗣𝗥𝗜𝗖𝗘\n 250rands Per Group via Gpay/paytm/phonepe 1 Month\n\nFor more details, you can chat with the owner\nhttps://wa.me/2+447441437150 (ZIM BOT OWNER)\n\n𝗗𝗢𝗡𝗔𝗧𝗘 : \n\n 𝗙𝗔𝗠𝗣𝗔𝗬 : https://i.imgur.com/TfI3QYW.jpg\n` }, { quoted: m })
 }
 */
 break
 case 'sc': case 'script': case 'donate': case 'donasi': case 'donate': case 'sewabot': case 'sewa': case 'buypremium': case 'donate': {

  teks = `
  ➢𝐂𝐥𝐚𝐬𝐬𝐢𝐜-𝐕4\n\n➢𝐌𝐚𝐝𝐞 𝐛𝐲 𝐊𝐢𝐧𝐠 𝐒𝐚𝐦\n➢𝐅𝐨𝐫𝐤 𝐑𝐞𝐩𝐨 𝐭𝐡𝐫𝐨𝐮𝐠𝐡 𝐭𝐡𝐞 𝐥𝐢𝐧𝐤 𝐁𝐞𝐥𝐨𝐰\n\n➥https://github.com/Samue-l1/Classic-V4`
  let buttons = [
  {buttonId: `rpgmenu`, buttonText: {displayText: 'RPG'}, type: 1}
  ]
  let buttonMessage = {
  image: thumb,
  jpegThumbnail: global.thumb,
  caption: teks,
  footer: `${botname}`,
  buttons: buttons,
  headerType: 4,
  contextInfo:{externalAdReply:{
  title:"𝐂𝐥𝐚𝐬𝐬𝐢𝐜-𝐕4",
  body: "𝐋𝐨𝐫𝐝 𝐒𝐚𝐦", 
  showAdAttribution: true,
  thumbnail: fs.readFileSync("Classic/drips.jpg"),
  mediaType:1,
  mediaUrl: 'https://chat.whatsapp.com/EPSGKau0IVi7J5lyOJO7Jk',
  sourceUrl: "https://chat.whatsapp.com/EPSGKau0IVi7J5lyOJO7Jk"
  }}
  }
  ZimBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
  }
 break
 case 'forex': case 'broker': case 'binary': case 'trading': {
  bentoforex = await getBuffer(picak+'LIVE FOREX')
  teks = `
  *CLASSIC-V4 FOREX TRADING*\n\n*DESCRIPTION:* _Trade with Deriv broker ( formerly called Binary ) link above. Create a Real Synthetic account  You will get to trade famous indices like Volatility 75 Index, Crash, Boom and others. -Minimum deposit as low as 2 dollars.  -You can trade even in weekends,  these indices are available to trade 24 hours a day, 365 days a year. -No noise, Trade with Deriv broker ( formerly called Binary ) link above. The best Forex broker since year 2000. Create a Real Financial or Financial STP account  for currency pairs._\n\n*GET STARTED TODAY:*\n\n*LINK:* https://track.deriv.com/_hx9O43AkP_tBMfcXPt5VjGNd7ZgqdRLk/1\n\n*LINK2:* https://record.binary.com/_Mxrjb7udl0q6tyDIijdDK2Nd7ZgqdRLk/1/\n\n*CONTACT:* https://wa.me/+258869103969 or https://wa.me/+258869103969*for help*_`
  let buttons = [
  {buttonId: `alive`, buttonText: {displayText: 'BACK'}, type: 1}
  ]
  let buttonMessage = {
  image: bentoforex,
  jpegThumbnail: bentoforex,
  caption: teks,
  footer: `${botname}`,
  buttons: buttons,
  headerType: 4,
  contextInfo:{externalAdReply:{
  title:"SUPPORT ME",
  body: "KING SAM", 
  showAdAttribution: true,
  thumbnail: fs.readFileSync("Classic/drips.jpg"),
  mediaType:1,
  mediaUrl: 'https://chat.whatsapp.com/EPSGKau0IVi7J5lyOJO7Jk',
  sourceUrl: "https://chat.whatsapp.com/EPSGKau0IVi7J5lyOJO7Jk"
  }}
  }
  ZimBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
  }
  break
 case 'chat': {
   if (!isCreator) throw global.owner
   if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
   if (args[0] === 'mute') {
  ZimBotInc.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
   } else if (args[0] === 'unmute') {
  ZimBotInc.chatModify({ mute: null }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
   } else if (args[0] === 'archive') {
  ZimBotInc.chatModify({  archive: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
   } else if (args[0] === 'unarchive') {
  ZimBotInc.chatModify({ archive: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
   } else if (args[0] === 'read') {
  ZimBotInc.chatModify({ markRead: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
   } else if (args[0] === 'unread') {
  ZimBotInc.chatModify({ markRead: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
   } else if (args[0] === 'delete') {
  ZimBotInc.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
   }
 }
 
 break
 case 'mathquiz': case 'math': {
   if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "*There are still unfinished match*"
   let { genMath, modes } = require('./src/math')
   if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nExample: ${prefix}math medium`
   let result = await genMath(text.toLowerCase())
   ZimBotInc.sendText(m.chat, `*What is the result of: ${result.soal.toLowerCase()}*?\n\nTime: ${(result.waktu / 1000).toFixed(2)} seconds`, m).then(() => {
  kuismath[m.sender.split('@')[0]] = result.jawaban
   })
   await sleep(result.waktu)
   if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
  console.log("Answer: " + result.jawaban)
  reply("Time Out\nAnswer: " + kuismath[m.sender.split('@')[0]])
  delete kuismath[m.sender.split('@')[0]]
   }
 }
 break
 case 'mysoulmate': {
 if (!m.isGroup) throw mess.group
 let member = participants.map(u => u.id)
 let me = m.sender
 let jodoh = member[Math.floor(Math.random() * member.length)]
 let jawab = `👫Your match is

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
 let ments = [me, jodoh]
 let buttons = [
{ buttonId: '❤️', buttonText: { displayText: 'LOVE♥️' }, type: 1 }
  ]
  await ZimBotInc.sendButtonText(m.chat, buttons, jawab, ZimBotInc.user.name, m, {mentions: ments})
 }
 break
 case 'couple': {
 if (!m.isGroup) throw mess.group
 let member = participants.map(u => u.id)
 let orang = member[Math.floor(Math.random() * member.length)]
 let jodoh = member[Math.floor(Math.random() * member.length)]
 let jawab = `@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}
See Whats Going On💖👀`
 let menst = [orang, jodoh]
 let buttons = [
{ buttonId: '❤️', buttonText: { displayText: 'DATING♥️' }, type: 1 }
  ]
  await ZimBotInc.sendButtonText(m.chat, buttons, jawab, ZimBotInc.user.name, m, {mentions: menst})
 }
 break
 case 'join': {
   if (!isCreator) throw global.owner
   if (!text) throw 'Enter the group link!'
   if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw '*LINK INVALID*'
   replay(mess.wait)
   let result = args[0].split('https://chat.whatsapp.com/')[1]
   await ZimBotInc.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
 }
 break
 case 'leave': {
   if (!isCreator) throw global.owner
   await ZimBotInc.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
 }
 break
case 'kick': {
if (!m.isGroup) throw mess.group
   if (!isBotAdmins) throw mess.botAdmin
   if (!isAdmins) throw mess.admin
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ZimBotInc.groupParticipantsUpdate(m.chat, [users], 'remove')
}
break
case 'add': {
if (!m.isGroup) throw mess.group
if (!isCreator) throw global.owner
   if (!isBotAdmins) throw mess.botAdmin
   if (!isAdmins) throw mess.admin
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ZimBotInc.groupParticipantsUpdate(m.chat, [users], 'add')
}
break
case 'promote': {
if (!m.isGroup) throw mess.group
   if (!isBotAdmins) throw mess.botAdmin
   if (!isAdmins) throw mess.admin
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ZimBotInc.groupParticipantsUpdate(m.chat, [users], 'promote')
}
break
case 'demote': {
if (!m.isGroup) throw mess.group
   if (!isBotAdmins) throw mess.botAdmin
   if (!isAdmins) throw mess.admin
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ZimBotInc.groupParticipantsUpdate(m.chat, [users], 'demote')
}
break
case 'block': {
if (!isCreator) throw global.owner
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ZimBotInc.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case 'unblock': {
if (!isCreator) throw global.owner
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ZimBotInc.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
    case 'setname': case 'setsubject': {
   if (!m.isGroup) throw mess.group
   if (!isBotAdmins) throw mess.botAdmin
   if (!isAdmins) throw mess.admin
   if (!text) throw 'Text ?'
   await ZimBotInc.groupUpdateSubject(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
 }
 break
  case 'setdesc': case 'setdesk': {
   if (!m.isGroup) throw mess.group
   if (!isBotAdmins) throw mess.botAdmin
   if (!isAdmins) throw mess.admin
   if (!text) throw 'Text ?'
   await ZimBotInc.groupUpdateDescription(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
 }
 break
  case 'setppbot': case 'setbotpp': {
   if (!isCreator) throw global.owner
   if (!quoted) throw `Send/Reply Image With Caption ${prefix + command}`
   if (!/image/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
   if (/webp/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
   let media = await ZimBotInc.downloadAndSaveMediaMessage(quoted)
   await ZimBotInc.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
   reply(mess.success)
   }
   break
case 'setppgroup': case 'setgrouppp': case 'setgcpp': case 'setppgrup': case 'setppgc': {
   if (!m.isGroup) throw mess.group
   if (!isAdmins) throw mess.admin
   if (!quoted) throw `Send/Reply Image With Caption ${prefix + command}`
   if (!/image/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
   if (/webp/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
   let media = await ZimBotInc.downloadAndSaveMediaMessage(quoted)
   await ZimBotInc.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
   reply(mess.success)
   }
   break
   case 'setbio':
   reply(mess.wait)
if (!q) return reply('Send orders *#setbio text*')
ZimBotInc.setStatus(`${q}`)
reply(mess.success)
break

case 'grupinfo': case 'groupinfo':
try{
 var pic = await ZimBotInc.getProfilePicture(m.chat)
  } catch {
 var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
  }
let ingfo = `*➢𝗚𝗥𝗢𝗨𝗣 𝗜𝗡𝗙𝗢*\n\n*➢𝗡𝗔𝗠𝗘 :* ${groupName}\n*➢𝗜𝗗 𝗚𝗥𝗢𝗨𝗣:* ${m.chat}\n*➢𝗠𝗔𝗗𝗘 :* ${moment(`${groupMetadata.creation}` * 1000).tz('Africa/Nairobi').format('DD/MM/YYYY HH:mm:ss')}\n*➢𝗚𝗥𝗢𝗨𝗣 𝗢𝗪𝗡𝗘𝗥:* @${groupMetadata.owner.split('@')[0]}\n*➢𝗔𝗗𝗠𝗜𝗡𝗦 :* ${groupAdmins.length}\n*➢𝗠𝗘𝗠𝗕𝗘𝗥𝗦 :* ${participants.length}\n*➢𝗗𝗘𝗦𝗖 :* \n${groupMetadata.desc}`
ds = await getBuffer(pic)
ZimBotInc.sendMessage(m.chat, { image: ds,caption: ingfo, mentions: [groupMetadata.owner] }, { quoted: m})
break
 case 'tagall': case 'tag': {
   if (!m.isGroup) throw mess.group
   if (!isBotAdmins) throw mess.botAdmin
   if (!isAdmins) throw mess.admin
let teks = ` 
 ┃➟𝐂𝐋𝐀𝐒𝐒𝐈𝐂 𝐁𝐎𝐓 𝐆𝐑𝐎𝐔𝐏 𝐓𝐀𝐆➟\n\n ❏ *𝐌𝐄𝐒𝐒𝐀𝐆𝐄 : ${q ? q : 'blank'}*\n\n❴➟ 𝐂𝐋𝐀𝐒𝐒𝐈𝐂 𝐁𝐎𝐓 ➟❵
`
 for (let mem of participants) {
   teks += `BOTTAG @${mem.id.split('@')[0]}\n`
   }
   ZimBotInc.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
   }
   break
   case 'hidetag': {
 if (!m.isGroup) throw mess.group
 if (!isAdmins) throw mess.admin
 ZimBotInc.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
 }
 break
    case 'style': case 'styletext': {
if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // response when limit runs out
db.users[m.sender].limit -= 1 // -1 limit
let { styletext } = require('./lib/scraper')
if (!text) throw 'Enter Query text!'
   let anu = await styletext(text)
   let teks = `Entered Text:  ${text}\n\n`
   for (let i of anu) {
  teks += `➥ *${i.name}* : ${i.result}\n\n`
   }
   reply(teks)
    }
    break
  case 'vote': {
 if (!m.isGroup) throw mess.group
 if (m.chat in vote) throw `_There are still votes in this chat!_\n\n*${prefix}deletevote* - to delete votes`
 if (!text) throw `Enter Reason for Vote, Example: *${prefix + command} Owner is handsome*`
 reply(`Voting starts!\n\n*${prefix}upvote* - for yes\n*${prefix}devote* - for no\n*${prefix}checkvote* - to check the votes\n*${prefix}deletevote* - to delete vote`)
 vote[m.chat] = [q, [], []]
 await sleep(1000)
 upvote = vote[m.chat][1]
 devote = vote[m.chat][2]
 teks_vote = `
┏━━━━━━━━━━⧁
┃ 𝗨𝗣𝗩𝗢𝗧𝗘
┃
┃𝗥𝗘𝗔𝗦𝗢𝗡: ${vote[m.chat][0]} 
┃
┃*Total:* ${vote[m.chat][1].length}
┗━━━━━━━━━━⧁
 
┏━━━━━━━━━━⧁
┃𝗗𝗘𝗩𝗢𝗧𝗘 
┃
┃ *Total:* ${vote[m.chat][2].length}
┗━━━━━━━━━━⧁

*${prefix}deletevote* - to delete votes`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝗨𝗣𝗩𝗢𝗧𝗘'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝗗𝗘𝗩𝗢𝗧𝗘'}, type: 1}
]

 let buttonMessageVote = {
   text: teks_vote,
   footer: ZimBotInc.user.name,
   buttons: buttonsVote,
   headerType: 1
 }
 ZimBotInc.sendMessage(m.chat, buttonMessageVote)
    }
 break
  case 'upvote': {
 if (!m.isGroup) throw mess.group
 if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*Type ${prefix}vote* - to start voting`
 isVote = vote[m.chat][1].concat(vote[m.chat][2])
 wasVote = isVote.includes(m.sender)
 if (wasVote) throw 'You have Voted'
 vote[m.chat][1].push(m.sender)
 menvote = vote[m.chat][1].concat(vote[m.chat][2])
 teks_vote = `
┏━⧀ 𝐕𝐎𝐓𝐄 ⧁
┃➟𝗥𝗘𝗔𝗦𝗢𝗡:* ${vote[m.chat][0]}
┃
┃➟𝗨𝗣𝗩𝗢𝗧𝗘 ༻
┃
┃➟𝗧𝗢𝗧𝗔𝗟 : ${vote[m.chat][1].length}
┃${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
┃
╰━━━━━━━━━━━━⧁

┏━━⧀𝗗𝗘𝗩𝗢𝗧𝗘⧁
┃ 
┃➟𝗧𝗼𝘁𝗮𝗹 : ${vote[m.chat][2].length}
┃${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
┃
╰━━━━━━━━━━━━━⧁

*${prefix}hapusvote* - to delete votes`
 let buttonsUpvote = [
 {buttonId: `${prefix}upvote`, buttonText: {displayText: 'UPVOTE'}, type: 1},
 {buttonId: `${prefix}devote`, buttonText: {displayText: 'DEVOTE'}, type: 1}
 ]

 let buttonMessageUpvote = {
   text: teks_vote,
   footer: ZimBotInc.user.name,
   buttons: buttonsUpvote,
   headerType: 1,
   mentions: menvote
}
 ZimBotInc.sendMessage(m.chat, buttonMessageUpvote)
    }
break
   case 'devote': {
 if (!m.isGroup) throw mess.group
 if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
 isVote = vote[m.chat][1].concat(vote[m.chat][2])
 wasVote = isVote.includes(m.sender)
 if (wasVote) throw 'You Have Voted'
 vote[m.chat][2].push(m.sender)
 menvote = vote[m.chat][1].concat(vote[m.chat][2])
 teks_vote = `

*𝗗𝗘𝗩𝗢𝗧𝗘:* ${vote[m.chat][0]}

┏༺ 𝗨𝗣𝗩𝗢𝗧𝗘 ༻
┃
┃➟𝗧𝗼𝘁𝗮𝗹: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
┃
╰━━━━━━━━━━

┏༺ 𝗗𝗘𝗩𝗢𝗧𝗘 ༻
┃
┃➟𝗧𝗼𝘁𝗮𝗹 ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
┃
┗━━━━━━━━━━━━

*${prefix}hapusvote* - to delete votes`
 let buttonsDevote = [
 {buttonId: `${prefix}upvote`, buttonText: {displayText: 'UPVOTE'}, type: 1},
 {buttonId: `${prefix}devote`, buttonText: {displayText: 'DEVOTE'}, type: 1}
 ]

 let buttonMessageDevote = {
   text: teks_vote,
   footer: ZimBotInc.user.name,
   buttons: buttonsDevote,
   headerType: 1,
   mentions: menvote
 }
 ZimBotInc.sendMessage(m.chat, buttonMessageDevote)
}
 break
    
case 'checkvote':
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
teks_vote = `༼༺⋋ 𝗩𝗢𝗧𝗘 ⋌༻༽

*𝗥𝗘𝗔𝗦𝗢𝗡:* ${vote[m.chat][0]}

┌༺ 𝗨𝗣𝗩𝗢𝗧𝗘 ༻
 
├➟𝗧𝗼𝘁𝗮𝗹 :: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

┌༺ 𝗗𝗘𝗩𝗢𝗧𝗘 ༻
 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

*${prefix}hapusvote* - to delete votes


©${ZimBotInc.user.id}
`
ZimBotInc.sendTextWithMentions(m.chat, teks_vote, m)
break
case 'deletevote': case'delvote': case 'hapusvote': {
 if (!m.isGroup) throw mess.group
 if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - to start voting`
 delete vote[m.chat]
 reply('*Successfully deleted vote session in this group*')
    }
 break
  case 'group': case 'grup': {
   if (!m.isGroup) throw mess.group
   if (!isBotAdmins) throw mess.botAdmin
   if (!isAdmins) throw mess.admin
   if (args[0] === 'close'){
  await ZimBotInc.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`Successful closing the group`)).catch((err) => reply(jsonformat(err)))
   } else if (args[0] === 'open'){
  await ZimBotInc.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`Successful Opening The Group`)).catch((err) => reply(jsonformat(err)))
   } else {
   let buttons = [
{ buttonId: 'group open', buttonText: { displayText: 'OPEN' }, type: 1 },
{ buttonId: 'group close', buttonText: { displayText: 'CLOSE' }, type: 1 }
  ]
  await ZimBotInc.sendButtonText(m.chat, buttons, `Group Mode`, ZimBotInc.user.name, m)

}
 }
 break
 case 'editinfo': {
   if (!m.isGroup) throw mess.group
   if (!isBotAdmins) throw mess.botAdmin
   if (!isAdmins) throw mess.admin
if (args[0] === 'open'){
   await ZimBotInc.groupSettingUpdate(m.chat, 'unlocked').then((res) => reply(`Successfully opened edit group Info`)).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'close'){
   await ZimBotInc.groupSettingUpdate(m.chat, 'locked').then((res) => reply(`Successfully Close Edit Group Info`)).catch((err) => reply(jsonformat(err)))
} else {
let buttons = [
{ buttonId: 'editinfo open', buttonText: { displayText: 'OPEN' }, type: 1 },
{ buttonId: 'editinfo close', buttonText: { displayText: 'CLOSE' }, type: 1 }
  ]
  await ZimBotInc.sendButtonText(m.chat, buttons, `*GROUP SESSION*`, ZimBotInc.user.name, m)

 }
 }
 break
 /*
case 'chatbot':
if (isCreator) throw mess.owner
if (args[0] === 'on') {
if (isChatbot) return reply('*already activated*')
chatbot.push(botNumber)
reply('*chatbot on*')
} else if (args[0] === 'off') {
if (!isChatbot) return reply('*already deactivated*')
var ini = chatbot.indexOf(botNumber)
chatbot.splice(ini, 1)
reply('*chatbot off*')
} else  {
let buttons = [
{ buttonId: 'chatbot on', buttonText: { displayText: 'ON' }, type: 1 },
{ buttonId: 'chatbot off', buttonText: { displayText: 'OFF' }, type: 1 }
 ]
 await ZimBotInc.sendButtonText(m.chat, buttons, `*CHATBOT SESSION*`, ZimBotInc.user.name, m)
}
*/
 break
case 'chatbot': {
if (!isCreator) throw mess.owner
if (args[0] === "on") {
if (db.settings[botNumber].chatbot) return reply(`*chatbot already on okay*`)
db.settings[botNumber].chatbot = true
reply(`*chatbot on enjoy talking to me okay*`)
} else if (args[0] === "off") {
if (!db.settings[botNumber].chatbot) return reply(`*Already off okay*`)
db.settings[botNumber].chatbot = false
reply(`*It was nice to chat with you goodbye _chatbot off_*`)
} else {
 let drips = [
{ buttonId: `${command} on`, buttonText: { displayText: 'ON' }, type: 1 },
{ buttonId: `${command} off`, buttonText: { displayText: 'OFF' }, type: 1 }
  ]
  await ZimBotInc.sendButtonText(m.chat, drips, `*┃🔏ʟᴏᴄᴀʟ ᴏɴʟʏ ᴍᴏᴅᴇ🔏┃*`, ZimBotInc.user.name, m)
}
  } 
break
case 'privatechat': {
if (!isCreator) throw mess.owner
if (args[0] === "on") {
if (db.settings[botNumber].privatechat) return reply(`*chatbot already on okay*`)
db.settings[botNumber].privatechat = true
reply(`*chatbot on enjoy talking to me okay*`)
} else if (args[0] === "off") {
if (!db.settings[botNumber].privatechat) return reply(`*Already off okay*`)
db.settings[botNumber].privatechat = false
reply(`*It was nice to chat with you goodbye _chatbot off_*`)
} else {
 let dripsu = [
{ buttonId: `${command} on`, buttonText: { displayText: 'ON' }, type: 1 },
{ buttonId: `${command} off`, buttonText: { displayText: 'OFF' }, type: 1 }
  ]
  await ZimBotInc.sendButtonText(m.chat, dripsu, `*┃⚚ʟᴏᴄᴀʟ ᴏɴʟʏ ᴍᴏᴅᴇ❏┃*`, ZimBotInc.user.name, m)
}
  } 
case 'chatgpt': {
if (!isCreator) throw mess.owner
if (args[0] === "on") {
if (db.settings[botNumber].chatgpt) return reply(`*𝐈 𝐚𝐦 𝐚𝐧 𝐀𝐢 𝐫𝐨𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐛𝐲 ༺֎ᚏ༈࿉𝐀𝐍𝐎𝐍𝐘𝐌𝐎𝐔𝐒⧉ᚙ֎⸙༻ 𝐚𝐧𝐝 𝐠𝐨𝐨𝐠𝐥𝐞 𝐡𝐨𝐰 𝐦𝐚𝐲 𝐈 𝐡𝐞𝐥𝐩 𝐲𝐨𝐮?*`)
db.settings[botNumber].chatgpt = true
reply(`𝐈 𝐚𝐦 𝐚𝐧 𝐀𝐢 𝐫𝐨𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐛𝐲 ༺֎ᚏ༈࿉𝐀𝐍𝐎𝐍𝐘𝐌𝐎𝐔𝐒⧉ᚙ֎⸙༻ 𝐚𝐧𝐝 𝐠𝐨𝐨𝐠𝐥𝐞 𝐡𝐨𝐰 𝐦𝐚𝐲 𝐈 𝐡𝐞𝐥𝐩 𝐲𝐨𝐮?*`)
} else if (args[0] === "off") {
if (!db.settings[botNumber].chatgpt) return reply(`*Artificial Intelligence(AI) chatgpt off okay*`)
db.settings[botNumber].chatgpt = false
reply(`𝐈 𝐚𝐦 𝐚𝐧 𝐀𝐢 𝐫𝐨𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐛𝐲 ༺֎ᚏ༈࿉𝐀𝐍𝐎𝐍𝐘𝐌𝐎𝐔𝐒⧉ᚙ֎⸙༻ 𝐚𝐧𝐝 𝐠𝐨𝐨𝐠𝐥𝐞,𝐓𝐡𝐚𝐧𝐤 𝐲𝐨𝐮,𝐈'𝐥𝐥 𝐥𝐞𝐚𝐯𝐞 𝐫𝐢𝐠𝐡𝐭 𝐚𝐰𝐚𝐲 𝐛𝐲𝐞,𝐩𝐥𝐞𝐚𝐬𝐮𝐫𝐞 𝐜𝐡𝐚𝐭𝐭𝐢𝐧𝐠 𝐰𝐢𝐭𝐡 𝐲𝐨𝐮`)
} else {
 let dripsu = [
{ buttonId: `${command} on`, buttonText: { displayText: 'ON' }, type: 1 },
{ buttonId: `${command} off`, buttonText: { displayText: 'OFF' }, type: 1 }
  ]
  await ZimBotInc.sendButtonText(m.chat, dripsu, `*┃🔏ᴄʜᴀᴛɢᴘᴛ ᴍᴏᴅᴇ🔏┃*`, ZimBotInc.user.name, m)
}
}
break 
case 'welcome': {
  if (!m.isGroup) throw mess.group
  if (!isAdmins)  throw mess.admin
  if (args[0] === "on") {
  if (db.chats[m.chat].isWelcome) return reply(`*𝐂𝐥𝐚𝐬𝐬𝐢𝐜 𝐛𝐨𝐭 𝐰𝐞𝐥𝐜𝐨𝐦𝐞 𝐢𝐬 𝐨𝐧*`)
  db.chats[m.chat].isWelcome = true
  reply(`*𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐢𝐬 𝐬𝐰𝐢𝐭𝐜𝐡𝐞𝐝 𝐨𝐧*`)
  } else if (args[0] === "off") {
  if (!db.chats[m.chat].isWelcome) return reply(`*𝐂𝐥𝐚𝐬𝐬𝐢𝐜 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐢𝐬 𝐨𝐟𝐟*`)
  db.chats[m.chat].isWelcome = false
  reply(`*𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐢𝐬 𝐬𝐰𝐢𝐭𝐜𝐡𝐞𝐝 𝐨𝐟𝐟*`)
  } else {
   let drips = [
  { buttonId: `${command} on`, buttonText: { displayText: 'ON' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'OFF' }, type: 1 }
    ]
    await ZimBotInc.sendButtonText(m.chat, drips, `*┃🔏ᴡᴇʟᴄᴏᴍᴇ ᴍᴏᴅᴇ🔏┃**`, ZimBotInc.user.name, m)
  }
    }   
  break
 case 'localonly': {
  if (!m.isGroup) throw mess.group
  if (!isAdmins)  throw mess.admin
  if (args[0] === "on") {
  if (db.chats[m.chat].localonly) return reply(`*🤖ʟᴏᴄᴀʟ ᴏɴʟʏ ᴀʟʀᴇᴀᴅʏ ᴏɴ ᴏᴋᴀʏ*`)
  db.chats[m.chat].localonly = true
  reply(`*🤖ʟᴏᴄᴀʟ ᴏɴʟʏ ᴏɴ*`)
  } else if (args[0] === "off") {
  if (!db.chats[m.chat].localonly) return reply(`*🧸ᴀʟʀᴇᴀᴅʏ ᴏғғ *`)
  db.chats[m.chat].localonly = false
  reply(`*🤖ʟᴏᴄᴀʟ ᴏɴʟʏ ᴏғғ*`)
  } else {
   let drips = [
  { buttonId: `${command} on`, buttonText: { displayText: 'ON' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'OFF' }, type: 1 }
    ]
    await ZimBotInc.sendButtonText(m.chat, drips, `*┃🔏ʟᴏᴄᴀʟ ᴏɴʟʏ ᴍᴏᴅᴇ🔏┃*`, ZimBotInc.user.name, m)
  }
    }   
  break 
  case 'grouponly': {
    if (!isCreator) throw mess.owner
    if (args[0] === "on") {
    if (db.settings[botNumber].grouponly) return reply(`*𝐂𝐥𝐚𝐬𝐬𝐢𝐜 𝐁𝐨𝐭 𝐢𝐬 𝐚𝐜𝐭𝐢𝐯𝐚𝐭𝐞𝐝 𝐟𝐨𝐫 𝐆𝐫𝐨𝐮𝐩 𝐮𝐬𝐞 𝐎𝐧𝐥𝐲*`)
    db.settings[botNumber].grouponly = true
    reply(`*𝐂𝐥𝐚𝐬𝐬𝐢𝐜 𝐁𝐨𝐭 𝐆𝐫𝐨𝐮𝐩 𝐮𝐬𝐞 𝐨𝐧𝐥𝐲 𝐢𝐬 𝐨𝐧*`)
    } else if (args[0] === "off") {
    if (!db.settings[botNumber].grouponly) return reply(`*𝐂𝐥𝐚𝐬𝐬𝐢𝐜 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐢𝐬 𝐝𝐞𝐚𝐜𝐭𝐢𝐯𝐚𝐭𝐞𝐝 𝐟𝐨𝐫 𝐠𝐫𝐨𝐮𝐩 𝐨𝐧𝐥𝐲 𝐮𝐬𝐞 𝐭𝐡𝐚𝐧𝐤𝐬 *`)
    db.settings[botNumber].grouponly = false
    reply(`*𝐂𝐥𝐚𝐬𝐬𝐢𝐜 𝐠𝐫𝐨𝐮𝐩 𝐮𝐬𝐞 𝐨𝐧𝐥𝐲 𝐢𝐬 𝐝𝐞𝐚𝐜𝐭𝐢𝐯𝐚𝐭𝐞𝐝*`)
    } else {
     let drips = [
    { buttonId: `${command} on`, buttonText: { displayText: 'ON' }, type: 1 },
    { buttonId: `${command} off`, buttonText: { displayText: 'OFF' }, type: 1 }
      ]
      await ZimBotInc.sendButtonText(m.chat, drips, `*┃🔏ɢʀᴏᴜᴘ ᴍᴏᴅᴇ🔏┃*`, ZimBotInc.user.name, m)
    }
      } 
  break
  case 'autoblock': {
    if (!isCreator) throw mess.owner
    if (args[0] === "on") {
    if (db.settings[botNumber].autoblock) return reply(`𝐂𝐥𝐚𝐬𝐬𝐢𝐜 𝐁𝐨𝐭 𝐚𝐮𝐭𝐨 𝐛𝐥𝐨𝐜𝐤 𝐢𝐬 𝐨𝐧`)
    db.settings[botNumber].autoblock = true
    reply(`𝐂𝐥𝐚𝐬𝐬𝐬𝐢𝐜 𝐛𝐨𝐭 𝐚𝐮𝐭𝐨 𝐛𝐥𝐨𝐜𝐤 𝐢𝐬 𝐚𝐜𝐭𝐢𝐯𝐚𝐭𝐞𝐝 𝐟𝐨𝐫 𝐚𝐥𝐥 𝐜𝐡𝐚𝐭𝐬`)
    } else if (args[0] === "off") {
    if (!db.settings[botNumber].autoblock) return reply(`*Autoblock Already off*`)
    db.settings[botNumber].autoblock = false
    reply(`*Autoblock off*`)
    } else {
     let drips = [
    { buttonId: `${command} on`, buttonText: { displayText: 'ON' }, type: 1 },
    { buttonId: `${command} off`, buttonText: { displayText: 'OFF' }, type: 1 }
      ]
      await ZimBotInc.sendButtonText(m.chat, drips, `*┃🔏ᴀᴜᴛᴏʙʟᴏᴄᴋ ᴍᴏᴅᴇ🔏┃*`, ZimBotInc.user.name, m)
    }
      } 
  break
//-----GROUP---\\

//--CREATED BY DRIPS--\\

case 'antiwame': {
   if (!m.isGroup) throw mess.group
   if (!isBotAdmins) throw mess.botAdmin
   if (!isAdmins) throw mess.admin
   if (args[0] === "on") {
   if (db.chats[m.chat].wame) return reply(`Already Activated`)
   db.chats[m.chat].wame = true
   reply(`Anti Wa.me Activated!`)
   } else if (args[0] === "off") {
   if (!db.chats[m.chat].wame) return reply(`Already deactivated`)
   db.chats[m.chat].wame = false
   reply(`Anti Wa.me is not activated!`)
   } else {
    let buttons = [
{ buttonId: 'antiwame on', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: 'antiwame off', buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await ZimBotInc.sendButtonText(m.chat, buttons, `Mode Anti Wa.me`, ZimBotInc.user.name, m)
   }
}
break
   case 'mute': {
   if (!m.isGroup) throw mess.group
   if (!isAdmins) throw mess.admin
   if (args[0] === "on") {
   if (db.chats[m.chat].mute) return reply(`Already activated`)
   db.chats[m.chat].mute = true
   reply(`${ZimBotInc.user.name} has been muted in this group !`)
   } else if (args[0] === "off") {
   if (!db.chats[m.chat].mute) return reply(`Already deactivated`)
   db.chats[m.chat].mute = false
   reply(`${ZimBotInc.user.name} has been unmuted in this group!`)
   } else {
    let buttons = [
{ buttonId: 'mute on', buttonText: { displayText: 'ON' }, type: 1 },
{ buttonId: 'mute off', buttonText: { displayText: 'OFF' }, type: 1 }
  ]
  await ZimBotInc.sendButtonText(m.chat, buttons, `Mute Bot`, ZimBotInc.user.name, m)
   }
}
break
case 'antilink': {
 if (!m.isGroup) throw mess.group
 if (!isBotAdmins) throw mess.botAdmin
 if (!isAdmins) throw mess.admin
 if (args[0] === "on") {
 if (db.chats[m.chat].antilink) return reply(`❏➢ 𝐂𝐋𝐀𝐒𝐒𝐈𝐂 𝐁𝐎𝐓 𝐀𝐍𝐓𝐈𝐋𝐈𝐍𝐊 𝐈𝐒 𝐄𝐍𝐀𝐁𝐋𝐄𝐃 ➢⧠*`)
 db.chats[m.chat].antilink = true
 reply(`𝐂𝐥𝐚𝐬𝐬𝐢𝐜 𝐁𝐨𝐭 𝐚𝐧𝐭𝐢𝐥𝐢𝐧𝐤 𝐢𝐬 𝐨𝐧`)
 } else if (args[0] === "off") {
 if (!db.chats[m.chat].antilink) return reply(`𝐂𝐥𝐚𝐬𝐬𝐢𝐜 𝐁𝐨𝐭 𝐚𝐧𝐭𝐢𝐥𝐢𝐧𝐤 𝐢𝐬 𝐨𝐟𝐟`)
 db.chats[m.chat].antilink = false
 reply(`𝐂𝐥𝐚𝐬𝐬𝐢𝐜 𝐝𝐞𝐚𝐜𝐭𝐢𝐯𝐚𝐭𝐞𝐝 𝐚𝐧𝐭𝐢𝐥𝐢𝐧𝐤`)
 } else {
let drips = [
{ buttonId: 'antilink on', buttonText: { displayText: 'ON' }, type: 1 },
{ buttonId: 'antilink off', buttonText: { displayText: 'OFF' }, type: 1 }
]
await ZimBotInc.sendButtonText(m.chat, drips, `┃⚔𝐂𝐥𝐚𝐬𝐬𝐢𝐜 𝐁𝐨𝐭 𝐀𝐧𝐭𝐢𝐥𝐢𝐧𝐤 𝐌𝐨𝐝𝐞⚔┃`, ZimBotInc.user.name, m)
}
}
break
case 'antiytchannel': case 'antilinkyoutubechannel': case 'antiytchannel': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === "on") {
if (db.chats[m.chat].antiytchannel) return reply(`*Already on umm okay*`)
db.chats[m.chat].antiytchannel = true
reply(`*Antilink active*`)
} else if (args[0] === "off") {
if (!db.chats[m.chat].antiytchannel) return reply(`*Already off okay*`)
db.chats[m.chat].antiytchannel = false
reply(`*Antilink disabled*`)
} else {
let drips = [
{ buttonId: `${command} on`, buttonText: { displayText: 'ON' }, type: 1 },
{ buttonId: `${command} off`, buttonText: { displayText: 'OFF' }, type: 1 }
]
await ZimBotInc.sendButtonText(m.chat, drips, `*┃🔏ᴀɴᴛɪʏᴛ ʟɪɴᴋ ᴍᴏᴅᴇ🔏┃*`, ZimBotInc.user.name, m)
}
}
break
 case 'antilinkinstagram': case 'adripsantiig': case 'antiinsta': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === "on") {
if (db.chats[m.chat].antiinstagram) return reply(`*Already on umm okay*`)
db.chats[m.chat].antiinstagram= true
reply(`*Antilink active*`)
} else if (args[0] === "off") {
if (!db.chats[m.chat].antiinstagram) return reply(`*Already off okay*`)
db.chats[m.chat].antiinstagram = false
reply(`*Antilink disabled*`)
} else {
 let drips = [
{ buttonId: `${command} on`, buttonText: { displayText: 'ON' }, type: 1 },
{ buttonId: `${command} off`, buttonText: { displayText: 'OFF' }, type: 1 }
 ]
 await ZimBotInc.sendButtonText(m.chat, drips, `*┃🔏ᴀɴᴛɪ ɪɴsᴛᴀ ʟɪɴᴋ ᴍᴏᴅᴇ🔏┃*`, ZimBotInc.user.name, m)
}
}
break
case 'antilinkfacebook': case 'antifb': {
 if (!m.isGroup) throw mess.group
 if (!isBotAdmins) throw mess.botAdmin
 if (!isAdmins) throw mess.admin
 if (args[0] === "on") {
 if (db.chats[m.chat].antifb) return reply(`*Already on umm okay*`)
 db.chats[m.chat].antifb = true
 reply(`*Antilink active*`)
 } else if (args[0] === "off") {
 if (!db.chats[m.chat].antifb) return reply(`*Already off okay*`)
 db.chats[m.chat].antifb = false
 reply(`*Antilink disabled*`)
 } else {
  let drips = [
    { buttonId: `${command} on`, buttonText: { displayText: 'ON' }, type: 1 },
    { buttonId: `${command} off`, buttonText: { displayText: 'OFF' }, type: 1 }
]
await ZimBotInc.sendButtonText(m.chat, drips, `*┃🔏ᴀɴᴛɪ ғʙ ʟɪɴᴋs ᴍᴏᴅᴇ🔏┃*`, ZimBotInc.user.name, m)
 }
  }
break
case 'antitelegram': case 'adripsantitele': {    
 if (!m.isGroup) throw mess.group
 if (!isBotAdmins) throw mess.botAdmin
 if (!isAdmins) throw mess.admin
 if (args[0] === "on") {
 if (db.chats[m.chat].antitelegram) return reply(`*Already on umm okay*`)
 db.chats[m.chat].antitelegram = true
 reply(`*Antilink active*`)
 } else if (args[0] === "off") {
 if (!db.chats[m.chat].antitelegram) return reply(`*Already off okay*`)
 db.chats[m.chat].antitelegram = false
 reply(`*Antilink disabled*`)
 } else {
let drips = [
  { buttonId: `${command} on`, buttonText: { displayText: 'ON' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'OFF' }, type: 1 }
   ]
   await ZimBotInc.sendButtonText(m.chat, drips, `*┃🔏ᴀɴᴛɪ ᴛᴇʟᴇ ʟɪɴᴋs ᴍᴏᴅᴇ🔏┃*`, ZimBotInc.user.name, m)
 }
}
break
case 'antivn': case 'antiaudio': case 'antivoicenote': case 'antivoice': {
  if (!m.isGroup) throw mess.group
  if (!isBotAdmins) throw mess.botAdmin
  if (!isAdmins) throw mess.admin
  if (args[0] === "on") {
  if (db.chats[m.chat].antivn) return reply(`*Already on umm okay*`)
  db.chats[m.chat].antivn = true
  reply(`*Antivn active*`)
  } else if (args[0] === "off") {
  if (!db.chats[m.chat].antivn) return reply(`*Already off okay*`)
  db.chats[m.chat].antivn = false
  reply(`*Antivn disabled*`)
  } else {
   let drips = [
     { buttonId: `${command} on`, buttonText: { displayText: 'ON' }, type: 1 },
     { buttonId: `${command} off`, buttonText: { displayText: 'OFF' }, type: 1 }
 ]
 await ZimBotInc.sendButtonText(m.chat, drips, `*┃🔏ᴀɴᴛɪ ᴠɴ ᴍᴏᴅᴇ🔏┃*`, ZimBotInc.user.name, m)
  }
   }
 break
 case 'antisticker': case 'nostickers': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === "on") {
if (db.chats[m.chat].antisticker) return reply(`*Already on umm okay*`)
db.chats[m.chat].antisticker = true
reply(`*Antisticker active*`)
} else if (args[0] === "off") {
if (!db.chats[m.chat].antisticker) return reply(`*Already off okay*`)
db.chats[m.chat].antisticker = false
reply(`*Antisticker disabled*`)
} else {
let drips = [
{ buttonId: `${command} on`, buttonText: { displayText: 'ON' }, type: 1 },
{ buttonId: `${command} off`, buttonText: { displayText: 'OFF' }, type: 1 }
]
await ZimBotInc.sendButtonText(m.chat, drips, `*┃🔏ᴀɴᴛɪ sᴛɪᴄᴋᴇʀ ᴍᴏᴅᴇ🔏┃*`, ZimBotInc.user.name, m)
}
}
break
case 'antiphoto': case 'antipic': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === "on") {
if (db.chats[m.chat].antiphoto) return reply(`*Already on umm okay*`)
db.chats[m.chat].antiphoto = true
reply(`*Antiphoto active*`)
} else if (args[0] === "off") {
if (!db.chats[m.chat].antiphoto) return reply(`*Already off okay*`)
db.chats[m.chat].antiphoto = false
reply(`*Antiphoto disabled*`)
} else {
let drips = [
{ buttonId: `${command} on`, buttonText: { displayText: 'ON' }, type: 1 },
{ buttonId: `${command} off`, buttonText: { displayText: 'OFF' }, type: 1 }
]
await ZimBotInc.sendButtonText(m.chat, drips, `*┃🔏ʟᴏᴄᴀʟ ᴏɴʟʏ ᴍᴏᴅᴇ🔏┃*`, ZimBotInc.user.name, m)
}
}
break
case 'antivideo': case 'antivid': {
  if (!m.isGroup) throw mess.group
  if (!isBotAdmins) throw mess.botAdmin
  if (!isAdmins) throw mess.admin
  if (args[0] === "on") {
  if (db.chats[m.chat].antivideo) return reply(`*Already on umm okay*`)
  db.chats[m.chat].antivideo = true
  reply(`*Antivideo active*`)
  } else if (args[0] === "off") {
  if (!db.chats[m.chat].antivideo) return reply(`*Already off okay*`)
  db.chats[m.chat].antivideo = false
  reply(`*Antivideo disabled*`)
  } else {
   let drips = [
     { buttonId: `${command} on`, buttonText: { displayText: 'ON' }, type: 1 },
     { buttonId: `${command} off`, buttonText: { displayText: 'OFF' }, type: 1 }
 ]
 await ZimBotInc.sendButtonText(m.chat, drips, `*┃🔏ᴀɴᴛɪᴠɪᴅᴇᴏ ᴍᴏᴅᴇ🔏┃*`, ZimBotInc.user.name, m)
  }
   }
 break
case 'antiviewonce': case 'antionce':

if (!m.key.fromMe && !isCreator)  throw mess.owner
if (args[0] === "on") {
if (global.db.chats[m.chat].antionce) return reply(`𝐀𝐧𝐭𝐢𝐯𝐢𝐞𝐰 𝐎𝐧𝐜𝐞 𝐢𝐬 𝐚𝐜𝐭𝐢𝐯𝐚𝐭𝐞𝐝 𝐛𝐲 𝐂𝐥𝐚𝐬𝐬𝐢𝐜 𝐁𝐨𝐭`)
global.db.chats[m.chat].antionce = true
reply(`${command} *Successfully Activated*`)
} else if (args[0] === "off") {
  if (!global.db.chats[m.chat].antionce) return reply(`*Already deactivated*`)
global.db.chats[m.chat].antionce = false
reply(`${command} 𝐀𝐧𝐭𝐢𝐥𝐢𝐧𝐤 𝐢𝐬 𝐃𝐞𝐚𝐜𝐭𝐢𝐯𝐚𝐭𝐞𝐝 𝐛𝐲 𝐂𝐥𝐚𝐬𝐬𝐢𝐜 𝐁𝐨𝐭`)
   } else {
let drips = [
{ buttonId: `${command} on`, buttonText: { displayText: 'ON' }, type: 1 },
{ buttonId: `${command} off`, buttonText: { displayText: 'OFF' }, type: 1 }
]
await ZimBotInc.sendButtonText(m.chat, drips, `*┃🔏ᴀɴᴛɪᴠɪᴇᴡ ᴏɴᴄᴇ ᴍᴏᴅᴇ🔏┃*`, `${global.botname}`, m)
}
break
case 'antitiktok': case 'aantitik': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === "on") {
if (db.chats[m.chat].antitiktok) return reply(`*Already on umm *`)
db.chats[m.chat].antitiktok = true
reply(`*Antilink active*`)
} else if (args[0] === "off") {
if (!db.chats[m.chat].antitiktok) return reply(`*Already off okay*`)
db.chats[m.chat].antitiktok = false
reply(`*Antilink disabled*`)
} else {
let drips = [
{ buttonId: `${command} on`, buttonText: { displayText: 'ON' }, type: 1 },
{ buttonId: `${command} off`, buttonText: { displayText: 'OFF' }, type: 1 }
]
await ZimBotInc.sendButtonText(m.chat, drips, `*┃🔏ᴀɴᴛɪᴛɪᴋᴛᴏᴋ ᴍᴏᴅᴇ🔏┃*`, ZimBotInc.user.name, m)
}
}
break
case 'antilinkall': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === "on") {
 if (db.chats[m.chat].antilinkall) return reply(`𝐖𝐚𝐫𝐧𝐢𝐧𝐠 𝐂𝐥𝐚𝐬𝐬𝐢𝐜 𝐁𝐨𝐭 𝐚𝐧𝐭𝐢𝐥𝐢𝐧𝐤 𝐢𝐬 𝐨𝐧 ☩ 𝐘𝐨𝐮 𝐚𝐫𝐞 𝐧𝐨𝐭 𝐚𝐥𝐥𝐨𝐰𝐞𝐝 𝐭𝐨 𝐬𝐞𝐧𝐝 𝐚𝐧𝐲 𝐥𝐢𝐧𝐤 𝐡𝐞𝐫𝐞`)
 db.chats[m.chat].antilinkall = true
 reply(`𝐂𝐥𝐚𝐬𝐬𝐢𝐜 𝐁𝐨𝐭 𝐚𝐧𝐭𝐢𝐥𝐢𝐧𝐤 𝐄𝐧𝐚𝐛𝐥𝐞𝐝`)
 } else if (args[0] === "off") {
 if (!db.chats[m.chat].antilinkall) return reply(`*Already off okay*`)
 db.chats[m.chat].antilinkall = false
 reply(`𝐂𝐥𝐚𝐬𝐬𝐢𝐜 𝐁𝐨𝐭 𝐀𝐧𝐭𝐢𝐥𝐢𝐧𝐤 𝐢𝐬 𝐨𝐟𝐟`)
 } else {
  let drips = [
    { buttonId: `${command} on`, buttonText: { displayText: 'ON' }, type: 1 },
    { buttonId: `${command} off`, buttonText: { displayText: 'OFF' }, type: 1 }
]
await ZimBotInc.sendButtonText(m.chat, drips, `┃⚔𝐂𝐥𝐚𝐬𝐬𝐢𝐜 𝐁𝐨𝐭 𝐀𝐧𝐭𝐢𝐥𝐢𝐧𝐤☣┃`, ZimBotInc.user.name, m)
 }
 }
break
case 'adripsantitwt': case 'antitwitter': case 'antilinktwit': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === "on") {
if (db.chats[m.chat].antitwitter) return reply(`*Already on umm okay*`)
db.chats[m.chat].antitwitter = true
reply(`*Antilink active*`)
} else if (args[0] === "off") {
if (!db.chats[m.chat].antitwitter) return reply(`*Already off okay*`)
db.chats[m.chat].antitwitter = false
reply(`*Antilink disabled*`)
} else {
 let dripsi = [
{ buttonId: `${command} on`, buttonText: { displayText: 'ON' }, type: 1 },
{ buttonId: `${command} off`, buttonText: { displayText: 'OFF' }, type: 1 }
 ]
 await ZimBotInc.sendButtonText(m.chat, dripsi, `*┃🔏ᴀɴᴛɪ ᴛᴡɪᴛᴛᴇʀ ʟɪɴᴋ ᴍᴏᴅᴇ🔏┃*`, ZimBotInc.user.name, m)
 }
}
break
case 'antibadword': {		
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins && !isCreator) return reply(mess.admin)
if (args[0] === "on") {
if (antiToxic) return reply('*Already activated*')
dripsanti.push(from)
reply('*Success turning on anti rude in this group*')
var group = await ZimBotInc.groupMetadata(from)
var members = group['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
ZimBotInc.sendMessage(from, {text: `*▊▊▊ANTILINK RUDE▊▊▊*\n\n*no hate speech anymore, watch space im going to kick dumps*`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiToxic) return reply('*Already deactivated*')
let off = dripsanti.indexOf(from)
dripsanti.splice(off, 1)
reply('*Success in turning off antirude in this group happy now*')
} else {
 let buttons = [
 { buttonId: `${command} on`, buttonText: { displayText: 'ON' }, type: 1 },
 { buttonId: `${command} off`, buttonText: { displayText: 'OFF' }, type: 1 }
 ]
 await ZimBotInc.sendButtonText(m.chat, buttons, `*▊▊▊ANTI BADWORDS▊▊▊*\n\n.`, `${global.botname}`, m)
 }
 }
 
break
 case 'linkgroup': case 'grouplink': case 'gclink': case 'linkgc':{ 
   if (!m.isGroup) throw mess.group
   let response = await ZimBotInc.groupInviteCode(m.chat)
   ZimBotInc.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink of: ${groupMetadata.subject} Group`,m ,{ detectLink: true })
}
   break
 case 'nsfw': {	 			
 if (!m.isGroup) return reply(mess.group)
 if (!isBotAdmins) return reply(mess.botAdmin)
 if (!isAdmins && !isCreator) return reply(mess.admin)
 if (args[0] === "on") {
 if (isAntinsfw) return reply('*Already activated*')
 dripsno.push(from)
 reply('𝐂𝐥𝐚𝐬𝐬𝐢𝐜 𝐁𝐨𝐭 𝐆𝐨𝐧𝐧𝐚 𝐛𝐞 𝐬𝐞𝐱𝐲 𝐖𝐚𝐭𝐜𝐡 𝐨𝐮𝐭 ⚔')
 var group = await ZimBotInc.groupMetadata(from)
 var members = group['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 ZimBotInc.sendMessage(from, {text: `*horny mood activated everyone be ready for masturbation*`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!isAntinsfw) return reply('*Already deactivated*')
 let off = dripsno.indexOf(from)
 dripsno.splice(off, 1)
 reply('*Success turning off horny mood in this group*')
 } else {
let button = [
{ buttonId: `${command} on`, buttonText: { displayText: 'ON' }, type: 1 },
{ buttonId: `${command} off`, buttonText: { displayText: 'OFF' }, type: 1 }
]
await ZimBotInc.sendButtonText(m.chat, button, `*▊▊▊HORNY MOOD▊▊▊*\n\n*TURN IT ON SO PEOPLE THEY WILL START TO MASTURBATE LOL*`, `${global.botname}`, m)
}
}
break
 case 'ephemeral': {
   if (!m.isGroup) throw mess.group
   if (!isBotAdmins) throw mess.botAdmin
   if (!isAdmins) throw mess.admin
   if (!text) throw 'Enter the enable/disable value, For Example ${prefix}ephemeral enable'
   if (args[0] === 'enable') {
  await ZimBotInc.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
   } else if (args[0] === 'disable') {
  await ZimBotInc.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
   }
 }
 break
 case 'translate': case 'terjemahan': case 'trt': {
   tes = await fetchJson (`https://megayaa.herokuapp.com/api/translate?to=en&kata=${args.join(" ")}`)
   Infoo = tes.info
   Detek = tes.translate
   reply(`🌐Translate : ${Detek}\n`)
   }
   break
  /* case 'translate': case 'terjemahan': case 'tr': {
    tes = await fetchJson (`https://soccer.sportmonks.com/api/v2.0/livescores&api_token=y5TQaQFczQuU3awKmWEi1eD1Sy3U6WuTkNZAw2fdQEtHDRwgJpkCZVUf9DYb`)
    Infoo = tes.info
    Detek = tes.translate
    reply(`🌐Translate : ${Detek}\n`)
    }
*/
break

 break
 case 'git': case 'gitclone':
reply(mess.wait)
 let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
 if(!args[0]) throw 'link github'
if (!regex1.test(args[0])) throw 'link!'
   let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    // 'attachment; filenameq=ZidniGanz.zip'
    reply(`𝐏𝐥𝐞𝐚𝐬𝐞 𝐖𝐚𝐢𝐭 𝐀𝐬 𝐂𝐥𝐚𝐬𝐬𝐢𝐜 𝐁𝐨𝐭 𝐢𝐬 𝐬𝐞𝐧𝐝𝐢𝐧𝐠 𝐲𝐨𝐮𝐫 𝐑𝐞𝐩𝐨.`)
    ZimBotInc.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' , quoted: m,contextInfo: { externalAdReply:{
      title:"𝐂𝐋𝐀𝐒𝐒𝐈𝐂 𝐁𝐎𝐓",
      body:"`➢𝙰𝙻𝙻 𝙷𝙰𝙸𝙻 𝚃𝙾 𝙺𝙸𝙽𝙶 𝚂𝙰𝙼 \n➢𝙲𝙻𝙰𝚂𝚂𝙸𝙲 𝙱𝙾𝚃 2024",
      showAdAttribution: true,
      mediaType:2,
      thumbnail: fs.readFileSync('./drips.jpg'),
      mediaUrl:`https://chat.whatsapp.com/EPSGKau0IVi7J5lyOJO7Jk`, 
      sourceUrl: `https://chat.whatsapp.com/EPSGKau0IVi7J5lyOJO7Jk`,
      }}
      })
 
 break
 case 'tagme': {
   ZimBotInc.sendMessage(m.chat, {text:`@${m.sender.split("@")[0]}`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
   }
 break
 case 'truth':
				const trut =['Have you loved anyone? How long?','If you can or if you want, outside school/college Who will you make friends? (May be different / high school)','What is your biggest fear?','Have you liked a people and felt that person likes you too?','Who is your ex-girlfriend?','What makes you happy when you are sad?','Ever loved someone? what does it feels like?','Have you ever been in an affair?','The most feared thing','Who is the most influential person to your life?','What is the proud thing you did this year?',' Who can make you smile?','Who is the person you truly love? What is the reason? ','Mention the incident that makes you hurt that you still remember','What are the achievements that have been crushed on this year?','What is your worst habit when at school?']
				const ttrth = trut[Math.floor(Math.random() * trut.length)]
				truteh = await getBuffer(`https://telegra.ph/file/d2a1d3bbfabf34fabe666.jpg`)
			ZimBotInc.sendMessage(m.chat, {image: truteh, caption: '*Truth*\n\n'+ ttrth, quoted: m,contextInfo: { externalAdReply:{
        title:"𝐂𝐋𝐀𝐒𝐒𝐈𝐂 𝐁𝐎𝐓",
        body:"`➢𝙰𝙻𝙻 𝙷𝙰𝙸𝙻 𝚃𝙾 𝙺𝙸𝙽𝙶 𝚂𝙰𝙼 \n➢𝙲𝙻𝙰𝚂𝚂𝙸𝙲 𝙱𝙾𝚃 2024",
        showAdAttribution: true,
        mediaType:2,
        thumbnail: fs.readFileSync(`./drips.jpg`) ,
        mediaUrl:`https://chat.whatsapp.com/EPSGKau0IVi7J5lyOJO7Jko`, 
        sourceUrl: `https://chat.whatsapp.com/EPSGKau0IVi7J5lyOJO7Jk` }}}, {quoted: m})
break
case 'ghsearch': 
       case 'githubsearch': 
       case 'searchgithub':
             if (!q) return reply('*What are you looking for?*')
             let pomi = await fetch('https://api.github.com/search/repositories?q='+q)
            let dhumi = await pomi.json()
             if (pomi.status !== 200) throw dhumi
             str = dhumi.items.map((repo, index) => {
             return `
${1 + index}. *${repo.full_name}*${repo.fork ? '*FORKS*' : ''}
${repo.html_url}
*CREATED ON:* ${formatDate(repo.created_at)}
*LAST UPDATED ON:* ${formatDate(repo.updated_at)}
👁  ${repo.watchers}   🍴  ${repo.forks}   ⭐ ${repo.stargazers_count}
${repo.open_issues} *ISSUES:*${repo.description ? `
*DESCRIPTION:*\n${repo.description}` : ''}
*CLONE:* $ git clone ${repo.clone_url}
`.trim()
}).join('\n\n')
            reply(str)
break
 case 'delete': case 'del': {
   if (!m.quoted) throw false
   let { chat, fromMe, id, isBaileys } = m.quoted
   if (!isBaileys) throw '*The message was not sent by a bot💥*'
   ZimBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
 }
 break
 case 'bcgc': case 'bcgroup': {
   if (!isCreator) throw global.owner
   if (!text) throw `Where is the text?\n\nExample : ${prefix + command} hello guys, am back`
   let getGroups = await ZimBotInc.groupFetchAllParticipating()
   let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
   let anu = groups.map(v => v.id)
   reply(`Send Broadcast To ${anu.length} Group Chat, Finish Time ${anu.length * 1.5} second`)
   for (let i of anu) {
  await sleep(1500)
  let btn = [{
 urlButton: {
  displayText: '𝐉𝐎𝐈𝐍',
  url: 'https://chat.whatsapp.com/EPSGKau0IVi7J5lyOJO7Jk'
 }
  }, {
 callButton: {
  displayText: 'OWNER',
  phoneNumber: '+258 86 910 3969'
 }
  }, {
 quickReplyButton: {
  displayText: 'PING',
  id: 'ping'
 }
  }, {
 quickReplyButton: {
  displayText: 'OWNER',
  id: 'owner'
 }  
  }, {
 quickReplyButton: {
  displayText: 'SCRIPT',
  id: 'sc'
 }
  }]
 fatihgans = fs.readFileSync('./Classic/drips.jpg')
 let txt = `「 𝐂𝐋𝐀𝐒𝐒𝐈𝐂 𝐁𝐎𝐓 𝐁𝐑𝐎𝐀𝐃𝐂𝐀𝐒𝐓 」\n\n${text}`
 ZimBotInc.send5ButImg(i, txt, ZimBotInc.user.name, fatihgans, btn)
  }
   reply(`Successful Sending Broadcast To ${anu.length} Group(s)`)
 }
 break
 case 'bc': case 'broadcast': case 'bcall': {
   if (!isCreator) throw global.owner
   if (!text) throw `Where is the text?\n\nExample : ${prefix + command} Classic here`
   let anu = await store.chats.all().map(v => v.id)
   reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} second`)
for (let yoi of anu) {
    await sleep(1500)
    let btn = [{
 urlButton: {
  displayText: 'GITHUB',
  url: 'https://github.com/Samue-l1/Classic-V4'
 }
  }, {
 quickReplyButton: {
  displayText: 'OWNER',
  id: 'owner'
 }
  }]
 fatihgans = fs.readFileSync('./Classic/drips.jpg')
 let txt = `「 𝐂𝐋𝐀𝐒𝐒𝐈𝐂 𝐁𝐎𝐓 𝐁𝐑𝐎𝐀𝐃𝐂𝐀𝐒𝐓 」\n\n${text}`
 ZimBotInc.send5ButImg(yoi, txt, `Broadcast By ${global.pengguna}`, fatihgans, btn)
}
reply('*Broadcast Success*')
 }
 break
 case 'chatinfo': {
   if (!m.quoted) reply('*Reply to mesaage👀*')
   let msg = await m.getQuotedObj()
   if (!m.quoted.isBaileys) throw '*The message was not sent by a bot!💥*'
   let teks = ''
   for (let i of msg.userReceipt) {
  let read = i.readTimestamp
  let unread = i.receiptTimestamp
  let waktu = read ? read : unread
  teks += `➟ @${i.userJid.split('@')[0]}\n`
  teks += `➟ *𝗧𝗜𝗠𝗘 :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ➟ *𝗦𝗧𝗔𝗧𝗨𝗦 :* ${read ? 'Read' : 'Unread'}\n\n`
   }
   ZimBotInc.sendTextWithMentions(m.chat, teks, m)
 }
 break
 case 'q': case 'quoted': {
if (!m.quoted) return reply('Reply Message!!')
let wokwol = await ZimBotInc.serializeM(await m.getQuotedObj())
if (!wokwol.quoted) return reply('*The message you replied to does not contain a reply💫*')
await wokwol.quoted.copyNForward(m.chat, true)
 }
    break
 case 'listpc': {
  let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
  let teks = `➥ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
  for (let i of anu) {
      let nama = store.messages[i].array[0].pushName
      teks += `➥ *NAME :* ${nama}\n➥ *USER :* @${i.split('@')[0]}\n➥ *CHAT :* https://wa.me/${i.split('@')[0]}\n\n━━━━━━━━━━━━━━━━━━━━━━━━\n\n`
  }
  ZimBotInc.sendTextWithMentions(m.chat, teks, m)
}
break
break
   case 'listgc': {
    let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
    let teks = `➟𝗚𝗥𝗢𝗨𝗣 𝗖𝗛𝗔𝗧 𝗟𝗜𝗦𝗧\n\n𝗧𝗢𝗧𝗔𝗟 𝗚𝗥𝗢𝗨𝗣 : ${anu.length} Group\n\n`
    for (let i of anu) {
let metadata = await ZimBotInc.groupMetadata(i)
teks += `➟𝗡𝗔𝗠𝗘 : ${metadata.subject}\n➟𝗢𝗪𝗡𝗘𝗥 : @${metadata.owner.split('@')[0]}\n➟𝗜𝗗 : ${metadata.id}\n➟ 𝗠𝗔𝗗𝗘 : ${moment(metadata.creation * 1000).tz('Africa/Harare').format('DD/MM/YYYY HH:mm:ss')}\n➟ 𝗠𝗘𝗠𝗕𝗘𝗥 : ${metadata.participants.length}\n\n────────────────────────\n\n`
    }
    ZimBotInc.sendTextWithMentions(m.chat, teks, m)
}
break
case 'listonline': case 'onlinelist': case 'liston': {
  let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
  let online = [...Object.keys(store.presences[id]), botNumber]
  ZimBotInc.sendText(m.chat, '*LIST ONLINE*:\n\n' + online.map(v => '> @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
}
break
 case 'sticker': case 's': case 'stickergif': case 'sgif': {
 if (!quoted) throw `Reply Video/Image With Caption ${prefix + command}`
 replay(mess.wait)
  if (/image/.test(mime)) {
   let media = await quoted.download()
   let encmedia = await ZimBotInc.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
   await fs.unlinkSync(encmedia)
 } else if (/video/.test(mime)) {
   if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 seconds!')
   let media = await quoted.download()
   let encmedia = await ZimBotInc.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
   await fs.unlinkSync(encmedia)
 } else {
   throw `Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-9 Seconds`
   }
 }
 break
 case 'slap':
 const  { sticker } = require('./plugins/sticker.js')
 if(m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
if(!m.mentionedJid.length) m.mentionedJid.push(m.sender)
let res = await fetch('https://nekos.life/api/kiss')
let jsonk = await res.json()
let { uri } = jsonk
let stiker = await sticker(null, uri, `+${m.sender.split('@')[0]} le dio una bofetada a ${m.mentionedJid.map((user)=>(user === m.sender)? 'alguien ': `+${user.split('@')[0]}`).join(', ')}`)
ZimBotInc.sendVideoAsSticker(m.chat, stiker, m, { packname: global.packname, author: global.author })
 break
 case 'ebinary': {
 if (!m.quoted.text && !text) throw `Send/reply text with caption ${prefix + command}`
 let { eBinary } = require('./lib/binary')
 let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
 let eb = await eBinary(teks)
 reply(eb)
}
break
 case 'dbinary': {
 if (!m.quoted.text && !text) throw `Send/reply text with caption ${prefix + command}`
 let { dBinary } = require('./lib/binary')
 let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
 let db = await dBinary(teks)
 reply(db)
}
break
 case 'emojimix': {
if (!text) throw `Example : ${prefix + command} 😅+🤔`
let [emoji1, emoji2] = text.split`+`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
    let encmedia = await ZimBotInc.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
    await fs.unlinkSync(encmedia)
}
    }
    break
 case 'toimage': case 'toimg': {
   if (!quoted) throw '*Reply Image*'
   if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
   replay(mess.wait)
   let media = await ZimBotInc.downloadAndSaveMediaMessage(quoted)
   let ran = await getRandom('.png')
   exec(`ffmpeg -i ${media} ${ran}`, (err) => {
  fs.unlinkSync(media)
  if (err) throw err
  let buffer = fs.readFileSync(ran)
  ZimBotInc.sendMessage(m.chat, { image: buffer }, { quoted: m })
  fs.unlinkSync(ran)
   })
 }
 break
case 'tomp4': case 'tovideo': {
   if (!quoted) throw 'Reply Image'
   if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
   replay(mess.wait)
let { webp2mp4File } = require('./lib/uploader')
   let media = await ZimBotInc.downloadAndSaveMediaMessage(quoted)
   let webpToMp4 = await webp2mp4File(media)
   await ZimBotInc.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: '*Convert webp to video*' } }, { quoted: m })
   await fs.unlinkSync(media)
 }
 break
 case 'tts':
  const gtts = require('./Classic/gtts')(args[0])
  if (args.length < 1) return ZimBotInc.sendMessage(from, `ᴇxᴀᴍᴘʟᴇ: ${prefix}ᴇɴ ʜᴇʟʟᴏ`, text, {quoted: m})
  if (args.length < 2) return ZimBotInc.sendMessage(from, `ᴇxᴀᴍᴘʟᴇ: ${prefix}ᴇɴ ʜᴇʟʟᴏ`, text, {quoted: m})
 var dtt = body.slice(20)
  reply(mess.wait)
  var ranm = getRandom('.mp3')
		var	rano = getRandom('.ogg')
				dtt.length > 300
         gtts.save(ranm, dtt, function() {
          exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
          fs.unlinkSync(ranm)
          buffer = fs.readFileSync(rano)
          if (err) return reply('error')
          Ruri.sendMessage(from,  audio, {quoted: freply, ptt:true})
          ZimBotInc.sendMessage(m.chat, { audio: buffer, mimetype: 'audio/mp4', ptt: true, quoted: mudratunha})
          fs.unlinkSync(rano)
          })
          })
  break
 case 'toaud': case 'toaudio': {
 if (!/video/.test(mime) && !/audio/.test(mime)) throw `Send/Reply Video/Audio You Want Audio With Caption ${prefix + command}`
 if (!quoted) throw `Send/Reply Video/Audio You Want to Use as Audio With Caption ${prefix + command}`
 replay(mess.wait)
 let media = await quoted.download()
 let { toAudio } = require('./lib/converter')
 let audio = await toAudio(media, 'mp4')
 ZimBotInc.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
 }
 break
 case 'tomp3': {
 if (/document/.test(mime)) throw `Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`
 if (!/video/.test(mime) && !/audio/.test(mime)) throw `Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`
 if (!quoted) throw `Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`
 replay(mess.wait)
 let media = await quoted.download()
 let { toAudio } = require('./lib/converter')
 let audio = await toAudio(media, 'mp4')
 ZimBotInc.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Converted By ${ZimBotInc.user.name}.mp3`}, { quoted : m })
 }
 break
 case 'tovn': case 'toptt': {
 if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`
 if (!quoted) throw `Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`
 replay(mess.wait)
 let media = await quoted.download()
 let { toPTT } = require('./lib/converter')
 let audio = await toPTT(media, 'mp4')
 ZimBotInc.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
 }
 break
 case 'togif': {
   if (!quoted) throw 'Reply Image'
   if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
   replay(mess.wait)
let { webp2mp4File } = require('./lib/uploader')
   let media = await ZimBotInc.downloadAndSaveMediaMessage(quoted)
   let webpToMp4 = await webp2mp4File(media)
   await ZimBotInc.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
   await fs.unlinkSync(media)
 }
 break
case 'tourl': {
   replay(mess.wait)
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
   let media = await ZimBotInc.downloadAndSaveMediaMessage(quoted)
   if (/image/.test(mime)) {
  let anu = await TelegraPh(media)
  reply(util.format(anu))
   } else if (!/image/.test(mime)) {
  let anu = await UploadFileUgu(media)
  reply(util.format(anu))
   }
   await fs.unlinkSync(media)
 }
 break
 case 'imagenobg': case 'removebg': case 'remove-bg': {
    if (!quoted) throw `Send/Reply Image With Caption ${prefix + command}`
    if (!/image/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
    if (/webp/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
    let remobg = require('remove.bg')
    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
    hmm = await './src/remobg-'+getRandom('')
    localFile = await ZimBotInc.downloadAndSaveMediaMessage(quoted, hmm)
    outputFile = await './src/hremo-'+getRandom('.png')
    replay(mess.wait)
    remobg.removeBackgroundFromImageFile({
 path: localFile,
 apiKey: apinobg,
 size: "regular",
 type: "auto",
 scale: "100%",
 outputFile 
    }).then(async result => {
    ZimBotInc.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
    await fs.unlinkSync(localFile)
    await fs.unlinkSync(outputFile)
    })
    }
    break
 
    case 'yts1': case 'ytsearch': {
   if (!text) throw `Example : ${prefix + command} story wa anime`
   let yts = require("yt-search")
   let search = await yts(text)
   let teks = 'SUBSCRIBE Search\n\n Result From '+text+'\n\n'
   let no = 1
   for (let i of search.all) {
  teks += `➟No: ${no++}\n🧸𝗧𝗬𝗣𝗘 : ${i.type}\n🔳𝗩𝗜𝗗𝗘𝗢 𝗜𝗗: ${i.videoId}\n🔴𝗧𝗜𝗧𝗟𝗘 : ${i.title}\n🔏𝗩𝗜𝗘𝗪𝗦 : ${i.views}\n🎬𝗗𝗨𝗥𝗔𝗧𝗜𝗢𝗡 : ${i.timestamp}\n📡𝗨𝗣𝗟𝗢𝗔𝗗 𝗔𝗧 : ${i.ago}\n🎰𝗔𝗨𝗧𝗛𝗢𝗥 : ${i.author.name}\n📌𝗨𝗥𝗟 : ${i.url}\n\n─────────────────\n\n`
   }
   ZimBotInc.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
 }
 break

case 'google': {
    reply(mess.wait)
    const { googleIt } = require('@bochilteam/scraper')
    let full = /f$/i.test(command)
    let text = args.join` `
    if (!text) return reply(m.chat, 'No text to search', m)
    let url = 'https://google.com/search?q=' + encodeURIComponent(text)
    let search = await googleIt(text)
    let msg = search.articles.map(({
        // header,
        title,
        url,
        description
    }) => {
        return `*${title}*\n_${url}_\n_${description}_`
    }).join('\n\n')
    try {
        let ss = await (await fetch(('nrtm', '/api/ssweb', { delay: 1000, url, full }))).arrayBuffer()
        if (/<!DOCTYPE html>/i.test(ss.toBuffer().toString())) throw ''
        await ZimBotInc.sendFile(m.chat, ss, 'screenshot.png', url + '\n\n' + msg, m)
    } catch (e) {
        reply(msg)
    }
}
   break
case 'gimage': case 'googleimage': {
reply(mess.wait)
if (!text) throw `Example : ${prefix + command} ml nana`
let gis = require('g-i-s')
gis(text, async (error, result) => {
n = result
images = n[Math.floor(Math.random() * n.length)].url
let buttons = [
  {buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
   ]
   let buttonMessage = {
  image: { url: images },
  caption: `❰ 𝗚𝗢𝗢𝗚𝗟𝗘 𝗜𝗠𝗔𝗚𝗘 ❱
*𝗤𝗨𝗘𝗥𝗬* : ${text}
*𝗠𝗘𝗗𝗜𝗔 𝗨𝗥𝗟* : ${images}`,
  footer: ZimBotInc.user.name,
  buttons: buttons,
  headerType: 4
   }
   ZimBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break
    
 case 'lyrics':
reply(mess.wait)
if (args.length < 1) return reply('What is the name of the song?')
teks = body.slice(7)
lirikLagu(teks).then((res) => {
let lirik = `${res[0].result}`
reply(lirik)
})
 break
 
 case 'apk':
reply(mess.wait)
if (args.length == 0) return reply(`Example: ${prefix + command} WhatsApp`)
let jsonl = await Api.apk(text)
if (!jsonl.status) return reply('failed')
let rows = []
jsonl.data.map(async (v, i) => {
rows.push({
title: v.name,
rowId: `${prefix}getapk ${text}—${v.no}`,
description: `[ ${v.size} | ${v.version} ]`
 })
 })
ZimBotInc.sendList(m.chat, '', `Hey zim-bot user here are your results: showing search results for : “${text}”, select below the application you want to download. 🍻`, '', 'OPTIONS', [{
rows
}], m)
break
case 'ytshorts': case 'shorts': {
  
if (!text) return m.reply(`*Use ${prefix + command} enter pin link*`)
if (!isUrl(args[0]) && !args[0].includes('youtube')) throw '*The link you provided is not valid*'                
xa.Youtube(`${text}`).then(async (data) => {
if (data.medias[0].formattedSize.split('MB')[0] >= 100) return reply('*File Over Limit* '+util.format(data)) 
cap = `
*▊▊▊YOUTUBE SHORTS▊▊▊*

*⬤▶━━━━━━━━━2:30*\n\n\n\n*⬤TITLE:* ${data.title}\n*⬤QUALITY:* ${data.medias[0].quality}\n*⬤SIZE:* ${data.medias[0].formattedSize}\n*⬤DURATION* ${data.duration}\n*⬤ID:* ${data.medias[0].cached}\n*⬤LINK:* ${data.url}\n\n*ᴢɪᴍ ʙᴏᴛ ɪɴᴄ*`
buf = await getBuffer(data.thumbnail)
ZimBotInc.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${cap}` }, { quoted: m })
ZimBotInc.sendMessage(m.chat, { video: { url: data.medias[0].url }, jpegThumbnail:buf, caption: `*⬤TITLE:* ${data.title}\n*⬤QUALITY:* ${data.medias[0].quality}\n*⬤SIZE:* ${data.medias[0].formattedSize}` }, { quoted: m })  
            }).catch((err) => {
                reply(`*Failed to download and send media*`)
            })
        }
        break
 case 'pinterest': case 'pndl': case 'pin': {
replay(mess.wait)
 if (!args.join(" ")) return reply("What picture are you looking for?")
 try {
 hx.pinterest(args.join(" ")).then(async(res) => {
 dripdako = res[Math.floor(Math.random() * res.length)]
 let buttons = [
 {buttonId: `pinterest ${args.join(" ")}`, buttonText: {displayText: 'NEXT'}, type: 1}
 ]
 let buttonMessage = {
 image: { url: dripdako },
 caption:  `
 *TITLE:*`  + args.join(" ") 
 
 `*PHOTO URL:* `+dripdako,

 footer: `${global.botname}`,
 buttons: buttons,
 headerType: 4,
 contextInfo:{externalAdReply:{
 title:`ᴢɪᴍ ʙᴏᴛ ᴠ5`,
 body:`DRIPS OFC`,
 showAdAttribution: true,
 thumbnail: global.thumb,
 mediaType:2,
 mediaUrl: `https://chat.whatsapp.com/EPSGKau0IVi7J5lyOJO7Jk`,
 sourceUrl: `https://chat.whatsapp.com/EPSGKau0IVi7J5lyOJO7Jk`
 }}
 }
 ZimBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
 }).catch(_ => _)
 } catch {
 reply("Error")
 }
 }
 
 break
    case 'couple': case 'ppcouple': {
   replay(mess.wait)
   let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
   let random = anu[Math.floor(Math.random() * anu.length)]
   ZimBotInc.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
   ZimBotInc.sendMessage(m.chat, { image: { url: random.female }, caption: `*Couple Female*` }, { quoted: m })
 }
break
//------ANIME FESTURES------\\
case 'cry': 
case 'kill':
case 'hug':
case 'pat':
case 'lick':
case 'kiss':
case 'bite':
case 'yeet':
case 'neko':
case 'bully':
case 'bonk':
case 'wink':
case 'poke':
case 'nom':
case 'slap':
case 'smile':
case 'wave':
case 'awoo':
case 'blush':
case 'smug':
case 'glomp':
case 'happy':
case 'dance':
case 'cringe':
case 'cuddle':
case 'highfive':
case 'shinobu':
case 'megumin':
case 'handhold':
reply(mess.wait)
axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
ZimBotInc.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
break  
case 'slap':
reply(mess.wait)
 stantontunha = await axios.get(`https://nekos.life/api/v2/img/slap`)
var garo = [
{buttonId: `.${command}`, buttonText: {displayText: `NEXT`}, type: 1},
]
let tunhamasawi = {
image: {url:stantontunha.data.url},
caption:  `Here you go!`,
footer: `${global.botname}`,
buttons: garo,
headerType: 4
}
await ZimBotInc.sendMessage(m.chat, tunhamasawi,{ quoted:m }).catch(err => {
return('Error!')
})

break
case 'pat':
reply(mess.wait)
 lioneltunha = await axios.get(`https://nekos.life/api/v2/img/pat`)
var tunhabee = [
{buttonId: `.${command}`, buttonText: {displayText: `NEXT`}, type: 1},
]
let masawitunha = {
image: {url:lioneltunha.data.url},
caption:  `DATA OBTAINED!`,
footer: `${global.botname}`,
buttons: tunhabee,
headerType: 4
}
await ZimBotInc.sendMessage(m.chat, masawitunha,{ quoted:m }).catch(err => {
return('Error!')
})
break
case 'neko':
reply(mess.wait)
princetunha = await axios.get(`https://nekos.life/api/v2/img/neko`)
var tunhaprince = [
{buttonId: `.${command}`, buttonText: {displayText: `Next `}, type: 1},
]
let tanaka = {
image: {url:princetunha.data.url},
caption:  `Here you go!`,
footer: `${global.botname}`,
buttons: tunhaprince,
headerType: 4
}
await ZimBotInc.sendMessage(m.chat, tanaka,{ quoted:m }).catch(err => {
return('Error!')
})
break
case 'hug':
reply(mess.wait)
tunha = await axios.get(`https://nekos.life/api/v2/img/hug`)
var madeline = [
{buttonId: `.${command}`, buttonText: {displayText: `Next `}, type: 1},
]
let magwetta = {
image: {url:tunha.data.url},
caption:  `Here you go!`,
footer: `${global.botname}`,
buttons: madeline,
headerType: 4
}
await ZimBotInc.sendMessage(m.chat, magwetta,{ quoted:m }).catch(err => {
return('Error!')
})
break
case 'kiss':
reply(mess.wait)
tunha = await axios.get(`https://nekos.life/api/v2/img/kiss`)
var blessedtuna2 = [
{buttonId: `.${command}`, buttonText: {displayText: `Next `}, type: 1},
]
let sekedema = {
image: {url:tunha.data.url},
caption:  `Here you go!`,
footer: `${global.botname}`,
buttons: blessedtuna2,
headerType: 4
}
await ZimBotInc.sendMessage(m.chat, sekedema,{ quoted:m }).catch(err => {
return('Error!')
})
break
case 'wlp':
reply(mess.wait)
mhofu = await axios.get(`https://nekos.life/api/v2/img/wallpaper`)
var wati = [
{buttonId: `.${command}`, buttonText: {displayText: `Next `}, type: 1},
]
let sekeMutema = {
image: {url:mhofu.data.url},
caption:  `Here you go!`,
footer: `${global.botname}`,
buttons: wati,
headerType: 4
}
await ZimBotInc.sendMessage(m.chat, sekeMutema,{ quoted:m }).catch(err => {
return('Error!')
})
break
case 'spank':
reply(mess.wait)
mhofu = await axios.get(`https://nekos.life/api/v2/img/spank`)
var wati = [
{buttonId: `.${command}`, buttonText: {displayText: `Next `}, type: 1},
]
let edzai = {
image: {url:mhofu.data.url},
caption:  `Here you go!`,
footer: `${global.botname}`,
buttons: wati,
headerType: 4
}
await ZimBotInc.sendMessage(m.chat, edzai,{ quoted:m }).catch(err => {
return('Error!')
})
break
case 'shinobu2': 
reply(mess.wait)
dhoti = await axios.get('https://waifu.pics/api/sfw/shinobu')
var wati = [
{buttonId: `.shinobu`, buttonText: {displayText: `Next `}, type: 1},
]
let haha = {
image: {url:dhoti.data.url},
caption:  `Here you go!`,
footer: `${global.botname}`,
buttons: wati,
headerType: 4
}
await ZimBotInc.sendMessage(m.chat,haha, { quoted:m }).catch(err => {
return('Error!')
})  
break
case 'megumin2':
reply(mess.wait)
saka = await axios.get('https://waifu.pics/api/sfw/megumin')
var wati = [
{buttonId: `.megumin`, buttonText: {displayText: `Next `}, type: 1},
]
let kuku = {
image: {url:saka.data.url},
caption:  `Here you go!`,
footer: `${global.botname}`,
buttons: wati,
headerType: 4
}
await ZimBotInc.sendMessage(m.chat,kuku, { quoted:m }).catch(err => {
return('Error!')
})  
break
case 'update':
  const heroku = new Heroku({ token: Config.HEROKU_API_KEY })
  await git.fetch();
  var commits = await git.log(['main' + '..origin/' + 'main']);
  if (commits.total === 0) {
    reply("*No pending updates!*")
  } else {
    var changelog = "_Pending updates:_\n\n";
    commits['all'].map(
        (commit) => {
            reply(`• *${commit.message}* _[${commit.date.substring(0, 10)}]_ \n`)
          }
          );
          mss = changelog;
          var img = ""
       var buttons = [{
        urlButton: {
            displayText: 'DRIPS',
            url: 'tes'
        }
    },// By drips 
    {
        quickReplyButton: {
            displayText: 'lol',
            id: `${prefix}upd`
        }
    }];
    }
    await ZimBotInc.sendMessage(m.chat, {text: ` *type updatenow to update Classic Bot*`});
    

break
case 'updatenow':
  
    await git.fetch();
    var commits = await git.log(['main' + '..origin/' + 'main']);
    if (commits.total === 0) {
      return await ZimBotInc.sendMessage(m.chat, { text:"_Bot up to date_"})
    } else {
      await ZimBotInc.sendMessage(m.chat, {text: "_Build started ⏫_"})
      try {
        var app = await heroku.get('/apps/' + Config.HEROKU_APP_NAME)
        var git_url = await heroku.get(app.git_url)
    } catch {
        await ZimBotInc.sendMessage(m.chat, { text:"*Heroku app name/api key wrong*"})

        await new Promise(r => setTimeout(r, 1000));
      }
      git.fetch('upstream', 'main');
      git.reset('hard', ['FETCH_HEAD']);//lols

    git_url =  git_url.replace("https://", "https://api:" + Config.HEROKU_API_KEY + "@")//drips
      try {
        await git.addRemote('heroku', git_url);
    } catch {console.log('Deploy error catched. Retrying...')}
    try { await git.push('heroku', 'main'); } catch(e){ 
    if (e.message.includes("concurrent")) return reply("Your account has reached in-parallel build limit! Please wait for the other app to finish its deploy ❗"); 
    }
    await ZimBotInc.sendMessage(m.chat, {text:"_Finished build! Restarting.._"})
 //

  }

break
case 'awoo2':
reply(mess.wait)
bhingo = await axios.get(`https://waifu.pics/api/sfw/awoo`)
var pulo = [
{buttonId: `.${command}`, buttonText: {displayText: `Next `}, type: 1},
]
let tidza = {
image: {url:bhingo.data.url},
caption:  `Here you go!`,
footer: `${global.botname}`,
buttons: pulo,
headerType: 2
}  
await ZimBotInc.sendMessage(m.chat, tidza, { quoted:m }).catch(err => {
return('Error!')
})
break
case 'animewall2': case 'animewallpaper2':
reply(mess.wait)
const { AnimeWallpaper } =require("anime-wallpaper")
if(!q) return reply('What wallpaper do you want?')
const wall = new AnimeWallpaper();
const pages = [1,2,3,4];
const random=pages[Math.floor(Math.random() * pages.length)]
const wallpaper = await wall
.getAnimeWall4({ title: q, type: "sfw", page: pages })
.catch(() => null);
const i = Math.floor(Math.random() * wallpaper.length);
var francisca = [
{buttonId: `.${command} ${q}`, buttonText: {displayText: `Next `}, type: 1},
]
let tunhastallone = {
image: {url:wallpaper[i].image},
caption: `*QUERY :* ${q}`,
footer: `${global.botname}`,
buttons: francisca,
headerType: 4
}
await ZimBotInc.sendMessage(m.chat, tunhastallone, {quoted: m}) 
//-----END HERE-----\\



//----DOWNLOAD FEATURES---\\
break
case 'play': {
let { yta } = require('./lib/y2mate')
if (!text)  reply(`Example : ${prefix + command} story wa anime`)
let yts = require("yt-search")
let search = await yts(text)
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
let buf = await getBuffer(anu.thumbnail)
let muziq = [
                    {buttonId: `audio ${anu.url}`, buttonText: {displayText: 'AUDIO'}, type: 1},
                    {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: 'VIDEO'}, type: 1},
                     {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: 'DOCUMENT'}, type: 1}
                ]
let caption = `
▓▓▓▓▓▓▓▓▓▓▓▓▓▓
       ⟮ 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐌𝐔𝐒𝐈𝐂 ⟯ 
   
0.02━◉━━━━━━━━━━━━3.26
      🔂   ⏪   ⏸️     ⏩  🎵

*◉Tɪᴛʟᴇ :* ${anu.title}
*◉Sɪᴢᴇ :* ${anu.filesize}
*◉Uʀʟ :* ${anu.url}
*◉Dᴇꜱᴄʀɪᴘᴛɪᴏɴ :* ${anu.description}
 ©𝙲𝙻𝙰𝚂𝚂𝙸𝙲 𝙱𝙾𝚃

`
message = await prepareWAMessageMedia({ image : { url: anu.thumbnail } }, { upload:   ZimBotInc.waUploadToServer })
let buttonMessage = {
        image: buf,
        jpegThumbnail:buf,
        caption: caption,
        footer: ` ➢𝙰𝙻𝙻 𝙷𝙰𝙸𝙻 𝚃𝙾 𝙺𝙸𝙽𝙶 𝚂𝙰𝙼 \n➢𝙲𝙻𝙰𝚂𝚂𝙸𝙲 𝙱𝙾𝚃 2024`,
        buttons: muziq,
        headerType: 4,
        contextInfo: { externalAdReply:{
        title:"𝐂𝐋𝐀𝐒𝐒𝐈𝐂 𝐁𝐎𝐓",
        body:"➢𝙰𝙻𝙻 𝙷𝙰𝙸𝙻 𝚃𝙾 𝙺𝙸𝙽𝙶 𝚂𝙰𝙼 \n➢𝙲𝙻𝙰𝚂𝚂𝙸𝙲 𝙱𝙾𝚃 2024",
        mediaType:2,
        thumbnail: fs.readFileSync(`./drips.jpg`),
        }}
        }
        ZimBotInc.sendMessage(m.chat, buttonMessage)
      
   }
break
/*
case 'yt3':  case 'ytmusc': 
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
const dripsmp3 = require ('./lib/ytdl2')
let yts = require("youtube-yts")
let search = await yts(text)
let bhingu = search.videos[0]
const kudzi = await dripsmp3.mp3(bhingu.url)
let caption = `
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
    ⟮ _*◉ʏᴏᴜᴛᴜʙᴇ ᴅᴏᴡɴʟᴏᴀᴅ◉*_ ⟯ 
   
0.02━◉━━━━━━━━━━━━3.26
      🔂   ⏪   ⏸️     ⏩  🎵\n\n*◉TITLE :* ${bhingu.title}\n*◉FILESIZE :*\n*◉URL :* ${isUrl(text)}\n*◉EXT :* MP3\n*\n\n*ᴢɪᴍ ʙᴏᴛ ɪɴᴄ*`
buf = await getBuffer(kudzi.meta.image)
await ZimBotInc.sendMessage(m.chat, {text: `*ɪᴍ sᴇɴᴅɪɴɢ ʏᴏᴜʀ sᴏɴɢ📻ᴘʟᴇᴀsᴇ ᴡᴀɪᴛ...* `}, {quoted: m})
ZimBotInc.sendMessage(m.chat, { document: fs.readFileSync(kudzi.path),
    fileName: bhingu.title + '.mp3',
    mimetype: 'audio/mp4', quoted: m, contextInfo: { externalAdReply:{
title:"◉ʏᴏᴜᴛᴜʙᴇ ᴅᴏᴡɴʟᴏᴀᴅ◉",
body:"SUB DRIPS OFC",
showAdAttribution: true,
mediaType:2,
thumbnail: fs.readFileSync(`./drips.jpg`) ,
mediaUrl:`https://wa.me/447441437150`, 
sourceUrl: `https://youtu.be/KNu-gr2h7bo` }
},
}, {quoted: m})

await fs.unlinkSync(kudzi.path)
*/
break
case 'ytmp3':
if (!args || !args[0]) throw 'need a link'
if (!/^(?:https?:\/\/)?(?:www\.|m\.|music\.)?youtu\.?be(?:\.com)?\/?.*(?:watch|embed)?(?:.*v=|v\/|\/)([\w\-_]+)\&?/.test(args[0])) throw `Invalid link`
ZimBotInc.sendMessage(m.chat, { react: { text: `🕒`, key: m.key }})
const jsoni = await fetchJson('https://yt.nxr.my.id/yt2?url=' + args[0] + '&type=audio')
await ZimBotInc.sendMessage(m.chat, {text: `*ɪᴍ sᴇɴᴅɪɴɢ ʏᴏᴜʀ sᴏɴɢ📻ᴘʟᴇᴀsᴇ ᴡᴀɪᴛ...* `}, {quoted: m})
if (!jsoni.status || !jsoni.data.url) throw `failed to download your music`
let captiono = `*Y T - P L A Y*\n\n`
captiono += `	◦  *Title* : ${jsoni.title}\n`
captiono += `	◦  *Size* : ${jsoni.data.size}\n`
captiono += `	◦  *Duration* : ${jsoni.duration}\n`
captiono += `	◦  *Bitrate* : ${jsoni.data.quality}\n\n`
captiono += 'ZIMBOT'
zimbotu =  `${jsoni.data.url}`

ZimBotInc.sendMessage(m.chat,{document: {url:jsoni.data.url}, fileName: `${jsoni.title}`, mimetype: 'audio/mp3', quoted: m, contextInfo: { externalAdReply:{
title:"𝐂𝐋𝐀𝐒𝐒𝐈𝐂 𝐁𝐎𝐓",
body:"➢𝙰𝙻𝙻 𝙷𝙰𝙸𝙻 𝚃𝙾 𝙺𝙸𝙽𝙶 𝚂𝙰𝙼 \n➢𝙲𝙻𝙰𝚂𝚂𝙸𝙲 𝙱𝙾𝚃 2024",
showAdAttribution: true,
mediaType:2,
thumbnail: fs.readFileSync(`./drips.jpg`) ,
mediaUrl:`+258869103969`, 
sourceUrl: `https://chat.whatsapp.com/EPSGKau0IVi7J5lyOJO7Jk` }
}}, {quoted: m})
break
case 'ytmp4': case 'ytvideo': 
const dripsvideo = require('./lib/ytdl2')
if (args.length < 1 || !isUrl(text) || !dripsvideo.isYTUrl(text)) throw `Where is the link?🤪`
ZimBotInc.sendMessage(m.chat, { react: { text: `🕒`, key: m.key }})
const v5=await dripsvideo.mp4(text)
/*var capti = `
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
    ⟮ _*◉ʏᴏᴜᴛᴜʙᴇ ᴅᴏᴡɴʟᴏᴀᴅ◉*_ ⟯ 
   
0.02━◉━━━━━━━━━━━━3.26
      🔂   ⏪   ⏸️     ⏩  🎵\n\n*◉Title* : ${media.title}\n*◉FILESIZE* : ${media.filesizeF}\n*◉URL* : ${isUrl(text)}\n*◉EXT* : MP3\n*◉RESOLUTION* : ${args[1] || '360p'}\n\n*ᴢɪᴍ ʙᴏᴛ ɪɴᴄ*`
*/
var buf = await getBuffer(v5.thumb)
let hobho = ('*ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ ʏᴏᴜʀ ᴠɪᴅᴇᴏ🎬ᴡᴀɪᴛ...*')
await ZimBotInc.sendMessage(m.chat, {text: `*ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ ʏᴏᴜʀ ᴠɪᴅᴇᴏ🎬ᴡᴀɪᴛ...* `}, {quoted: m})
ZimBotInc.sendMessage(m.chat, { video: { url:v5.videoUrl }, mimetype: 'video/mp4', fileName: `${v5.title}.mp4`, caption: `*ᴛɪᴛʟᴇ:* ${v5.title} \n\n *ɢɪᴛʜᴜʙ: https://youtube.com/@zim-bot*` , quoted: m,contextInfo: { externalAdReply:{
showAdAttribution: true,
},
}},{ quoted: m})
break
case 'audio':   
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
const dripsmp4 = require ('./lib/ytdl2')
let ytss = require("youtube-yts")
let searchi  = await ytss(text)
let bhinguu = searchi.videos[0]
const kudzii = await dripsmp4.mp3(bhinguu.url)
let captionu = `
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
    ⟮ _*◉ʏᴏᴜᴛᴜʙᴇ ᴅᴏᴡɴʟᴏᴀᴅ◉*_ ⟯ 
   
0.02━◉━━━━━━━━━━━━3.26
      🔂   ⏪   ⏸️     ⏩  🎵\n\n*◉TITLE :* ${bhinguu.title}\n*◉FILESIZE :*\n*◉URL :* ${isUrl(text)}\n*◉EXT :* MP3\n*\n\n*𝙲𝙻𝙰𝚂𝚂𝙸𝙲 𝙱𝙾𝚃*`
buf = await getBuffer(kudzii.meta.image)
await ZimBotInc.sendMessage(m.chat, {text: `*ɪᴍ sᴇɴᴅɪɴɢ ʏᴏᴜʀ sᴏɴɢ📻ᴘʟᴇᴀsᴇ ᴡᴀɪᴛ...* `}, {quoted: m})
ZimBotInc.sendMessage(m.chat, { audio: fs.readFileSync(kudzii.path), fileName: bhinguu.title + '.mp3', mimetype: 'audio/mp4', quoted: m, contextInfo: { externalAdReply:{
title:"◉ʏᴏᴜᴛᴜʙᴇ ᴅᴏᴡɴʟᴏᴀᴅ◉",
body:"SUB DRIPS OFC",
showAdAttribution: true,
mediaType:2,
thumbnail: fs.readFileSync(`./drips.jpg`) ,
mediaUrl:`https://wa.me/447441437150`, 
sourceUrl: `https://wa.me/447441437150` }
},
}, {quoted: m})

await fs.unlinkSync(kudzii.path)
break
case 'ytshorts': case 'shorts': {
if (!text) return reply(`*Use ${prefix + command} enter pin link*`)
if (!isUrl(args[0]) && !args[0].includes('youtube')) throw '*The link you provided is not valid*'  
xa.Youtube(`${text}`).then(async (data) => {
if (data.medias[0].formattedSize.split('MB')[0] >= 100) return m.reply('*File Over Limit* '+util.format(data)) 
cap = `
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
    ⟮ _*◉Yᴏᴜᴛᴜʙᴇ Sʜᴏʀᴛꜱ◉*_ ⟯ 
   
0.02━◉━━━━━━━━━━━━3.26
      🔂   ⏪   ⏸️     ⏩  🎵\n\n\n\n*◉TITLE:* ${data.title}\n*◉QUALITY:* ${data.medias[0].quality}\n*◉SIZE:* ${data.medias[0].formattedSize}\n*◉DURATION* ${data.duration}\n*◉ID:* ${data.medias[0].cached}\n*◉LINK:* ${data.url}\n\n*𝙲𝚕𝚊𝚜𝚜𝚒𝚌 𝙱𝚘𝚝*`
buf = await getBuffer(data.thumbnail)
ZimBotInc.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${cap}` }, { quoted: m })
ZimBotInc.sendMessage(m.chat, { video: { url: data.medias[0].url }, jpegThumbnail:buf, caption: `*◉TITLE:* ${data.title}\n*◉QUALITY:* ${data.medias[0].quality}\n*◉SIZE:* ${data.medias[0].formattedSize}` }, { quoted: m })  
}).catch((err) => {
reply(`*Failed to download and send media*`)
})
}
break
case 'getmusic': {
let { yta } = require('./lib/y2mate')   
if (!text) throw `Example : ${prefix + command} 1`
if (!m.quoted) return m.reply('*Reply message*')
if (!m.quoted.isBaileys) throw `*Can only reply to messages from bots*`
let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
if (!urls) throw `*Maybe the message you replied does not contain the ytsearch results`
let quality = args[1] ? args[1] : '128kbps'
let media = await yta(urls[text - 1], quality)
if (media.filesize >= 100000) return m.reply('*File Over Limit* '+util.format(media))
ZimBotInc.sendImage(m.chat, media.thumb, `*◉TITLE* : ${media.title}\n*◉FILE SIZE :* ${media.filesizeF}\n*◉URL :* ${urls[text - 1]}\n*◉EXT :* MP3\n*◉RESOLUTION :* ${args[1] || '128kbps'}`, m)
ZimBotInc.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
}
break
case 'getvideo': { 
let { ytv } = require('./lib/y2mate')  
if (!text) throw `Example : ${prefix + command} 1`
if (!m.quoted) return m.reply('Reply Message')
if (!m.quoted.isBaileys) throw `*Can only reply to messages from bots8`
let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
if (!urls) throw `*Maybe the message you replied does not contain the ytsearch result*`
let quality = args[1] ? args[1] : '360p'
let media = await ytv(urls[text - 1], quality)
if (media.filesize >= 100000) return m.reply('*File Over Limit* '+util.format(media))
ZimBotInc.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `*◉TITLE :* ${media.title}\n*◉FILESIZE :* ${media.filesizeF}\n*◉URL :* ${urls[text - 1]}\n*◉EXT:* MP3\n*◉RESOLUTION :* ${args[1] || '360p'}` }, { quoted: m })
}
case 'mediafire': {  
reply(mess.wait)         
if (!text) throw '*Enter a Link Query!*'
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) throw '*The link you provided is not valid*'
const baby1 = await mediafireDl(text)
if (baby1[0].size.split('MB')[0] >= 100) return m.reply('*File Over Limit* '+util.format(baby1))
const result4 = `
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
    ⟮ _*◉Mᴇᴅɪᴀꜰɪʀᴇ Dᴏᴡɴʟᴏᴀᴅ◉*_ ⟯ 
          
*NAME* : ${baby1[0].nama}
*SIZE* : ${baby1[0].size}
*MIME* : ${baby1[0].mime}
*LINK* : ${baby1[0].link}\n

 _scraping metadata...._ 
*${botname}*`
reply(`${result4}`)
ZimBotInc.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime ,  quoted : mudratunha, contextInfo: { externalAdReply:{
  title:"ᴢɪᴍ ʙᴏᴛ ᴠ5",
  body:"SUBSCRIBE DRIPS OFC",
  showAdAttribution: true,
  mediaType:2,
  thumbnail: fs.readFileSync(`./drips.jpg`) ,
  mediaUrl:`https://chat.whatsapp.com/EPSGKau0IVi7J5lyOJO7Jk`, 
sourceUrl: `https://chat.whatsapp.com/EPSGKau0IVi7J5lyOJO7Jk` }}}, {quoted: m})
}
break
case 'song': {
  reply(mess.wait)
  if (!text) throw `Example : ${prefix + command} story wa anime`
  let yts = require("yt-search")
  let search = await yts(text)                   
let sections = []   
let listmenu = [`ytmp4 ${search.all[0].url}`,`ytmp3 ${search.all[1].url}`,`ytmp4 ${search.all[2].url}`,`ytmp3 ${search.all[3].url}`,`ytmp4 ${search.all[4].url}`,`ytmp3 ${search.all[5].url}`,`ytmp4 ${search.all[6].url}`,`ytmp3 ${search.all[7].url}`,`ytmp4 ${search.all[8].url}`,`ytmp3 ${search.all[9].url}`,`ytmp4 ${search.all[10].url}`,`ytmp3 ${search.all[11].url}`,`ytmp4 ${search.all[12].url}`,`ytmp3 ${search.all[13].url}`,`ytmp4 ${search.all[14].url}`,`ytmp3 ${search.all[15].url}`,`ytmp4 ${search.all[16].url}`,`ytmp3 ${search.all[17].url}`,`ytmp4 ${search.all[18].url}`,`ytmp3 ${search.all[19].url}`]
      let listmenuu = [`VIDEO MP4⬤: ${search.all[0].title}`,`SONG MP3⬤: ${search.all[1].title}`,`VIDEO MP4⬤: ${search.all[2].title}`,`SONG MP3⬤: ${search.all[3].title}`,`VIDEO MP4⬤: ${search.all[4].title}`,`SONG MP3⬤: ${search.all[5].title}`,`VIDEO MP4⬤: ${search.all[6].title}`,`SONG MP3⬤: ${search.all[7].title}`,`VIDEO MP4⬤: ${search.all[8].title}`,`SONG MP3⬤: ${search.all[9].title}`,`VIDEO MP4⬤: ${search.all[10].title}`,`SONG MP3⬤: ${search.all[11].title}`,`VIDEO MP4⬤: ${search.all[12].title}`,`SONG MP3⬤: ${search.all[13].title}`,`VIDEO MP4⬤: ${search.all[14].title}`,`SONG MP3⬤: ${search.all[15].title}`,`VIDEO MP4⬤: ${search.all[16].title}`,`SONG MP3⬤: ${search.all[17].title}`,`VIDEO MP4⬤: ${search.all[18].title}`,`SONG MP3⬤: ${search.all[19].title}`]
      let listmenuuu = [`\n${search.all[0].description}`,`\n${search.all[1].description}`,`\n${search.all[2].description}`,`\n${search.all[3].description}`,`\n${search.all[4].description}`,`\n${search.all[5].description}`,`\n${search.all[6].description}`,`\n${search.all[7].description}`,`\n${search.all[8].description}`,`\n${search.all[9].description}`,`\n${search.all[10].description}`,`\n${search.all[11].description}`,`\n${search.all[12].description}`,`\n${search.all[13].description}`,`\n${search.all[14].description}`,`\n${search.all[15].description}`,`\n${search.all[16].description}`,`\n${search.all[17].description}`,`\n${search.all[18].description}`,`\n${search.all[19].description}`]
      let nombor = 1
      let startnum = 0
      let startnumm = 0
      for (let x of listmenu) {
      const list = {title: 'RESULT NUMBER ' + nombor++,
      rows: [
         {
          title: `${listmenuu[startnum++]}`,
          description: `${listmenuuu[startnumm++]}`,
          rowId: `${prefix}${x}`
}, 
]
}
sections.push(list)   
}
const sendm =  ZimBotInc.sendMessage(
m.chat, 
{
text: "\n\n*_DONE SCRAPING DATA_*",
footer: botname,
title: `HERE IS YOUR RESULTS CHOMIE FROM *${text}* _select song or video below_`,
buttonText: "CLICK HERE",
sections
}, { quoted : m })
}
break
case 'ytsaudio': case 'ytsmusic': case 'ytsearchmusic': {
                   reply(mess.wait)
                  if (!text) throw `Example : ${prefix + command} guspy warior ita seunononga`
                  let yts = require("yt-search")
                  let search = await yts(text)                
                  let no = 1
                  let sections = []   
                  for (let i of search.all) {
                  const list = {title: `${i.title}`,
                  rows: [
                      {
                      title: `${i.title}\n`, 
                      rowId: `${prefix}ytmp3 ${i.url}`,
                      description: `${i.description}\n*UPLOAD:* ${i.ago}\n*CHANNEL:* ${i.author.name}\n*VIEWS:* ${i.views}\n*DURATION:* ${i.timestamp}\n*LINK:* ${i.url}`
                      }, 
                      ]
                        }
                        sections.push(list)   
                        }
                        const sendm =  ZimBotInc.sendMessage(
                        m.chat, 
                        {
                        text: ` ${text}`,
                        footer: botname,
                        title: `${ucapannya2} ${pushname} Here are the search results from ytsaudio`,
                        buttonText: "LIST OF AUDIOS",
                        sections
                        }, { quoted : m })
                        }
                    break
  case 'ytsvideo': case 'ytsearchvideo': {
                  reply(mess.wait)
                  if (!text) throw `Example : ${prefix + command} seh calaz takambo tamba munyika`
                  let yts = require("yt-search")
                  let search = await yts(text)                
                  let no = 1
                  let sections = []   
                  for (let i of search.all) {
                  const list = {title: `${i.title}`,
                  rows: [
                      {
                      title: `${i.title}\n`, 
                      rowId: `${prefix}ytmp4 ${i.url}`,
                      description: `${i.description}\n*UPLOAD:* ${i.ago}\n*CHANNEL:* ${i.author.name}\n*VIEWS:* ${i.views}\n*DURATION* ${i.timestamp}\n*LINK:* ${i.url}`
                      }, 
                      ]
                        }
                        sections.push(list)   
                        }
                        const sendm =  ZimBotInc.sendMessage(
                        m.chat, 
                        {
                        text: ` ${text}`,
                        footer: botname,
                        title: `${ucapannya2} ${pushname} *Here are the search results from ytsvideo*`,
                        buttonText: "LIST OF VIDEOS",
                        sections
                        }, { quoted : m })
                        }
                    break
  case 'yts': case 'youtubesearch': case 'ytsearch': {
    
                  await ZimBotInc.sendMessage(m.chat, {text: `*sᴇᴀʀᴄʜɪɴɢ🔎 ʏᴏᴜʀ ᴠɪᴅᴇᴏs🎬ᴘʟᴇᴀsᴇ ᴡᴀɪᴛ...* `}, {quoted: m})
                  if (!text) throw `Example : ${prefix + command} story wa anime`
                  let yts = require("youtube-yts")
                  let search = await yts(text)                
                  let no = 1
                  let sections = []   
                  for (let i of search.all) {
                  const list = {title: `${i.title}`,
                  rows: [
                      {
                      title: `${i.title}\n\n`, 
                      rowId: `${prefix}ytmp3 ${i.url}`,
                      description: `${i.url}`
                      }, 
                      ]
                        }
                        sections.push(list)   
                        }
                        const sendm =  ZimBotInc.sendMessage(
                        m.chat, 
                        {
                        text: `*ϙᴜᴇʀʏ:* \n${text}🎛️`,
                        footer: ` ⦿➢𝙰𝙻𝙻 𝙷𝙰𝙸𝙻 𝚃𝙾 𝙺𝙸𝙽𝙶 𝚂𝙰𝙼 \n➢𝙲𝙻𝙰𝚂𝚂𝙸𝙲 𝙱𝙾𝚃 2024` ,
                        title: `*ʏᴏᴜᴛᴜʙᴇ sᴇᴀʀᴄʜ*`,
                        buttonText: "CLICK HERE",
                        sections
                        }, { quoted : m })
                        }
                    break
case 'fbdl': case 'fb': case 'facebook': case 'fbvideo': {     	    
  reply(mess.wait)        
  if (!text) throw '*Enter a Link Query!*'
     if (!isUrl(args[0]) && !args[0].includes('facebook.com')) throw '*The link you provided is not valid*'         
 let bocil = require('@bochilteam/scraper')  
     bocil.facebookdlv2(`${text}`).then(async (data) => {                   

         let txt = `*
         ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
             ⟮ _*◉FB Dᴏᴡɴʟᴏᴀᴅ◉*_ ⟯ *\n\n`

         txt += `*◉TITLE :* ${data.title}\n`

         txt += `*◉QUALITY :* ${data.result[0].quality}\n`

         txt += `*◉DESCRIPTION :* ${data.description}\n`

         txt += `*◉ID :* 𝙲𝙻𝙰𝚂𝚂𝙸𝙲 𝙱𝙾𝚃\n`

         txt += `*◉URL :* ${text}\n\n`

         txt += `*𝙲𝙻𝙰𝚂𝚂𝙸𝙲 𝙱𝙾𝚃*`                

     buf = await getBuffer(data.thumbnail)    

     ZimBotInc.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${txt}` }, {quoted: mudratunha})
     for (let i of data.result) {  
    ZimBotInc.sendMessage(m.chat, { video: { url: i.url }, jpegThumbnail:buf, mimetype: 'video/mp4', caption: `*◉ Quality :* ${i.quality}` ,  quoted: m,contextInfo: { externalAdReply:{
      title:"ᴢɪᴍ ʙᴏᴛ ᴠ5",
      body:"SUBSCRIBE DRIPS OFC",
      showAdAttribution: true,
      mediaType:2,
      thumbnail: fs.readFileSync(`./drips.jpg`) ,
      mediaUrl:`https://youtu.be/KNu-gr2h7bo`, 
      sourceUrl: `https://youtu.be/KNu-gr2h7bo` }}}, {quoted: m})
     
       
     }
    
  }).catch((err) => {

      reply(`*Failed When Downloading Media and Sending Files*`)

  })

}

              

break
case 'savefrom': {

  

if (!text) return m.reply(`Failed to download media and send audio ${prefix + command} link url`) 

if (!isUrl(args[0]) && !args[0].includes('facebook.com')) throw '*The link you provided is not valid*'
let noh = require('@bochilteam/scraper')                

noh.savefrom(`${text}`).then(async (data) => {

let sections = []   

for (let i of data.url) {

const list = {title: `${i.type}`,

rows: [

  {

   title: `Quality ${i.subname}`, 

   rowId: `${prefix}get ${text}`,

   description: `${data.hosting}`	     

  }, 

  ]

 }

 sections.push(list)   

 }

const sendm =  ZimBotInc.sendMessage(

  m.chat, 

  {

   text: `${data.meta.title} *Here is the list of videos, click the button below to choose, here is the list of videos, click the button below to choose*`,

   footer: `©𝙲𝙻𝙰𝚂𝚂𝙸𝙲 𝙱𝙾𝚃`,

   title: "**▊▊▊SAVEFROM DL▊▊▊**",

   buttonText: "CLICK HERE",

   sections

  }, { quoted : m })                 

            }).catch((err) => {

                reply(`*Sorry An Error Occurred*`)

            })

        }

break
case 'fb2': case 'facebook2': case 'fb': {
  //
    if (!text) throw '*Enter a Link Query!*'
    if (!isUrl(args[0]) && !args[0].includes('facebook.com')) throw '*The link you provided is not valid*'
    anu = await fetchJson(`https://violetics.pw/api/downloader/facebook?apikey=beta&url=${text}`)
    tummb = await getBuffer('https://telegra.ph/file/9789a09c964cee5597a05.jpg')    
    ZimBotInc.sendMessage(m.chat, { video: { url: anu.result.url[0].url }, jpegThumbnail:tummb, caption: `*📽️ FACEBOOK DOWNLOADER*\n\n*Name* : ${anu.result.meta.title}\n*Quality* : ${anu.result.url[0].subname}\n*Ext* : ${anu.result.url[0].ext}\n`}, { quoted: m }).catch((err) => m.reply('*Sorry, the feature is in error*'))
}
break
case 'get': {

  

      if (!text) throw 'Enter a Link' 

  

      let bicil = require('@bochilteam/scraper')

      let urlnya = text

    bicil.savefrom(urlnya)

    .then(async(result) => {	  	                                	                      	            

  for(let i of result.url) {		

  if(i.url.includes('mp4')){		           			    				

let link = await getBuffer(i.url)

      ZimBotInc.sendMessage(m.chat, { video: link, caption: `*quality ${i.subname}*` }, { quoted: m })                  

     }

    }

  }).catch((err) => reply(`*Sorry Future Error*`))

  }		
break
case 'tiktok4': { //DOWNLOADER
  // //if 
   if (!text) throw '*Enter a Link Query!*'                
   if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) throw '*The link you provided is not valid*'
   
   reply(mess.wait)
   hx.ttdownloader(`${text}`).then(async (data) => {                      
       let buttons = [                    
       {buttonId: `${prefix}tiktokmp3 ${text}`, buttonText: {displayText: 'AUDIO'}, type: 1}
   ]
   let buttonMessage = {
       video: { url: data.nowm },                    
       caption: `${util.format(data)}`,
       footer: 'Please Select Below',
       buttons: buttons,
       headerType: 5
   }
   ZimBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })                
   }).catch((err) => {
       reply(`*Failed to download media and send videos*`)
   })
}
break
case 'tiktok2': {
if (!text) throw `Use example ${prefix + command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) throw '*The link you provided is not valid*'

anu = await fetchJson(`https://violetics.pw/api/downloader/tiktok?apikey=df7d-425a-3bc8&url=${text}`)
let listmn = `*▊▊▊TIKTOK DL▊▊▊*\n\n*Title:* ${anu.result.title}\n*Author:* ${anu.result.id}\n*Url:* ${anu.result.url}`
buf = await getBuffer(anu.result.thumb)
buf2 = await getBuffer(anu.result.link_dl2)
let message = await prepareWAMessageMedia({ video: buf2, gifPlayback:false, jpegThumbnail:buf }, { upload: ZimBotInc.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
videoMessage: message.videoMessage,
hydratedContentText: listmn,
hydratedFooterText: `${botname}`,
hydratedButtons: [{
urlButton: {
displayText: '𝑱𝑶𝑰𝑵',
url: 'https://chat.whatsapp.com/EPSGKau0IVi7J5lyOJO7Jk'
}
}, {
urlButton: {
displayText: 'GITHUB',
url: 'https://github.com/Samue-l1/Classic-V4t'
}
}, {
quickReplyButton: {
displayText: 'PING',
id: 'ping'
}
}, {
quickReplyButton: {
displayText: 'OWNER',
id: 'owner'
}  
}, {
quickReplyButton: {
displayText: 'DONATE',
id: 'donadi'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
ZimBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'tiktok': case 'tiktoknowm': case 'tiktokwm': case 'tt': case 'ttnowm': case 'ttwm': {

  // //if 
   if (!text) throw '*Enter a Link Query!*'            
   
   let bocil = require('@bochilteam/scraper')    
   if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) throw '*The link you provided is not valid*'                
   bocil.tiktokdlv3(`${text}`).then(async (video) => {           
     var hadi = randomNomor(100)        
      var hadie = randomNomor(200)     
      var hadir = randomNomor(300)
       var memek = randomNomor(1000)                      
     let caption = `
     *▊▊▊TIKTOK DL▊▊▊*\n\n*AUTHOR* : DRIPS\n*NICKNAME* : ${video.author.nickname}\n*CAPTION* : ${video.description}\n*QUALITY* : nowatermark\n*COMMENTS* : ${memek}\n*CREATE* ${hadir} Ago\n*LIKES* : ${hadi}\n*DISLIKE* : ${hadie}\n*SOURCE* : ${text}\n\n\n*ᴢɪᴍ ʙᴏᴛ ɪɴᴄ*`
     buf = await getBuffer(video.author.avatar)                
     ZimBotInc.sendMessage(m.chat, { image: { url: video.author.avatar }, jpegThumbnail:buf, caption: `${caption}` }, { quoted: m })
     ZimBotInc.sendMessage(m.chat, { video: { url: video.video.no_watermark }, jpegThumbnail:buf, mimetype: 'video/mp4', caption: `*Downloading From ${text}*` }, { quoted: m })               
   }).catch((err) => {
       reply(`*Failed to download media and send videos*`)
   })
}
break
case 'tiktok5': case 'tt5': {
  // //if 
if (!text) throw '*Enter a Link Query!*'            
   
let bocil = require('@bochilteam/scraper')    
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) throw '*The link you provided is not valid*'                
bocil.tiktokdlv3(`${text}`).then(async (video) => {           
var hadi = randomNomor(100)        
var hadie = randomNomor(200)     
var hadir = randomNomor(300)
var memek = randomNomor(1000)                      
let caption = `*▊▊▊TIKTOK DL▊▊▊*\n\n*AUTHOR* : DRIPS\n*NICKNAME* : ${video.author.nickname}\n*CAPTION* : ${video.description}\n*COMMENTS* : ${memek}\n*CREATE* ${hadir} Ago\n*LIKES* : ${hadi}\n*DISLIKES* : ${hadie}\n*SOURCE* : ${text}\n\n\n*ᴢɪᴍ ʙᴏᴛ ɪɴᴄ*`
buf = await getBuffer(video.author.avatar)                
ZimBotInc.sendMessage(m.chat, { image: { url: video.author.avatar }, jpegThumbnail:buf, caption: `${caption}` }, { quoted: m })
ZimBotInc.sendMessage(m.chat, { video: { url: video.video.no_watermark }, jpegThumbnail:buf, mimetype: 'video/mp4', caption: `*Downloading From ${text}*` }, { quoted: m })               
}).catch((err) => {
reply(`*Failed to download media and send videos*`)
})
}
break
case 'tt3': case 'tiktok3': {
  // //if 
if (!text) throw '*Enter a Link Query!*'            
   
let bocil = require('@bochilteam/scraper')    
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) throw '*The link you provided is not valid*'                
bocil.tiktokdlv3(`${text}`).then(async (video) => {           
var hadi = randomNomor(100)        
var hadie = randomNomor(200)     
var hadir = randomNomor(300)
var memek = randomNomor(1000)                      
let caption = `**▊▊▊TIKTOK DL▊▊▊**\n\n*⬤AUTHOR* : DRIPS\n*⬤NICKNAME* : ${video.author.nickname}\n*⬤CAPTION* : ${video.description}\n*⬤COMMENTS* : ${memek}\n*⬤CREATE* ${hadir} Ago\n*⬤LIKES* : ${hadi}\n*⬤DISLIKES* : ${hadie}\n*⬤ SOURCE* : ${text}`
buf = await getBuffer(video.author.avatar)                
let message = await prepareWAMessageMedia({ image: buf, jpegThumbnail: buf }, { upload: ZimBotInc.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: caption,
hydratedFooterText: `${botname}`,
hydratedButtons: [{
urlButton: {
displayText: 'SOURCE',
url: `${text}`
}
}, {
urlButton: {
displayText: 'GITHUB',
url: 'https://github.com/Samue-l1/Classic-V4'
}
}, {
quickReplyButton: {
displayText: 'WATERMARK',
id: `ttwm ${text}`
}
}, {
quickReplyButton: {
displayText: 'NOWATERMARK',
id: `tiktoknowm ${text}`
}  
}, {
quickReplyButton: {
displayText: 'AUDIO',
id: `tiktokmp3 ${text}`
}
}]
}
}
}), { userJid: m.chat, quoted: m })
ZimBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })                
}).catch((err) => {
reply(`*Failed to download media and send videos*`)
})
}
break
case 'tiktokmp3': case 'tiktokaudio': { 	   

if (!text) throw '*Enter Link Tiktok!*'
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) throw '*The link you provided is not valid*'
let got = require('./lib/tiktok.js')
   
got.tiktokDown(`${text}`).then(async (data) => {
ZimBotInc.sendMessage(m.chat, { audio: { url: data.result.nowatermark }, mimetype: 'audio/mp4'}, { quoted: m })
}).catch((err) => {
reply(`*Failed to download media and send audio*`)
})
}
break
case 'ttmp3': {
if (!text) throw `*Enter link tiktok example ${prefix + command} https://vt.tiktok.com/zgjbtcsdq/`  
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) throw '*The link you provided is not valid*'
let get = require('./lib/scraper.js')
                                  
get.aiovideodl(`${text}`).then(async (res) => {        
var anu = await getBuffer(res.medias[2].url)         
ZimBotInc.sendMessage(m.chat, { audio: anu, mimetype: 'audio/mpeg'}, { quoted: m })
}).catch((err) => {
reply(`*Failed to download media and send videos*`)
})
}
break
case 'igt': case 'igtdl': case 'instagrtam': {

  

if (!text) throw '*Please Enter Instagarm Link*' 

if (!isUrl(args[0]) && !args[0].includes('instagram.com')) throw '*The link you provided is not valid*'

   

                

let urlnya = text

 hx.igdl(urlnya)

 .then(async(result) => {	  


 var halo = 0		


ZimBotInc.sendMessage(m.chat, { image: { url: result.user.profilePicUrl }, jpegThumbnail: await getBuffer(result.user.profilePicUrl), caption: `*----「 INSTAGRAM DOWNLOADER 」----*\n\n*⬤ Username :* ${result.user.username}\n*⬤ Fullname :* ${result.user.fullName}\n*⬤ Followers :* ${result.user.followers}\n*⬤ Following :* ${result.user.following}\n*⬤ ID :* ${result.user.id}\n*⬤ Filetype :* ${result.medias[0].fileType}\n*⬤ Type :* ${result.medias[0].type}\n*⬤ Jumlah Media :* ${result.medias.length}\n*⬤ Url :* ${text}\n\n*ᴢɪᴍ ʙᴏᴛ ɪɴᴄ*` }, { quoted: m })	                                  	                      	            


for(let i of result.medias) {		


if(i.url.includes('mp4')){		           			    				


let link = await getBuffer(i.url)

ZimBotInc.sendMessage(m.chat, { video: link, jpegThumbnail: await getBuffer(i.preview), caption: `*Instagram ${i.type}*` }, { quoted: m })

} else {


let link = await getBuffer(i.url)

ZimBotInc.sendMessage(m.chat, { image: link, jpegThumbnail: await getBuffer(i.preview), caption: `*Instagram ${i.type}*` }, { quoted: m })          


}


 }

}).catch((err) => reply(`*Sorry Instagram Instagram ${text} Not found*`))

}		
break
case 'ig':{
if (args.length === 0) throw `Where is the link?\nSend ${prefix + command} url`
let urlInsta = args[0];
if (!(urlInsta.includes("instagram.com/p/") ||
urlInsta.includes("instagram.com/reel/") ||
urlInsta.includes("instagram.com/tv/")))
return ZimBotInc.sendMessage(m.chat,{ text: `The link you provided is not a instagram link` },{ quoted: m });      
if (urlInsta.includes("?"))
urlInsta = urlInsta.split("/?")[0];
ig.fetchPost(urlInsta).then((res) => {
if (res.media_count == 1) {
if (res.links[0].type == "video") {
ZimBotInc.sendMessage(m.chat,{video: { url: res.links[0].url }},{ quoted: m })
}else if (res.links[0].type == "image") {
ZimBotInc.sendMessage(m.chat,{image: { url: res.links[0].url }},{ quoted: m })
}
}
else if (res.media_count > 1) {
for (let i = 0; i < res.media_count; i++) {
if (res.links[i].type == "video") {
ZimBotInc.sendMessage(m.chat,{video: { url: res.links[i].url }},{ quoted: m })
} else if (res.links[i].type == "image") {
ZimBotInc.sendMessage(m.chat,{image: { url: res.links[i].url }},{ quoted: m })
}
}
}            
}).catch((error) => {
reply(error);
ZimBotInc.sendMessage(m.chat, { text: `sorry zimbot user must be private or unavailable` }, { quoted: m })
});

}
break
case 'tinyurl':{
   if(!q) return m.reply('link?')
   request(`https://tinyurl.com/api-create.php?url=${q}`, function (error, response, body) {
   try {
  m.reply(body)
  } catch (e) {
  m.reply(e)
  }
  })
  }
break
case 'creategroup':
if (!isCreator) return m.reply(mess.owner)
if (!q) return reply("Enter text")
const groupu = await ZimBotInc.groupCreate(q, [owner + "@s.whatsapp.net"])
m.reply('done 👍')
break
case 'ig3': case 'igdl3': case 'instagram3': {

   ////if 
if (!text) throw '*Enter a Link Query!*'
if (!isUrl(args[0]) && !args[0].includes('instagram.com')) throw '*The link you provided is not valid*'
   
let bicil = require('@bochilteam/scraper')
let urlnya = text
 bicil.instagramdlv4(urlnya)
 .then(async(result) => {
for(let i of result){
if(i.url.includes('mp4')){
let link = await getBuffer(i.url)
ZimBotInc.sendMessage(m.chat, { video: link, jpegThumbnail: await getBuffer(i.thumbnail), caption: `*${botname}*` }, { quoted: m }) 
} else {
let link = await getBuffer(i.url)
ZimBotInc.sendMessage(m.chat, { image: link, jpegThumbnail: await getBuffer(i.thumbnail), caption: `*${botname}*` }, { quoted: m })                  
}
}
}).catch((err) => reply(`*Failed When Downloading And Sending Media*`))
}		
break
case 'ig2': case 'igdl2': case 'instagram2': {	            
   if (!text) throw '*Enter a Link Query!*'                
   if (!isUrl(args[0]) && !args[0].includes('instagram.com')) throw '*The link you provided is not valid*'
   
anu = await fetchJson(`https://api.akuari.my.id/downloader/igdl?link=${text}`)
var oi = 1
for(let i of anu.medias){                
var txt = `*▊▊▊INSTA DL▊▊▊*\n\n*Username:* ${anu.user.username}\n*Fullname:* ${anu.user.fullName}\n*Followers:* ${anu.user.followers}\n*Type:* ${anu.medias[0].type}\n*Tipe:* ${anu.medias[0].fileType}\n*ID:* ${anu.user.id}\n*Jumlah Media:* ${oi++}\n*Url:* ${text}\n\n*ᴢɪᴍ ʙᴏᴛ ɪɴᴄ*`
var buf = await getBuffer(anu.user.profilePicUrl)        
ZimBotInc.sendMessage(m.chat, { image: { url: anu.user.profilePicUrl }, jpegThumbnail:buf, caption: `${txt}` }, { quoted: m }).catch((err) => m.reply('error'))
ZimBotInc.sendMessage(m.chat, { video: { url: i.url }, jpegThumbnail:buf, caption: `${botname}`}, { quoted: m }).catch((err) => m.reply('error'))
}
}
break
case 'igimage': {	            
if (!text) throw '*Enter a Link Query!*'
const { instagramdl, instagramdlv2, instagramdlv3 } = require('@bochilteam/scraper')
if (!isUrl(args[0]) && !args[0].includes('instagram.com')) throw '*The link you provided is not valid*'
   
instagramdlv3(`${text}`).then(async (data) => {
for (let f of data) {                                      
ZimBotInc.sendMedia(m.chat, f.url, '', `Download Url Instagram From ${text}`, m)
}
}).catch((err) => {
reply(`*Failed to download media and send videos*`)
})
}
break
case 'igs': case 'igstory': case 'instagramstory': {

   

if (!text) throw 'Type  Username!' 

                 

let urlnya = text

 hx.igstory(urlnya)

 .then(async(result) => {

var halo = 0		

ZimBotInc.sendMessage(m.chat, { image: { url: result.user.profilePicUrl }, jpegThumbnail: await getBuffer(result.user.profilePicUrl), caption: `*----「 INSTAGRAM STORY 」----*\n\n*⬤ Username :* ${result.user.username}\n*⬤ Fullname :* ${result.user.fullName}\n*⬤ Followers :* ${result.user.followers}\n*⬤ Following :* ${result.user.following}\n*⬤ ID :* ${result.user.id}\n*⬤ Filetype :* ${result.medias[0].fileType}\n*⬤ Type :* ${result.medias[0].type}\n*⬤ Media :* ${result.medias.length}\n*⬤ Bio :* ${result.user.biography}\n\n*➢𝙲𝙻𝙰𝚂𝚂𝙸𝙲 𝙱𝙾𝚃*` }, { quoted: m })	                                  	                      	            

for(let i of result.medias) {

if(i.url.includes('mp4')){

let link = await getBuffer(i.url)

ZimBotInc.sendMessage(m.chat, { video: link, jpegThumbnail: await getBuffer(i.preview), caption: `*Story ${i.type}*` }, { quoted: m }) 

} else {

let link = await getBuffer(i.url)

ZimBotInc.sendMessage(m.chat, { image: link, jpegThumbnail: await getBuffer(i.preview), caption: `*Story ${i.type}*` }, { quoted: m })                  

}

}

}).catch((err) => reply(`*Sorry Story Instagram ${text} not found*`))

}		

break
case 'igs2': case 'igstory2': case 'instagramstory2':{
////if you (copy.codes) .then(give a credit)
if (!text) throw '*Enter a Link Query!*'
//   if (!isUrl(args[0]) && !args[0].includes('facebook.com')) throw '*The link you provided is not valid*'
   
anu = await fetchJson(`https://api.akuari.my.id/downloader/igStory?username=${text}`)        
for (let i of anu) {
tummb = await getBuffer(i.preview)         
ZimBotInc.sendMessage(m.chat, { video: { url: i.url }, jpegThumbnail:tummb, caption: `*${botname}*`}, { quoted: m }).catch((err) => m.reply('*Sorry, the feature is in error*'))
}
}
break
case 'igs3': case 'igstory3': case 'instagramstory3': {
  
if (!text) throw 'Enter Username!' 
   
let bicil = require('@bochilteam/scraper')
let urlnya = text
bicil.instagramStoryv2(urlnya)
.then(async(result) => {	  
var halo = 1		
ZimBotInc.sendMessage(m.chat, { image: { url: result.user.profilePicUrl }, jpegThumbnail: await getBuffer(result.user.profilePicUrl), caption: `*----「 INSTA DOWNLOADER 」----*\n\n*⬤ Username :* ${result.user.username}\n*⬤ Fullname :* ${result.user.fullName}\n*⬤ Followers :* ${result.user.followers}\n*⬤ Following :* ${result.user.following}\n*⬤ ID :* ${result.user.id}\n*⬤ Jumlah Media :* ${halo++}\n*⬤ Bio :* ${result.user.biography}\n\n*𝙲𝙻𝙰𝚂𝚂𝙸𝙲 𝙱𝙾𝚃*` }, { quoted: m })	                                  	                      	            
for(let i of result.results) {		
if(i.url.includes('mp4')){		           			    				
let link = await getBuffer(i.sourceUrl)
ZimBotInc.sendMessage(m.chat, { video: link, jpegThumbnail: await getBuffer(i.thumbnail), caption: `*Story ${i.type}*` }, { quoted: m })
} else {
let link = await getBuffer(i.url)
ZimBotInc.sendMessage(m.chat, { image: link, jpegThumbnail: await getBuffer(i.thumbnail), caption: `*Story ${i.type}*` }, { quoted: m })          
}
}
}).catch((err) => reply(`*Sorry Story Instagram ${text} Tnot found*`))
}		
break
case 'igtv': {	            
if (!text) throw '*Enter a Link Query!*'
const { instagramdl, instagramdlv2, instagramdlv3 } = require('@bochilteam/scraper')
if (!isUrl(args[0]) && !args[0].includes('instagram.com')) throw '*The link you provided is not valid*'
   
instagramdlv3(`${text}`).then(async (data) => {            
var buf = await getBuffer(data[0].thumbnail)        
ZimBotInc.sendMessage(m.chat, { video: { url: data[0].url }, jpegThumbnail:buf, caption: `${botname}`}, { quoted: m })
}).catch((err) => {
reply(`*Failed to download media and send videos*`)
})
}
break
case 'twitter': case 'td': case 'twitterdl': {     	             
if (!text) throw '*Enter a Link Query!*'
if (!isUrl(args[0]) && !args[0].includes('twitter.com')) throw '*The link you provided is not valid*'
     
xa.Twitter(`${text}`).then(async (data) => {                    
let txt = `*▊▊▊TWITTER DL▊▊▊*\n\n`
txt += `*⬤TITLE :* ${data.title}\n`
txt += `*⬤QUALITY :* ${data.medias[1].quality}\n`
txt += `*⬤TYPE :* ${data.medias[1].extension}\n`
txt += `*⬤SIZE :* ${data.medias[1].formattedSize}\n`
txt += `*⬤DURATION :* ${data.medias.length}\n`
txt += `*⬤URL :* ${data.url}\n\n`
txt += `*ᴢɪᴍ ʙᴏᴛ ɪɴᴄ*`
buf = await getBuffer(data.thumbnail)    
ZimBotInc.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${txt}` }, { quoted: m })
for (let i of data.medias) {
ZimBotInc.sendMessage(m.chat, { video: { url: i.url }, jpegThumbnail:buf, caption: `*Downloading From ${text}*`}, { quoted: m })
}
}).catch((err) => {
reply(`*Failed to download media and send videos*`)
})
 }
 break
case 'twitter2': case 'td2': case 'twitterdl2': {     	             
if (!text) throw '*Enter a Link Query!*'
if (!isUrl(args[0]) && !args[0].includes('twitter.com')) throw '*The link you provided is not valid*'
     
xa.Twitter(`${text}`).then(async (data) => {
for (let x of data.medias) {
let txt = `*▊▊▊TWITTER DL▊▊▊*n\n`
txt += `*⬤TITLE :* ${data.title}\n`
txt += `*⬤QUALITY :* ${x.quality}\n`
txt += `*⬤TYPE:* ${x.extension}\n`
txt += `*⬤SIZE:* ${x.formattedSize}\n`
txt += `*⬤URL :* ${data.url}\n\n`
txt += `*Hi ${pushname}The bot is doing great job dont forget to subcribe*`
buf = await getBuffer(data.thumbnail)    
ZimBotInc.sendMessage(m.chat, { video: { url: x.url }, jpegThumbnail:buf, caption: `${txt}`}, { quoted: m })
}
}).catch((err) => m.reply(`Sorry the faiture is error`))   
 }
 break

case 'twittermp3': case 'twitteraudio': { 	             
  if (!text) throw '*Enter a Link Query!*'
  if (!isUrl(args[0]) && !args[0].includes('twitter.com')) throw '*The link you provided is not valid*'
     
  xa.Twitter(`${text}`).then(async (data) => {
  ZimBotInc.sendMessage(m.chat, { audio: { url: data.medias[1].url }, mimetype: 'audio/mp4'}, { quoted: m })
  }).catch((err) => {
  reply(`*Failed to download media and send audio*`)
})
 }
break
case 'fbdl': case 'facebook': case 'pesbuk': {     	    
         
if (!text) throw '*Enter a Link Query!*'
if (!isUrl(args[0]) && !args[0].includes('facebook.com')) throw '*The link you provided is not valid*'
              
let bocil = require('@bochilteam/scraper')  
bocil.facebookdlv2(`${text}`).then(async (data) => {                   

let txt = `*▊▊▊FB DOWNLOAD▊▊▊*\n\n`

txt += `*⬤TITLE :* ${data.title}\n`

txt += `*⬤QUALITY :* ${data.result[0].quality}\n`

txt += `*⬤DESCRIPTION :* ${data.description}\n`

txt += `*⬤ID :* ᴢɪᴍ ʙᴏᴛ ɪɴᴄ\n`

txt += `*⬤URL :* ${text}\n\n`

txt += `*𝙲𝙻𝙰𝚂𝚂𝙸𝙲 𝙱𝙾𝚃*`                

buf = await getBuffer(data.thumbnail)    

ZimBotInc.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${txt}` }, { quoted: m })         

for (let i of data.result) {     

ZimBotInc.sendMessage(m.chat, { video: { url: i.url }, jpegThumbnail:buf, caption: `*⬤ Quality :* ${i.quality}`}, { quoted: m })

}          

}).catch((err) => {

reply(`*Failed When Downloading Media and Sending Files*`)

})

 }

 break
case 'fbmp3': case 'facebookmp3': case 'facebookaudio': {

if (!text) return m.reply(`Use${prefix + command} enter facebook link`)
if (!isUrl(args[0]) && !args[0].includes('facebook.com')) throw '*The link you provided is not valid*'
     
let noh = require('@bochilteam/scraper')                
noh.savefrom(`${text}`).then(async (anu) => {  
ZimBotInc.sendMessage(m.chat, { audio: { url: anu.url[0].url }, mimetype: 'audio/mp4' }, { quoted: m })      
}).catch((err) => {
reply(`*Failed to link to audio*`)
})
}
 break
case 'fb6': {   	            
if (!text) throw '*Enter a Link Query!*'
if (!isUrl(args[0]) && !args[0].includes('facebook.com')) throw '*The link you provided is not valid*'
                 
xa.Facebook(`${text}`).then(async (data) => {                   
let txt = `*▊▊▊FB6 DOWNLOAD▊▊▊*\n\n`
txt += `*⬤TITLE :* ${data.title}\n`
txt += `*⬤QUALITY :* ${data.medias[1].quality}\n`
txt += `*:⬤TYPE* ${data.medias[1].extension}\n`
txt += `*⬤SIZE :* ${data.medias[1].formattedSize}\n`
txt += `*⬤URL :* ${data.url}\n\n`
txt += `*𝙲𝙻𝙰𝚂𝚂𝙸𝙲 𝙱𝙾𝚃*`
buf = await getBuffer(data.thumbnail)    
ZimBotInc.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${txt}` }, { quoted: m })              
ZimBotInc.sendMessage(m.chat, { video: { url: data.medias[1].url }, jpegThumbnail:buf, caption: `*⬤ Quality :* ${data.medias[1].quality}`}, { quoted: m })                
}).catch((err) => {
reply(`*Failed When Downloading Media and Sending Files*`)
})
}
break
case 'youtube': case 'ytdl': {
   ////if 
if (!text) throw '*Enter a Link Query!*'
if (!isUrl(args[0]) && !args[0].includes('youtube.com')) throw '*The link you provided is not valid*'
    
anu = await fetchJson(`https://api.akuari.my.id/downloader/youtube?link=${text}`)        
if (anu.filesize_video >= 100000) return m.reply('*File Over Limit* '+util.format(anu))
tummb = await getBuffer(anu.thumb)
audio = await getBuffer(anu.audio)        
ZimBotInc.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `${anu.title}`}, { quoted : m }).catch((err) => m.reply('*Sorry, the feature is in error*'))
ZimBotInc.sendMessage(m.chat, { video: { url: anu.video }, jpegThumbnail:tummb, caption: `${util.format(anu)}`}, { quoted: m }).catch((err) => m.reply('*Sorry, the feature is in error*'))
 }
 break
 case 'igreal': case 'instagramreal': {
   ////if 
if (!text) throw '*Enter a Link Query!*'
if (!isUrl(args[0]) && !args[0].includes('instagram.com')) throw '*The link you provided is not valid*'
     
anu = await fetchJson(`https://api.akuari.my.id/downloader/igdl?link=${text}`)        
tummb = await getBuffer(anu.medias[0].preview)         
ZimBotInc.sendMessage(m.chat, { video: { url: anu.medias[0].url }, jpegThumbnail:tummb, caption: `${util.format(anu)}`}, { quoted: m }).catch((err) => m.reply('*Sorry, the feature is in error*'))
 }
 break
 case 'cuttly': {
  //if 
if (!text) throw `Example : ${prefix + command} https://github.com`
anu = await fetchJson(`https://xteam.xyz/shorturl/cuttly?url=${text}&nama=alyabot&APIKEY=${setting.riy}`)
m.reply(`${anu.result}`)
}
break
case 'speedtest': {
  reply('Testing Speed...')
  let cp = require('child_process')
  let { promisify } = require('util')
  let exec = promisify(cp.exec).bind(cp)
  let o
  try {
  o = await exec('python speed.py')
  } catch (e) {
  o = e
  } finally {
  let { stdout, stderr } = o
  if (stdout.trim()) m.reply(stdout)
  if (stderr.trim()) m.reply(stderr)
  }
  }
  break
  case 'report': {
    if (!args.join(" ")) return m.reply(`Example : \n- ${prefix + command} feature ig error min\n- ${prefix + command} this user is spamming min`)
    teks = `*▊▊▊REPORT FEATURE▊▊▊*`
    teks1 = `\n\nNUMBER : @${m.sender.split("@")[0]}\n*REPORT :* ${args.join(" ")}`
    teks2 = `\n\nSucces send to owner`
    for (let i of owner) {
    ZimBotInc.sendMessage(i + "@s.whatsapp.net", {text: teks + teks1, mentions:[m.sender]}, {quoted:m})
    }
    ZimBotInc.sendMessage(m.chat, {text: teks + teks2 + teks1, mentions:[m.sender]}, {quoted:m})
    }
    break
    case 'request': case 'suggest': {
    if (!args.join(" ")) return m.reply(`Example : ${prefix + command} min add a downloader feature`)
    teks = `*▊▊▊REQUEST FEATURE▊▊▊*`
    teks1 = `\n\n*NUMBER :* @${m.sender.split("@")[0]}\n*REQUEST :* ${args.join(" ")}`
    teks2 = `\n\nSucces send to owner`
    for (let i of owner) {
    ZimBotInc.sendMessage(i + "@s.whatsapp.net", {text: teks + teks1, mentions:[m.sender]}, {quoted:m})
    }
    ZimBotInc.sendMessage(m.chat, {text: teks + teks2 + teks1, mentions:[m.sender]}, {quoted:m})
    }
    break
    case 'amino': {
      if (!text) throw `what are you looking for!, example : ${prefix + command} naruto`
      
      let anu = await fetchJson(`https://violetics.pw/api/search/amino?apikey=beta&query=${text}`)
      m.reply(`${util.format(anu)}`)
      }
  break
case 'anime': {

 

if (!text) return m.reply(`you are looking for what anime apa?\n\nEXAMPLE ${prefix}anime naruto`)


anu = await fetchJson(`https://api.jikan.moe/v4/anime?q=${text}`)

let sections = []   

for (let i of anu.data) {

const list = {title: `${i.title}`,

rows: [

{

title: `${i.title}`, 

rowId: `${prefix}animee ${i.mal_id}`,

description: `${i.synopsis}`

}, 

]

}

sections.push(list)   

}

const sendm =  ZimBotInc.sendMessage(

m.chat, 

{

text: `*Search Results From* ${text}`,

footer: botname,

title: "*▊▊▊ANIME▊▊▊*",

buttonText: "CLICK HERE",

sections

}, { quoted : m })

}

break
case 'animee': {

res = await fetchJson(`https://api.jikan.moe/v4/anime/${q}`)
let txt = `➢𝗔𝗻𝗶𝗺𝗲 𝗜𝗻𝗳𝗼\n\n➟𝐓𝐢𝐭𝐭𝐥𝐞: *${res.data.title}*\n➟𝐄𝐧𝐠𝐥𝐢𝐬𝐡 : *${res.data.title_english}*\n➟𝐉𝐚𝐩𝐚𝐧𝐞𝐬𝐞 : *${res.data.title_japanese}*\n➟𝐓𝐲𝐩𝐞 : ➟𝐀𝐧𝐢𝐦𝐞 : *${res.data.type}*\n➟𝐀𝐝𝐚𝐩𝐭𝐞𝐫 : *${res.data.source}*\n➟𝐓𝐨𝐭𝐚𝐥 𝐄𝐩𝐢𝐬𝐨𝐝𝐞 : *${res.data.episodes}*\n➟𝐒𝐭𝐚𝐭𝐮𝐬 : *${res.data.status}*\n➟𝐎𝐧𝐠𝐨𝐢𝐧𝐠 : *${res.data.airing ? 'Ya' : 'DRIS'}*\n*AIRED:* *${res.data.aired.string}*\n➟𝐃𝐮𝐫𝐚𝐭𝐢𝐨𝐧 : *${res.data.duration}*\n➟𝐑𝐚𝐭𝐢𝐧𝐠 : *${res.data.rating}*\n➟𝐒𝐜𝐨𝐫𝐞 : *${res.data.score}*\n➟𝐑𝐚𝐧𝐤 : *${res.data.rank}*\n➟𝐒𝐭𝐮𝐝𝐢𝐨 *${res.data.studios[0].name}* `
ZimBotInc.sendMessage(m.chat, { image : { url : res.data.images.jpg.image_url}, caption : txt}, {quoted :m }).catch((err) => m.reply('sorry error'))
}
break
case 'bcgc': case 'bcgroup': {
if (!isCreator) throw mess.owner
if (!text) throw `*Type some text*\n\nExample : ${prefix + command} Classic Bot`
let getGroups = await ZimBotInc.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
reply(`*Send Broadcast To* ${anu.length} *Group Chat, Time ${anu.length * 1.5} second*`)
for (let i of anu) {
await sleep(1500)
let btn = [{
urlButton: {
displayText: 'GITHUB',
url: 'https://github.com/Samue-l1/Classic-V4'
}
}]
let txt = `「 𝐂𝐋𝐀𝐒𝐒𝐈𝐂 𝐁𝐎𝐓 𝐁𝐑𝐎𝐀𝐃𝐂𝐀𝐒𝐓 」\n\n${text}`
ZimBotInc.send5ButImg(i, txt, botname, global.bc, btn)
}
reply(` *Send Broadcast To* ${anu.length} *Group*`)
}
break
case 'bc': case 'broadcast': case 'bcall': {
if (!isCreator) throw mess.owner
if (!text) throw `*Type some text*\n\nExample : ${prefix + command} CLASSIC BOT`
let anu = await store.chats.all().map(v => v.id)
reply(`*Send Broadcast To* ${anu.length} Chat\nTime ${anu.length * 1.5} second`)
for (let yoi of anu) {
await sleep(1500)
let btn = [{
urlButton: {
displayText: 'GITHUB',
url: 'https://github.com/Samue-l1/Classic-V4'
}
}]
let txt = `「 𝐂𝐋𝐀𝐒𝐒𝐈𝐂 𝐁𝐎𝐓 𝐁𝐑𝐎𝐀𝐃𝐂𝐀𝐒𝐓 」\n\n${text}`
ZimBotInc.send5ButImg(yoi, txt, botname, global.bc, btn)
}
reply('*Success Broadcast*')
}
break
case 'bc2': case 'bcloc': {
if (!isCreator) throw mess.owner
if (!text) throw `*Type some text*\n\nExample : ${prefix + command} drips|hi5`
let anu = await store.chats.all().map(v => v.id)
let [melo, melo2] = text.split`|`
reply(`*Send Broadcast To* ${anu.length} Chat\nTime ${anu.length * 1.5} minutes`)
for (let yoi of anu) {
await sleep(1500)
var button = [{ buttonId: `${prefix}ho`, buttonText: { displayText: `${melo2}` }, type: 1 }]              
ZimBotInc.sendMessage(yoi, { caption: `${melo}`, location: { jpegThumbnail: await getBuffer(picak+'Brodcast') }, buttons: button, footer: `${botname}`, mentions: [m.sender] })
}		
}
break
case 'bcimage': case 'bcvideo': case 'bcaudio': {
if (!isCreator) throw mess.owner
if (!/video/.test(mime) && !/image/.test(mime) && !/audio/.test(mime)) throw `*Send/Reply Video/Audio/Image You Want to Broadcast With Caption* ${prefix + command}`
let anu = await store.chats.all().map(v => v.id)
let ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "6289523258649-1604595598@g.us"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: fs.readFileSync('./drips.jpg'), surface: 200, message: `ZIM-BOT-INC`, orderTitle: 'ZIM-BOT-INC', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
reply(`*Send Broadcast To* ${anu.length} *Group Chat, Time ${anu.length * 1.5} minutes*`)
for (let i of anu) {
await sleep(1500)
let butoon = [{
urlButton: {
displayText: `GITHUB`,
url: 'https://github.com/Samue-l1/Classic-V4t'
}
},
{
quickReplyButton: {
displayText: 'MENU',
id: 'menu'
}
}]
let media = await ZimBotInc.downloadAndSaveMediaMessage(quoted)
let buffer = fs.readFileSync(media)
if (/webp/.test(mime)) {
ZimBotInc.sendMessage(i, { sticker: { url: media } }, { quoted: ftroli })
} else if (/image/.test(mime)) {
let junn = `*_BROADCAST IMAGE_*${text ? '\n\n' + text : ''}`
ZimBotInc.send5ButImg(i, junn, `${global.botname}`, buffer, butoon)
} else if (/video/.test(mime)) {
let junn = `*_BROADCAST VIDIO_*${text ? '\n\n' + text : ''}`
ZimBotInc.sendMessage(i, {video: buffer, caption: `${junn}`}, { quoted: ftroli })
} else if (/audio/.test(mime)) {
ZimBotInc.sendMessage(i, {audio: buffer, mimetype: 'audio/mpeg'}, { quoted : ftroli })
} else {
reply(`*Send/Reply Video/Audio/Image You Want to Broadcast With Caption* ${prefix + command}`)
}
await fs.unlinkSync(media)
}
reply(` *Send Broadcast To* ${anu.length} *Chats*`)
}
break
case 'bctext': {
if (!isCreator) throw mess.owner
if (!text) throw `*Type some text*\n\nExample : ${prefix + command} zim-ot`
//let ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "6289523258649-1604595598@g.us"}, "message": {orderMessage: {itemCount: 666666666,status: 200, thumbnail: await getBuffer(picak+'Brodcast'), surface: 200, message: `© ${botname}`, orderTitle: 'memek', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
let ftroli = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `© ${botname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ZimBotInc.user.name},;;;\nFN:${botname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': await getBuffer(picak+'Brodcast'), thumbnail: await getBuffer(picak+'Brodcast'),sendEphemeral: true}}}
let anu = await store.chats.all().map(v => v.id)
reply(`*Send Broadcast To* ${anu.length} Chat\n*Time ${anu.length * 1.5} seconds*`)
for (let yoi of anu) {
await sleep(1500)
ZimBotInc.sendMessage(yoi, {text:`${text}`}, {quoted:blessedtuna})
}
reply('*Success Broadcast*')
}
break
case 'bcvid': case 'bcvideo': {
if (!isCreator) throw mess.owner
if (!text) throw `*use ${prefix + command}|text*`
let buf = `https://telegra.ph/file/f8b17ce3b28bb5f25f5e1.mp4`
let ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "6289523258649-1604595598@g.us"}, "message": {orderMessage: {itemCount: 999999999999,status: 200, thumbnail: await getBuffer(picak+'Brodcast'), surface: 200, message: `© ${botname}`, orderTitle: 'memek', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}                
let anu = await store.chats.all().map(v => v.id)
reply(`*Send Broadcast To* ${anu.length} Chat\n*Time ${anu.length * 1.5} minute*`)
for (let yoi of anu) {
await sleep(1500)		    
ZimBotInc.sendMessage(yoi, { video: await getBuffer(buf), jpegThumbnail: await getBuffer(picak+'Brodcast'), caption: `${text}` }, { quoted: ftroli}).catch ((err) => m.reply('*Sorry, failed to send the video*'))
}
reply('*Sucecess Broadcast*')
}
break
case 'swm': case 'stickerwm': case 'wm': {
  reply(mess.wait)
  if (!args.join(" ")) return m.reply(`Example :\n${prefix}swm drips love | tuna`)
  const swn = args.join(" ")
  const pcknm = swn.split("|")[0];
  const atnm = swn.split("|")[1];
  if (!/webp/.test(mime)) throw `*reply sticker with caption* *${prefix + command}*`
  if (m.quoted.isAnimated === true) {
  ZimBotInc.downloadAndSaveMediaMessage(quoted, "gifee")
  ZimBotInc.sendMessage(m.chat, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
  } else if (/image/.test(mime)) {
  let media = await quoted.download()
  let encmedia = await ZimBotInc.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
  await fs.unlinkSync(encmedia)
  } else if (/video/.test(mime)) {
  if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
  let media = await quoted.download()
  let encmedia = await ZimBotInc.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
  await fs.unlinkSync(encmedia)
  } else {
  reply(`*Send Image/Video With Caption* ${prefix + command}\n*Duration Video 1-9 seconds*`)
  }
  }
break
case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
reply(mess.wait)
if (!/image/.test(mime)) throw respond
if (!text) throw respond
reply(mess.wait)
atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
let dwnld = await quoted.download()
let { floNime } = require('./lib/uploader')
let fatGans = await floNime(dwnld)
let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans.result.url}`
let FaTiH = await ZimBotInc.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.auhor })
await fs.unlinkSync(FaTiH)
}
break
case 'brainly': {
reply(mess.wait)
if (!text) throw `Example : ${prefix + command} apa itu wibu`           
x = await fetchJson(`https://api.violetics.pw/api/media/brainly?apikey=beta&query=${text}`)                       
ini_txt = '*BRAINLY SEARCH*\n\n'
for (let i of x.result) {       
ini_txt += `*QUESTION* : ${i.pertanyaan}\n`
ini_txt += `*ANSWER* : ${i.jawaban}\n`                     
}   
reply(`${ini_txt}`)
}
break
case 'searchanime': {
reply(mess.wait)
if (!text) throw `Example : ${prefix + command} nama anime`
anu = await getBuffer(`https://api.akuari.my.id/search/konachan?query=${text}`)
ZimBotInc.sendMessage(m.chat, { image: anu, caption: `${command}` }, { quoted: m}).catch((err) => m.reply('*Sorry Xteam server is down*'))
}
break

//----END HERE------\\

//CREATED BY CLASSIC BOT

//----PHOT FILTER-----\\
break
case 'angie': 
case 'aria':
case 'attic': 
case 'blackandwhite': 
case 'chorme1977': 
case 'constrastbandw':
case 'creamy': 
case 'duotone': 
case 'eva': 
case 'goldenhour': 
case 'hana': 
case 'hdr': 
case 'japanese':
case 'lana': 
case 'lavander': 
case 'lemonande': 
case 'lightleak': 
case 'lisa': 
case 'lomo': 
case 'milk': 
case 'molly':
case 'monochrome': 
case 'morning': 
case 'movie': 
case 'orton': 
case 'paretro': 
case 'perfectbandw': 
case 'plumy': 
case 'retrolga': 
case 'ruby': 
case 'sand': 
case 'sapphire': 
case 'sepia': 
case 'softsepia': 
case 'solarize': 
case 'sphinx':
case 'venus': 
case 'viewfinder': 
case 'warmsunset': {
if (!/image/.test(mime)) throw `*Send/Reply Image With Caption* ${prefix + command}`
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
let media = await ZimBotInc.downloadAndSaveMediaMessage(quoted)   
let anu = await TelegraPh(media)
let buf = await getBuffer(`https://violetics.pw/api/photofilter/${command}?apikey=beta&image=${anu}`)
ZimBotInc.sendMessage(m.chat, { image: buf, jpegThumbnail:buf, caption: `PhotoFilter ${command}` ,  quoted: m, contextInfo: { externalAdReply:{
  title:"𝐂𝐋𝐀𝐒𝐒𝐈𝐂 𝐁𝐎𝐓",
  body:"S➢𝙰𝙻𝙻 𝙷𝙰𝙸𝙻 𝚃𝙾 𝙺𝙸𝙽𝙶 𝚂𝙰𝙼 \n➢𝙲𝙻𝙰𝚂𝚂𝙸𝙲 𝙱𝙾𝚃 2024",
  showAdAttribution: true,
  mediaType:2,
  thumbnail: fs.readFileSync(`./drips.jpg`) ,
  mediaUrl:`https://chat.whatsapp.com/EPSGKau0IVi7J5lyOJO7Jk`, 
sourceUrl: `https://chat.whatsapp.com/EPSGKau0IVi7J5lyOJO7Jk` }}}, {quoted: m})
}
 
//----END HERE-------\\

//CREATED BY 𝙲𝙻𝙰𝚂𝚂𝙸𝙲 𝙱𝙾𝚃*

//----TEXTPRO--------\\
case 'candy':
case 'christmas': 
case '3dchristmas': 
case 'sparklechristmas':
case 'deepsea': 
case 'scifi': 
case 'rainbow2': 
case 'waterpipe': 
case 'spooky': 
case 'pencil': 
case 'circuit': 
case 'discovery': 
case 'metalic': 
case 'fiction': 
case 'demon': 
case 'transformer': 
case 'berry': 
case 'thunder': 
case '3dstone2': 
case 'neonlight': 
case 'glitch': 
case 'harrypotter': 
case 'brokenglass': 
case 'papercut': 
case 'watercolor': 
case 'multicolor': 
case 'neondevil': 
case 'underwater': 
case 'graffitibike':
case 'snow': 
case 'cloud': 
case 'honey': 
case 'ice': 
case 'fruitjuice': 
case 'biscuit': 
case 'wood': 
case 'chocolate': 
case 'strawberry': 
case 'matrix': 
case 'blood': 
case 'dropwater': 
case 'toxic': 
case 'lava': 
case 'rock': 
case 'bloodglas': 
case 'halloween': 
case 'darkgold': 
case 'joker': 
case 'wicker':
case 'firework': 
case 'skeleton': 
case 'blackpink': 
case 'sand': 
case 'glue': 
case '1917': 
case 'leaves': 
case 'demon': {
if (!q) return reply(`Example : ${prefix + command} ${global.ownername}`) 
reply(mess.wait)
let link
if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
if (/3dstone2/.test(command)) link = 'https://textpro.me/create-a-3d-stone-text-effect-online-for-free-1073.html'
if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
if (/halloween/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
let anu = await maker.textpro(link, q)
ZimBotInc.sendMessage(m.chat, { image: { url: anu }, caption: `Made by ${global.botname}` ,  quoted: m, contextInfo: { externalAdReply:{
  title:"ᴢɪᴍ ʙᴏᴛ ᴠ5",
  body:"SUBSCRIBE DRIPS OFC",
  showAdAttribution: true,
  mediaType:2,
  thumbnail: fs.readFileSync(`./drips.jpg`) ,
  mediaUrl:`https://chat.whatsapp.com/EPSGKau0IVi7J5lyOJO7Jk`, 
sourceUrl: `https://chat.whatsapp.com/EPSGKau0IVi7J5lyOJO7Jk` }}}, {quoted: m})
}
//----END HERE--------\\

//CREATED BY SAM

//----PHOTOOXY------\\
case 'silk':  
case '3dnature': 
case 'bevel': 
case 'birthdaycake': 
case  'burnpaper':  
case 'coffee': 
case 'coffee-heartcup': 
case 'embroiderytext': 
case 'flaming': 
case 'flowertypo': 
case 'funnycup': 
case 'fur': 
case 'gerbang': 
case 'glowrainbow': 
case 'gradientavatar': 
case 'graffititext': 
case 'harrypotter': 
case 'lovemessage': 
case 'luxuryroyal': 
case 'neonlight': 
case 'sweetcandy': 
case 'summertext': 
case 'woodheart': 
case 'woodblock': 
case 'yellowroses': 
case 'wolfmetal': 
case 'underwaterocean': {
if (!text) throw `Example : ${prefix + command} text`
anu = await getBuffer(`https://violetics.pw/api/photooxy/${command}?apikey=beta&text=${text}`)
ZimBotInc.sendMessage(m.chat, { image: anu, caption: `*PHOTO OXY ${command}*` , quoted: m, contextInfo: { externalAdReply:{
  title:"𝙲𝙻𝙰𝚂𝚂𝙸𝙲 𝙱𝙾𝚃",
  body:"➢𝙰𝙻𝙻 𝙷𝙰𝙸𝙻 𝚃𝙾 𝙺𝙸𝙽𝙶 𝚂𝙰𝙼 \n➢𝙲𝙻𝙰𝚂𝚂𝙸𝙲 𝙱𝙾𝚃 2024",
  showAdAttribution: true,
  mediaType:2,
  thumbnail: fs.readFileSync(`./drips.jpg`) ,
  mediaUrl:`https://youtu.be/KNu-gr2h7bo`, 
sourceUrl: `https://youtu.be/KNu-gr2h7bo` }}}, {quoted: m})
}
break

//---END HERE------\\

//CREATED BY DRIPS

//----EPHOTO-------\\
case '3d-wood': 
case 'angels-wings': 
case 'snake-text': 
case 'redhot-metal2': 
case 'sandsummer-beach': 
case 'snow-text': 
case 'water-3d': 
case 'water-effect': 
case 'wet-glass': 
case 'status-mood2': 
case 'summerysand': {
if (!text) throw `Example : ${prefix + command} nama anime`
anu = await getBuffer(`https://violetics.pw/api/ephoto360/${command}?apikey=beta&text=${text}`)
ZimBotInc.sendMessage(m.chat, { image: anu, caption: `*EPHOTO ${command}*` ,  quoted: m, contextInfo: { externalAdReply:{
  title:"𝙲𝙻𝙰𝚂𝚂𝙸𝙲 𝙱𝙾𝚈",
  body:"➢𝙰𝙻𝙻 𝙷𝙰𝙸𝙻 𝚃𝙾 𝙺𝙸𝙽𝙶 𝚂𝙰𝙼 \n➢𝙲𝙻𝙰𝚂𝚂𝙸𝙲 𝙱𝙾𝚃 2024",
  showAdAttribution: true,
  mediaType:2,
  thumbnail: fs.readFileSync(`./drips.jpg`) ,
  mediaUrl:`https://chat.whatsapp.com/EPSGKau0IVi7J5lyOJO7Jk`, 
sourceUrl: `https://chat.whatsapp.com/EPSGKau0IVi7J5lyOJO7Jk` }}}, {quoted: m})
}
break

case 'once': case 'toonce': { //by DRIPS
if (!quoted) throw 'Reply Image'
if (/image/.test(mime)) {
anu = await ZimBotInc.downloadAndSaveMediaMessage(quoted)
ZimBotInc.sendMessage(from, {image: {url: anu},viewOnce : true},{quoted: m })
} else if (/video/.test(mime)) {
anu = await ZimBotInc.downloadAndSaveMediaMessage(quoted)
ZimBotInc.sendMessage(m.chat, {video: {url: anu},viewOnce : true},{quoted: m })
}
}
break

case 'ary': 
case 'arygameplays': {
replay(mess.wait)
let buttons = [
{buttonId: `ary`, buttonText: {displayText: 'NEXT'}, type: 1}
]
let anu = await fetchJson(`https://wallebotapi.mitomods.com/docs/random/arygameplays?apikey=Donitas`)
let buttonMessage = {
image: { url: `${anu.result}` },
caption: `Arygameplays`,
footer: global.botnma,
buttons: buttons,
headerType: 4
}
ZimBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
break
case 'emojiapple':
if (!q) return reply("*Insert emoji, maximum 1 emoji, example?*" + ` ${prefix + command} 😀`)
reply("[❗] *BEING PROCESSED*")
emote(q, "0")
break
case 'emojigoogle':
if (!q) return reply("*Insert emoji, maximum 1 emoji, example?*" + ` ${prefix + command} 😀`)
reply("[❗] *BEING PROCESSED*")
emote(q, "1")
break
case 'emojisamsung':
if (!q) return reply("*Insert emoji, maximum 1 emoji, example?*" + ` ${prefix + command} 😀`)
reply("[❗] *BEING PROCESSED*")
emote(q, "2")
break
case 'emojimicrosoft':
if (!q) return reply("*Insert emoji, maximum 1 emoji, example?*" + ` ${prefix + command} 😀`)
reply("[❗] *BEING PROCESSED*")
emote(q, "3")
break
case 'emojiwhatsapp':
if (!q) return reply("*Insert emoji, maximum 1 emoji, example?*" + ` ${prefix + command} 😀`)
reply("[❗] *BEING PROCESSED*")
emote(q, "4")
break
case 'emojitwitter':
if (!q) return reply("*Insert emoji, maximum 1 emoji, example?*" + ` ${prefix + command} 😀`)
reply("[❗] *BEING PROCESSED*")
emote(q, "5")
break
case 'emojifecabook':
if (!q) return reply("*Insert emoji, maximum 1 emoji, example?*" + ` ${prefix + command} 😀`)
reply("[❗] *BEING PROCESSED*")
emote(q, "6")
break
case 'emojiskype':
if (!q) return reply("*Insert emoji, maximum 1 emoji, example?*" + ` ${prefix + command} 😀`)
reply("[❗] *BEING PROCESSED*")
emote(q, "7")
break
case 'emojijoy':
if (!q) return reply("*Insert emoji, maximum 1 emoji, example?*" + ` ${prefix + command} 😀`)
reply("[❗] *BEING PROCESSED*")
emote(q, "8")
break
case 'emojimoji':
if (!q) return reply("*Insert emoji, maximum 1 emoji, example?*" + ` ${prefix + command} 😀`)
reply("[❗] *BEING PROCESSED*")
emote(q, "9")
case 'emojipedia':
if (!q) return reply("*Insert emoji, maximum 1 emoji, example?*" + ` ${prefix + command} 😀`)
reply("[❗] *BEING PROCESSED*")
emote(q, "10")
break
case 'emojilg':
if (!q) return reply("*Insert emoji, maximum 1 emoji, example?*" + ` ${prefix + command} 😀`)
reply("[❗] *BEING PROCESSED*")
emote(q, "11")
break
case 'news':
// and we need jsdom and Readability to parse the article HTML

let urltt = 'https://newsapi.org/v2/everything?' +
`q=${text}&` +
'sortBy=publishedAt&' +
'apiKey=306032cefd134ab38660d7db51dd18d1';
// First lets get some search data from News API

// Build the URL we are going request. This will get articles related to Apple and sort them newest first

// Make the request with axios' get() function
axios.get(urltt).then(function(r1) {

  // At this point we will have some search results from the API. Take the first search result...
  let firstResult = r1.data.articles[0];

  // ...and download the HTML for it, again with axios
  axios.get(firstResult.url).then(function(r2) {

    // We now have the article HTML, but before we can use Readability to locate the article content we need jsdom to convert it into a DOM object
    let dom = new JSDOM(r2.data, {
      url: firstResult.url
    });

    // now pass the DOM document into readability to parse
    let article = new Readability(dom.window.document).parse();

    // Done! The article content is in the textContent property
    console.log(color(article.textContent));
    reply(article.textContent)
  })
})
break
/* case 'drips':
  // First lets get some search data from News API

// Build the URL we are going request. This will get articles related to Apple and sort them newest first
let urlttt = 'https://newsapi.org/v2/top-headlines?' +
`country=za&apiKey=` +
'306032cefd134ab38660d7db51dd18d1';

// Make the request with axios' get() function
axios.get(urlttt).then(function(r1) {

  // At this point we will have some search results from the API. Take the first search result...
  let firstResult = r1.data.articles[0];

  // ...and download the HTML for it, again with axios
  axios.get(firstResult.url).then(function(r2) {

    // We now have the article HTML, but before we can use Readability to locate the article content we need jsdom to convert it into a DOM object
    let dom = new JSDOM(r2.data, {
      url: firstResult.url
    });

    // now pass the DOM document into readability to parse
    let article = new Readability(dom.window.document).parse();

    // Done! The article content is in the textContent property
    console.log(color(article.textContent));
    reply(article.textContent)
  })
})
    break
    */
case 'topheadlines':
  
  // First lets get some search data from News API

// Build the URL we are going request. This will get articles related to Apple and sort them newest first
let dhongi = 'https://newsapi.org/v2/top-headlines/sources?bbc-news&apiKey=' +
'306032cefd134ab38660d7db51dd18d1';

// Make the request with axios' get() function
axios.get(dhongi).then(function(r1) {

  // At this point we will have some search results from the API. Take the first search result...
  let firstResult = r1.data.articles[0];

  // ...and download the HTML for it, again with axios
  axios.get(firstResult.url).then(function(r2) {

    // We now have the article HTML, but before we can use Readability to locate the article content we need jsdom to convert it into a DOM object
    let dom = new JSDOM(r2.data, {
      url: firstResult.url
    });

    // now pass the DOM document into readability to parse
    let article = new Readability(dom.window.document).parse();

    // Done! The article content is in the textContent property
    console.log(color(article.textContent));
    reply(article.textContent)
  })
})
  break
  case 'googlenews':
  const request = require('request');

const options = {
  method: 'GET',
  url: 'https://google-news1.p.rapidapi.com/search',
  qs: {
    q: `${text}`,
    country: 'ZW',
    lang: 'en',
    source: 'iharare.com',
    limit: '100',
    when: '30d'
  },
  headers: {
    'X-RapidAPI-Key': '837661b454msh274b6753ca80823p11c653jsn973bb2a55a34',
    'X-RapidAPI-Host': 'google-news1.p.rapidapi.com',
    useQueryString: true
  }
};

request(options, function (error, response, body) {
	if (error) throw new Error(error);

	reply(body);
});
break
case 'hackernews':
const drips = {
  method: 'GET',
  url: 'https://community-hacker-news-v1.p.rapidapi.com/topstories.json',
  qs: {print: 'pretty'},
  headers: {
    'X-RapidAPI-Key': '837661b454msh274b6753ca80823p11c653jsn973bb2a55a34',
    'X-RapidAPI-Host': 'community-hacker-news-v1.p.rapidapi.com',
    useQueryString: true
  }
};
let dhuripi = require('request')
dhuripi(drips, function (error, response, body) {
	if (error) throw new Error(error);
reply(body)
	console.log(body);
});
break
case 'gnews':
reply(mess.wait)
const dripbabe = {
  method: 'GET',
  url: 'https://google-news.p.rapidapi.com/v1/search',//By drips 
  qs: {q: `${text}`, country: 'ZW', lang: 'en'}, //put your country on string: country://
  headers: {
    'X-RapidAPI-Key': '837661b454msh274b6753ca80823p11c653jsn973bb2a55a34',// 3 request per hour
    'X-RapidAPI-Host': 'google-news.p.rapidapi.com',// if you with more request please visit https://rapidapi.com/newscatcher-api-newscatcher-api-default/api/google-news/pricing
    useQueryString: true
  }
};
let gnews = require('request')
gnews(dripbabe, function (error, response, body) {//removing credits is not an option
	if (error) throw new Error(error);
  reply(body);
	console.log(body);
});
break

case 'news2':
  reply(mess.wait)
const luckysure = {
  method: 'GET',
  url: 'https://free-news.p.rapidapi.com/v1/search',//By DRIPS
  qs: {q: `${text}`, lang: 'en'},
  headers: {
    'X-RapidAPI-Key': '837661b454msh274b6753ca80823p11c653jsn973bb2a55a34',// 1 request per second (unlimited)
    'X-RapidAPI-Host': 'free-news.p.rapidapi.com',//removing credtis is not an option
    useQueryString: true
  }
};
let stanto = require('request')
stanto(luckysure, function (error, response, body) {
	if (error) throw new Error(error);
   reply(body);
	console.log(body);
});
break
case 'playstore': case 'apk':
reply(mess.wait)
if(!q) return reply('what are you looking for?')
let play = await hx.playstore(q)
let storup = ''
for (let i of play){
 storup += `\n*「 𝐂𝐋𝐀𝐒𝐒𝐈𝐂 𝐒𝐓𝐎𝐑𝐄 」*\n
- ➟𝐍𝐚𝐦𝐞 : ${i.name}
- ➟𝐋𝐢𝐧𝐤 : ${i.link}\n
- ➟𝐃𝐞𝐯 : ${i.developer}
- ➟𝐃𝐞𝐯 𝐋𝐢𝐧𝐤 : ${i.link_dev}\n❉─────────────────────❉`
}
reply(storup)
break
case 'igsearch':
  const dripsig = {
    method: 'GET',
    url: 'https://instagram-data1.p.rapidapi.com/user/search',//By Drips
    qs: {keyword: `${text}`},
    headers: {
      'X-RapidAPI-Key': '837661b454msh274b6753ca80823p11c653jsn973bb2a55a34',// 25 request per month if you unlimited requests buy api here visit https://rapidapi.com/logicbuilder/api/instagram-data1/pricing
      'X-RapidAPI-Host': 'instagram-data1.p.rapidapi.com',//removing credits is not an option
      useQueryString: true
    }
  };
  let magwettta = require('request')
  magwettta(dripsig, function (error, response, body) {
    if (error) throw new Error(error);
    reply(body);
    console.log(body);
  });
  break
  case 'apkdl': case 'apkmod': case 'apkd': {      
  
  if (!text) return m.reply(`Use${prefix + command} vpn`) 
  let noh = require('./lib/myfunc2')                
  noh.rexdl(`${text}`).then(async (data) => {
  let sections = []   
  for (let i of data) {
  const list = {title: `${i.judul}`,
  rows: [
	    {
	     title: `${i.judul}`, 
	     rowId: `${prefix}donlod ${i.link}`,
	     description: `CATEGORY: ${i.kategori}\nPUBLISH: ${i.upload_date}\nINFORMATION: ${i.deskripsi}`
	    }, 
	    ]
     }
     sections.push(list)   
     }
  const sendm =  ZimBotInc.sendMessage(
      m.chat, 
      {
       text: `${ucapannya2} ${pushname} *Search Results From ${text} Click the button below to choose*`,
       footer: `© 𝙲𝙻𝙰𝚂𝚂𝙸𝙲 𝙱𝙾𝚃`,
       title: "*▊▊▊APK DOWNLOAD▊▊▊*",
       buttonText: "CLICK HERE",
       sections
      }, { quoted : m })                 
                }).catch((err) => {
                    reply(`*${text} Not found*`)
                })
            }
            break
            case 'donlod':  {  
              let dhupi = require('./lib/index.js')             
                              if (!text) return m.reply(`Use${prefix + command} whatsapp`)
                              if (!isUrl(args[0]) && !args[0].includes('https://rexdl.com/'))
                              
                         dhupi.rexdldown(`${text}`).then(async (anu) => {        
                         if (anu[0].size.split('MB')[0] >= 150) return reply('*File Over Limit* '+util.format(anu))
                         for (let i of anu) {    
                         linkye = `*▊▊▊APK DOWNLOAD▊▊▊*\n\n*TITLE:* ${i.title}\n*UPDATE:* ${i.up}\n*VERSION:* ${i.vers}\n*FILESIZE:* ${i.size}\n*URL:* \n*DESCRIPTION:* ${i.desc}\n\n*𝙲𝙻𝙰𝚂𝚂𝙸𝙲 𝙱𝙾𝚃*`         
                              ZimBotInc.sendMessage(m.chat, { image: await getBuffer(i.thumb), jpegThumbnail: await getBuffer(i.thumb), caption: `${linkye}` }, { quoted: m })
                              ZimBotInc.sendMessage(m.chat, {document: await getBuffer(i.link), mimetype: `application/vnd.android.package-archive`, fileName: `${i.title}`}, {quoted:m})  
                              }  
                              }).catch((err) => {
                                  reply(`*Failed When Downloading Media and Sending Files*`)
                              }) 
                            }
                              break
// https://hardianto.xyz/api/beta/hacker2?apikey=hardianto&pp=https://i.ibb.co/1s8T3sY/48f7ce63c7aa.jpg
  case 'ripmaker':
  if (!text) throw '*Enter a Link Query! Example: https://i.imgur.com/rANDwCP.jpeg*'
  var dripa = `https://hardianto.xyz/api/rip?image=${text}&apikey=hardianto` 
  dri = await getBuffer(dripa)
  ZimBotInc.sendMessage(m.chat, { image: dri,caption:'CLASSIC-BOT-V4' }, { quoted: m})

break// https://hardianto.xyz/api/beta/hacker2?apikey=hardianto&pp=https://i.ibb.co/1s8T3sY/48f7ce63c7aa.jpg
  case 'hackermaker':
  if (!text) throw '*Enter a Link Query! Example: https://i.imgur.com/rANDwCP.jpeg*'
  var dripa = `https://hardianto.xyz/api/beta/hacker2?apikey=hardianto&pp=${text}` 
  dri = await getBuffer(dripa)
  ZimBotInc.sendMessage(m.chat, { image: dri,caption:'CLASSIC-BOT-V4' }, { quoted: m})
break //https://hardianto.xyz/api/maker/carbon?code=const%20anto%20=%20require(%27pahala%27)&color=cyan&apikey=hardianto
 case 'codecolor':
    if (!text) throw '*Enter a text*'
    var dripa = `https://hardianto.xyz/api/maker/carbon?code=${text}&color=cyan&apikey=hardianto` 
    dri = await getBuffer(dripa)
    ZimBotInc.sendMessage(m.chat, { image: dri,caption:'CLASSIC-BOT-V4' }, { quoted: m})
  break 
case 'ipdomain':
    reply(mess.wait)
    const driphacker = {
      method: 'GET',
      url: 'https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation',
      qs: {ip: `${text}`, apikey: '873dbe322aea47f89dcf729dcc8f60e8'},
      headers: {
        'X-RapidAPI-Key': '837661b454msh274b6753ca80823p11c653jsn973bb2a55a34',
        'X-RapidAPI-Host': 'find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com',
        useQueryString: true
      }
    };
    let mhamha = require('request')
    mhamha(driphacker, function (error, response, body) {
      if (error) throw new Error(error);
       reply(body);
      console.log(body);
    });
    break
    case 'ip':
      reply(mess.wait)
      const dripsba = {
        method: 'GET',
        url: 'https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation',
        qs: {apikey: '873dbe322aea47f89dcf729dcc8f60e8'},
        headers: {
          'X-RapidAPI-Key': '837661b454msh274b6753ca80823p11c653jsn973bb2a55a34',
          'X-RapidAPI-Host': 'find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com',
          useQueryString: true
        }
      };
      let bhudhi = require('request')
      bhudhi(dripsba, function (error, response, body) {
        if (error) throw new Error(error);
        reply(body);
        console.log(body);
      });
break
case 'checknumber':
  reply(mess.wait)
  const dripska = {
    method: 'GET',
    url: 'https://phonenumbervalidatefree.p.rapidapi.com/ts_PhoneNumberValidateTest.jsp',
    qs: {number: `${text}`},
    headers: {
      'X-RapidAPI-Key': '837661b454msh274b6753ca80823p11c653jsn973bb2a55a34',
      'X-RapidAPI-Host': 'phonenumbervalidatefree.p.rapidapi.com',
      useQueryString: true
    }
  };
  let dhidhi = require('request')
  dhidhi(dripska, function (error, response, body) {
    if (error) throw new Error(error);
    reply(body);
    console.log(body);
  });
break
case 'veriphone':
  reply(mess.wait)
  const dripdrop = {
    method: 'GET',
    url: 'https://veriphone.p.rapidapi.com/verify',
    qs: {phone: `${text}`},
    headers: {
      'X-RapidAPI-Key': '837661b454msh274b6753ca80823p11c653jsn973bb2a55a34',
      'X-RapidAPI-Host': 'veriphone.p.rapidapi.com',
      useQueryString: true
    }
  };
  let mhati = require('request')
  mhati(dripdrop, function (error, response, body) {
    if (error) throw new Error(error);
    reply(body);
    console.log(body);
  });
  break
  
case 'cry':case 'kill':case 'hug':case 'pat':case 'lick':case 'kiss':case 'bite':case 'yeet':case 'neko':case 'bully':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'smile':case 'wave':case 'awoo':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'cuddle':case 'highfive':case 'shinobu':case 'megumin':case 'handhold':
reply(mess.wait)
axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
ZimBotInc.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
break
case 'whois':
  reply(mess.wai)
  var ip = ''; // Leave blank to lookup current IP address
var XMLHttp = new XMLHttpRequest();
XMLHttp.onreadystatechange = function() {
	if(this.readyState == 4 && this.status == 200) {
		var ipwhois = JSON.parse(this.responseText);
		console.log(ipwhois.country + ' ' + ipwhois.flag.emoji); // Output: United States 🇺🇸
	}
};
XMLHttp.open('GET', 'https://ipwho.is/' + ip, true);
XMLHttp.send();
break
// Upload status
case 'upsw': case 'uploadstatus': {
if (!isCreator) return reply(global.owner)
 ZimBotInc.sendMessage("status@broadcast", { text: q })
 reply("*Uploaded Status*")
 }
 break
//----OTHERS---\\
case 'weather':
  if (!args[0]) throw " please provide place or location name"
  try {
    const response = axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${args}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273`
    )
    const res = await response
    const name = res.data.name
    const Country = res.data.sys.country
    const Weather = res.data.weather[0].description
    const Temperature = res.data.main.temp + "°C"
    const Minimum_Temperature = res.data.main.temp_min + "°C"
    const Maximum_Temperature = res.data.main.temp_max + "°C"
    const Humidity = res.data.main.humidity + "%"
    const Wind = res.data.wind.speed + "km/h"
    const wea = `📍𝐏𝐥𝐚𝐜𝐞: ${name}\n➟𝐂𝐨𝐮𝐧𝐭𝐫𝐲 : ${Country}\n➟𝐂𝐨𝐮𝐧𝐭𝐫𝐲 : ${Weather}\n➟𝐓𝐞𝐦𝐩 : ${Temperature}\n➟𝐌𝐢𝐧𝐢𝐦𝐮𝐦 𝐓𝐞𝐦𝐩 : ${Minimum_Temperature}\n➟𝐌𝐚𝐱 𝐓𝐞𝐦 : ${Maximum_Temperature}\n➟𝐇𝐮𝐦𝐢𝐝𝐢𝐭𝐲 : ${Humidity}\n➟𝐖𝐢𝐧𝐝 : ${Wind}
  `

    reply(wea)
  } catch (e) {
    return "Error location not found!!!"
  }
break
case 'wiki':
  const { wikipedia } = require('@bochilteam/scraper')
  if (!text) throw `Exapmle: ${command} Minecraft`
  let jsonp = await wikipedia(text)
  reply(`
🔎${r} Ressult from: *${text}*
🖼️${r} Image: ${jsonp.img}
📖${r} Articles: 
${jsonp.articles}
`.trim())

break
case 'ytcoment':
  if (!text) throw 'No Text'
ZimBotInc.sendMessage(m.chat, ('https://some-random-api.ml', '/canvas/youtube-comment', {
avatar: await ZimBotInc.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
comment: text,
username: ZimBotInc.getName(m.sender)
}), 'error.png', '*Nih Kak*', m)
break
 // Send image or video from url
 case 'sendimage':
 ZimBotInc.sendMessage(m.chat, { image: { url: q }, fileLength: "5000000000"}, { m })
 break
 case 'sendvideo':
 ZimBotInc.sendMessage(m.chat, { video: { url: q }, fileLength: "5000000000" }, { m })
 
break
case 'todocument': {
if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
m.reply(mess.wait)
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
ZimBotInc.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${ZimBotInc.user.name}.mp3`}, { quoted : m })
}
break

case 'searchgc':
if (!q) return reply(`Example: ${prefix}searchgroups hacker`)
mel.linkwa(q)
.then(result => {
let res = '❰ *WHATSAPP GROUP LINKS* ❱\n\n'
for (let i of result) {
res += `➟𝐍𝐚𝐦𝐞 : *${i.nama}\n➟𝐋𝐢𝐧𝐤 : ${i.link}\n\n`
}
reply(res)
});
break

 case 'wallpaper': {
   if (!text) throw '*give me text to search👀*'
let { wallpaper } = require('./lib/scraper')
   anu = await wallpaper(text)
   result = anu[Math.floor(Math.random() * anu.length)]
let buttons = [
  {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'NEXT'}, type: 1}
   ]
   let buttonMessage = {
  image: { url: result.image[0] },
  caption: `🔮𝗧𝗜𝗧𝗟𝗘 : ${result.title}\n🔮𝗖𝗔𝗧𝗘𝗚𝗢𝗥𝗬 : ${result.type}\n🔮𝗗𝗘𝗧𝗔𝗜𝗟 : ${result.source}\n🔮𝗠𝗘𝗗𝗜𝗔 𝗨𝗥𝗟 : ${result.image[2] || result.image[1] || result.image[0]}`,
  footer: ZimBotInc.user.name,
  buttons: buttons,
  headerType: 4
   }
   ZimBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
 }
 break
 case 'wikimedia': {
   if (!text) throw '*give me text so search👀*'
let { wikimedia } = require('./lib/scraper')
   anu = await wikimedia(text)
   result = anu[Math.floor(Math.random() * anu.length)]
   let buttons = [
  {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
   ]
   let buttonMessage = {
  image: { url: result.image },
  caption: `🔮 𝗧𝗜𝗧𝗟𝗘 : ${result.title}\n🔮 𝗦𝗢𝗨𝗥𝗖𝗘 : ${result.source}\n🔮 𝗠𝗘𝗗𝗜𝗔 𝗨𝗥𝗟 : ${result.image}`,
  footer: ZimBotInc.user.name,
  buttons: buttons,
  headerType: 4
   }
   ZimBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
 }
 
break


   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
   try {
   let set
   if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
   if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
   if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
   if (/earrape/.test(command)) set = '-af volume=12'
   if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
   if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
   if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
   if (/reverse/.test(command)) set = '-filter_complex "areverse"'
   if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
   if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
   if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
   if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
   if (/audio/.test(mime)) {
   replay(mess.wait)
   let media = await ZimBotInc.downloadAndSaveMediaMessage(quoted)
   let ran = getRandom('.mp3')
   exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
   fs.unlinkSync(media)
   if (err) return reply(err)
   let buff = fs.readFileSync(ran)
   ZimBotInc.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
   fs.unlinkSync(ran)
   })
   } else reply(`Reply to the audio you want to change with caption *${prefix + command}*`)
   } catch (e) {
   reply(e)
   }
   break
 case 'setcmd': {
   if (!m.quoted) throw 'Reply Message!'
   if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
   if (!text) throw `where is the command`
   let hash = m.quoted.fileSha256.toString('base64')
   if (global.db.sticker[hash] && global.db.sticker[hash].locked) throw 'You have no permission to change this sticker command'
   global.db.sticker[hash] = {
  text,
  mentionedJid: m.mentionedJid,
  creator: m.sender,
  at: + new Date,
  locked: false,
   }
   reply(`Done!`)
 }
 break
 case 'delcmd': {
   let hash = m.quoted.fileSha256.toString('base64')
   if (!hash) throw `No hashes`
   if (global.db.sticker[hash] && global.db.sticker[hash].locked) throw 'You have no permission to delete this sticker command' 
   delete global.db.sticker[hash]
   reply(`Done!`)
 }
 break
 case 'listcmd': {
   let teks = `
*Hash List*
Info: *bold* hash is locked
${Object.entries(global.db.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
   ZimBotInc.sendText(m.chat, teks, m, { mentions: Object.values(global.db.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
 }
 break
 case 'lockcmd': {
   if (!isCreator) throw global.owner
   if (!m.quoted) throw 'Reply Message!'
   if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
   let hash = m.quoted.fileSha256.toString('base64')
   if (!(hash in global.db.sticker)) throw 'Hash not found in database'
   global.db.sticker[hash].locked = !/^un/i.test(command)
   reply('Done!')
 }
 break
 case 'addmsg': {
   if (!m.quoted) throw 'Reply Message You Want To Save In Database'
   if (!text) throw `Example : ${prefix + command} message name`
   let msgs = global.db.database
   if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
   msgs[text.toLowerCase()] = quoted.fakeObj
reply(`Successfully added message in message list as '${text}'
    
Access with ${prefix}getmsg ${text}

View list of message with ${prefix}listmsg`)
 }
 break
 case 'getmsg': {
   if (!text) throw `Example : ${prefix + command} msg name\n\nView message list with ${prefix}listmsg`
   let msgs = global.db.database
   if (!(text.toLowerCase() in msgs)) throw `'${text}' not registered in message list`
   ZimBotInc.copyNForward(m.chat, msgs[text.toLowerCase()], true)
 }
 break
 case 'listmsg': {
   let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
let seplit = Object.entries(global.db.database).map(([nama, isi]) => { return { nama, ...isi } })
let teks = '❰ *LIST DATABASE* ❱\n\n'
for (let i of seplit) {
    teks += `🧸*𝗡𝗔𝗠𝗘 :* ${i.nama}\n🧸*𝗧𝗬𝗣𝗘 :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
}
reply(teks)
    }
    
break
  
  
 case 'delmsg': case 'deletemsg': {
let msgs = global.db.database
if (!(text.toLowerCase() in msgs)) return reply(`'${text}' not listed in the message list`)
delete msgs[text.toLowerCase()]
reply(`Successfully deleted '${text}' from the message list`)
 }
   
break

 case 'public': {
   if (!isCreator) throw global.owner
   ZimBotInc.public = true
   reply('𝗖𝗹𝗮𝘀𝘀𝗶𝗰 𝗯𝗼𝘁 𝗻𝗼𝘄 𝘄𝗼𝗿𝗸𝗶𝗻𝗴 𝗮𝘀 𝗽𝘂𝗯𝗹𝗶𝗰')
 }// https://hardianto.xyz/api/rip?image=https://i.imgur.com/rANDwCP.jpeg&apikey=hardianto
 break
 case 'attp': {
  reply(mess.wait)
  if (!text) throw `*Example : ${prefix + command} drips hi*`
  await ZimBotInc.sendMedia(m.chat, `https://hardianto.xyz/api/maker/attp?text=${text}&apikey=hardianto`,'Classic', 'BOT M D', m, {asSticker: true}).catch((err) => m.reply('*error while sending sticker*'))
            }
            break
/*case 'ripmaker':
  reply(mess.wait)
  try{
  ripdri = await axios(`https://hardianto.xyz/api/rip?image=https://i.imgur.com/rANDwCP.jpeg&apikey=hardianto`)
  stalloni = await getBuffer(ripdri)
  ZimBotInc.sendMessage(from, {image:stalloni},{quoted:m})
  } catch (e) {error("Error")}
    reply(mess.wait)*/
            
 case 'self': {
   if (!isCreator) throw global.owner
   ZimBotInc.public = false
   reply('𝘾𝙡𝙖𝙨𝙨𝙞𝙘 𝗯𝗼𝘁 𝗻𝗼𝘄 𝘄𝗼𝗿𝗸𝗶𝗻𝗴 𝗮𝘀 𝗽𝗿𝗶𝘃𝗮𝘁𝗲')
 }
 break
 case 'ping': case 'Speed': case 'statusbot': case 'p': {
	const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
࿉ 𝐁𝐎𝐓 𝐒𝐏𝐄𝐄𝐃 *${latensi.toFixed(4)}* 𝐌/𝐒
                `.trim()
                }

 break
 case 'owner': case 'creator': {
 ZimBotInc.sendContact(m.chat, global.pemilik, m)
const devsound = fs.readFileSync('./Classic/bot.mp3')
ZimBotInc.sendMessage(m.chat, { audio: devsound, mimetype: 'audio/mp4', ptt: true, quoted: mudratunha})
 }
 
 break
 case 'beetunha':
const hahahe = {
  method: 'GET',
  url: 'https://anime-quotes1.p.rapidapi.com/api/available/anime',
  headers: {
    'X-RapidAPI-Key': '837661b454msh274b6753ca80823p11c653jsn973bb2a55a34',
    'X-RapidAPI-Host': 'anime-quotes1.p.rapidapi.com'
  }
};
let requestt = require('request')
requestt(hahahe, function (error, response, body) {
	if (error) throw new Error(error);
   reply(body);
	console.log(body);
});
break
case 'tes': case 'test': case 'alive': case 'bot': case 'robot': case 'zimbot': case 'drips': case 'menu': {
ram9000 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
timestampe = speed();
latensie = speed() - timestampe
  anu = `
*ᴜᴘᴛɪᴍᴇ :* ${runtime(process.uptime())}

┌───❴❏ 𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕4 ❏❵╼╼
┊➢ ᴡᴇʟᴄᴏᴍᴇ
└───────────●

┌───❴❏ 𝐀𝐁𝐎𝐔𝐓 ⧠❵╼╼
┊➟𝐍𝐚𝐦𝐞 :  ${pushname}
┊➟𝐍𝐮𝐦𝐛𝐞𝐫 : wa.me/${m.sender.split('@')[0]}
┊➟𝐑𝐚𝐦 : ${ram9000}
┊➟𝐃𝐞𝐯𝐢𝐜𝐞 : ${os.type()}
┊➟𝐓𝐨𝐭𝐚𝐥 𝐔𝐬𝐞𝐫 : ${Object.keys(global.db.users).length}
└───────────●
└───────────●
`
const aliveer = fs.readFileSync('./Classic/alive.mp3')
ZimBotInc.sendMessage(m.chat, { audio: aliveer, mimetype: 'audio/mp4', ptt: true, quoted: mudratunha})
let buttoni = [
        {buttonId: `sc`, buttonText: {displayText: 'SOURCE CODE'}, type: 1},
        {buttonId: `owner`, buttonText: {displayText: 'OWNER'}, type: 1},
        {buttonId: `allmenu`, buttonText: {displayText: '©MENU'}, type: 1},
        ]
        let buttonMessage = {
        document: fs.readFileSync('./lib/tes.xlsx'),
        mimetype: dripsee,
        jpegThumbnail: fs.readFileSync('./drips.jpg'),
        fileName: `ᴢɪᴍ ʙᴏᴛ ɪɴᴄ`,
        fileLength: 99999999999999,
        caption: anu,
        footer: `⦿ɢɪᴛʜᴜʙ: https://youtube.com/@zim-bot \n®ᴢɪᴍʙᴏᴛɪɴᴄ 2023`,
        buttons: buttoni,
        headerType: 4,
        contextInfo: { externalAdReply:{
        title:"𝙲𝙻𝙰𝚂𝚂𝙸𝙲 𝙱𝙾𝚃",
        body:"➢𝙰𝙻𝙻 𝙷𝙰𝙸𝙻 𝚃𝙾 𝙺𝙸𝙽𝙶 𝚂𝙰𝙼 \n➢𝙲𝙻𝙰𝚂𝚂𝙸𝙲 𝙱𝙾𝚃 2024",
        showAdAttribution: true,
        mediaType:2,
        thumbnail: fs.readFileSync('./drips.jpg'),
        mediaUrl:`https://chat.whatsapp.com/EPSGKau0IVi7J5lyOJO7Jk`, 
        sourceUrl: `https://chat.whatsapp.com/EPSGKau0IVi7J5lyOJO7Jk`,
        }}
        }
        ZimBotInc.sendMessage(m.chat, buttonMessage)
      
    }
break
  case 'bug': case 'report': {
  if(!text) throw `Enter The Bug Example\n\n${command} Menu Error `
  ZimBotInc.sendMessage(`258869103969@s.whatsapp.net`, {text: `*Bug Report From:* wa.me/${m.sender.split("@")[0]}
Report Message: ${text}` })
reply(`*Successfully reported to the owner\n\nPlease make sure the bug is valid, if you play with this, use this feature again and again for no reason, you will be banned for using zim bot*`)
  }
break 
case 'listmenu':             
  let sections = []   
  let listmenu = [`allmenu`,`animemenu`,`groupmenu`,`toolmenu`,`downloadmenu`,`searchmenu`,`photofiltermenu`,`textpromenu`,`photooxymenu`,`ownermenu`,`ephotomenu`,`convertmenu`,`databasemenu`,`rpgmenu`,`donasi`]
  let listmenuu = [`ALL MENU`,`ANIME MENU`,`GROUP MENU`,`TOOL MENU`,`DOWNLOAD MENU`,`SEARCH MENU`,`PHOTOFILTER MENU`,`TEXTPRO MENU`,`PHOTOOXY MENU`,`OWNER MENU`,`EPHOTO MENU`,`CONVERT MENU`,`DATABASE MENU`,`RPG MENU`,`DONATE`]
  
  let nombor = 1
  let startnum = 0
  
  for (let x of listmenu) {
  const list = {title: 'MENU NUMBER ' + nombor++,                                                                             //by drips
  rows: [
  {
  title: `${listmenuu[startnum++]}`,
  
  rowId: `${prefix}${x}`
  }, 
  ]
  }
  sections.push(list)   
  }
  const sendm =  ZimBotInc.sendMessage(
  m.chat, 
  {
  text: `
┌───❴❏ 𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕4 ❏❵╼╼
┊➢ᴡᴇʟᴄᴏᴍᴇ
└───────────●
┌───❴ ⧠ 𝐔𝐒𝐄𝐑 𝐈𝐍𝐅𝐎 ❏❵╼╼
┊➟𝐍𝐚𝐦𝐞 : ${pushname}
┊➟𝐍𝐮𝐦𝐛𝐞𝐫 : wa.me/${m.sender.split('@')[0]}
┊➟𝐑𝐚𝐧𝐤 : ${role}
┊➟𝐒𝐭𝐚𝐭𝐮𝐬 : ${elit}
┊➟𝐌𝐨𝐧𝐞𝐲 : $${(getBalance(sender, balance))}
┊➟𝐗𝐩 : ${getLevelingXp(sender)}/${reqXp}
┊➟𝐋𝐞𝐯𝐞𝐥 : ${getLevelingLevel(sender)}
┊➟𝐌𝐨𝐧𝐞𝐲 : $${(getBalance(sender, balance))}
┊➟𝐆𝐨𝐥𝐝 : ${getEmas(sender)}
┊➟𝐈𝐫𝐨𝐧 : ${getBesi(sender)}
┊➟ 𝐒𝐢𝐥𝐯𝐞𝐫 : ${getFish(sender)}
┊➟ 𝐃𝐢𝐚𝐦𝐨𝐧𝐝 : ${getDm(sender)}
┊➟𝐕𝐞𝐫𝐬𝐢𝐨𝐧 : ${os.version()}
┊➟𝐓𝐨𝐭𝐚𝐥 𝐔𝐬𝐞𝐫 : ${Object.keys(global.db.users).length}
└───────────●
`,
  footer: `𝙲𝙻𝙰𝚂𝚂𝙸𝙲 𝙱𝙾𝚃`,
  title: `*LIST MENU*`,
  jpegThumbnail: fs.readFileSync('./drips.jpg'),
  buttonText: "CLICK HERE",
  sections
  }, { quoted : m })
  break
  case 'allmenu': case 'Classicmenu': {
ZimBotInc.sendMessage(m.chat, { react: { text: `${global.reactmoji}`, key: m.key }})
let datane = fs.readFileSync('./lib/random.js')
jsonData = JSON.parse(datane)
randIndex = Math.floor(Math.random() * jsonData.length)
randKey = jsonData[randIndex];
buffer = await getBuffer(randKey.result)
const { device_manufacturer } = require('os')
ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
timestampe = speed();
latensie = speed() - timestampe
anu = `
➟𝐔𝐩𝐭𝐢𝐦𝐞 : ${runtime(process.uptime())}

┌───❴❏ 𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕4 ❏❵╼╼
┊➢ᴡᴇʟᴄᴏᴍᴇ
└───────────●

┌───❴❏ 𝐀𝐁𝐎𝐔𝐓 ❵╼╼
┊❗ɴᴀᴍᴇ :  ${pushname}
┊❕ɴᴜᴍʙᴇʀ : wa.me/${m.sender.split('@')[0]}
┊❗ʀᴀᴍ : ${ram2}
┊❗ᴅᴇᴠɪᴄᴇ : ${os.type()}
┊❕ᴛᴏᴛᴀʟ ᴜsᴇʀs : ${Object.keys(global.db.users).length}
└───────────●
└───────────●

┌───❴❏ 𝐎𝐖𝐍𝐄𝐑𝐌𝐄𝐍𝐔
┊➟𝐝𝐨𝐰𝐧𝐥𝐨𝐚𝐝𝐦𝐞𝐧𝐮
┊➟𝐠𝐫𝐨𝐮𝐩𝐦𝐞𝐧𝐮
┊➟𝐚𝐧𝐢𝐦𝐞𝐦𝐞𝐧𝐮
┊➟𝐬𝐞𝐚𝐫𝐜𝐡𝐦𝐞𝐧𝐮
┊➟𝐨𝐰𝐧𝐞𝐫𝐦𝐞𝐧𝐮
┊➟𝐝𝐚𝐭𝐚𝐛𝐚𝐬𝐞𝐦𝐞𝐧𝐮
┊➟𝐭𝐞𝐱𝐭𝐩𝐫𝐨𝐦𝐞𝐧𝐮
┊➟𝐞𝐩𝐡𝐨𝐭𝐨𝐦𝐞𝐧𝐮
┊➟𝐭𝐨𝐨𝐥𝐬𝐦𝐞𝐧𝐮
┊➟𝐜𝐨𝐧𝐯𝐞𝐫𝐭𝐦𝐞𝐧𝐮
┊➟𝐛𝐮𝐠𝐦𝐞𝐧𝐮
└───────────●

┌──❴⧠ 𝐓𝐎𝐎𝐋𝐌𝐄𝐍𝐔 ⧠❵╼╼
┊➟𝐢𝐩 ->-
┊➟𝐢𝐩𝐝𝐨𝐦𝐚𝐢𝐧 -𝐝𝐨𝐦𝐚𝐢𝐧 𝐧𝐚𝐦𝐞-
┊➟𝐜𝐨𝐝𝐞𝐜𝐨𝐥𝐨𝐫 -𝐭𝐞𝐱𝐭-
┊➟𝐡𝐚𝐜𝐤𝐞𝐫𝐦𝐚𝐤𝐞𝐫 -𝐩𝐢𝐜 𝐮𝐫𝐥-
┊➟𝐜𝐡𝐞𝐜𝐤𝐧𝐮𝐦𝐛𝐞𝐫 -𝐧𝐮𝐦𝐛𝐞𝐫-
┊➟𝐯𝐞𝐫𝐢𝐩𝐡𝐨𝐧𝐞 -𝐧𝐮𝐦𝐛𝐞𝐫-
┊➟𝐰𝐞𝐚𝐭𝐡𝐞𝐫 -𝐩𝐥𝐚𝐜𝐞-
┊➟𝐚𝐭𝐭𝐩 -𝐭𝐞𝐱𝐭-
┊➟𝐬𝐬𝐰𝐞𝐛-𝐡𝐩 -𝐮𝐫𝐥-
┊➟𝐬𝐡𝐨𝐫𝐭𝐥𝐢𝐧𝐤 -𝐮𝐫𝐥-
┊➟𝐬𝐬𝐰𝐞𝐛-𝐩𝐜 -𝐮𝐫𝐥-
┊➟𝐬𝐡𝐨𝐫𝐭𝐥𝐢𝐧𝐤𝐜𝐮𝐭𝐭𝐥𝐲 -𝐮𝐫𝐥-
┊➟𝐬𝐡𝐨𝐫𝐭𝐥𝐢𝐧𝐤𝐢𝐬𝐠𝐝 -𝐮𝐫𝐥-
┊➟𝐛𝐫𝐚𝐢𝐧𝐥𝐲 -𝐪𝐮𝐞𝐫𝐲-
└───❴❏ 𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕4 ❏❵╼╼

┌───❴⧠ 𝐎𝐖𝐍𝐄𝐑𝐌𝐄𝐍𝐔 ❏❵╼╼
┊➟𝐜𝐡𝐚𝐭𝐛𝐨𝐭 𝐨𝐧/𝐨𝐟𝐟
┊➟𝐬𝐞𝐭𝐦𝐞𝐧𝐮 -𝐨𝐩𝐭𝐢𝐨𝐧-
┊➟𝐜𝐡𝐞𝐜𝐤𝐮𝐩𝐝𝐚𝐭𝐞 
┊➟𝐮𝐩𝐝𝐚𝐭𝐞𝐧𝐨𝐰
┊➟𝐛𝐜 -𝐭𝐞𝐱𝐭-
┊➟𝐛𝐜𝐚𝐥𝐥 -𝐭𝐞𝐱𝐭-
┊➟𝐛𝐜𝐭𝐞𝐱𝐭 -𝐭𝐞𝐱𝐭-
┊➟𝐛𝐜𝐯𝐢𝐝𝐞𝐨 -𝐦𝐞𝐝𝐢𝐚-
┊➟𝐛𝐜𝐚𝐮𝐝𝐢𝐨 -𝐦𝐞𝐝𝐢𝐚-
┊➟𝐛𝐜𝐢𝐦𝐚𝐠𝐞 -𝐦𝐞𝐝𝐢𝐚-
┊➟𝐛𝐜𝐥𝐨𝐜  -𝐭𝐞𝐱𝐭-
┊➟𝐛𝐜𝐠𝐜 -𝐭𝐞𝐱𝐭-
┊➟𝐥𝐨𝐜𝐤𝐜𝐦𝐝
┊➟𝐬𝐞𝐭𝐬𝐭𝐚𝐭𝐮𝐬 -𝐭𝐞𝐱𝐭-
┊➟𝐬𝐞𝐭𝐩𝐩𝐛𝐨𝐭 -𝐨𝐰𝐧𝐞𝐫-
┊➟𝐛𝐥𝐨𝐜𝐤 -𝐨𝐰𝐧𝐞𝐫-
┊➟𝐮𝐧𝐛𝐥𝐨𝐜𝐤 -𝐨𝐰𝐧𝐞𝐫-
┊➟𝐣𝐨𝐢𝐧 -𝐨𝐰𝐧𝐞𝐫-
┊➟𝐥𝐞𝐚𝐯𝐞 -𝐨𝐰𝐧𝐞𝐫-
┊➟𝐜𝐡𝐚𝐭 -𝐨𝐰𝐧𝐞𝐫-
┊➟𝐩𝐮𝐛𝐥𝐢𝐜
┊➟𝐬𝐞𝐥𝐟
┊➟𝐠𝐫𝐨𝐮𝐩𝐨𝐧𝐥𝐲
└───❴❏ 𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕4 ❏❵╼╼


┌───❴❏ 𝐆𝐑𝐎𝐔𝐏𝐌𝐄𝐍𝐔 ⧠❵╼╼
┊➟𝐚𝐝𝐝 -𝐚𝐝𝐦𝐢𝐧-
┊➟𝐤𝐢𝐜𝐤 -𝐚𝐝𝐦𝐢𝐧-
┊➟𝐰𝐞𝐥𝐜𝐨𝐦𝐞 𝐨𝐧/𝐨𝐟𝐟 -𝐚𝐝𝐦𝐢𝐧-
┊➟𝐥𝐢𝐬𝐭𝐩𝐜 
┊➟𝐥𝐢𝐬𝐭𝐠𝐜
┊➟𝐠𝐫𝐨𝐮𝐩𝐢𝐧𝐟𝐨 -𝐚𝐝𝐦𝐢𝐧-
┊➟𝐚𝐧𝐭𝐢𝐯𝐧 -𝐚𝐝𝐦𝐢𝐧-
┊➟𝐚𝐧𝐭𝐢𝐩𝐡𝐨𝐭𝐨 -𝐚𝐝𝐦𝐢𝐧-
┊➟𝐚𝐧𝐭𝐢𝐬𝐭𝐢𝐜𝐤𝐞𝐫 -𝐚𝐝𝐦𝐢𝐧-
┊➟𝐚𝐧𝐭𝐢𝐯𝐢𝐝𝐞𝐨 -𝐚𝐝𝐦𝐢𝐧-
┊➟𝐚𝐧𝐭𝐢𝐥𝐢𝐧𝐤𝐚𝐥𝐥 -𝐚𝐝𝐦𝐢𝐧-
┊➟𝐚𝐧𝐭𝐢𝐢𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦 -𝐚𝐝𝐦𝐢𝐧-
┊➟𝐚𝐧𝐭𝐢𝐭𝐞𝐥𝐞𝐠𝐫𝐚𝐦 -𝐚𝐝𝐦𝐢𝐧-
┊➟𝐚𝐧𝐭𝐢𝐥𝐢𝐧𝐤 -𝐚𝐝𝐦𝐢𝐧-
┊➟𝐚𝐧𝐭𝐢𝐲𝐭 -𝐚𝐝𝐦𝐢𝐧-
┊➟𝐚𝐧𝐭𝐢𝐛𝐮𝐥𝐞 -𝐚𝐝𝐦𝐢𝐧-
┊➟𝐚𝐧𝐭𝐢𝐭𝐢𝐤𝐭𝐨𝐤 -𝐚𝐝𝐦𝐢𝐧-
┊➟𝐚𝐧𝐭𝐢𝐟𝐚𝐜𝐞𝐛𝐨𝐨𝐤 -𝐚𝐝𝐦𝐢𝐧-
┊➟𝐚𝐧𝐭𝐢𝐯𝐢𝐫𝐮𝐬 -𝐚𝐝𝐦𝐢𝐧-
┊➟𝐚𝐧𝐭𝐢𝐛𝐚𝐝𝐰𝐨𝐫𝐝 -𝐚𝐝𝐦𝐢𝐧-
┊➟𝐚𝐧𝐭𝐢𝐰𝐚𝐦𝐞 -𝐚𝐝𝐦𝐢𝐧-
┊➟𝐠𝐫𝐨𝐮𝐩 -𝐨𝐩𝐭𝐢𝐨𝐧𝐬-
┊➟𝐦𝐮𝐭𝐞
┊➟𝐠𝐫𝐨𝐮𝐩𝐢𝐧𝐟𝐨
┊➟𝐭𝐫𝐮𝐭𝐡 
┊➟𝐝𝐚𝐫𝐞
┊➟𝐬𝐥𝐨𝐭
┊➟𝐦𝐚𝐭𝐡
┊➟𝐯𝐨𝐭𝐞
┊➟𝐝𝐞𝐯𝐨𝐭𝐞
┊➟𝐜𝐞𝐤𝐯𝐨𝐭𝐞
┊➟𝐝𝐞𝐥𝐞𝐭𝐞𝐯𝐨𝐭𝐞
┊➟𝐮𝐩𝐯𝐨𝐭𝐞
┊➟𝐬𝐞𝐭𝐬𝐮𝐛𝐣𝐞𝐜𝐭 -𝐚𝐝𝐦𝐢𝐧-
┊➟𝐬𝐞𝐭𝐝𝐞𝐬𝐜 -𝐚𝐝𝐦𝐢𝐧-
┊➟𝐬𝐞𝐭𝐩𝐩𝐠𝐫𝐨𝐮𝐩 -𝐚𝐝𝐦𝐢𝐧-
┊➟𝐭𝐚𝐠𝐚𝐥𝐥 -𝐚𝐝𝐦𝐢𝐧-
┊➟𝐡𝐢𝐝𝐞𝐭𝐚𝐠 -𝐚𝐝𝐦𝐢𝐧-
┊➟𝐞𝐩𝐡𝐞𝐦𝐞𝐫𝐚𝐥
┊➟𝐝𝐞𝐦𝐨𝐭𝐞 -𝐚𝐝𝐦𝐢𝐧-
┊➟𝐩𝐫𝐨𝐦𝐨𝐭𝐞 -𝐚𝐝𝐦𝐢𝐧-
┊➟𝐞𝐝𝐢𝐭𝐢𝐧𝐟𝐨 -𝐚𝐝𝐦𝐢𝐧-
└───❴❏ 𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕4 ❏❵╼╼


┌───❴❏ 𝐓𝐄𝐗𝐓𝐏𝐑𝐎𝐌𝐄𝐍𝐔 ❏❵╼╼
┊➟𝐜𝐚𝐧𝐝𝐲 -𝐭𝐞𝐱𝐭-
┊➟𝐜𝐡𝐫𝐢𝐬𝐭𝐦𝐚𝐬 -𝐭𝐞𝐱𝐭-
┊➟3𝐝𝐜𝐡𝐫𝐢𝐬𝐭𝐦𝐚𝐬 -𝐭𝐞𝐱𝐭-
┊➟𝐬𝐩𝐚𝐫𝐤𝐥𝐞𝐜𝐡𝐫𝐢𝐬𝐭𝐦𝐚𝐬 -𝐭𝐞𝐱𝐭-
┊➟𝐝𝐞𝐞𝐩𝐬𝐞𝐚 -𝐭𝐞𝐱𝐭-
┊➟𝐬𝐜𝐢𝐟𝐢 -𝐭𝐞𝐱𝐭-
┊➟𝐫𝐚𝐢𝐧𝐛𝐨𝐰2 -𝐭𝐞𝐱𝐭-
┊➟𝐰𝐚𝐭𝐞𝐫𝐩𝐢𝐩𝐞 -𝐭𝐞𝐱𝐭-
┊➟𝐬𝐩𝐨𝐨𝐤𝐲 -𝐭𝐞𝐱𝐭-
┊➟𝐩𝐞𝐧𝐜𝐢𝐥 -𝐭𝐞𝐱𝐭-
┊➟𝐜𝐢𝐫𝐜𝐮𝐢𝐭 -𝐭𝐞𝐱𝐭-
┊➟𝐝𝐢𝐬𝐜𝐨𝐯𝐞𝐫𝐲 -𝐭𝐞𝐱𝐭-
┊➟𝐦𝐞𝐭𝐚𝐥𝐢𝐜 -𝐭𝐞𝐱𝐭-
┊➟𝐟𝐢𝐜𝐭𝐢𝐨𝐧 -𝐭𝐞𝐱𝐭-
┊➟𝐝𝐞𝐦𝐨𝐧 -𝐭𝐞𝐱𝐭-
┊➟𝐭𝐫𝐚𝐧𝐬𝐟𝐨𝐫𝐦𝐞𝐫 -𝐭𝐞𝐱𝐭-
┊➟𝐛𝐞𝐫𝐫𝐲 -𝐭𝐞𝐱𝐭-
┊➟𝐭𝐡𝐮𝐧𝐝𝐞𝐫 -𝐭𝐞𝐱𝐭-
┊➟3𝐝𝐬𝐭𝐨𝐧𝐞2 -𝐭𝐞𝐱𝐭-
┊➟𝐧𝐞𝐨𝐧𝐥𝐢𝐠𝐡𝐭 -𝐭𝐞𝐱𝐭-
┊➟𝐠𝐥𝐢𝐭𝐜𝐡 -𝐭𝐞𝐱𝐭-
┊➟𝐡𝐚𝐫𝐫𝐲𝐩𝐨𝐭𝐭𝐞𝐫 -𝐭𝐞𝐱𝐭-
┊➟𝐛𝐫𝐨𝐤𝐞𝐧𝐠𝐥𝐚𝐬𝐬 -𝐭𝐞𝐱𝐭-
┊➟𝐩𝐚𝐩𝐞𝐫𝐜𝐮𝐭 -𝐭𝐞𝐱𝐭-
┊➟𝐰𝐚𝐭𝐞𝐫𝐜𝐨𝐥𝐨𝐫 -𝐭𝐞𝐱𝐭-
┊➟𝐦𝐮𝐥𝐭𝐢𝐜𝐨𝐥𝐨𝐫 -𝐭𝐞𝐱𝐭-
┊➟𝐧𝐞𝐨𝐧𝐝𝐞𝐯𝐢𝐥 -𝐭𝐞𝐱𝐭-
┊➟𝐮𝐧𝐝𝐞𝐫𝐰𝐚𝐭𝐞𝐫 -𝐭𝐞𝐱𝐭-
┊➟𝐠𝐫𝐚𝐟𝐟𝐢𝐭𝐢𝐛𝐢𝐤𝐞 -𝐭𝐞𝐱𝐭-
┊➟𝐬𝐧𝐨𝐰 -𝐭𝐞𝐱𝐭-
┊➟𝐜𝐥𝐨𝐮𝐝 -𝐭𝐞𝐱𝐭-
┊➟𝐡𝐨𝐧𝐞𝐲 -𝐭𝐞𝐱𝐭-
┊➟𝐢𝐜𝐞 -𝐭𝐞𝐱𝐭-
┊➟𝐟𝐫𝐮𝐢𝐭𝐣𝐮𝐢𝐜𝐞 -𝐭𝐞𝐱𝐭-
┊➟𝐛𝐢𝐬𝐜𝐮𝐢𝐭 -𝐭𝐞𝐱𝐭-
┊➟𝐰𝐨𝐨𝐝 -𝐭𝐞𝐱𝐭-
┊➟𝐜𝐡𝐨𝐜𝐨𝐥𝐚𝐭𝐞 -𝐭𝐞𝐱𝐭-
┊➟𝐬𝐭𝐫𝐚𝐰𝐛𝐞𝐫𝐫𝐲 -𝐭𝐞𝐱𝐭-
┊➟𝐦𝐚𝐭𝐫𝐢𝐱 -𝐭𝐞𝐱𝐭-
┊➟𝐛𝐥𝐨𝐨𝐝 -𝐭𝐞𝐱𝐭-
┊➟𝐝𝐫𝐨𝐩𝐰𝐚𝐭𝐞𝐫 -𝐭𝐞𝐱𝐭-
┊➟𝐭𝐨𝐱𝐢𝐜 -𝐭𝐞𝐱𝐭-
┊➟𝐥𝐚𝐯𝐚 -𝐭𝐞𝐱𝐭-
┊➟𝐫𝐨𝐜𝐤 -𝐭𝐞𝐱𝐭-
┊➟𝐛𝐥𝐨𝐨𝐝𝐠𝐥𝐚𝐬𝐬 -𝐭𝐞𝐱𝐭-
┊➟𝐡𝐚𝐥𝐥𝐨𝐰𝐞𝐞𝐧 -𝐭𝐞𝐱𝐭-
┊➟𝐝𝐚𝐫𝐤𝐠𝐨𝐥𝐝 -𝐭𝐞𝐱𝐭-
┊➟𝐣𝐨𝐤𝐞𝐫 -𝐭𝐞𝐱𝐭-
┊➟𝐰𝐢𝐜𝐤𝐞𝐫 -𝐭𝐞𝐱𝐭-
┊➟𝐟𝐢𝐫𝐞𝐰𝐨𝐫𝐤 -𝐭𝐞𝐱𝐭-
┊➟𝐬𝐤𝐞𝐥𝐞𝐭𝐨𝐧 -𝐭𝐞𝐱𝐭-
┊➟𝐛𝐥𝐚𝐜𝐤𝐩𝐢𝐧𝐤 -𝐭𝐞𝐱𝐭-
┊➟𝐬𝐚𝐧𝐝 -𝐭𝐞𝐱𝐭-
┊➟𝐠𝐥𝐮𝐞 -𝐭𝐞𝐱𝐭-
┊➟1997 -𝐭𝐞𝐱𝐭-
┊➟𝐥𝐞𝐚𝐯𝐞𝐬 -𝐭𝐞𝐱𝐭-
└───❴❏ 𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕4 ❏❵╼╼


┌───❴❏ 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐌𝐄𝐍𝐔 ⧠❵╼╼
┊➟𝐲𝐭𝐦𝐩3 -𝐥𝐢𝐧𝐤-
┊➟𝐲𝐭𝐦𝐩4 -𝐥𝐢𝐧𝐤-
┊➟𝐚𝐮𝐝𝐢𝐨  -𝐥𝐢𝐧𝐤-
┊➟𝐩𝐥𝐚𝐲 -𝐪𝐮𝐞𝐫𝐲-
┊➟𝐬𝐨𝐧𝐠 -𝐪𝐮𝐞𝐫𝐲-
┊➟𝐩𝐥𝐚𝐲2 -𝐪𝐮𝐞𝐫𝐲-
┊➟𝐦𝐞𝐝𝐢𝐚𝐟𝐢𝐫𝐞 -𝐥𝐢𝐧𝐤-
┊➟𝐟𝐛 -𝐥𝐢𝐧𝐤-
┊➟𝐟𝐛2 -𝐥𝐢𝐧𝐤-
┊➟𝐲𝐭𝐬𝐯𝐢𝐝𝐞𝐨 -𝐪𝐮𝐞𝐫𝐲-
┊➟𝐠𝐞𝐭𝐦𝐮𝐬𝐢𝐜 -𝐪𝐮𝐞𝐫𝐲-
┊➟𝐠𝐞𝐭𝐯𝐢𝐝𝐞𝐨 -𝐪𝐮𝐞𝐫𝐲-
┊➟𝐬𝐚𝐯𝐞𝐟𝐫𝐨𝐦 -𝐪𝐮𝐞𝐫𝐲-
┊➟𝐩𝐢𝐧𝐝𝐥 -𝐪𝐮𝐞𝐫𝐲-
┊➟𝐣𝐨𝐨𝐱 -𝐪𝐮𝐞𝐫𝐲-
┊➟𝐭𝐢𝐤𝐭𝐨𝐤 -𝐥𝐢𝐧𝐤-
┊➟𝐭𝐢𝐤𝐭𝐨𝐤2 -𝐥𝐢𝐧𝐤-
┊➟𝐭𝐰𝐢𝐭𝐭𝐞𝐫 -𝐥𝐢𝐧𝐤-
┊➟𝐭𝐰𝐢𝐭𝐭𝐞𝐫2 -𝐥𝐢𝐧𝐤-
┊➟𝐭𝐢𝐤𝐭𝐨𝐤3 -𝐥𝐢𝐧𝐤-
┊➟𝐭𝐢𝐤𝐭𝐨𝐤4 -𝐥𝐢𝐧𝐤-
┊➟𝐢𝐠 -𝐥𝐢𝐧𝐤-
┊➟𝐢𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦𝐬𝐭𝐨𝐫𝐲 -𝐥𝐢𝐧𝐤-
┊➟𝐢𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦𝐬𝐭𝐨𝐫𝐲2 -𝐥𝐢𝐧𝐤-
┊➟𝐢𝐠𝐢𝐦𝐚𝐠𝐞 -𝐥𝐢𝐧𝐤-
┊➟𝐢𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦𝐫𝐞𝐚𝐥 -𝐥𝐢𝐧𝐤-
┊➟𝐬𝐨𝐮𝐧𝐝𝐜𝐥𝐨𝐮𝐝 -𝐥𝐢𝐧𝐤-
┊➟𝐲𝐭𝐬𝐡𝐨𝐫𝐭𝐬 -𝐥𝐢𝐧𝐤-
┊➟𝐮𝐧𝐦𝐚 -𝐥𝐢𝐧𝐤-
┊➟𝐭𝐰𝐢𝐭𝐭𝐞𝐫𝐚𝐮𝐝𝐢𝐨 -𝐥𝐢𝐧𝐤-
┊➟𝐲𝐭𝐬𝐚𝐮𝐝𝐢𝐨 -𝐪𝐮𝐞𝐫𝐲-
┊➟𝐲𝐭𝐬𝐯𝐢𝐝𝐞𝐨 -𝐪𝐮𝐞𝐫𝐲-
┊➟𝐲𝐭𝐬2 -𝐪𝐮𝐞𝐫𝐲-
┊➟𝐟𝐛𝐝𝐥 -𝐥𝐢𝐧𝐤-
┊➟𝐟𝐛𝐯𝐢𝐝𝐞𝐨 -𝐥𝐢𝐧𝐤-
┊➟𝐠𝐞𝐭 -𝐥𝐢𝐧𝐤-
┊➟𝐭𝐢𝐤𝐭𝐨𝐤5 -𝐥𝐢𝐧𝐤-
┊➟𝐭𝐢𝐭𝐤𝐭𝐨𝐤3 -𝐥𝐢𝐧𝐤-
┊➟𝐭𝐢𝐤𝐭𝐨𝐤𝐦𝐩3 -𝐥𝐢𝐧𝐤-
┊➟𝐭𝐭𝐦𝐩3 -𝐥𝐢𝐧𝐤-
┊➟𝐢𝐠2 -𝐥𝐢𝐧𝐤-
┊➟𝐢𝐠3 -𝐥𝐢𝐧𝐤-
┊➟𝐢𝐠𝐢𝐦𝐚𝐠𝐞 -𝐥𝐢𝐧𝐤-
┊➟𝐢𝐠𝐭𝐯 -𝐥𝐢𝐧𝐤-
┊➟𝐟𝐛𝐦𝐩3 -𝐥𝐢𝐧𝐤-
┊➟𝐲𝐭𝐝𝐥 -𝐥𝐢𝐧𝐤-
└───❴❏ 𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕4 ⧠❵╼╼


┌───❴❏ 𝐏𝐇𝐎𝐓𝐅𝐈𝐋𝐓𝐄𝐑𝐌𝐄𝐍𝐔 ❏❵╼╼
┊➟𝐚𝐧𝐠𝐢𝐞 -𝐩𝐡𝐨𝐭𝐨-
┊➟𝐚𝐫𝐢𝐚 -𝐩𝐡𝐨𝐭𝐨-
┊➟𝐚𝐭𝐭𝐢𝐜 -𝐩𝐡𝐨𝐭𝐨-
┊➟𝐛𝐥𝐚𝐜𝐤𝐚𝐧𝐝𝐰𝐡𝐢𝐭𝐞 -𝐩𝐡𝐨𝐭𝐨-
┊➟𝐜𝐡𝐨𝐫𝐦𝐞1977 -𝐩𝐡𝐨𝐭𝐨-
┊➟𝐜𝐨𝐧𝐬𝐭𝐫𝐚𝐬𝐭𝐛𝐚𝐧𝐝𝐰 -𝐩𝐡𝐨𝐭𝐨-
┊➟𝐜𝐫𝐞𝐚𝐦𝐲 -𝐩𝐡𝐨𝐭𝐨-
┊➟𝐝𝐮𝐨𝐭𝐨𝐧𝐞 -𝐩𝐡𝐨𝐭𝐨-
┊➟𝐞𝐯𝐚 -𝐩𝐡𝐨𝐭𝐨-
┊➟𝐠𝐨𝐥𝐝𝐞𝐧𝐡𝐨𝐮𝐫 -𝐩𝐡𝐨𝐭𝐨-
┊➟𝐡𝐚𝐧𝐚 -𝐩𝐡𝐨𝐭𝐨-
┊➟𝐥𝐚𝐯𝐚𝐧𝐝𝐞𝐫 -𝐩𝐡𝐨𝐭𝐨-
┊➟𝐥𝐞𝐦𝐨𝐧𝐚𝐧𝐝𝐞 -𝐩𝐡𝐨𝐭𝐨-
┊➟𝐥𝐢𝐠𝐡𝐭𝐥𝐞𝐚𝐤 -𝐩𝐡𝐨𝐭𝐨-
┊➟𝐥𝐢𝐬𝐚 -𝐩𝐡𝐨𝐭𝐨-
┊➟𝐥𝐨𝐦𝐨 -𝐩𝐡𝐨𝐭𝐨-
┊➟𝐦𝐢𝐥𝐤 -𝐩𝐡𝐨𝐭𝐨-
┊➟𝐦𝐨𝐥𝐥𝐲 -𝐩𝐡𝐨𝐭𝐨-
┊➟𝐦𝐨𝐧𝐨𝐜𝐡𝐫𝐨𝐦𝐞 -𝐩𝐡𝐨𝐭𝐨-
┊➟𝐦𝐨𝐫𝐧𝐢𝐧𝐠 -𝐩𝐡𝐨𝐭𝐨-
┊➟𝐦𝐨𝐯𝐢𝐞 -𝐩𝐡𝐨𝐭𝐨-
┊➟𝐨𝐫𝐭𝐨𝐧 -𝐩𝐡𝐨𝐭𝐨-
┊➟𝐩𝐚𝐫𝐞𝐭𝐫𝐨 -𝐩𝐡𝐨𝐭𝐨-
┊➟𝐩𝐞𝐫𝐟𝐞𝐜𝐭𝐛𝐚𝐧𝐝𝐰 -𝐩𝐡𝐨𝐭𝐨-
┊➟𝐩𝐥𝐮𝐦𝐲 -𝐩𝐡𝐨𝐭𝐨-
┊➟𝐫𝐞𝐭𝐫𝐨𝐥𝐠𝐚 -𝐩𝐡𝐨𝐭𝐨-
┊➟𝐫𝐮𝐛𝐲 -𝐩𝐡𝐨𝐭𝐨-
┊➟𝐬𝐚𝐧𝐝 -𝐩𝐡𝐨𝐭𝐨-
┊➟𝐬𝐚𝐩𝐩𝐡𝐢𝐫𝐞 -𝐩𝐡𝐨𝐭𝐨-
┊➟𝐬𝐞𝐩𝐢𝐚 -𝐩𝐡𝐨𝐭𝐨-
┊➟𝐬𝐨𝐟𝐭𝐬𝐞𝐩𝐢𝐚 -𝐩𝐡𝐨𝐭𝐨-
┊➟𝐬𝐨𝐥𝐚𝐫𝐢𝐳𝐞 -𝐩𝐡𝐨𝐭𝐨-
┊➟𝐬𝐩𝐡𝐢𝐧𝐱 -𝐩𝐡𝐨𝐭𝐨-
┊➟𝐯𝐞𝐧𝐮𝐬 -𝐩𝐡𝐨𝐭𝐨-
┊➟𝐣𝐚𝐩𝐚𝐧𝐞𝐬𝐞 -𝐩𝐡𝐨𝐭𝐨-
┊➟𝐡𝐝𝐫 -𝐩𝐡𝐨𝐭𝐨-
┊➟𝐯𝐢𝐞𝐰𝐟𝐢𝐥𝐭𝐞𝐫 -𝐩𝐡𝐨𝐭𝐨-
┊➟𝐰𝐚𝐫𝐦𝐬𝐮𝐧𝐬𝐞𝐭 -𝐩𝐡𝐨𝐭𝐨-
└───❴❏ 𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕4 ❏❵╼╼


┌──❴❏ 𝐍𝐒𝐅𝐖𝐌𝐄𝐍𝐔 ❏❵╼╼╼
┊🪨𝐦𝐚𝐬𝐭𝐮𝐫𝐛𝐚𝐭𝐢𝐨𝐧
┊🪨𝐣𝐚𝐡𝐲
┊🪨𝐡𝐞𝐧𝐭𝐚𝐢
┊🪨𝐠𝐥𝐚𝐬𝐬𝐞𝐬
┊🪨𝐠𝐚𝐧𝐠𝐛𝐚𝐧𝐠
┊🪨𝐟𝐨𝐨𝐭
┊🪨𝐟𝐞𝐦𝐝𝐨𝐦
┊🪨𝐜𝐮𝐦
┊🪨𝐞𝐫𝐨
┊🪨𝐜𝐮𝐜𝐤𝐡𝐨𝐥𝐝
┊🪨𝐛𝐥𝐨𝐰𝐣𝐨𝐛
┊🪨𝐛𝐝𝐬𝐦
┊🪨𝐚𝐡𝐞𝐠𝐚𝐨
┊🪨𝐚𝐬𝐬
┊🪨𝐨𝐫𝐠𝐲
┊🪨𝐩𝐚𝐧𝐭𝐢𝐞𝐬
┊🪨𝐩𝐮𝐬𝐬𝐲
┊🪨𝐲𝐮𝐫𝐢
┊🪨𝐭𝐡𝐢𝐠𝐡𝐬
┊🪨𝐭𝐞𝐧𝐭𝐚𝐜𝐥𝐞𝐬
└───❴❏ 𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕4 ❏❵╼╼


┌───❴⧠ 𝐀𝐍𝐈𝐌𝐄𝐌𝐄𝐍𝐔 ❏❵╼╼
┊➟𝐜𝐫𝐲
┊➟𝐤𝐢𝐥𝐥
┊➟𝐡𝐮𝐠
┊➟𝐩𝐚𝐭
┊➟𝐥𝐢𝐜𝐤
┊➟𝐤𝐢𝐬𝐬
┊➟𝐛𝐢𝐭𝐞
┊➟𝐲𝐞𝐞𝐭
┊➟𝐧𝐞𝐤𝐨
┊➟𝐛𝐮𝐥𝐥𝐲
┊➟𝐛𝐨𝐧𝐤
┊➟𝐰𝐢𝐧𝐤
┊➟𝐩𝐨𝐤𝐞
┊➟𝐧𝐨𝐦
┊➟𝐬𝐥𝐚𝐩
┊➟𝐬𝐦𝐢𝐥𝐞
┊➟𝐰𝐚𝐯𝐞
┊➟𝐚𝐰𝐨𝐨
┊➟𝐛𝐥𝐮𝐬𝐡
┊➟𝐬𝐦𝐮𝐠
┊➟𝐠𝐥𝐨𝐦𝐩
┊➟𝐡𝐚𝐩𝐩𝐲
┊➟𝐝𝐚𝐧𝐜𝐞
┊➟𝐜𝐫𝐢𝐧𝐠𝐞
┊➟𝐜𝐮𝐝𝐝𝐥𝐞
┊➟𝐡𝐢𝐠𝐡𝐟𝐢𝐯𝐞
┊➟𝐬𝐡𝐢𝐧𝐨𝐛𝐮
┊➟𝐦𝐞𝐠𝐮𝐦𝐢𝐧
┊➟𝐡𝐚𝐧𝐝𝐡𝐨𝐥𝐝
┊➟𝐚𝐧𝐢𝐦𝐞𝐬𝐥𝐚𝐩
┊➟𝐚𝐧𝐢𝐦𝐞𝐩𝐚𝐭
┊➟𝐚𝐧𝐢𝐦𝐞𝐧𝐞𝐤𝐨
┊➟𝐚𝐧𝐢𝐦𝐞𝐡𝐮𝐠
┊➟𝐚𝐧𝐢𝐦𝐞𝐤𝐢𝐬𝐬
┊➟𝐚𝐧𝐢𝐦𝐞𝐰𝐥𝐩
┊➟𝐚𝐧𝐢𝐦𝐞𝐬𝐩𝐚𝐧𝐤
┊➟𝐬𝐡𝐢𝐧𝐨𝐛𝐮2
┊➟𝐦𝐞𝐠𝐮𝐦𝐢𝐧2
┊➟𝐚𝐰𝐨𝐨2
┊➟𝐚𝐧𝐢𝐦𝐞𝐰𝐚𝐥𝐥2
┊➟𝐬𝐞𝐚𝐫𝐜𝐡𝐚𝐧𝐢𝐦𝐞 -𝐪𝐮𝐞𝐫𝐲-
└───❴❏ 𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕4 ❏❵╼╼


┌───❴❏ 𝐒𝐄𝐀𝐑𝐂𝐇𝐌𝐄𝐍𝐔 ❏❵
┊
┊➟𝐥𝐲𝐫𝐢𝐜𝐬 -𝐪𝐮𝐞𝐫𝐲-
┊➟𝐥𝐢𝐧𝐤𝐰𝐚 -𝐪𝐮𝐞𝐫𝐲-
┊➟𝐚𝐩𝐤 -𝐪𝐮𝐞𝐫𝐲-
┊➟𝐡𝐚𝐩𝐩𝐲𝐦𝐨𝐝 -𝐪𝐮𝐞𝐫𝐲-
┊➟𝐚𝐩𝐤𝐮𝐩𝐫𝐨 -𝐪𝐮𝐞𝐫𝐲-
┊➟𝐠𝐨𝐨𝐠𝐥𝐞 -𝐪𝐮𝐞𝐫𝐲-
┊➟𝐰𝐢𝐤𝐢 -𝐪𝐮𝐞𝐫𝐲-
┊➟𝐲𝐭𝐬𝐞𝐚𝐫𝐜𝐡 -𝐪𝐮𝐞𝐫𝐲-
┊➟𝐫𝐞𝐜𝐢𝐩𝐞 -𝐪𝐮𝐞𝐫𝐲-
┊➟𝐩𝐥𝐚𝐲𝐬𝐭𝐨𝐫𝐞 -𝐪𝐮𝐞𝐫𝐲-
┊➟𝐰𝐢𝐤𝐢𝐦𝐞𝐝𝐢𝐚 -𝐪𝐮𝐞𝐫𝐲-
┊➟𝐧𝐞𝐰𝐬 -𝐪𝐮𝐞𝐫𝐲-
┊➟𝐧𝐞𝐰𝐬2 -𝐪𝐮𝐞𝐫𝐲-
┊➟𝐚𝐧𝐢𝐦𝐞𝐞 -𝐪𝐮𝐞𝐫𝐲-
┊➟𝐚𝐧𝐢𝐦𝐞 -𝐪𝐮𝐞𝐫𝐲-
┊➟𝐚𝐦𝐢𝐧𝐨 -𝐪𝐮𝐞𝐫𝐲-
┊➟𝐠𝐨𝐨𝐠𝐥𝐞𝐢𝐦𝐚𝐠𝐞 -𝐪𝐮𝐞𝐫𝐲-
┊➟𝐚𝐩𝐤𝐝𝐨𝐧𝐞 -𝐪𝐮𝐞𝐫𝐲-
┊➟𝐠𝐢𝐭𝐡𝐮𝐛𝐬𝐞𝐚𝐫𝐜𝐡 -𝐪𝐮𝐞𝐫𝐲->
┊➟𝐢𝐠𝐬𝐞𝐚𝐫𝐜𝐡 -𝐮𝐬𝐞𝐫𝐧𝐚𝐦𝐞-
┊➟𝐠𝐨𝐨𝐠𝐥𝐞𝐧𝐞𝐰𝐬 -𝐪𝐮𝐞𝐫𝐲-
┊➟𝐠𝐧𝐞𝐰𝐬 -𝐪𝐮𝐞𝐫𝐲-
┊➟𝐰𝐚𝐥𝐥𝐩𝐚𝐩𝐞𝐫 -𝐪𝐮𝐞𝐫𝐲-
┊➟𝐬𝐞𝐚𝐫𝐜𝐡𝐠𝐫𝐨𝐮𝐩𝐬 -𝐪𝐮𝐞𝐫𝐲-
┊➟𝐪𝐨𝐮𝐭𝐞𝐬𝐚𝐧𝐢𝐦𝐞 -𝐪𝐮𝐞𝐫𝐲-
┊➟𝐠𝐦𝐬𝐚𝐫𝐞𝐧𝐚 -𝐪𝐮𝐞𝐫𝐲-
└───❴❏ 𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕4 ❏❵╼╼

┌───❴❏𝐄𝐏𝐇𝐎𝐓𝐎-𝐌𝐄𝐍𝐔 ⧠❵╼╼
┊➟3𝐝-𝐰𝐨𝐨𝐝
┊➟𝐚𝐧𝐠𝐞𝐥𝐬-𝐰𝐢𝐧𝐠𝐬
┊➟𝐬𝐧𝐚𝐤𝐞-𝐭𝐞𝐱𝐭
┊➟𝐫𝐞𝐝𝐡𝐨𝐭-𝐦𝐞𝐭𝐚𝐥2
┊➟𝐬𝐚𝐧𝐝𝐬𝐮𝐦𝐦𝐞𝐫-𝐛𝐞𝐚𝐜𝐡
┊➟𝐬𝐧𝐨𝐰-𝐭𝐞𝐱𝐭
┊➟𝐰𝐚𝐭𝐞𝐫-3𝐝
┊➟𝐰𝐚𝐭𝐞𝐫-𝐞𝐟𝐟𝐞𝐜𝐭
┊➟𝐰𝐞𝐭-𝐠𝐥𝐚𝐬𝐬
┊➟𝐬𝐭𝐚𝐭𝐮𝐬-𝐦𝐨𝐨𝐝2
┊➟𝐬𝐮𝐦𝐦𝐞𝐫𝐲𝐬𝐚𝐧𝐝d
└───────────●

┌───❴❏ 𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐌𝐄𝐍𝐔 ❏❵╼╼
┊➟𝐭𝐨𝐢𝐦𝐠 -𝐪𝐮𝐨𝐭𝐞 𝐬𝐭𝐢𝐜𝐤𝐞𝐫-
┊➟𝐭𝐨𝐠𝐢𝐟 -𝐪𝐮𝐨𝐭𝐞 𝐯𝐢𝐝𝐞𝐨-
┊➟𝐭𝐨𝐝𝐨𝐜𝐮𝐦𝐞𝐧𝐭 -𝐦𝐞𝐝𝐢𝐚-
┊➟𝐛𝐚𝐬𝐬 -𝐚𝐮𝐝𝐢𝐨-
┊➟𝐛𝐥𝐨𝐰𝐧 -𝐚𝐮𝐝𝐢𝐨-
┊➟𝐝𝐞𝐞𝐩 -𝐚𝐮𝐝𝐢𝐨-
┊➟𝐞𝐚𝐫𝐚𝐩𝐞 -𝐚𝐮𝐝𝐢𝐨-
┊➟𝐟𝐚𝐬𝐭 -𝐚𝐮𝐝𝐢𝐨-
┊➟𝐟𝐚𝐭 -𝐚𝐮𝐝𝐢𝐨-
┊➟𝐧𝐢𝐠𝐡𝐭𝐜𝐨𝐫𝐞 -𝐚𝐮𝐝𝐢𝐨-
┊➟𝐫𝐞𝐯𝐞𝐫𝐬𝐞 -𝐚𝐮𝐝𝐢𝐨-
┊➟𝐫𝐨𝐛𝐨𝐭 -𝐚𝐮𝐝𝐢𝐨-
┊➟𝐬𝐥𝐨𝐰 -𝐚𝐮𝐝𝐢𝐨-
┊➟𝐬𝐦𝐨𝐨𝐭𝐡 -𝐚𝐮𝐝𝐢𝐨-
┊➟𝐬𝐪𝐮𝐢𝐫𝐫𝐞𝐥 -𝐚𝐮𝐝𝐢𝐨-
┊➟𝐬𝐭𝐢𝐜𝐤𝐞𝐫 -𝐦𝐞𝐝𝐢𝐚-
┊➟𝐬𝐦𝐞𝐦𝐞 -𝐦𝐞𝐝𝐢𝐚-
┊➟𝐬𝐭𝐢𝐜𝐤𝐞𝐫𝐦𝐞𝐦𝐞 -𝐦𝐞𝐝𝐢𝐚-
┊➟𝐬𝐰𝐦 -𝐬𝐭𝐢𝐜𝐤𝐞𝐫-
└───❴❏ 𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕4 ⧠❵╼╼

┌───❴❏ 𝐃𝐀𝐓𝐀𝐁𝐀𝐒𝐄𝐌𝐄𝐍𝐔 ❏❵╼╼
┊➟𝐚𝐝𝐝𝐦𝐬𝐠 -𝐦𝐬𝐠-
┊➟𝐝𝐞𝐥𝐦𝐬𝐠 -𝐦𝐬𝐠-
┊➟𝐥𝐢𝐬𝐭𝐦𝐬𝐠 -𝐦𝐬𝐠-
┊➟𝐠𝐞𝐭𝐦𝐬𝐠 -𝐦𝐬𝐠-
┊➟𝐬𝐞𝐭𝐜𝐦𝐝 -𝐦𝐬𝐠-
┊➟𝐝𝐞𝐥𝐜𝐦𝐝 -𝐦𝐬𝐠-
┊➟𝐥𝐢𝐬𝐭𝐜𝐦𝐝 -𝐦𝐬𝐠-
└───❴❏ 𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕4 ❏❵╼╼

┌───❴❏ 𝐏𝐇𝐎𝐓𝐎𝐎𝐗𝐘𝐌𝐄𝐍𝐔 ❏❵╼╼
┊➟𝐬𝐢𝐥𝐤 -𝐭𝐞𝐱𝐭-
┊➟3𝐝𝐧𝐚𝐭𝐮𝐫𝐞 -𝐭𝐞𝐱𝐭-
┊➟𝐛𝐞𝐯𝐞𝐥 -𝐭𝐞𝐱𝐭-
┊➟𝐛𝐢𝐫𝐭𝐡𝐝𝐚𝐲𝐜𝐚𝐤𝐞 -𝐭𝐞𝐱𝐭-
┊➟𝐛𝐮𝐫𝐧𝐩𝐚𝐩𝐞𝐫 -𝐭𝐞𝐱𝐭-
┊➟𝐜𝐨𝐟𝐟𝐞𝐞 -𝐭𝐞𝐱𝐭-
┊➟𝐜𝐨𝐟𝐟𝐞𝐞-𝐡𝐞𝐚𝐫𝐭𝐜𝐮𝐩 -𝐭𝐞𝐱𝐭-
┊➟𝐞𝐦𝐛𝐫𝐨𝐢𝐝𝐞𝐫𝐲𝐭𝐞𝐱𝐭 -𝐭𝐞𝐱𝐭-
┊➟𝐟𝐥𝐚𝐦𝐢𝐧𝐠 -𝐭𝐞𝐱𝐭-
┊➟𝐟𝐥𝐨𝐰𝐞𝐫𝐭𝐲𝐩𝐨 -𝐭𝐞𝐱𝐭-
┊➟𝐟𝐮𝐧𝐧𝐲𝐜𝐮𝐩 -𝐭𝐞𝐱𝐭-
┊➟𝐟𝐮𝐫 -𝐭𝐞𝐱𝐭-
┊➟𝐠𝐞𝐫𝐛𝐚𝐧𝐠 -𝐭𝐞𝐱𝐭-
┊➟𝐠𝐥𝐨𝐰𝐫𝐚𝐢𝐧𝐛𝐨𝐰 -𝐭𝐞𝐱𝐭-
┊➟𝐠𝐫𝐚𝐝𝐢𝐞𝐧𝐭𝐚𝐯𝐚𝐭𝐚𝐫 -𝐭𝐞𝐱𝐭-
┊➟𝐠𝐫𝐚𝐟𝐟𝐢𝐭𝐢𝐭𝐞𝐱𝐭 -𝐭𝐞𝐱𝐭-
┊➟𝐡𝐚𝐫𝐫𝐲𝐩𝐨𝐭𝐭𝐞𝐫 -𝐭𝐞𝐱𝐭-
┊➟𝐥𝐨𝐯𝐞𝐦𝐞𝐬𝐬𝐚𝐠𝐞 -𝐭𝐞𝐱𝐭-
┊➟𝐧𝐞𝐨𝐧𝐥𝐢𝐠𝐡𝐭 -𝐭𝐞𝐱𝐭-
┊➟𝐬𝐰𝐞𝐞𝐭𝐜𝐚𝐧𝐝𝐲 -𝐭𝐞𝐱𝐭-
┊➟𝐬𝐮𝐦𝐦𝐞𝐫𝐭𝐞𝐱𝐭 -𝐭𝐞𝐱𝐭-
┊➟𝐰𝐨𝐨𝐝𝐡𝐞𝐚𝐫𝐭 -𝐭𝐞𝐱𝐭-
┊➟𝐲𝐞𝐥𝐥𝐨𝐰𝐫𝐨𝐬𝐞𝐬 -𝐭𝐞𝐱𝐭-
┊➟𝐰𝐨𝐥𝐟𝐦𝐞𝐭𝐚𝐥 -𝐭𝐞𝐱𝐭-
┊➟𝐮𝐧𝐝𝐞𝐫𝐰𝐚𝐭𝐞𝐫𝐨𝐜𝐞𝐚𝐧 -𝐭𝐞𝐱𝐭-
└───❴❏ 𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕4 ❏❵╼╼


┌───❴❏ 𝐌𝐄𝐍𝐔-𝐑𝐏𝐆 ❏❵╼╼
┊➟𝐣𝐨𝐢𝐧𝐫𝐩𝐠
┊➟𝐪𝐮𝐞𝐬𝐭 
┊➟𝐦𝐢𝐧𝐢𝐧𝐠
┊➟𝐦𝐚𝐧𝐜𝐢𝐧𝐠
┊➟𝐥𝐮𝐜𝐤𝐲𝐝𝐚𝐲
┊➟𝐥𝐮𝐜𝐤𝐲𝐭𝐢𝐦𝐞
┊➟𝐚𝐝𝐯𝐞𝐧𝐭𝐮𝐫𝐞
┊➟𝐢𝐧𝐯𝐞𝐧𝐭𝐨𝐫𝐢
└───────────●

┌───❴❏ 𝐅𝐀𝐑𝐌-𝐑𝐏𝐆 ❏❵╼╼
┊➟𝐤𝐢𝐥𝐥𝐬𝐥𝐢𝐦𝐞
┊➟𝐤𝐢𝐥𝐥𝐠𝐨𝐛𝐥𝐢𝐧
┊➟𝐤𝐢𝐥𝐥𝐝𝐞𝐯𝐢𝐥
┊➟𝐤𝐢𝐥𝐥𝐛𝐞𝐡𝐞𝐦𝐨𝐭𝐡
┊➟𝐤𝐢𝐥𝐥𝐝𝐞𝐦𝐨𝐧
┊➟𝐤𝐢𝐥𝐥𝐝𝐞𝐦𝐨𝐧𝐤𝐢𝐧𝐠
└───────────●

┌───❴❏ 𝐓𝐑𝐀𝐃𝐄-𝐑𝐏𝐆 ❏❵╼╼
┊➟𝐬𝐞𝐥𝐥𝐢𝐤𝐚𝐧
┊➟𝐬𝐞𝐥𝐥𝐛𝐞𝐬𝐢
┊➟𝐬𝐞𝐥𝐥𝐞𝐦𝐚𝐬
┊➟𝐬𝐞𝐥𝐥𝐝𝐢𝐚𝐦𝐨𝐧𝐝
└───────────●
%readmore` 
    var buttonReplyy = [
				{ urlButton: { displayText: `WEBSITE🍎`, url: `https://chat.whatsapp.com/EPSGKau0IVi7J5lyOJO7Jk` } },
				{ urlButton: { displayText: `SOURCECODE🍏`, url: `https://github.com/Samue-l1/Classic-V4 } },
				{ quickReplyButton: { displayText: `SPEED`, id: `${prefix}ping` } },
                { quickReplyButton: { displayText: `OWNER`, id: `${prefix}owner` } },
                { quickReplyButton: { displayText: `LIST`, id: `${prefix}listmenu` } }
			]
			tempButton1(from, anu, '', buttonReplyy)
			}
break
case 'ownermenu': {
ZimBotInc.sendMessage(m.chat, { react: { text: `${global.reactmoji}`, key: m.key }})
buffer = await getBuffer(picak+'OWNER MENU')
ram3 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
anu = `
┌───❴❏ 𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕4 ❏❵╼╼
┊➢ᴡᴇʟᴄᴏᴍᴇ
└───────────●

┌───❴❏ 𝐀𝐁𝐎𝐔𝐓 ❏❵╼╼
┊➢ɴᴀᴍᴇ :  ${pushname}
┊➢ɴᴜᴍʙᴇʀ : wa.me/${m.sender.split('@')[0]}
┊➢ʀᴀᴍ : ${ram3}
┊➢ᴅᴇᴠɪᴄᴇ : ${os.type()}
┊➢ᴛᴏᴛᴀʟ ᴜsᴇʀs : ${Object.keys(global.db.users).length}
└───────────●

┌───❴❏ 𝐎𝐖𝐍𝐄𝐑𝐌𝐄𝐍𝐔 ❏❵╼╼
┊➟𝐜𝐡𝐚𝐭𝐛𝐨𝐭 𝐨𝐧/𝐨𝐟𝐟
┊➟𝐬𝐞𝐭𝐦𝐞𝐧𝐮 -𝐨𝐩𝐭𝐢𝐨𝐧-
┊➟𝐜𝐡𝐞𝐜𝐤𝐮𝐩𝐝𝐚𝐭𝐞 
┊➟𝐮𝐩𝐝𝐚𝐭𝐞𝐧𝐨𝐰
┊➟𝐛𝐜 -𝐭𝐞𝐱𝐭-
┊➟𝐛𝐜𝐚𝐥𝐥 -𝐭𝐞𝐱𝐭-
┊➟𝐛𝐜𝐭𝐞𝐱𝐭 -𝐭𝐞𝐱𝐭-
┊➟𝐛𝐜𝐯𝐢𝐝𝐞𝐨 -𝐦𝐞𝐝𝐢𝐚-
┊➟𝐛𝐜𝐚𝐮𝐝𝐢𝐨 -𝐦𝐞𝐝𝐢𝐚-
┊➟𝐛𝐜𝐢𝐦𝐚𝐠𝐞 -𝐦𝐞𝐝𝐢𝐚-
┊➟𝐛𝐜𝐥𝐨𝐜  -𝐭𝐞𝐱𝐭-
┊➟𝐛𝐜𝐠𝐜 -𝐭𝐞𝐱𝐭-
┊➟𝐥𝐨𝐜𝐤𝐜𝐦𝐝
┊➟𝐬𝐞𝐭𝐬𝐭𝐚𝐭𝐮𝐬 -𝐭𝐞𝐱𝐭-
┊➟𝐬𝐞𝐭𝐩𝐩𝐛𝐨𝐭 -𝐨𝐰𝐧𝐞𝐫-
┊➟𝐛𝐥𝐨𝐜𝐤 -𝐨𝐰𝐧𝐞𝐫-
┊➟𝐮𝐧𝐛𝐥𝐨𝐜𝐤 -𝐨𝐰𝐧𝐞𝐫-
┊➟𝐣𝐨𝐢𝐧 -𝐨𝐰𝐧𝐞𝐫-
┊➟𝐥𝐞𝐚𝐯𝐞 -𝐨𝐰𝐧𝐞𝐫-
┊➟𝐜𝐡𝐚𝐭 -𝐨𝐰𝐧𝐞𝐫-
┊➟𝐩𝐮𝐛𝐥𝐢𝐜
┊➟𝐬𝐞𝐥𝐟
┊➟𝐠𝐫𝐨𝐮𝐩𝐨𝐧𝐥𝐲
└───❴❏ 𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕4 ❏❵╼╼
`
let message = await prepareWAMessageMedia({ image: buffer, jpegThumbnail:buffer }, { upload: ZimBotInc.waUploadToServer })

 var buttonReplyy = [
				{ urlButton: { displayText: `OWNER🍏`, url : `https://wa.+258869103969` } },
				{ urlButton: { displayText: `SOURCECODE🥦`, url: `https://github.com/Samue-l1/Classic-V4` } },
				{ urlButton: { displayText: `WEBSITE🍎`, url: `https://chat.whatsapp.com/EPSGKau0IVi7J5lyOJO7Jk` } }
			]
			tempButtons(from, anu, '', buttonReplyy)
			}
			
break
case 'databasemenu': {
ZimBotInc.sendMessage(m.chat, { react: { text: `${global.reactmoji}`, key: m.key }})
buffer = await getBuffer(picak+'DATABASE MENU')
ram4 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
anu = `
┌───❴❏ 𝐃𝐀𝐓𝐀𝐁𝐀𝐒𝐄 𝐌𝐄𝐍𝐔 ❏❵
┊➢ᴡᴇʟᴄᴏᴍᴇ
└───────────●

┌───〔 _*◉ᴀʙᴏᴜᴛ◉*_ 〕
┊➢ɴᴀᴍᴇ :  ${pushname}
┊➢ɴᴜᴍʙᴇʀ : wa.me/${m.sender.split('@')[0]}
┊➢ʀᴀᴍ : ${ram4}
┊➢ᴅᴇᴠɪᴄᴇ : ${os.type()}
┊➢ᴛᴏᴛᴀʟ ᴜsᴇʀs : ${Object.keys(global.db.users).length}
└───────●

    
╼╼╼❴❏ 𝐃𝐀𝐓𝐀𝐁𝐀𝐒𝐄𝐌𝐄𝐍𝐔 ❏❵╼╼
 ✇︎addmsg -msg-
 ✇︎delmsg -msg-
 ✇listmsg -msg-
 ✇getmsg -msg-
 ✇︎setcmd -msg-
 ✇︎delcmd -msg-
 ✇︎listcmd -msg-
 
╼╼╼╼❴❏ 𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕4 ❏❵╼╼╼
`
let message = await prepareWAMessageMedia({ image: buffer, jpegThumbnail:buffer }, { upload: ZimBotInc.waUploadToServer })
 var buttonReplyy = [
				{ urlButton: { displayText: `OWNER🍏`, url : `https://wa.me/258869103969` } },
				{ urlButton: { displayText: `SOURCECODE🥦`, url: `https://github.com/Samue-l1/Classic-V4` } },
				{ urlButton: { displayText: `WEBSITE🍎`, url: `https://chat.whatsapp.com/EPSGKau0IVi7J5lyOJO7Jk` } }
			]
			tempButtoni(from, anu, '', buttonReplyy)
			}
break
case 'photooxymenu': {
  ZimBotInc.sendMessage(m.chat, { react: { text: `${global.reactmoji}`, key: m.key }})
  buffer = await getBuffer(picak+'PHOTOOXY MENU')
  ram5 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
  anu = `
┌───❴❏ 𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕4 ❏❵╼╼
┊➢ᴡᴇʟᴄᴏᴍᴇ
└───────────●

┌───❴❏ 𝐀𝐁𝐎𝐔𝐓 ❏❵╼╼
┊➢ɴᴀᴍᴇ :  ${pushname}
┊➢ɴᴜᴍʙᴇʀ : wa.me/${m.sender.split('@')[0]}
┊➢ʀᴀᴍ : ${ram5}
┊➢ᴅᴇᴠɪᴄᴇ : ${os.type()}
┊➢ᴛᴏᴛᴀʟ ᴜsᴇʀs : ${Object.keys(global.db.users).length}
└───────────●

┌───❴❏ 𝐏𝐇𝐎𝐓𝐎𝐎𝐗𝐘𝐌𝐄𝐍𝐔 ❏❵╼╼
┊➟𝒔𝒊𝒍𝒌 -𝒕𝒆𝒙𝒕-
┊➟3𝒅𝒏𝒂𝒕𝒖𝒓𝒆 -𝒕𝒆𝒙𝒕-
┊➟𝒃𝒆𝒗𝒆𝒍 -𝒕𝒆𝒙𝒕-
┊➟𝒃𝒊𝒓𝒕𝒉𝒅𝒂𝒚𝒄𝒂𝒌𝒆 -𝒕𝒆𝒙𝒕-
┊➟𝒃𝒖𝒓𝒏𝒑𝒂𝒑𝒆𝒓 -𝒕𝒆𝒙𝒕-
┊➟𝒄𝒐𝒇𝒇𝒆𝒆 -𝒕𝒆𝒙𝒕-
┊➟𝒄𝒐𝒇𝒇𝒆𝒆-𝒉𝒆𝒂𝒓𝒕𝒄𝒖𝒑 -𝒕𝒆𝒙𝒕-
┊➟𝒆𝒎𝒃𝒓𝒐𝒊𝒅𝒆𝒓𝒚𝒕𝒆𝒙𝒕 -𝒕𝒆𝒙𝒕-
┊➟𝒇𝒍𝒂𝒎𝒊𝒏𝒈 -𝒕𝒆𝒙𝒕-
┊➟𝒇𝒍𝒐𝒘𝒆𝒓𝒕𝒚𝒑𝒐 -𝒕𝒆𝒙𝒕-
┊➟𝒇𝒖𝒏𝒏𝒚𝒄𝒖𝒑 -𝒕𝒆𝒙𝒕-
┊➟𝒇𝒖𝒓 -𝒕𝒆𝒙𝒕-
┊➟𝒈𝒆𝒓𝒃𝒂𝒏𝒈 -𝒕𝒆𝒙𝒕-
┊➟𝒈𝒍𝒐𝒘𝒓𝒂𝒊𝒏𝒃𝒐𝒘 -𝒕𝒆𝒙𝒕-
┊➟𝒈𝒓𝒂𝒅𝒊𝒆𝒏𝒕𝒂𝒗𝒂𝒕𝒂𝒓 -𝒕𝒆𝒙𝒕-
┊➟𝒈𝒓𝒂𝒇𝒇𝒊𝒕𝒊𝒕𝒆𝒙𝒕 -𝒕𝒆𝒙𝒕-
┊➟𝒉𝒂𝒓𝒓𝒚𝒑𝒐𝒕𝒕𝒆𝒓 -𝒕𝒆𝒙𝒕-
┊➟𝒍𝒐𝒗𝒆𝒎𝒆𝒔𝒔𝒂𝒈𝒆 -𝒕𝒆𝒙𝒕-
┊➟𝒏𝒆𝒐𝒏𝒍𝒊𝒈𝒉𝒕 -𝒕𝒆𝒙𝒕-
┊➟𝒔𝒘𝒆𝒆𝒕𝒄𝒂𝒏𝒅𝒚 -𝒕𝒆𝒙𝒕-
┊➟𝒔𝒖𝒎𝒎𝒆𝒓𝒕𝒆𝒙𝒕 -𝒕𝒆𝒙𝒕-
┊➟𝒘𝒐𝒐𝒅𝒉𝒆𝒂𝒓𝒕 -𝒕𝒆𝒙𝒕-
┊➟𝒚𝒆𝒍𝒍𝒐𝒘𝒓𝒐𝒔𝒆𝒔 -𝒕𝒆𝒙𝒕-
┊➟𝒘𝒐𝒍𝒇𝒎𝒆𝒕𝒂𝒍 -𝒕𝒆𝒙𝒕-
┊➟𝒖𝒏𝒅𝒆𝒓𝒘𝒂𝒕𝒆𝒓𝒐𝒄𝒆𝒂𝒏 -𝒕𝒆𝒙𝒕-
└───❴❏ 𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕4 ❏❵╼╼
  `
  let message = await prepareWAMessageMedia({ image: buffer, jpegThumbnail:buffer }, { upload: ZimBotInc.waUploadToServer })
  var buttonReplyy = [
				{ urlButton: { displayText: `OWNER🍏`, url : `https://wa.me/258869103969` } },
				{ urlButton: { displayText: `SOURCECODE🥦`, url: `https://github.com/Samue-l1/Classic-V4` } },
				{ urlButton: { displayText: `WEBSITE🍎`, url: `https://chat.whatsapp.com/EPSGKau0IVi7J5lyOJO7Jk` } }
			]
			tempButtonie(from, anu, '', buttonReplyy)
			}
break
case 'groupmenu': {
ZimBotInc.sendMessage(m.chat, { react: { text: `${global.reactmoji}`, key: m.key }})
buffer = await getBuffer(picak+'GROUP MENU')
ram0 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
anu = `
┌───❴❏ 𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕4 ❏❵╼╼
┊➢ᴡᴇʟᴄᴏᴍᴇ
└───────────●

┌───❴❏ 𝐀𝐁𝐎𝐔𝐓 ❏❵╼╼
┊➢ɴᴀᴍᴇ :  ${pushname}
┊➢ɴᴜᴍʙᴇʀ : wa.me/${m.sender.split('@')[0]}
┊➢ʀᴀᴍ : ${ram0}
┊➢ᴅᴇᴠɪᴄᴇ : ${os.type()}
┊➢ᴛᴏᴛᴀʟ ᴜsᴇʀs : ${Object.keys(global.db.users).length}
└───────────●

┌───❴❏ 𝐆𝐑𝐎𝐔𝐏𝐌𝐄𝐍𝐔 ❏❵╼╼
┊➟𝒂𝒅𝒅 -𝒂𝒅𝒎𝒊𝒏-
┊➟𝒌𝒊𝒄𝒌 -𝒂𝒅𝒎𝒊𝒏-
┊➟𝒘𝒆𝒍𝒄𝒐𝒎𝒆 𝒐𝒏/𝒐𝒇𝒇 -𝒂𝒅𝒎𝒊𝒏-
┊➟𝒍𝒊𝒔𝒕𝒑𝒄 
┊➟𝒍𝒊𝒔𝒕𝒈𝒄
┊➟𝒈𝒓𝒐𝒖𝒑𝒊𝒏𝒇𝒐 -𝒂𝒅𝒎𝒊𝒏-
┊➟𝒂𝒏𝒕𝒊𝒗𝒏 -𝒂𝒅𝒎𝒊𝒏-
┊➟𝒂𝒏𝒕𝒊𝒑𝒉𝒐𝒕𝒐 -𝒂𝒅𝒎𝒊𝒏-
┊➟𝒂𝒏𝒕𝒊𝒔𝒕𝒊𝒄𝒌𝒆𝒓 -𝒂𝒅𝒎𝒊𝒏-
┊➟𝒂𝒏𝒕𝒊𝒗𝒊𝒅𝒆𝒐 -𝒂𝒅𝒎𝒊𝒏-
┊➟𝒂𝒏𝒕𝒊𝒍𝒊𝒏𝒌𝒂𝒍𝒍 -𝒂𝒅𝒎𝒊𝒏-
┊➟𝒂𝒏𝒕𝒊𝒊𝒏𝒔𝒕𝒂𝒈𝒓𝒂𝒎 -𝒂𝒅𝒎𝒊𝒏-
┊➟𝒂𝒏𝒕𝒊𝒕𝒆𝒍𝒆𝒈𝒓𝒂𝒎 -𝒂𝒅𝒎𝒊𝒏-
┊➟𝒂𝒏𝒕𝒊𝒍𝒊𝒏𝒌 -𝒂𝒅𝒎𝒊𝒏-
┊➟𝒂𝒏𝒕𝒊𝒚𝒕 -𝒂𝒅𝒎𝒊𝒏-
┊➟𝒂𝒏𝒕𝒊𝒃𝒖𝒍𝒆 -𝒂𝒅𝒎𝒊𝒏-
┊➟𝒂𝒏𝒕𝒊𝒕𝒊𝒌𝒕𝒐𝒌 -𝒂𝒅𝒎𝒊𝒏-
┊➟𝒂𝒏𝒕𝒊𝒇𝒂𝒄𝒆𝒃𝒐𝒐𝒌 -𝒂𝒅𝒎𝒊𝒏-
┊➟𝒂𝒏𝒕𝒊𝒗𝒊𝒓𝒖𝒔 -𝒂𝒅𝒎𝒊𝒏-
┊➟𝒂𝒏𝒕𝒊𝒃𝒂𝒅𝒘𝒐𝒓𝒅 -𝒂𝒅𝒎𝒊𝒏-
┊➟𝒂𝒏𝒕𝒊𝒘𝒂𝒎𝒆 -𝒂𝒅𝒎𝒊𝒏-
┊➟𝒈𝒓𝒐𝒖𝒑 -𝒐𝒑𝒕𝒊𝒐𝒏𝒔-
┊➟𝒎𝒖𝒕𝒆
┊➟𝒈𝒓𝒐𝒖𝒑𝒊𝒏𝒇𝒐
┊➟𝒕𝒓𝒖𝒕𝒉 
┊➟𝒅𝒂𝒓𝒆
┊➟𝒔𝒍𝒐𝒕
┊➟𝒎𝒂𝒕𝒉
┊➟𝒗𝒐𝒕𝒆
┊➟𝒅𝒆𝒗𝒐𝒕𝒆
┊➟𝒄𝒆𝒌𝒗𝒐𝒕𝒆
┊➟𝒅𝒆𝒍𝒆𝒕𝒆𝒗𝒐𝒕𝒆
┊➟𝒖𝒑𝒗𝒐𝒕𝒆
┊➟𝒔𝒆𝒕𝒔𝒖𝒃𝒋𝒆𝒄𝒕 -𝒂𝒅𝒎𝒊𝒏-
┊➟𝒔𝒆𝒕𝒅𝒆𝒔𝒄 -𝒂𝒅𝒎𝒊𝒏-
┊➟𝒔𝒆𝒕𝒑𝒑𝒈𝒓𝒐𝒖𝒑 -𝒂𝒅𝒎𝒊𝒏-
┊➟𝒕𝒂𝒈𝒂𝒍𝒍 -𝒂𝒅𝒎𝒊𝒏-
┊➟𝒉𝒊𝒅𝒆𝒕𝒂𝒈 -𝒂𝒅𝒎𝒊𝒏-
┊➟𝒆𝒑𝒉𝒆𝒎𝒆𝒓𝒂𝒍
┊➟𝒅𝒆𝒎𝒐𝒕𝒆 -𝒂𝒅𝒎𝒊𝒏-
┊➟𝒑𝒓𝒐𝒎𝒐𝒕𝒆 -𝒂𝒅𝒎𝒊𝒏-
┊➟𝒆𝒅𝒊𝒕𝒊𝒏𝒇𝒐 -𝒂𝒅𝒎𝒊𝒏-
└───❴❏ 𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕4 ❏❵╼╼
`
let message = await prepareWAMessageMedia({ image: buffer, jpegThumbnail:buffer }, { upload: ZimBotInc.waUploadToServer })
var buttonReplyy = [
				{ urlButton: { displayText: `OWNER🍏`, url : `https://wa.me/258869103969` } },
				{ urlButton: { displayText: `SOURCECODE🥦`, url: `https://github.com/Samue-l1/Classic-V4` } },
				{ urlButton: { displayText: `WEBSITE🍎`, url: `https://chat.whatsapp.com/EPSGKau0IVi7J5lyOJO7Jk` } }
			]
			tempButtono(from, anu, '', buttonReplyy)
			}
break
case 'textpromenu': {
ZimBotInc.sendMessage(m.chat, { react: { text: `${global.reactmoji}`, key: m.key }})
ram11 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
anu = `
┌───❴❏ 𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕4 ❏❵╼╼
┊➢ᴡᴇʟᴄᴏᴍᴇ
└───────────●

┌───❴❏ 𝐀𝐁𝐎𝐔𝐓 ❏❵╼╼
┊➢ɴᴀᴍᴇ :  ${pushname}
┊➢ɴᴜᴍʙᴇʀ : wa.me/${m.sender.split('@')[0]}
┊➢ʀᴀᴍ : ${ram11}
┊➢ᴅᴇᴠɪᴄᴇ : ${os.type()}
┊➢ᴛᴏᴛᴀʟ ᴜsᴇʀs : ${Object.keys(global.db.users).length}
└───────────●

┌───❴❏ 𝐓𝐄𝐗𝐓𝐏𝐑𝐎𝐌𝐄𝐍𝐔 ❏❵╼╼
┊➟𝑐𝑎𝑛𝑑𝑦 -𝑡𝑒𝑥𝑡-
┊➟𝑐𝒉𝑟𝑖𝑠𝑡𝑚𝑎𝑠 -𝑡𝑒𝑥𝑡-
┊➟3𝑑𝑐𝒉𝑟𝑖𝑠𝑡𝑚𝑎𝑠 -𝑡𝑒𝑥𝑡-
┊➟𝑠𝑝𝑎𝑟𝑘𝑙𝑒𝑐𝒉𝑟𝑖𝑠𝑡𝑚𝑎𝑠 -𝑡𝑒𝑥𝑡-
┊➟𝑑𝑒𝑒𝑝𝑠𝑒𝑎 -𝑡𝑒𝑥𝑡-
┊➟𝑠𝑐𝑖𝑓𝑖 -𝑡𝑒𝑥𝑡-
┊➟𝑟𝑎𝑖𝑛𝑏𝑜𝑤2 -𝑡𝑒𝑥𝑡-
┊➟𝑤𝑎𝑡𝑒𝑟𝑝𝑖𝑝𝑒 -𝑡𝑒𝑥𝑡-
┊➟𝑠𝑝𝑜𝑜𝑘𝑦 -𝑡𝑒𝑥𝑡-
┊➟𝑝𝑒𝑛𝑐𝑖𝑙 -𝑡𝑒𝑥𝑡-
┊➟𝑐𝑖𝑟𝑐𝑢𝑖𝑡 -𝑡𝑒𝑥𝑡-
┊➟𝑑𝑖𝑠𝑐𝑜𝑣𝑒𝑟𝑦 -𝑡𝑒𝑥𝑡-
┊➟𝑚𝑒𝑡𝑎𝑙𝑖𝑐 -𝑡𝑒𝑥𝑡-
┊➟𝑓𝑖𝑐𝑡𝑖𝑜𝑛 -𝑡𝑒𝑥𝑡-
┊➟𝑑𝑒𝑚𝑜𝑛 -𝑡𝑒𝑥𝑡-
┊➟𝑡𝑟𝑎𝑛𝑠𝑓𝑜𝑟𝑚𝑒𝑟 -𝑡𝑒𝑥𝑡-
┊➟𝑏𝑒𝑟𝑟𝑦 -𝑡𝑒𝑥𝑡-
┊➟𝑡𝒉𝑢𝑛𝑑𝑒𝑟 -𝑡𝑒𝑥𝑡-
┊➟3𝑑𝑠𝑡𝑜𝑛𝑒2 -𝑡𝑒𝑥𝑡-
┊➟𝑛𝑒𝑜𝑛𝑙𝑖𝑔𝒉𝑡 -𝑡𝑒𝑥𝑡-
┊➟𝑔𝑙𝑖𝑡𝑐𝒉 -𝑡𝑒𝑥𝑡-
┊➟𝒉𝑎𝑟𝑟𝑦𝑝𝑜𝑡𝑡𝑒𝑟 -𝑡𝑒𝑥𝑡-
┊➟𝑏𝑟𝑜𝑘𝑒𝑛𝑔𝑙𝑎𝑠𝑠 -𝑡𝑒𝑥𝑡-
┊➟𝑝𝑎𝑝𝑒𝑟𝑐𝑢𝑡 -𝑡𝑒𝑥𝑡-
┊➟𝑤𝑎𝑡𝑒𝑟𝑐𝑜𝑙𝑜𝑟 -𝑡𝑒𝑥𝑡-
┊➟𝑚𝑢𝑙𝑡𝑖𝑐𝑜𝑙𝑜𝑟 -𝑡𝑒𝑥𝑡-
┊➟𝑛𝑒𝑜𝑛𝑑𝑒𝑣𝑖𝑙 -𝑡𝑒𝑥𝑡-
┊➟𝑢𝑛𝑑𝑒𝑟𝑤𝑎𝑡𝑒𝑟 -𝑡𝑒𝑥𝑡-
┊➟𝑔𝑟𝑎𝑓𝑓𝑖𝑡𝑖𝑏𝑖𝑘𝑒 -𝑡𝑒𝑥𝑡-
┊➟𝑠𝑛𝑜𝑤 -𝑡𝑒𝑥𝑡-
┊➟𝑐𝑙𝑜𝑢𝑑 -𝑡𝑒𝑥𝑡-
┊➟𝒉𝑜𝑛𝑒𝑦 -𝑡𝑒𝑥𝑡-
┊➟𝑖𝑐𝑒 -𝑡𝑒𝑥𝑡-
┊➟𝑓𝑟𝑢𝑖𝑡𝑗𝑢𝑖𝑐𝑒 -𝑡𝑒𝑥𝑡-
┊➟𝑏𝑖𝑠𝑐𝑢𝑖𝑡 -𝑡𝑒𝑥𝑡-
┊➟𝑤𝑜𝑜𝑑 -𝑡𝑒𝑥𝑡-
┊➟𝑐𝒉𝑜𝑐𝑜𝑙𝑎𝑡𝑒 -𝑡𝑒𝑥𝑡-
┊➟𝑠𝑡𝑟𝑎𝑤𝑏𝑒𝑟𝑟𝑦 -𝑡𝑒𝑥𝑡-
┊➟𝑚𝑎𝑡𝑟𝑖𝑥 -𝑡𝑒𝑥𝑡-
┊➟𝑏𝑙𝑜𝑜𝑑 -𝑡𝑒𝑥𝑡-
┊➟𝑑𝑟𝑜𝑝𝑤𝑎𝑡𝑒𝑟 -𝑡𝑒𝑥𝑡-
┊➟𝑡𝑜𝑥𝑖𝑐 -𝑡𝑒𝑥𝑡-
┊➟𝑙𝑎𝑣𝑎 -𝑡𝑒𝑥𝑡-
┊➟𝑟𝑜𝑐𝑘 -𝑡𝑒𝑥𝑡-
┊➟𝑏𝑙𝑜𝑜𝑑𝑔𝑙𝑎𝑠𝑠 -𝑡𝑒𝑥𝑡-
┊➟𝒉𝑎𝑙𝑙𝑜𝑤𝑒𝑒𝑛 -𝑡𝑒𝑥𝑡-
┊➟𝑑𝑎𝑟𝑘𝑔𝑜𝑙𝑑 -𝑡𝑒𝑥𝑡-
┊➟𝑗𝑜𝑘𝑒𝑟 -𝑡𝑒𝑥𝑡-
┊➟𝑤𝑖𝑐𝑘𝑒𝑟 -𝑡𝑒𝑥𝑡-
┊➟𝑓𝑖𝑟𝑒𝑤𝑜𝑟𝑘 -𝑡𝑒𝑥𝑡-
┊➟𝑠𝑘𝑒𝑙𝑒𝑡𝑜𝑛 -𝑡𝑒𝑥𝑡-
┊➟𝑏𝑙𝑎𝑐𝑘𝑝𝑖𝑛𝑘 -𝑡𝑒𝑥𝑡-
┊➟𝑠𝑎𝑛𝑑 -𝑡𝑒𝑥𝑡-
┊➟𝑔𝑙𝑢𝑒 -𝑡𝑒𝑥𝑡-
┊➟1917 -𝑡𝑒𝑥𝑡-
┊➟𝑙𝑒𝑎𝑣𝑒𝑠 -𝑡𝑒𝑥𝑡-
└───❴❏ 𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕4 ❏❵╼╼
`
const textpromenus = async (remoteJid, text, footer, content) => {
bufu = await getBuffer(picak+'TEXTPROMENU')
let message = await prepareWAMessageMedia({ image: bufu, jpegThumbnail:bufu }, { upload: ZimBotInc.waUploadToServer })
const templateMessage = {
viewOnceMessage: {
message: { 
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: text,
hydratedFooterText: `➢𝙰𝙻𝙻 𝙷𝙰𝙸𝙻 𝚃𝙾 𝙺𝙸𝙽𝙶 𝚂𝙰𝙼 \n➢𝙲𝙻𝙰𝚂𝚂𝙸𝙲 𝙱𝙾𝚃 2024`,
hydratedButtons: content,
},
},
},
},
};
const sendMsg = await ZimBotInc.relayMessage(remoteJid, templateMessage, {});
};
let message = await prepareWAMessageMedia({ image: buffer, jpegThumbnail:buffer }, { upload: ZimBotInc.waUploadToServer })
var textpromenui = [
				{ urlButton: { displayText: `OWNER🍏`, url : `https://wa.me/258869103969` } },
				{ urlButton: { displayText: `SOURCECODE🥦`, url: `https://github.com/Samue-l1/Classic-V4` } },
				{ urlButton: { displayText: `WEBSITE🍎`, url: `https://chat.whatsapp.com/EPSGKau0IVi7J5lyOJO7Jk` } }
			]
			textpromenus(from, anu, '', textpromenui)
			}
break
case 'downloadmenu': {
ZimBotInc.sendMessage(m.chat, { react: { text: `${global.reactmoji}`, key: m.key }})
ram22 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
anu =`
┌───❴❏ 𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕4 ❏❵╼╼
┊➢ᴡᴇʟᴄᴏᴍᴇ
└───────────●

┌───❴❏ 𝐀𝐁𝐎𝐔𝐓 ❏❵╼╼
┊➢ɴᴀᴍᴇ :  ${pushname}
┊➢ɴᴜᴍʙᴇʀ : wa.me/${m.sender.split('@')[0]}
┊➢ʀᴀᴍ : ${ram22}
┊➢ᴅᴇᴠɪᴄᴇ : ${os.type()}
┊➢ᴛᴏᴛᴀʟ ᴜsᴇʀs : ${Object.keys(global.db.users).length}
└───────────●

┌───❴❏ 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐌𝐄𝐍𝐔 ❏❵╼╼
┊➟𝒚𝒕𝒎𝒑3 -𝒍𝒊𝒏𝒌-
┊➟𝒚𝒕𝒎𝒑4 -𝒍𝒊𝒏𝒌-
┊➟𝒂𝒖𝒅𝒊𝒐  -𝒍𝒊𝒏𝒌-
┊➟𝒑𝒍𝒂𝒚 -𝒒𝒖𝒆𝒓𝒚-
┊➟𝒔𝒐𝒏𝒈 -𝒒𝒖𝒆𝒓𝒚-
┊➟𝒑𝒍𝒂𝒚2 -𝒒𝒖𝒆𝒓𝒚-
┊➟𝒎𝒆𝒅𝒊𝒂𝒇𝒊𝒓𝒆 -𝒍𝒊𝒏𝒌-
┊➟𝒇𝒃 -𝒍𝒊𝒏𝒌-
┊➟𝒇𝒃2 -𝒍𝒊𝒏𝒌-
┊➟𝒚𝒕𝒔𝒗𝒊𝒅𝒆𝒐 -𝒒𝒖𝒆𝒓𝒚-
┊➟𝒈𝒆𝒕𝒎𝒖𝒔𝒊𝒄 -𝒒𝒖𝒆𝒓𝒚-
┊➟𝒈𝒆𝒕𝒗𝒊𝒅𝒆𝒐 -𝒒𝒖𝒆𝒓𝒚-
┊➟𝒔𝒂𝒗𝒆𝒇𝒓𝒐𝒎 -𝒒𝒖𝒆𝒓𝒚-
┊➟𝒑𝒊𝒏𝒅𝒍 -𝒒𝒖𝒆𝒓𝒚-
┊➟𝒋𝒐𝒐𝒙 -𝒒𝒖𝒆𝒓𝒚-
┊➟𝒕𝒊𝒌𝒕𝒐𝒌 -𝒍𝒊𝒏𝒌-
┊➟𝒕𝒊𝒌𝒕𝒐𝒌2 -𝒍𝒊𝒏𝒌-
┊➟𝒕𝒘𝒊𝒕𝒕𝒆𝒓 -𝒍𝒊𝒏𝒌-
┊➟𝒕𝒘𝒊𝒕𝒕𝒆𝒓2 -𝒍𝒊𝒏𝒌-
┊➟𝒕𝒊𝒌𝒕𝒐𝒌3 -𝒍𝒊𝒏𝒌-
┊➟𝒕𝒊𝒌𝒕𝒐𝒌4 -𝒍𝒊𝒏𝒌-
┊➟𝒊𝒈 -𝒍𝒊𝒏𝒌-
┊➟𝒊𝒏𝒔𝒕𝒂𝒈𝒓𝒂𝒎𝒔𝒕𝒐𝒓𝒚 -𝒍𝒊𝒏𝒌-
┊➟𝒊𝒏𝒔𝒕𝒂𝒈𝒓𝒂𝒎𝒔𝒕𝒐𝒓𝒚2 -𝒍𝒊𝒏𝒌-
┊➟𝒊𝒈𝒊𝒎𝒂𝒈𝒆 -𝒍𝒊𝒏𝒌-
┊➟𝒊𝒏𝒔𝒕𝒂𝒈𝒓𝒂𝒎𝒓𝒆𝒂𝒍 -𝒍𝒊𝒏𝒌-
┊➟𝒔𝒐𝒖𝒏𝒅𝒄𝒍𝒐𝒖𝒅 -𝒍𝒊𝒏𝒌-
┊➟𝒚𝒕𝒔𝒉𝒐𝒓𝒕𝒔 -𝒍𝒊𝒏𝒌-
┊➟𝒖𝒏𝒎𝒂 -𝒍𝒊𝒏𝒌-
┊➟𝒕𝒘𝒊𝒕𝒕𝒆𝒓𝒂𝒖𝒅𝒊𝒐 -𝒍𝒊𝒏𝒌-
┊➟𝒚𝒕𝒔𝒂𝒖𝒅𝒊𝒐 -𝒒𝒖𝒆𝒓𝒚-
┊➟𝒚𝒕𝒔𝒗𝒊𝒅𝒆𝒐 -𝒒𝒖𝒆𝒓𝒚-
┊➟𝒚𝒕𝒔2 -𝒒𝒖𝒆𝒓𝒚-
┊➟𝒇𝒃𝒅𝒍 -𝒍𝒊𝒏𝒌-
┊➟𝒇𝒃𝒗𝒊𝒅𝒆𝒐 -𝒍𝒊𝒏𝒌-
┊➟𝒈𝒆𝒕 -𝒍𝒊𝒏𝒌-
┊➟𝒕𝒊𝒌𝒕𝒐𝒌5 -𝒍𝒊𝒏𝒌-
┊➟𝒕𝒊𝒕𝒌𝒕𝒐𝒌3 -𝒍𝒊𝒏𝒌-
┊➟𝒕𝒊𝒌𝒕𝒐𝒌𝒎𝒑3 -𝒍𝒊𝒏𝒌-
┊➟𝒕𝒕𝒎𝒑3 -𝒍𝒊𝒏𝒌-
┊➟𝒊𝒈2 -𝒍𝒊𝒏𝒌-
┊➟𝒈𝒊𝒕 -𝒍𝒊𝒏𝒌-
┊➟𝒊𝒈3 -𝒍𝒊𝒏𝒌-
┊➟𝒊𝒈𝒊𝒎𝒂𝒈𝒆 -𝒍𝒊𝒏𝒌-
┊➟𝒊𝒈𝒕𝒗 -𝒍𝒊𝒏𝒌-
┊➟𝒇𝒃𝒎𝒑3 -𝒍𝒊𝒏𝒌-
┊➟𝒚𝒕𝒅𝒍 -𝒍𝒊𝒏𝒌-
└───❴❏ 𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕4 ❏❵╼╼
`
const donlod = async (remoteJid, text, footer, content) => {
bufu = await getBuffer(picak+'DOWNLOADMENU')
let message = await prepareWAMessageMedia({ image: bufu, jpegThumbnail:bufu }, { upload: ZimBotInc.waUploadToServer })
const templateMessage = {
viewOnceMessage: {
message: { 
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: text,
hydratedFooterText: `➢𝙰𝙻𝙻 𝙷𝙰𝙸𝙻 𝚃𝙾 𝙺𝙸𝙽𝙶 𝚂𝙰𝙼 \n➢𝙲𝙻𝙰𝚂𝚂𝙸𝙲 𝙱𝙾𝚃 2024`,
hydratedButtons: content,
},
},
},
},
};
const sendMsg = await ZimBotInc.relayMessage(remoteJid, templateMessage, {});
};

var downloadmenui = [
				{ urlButton: { displayText: `OWNER🍏`, url : `https://wa.me/258869103969` } },
				{ urlButton: { displayText: `SOURCECODE🥦`, url: `https://github.com/Samue-l1/Classic-V4` } },
				{ urlButton: { displayText: `WEBSITE🍎`, url: `https://chat.whatsapp.com/EPSGKau0IVi7J5lyOJO7Jk` } }
			]
			donlod(from, anu, '', downloadmenui)
			}
break
case 'photofiltermenu':{
ZimBotInc.sendMessage(m.chat, { react: { text: `${global.reactmoji}`, key: m.key }})
ram30 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
anu =`
┌───❴❏ 𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕4 ❏❵╼╼
┊➢ᴡᴇʟᴄᴏᴍᴇ
└───────────●

┌───❴❏ 𝐀𝐁𝐎𝐔𝐓 ❏❵╼╼
┊➢ɴᴀᴍᴇ :  ${pushname}
┊➢ɴᴜᴍʙᴇʀ : wa.me/${m.sender.split('@')[0]}
┊➢ʀᴀᴍ : ${ram30}
┊➢ᴅᴇᴠɪᴄᴇ : ${os.type()}
┊➢ᴛᴏᴛᴀʟ ᴜsᴇʀs : ${Object.keys(global.db.users).length}
└───────────●

  
┌───❴❏ 𝐏𝐑𝐎𝐅𝐈𝐋𝐓𝐄𝐑𝐌𝐄𝐍𝐔 ❏❵╼╼
┊➟𝒂𝒏𝒈𝒊𝒆 -𝒑𝒉𝒐𝒕𝒐-
┊➟𝒂𝒓𝒊𝒂 -𝒑𝒉𝒐𝒕𝒐-
┊➟𝒂𝒕𝒕𝒊𝒄 -𝒑𝒉𝒐𝒕𝒐-
┊➟𝒃𝒍𝒂𝒄𝒌𝒂𝒏𝒅𝒘𝒉𝒊𝒕𝒆 -𝒑𝒉𝒐𝒕𝒐-
┊➟𝒄𝒉𝒐𝒓𝒎𝒆1977 -𝒑𝒉𝒐𝒕𝒐-
┊➟𝒄𝒐𝒏𝒔𝒕𝒓𝒂𝒔𝒕𝒃𝒂𝒏𝒅𝒘 -𝒑𝒉𝒐𝒕𝒐-
┊➟𝒄𝒓𝒆𝒂𝒎𝒚 -𝒑𝒉𝒐𝒕𝒐-
┊➟𝒅𝒖𝒐𝒕𝒐𝒏𝒆 -𝒑𝒉𝒐𝒕𝒐-
┊➟𝒆𝒗𝒂 -𝒑𝒉𝒐𝒕𝒐-
┊➟𝒈𝒐𝒍𝒅𝒆𝒏𝒉𝒐𝒖𝒓 -𝒑𝒉𝒐𝒕𝒐-
┊➟𝒉𝒂𝒏𝒂 -𝒑𝒉𝒐𝒕𝒐-
┊➟𝒍𝒂𝒗𝒂𝒏𝒅𝒆𝒓 -𝒑𝒉𝒐𝒕𝒐-
┊➟𝒍𝒆𝒎𝒐𝒏𝒂𝒏𝒅𝒆 -𝒑𝒉𝒐𝒕𝒐-
┊➟𝒍𝒊𝒈𝒉𝒕𝒍𝒆𝒂𝒌 -𝒑𝒉𝒐𝒕𝒐-
┊➟𝒍𝒊𝒔𝒂 -𝒑𝒉𝒐𝒕𝒐-
┊➟𝒍𝒐𝒎𝒐 -𝒑𝒉𝒐𝒕𝒐-
┊➟𝒎𝒊𝒍𝒌 -𝒑𝒉𝒐𝒕𝒐-
┊➟𝒎𝒐𝒍𝒍𝒚 -𝒑𝒉𝒐𝒕𝒐-
┊➟𝒎𝒐𝒏𝒐𝒄𝒉𝒓𝒐𝒎𝒆 -𝒑𝒉𝒐𝒕𝒐-
┊➟𝒎𝒐𝒓𝒏𝒊𝒏𝒈 -𝒑𝒉𝒐𝒕𝒐-
┊➟𝒎𝒐𝒗𝒊𝒆 -𝒑𝒉𝒐𝒕𝒐-
┊➟𝒐𝒓𝒕𝒐𝒏 -𝒑𝒉𝒐𝒕𝒐-
┊➟𝒑𝒂𝒓𝒆𝒕𝒓𝒐 -𝒑𝒉𝒐𝒕𝒐-
┊➟𝒑𝒆𝒓𝒇𝒆𝒄𝒕𝒃𝒂𝒏𝒅𝒘 -𝒑𝒉𝒐𝒕𝒐-
┊➟𝒑𝒍𝒖𝒎𝒚 -𝒑𝒉𝒐𝒕𝒐-
┊➟𝒓𝒆𝒕𝒓𝒐𝒍𝒈𝒂 -𝒑𝒉𝒐𝒕𝒐-
┊➟𝒓𝒖𝒃𝒚 -𝒑𝒉𝒐𝒕𝒐-
┊➟𝒔𝒂𝒏𝒅 -𝒑𝒉𝒐𝒕𝒐-
┊➟𝒔𝒂𝒑𝒑𝒉𝒊𝒓𝒆 -𝒑𝒉𝒐𝒕𝒐-
┊➟𝒔𝒆𝒑𝒊𝒂 -𝒑𝒉𝒐𝒕𝒐-
┊➟𝒔𝒐𝒇𝒕𝒔𝒆𝒑𝒊𝒂 -𝒑𝒉𝒐𝒕𝒐-
┊➟𝒔𝒐𝒍𝒂𝒓𝒊𝒛𝒆 -𝒑𝒉𝒐𝒕𝒐-
┊➟𝒔𝒑𝒉𝒊𝒏𝒙 -𝒑𝒉𝒐𝒕𝒐-
┊➟𝒗𝒆𝒏𝒖𝒔 -𝒑𝒉𝒐𝒕𝒐-
┊➟𝒋𝒂𝒑𝒂𝒏𝒆𝒔𝒆 -𝒑𝒉𝒐𝒕𝒐-
┊➟𝒉𝒅𝒓 -𝒑𝒉𝒐𝒕𝒐-
┊➟𝒗𝒊𝒆𝒘𝒇𝒊𝒍𝒕𝒆𝒓 -𝒑𝒉𝒐𝒕𝒐-
┊➟𝒘𝒂𝒓𝒎𝒔𝒖𝒏𝒔𝒆𝒕 -𝒑𝒉𝒐𝒕𝒐-
└───❴❏ 𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕4 ❏❵╼╼
`
const photofilter2 = async (remoteJid, text, footer, content) => {
bufu = await getBuffer(picak+'PHOTOFILTERMENU')
let message = await prepareWAMessageMedia({ image: bufu, jpegThumbnail:bufu }, { upload: ZimBotInc.waUploadToServer })
const templateMessage = {
viewOnceMessage: {
message: { 
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: text,
hydratedFooterText: `➢𝙰𝙻𝙻 𝙷𝙰𝙸𝙻 𝚃𝙾 𝙺𝙸𝙽𝙶 𝚂𝙰𝙼 \n➢𝙲𝙻𝙰𝚂𝚂𝙸𝙲 𝙱𝙾𝚃 2024`,
hydratedButtons: content,
},
},
},
},
};
const sendMsg = await ZimBotInc.relayMessage(remoteJid, templateMessage, {});
};
let message = await prepareWAMessageMedia({ image: buffer, jpegThumbnail:buffer }, { upload: ZimBotInc.waUploadToServer })
var buttonReplyy = [
				{ urlButton: { displayText: `OWNER🍏`, url : `https://wa.me/258869103969` } },
				{ urlButton: { displayText: `SOURCECODE🥦`, url: `https://github.com/Samue-l1/Classic-V4` } },
				{ urlButton: { displayText: `WEBSITE🍎`, url: `https://chat.whatsapp.com/EPSGKau0IVi7J5lyOJO7Jk` } }
			]
			photofilter2(from, anu, '', buttonReplyy)
			}
break
case 'nsfwmenu':{
  ZimBotInc.sendMessage(m.chat, { react: { text: `${global.reactmoji}`, key: m.key }})
  buffer = await getBuffer(picak+'NSFW MENU')
  ram35 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
  anu =`
┌───❴❏ 𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕4 ❏❵╼╼
┊➢ᴡᴇʟᴄᴏᴍᴇ
└───────────●

┌───❴❏ 𝐀𝐁𝐎𝐔𝐓 ❏❵╼╼
┊➢ɴᴀᴍᴇ :  ${pushname}
┊➢ɴᴜᴍʙᴇʀ : wa.me/${m.sender.split('@')[0]}
┊➢ʀᴀᴍ : ${ram35}
┊➢ᴅᴇᴠɪᴄᴇ : ${os.type()}
┊➢ᴛᴏᴛᴀʟ ᴜsᴇʀs : ${Object.keys(global.db.users).length}
└───────────●
  
    
┌───❴❏ 𝐍𝐒𝐅𝐖𝐌𝐄𝐍𝐔 ❏❵╼╼
┊➟𝒎𝒂𝒔𝒕𝒖𝒓𝒃𝒂𝒕𝒊𝒐𝒏
┊➟𝒋𝒂𝒉𝒚
┊➟𝒉𝒆𝒏𝒕𝒂𝒊
┊➟𝒈𝒍𝒂𝒔𝒔𝒆𝒔
┊➟𝒈𝒂𝒏𝒈𝒃𝒂𝒏𝒈
┊➟𝒇𝒐𝒐𝒕
┊➟𝒇𝒆𝒎𝒅𝒐𝒎
┊➟𝒄𝒖𝒎
┊➟𝒆𝒓𝒐
┊➟𝒄𝒖𝒄𝒌𝒉𝒐𝒍𝒅
┊➟𝒃𝒍𝒐𝒘𝒋𝒐𝒃
┊➟𝒃𝒅𝒔𝒎
┊➟𝒂𝒉𝒆𝒈𝒂𝒐
┊➟𝒂𝒔𝒔
┊➟𝒐𝒓𝒈𝒚
┊➟𝒑𝒂𝒏𝒕𝒊𝒆𝒔
┊➟𝒑𝒖𝒔𝒔𝒚
┊➟𝒚𝒖𝒓𝒊
┊➟𝒕𝒉𝒊𝒈𝒉𝒔
┊➟𝒕𝒆𝒏𝒕𝒂𝒄𝒍𝒆𝒔
└───❴❏ 𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕4 ❏❵╼╼
  `
const nsfmenu = async (remoteJid, text, footer, content) => {
bufu = await getBuffer(picak+'NSFMENU')
let message = await prepareWAMessageMedia({ image: bufu, jpegThumbnail:bufu }, { upload: ZimBotInc.waUploadToServer })
const templateMessage = {
viewOnceMessage: {
message: { 
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: text,
hydratedFooterText: `➢𝙰𝙻𝙻 𝙷𝙰𝙸𝙻 𝚃𝙾 𝙺𝙸𝙽𝙶 𝚂𝙰𝙼 \n➢𝙲𝙻𝙰𝚂𝚂𝙸𝙲 𝙱𝙾𝚃 2024`,
hydratedButtons: content,
},
},
},
},
};
const sendMsg = await ZimBotInc.relayMessage(remoteJid, templateMessage, {});
};
let message = await prepareWAMessageMedia({ image: buffer, jpegThumbnail:buffer }, { upload: ZimBotInc.waUploadToServer })
var buttonReplyy = [
				{ urlButton: { displayText: `OWNER🍏`, url : `https://wa.me/2588691039690` } },
				{ urlButton: { displayText: `SOURCECODE🥦`, url: `https://github.com/Samue-l1/Classic-V4` } },
				{ urlButton: { displayText: `WEBSITE🍎`, url: `https://chat.whatsapp.com/EPSGKau0IVi7J5lyOJO7Jk` } }
			]
			nsfmenu(from, anu, '', buttonReplyy)
			}
break
case 'animemenu':{
  ZimBotInc.sendMessage(m.chat, { react: { text: `${global.reactmoji}`, key: m.key }})
  ram40 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
  buffer = await getBuffer(picak+'ANIME MENU')
  anu =`
┌───❴❏ 𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕4 ❏❵╼╼
┊➢ᴡᴇʟᴄᴏᴍᴇ
└───────────●

┌───❴❏ 𝐀𝐁𝐎𝐔𝐓 ❏❵╼╼
┊➢ɴᴀᴍᴇ :  ${pushname}
┊➢ɴᴜᴍʙᴇʀ : wa.me/${m.sender.split('@')[0]}
┊➢ʀᴀᴍ : ${ram40}
┊➢ᴅᴇᴠɪᴄᴇ : ${os.type()}
┊➢ᴛᴏᴛᴀʟ ᴜsᴇʀs : ${Object.keys(global.db.users).length}
└───────────●
  
    
┌───❴❏ 𝐀𝐍𝐈𝐌𝐄𝐌𝐄𝐍𝐔 ❏❵╼╼
┊➟𝒄𝒓𝒚
┊➟𝒌𝒊𝒍𝒍
┊➟𝒉𝒖𝒈
┊➟𝒑𝒂𝒕
┊➟𝒍𝒊𝒄𝒌
┊➟𝒌𝒊𝒔𝒔
┊➟𝒃𝒊𝒕𝒆
┊➟𝒚𝒆𝒆𝒕
┊➟𝒏𝒆𝒌𝒐
┊➟𝒃𝒖𝒍𝒍𝒚
┊➟𝒃𝒐𝒏𝒌
┊➟𝒘𝒊𝒏𝒌
┊➟𝒑𝒐𝒌𝒆
┊➟𝒏𝒐𝒎
┊➟𝒔𝒍𝒂𝒑
┊➟𝒔𝒎𝒊𝒍𝒆
┊➟𝒘𝒂𝒗𝒆
┊➟𝒂𝒘𝒐𝒐
┊➟𝒃𝒍𝒖𝒔𝒉
┊➟𝒔𝒎𝒖𝒈
┊➟𝒈𝒍𝒐𝒎𝒑
┊➟𝒉𝒂𝒑𝒑𝒚
┊➟𝒅𝒂𝒏𝒄𝒆
┊➟𝒄𝒓𝒊𝒏𝒈𝒆
┊➟𝒄𝒖𝒅𝒅𝒍𝒆
┊➟𝒉𝒊𝒈𝒉𝒇𝒊𝒗𝒆
┊➟𝒔𝒉𝒊𝒏𝒐𝒃𝒖
┊➟𝒎𝒆𝒈𝒖𝒎𝒊𝒏
┊➟𝒉𝒂𝒏𝒅𝒉𝒐𝒍𝒅
┊➟𝒂𝒏𝒊𝒎𝒆𝒔𝒍𝒂𝒑
┊➟𝒂𝒏𝒊𝒎𝒆𝒑𝒂𝒕
┊➟𝒂𝒏𝒊𝒎𝒆𝒏𝒆𝒌𝒐
┊➟𝒂𝒏𝒊𝒎𝒆𝒉𝒖𝒈
┊➟𝒂𝒏𝒊𝒎𝒆𝒌𝒊𝒔𝒔
┊➟𝒂𝒏𝒊𝒎𝒆𝒘𝒍𝒑
┊➟𝒂𝒏𝒊𝒎𝒆𝒔𝒑𝒂𝒏𝒌
┊➟𝒔𝒉𝒊𝒏𝒐𝒃𝒖2
┊➟𝒎𝒆𝒈𝒖𝒎𝒊𝒏2
┊➟𝒂𝒘𝒐𝒐2
┊➟𝒂𝒏𝒊𝒎𝒆𝒘𝒂𝒍𝒍2
┊➟𝒔𝒆𝒂𝒓𝒄𝒉𝒂𝒏𝒊𝒎𝒆 -𝒒𝒖𝒆𝒓𝒚-
└───❴❏ 𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕4 ❏❵╼╼
  `
const animemenu1 = async (remoteJid, text, footer, content) => {
bufu = await getBuffer(picak+'ANIMEMENU')
let message = await prepareWAMessageMedia({ image: bufu, jpegThumbnail:bufu }, { upload: ZimBotInc.waUploadToServer })
const templateMessage = {
viewOnceMessage: {
message: { 
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: text,
hydratedFooterText: `➢𝙰𝙻𝙻 𝙷𝙰𝙸𝙻 𝚃𝙾 𝙺𝙸𝙽𝙶 𝚂𝙰𝙼 \n➢𝙲𝙻𝙰𝚂𝚂𝙸𝙲 𝙱𝙾𝚃 2024`,
hydratedButtons: content,
},
},
},
},
};
const sendMsg = await ZimBotInc.relayMessage(remoteJid, templateMessage, {});
                  };
  let message = await prepareWAMessageMedia({ image: buffer, jpegThumbnail:buffer }, { upload: ZimBotInc.waUploadToServer })
  var buttonReplyy = [
          { urlButton: { displayText: `OWNER🍏`, url : `https://wa.me/258869103969` } },
          { urlButton: { displayText: `SOURCECODE🥦`, url: `https://github.com/Samue-l1/Classic-V4` } },
          { urlButton: { displayText: `WEBSITE🍎`, url: `https://chat.whatsapp.com/EPSGKau0IVi7J5lyOJO7Jk` } }
        ]
        animemenu1(from, anu, '', buttonReplyy)
        }
break
case 'convertmenu': {
  ZimBotInc.sendMessage(m.chat, { react: { text: `${global.reactmoji}`, key: m.key }})
  ram70 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
  buffer = await getBuffer(picak+'CONVERT MENU')
  anu =`
┌───❴❏ 𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕4 ❏❵╼╼
┊➢ᴡᴇʟᴄᴏᴍᴇ
└───────────●

┌───❴❏ 𝐀𝐁𝐎𝐔𝐓 ❏❵╼╼
┊➢ɴᴀᴍᴇ :  ${pushname}
┊➢ɴᴜᴍʙᴇʀ : wa.me/${m.sender.split('@')[0]}
┊➢ʀᴀᴍ : ${ram70}
┊➢ᴅᴇᴠɪᴄᴇ : ${os.type()}
┊➢ᴛᴏᴛᴀʟ ᴜsᴇʀs : ${Object.keys(global.db.users).length}
└───────────●
  
    
┌───❴❏ 𝐂𝐎𝐍𝐕𝐄𝐑𝐓 𝐌𝐄𝐍𝐔 ❏❵╼╼
┊➟𝒕𝒐𝒊𝒎𝒈 -𝒒𝒖𝒐𝒕𝒆 𝒔𝒕𝒊𝒄𝒌𝒆𝒓-
┊➟𝒕𝒐𝒈𝒊𝒇 -𝒒𝒖𝒐𝒕𝒆 𝒗𝒊𝒅𝒆𝒐-
┊➟𝒕𝒐𝒅𝒐𝒄𝒖𝒎𝒆𝒏𝒕 -𝒎𝒆𝒅𝒊𝒂-
┊➟𝒃𝒂𝒔𝒔 -𝒂𝒖𝒅𝒊𝒐-
┊➟𝒃𝒍𝒐𝒘𝒏 -𝒂𝒖𝒅𝒊𝒐-
┊➟𝒅𝒆𝒆𝒑 -𝒂𝒖𝒅𝒊𝒐-
┊➟𝒆𝒂𝒓𝒂𝒑𝒆 -𝒂𝒖𝒅𝒊𝒐-
┊➟𝒇𝒂𝒔𝒕 -𝒂𝒖𝒅𝒊𝒐-
┊➟𝒇𝒂𝒕 -𝒂𝒖𝒅𝒊𝒐-
┊➟𝒏𝒊𝒈𝒉𝒕𝒄𝒐𝒓𝒆 -𝒂𝒖𝒅𝒊𝒐-
┊➟𝒓𝒆𝒗𝒆𝒓𝒔𝒆 -𝒂𝒖𝒅𝒊𝒐-
┊➟𝒓𝒐𝒃𝒐𝒕 -𝒂𝒖𝒅𝒊𝒐-
┊➟𝒔𝒍𝒐𝒘 -𝒂𝒖𝒅𝒊𝒐-
┊➟𝒔𝒎𝒐𝒐𝒕𝒉 -𝒂𝒖𝒅𝒊𝒐-
┊➟𝒔𝒒𝒖𝒊𝒓𝒓𝒆𝒍 -𝒂𝒖𝒅𝒊𝒐-
┊➟𝒔𝒕𝒊𝒄𝒌𝒆𝒓 -𝒎𝒆𝒅𝒊𝒂-
┊➟𝒔𝒎𝒆𝒎𝒆 -𝒎𝒆𝒅𝒊𝒂-
┊➟𝒔𝒕𝒊𝒄𝒌𝒆𝒓𝒎𝒆𝒎𝒆 -𝒎𝒆𝒅𝒊𝒂-
┊➟𝒔𝒘𝒎 -𝒔𝒕𝒊𝒄𝒌𝒆𝒓-
└───❴❏ 𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕4 ❏❵╼╼
   `
  const convertmenu1 = async (remoteJid, text, footer, content) => {
bufu = await getBuffer(picak+'CONVERTMENU')
let message = await prepareWAMessageMedia({ image: bufu, jpegThumbnail:bufu }, { upload: ZimBotInc.waUploadToServer })
const templateMessage = {
viewOnceMessage: {
message: { 
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: text,
hydratedFooterText: `➢𝙰𝙻𝙻 𝙷𝙰𝙸𝙻 𝚃𝙾 𝙺𝙸𝙽𝙶 𝚂𝙰𝙼 \n➢𝙲𝙻𝙰𝚂𝚂𝙸𝙲 𝙱𝙾𝚃 2024`,
hydratedButtons: content,
},
},
},
},
};
const sendMsg = await ZimBotInc.relayMessage(remoteJid, templateMessage, {});
};
  let message = await prepareWAMessageMedia({ image: buffer, jpegThumbnail:buffer }, { upload: ZimBotInc.waUploadToServer })
var buttonReplyy = [
				{ urlButton: { displayText: `OWNER🍏`, url : `https://wa.me/258869103969` } },
				{ urlButton: { displayText: `SOURCECODE🥦`, url: `ZimBotInc` } },
				{ urlButton: { displayText: `WEBSITE🍎`, url: `https://chat.whatsapp.com/EPSGKau0IVi7J5lyOJO7Jk` } }
			]
			convertmenu1(from, anu, '', buttonReplyy)
			}
break
case 'toolmenu': {
  ZimBotInc.sendMessage(m.chat, { react: { text: `${global.reactmoji}`, key: m.key }})
  buffer = await getBuffer(picak+'TOOL MENU')
  ram90 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
  anu =`
┌───❴❏ 𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕4 ❏❵╼╼
┊➢ᴡᴇʟᴄᴏᴍᴇ
└───────────●


┌───❴❏ 𝐀𝐁𝐎𝐔𝐓 ❏❵╼╼
┊➢ɴᴀᴍᴇ :  ${pushname}
┊➢ɴᴜᴍʙᴇʀ : wa.me/${m.sender.split('@')[0]}
┊➢ʀᴀᴍ : ${ram90}
┊➢ᴅᴇᴠɪᴄᴇ : ${os.type()}
┊➢ᴛᴏᴛᴀʟ ᴜsᴇʀs : ${Object.keys(global.db.users).length}
└───────────●
  
    
┌───❴❏ 𝐓𝐎𝐎𝐋𝐌𝐄𝐍𝐔 ,❏❵╼╼
┊➟𝒊𝒑 ->-
┊➟𝒊𝒑𝒅𝒐𝒎𝒂𝒊𝒏 -𝒅𝒐𝒎𝒂𝒊𝒏 𝒏𝒂𝒎𝒆-
┊➟𝒄𝒐𝒅𝒆𝒄𝒐𝒍𝒐𝒓 -𝒕𝒆𝒙𝒕-
┊➟𝒉𝒂𝒄𝒌𝒆𝒓𝒎𝒂𝒌𝒆𝒓 -𝒑𝒊𝒄 𝒖𝒓𝒍-
┊➟𝒄𝒉𝒆𝒄𝒌𝒏𝒖𝒎𝒃𝒆𝒓 -𝒏𝒖𝒎𝒃𝒆𝒓-
┊➟𝒗𝒆𝒓𝒊𝒑𝒉𝒐𝒏𝒆 -𝒏𝒖𝒎𝒃𝒆𝒓-
┊➟𝒘𝒆𝒂𝒕𝒉𝒆𝒓 -𝒑𝒍𝒂𝒄𝒆-
┊➟𝒂𝒕𝒕𝒑 -𝒕𝒆𝒙𝒕-
┊➟𝒔𝒔𝒘𝒆𝒃-𝒉𝒑 -𝒖𝒓𝒍-
┊➟𝒔𝒉𝒐𝒓𝒕𝒍𝒊𝒏𝒌 -𝒖𝒓𝒍-
┊➟𝒔𝒔𝒘𝒆𝒃-𝒑𝒄 -𝒖𝒓𝒍-
┊➟𝒔𝒉𝒐𝒓𝒕𝒍𝒊𝒏𝒌𝒄𝒖𝒕𝒕𝒍𝒚 -𝒖𝒓𝒍-
┊➟𝒔𝒉𝒐𝒓𝒕𝒍𝒊𝒏𝒌𝒊𝒔𝒈𝒅 -𝒖𝒓𝒍-
┊➟𝒃𝒓𝒂𝒊𝒏𝒍𝒚 -𝒒𝒖𝒆𝒓𝒚-
└───❴❏ 𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕4 ❏❵╼╼
  `
const toolmenu1 = async (remoteJid, text, footer, content) => {
bufu = await getBuffer(picak+'TOOLMENU')
let message = await prepareWAMessageMedia({ image: bufu, jpegThumbnail:bufu }, { upload: ZimBotInc.waUploadToServer })
const templateMessage = {
viewOnceMessage: {
message: { 
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: text,
hydratedFooterText: `➢𝙰𝙻𝙻 𝙷𝙰𝙸𝙻 𝚃𝙾 𝙺𝙸𝙽𝙶 𝚂𝙰𝙼 \n➢𝙲𝙻𝙰𝚂𝚂𝙸𝙲 𝙱𝙾𝚃 2024`,
hydratedButtons: content,
},
},
},
},
};
const sendMsg = await ZimBotInc.relayMessage(remoteJid, templateMessage, {});
};
  let message = await prepareWAMessageMedia({ image: buffer, jpegThumbnail:buffer }, { upload: ZimBotInc.waUploadToServer })
var buttonReplyy = [
				{ urlButton: { displayText: `OWNER🍏`, url : `https://wa.me/258869103969` } },
				{ urlButton: { displayText: `SOURCECODE🥦`, url: `https://github.com/Samue-l1/Classic-V4` } },
				{ urlButton: { displayText: `WEBSITE🍎`, url: `https://chat.whatsapp.com/EPSGKau0IVi7J5lyOJO7Jk` } }
			]
			toolmenu1(from, anu, '', buttonReplyy)
			}
break
case 'searchmenu':{
  ZimBotInc.sendMessage(m.chat, { react: { text: `${global.reactmoji}`, key: m.key }})
  buffer = await getBuffer(picak+'SEARCH MENU')
  ram200 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
  anu =`
┌───❴❏ 𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕4 ❏❵╼╼
┊➢ᴡᴇʟᴄᴏᴍᴇ
└───────────●


┌───❴❏ 𝐀𝐁𝐎𝐔𝐓 ❏❵╼╼
┊➢ɴᴀᴍᴇ :  ${pushname}
┊➢ɴᴜᴍʙᴇʀ : wa.me/${m.sender.split('@')[0]}
┊➢ʀᴀᴍ : ${ram200}
┊➢ᴅᴇᴠɪᴄᴇ : ${os.type()}
┊➢ᴛᴏᴛᴀʟ ᴜsᴇʀs : ${Object.keys(global.db.users).length}
└───────────●

┌───❴❏ 𝐒𝐄𝐀𝐑𝐂𝐇𝐌𝐄𝐍𝐔 ❏❵╼╼
┊➟𝒍𝒚𝒓𝒊𝒄𝒔 -𝒒𝒖𝒆𝒓𝒚-
┊➟𝒍𝒊𝒏𝒌𝒘𝒂 -𝒒𝒖𝒆𝒓𝒚-
┊➟𝒂𝒑𝒌 -𝒒𝒖𝒆𝒓𝒚-
┊➟𝒉𝒂𝒑𝒑𝒚𝒎𝒐𝒅 -𝒒𝒖𝒆𝒓𝒚-
┊➟𝒂𝒑𝒌𝒖𝒑𝒓𝒐 -𝒒𝒖𝒆𝒓𝒚-
┊➟𝒈𝒐𝒐𝒈𝒍𝒆 -𝒒𝒖𝒆𝒓𝒚-
┊➟𝒘𝒊𝒌𝒊 -𝒒𝒖𝒆𝒓𝒚-
┊➟𝒚𝒕𝒔𝒆𝒂𝒓𝒄𝒉 -𝒒𝒖𝒆𝒓𝒚-
┊➟𝒓𝒆𝒄𝒊𝒑𝒆 -𝒒𝒖𝒆𝒓𝒚-
┊➟𝒑𝒍𝒂𝒚𝒔𝒕𝒐𝒓𝒆 -𝒒𝒖𝒆𝒓𝒚-
┊➟𝒘𝒊𝒌𝒊𝒎𝒆𝒅𝒊𝒂 -𝒒𝒖𝒆𝒓𝒚-
┊➟𝒏𝒆𝒘𝒔 -𝒒𝒖𝒆𝒓𝒚-
┊➟𝒏𝒆𝒘𝒔2 -𝒒𝒖𝒆𝒓𝒚-
┊➟𝒂𝒏𝒊𝒎𝒆𝒆 -𝒒𝒖𝒆𝒓𝒚-
┊➟𝒂𝒏𝒊𝒎𝒆 -𝒒𝒖𝒆𝒓𝒚-
┊➟𝒂𝒎𝒊𝒏𝒐 -𝒒𝒖𝒆𝒓𝒚-
┊➟𝒈𝒐𝒐𝒈𝒍𝒆𝒊𝒎𝒂𝒈𝒆 -𝒒𝒖𝒆𝒓𝒚-
┊➟𝒂𝒑𝒌𝒅𝒐𝒏𝒆 -𝒒𝒖𝒆𝒓𝒚-
┊➟𝒈𝒊𝒕𝒉𝒖𝒃𝒔𝒆𝒂𝒓𝒄𝒉 -𝒒𝒖𝒆𝒓𝒚->
┊➟𝒊𝒈𝒔𝒆𝒂𝒓𝒄𝒉 -𝒖𝒔𝒆𝒓𝒏𝒂𝒎𝒆-
┊➟𝒈𝒐𝒐𝒈𝒍𝒆𝒏𝒆𝒘𝒔 -𝒒𝒖𝒆𝒓𝒚-
┊➟𝒈𝒏𝒆𝒘𝒔 -𝒒𝒖𝒆𝒓𝒚-
┊➟𝒘𝒂𝒍𝒍𝒑𝒂𝒑𝒆𝒓 -𝒒𝒖𝒆𝒓𝒚-
┊➟𝒔𝒆𝒂𝒓𝒄𝒉𝒈𝒓𝒐𝒖𝒑𝒔 -𝒒𝒖𝒆𝒓𝒚-
┊➟𝒒𝒐𝒖𝒕𝒆𝒔𝒂𝒏𝒊𝒎𝒆 -𝒒𝒖𝒆𝒓𝒚-
┊➟𝒈𝒎𝒔𝒂𝒓𝒆𝒏𝒂 -𝒒𝒖𝒆𝒓𝒚-
└───

 `
  const searchmenu11 = async (remoteJid, text, footer, content) => {
bufu = await getBuffer(picak+'SEARCHMENU')
let message = await prepareWAMessageMedia({ image: bufu, jpegThumbnail:bufu }, { upload: ZimBotInc.waUploadToServer })
const templateMessage = {
viewOnceMessage: {
message: { 
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: text,
hydratedFooterText: `⦿ɢɪᴛʜᴜʙ: https://youtube.com/@zim-bot \n®ᴢɪᴍʙᴏᴛɪɴᴄ 2023`,
hydratedButtons: content,
},
},
},
},
};
const sendMsg = await ZimBotInc.relayMessage(remoteJid, templateMessage, {});
};
  let message = await prepareWAMessageMedia({ image: buffer, jpegThumbnail:buffer }, { upload: ZimBotInc.waUploadToServer })
var buttonReplyy = [
				{ urlButton: { displayText: `OWNER🍏`, url : `https://wa.me/258869103969` } },
				{ urlButton: { displayText: `SOURCECODE🥦`, url: `https://github.com/Samue-l1/Classic-V4 } },
				{ urlButton: { displayText: `WEBSITE🍎`, url: `https://chat.whatsapp.com/EPSGKau0IVi7J5lyOJO7Jk` } }
			]
			saerchmenu11(from, anu, '', buttonReplyy)
			}
break
case 'ephotomenu': {
ZimBotInc.sendMessage(m.chat, { react: { text: `${global.reactmoji}`, key: m.key }})
buffer = await getBuffer(picak+'EPHOTO MENU')
ram250 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
anu =`
┌───❴❏ 𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕4 ⧠❵╼╼
┊➢ᴡᴇʟᴄᴏᴍᴇ
└───────────●


┌───〔 _*◉ᴀʙᴏᴜᴛ◉*_ 〕
┊➢ɴᴀᴍᴇ :  ${pushname}
┊➢ɴᴜᴍʙᴇʀ : wa.me/${m.sender.split('@')[0]}
┊➢ʀᴀᴍ : ${ram250}
┊➢ᴅᴇᴠɪᴄᴇ : ${os.type()}
┊➢ᴛᴏᴛᴀʟ ᴜsᴇʀs : ${Object.keys(global.db.users).length}
└───────────●

┌───❴❏ 𝐄𝐏𝐇𝐎𝐓𝐎𝐌𝐄𝐍𝐔 ❏❵╼╼
┊🪨3𝒅-𝒘𝒐𝒐𝒅
┊🪨𝒂𝒏𝒈𝒆𝒍𝒔-𝒘𝒊𝒏𝒈𝒔
┊🪨𝒔𝒏𝒂𝒌𝒆-𝒕𝒆𝒙𝒕
┊🪨𝒓𝒆𝒅𝒉𝒐𝒕-𝒎𝒆𝒕𝒂𝒍2
┊🪨𝒔𝒂𝒏𝒅𝒔𝒖𝒎𝒎𝒆𝒓-𝒃𝒆𝒂𝒄𝒉
┊🪨𝒔𝒏𝒐𝒘-𝒕𝒆𝒙𝒕
┊🪨𝒘𝒂𝒕𝒆𝒓-3𝒅
┊🪨𝒘𝒂𝒕𝒆𝒓-𝒆𝒇𝒇𝒆𝒄𝒕
┊🪨𝒘𝒆𝒕-𝒈𝒍𝒂𝒔𝒔
┊🪨𝒔𝒕𝒂𝒕𝒖𝒔-𝒎𝒐𝒐𝒅2
┊🪨𝒔𝒖𝒎𝒎𝒆𝒓𝒚𝒔𝒂𝒏𝒅
└───────────●
`
const ephotomenu11 = async (remoteJid, text, footer, content) => {
bufu = await getBuffer(picak+'EPHOTMENU')
let message = await prepareWAMessageMedia({ image: bufu, jpegThumbnail:bufu }, { upload: ZimBotInc.waUploadToServer })
const templateMessage = {
viewOnceMessage: {
message: { 
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: text,
hydratedFooterText: `➢𝙰𝙻𝙻 𝙷𝙰𝙸𝙻 𝚃𝙾 𝙺𝙸𝙽𝙶 𝚂𝙰𝙼 \n➢𝙲𝙻𝙰𝚂𝚂𝙸𝙲 𝙱𝙾𝚃 2024`,
hydratedButtons: content,
},
},
},
},
};
const sendMsg = await ZimBotInc.relayMessage(remoteJid, templateMessage, {});
                  };
let message = await prepareWAMessageMedia({ image: buffer, jpegThumbnail:buffer }, { upload: ZimBotInc.waUploadToServer })
var buttonReplyy = [
				{ urlButton: { displayText: `OWNER🍏`, url : `https://wa.me/258869103969` } },
				{ urlButton: { displayText: `SOURCECODE🥦`, url: `https://github.com/Samue-l1/Classic-V4` } },
				{ urlButton: { displayText: `WEBSITE🍎`, url: `https://chat.whatsapp.com/EPSGKau0IVi7J5lyOJO7Jk` } }
			]
			ephotomenu11(from, anu, '', buttonReplyy)
			}
break



 default:
   if (budy.startsWith('=>')) {
  if (!isCreator) return reply(global.owner)
  function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
  if (sat == undefined) {
 bang = util.format(sul)
  }
  return reply(bang)
  }
  try {
reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
  } catch (e) {
reply(String(e))
  }
   }

   if (budy.startsWith('>')) {
  if (!isCreator) return reply(global.owner)
  try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
  } catch (err) {
await reply(String(err))
  }
   }

   if (budy.startsWith('$')) {
  if (!isCreator) return reply(global.owner)
  exec(budy.slice(2), (err, stdout) => {
if(err) return reply(err)
if (stdout) return reply(stdout)
  })
   }

if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
  this.anonymous = this.anonymous ? this.anonymous : {}
  let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
  if (room) {
if (/^.*(next|leave|start)/.test(m.text)) return
if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
let other = [room.a, room.b].find(user => user !== m.sender)
m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
  contextInfo: {
 ...m.msg.contextInfo,
 forwardingScore: 0,
 isForwarded: true,
 participant: other
  }
} : {})
  }
  return !0
   }
   if (antiToxic)
   if (bad.includes(zimbotincv3)) {
   if (m.text) {
   zimbotv3 = `*▊▊▊ANTIBAD WORDS▊▊▊*\n\n*Lucky you, you are admin*`
   if (isAdmins) return reply(zimbotv3)
   if (m.key.fromMe) return reply(zimbotv3)
   if (isCreator) return reply(zimbotv3)
   kice = m.sender
   await ZimBotInc.groupParticipantsUpdate(m.chat, [kice], 'remove')
   ZimBotInc.sendMessage(from, {text:`*▊▊▊ANTIBAD WORDS▊▊▊*\n\n@${kice.split("@")[0]} *was kicked because of being rude to others in this group*`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})}
   }
if (isCmd && budy.toLowerCase() != undefined) {
    if (m.chat.endsWith('broadcast')) return
    if (m.isBaileys) return
    let msgs = global.db.database
    if (!(budy.toLowerCase() in msgs)) return
    ZimBotInc.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}


}
 
   } catch (err) {
m.reply(util.format(err))
    }

}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
