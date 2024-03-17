
// ⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈
//▮CLASSIC BOT INC 2024 ®️ALL RIGHTS RESERVED
//▮
//▮FORK AND DON'T FORGET TO GIVE A STAR
//▮
//▮THIS SOFTWARE IS UNDER UZ COPYRIGHT
//▮
//▮REPORT ABUSE OF THIS SOFTWARE EMAIL US
//▮samuelcircute@gmail.com
//▮WHATSAPP US : +258 86 910 3969
//▮YOUTUBE CHANNELL: https://youtube.com/@SamuelCircute?si=cVq02S23tGxSiPjO
//▮
//╰▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
//
//┏━━━━━━━━━━━━━━━━━━━━━━━━━
//┃THIS SOFTWARE INCLUDES 
//┃SOME ENCRYPTED FILES
//┃
//┃THANKS FOR CHOOSING CLASSIC BOT
//┃I WROTE THIS SCRIPT BY MYSELF THIS SCRIPT IS FOR EVERYONE DONT SELL IT
//┗━━━━━━━━━━━━━━━━━━━━━━━━━
//




const axios = require('axios')
const cheerio = require('cheerio')

const ApkDown = async (url) => {
const res = await axios.get(url) 
const $ = cheerio.load(res.data)
const total = []
$(`div.entry-inner`).each(function(e,hasil){
let desc = $(hasil).find('p').text()

let title = $('div.post-inner.group').find('h1.post-title').text()

let size = $('div#dlbox1').find('ul > li > span').text().split('size: ')[1].split('Update')[0]

let vers = $('div#dlbox1').find('ul > li > span').text().split('Version: ')[1].split('File')[0]

let up = $('div#dlbox1').find('ul > li > span').text().split('Update: ')[1]

let link = $('div#dlbox12').find('li > a').attr('href')

let thumb = $('div#dlbox').find('img').attr('data-src')

total.push({title,size,vers,up,link,thumb,desc})
console.log(total)
})
return (total)
}


module.exports = { ApkDown }