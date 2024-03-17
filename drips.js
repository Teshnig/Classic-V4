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
const toBool = (x) => x == 'true'
const { existsSync } = require('fs')
if (existsSync('drips.env')) require('dotenv').config({ path: './drips.env' })
const DATABASE_URL =
	process.env.DATABASE_URL === undefined
		? './database.db'
		: process.env.DATABASE_URL
module.exports = {
		
			
	HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
	HEROKU_API_KEY: process.env.HEROKU_API_KEY,
	BRANCH: 'main',
	
}