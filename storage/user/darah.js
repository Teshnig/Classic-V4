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
  const fs = require('fs')
  let _darahOrg = JSON.parse(fs.readFileSync('./storage/user/darah.json'))

  const addInventoriDarah = (sender, darah) => {
        const obj = {id: sender, healt: darah}
         _darahOrg.push(obj)
        fs.writeFileSync('./storage/user/darah.json', JSON.stringify(_darahOrg))
   }
  const cekDuluJoinAdaApaKagaDiJson = (sender) => {
            let status = false
            Object.keys(_darahOrg).forEach((i) => {
                if (_darahOrg[i].id === sender) {
                    status = true
                }
            })
            return status
        }
  const addDarah = (sender, amount) => {
            let position = false
            Object.keys(_darahOrg).forEach((i) => {
                if (_darahOrg[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _darahOrg[position].healt += amount
                fs.writeFileSync('./storage/user/darah.json', JSON.stringify(_darahOrg))
            }
        }
   const kurangDarah = (sender, amount) => {
            let position = false
            Object.keys(_darahOrg).forEach((i) => {
                if (_darahOrg[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _darahOrg[position].healt -= amount
                fs.writeFileSync('./storage/user/darah.json', JSON.stringify(_darahOrg))
            }
        }
   const getDarah = (sender) => {
            let position = false
            Object.keys(_darahOrg).forEach((i) => {
                if (_darahOrg[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _darahOrg[position].healt
            }
        }     
        
   module.exports = { addInventoriDarah, cekDuluJoinAdaApaKagaDiJson, addDarah, kurangDarah, getDarah }   