const handler = async (m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
    var sum = member.length;
  } else {
    var sum = 0;
    const total = 0;
    var member = 0;
  }
  const pesan = args.join` `;
  const oi = `*𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝘼𝙎:* ${pesan}`;
  let teks = `*𝗥𝗘𝗩𝗜𝗩𝗔𝗡 𝗠𝗥𝗗 𝗟@𝗦 𝗤𝗨𝗜𝗘𝗥𝗢 𝗔𝗖𝗧𝗜𝗩@𝗦 ✨🔥*\n\n *${oi}\n\n➥ _*@valu._16:*_\n`;
  for (const mem of participants) {
    teks += `*🦜 ⇝* @${mem.id.split('@')[0]}\n`;
  }
  teks += `*'Si quieres un bot puedes hablarle a: +5493492419916'*`;
  conn.sendMessage(m.chat, { text: teks, mentions: participants.map((a) => a.id) });
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|marcar|todos|invocación|ta)$/i;
handler.admin = true;
handler.group = true;
export default handler;