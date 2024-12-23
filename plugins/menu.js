const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
const axios = require('axios')

cmd({

    pattern: "menu",

    react: "🛸",

    alias: ["panel","commands"],

    desc: "Get bot\'s command list.",

    category: "main",

    use: '.menu',

    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, umarmd, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{
let madeMenu = `╭━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷

*⇆ ʜɪɪ ᴍʏ ᴅᴇᴀʀ ғʀɪᴇɴᴅ ⇆*

     *${pushname}*
     
╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷

 *ᴡᴇʟᴄᴏᴍᴇ ᴛᴏ 𝙺𝙰𝙽𝙶𝙾 𝙼𝙳 ғᴜʟʟ ᴄᴏᴍᴍᴀɴᴅ ʟɪsᴛ*

*ᴄʀᴇᴀᴛᴇᴅ ʙʏ Hector Manuel👨🏻‍💻*


╭─────────────···▸*
*❖│▸* *ʀᴜɴᴛɪᴍᴇ* : ${runtime(process.uptime())}
*❖│▸* *ᴍᴏᴅᴇ* : *[${config.MODE}]*
*❖│▸* *ᴘʀᴇғɪx* : *[${config.PREFIX}]*
*❖│▸* *ʀᴀᴍ ᴜsᴇ* : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*❖│▸* *ɴᴀᴍᴇ ʙᴏᴛ* : *❖𝙺𝙰𝙽𝙶𝙾 𝙼𝙳❖*
*❖│▸* *ᴄʀᴇᴀᴛᴏʀ* : *➺Hector Manuel࿐*
*❖│▸* *ᴠᴇʀsɪᴏɴs* : *ᴠ.2.0.0*
*❖│▸* *ᴍᴇɴᴜ ᴄᴍᴅ* : *ᴍᴇɴᴜ ʟɪsᴛ*
*╰────────────···▸▸*

*♡︎•━━━━━━☻︎━━━━━━•♡︎*

*╭━∙⋆⋅⋆•⊷❒* 📥 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝚁-𝙲𝙼𝙳 📥
*┋* *.ғʙ <ᴜʀʟ>*
*┋* *.ɪɴꜱᴛᴀ <ᴜʀʟ>*
*┋* *.ᴠɪᴅᴇᴏ <ᴜʀʟ>*
*┋* *.ɢᴅʀɪᴠᴇ <ᴜʀʟ>*
*┋* *.ᴛᴡɪᴛᴛᴇʀ <ᴜʀʟ>*
*┋* *.ᴛᴛ <ᴜʀʟ>*
*┋* *.ᴍᴇᴅɪᴀғɪʀᴇ <ᴜʀʟ>*
*┋* *.ᴘʟᴀʏ*
*┋* *.ᴠɪᴅᴇᴏ <ϙᴜᴇʀʏ>*
*┋* *.ɪᴍɢ <ϙᴜᴇʀʏ>*
*┋* *.ᴀᴘᴋ <ɴᴀᴍᴇ>*
*╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷*

*╭━∙⋆⋅⋆•⊷❒*🔎 𝚂𝙴𝙰𝚁𝙲𝙷-𝙲𝙼𝙳 🔍 *❒⁠* 
*┋* *.ʏᴛꜱ  <ᴛᴇxᴛ>*
*┋* *.ʟᴏʟɪ <ᴛᴇxᴛ>*
*┋* *.ᴍᴏᴠɪᴇ <ᴛᴇxᴛ>*
*┋* *.ɪᴍɢ <ᴛᴇxᴛ>*
*┋* *.ᴡᴇᴀᴛʜᴇʀ <ᴄɪᴛʏ>*
*╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷*

*╭━∙⋆⋅⋆•⊷❒⁠*🧠 𝙰𝙸-𝙲𝙼𝙳 🧠 *❒⁠⁠⁠⁠* 
*┋* *.ɢᴘᴛ <ᴛᴇxᴛ>*
*┋* *.ᴀɪ <ᴛᴇxᴛ>*
*╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷*

*╭━∙⋆⋅⋆•⊷❒* 👨‍💻 𝙾𝚆𝙽𝙴𝚁-𝙲𝙼𝙳 👨‍💻 *❒⁠⁠⁠⁠* 
*┋* *.ᴏᴡɴᴇʀ*
*┋* *.ʀᴇᴘᴏ*
*┋* *.ꜱʏꜱᴛᴇᴍ*
*┋* *.ꜱᴛᴀᴛᴜꜱ*
*┋* *.ʙʟᴏᴄᴋ*
*┋* *.ᴜɴʙʟᴏᴄᴋ*
*┋* *.ᴄʟᴇᴀʀᴄʜᴀᴛs*
*┋* *.sᴇᴛᴘᴘ*
*┋* *.ʙʀᴏᴀᴅᴄᴀsᴛ*
*┋* *.ᴊɪᴅ*
*┋* *.ɢᴊɪᴅ*
*┋* *.ʀᴇꜱᴛᴀʀᴛ*
*╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷*

*╭━∙⋆⋅⋆•⊷❒* 👥 𝙶𝚁𝙾𝚄𝙿-𝙲𝙼𝙳 👥 *❒* 
*┋* *.ʀᴇᴍᴏᴠᴇ <ʀᴇᴘʟʏ ғᴏʀ ᴅᴇʟᴇᴛᴇ sᴍs>*
*┋* *.ᴅᴇʟᴇᴛᴇ <ʀᴇᴘʟʏ ғᴏʀ ᴅᴇʟᴇᴛᴇ sᴍs>*
*┋* *.ᴀᴅᴅ*
*┋* *.ᴋɪᴄᴋ*
*┋* *.sᴇᴛɢᴏᴏᴅʙʏᴇ <ᴛᴇxᴛ>*
*┋* *.sᴇᴛᴡᴇʟᴄᴏᴍᴇ <ᴛᴇxᴛ>*
*┋* *.ᴘʀᴏᴍᴏᴛᴇ*
*┋* *.ᴅᴇᴍᴏᴛᴇ*
*┋* *.ᴛᴀɢᴀʟʟ*
*┋* *.ɢᴇᴛᴘɪᴄ*
*┋* *.ɪɴᴠɪᴛᴇ*
*┋* *.ʀᴇᴠᴏᴋᴇ*
*┋* *.ᴊᴏɪɴʀᴇǫᴜᴇsᴛs*
*┋* *.ᴀʟʟʀᴇǫ*
*┋* *.ᴍᴜᴛᴇ*
*┋* *.ᴜɴᴍᴜᴛᴇ*
*┋* *.ʟᴏᴄᴋɢᴄ*
*┋* *.ᴜɴʟᴏᴄᴋɢᴄ*
*┋* *.ʟᴇᴀᴠᴇ*
*┋* *.ᴜᴘᴅᴀᴛᴇɢɴᴀᴍᴇ*
*┋* *.ᴜᴘᴅᴀᴛᴇɢᴅᴇsᴄ*
*┋* *.ᴊᴏɪɴ*
*┋* *.ʜɪᴅᴇᴛᴀɢ*
*┋* *.ɢɪɴғᴏ*
*┋* *.sᴇɴᴅᴅᴍ*
*╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷*

*╭━∙⋆⋅⋆•⊷❒*📃 𝙸𝙽𝙵𝙾-𝙲𝙼𝙳 📃*❒* 
*┋* *.ᴍᴇɴᴜ*
*┋* *.ᴍᴇɴᴜ2*
*┋* *.ʀᴇᴘᴏ*
*┋* *.ᴀʟɪᴠᴇ*
*┋* *.ꜱᴛᴀᴛᴜꜱ*
*┋* *.ꜱᴜᴘᴘᴏʀᴛ*
*┋* *.ᴘɪɴɢ*
*┋* *.ꜱʏꜱᴛᴇᴍ*
*╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷*

*╭━∙⋆⋅⋆•⊷❒*🎡 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙴𝚁-𝙲𝙼𝙳 🎡*❒⁠* 
*┋* *.sᴛɪᴄᴋᴇʀ*
*╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷*

*╭━∙⋆⋅⋆•⊷❒*🏜️𝚆𝙰𝙻𝙻𝙿𝙰𝙿𝙴𝚁𝚂-𝙲𝙼𝙳 🏜*❒* 
*┋* *.ɪᴍɢ*
*╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷*

*╭━∙⋆⋅⋆•⊷❒*🌐 𝙾𝚃𝙷𝙴𝚁-𝙲𝙼𝙳 🌐 *❒⁠* 
*┋* *.ᴛʀᴛ*
*┋* *.ᴅᴏɢ*
*┋* *.ᴀɴɪᴍᴇ*
*┋* *.ᴍᴏᴠɪᴇ*
*┋* *.ꜰᴀᴄᴛ*
*┋* *.ɢɪᴛʜᴜʙꜱᴛᴀʟᴋ*
*┋* *.ɢᴘᴀꜱꜱ*
*┋* *.ʜᴀᴄᴋ*
*┋* *.ǫᴜᴏᴛᴇ*
*┋* *.ꜱʀᴇᴘᴏ*
*┋* *.ᴅᴇꜰɪɴᴇ*
*╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷*⁠⁠⁠⁠



> © ρσωєяє∂ ву нє¢тσя мαηυєℓ
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
