let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
m.reply(`*اغبى شخصاً في قروب هما* :\n*${toM(a)}  و ${toM(b)}* `, null, {
mentions: [a, b]
  
})}
handler.help = ['الاغبا']
handler.tags = ['main', 'fun']
handler.command = ['الاغبا','formarparejas']
handler.group = true
export default handler
