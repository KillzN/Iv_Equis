let handler = async (m, { conn, usedPrefix, isOwner }) => {
    m.react('👤')
    let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:IV BOT;;\nFN:IV BOT\nORG:IV BOT\nTITLE:\nitem1.TEL;waid=5493492419916:5493492419916\nitem1.X-ABLabel:IV BOT\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:IV BOT\nEND:VCARD`
    await conn.sendMessage(m.chat, { contacts: { displayName: '@bykillzn⁩', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['staff']
handler.tags = ['main']
handler.command = ['owner', 'dueño', 'creador']

export default handler
