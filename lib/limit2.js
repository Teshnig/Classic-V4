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
  let _limitOrg = JSON.parse(fs.readFileSync('./database/limit.json'))
  let setting = JSON.parse(fs.readFileSync('./apikey.json'))
  let limitCount = setting.limitCount
  const addInventoriLimit = (sender) => {
        const obj = {id: sender, limit: limitCount}
         _limitOrg.push(obj)
        fs.writeFileSync('./database/limit.json', JSON.stringify(_limitOrg))
   }
  const cekDuluJoinAdaApaKagaLimitnyaDiJson = (sender) => {
            let status = false
            Object.keys(_limitOrg).forEach((i) => {
                if (_limitOrg[i].id === sender) {
                    status = true
                }
            })
            return status
        }
  const addLimit = (sender, amount) => {
            let position = false
            Object.keys(_limitOrg).forEach((i) => {
                if (_limitOrg[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limitOrg[position].limit += amount
                fs.writeFileSync('./database/limit.json', JSON.stringify(_limitOrg))
            }
        }
   const kurangLimit = (sender, amount) => {
            let position = false
            Object.keys(_limitOrg).forEach((i) => {
                if (_limitOrg[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limitOrg[position].limit -= amount
                fs.writeFileSync('./database/limit.json', JSON.stringify(_limitOrg))
            }
        }
   const getLimit = (sender) => {
            let position = false
            Object.keys(_limitOrg).forEach((i) => {
                if (_limitOrg[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _limitOrg[position].limit
            }
        }     
        
   module.exports = { addInventoriLimit, cekDuluJoinAdaApaKagaLimitnyaDiJson, addLimit, kurangLimit, getLimit }   