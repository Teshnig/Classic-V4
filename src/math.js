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
let modes = {
    noob: [-3, 3,-3, 3, '+-', 15000, 10],
    easy: [-10, 10, -10, 10, '*/+-', 20000, 40],
    medium: [-40, 40, -20, 20, '*/+-', 40000, 150],
    hard: [-100, 100, -70, 70, '*/+-', 60000, 350],
    extreme: [-999999, 999999, -999999, 999999, '*/', 99999, 9999],
    impossible: [-99999999999, 99999999999, -99999999999, 999999999999, '*/', 30000, 35000],
    impossible2: [-999999999999999, 999999999999999, -999, 999, '/', 30000, 50000]
  } 
  
  let operators = {
    '+': '+',
    '-': '-',
    '*': '×',
    '/': '÷'
  }

  function randomInt(from, to) {
    if (from > to) [from, to] = [to, from]
    from = Math.floor(from)
    to = Math.floor(to)
    return Math.floor((to - from) * Math.random() + from)
  }
  
  function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
  }

  function genMath(mode) {
      return new Promise((resolve, reject) => {
        let [a1, a2, b1, b2, ops, time, bonus] = modes[mode]
        let a = randomInt(a1, a2)
        let b = randomInt(b1, b2)
        let op = pickRandom([...ops])
        let result = (new Function(`return ${a} ${op.replace('/', '*')} ${b < 0 ? `(${b})` : b}`))()
        if (op == '/') [a, result] = [result, a]
        hasil = { 
            soal: `${a} ${operators[op]} ${b}`,
            mode: mode,
            waktu: time,
            hadiah: bonus,
            jawaban: result
         }
         resolve(hasil)
      })
  }
  
module.exports = { modes, operators, randomInt, pickRandom, genMath }
