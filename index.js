
//Hayolo mau ngapain om?
//mau remake ya om??
//Yaudah silahkan om remake
//Nama Author Jepri Barus Jangan Di hapus om
//Biar gak error

//Just Info Kontak Vcard Owner Gak ada om
//Rawan Banned Kalau Pakai Kontak Vcard

const sotoy = [
		'🍊 : 🍒 : 🍐',
		'🍒 : 🔔 : 🍊',
		'🍇 : 🍇 : 🍇',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍒 : 🍐',
		'🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍐 : 🍐 : 🍐',
		'🍊 : 🍒 : 🍒',
		'🔔 : 🔔 : 🍇',
		'🍌 : 🍒 : 🔔',
		'🍐 : 🔔 : 🔔',
		'🍊 : 🍋 : 🍒',
		'🍋 : 🍋 : 🍌',
		'🔔 : 🔔 : 🍇',
		'🔔 : 🍐 : 🍇',
		'🔔 : 🔔 : 🔔',
		'🍒 : 🍒 : 🍒',
		'🍌 : 🍌 : 🍌',
		]

const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal") 
const moment = require("moment-timezone") 
const fs = require("fs") 
const crypto = require('crypto')
const util = require('util')
const imageToBase64 = require('image-to-base64')
const axios = require('axios')
const { color, bgcolor } = require('./lib/color')
const { bahasa } = require('./lib/bahasa')
const { buatbot } = require('./jepribarus/buatbot')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const fontPath = ('./lib/Zahraaa.ttf')
const path = require('path')
const { exec, spawn } = require("child_process")
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const FormData = require('form-data')
const ffmpeg = require('fluent-ffmpeg')
const cd = 4.32e+7
const { removeBackgroundFromImageFile } = require('remove.bg')
const { ind } = require('./bahasa')

//settings
prefix = '#' //ubah terserah kalian
blocked = []   
limitawal = 9999999999999 //ubah terserah mau berapa
memberlimit = 0 //jangan di ubah biar gak elor
cr = '*𝐁𝐎𝐓 𝐕𝐄𝐑𝐈𝐅𝐈𝐄𝐃*'

fake = 'BOT ANTIDELETE'
numbernye = '0'
NamaOwner = 'Jepri Barus'
NamaBot = 'KANGDEV BOT'

//apikey Settings
kangdev ='pangkal' //beli apikey? chat me 085767354326 =cuma 10k/bulan

//owner number
const jepriNumber = ["12347590003@s.whatsapp.net"] //Ganti Nomer Mu

//file json
const videonye = JSON.parse(fs.readFileSync('./strg/video.json'))
const audionye = JSON.parse(fs.readFileSync('./strg/audio.json'))
const imagenye = JSON.parse(fs.readFileSync('./strg/image.json'))
const _leveling = JSON.parse(fs.readFileSync('./database/kelompok/leveling.json'))
const antilink = JSON.parse(fs.readFileSync('./database/kelompok/antilink.json'))
const _level = JSON.parse(fs.readFileSync('./database/pengguna/level.json'))
const _registered = JSON.parse(fs.readFileSync('./database/bot/pengguna.json'))
const welkom = JSON.parse(fs.readFileSync('./database/bot/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/bot/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./database/bot/simi.json'))
const _limit = JSON.parse(fs.readFileSync('./database/pengguna/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/pengguna/uang.json'))
const ban = JSON.parse(fs.readFileSync('./database/pengguna/banned.json'))
const prem = JSON.parse(fs.readFileSync('./database/pengguna/premium.json'))
const adm = JSON.parse(fs.readFileSync('./database/pengguna/admin.json'))
const bad = JSON.parse(fs.readFileSync('./database/kelompok/bad.json'))
const antitoxic = JSON.parse(fs.readFileSync('./src/antitoxic.json'))
//function
const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/pengguna/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/pengguna/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/pengguna/level.json', JSON.stringify(_level))
        }
             
         const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }

        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/bot/pengguna.json', JSON.stringify(_registered))
        }

        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        
        const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/pengguna/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/pengguna/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
        
        const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/pengguna/limit.json', JSON.stringify(_limit))
            }
        }
        	
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/pengguna/uang.json', JSON.stringify(uang))
            }
        }
        
         const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/pengguna/limit.json', JSON.stringify(_limit))
            }
        }
             
        
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}

const jepribrs = new WAConnection()
   jepribrs.on('qr', qr => {
   qrcode.generate(qr, { small: true })
   console.log(color('[','white'),color('∆','red'),color(']','white'),color('scane kode nya ngab','white'),color('Jepri','red'),color('Barus','lime'),color('Ganteng','red'))
})

jepribrs.on('credentials-updated', () => {
	const authInfo = jepribrs.base64EncodedAuthInfo()
   console.log(`credentials updated!`)
   fs.writeFileSync('./session.json', JSON.stringify(authInfo, null, '\t'))
})
fs.existsSync('./session.json') && jepribrs.loadAuthInfo('./session.json')
jepribrs.connect();


jepribrs.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await jepribrs.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await jepribrs.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
			  teks = `Assalamualaikum Yank @${num.split('@')[0]}\nWelcome To Grup \n❮${mdata.subject}❯ \n\nJangan lupa intro Ya beb \n
┏━━━━━━━━━━━━━━━
┃────「 ɪɴᴛʀᴏ 」─────
┃━━━━━━━━━━━━━━━
┠⊷️ ɴᴀᴍᴀ :
┠⊷️ ᴜᴍᴜʀ :
┠⊷️ ɢᴇɴᴅᴇʀ :
┠⊷️ ᴀꜱᴀʟ ᴋᴏᴛᴀ :
┗━━━━━━━━━━━━━━━`
				let buff = await getBuffer(ppimg)
				jepribrs.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
				} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await jepribrs.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
		      teks = `
┏━━━━━━━━━━━━━━━
┃「 ARA ARA SAYONARA👋」
┗━━━━━━━━━━━━━━━`
				let buff = await getBuffer(ppimg)
				jepribrs.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
	jepribrs.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	jepribrs.on('message-update', async (mek) => {
		try {
	   const from = mek.key.remoteJid
		const messageStubType = WA_MESSAGE_STUB_TYPES[mek.messageStubType] || 'MESSAGE'
		const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
		const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
		const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
		const sender = mek.key.fromMe ? jepribrs.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
		const isRevoke = mek.key.remoteJid.endsWith('@s.whatsapp.net') ? true : mek.key.remoteJid.endsWith('@g.us') ? dataRevoke.includes(from) : false
		const isCtRevoke = mek.key.remoteJid.endsWith('@g.us') ? true : dataCtRevoke.data ? true : false
		const isBanCtRevoke = mek.key.remoteJid.endsWith('@g.us') ? true : !dataBanCtRevoke.includes(sender) ? true : false
		if (messageStubType == 'REVOKE') {
			console.log(`Status untuk grup : ${!isRevoke}\nStatus semua kontak : ${!isCtRevoke}\nStatus kontak dikecualikan : ${!isBanCtRevoke}`)
			if (!isRevoke) return
			if (!isCtRevoke) return
			if (!isBanCtRevoke) return
			const from = mek.key.remoteJid
			const isGroup = mek.key.remoteJid.endsWith('@g.us') ? true : false
			let int
			let infoMSG = JSON.parse(fs.readFileSync('./src/msg.data.json'))
			const id_deleted = mek.key.id
			const conts = mek.key.fromMe ? jepribrs.user.jid : jepribrs.contacts[sender] || { notify: jid.replace(/@.+/, '') }
			const pushname = mek.key.fromMe ? jepribrs.user.name : conts.notify || conts.vname || conts.name || '-'
			const opt4tag = {
				contextInfo: { mentionedJid: [sender] }
			}
			for (let i = 0; i < infoMSG.length; i++) {
				if (infoMSG[i].key.id == id_deleted) {
					const dataInfo = infoMSG[i]
					const type = Object.keys(infoMSG[i].message)[0]
					const timestamp = infoMSG[i].messageTimestamp
					int = {
						no: i,
						type: type,
						timestamp: timestamp,
						data: dataInfo
					}
				}
			}
			const index = Number(int.no)
			const body = int.type == 'conversation' ? infoMSG[index].message.conversation : int.type == 'extendedTextMessage' ? infoMSG[index].message.extendedTextMessage.text : int.type == 'imageMessage' ? infoMSG[index].message.imageMessage.caption : int.type == 'stickerMessage' ? 'Sticker' : int.type == 'audioMessage' ? 'Audio' : int.type == 'videoMessage' ? infoMSG[index].videoMessage.caption : infoMSG[index]
			const mediaData = int.type === 'extendedTextMessage' ? JSON.parse(JSON.stringify(int.data).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : int.data
			var itsme = `${numbernye}@s.whatsapp.net`
				var split = `${fake}`
				// var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
				var selepbot72 = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
			if (int.type == 'conversation' || int.type == 'extendedTextMessage') {
				const strConversation = `「ANTI-DELETE」

- Nama Pengirim : ${pushname}
- Nomer : ${sender.replace('@s.whatsapp.net', '')}
- Tipe : Text
- Waktu : ${moment.unix(int.timestamp).format('HH:mm:ss')}
- Tanggal : ${moment.unix(int.timestamp).format('DD/MM/YYYY')}
- Pesan Yang Di Hapus : ${body ? body : '-'}`
				jepribrs.sendMessage(from, strConversation, MessageType.text, selepbot72)
			} else if (int.type == 'stickerMessage') {
				var itsme = `${numbernye}@s.whatsapp.net`
					var split = `${fake}`
					const pingbro23 = {
						contextInfo: {
							participant: itsme,
							quotedMessage: {
								extendedTextMessage: {
									text: split,
								}
							}
						}
					}
				const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
				const savedFilename = await jepribrs.downloadAndSaveMediaMessage(int.data, `./media/sticker/${filename}`);
				const strConversation = `		 「 ANTI-DELETE」

- Nama Pengirim : ${pushname}
- Nomer : ${sender.replace('@s.whatsapp.net', '')}
- Tipe : Sticker
- Waktu : ${moment.unix(int.timestamp).format('HH:mm:ss')}*
-  Tanggal : ${moment.unix(int.timestamp).format('DD/MM/YYYY')}*`

				const buff = fs.readFileSync(savedFilename)
				jepribrs.sendMessage(from, strConversation, MessageType.text, opt4tag)
				jepribrs.sendMessage(from, buff, MessageType.sticker, pingbro23)
				// console.log(stdout)
				fs.unlinkSync(savedFilename)

			} else if (int.type == 'imageMessage') {
				var itsme = `${numbernye}@s.whatsapp.net`
					var split = `${fake}`
					const pingbro22 = {
						contextInfo: {
							participant: itsme,
							quotedMessage: {
								extendedTextMessage: {
									text: split,
								}
							}
						}
					}
				const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
				const savedFilename = await jepribrs.downloadAndSaveMediaMessage(int.data, `./media/revoke/${filename}`);
				const buff = fs.readFileSync(savedFilename)
				const strConversation = `	 「ANTI-DELETE」

- Nama Pengirim: ${pushname}
- Nomer : ${sender.replace('@s.whatsapp.net', '')}
- Tipe : Image
- Waktu : ${moment.unix(int.timestamp).format('HH:mm:ss')}
- Tanggal : ${moment.unix(int.timestamp).format('DD/MM/YYYY')}
- Pesan : ${body ? body : '-'}\`\`\``
				jepribrs.sendMessage(from, buff, MessageType.image, { contextInfo: { mentionedJid: [sender] }, caption: strConversation })
				fs.unlinkSync(savedFilename)
			}
		}
	} catch (e) {
		console.log('Message : %s', color(e, 'green'))
		// console.log(e)
	}
})
jepribrs.on('message-new', async (mek) => {
	try {
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		let infoMSG = JSON.parse(fs.readFileSync('./src/msg.data.json'))
		infoMSG.push(JSON.parse(JSON.stringify(mek)))
		fs.writeFileSync('./src/msg.data.json', JSON.stringify(infoMSG, null, 2))
		const urutan_pesan = infoMSG.length
		if (urutan_pesan === 5000) {
			infoMSG.splice(0, 4300)
			fs.writeFileSync('./src/msg.data.json', JSON.stringify(infoMSG, null, 2))
		}
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
			const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			const tescuk = ["0@s.whatsapp.net"]
			const isGroup = from.endsWith('@g.us')
			const q = args.join(' ')
			const botNumber = jepribrs.user.jid
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			pushname = jepribrs.contacts[sender] != undefined ? jepribrs.contacts[sender].vname || jepribrs.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await jepribrs.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
            
            /************** SCURITY FEATURE ************/
            const isRegistered = checkRegisteredUser(sender)
            const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
            const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isAntilink = isGroup ? antilink.includes(from) : false
			const isJepri = jepriNumber.includes(sender)
			const isAntiToxic = isGroup ? antitoxic.includes(from) : false
			

			const isBanned = ban.includes(sender)
			const isPremium= prem.includes(sender)
			const isAdmin = adm.includes(sender)
			const isImage = type === 'imageMessage'
			const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*Kangdev Bot*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('jepribarus/logo.jpg')} } }
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				jepribrs.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				jepribrs.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? jepribrs.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : jepribrs.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const sendImage = (teks) => {
		    jepribrs.sendMessage(from, teks, image, {quoted:mek})
		    }
		    const costum = (pesan, tipe, target, target2) => {
			jepribrs.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
		    const sendPtt = (teks) => {
		    jepribrs.sendMessage(from, audio, mp3, {quoted:mek})
		    }
	        /*****************END SCURITY FEATURE ********/
			
		//role level
        const levelRole = getLevelingLevel(sender)
        var role = 'Newbie ㋡'
        if (levelRole <= 2) {
            role = 'Newbie ㋡'
        } else if (levelRole <= 4) {
            role = 'Beginner Grade 1 ⚊¹'
        } else if (levelRole <= 6) {
            role = 'Beginner Grade 2 ⚊²'
        } else if (levelRole <= 8) {
            role = 'Beginner Grade 3 ⚊³'
        } else if (levelRole <= 10) {
            role = 'Beginner Grade 4 ⚊⁴'
        } else if (levelRole <= 12) {
            role = 'Private Grade 1 ⚌¹'
        } else if (levelRole <= 14) {
            role = 'Private Grade 2 ⚌²'
        } else if (levelRole <= 16) {
            role = 'Private Grade 3 ⚌³'
        } else if (levelRole <= 18) {
            role = 'Private Grade 4 ⚌⁴'
        } else if (levelRole <= 20) {
            role = 'Private Grade 5 ⚌⁵'
        } else if (levelRole <= 22) {
            role = 'Corporal Grade 1 ☰¹'
        } else if (levelRole <= 24) {
            role = 'Corporal Grade 2 ☰²'
        } else if (levelRole <= 26) {
            role = 'Corporal Grade 3 ☰³'
        } else if (levelRole <= 28) {
            role = 'Corporal Grade 4 ☰⁴'
        } else if (levelRole <= 30) {
            role = 'Corporal Grade 5 ☰⁵'
        } else if (levelRole <= 32) {
            role = 'Sergeant Grade 1 ≣¹'
        } else if (levelRole <= 34) {
            role = 'Sergeant Grade 2 ≣²'
        } else if (levelRole <= 36) {
            role = 'Sergeant Grade 3 ≣³'
        } else if (levelRole <= 38) {
            role = 'Sergeant Grade 4 ≣⁴'
        } else if (levelRole <= 40) {
            role = 'Sergeant Grade 5 ≣⁵'
        } else if (levelRole <= 42) {
            role = 'Staff Grade 1 ﹀¹'
        } else if (levelRole <= 44) {
            role = 'Staff Grade 2 ﹀²'
        } else if (levelRole <= 46) {
            role = 'Staff Grade 3 ﹀³'
        } else if (levelRole <= 48) {
            role = 'Staff Grade 4 ﹀⁴'
        } else if (levelRole <= 50) {
            role = 'Staff Grade 5 ﹀⁵'
        } else if (levelRole <= 52) {
            role = 'Sergeant Grade 1 ︾¹'
        } else if (levelRole <= 54) {
            role = 'Sergeant Grade 2 ︾²'
        } else if (levelRole <= 56) {
            role = 'Sergeant Grade 3 ︾³'
        } else if (levelRole <= 58) {
            role = 'Sergeant Grade 4 ︾⁴'
        } else if (levelRole <= 60) {
            role = 'Sergeant Grade 5 ︾⁵'
        } else if (levelRole <= 62) {
            role = '2nd Lt. Grade 1 ♢¹ '
        } else if (levelRole <= 64) {
            role = '2nd Lt. Grade 2 ♢²'
        } else if (levelRole <= 66) {
            role = '2nd Lt. Grade 3 ♢³'
        } else if (levelRole <= 68) {
            role = '2nd Lt. Grade 4 ♢⁴'
        } else if (levelRole <= 70) {
            role = '2nd Lt. Grade 5 ♢⁵'
        } else if (levelRole <= 72) {
            role = '1st Lt. Grade 1 ♢♢¹'
        } else if (levelRole <= 74) {
            role = '1st Lt. Grade 2 ♢♢²'
        } else if (levelRole <= 76) {
            role = '1st Lt. Grade 3 ♢♢³'
        } else if (levelRole <= 78) {
            role = '1st Lt. Grade 4 ♢♢⁴'
        } else if (levelRole <= 80) {
            role = '1st Lt. Grade 5 ♢♢⁵'
        } else if (levelRole <= 82) {
            role = 'Major Grade 1 ✷¹'
        } else if (levelRole <= 84) {
            role = 'Major Grade 2 ✷²'
        } else if (levelRole <= 86) {
            role = 'Major Grade 3 ✷³'
        } else if (levelRole <= 88) {
            role = 'Major Grade 4 ✷⁴'
        } else if (levelRole <= 90) {
            role = 'Major Grade 5 ✷⁵'
        } else if (levelRole <= 92) {
            role = 'Colonel Grade 1 ✷✷¹'
        } else if (levelRole <= 94) {
            role = 'Colonel Grade 2 ✷✷²'
        } else if (levelRole <= 96) {
            role = 'Colonel Grade 3 ✷✷³'
        } else if (levelRole <= 98) {
            role = 'Colonel Grade 4 ✷✷⁴'
        } else if (levelRole <= 100) {
            role = 'Colonel Grade 5 ✷✷⁵'
        } else if (levelRole <= 102) {
            role = 'Brigadier Early ✰'
        } else if (levelRole <= 104) {
            role = 'Brigadier Silver ✩'
        } else if (levelRole <= 106) {
            role = 'Brigadier gold ✯'
        } else if (levelRole <= 108) {
            role = 'Brigadier Platinum ✬'
        } else if (levelRole <= 110) {
            role = 'Brigadier Diamond ✪'
        } else if (levelRole <= 112) {
            role = 'Major General Early ✰'
        } else if (levelRole <= 114) {
            role = 'Major General Silver ✩'
        } else if (levelRole <= 116) {
            role = 'Major General gold ✯'
        } else if (levelRole <= 118) {
            role = 'Major General Platinum ✬'
        } else if (levelRole <= 120) {
            role = 'Major General Diamond ✪'
        } else if (levelRole <= 122) {
            role = 'Lt. General Early ✰'
        } else if (levelRole <= 124) {
            role = 'Lt. General Silver ✩'
        } else if (levelRole <= 126) {
            role = 'Lt. General gold ✯'
        } else if (levelRole <= 128) {
            role = 'Lt. General Platinum ✬'
        } else if (levelRole <= 130) {
            role = 'Lt. General Diamond ✪'
        } else if (levelRole <= 132) {
            role = 'General Early ✰'
        } else if (levelRole <= 134) {
            role = 'General Silver ✩'
        } else if (levelRole <= 136) {
            role = 'General gold ✯'
        } else if (levelRole <= 138) {
            role = 'General Platinum ✬'
        } else if (levelRole <= 140) {
            role = 'General Diamond ✪'
        } else if (levelRole <= 142) {
            role = 'Commander Early ★'
        } else if (levelRole <= 144) {
            role = 'Commander Intermediate ⍣'
        } else if (levelRole <= 146) {
            role = 'Commander Elite ≛'
        } else if (levelRole <= 148) {
            role = 'The Commander Hero ⍟'
        } else if (levelRole <= 152) {
            role = 'Legends 忍'
        } else if (levelRole <= 154) {
            role = 'Legends 忍'
        } else if (levelRole <= 156) {
            role = 'Legends 忍'
        } else if (levelRole <= 158) {
            role = 'Legends 忍'
        } else if (levelRole <= 160) {
            role = 'Legends 忍'
        } else if (levelRole <= 162) {
            role = 'Legends 忍'
        } else if (levelRole <= 164) {
            role = 'Legends 忍'
        } else if (levelRole <= 166) {
            role = 'Legends 忍'
        } else if (levelRole <= 168) {
            role = 'Legends 忍'
        } else if (levelRole <= 170) {
            role = 'Legends 忍'
        } else if (levelRole <= 172) {
            role = 'Legends 忍'
        } else if (levelRole <= 174) {
            role = 'Legends 忍'
        } else if (levelRole <= 176) {
            role = 'Legends 忍'
        } else if (levelRole <= 178) {
            role = 'Legends 忍'
        } else if (levelRole <= 180) {
            role = 'Legends 忍'
        } else if (levelRole <= 182) {
            role = 'Legends 忍'
        } else if (levelRole <= 184) {
            role = 'Legends 忍'
        } else if (levelRole <= 186) {
            role = 'Legends 忍'
        } else if (levelRole <= 188) {
            role = 'Legends 忍'
        } else if (levelRole <= 190) {
            role = 'Legends 忍'
        } else if (levelRole <= 192) {
            role = 'Legends 忍'
        } else if (levelRole <= 194) {
            role = 'Legends 忍'
        } else if (levelRole <= 196) {
            role = 'Legends 忍'
        } else if (levelRole <= 198) {
            role = 'Legends 忍'
        } else if (levelRole <= 200) {
            role = 'Legends 忍'
        } else if (levelRole <= 210) {
            role = 'Legends 忍'
        } else if (levelRole <= 220) {
            role = 'Legends 忍'
        } else if (levelRole <= 230) {
            role = 'Legends 忍'
        } else if (levelRole <= 240) {
            role = 'Legends 忍'
        } else if (levelRole <= 250) {
            role = 'Legends 忍'
        } else if (levelRole <= 260) {
            role = 'Legends 忍'
        } else if (levelRole <= 270) {
            role = 'Legends 忍'
        } else if (levelRole <= 280) {
            role = 'Legends 忍'
        } else if (levelRole <= 290) {
            role = 'Legends 忍'
        } else if (levelRole <= 300) {
            role = 'Legends 忍'
        } else if (levelRole <= 310) {
            role = 'Legends 忍'
        } else if (levelRole <= 320) {
            role = 'Legends 忍'
        } else if (levelRole <= 330) {
            role = 'Legends 忍'
        } else if (levelRole <= 340) {
            role = 'Legends 忍'
        } else if (levelRole <= 350) {
            role = 'Legends 忍'
        } else if (levelRole <= 360) {
            role = 'Legends 忍'
        } else if (levelRole <= 370) {
            role = 'Legends 忍'
        } else if (levelRole <= 380) {
            role = 'Legends 忍'
        } else if (levelRole <= 390) {
            role = 'Legends 忍'
        } else if (levelRole <= 400) {
            role = 'Legends 忍'
        } else if (levelRole <= 410) {
            role = 'Legends 忍'
        } else if (levelRole <= 420) {
            role = 'Legends 忍'
        } else if (levelRole <= 430) {
            role = 'Legends 忍'
        } else if (levelRole <= 440) {
            role = 'Legends 忍'
        } else if (levelRole <= 450) {
            role = 'Legends 忍'
        } else if (levelRole <= 460) {
            role = 'Legends 忍'
        } else if (levelRole <= 470) {
            role = 'Legends 忍'
        } else if (levelRole <= 480) {
            role = 'Legends 忍'
        } else if (levelRole <= 490) {
            role = 'Legends 忍'
        } else if (levelRole <= 500) {
            role = 'Legends 忍'
        } else if (levelRole <= 600) {
            role = 'Legends 忍'
        } else if (levelRole <= 700) {
            role = 'Legends 忍'
        } else if (levelRole <= 800) {
            role = 'Legends 忍'
        } else if (levelRole <= 900) {
            role = 'Legends 忍'
        } else if (levelRole <= 1000) {
            role = 'Legends 忍'
        } else if (levelRole <= 2000) {
            role = 'Legends 忍'
        } else if (levelRole <= 3000) {
            role = 'Legends 忍'
        } else if (levelRole <= 4000) {
            role = 'Legends 忍'
        } else if (levelRole <= 5000) {
            role = 'Legends 忍'
        } else if (levelRole <= 6000) {
            role = 'Legends 忍'
        } else if (levelRole <= 7000) {
            role = 'Legends 忍'
        } else if (levelRole <= 8000) {
            role = 'Legends 忍'
        } else if (levelRole <= 9000) {
            role = 'Legends 忍'
        } else if (levelRole <= 10000) {
            role = 'Legends 忍'
            
            var prema = 'Free'
			if (!isAdmin) {
				prema = 'Adminban'
			}
			if (!isPremium) {
				prema = 'Premium'
			} 
			if (!isJepri) {
				prema = 'Owner'
			}
	}
			
	        //function leveling
            if (isGroup && isRegistered && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 100
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    bayarLimit(sender, 3)
                    await reply(ind.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role))
                }
            } catch (err) {
                console.error(err)
            }
        }
          //function check limit
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return jepribrs.sendMessage(from,`Limit anda sudah habis\n\n_Note : limit akan di reset setiap hari pukul 12:00 atau \n chat owner untuk menambahkan limit anda👇 \n http://wa.me/12349805035`, text,{ quoted: mek})
                            jepribrs.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 0 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/pengguna/limit.json', JSON.stringify(_limit))
                        jepribrs.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                    }
				}
				
			//funtion limited
           const isLimit = (sender) =>{ 
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    jepribrs.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./database/pengguna/limit.json',JSON.stringify(_limit))
           return false
       }
     }

        
            if (isGroup) {
				try {
					const getmemex = groupMembers.length
					    if (getmemex <= memberlimit) {
					    }
		       } catch (err) { console.error(err)  }
        }
      
            //function balance
            if (isRegistered ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 90
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }
        
        //antilink fixs kangdev
        if (messagesC.includes("://chat.whatsapp.com/")){
		if (!isGroup) return
		if (!isAntilink) return
		if (isGroupAdmins) return reply('Admin mah bebas yakan syng😗')
		jepribrs.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`Grup Ini Anti Link Sayang ${sender.split("@")[0]} Kamu Akan di kick sebentar lagi`)
		setTimeout( () => {
			jepribrs.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 2000)
		setTimeout( () => {
			jepribrs.updatePresence(from, Presence.composing)
			reply("Door Headshot Jep")
		}, 1000)
		setTimeout( () => {
			jepribrs.updatePresence(from, Presence.composing)
			reply("bismilah")
		}, 0)
	}
	
	if (messagesC.includes("://kuotainternet.online/")){
		if (!isGroup) return
		if (!isAntilink) return
		if (isGroupAdmins) return reply('Admin mah bebas yakan syng😗')
		jepribrs.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`Grup Ini Anti Link Sayang ${sender.split("@")[0]} Kamu Akan di kick sebentar lagi`)
		setTimeout( () => {
			jepribrs.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 2000)
		setTimeout( () => {
			jepribrs.updatePresence(from, Presence.composing)
			reply("Door Headshot Jep")
		}, 1000)
		setTimeout( () => {
			jepribrs.updatePresence(from, Presence.composing)
			reply("bismilah")
		}, 0)
	}
	
	if (messagesC.includes("https://")){
		if (!isGroup) return
		if (!isAntilink) return
		if (isGroupAdmins) return reply('Admin mah bebas yakan syng😗')
		jepribrs.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`Grup Ini Anti Link Sayang ${sender.split("@")[0]} Kamu Akan di kick sebentar lagi`)
		setTimeout( () => {
			jepribrs.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 2000)
		setTimeout( () => {
			jepribrs.updatePresence(from, Presence.composing)
			reply("Door Headshot Jep")
		}, 1000)
		setTimeout( () => {
			jepribrs.updatePresence(from, Presence.composing)
			reply("bismilah")
		}, 0)
	}
	
	//anti toxic
	if (bad.includes(messagesC)) {
		if (!isGroup) return
		if (!isAntiToxic) return
		if (isGroupAdmins) return reply('sopankah begitu min? bismillah ku tepok mulut kau min😇 untung kamu admin kalo gak udah saya kick😇')
		jepribrs.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`Grup Ini Anti Toxic Sayang ${sender.split("@")[0]} kamu akan di kick dari group karna berkata kasar`)
		setTimeout( () => {
			jepribrs.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
			jepribrs.updatePresence(from, Presence.composing)
			reply("Headshot jep semoga mulutnya kena azab :v")
		}, 4000)
		setTimeout( () => {
			jepribrs.updatePresence(from, Presence.composing)
			reply("Dorrrrrrrrrrr")
		}, 3000)
		setTimeout( () => {
			jepribrs.updatePresence(from, Presence.composing)
			reply("mengapa semua menangis...")
		}, 2000)
		setTimeout( () => {
			jepribrs.updatePresence(from, Presence.composing)
			reply("Bismillah")
		}, 1000)
		setTimeout( () => {
			jepribrs.updatePresence(from, Presence.composing)
			reply("Ready Syng?")
		}, 0)
	}

             //kolor
			colors = ['red','white','black','blue','yellow','green']
			
			//detector media
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			
			//private chat message
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			
			//group message
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			
			switch(command) {
                    //daftar Kangdev Bot barus
					case 'daftar':
                			if (isRegistered) return  reply(ind.rediregis())
                			if (!q.includes('|')) return  reply(ind.wrongf())
                			const namaUser = q.substring(0, q.indexOf('|') - 0)
                			const umurUser = q.substring(q.lastIndexOf('|') + 1)
                			const serialUser = createSerial(20)
                			if(isNaN(umurUser)) return await reply('Umur harus berupa angka syg')
                			if (namaUser.length >= 30) return reply(`name vailed!!!`)
                			if (umurUser > 40) return reply(`umur kamu terlalu tua om`)
                			if (umurUser < 12) return reply(`umur kamu terlalu muda cil`)
                					try {
								ppimg = await jepribrs.getProfilePicture(`${sender.split('@')[0]}@c.us`)
								} catch {
								ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
                					veri = sender
                					if (isGroup) {
                    			addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    			await jepribrs.sendMessage(from, ppimg, image, {quoted: mek, caption: ind.registered(namaUser, umurUser, serialUser, time, sender)})
                    			addATM(sender)
                    			addLevelingId(sender)
                    			checkLimit(sender)
                    			console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                			} else {
                    			addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    			await jepribrs.sendMessage(from, ppimg, image, {quoted: mek, caption: ind.registered(namaUser, umurUser, serialUser, time, sender)})
                    			addATM(sender)
                    			addLevelingId(sender)
                    			checkLimit(sender)
                    			console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
                			}
				        break
				       case 'test':
				case 'tes':
					   jepribrs.sendMessage(from, 'bot aktif syang',MessageType.text, { quoted: mek} )
					   break
                    case 'runtime':
				jepribrs.updatePresence(from, Presence.composing) 
				uptime = process.uptime()
				reply(`Bot Telah Aktif Selama\n*${kyun(uptime)}*`)
				break
					   case 'bahasa':
                 if (!isRegistered) return reply( ind.noregis())
                    if (isBanned) return reply('Maaf kamu sudah terbenned!')
					jepribrs.sendMessage(from, bahasa(), text)
					await limitAdd(sender)
					break
		            case 'del':
		            case 'd':
		            case 'delete':
                 if (!isRegistered) return reply( ind.noregis())
                    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (!isGroupAdmins) return reply(ind.admin())
				if (!isGroupAdmins) return reply(ind.admin()) 
					jepribrs.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					await limitAdd(sender)
					break
					case 'info':
					me = jepribrs.user
					uptime = process.uptime()
					teks = `INFO BOT \n\n Nama Bot : Kangdev Bot\n\n Owner Bot : Jepri Barus\n\n Wa : wa.me/6285767354326 \n\n Aktif  : ${kyun(uptime)}`
					buffer = await getBuffer(me.imgUrl)
					jepribrs.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
		case 'carabuatbot':
		            case 'buatbot':
                    if (!isRegistered) return reply( ind.noregis())
                    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
		            jepribrs.sendMessage(from, buatbot(), text)
		            break
		case 'limit':
				   if (!isRegistered) return reply( ind.noregis())
                    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				   checkLimit(sender)
				break
				case 'menu':
				case 'help':
                 if (!isRegistered) return reply( ind.noregis())
                    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                    wew = fs.readFileSync(`./jepribarus/logo.jpg`)
                    barus = `🚴        🐎
                    
                    
     〘 KANGDEV BOT〙
╭─┅─┅─┅─┅─┅─┅─┅❁۪۪
├❒OWNER : JEPRI BARUS
├❒PREFIX : ${prefix}
├❒DATE : ${time}
├❒HALO : ${pushname}
└┅─┅─┅─┅─┅─┅─┅─┅❁۪۪ 

❒ ABOUTE BOT❒
 ⤷ ${prefix}info
 ⤷ ${prefix}carabuatbot
 ⤷ ${prefix}tes
 
 ❒ OTHER MENU❒
 ⤷ ${prefix}stiker
 ⤷ ${prefix}stikerwa
 ⤷ ${prefix}stikertext
 ⤷ ${prefix}ttp
 ⤷ ${prefix}toimg
  ⤷ ${prefix}pinterest
  ⤷ ${prefix}googleimage
  ⤷ ${prefix}artinama [jepri]
  ⤷ ${prefix}artimimpi [kucing]
  ⤷ ${prefix}chord [judul]
  ⤷ ${prefix}lirik [judul]
  ⤷ ${prefix}cerpen
  ⤷ ${prefix}cersex
  ⤷ ${prefix}namaninja
  ⤷ ${prefix}gempa
  ⤷ ${prefix}cuaca [kota]
  ⤷ ${prefix}jamdunia [kota]
  ⤷ ${prefix}jadwaltv
  ⤷ ${prefix}cintasegitiga
  ⤷ ${prefix}cekip [ip]
  ⤷ ${prefix}font [text]
  ⤷ ${prefix}font2 [text]
  ⤷ ${prefix}hilih [text]
  ⤷ ${prefix}covid19
  ⤷ ${prefix}mutual
  ⤷ ${prefix}next
  ⤷ ${prefix}tts
  
  
  ❒ SEKOLAH MENU ❒
  ⤷ ${prefix}tugassekolah
  ⤷ ${prefix}kalkulator
  ⤷ ${prefix}wikipedia
  ⤷ ${prefix}kbbi
  
  ❒ GROUP MENU ❒
  ⤷ ${prefix}grup buka/tutup
  ⤷ ${prefix}leveling [1/0]
  ⤷ ${prefix}tutuptime [waktu]
  ⤷ ${prefix}bukatime [waktu]
  ⤷ ${prefix}level
  ⤷ ${prefix}linkgc
  ⤷ ${prefix}infogc
  ⤷ ${prefix}add
  ⤷ ${prefix}headshot
  ⤷ ${prefix}listadmin
  ⤷ ${prefix}simih [1/0]
  ⤷ ${prefix}promote
  ⤷ ${prefix}demote
  ⤷ ${prefix}setdesc
  ⤷ ${prefix}setname
  ⤷ ${prefix}antilink [1/0]
  ⤷ ${prefix}nsfw [1/0]
  ⤷ ${prefix}welcome [1/0]
  ⤷ ${prefix}leveling [1/0]
  ⤷ ${prefix}antitoxic [1/0]
  ⤷ ${prefix}antidelete
  ⤷ ${prefix}hapustoxic
  ⤷ ${prefix}addtoxic
  ⤷ ${prefix}tagall
  
  ❒ OWNER MENU ❒
  ⤷ ${prefix}setlimit
  ⤷ ${prefix}gantiapikey
  ⤷ ${prefix}kick
  ⤷ ${prefix}clearall
  ⤷ ${prefix}setprefix
  ⤷ ${prefix}setppbot
  ⤷ ${prefix}ban
  ⤷ ${prefix}unban
 
 ❒ DATABASE BOT ❒
  ⤷ ${prefix}addvn
  ⤷ ${prefix}getvn
  ⤷ ${prefix}listvn
  ⤷ ${prefix}addfoto
  ⤷ ${prefix}getfoto
  ⤷ ${prefix}listfoto
  ⤷ ${prefix}addvideo
  ⤷ ${prefix}getvideo
  ⤷ ${prefix}listvideo
 
 ❒ GABUT MENU ❒
  ⤷ ${prefix}bisakah
  ⤷ ${prefix}kapankah
  ⤷ ${prefix}apakah
  ⤷ ${prefix}sangecek
  ⤷ ${prefix}gaycek
  ⤷ ${prefix}gantengcek
  ⤷ ${prefix}cantikcek
  ⤷ ${prefix}watak
  ⤷ ${prefix}hobby
  ⤷ ${prefix}jadian
  ⤷ ${prefix}jodohku
  ⤷ ${prefix}tercantik
  ⤷ ${prefix}terganteng
  ⤷ ${prefix}jones
  ⤷ ${prefix}bebankeluarga
 
 ❒ SOSMED MENU❒
  ⤷ ${prefix}ytmp4
  ⤷ ${prefix}ytmp42
  ⤷ ${prefix}ytmp3
  ⤷ ${prefix}ytmp32
  ⤷ ${prefix}playmp3
  ⤷ ${prefix}playmp4
  ⤷ ${prefix}igstalk[username]
  ⤷ ${prefix}githubstalk [username]
  ⤷ ${prefix}twiterstalk [username]
  ⤷ ${prefix}igvideo
  ⤷ ${prefix}fbvideo
  ⤷ ${prefix}tiktokvideo
  
  ❒ ISLAMIC MENU❒
  ⤷ ${prefix}jadwalsholat
  ⤷ ${prefix}kisahnabi
  ⤷ ${prefix}niatsholat
  ⤷ ${prefix}tahlil
  ⤷ ${prefix}wirid
  ⤷ ${prefix}ayatkursi
  ⤷ ${prefix}doaharian
  ⤷ ${prefix}bacaansholat
  ⤷ ${prefix}quran
  ⤷ ${prefix}quran2
  ⤷ ${prefix}hijaber [OOTD]
  
  ❒ ASUPAN MENU❒
  ⤷ ${prefix}asupan
  ⤷ ${prefix}asupan2
  ⤷ ${prefix}asupanpelajar
  ⤷ ${prefix}rikagusriani
  ⤷ ${prefix}ukhty
  ⤷ ${prefix}djimut
  
  ❒ RANDOM IMAGE❒
  ⤷ ${prefix}harleyquin
  ⤷ ${prefix}joker
  ⤷ ${prefix}hijaber
  ⤷ ${prefix}cecans
  ⤷ ${prefix}cogans
  ⤷ ${prefix}cr11
  ⤷ ${prefix}bpink
  ⤷ ${prefix}bts
  ⤷ ${prefix}cewekracing
  ⤷ ${prefix}anonymous
  ⤷ ${prefix}pegunungan
  ⤷ ${prefix}programing
  ⤷ ${prefix}teknologi
  ⤷ ${prefix}cyberspace
  ⤷ ${prefix}muslim
  
  ❒ NSFW MENU❒
  ⤷ ${prefix}ass
  ⤷ ${prefix}ahegao
  ⤷ ${prefix}bdsm
  ⤷ ${prefix}blowjob
  ⤷ ${prefix}cuckold
  ⤷ ${prefix}cum
  ⤷ ${prefix}ero
  ⤷ ${prefix}femdom
  ⤷ ${prefix}foot
  ⤷ ${prefix}gangbang
  ⤷ ${prefix}glasses
  ⤷ ${prefix}hentai
  ⤷ ${prefix}hentaigif
  ⤷ ${prefix}jahy
  ⤷ ${prefix}masturbation
  ⤷ ${prefix}neko
  ⤷ ${prefix}orgy
  ⤷ ${prefix}panties
  ⤷ ${prefix}pussy
  ⤷ ${prefix}thighs
  ⤷ ${prefix}yuri
  
  ❒ SFW STIKER❒
  ⤷ ${prefix}smile
  ⤷ ${prefix}bully
  ⤷ ${prefix}cuddle
  ⤷ ${prefix}cry
  ⤷ ${prefix}lick
  ⤷ ${prefix}hug
  ⤷ ${prefix}pat
  ⤷ ${prefix}smug
  ⤷ ${prefix}bonk
  ⤷ ${prefix}yeet
  ⤷ ${prefix}dance
  ⤷ ${prefix}slap
  
  ❒ WIBU MENU❒
  ⤷ ${prefix}waifu
  ⤷ ${prefix}nekonime
  ⤷ ${prefix}shinobu
  ⤷ ${prefix}megumin
  ⤷ ${prefix}loli
  ⤷ ${prefix}akira
  ⤷ ${prefix}zerotwo
  ⤷ ${prefix}naruto
  ⤷ ${prefix}minato
  ⤷ ${prefix}hinata
  ⤷ ${prefix}sasuke
  ⤷ ${prefix}chika
  ⤷ ${prefix}kaneki
  ⤷ ${prefix}touka
  ⤷ ${prefix}rize
  ⤷ ${prefix}onichan
  ⤷ ${prefix}squidward
  
  ❒ QUOTES CAPTION❒
  ⤷ ${prefix}bucin
  ⤷ ${prefix}motivasi
  ⤷ ${prefix}quotesanime
  ⤷ ${prefix}quotesgambar
  ⤷ ${prefix}katabijak
  ⤷ ${prefix}katajoker
  ⤷ ${prefix}captionislam
  ⤷ ${prefix}pantun
  ⤷ ${prefix}caption
  ⤷ ${prefix}katahacker
  ⤷ ${prefix}katahits
  ⤷ ${prefix}katadoraemon
  ⤷ ${prefix}katadilan
  ⤷ ${prefix}katadoi
  
  ❒ PHOTO OXY❒
  ⤷ ${prefix}glitch
  ⤷ ${prefix}pubg
  ⤷ ${prefix}battlefield
  ⤷ ${prefix}google 
  ⤷ ${prefix}cup
  ⤷ ${prefix}cup2
  ⤷ ${prefix}pot
  ⤷ ${prefix}summer
  ⤷ ${prefix}wooden
  ⤷ ${prefix}rainbow
  ⤷ ${prefix}between
  ⤷ ${prefix}burn
  ⤷ ${prefix}love
  ⤷ ${prefix}wolf
  ⤷ ${prefix}under
  ⤷ ${prefix}water
  ⤷ ${prefix}night
  ⤷ ${prefix}fire
  ⤷ ${prefix}harry
  ⤷ ${prefix}horor
  ⤷ ${prefix}langit
  ⤷ ${prefix}smoke
  ⤷ ${prefix}art
  ⤷ ${prefix}neon
  ⤷ ${prefix}glow
  
  ❒ PHOTO MAKER❒
  ⤷ ${prefix}nulis
  ⤷ ${prefix}nulis2
  ⤷ ${prefix}nulis3
  ⤷ ${prefix}nulis4
  ⤷ ${prefix}tahta
  ⤷ ${prefix}tahta2
  ⤷ ${prefix}tahta3
  ⤷ ${prefix}logonaruto
  ⤷ ${prefix}berkode
  ⤷ ${prefix}aesthetic
  ⤷ ${prefix}bakarnama
  
  ❒ GAME MENU❒
  ⤷ ${prefix}caklontong
  ⤷ ${prefix}family100
  ⤷ ${prefix}tebakgambar
  ⤷ ${prefix}slot
  ⤷ ${prefix}slot2
  ⤷ ${prefix}dare
  ⤷ ${prefix}truth
  ⤷ ${prefix}truthaneh
  
  ❒ SERTIFIKAT MENU❒
  ⤷ ${prefix}tolol
  ⤷ ${prefix}epep
  ⤷ ${prefix}epep2
  ⤷ ${prefix}epep3
  ⤷ ${prefix}ml
  ⤷ ${prefix}ml2
  ⤷ ${prefix}ml3
  ⤷ ${prefix}pubg1
  ⤷ ${prefix}pubg2
  ⤷ ${prefix}pubg3
  ⤷ ${prefix}anakharam
  ⤷ ${prefix}babu
  ⤷ ${prefix}pacar
  ⤷ ${prefix}surga
  ⤷ ${prefix}sadboy
  ⤷ ${prefix}gay
  
  ❒ TEXT PRO ME❒
  ⤷ ${prefix}blackpink
  ⤷ ${prefix}blueneon
  ⤷ ${prefix}glass
  ⤷ ${prefix}party
  ⤷ ${prefix}matrix
  ⤷ ${prefix}dropwater
  ⤷ ${prefix}pasir
  ⤷ ${prefix}pasir2
  ⤷ ${prefix}pasir3
  ⤷ ${prefix}pasir4
  ⤷ ${prefix}text3d
  ⤷ ${prefix}matrix
  ⤷ ${prefix}light
  ⤷ ${prefix}cloud
  ⤷ ${prefix}gradient
  ⤷ ${prefix}1997
  ⤷ ${prefix}minion
  ⤷ ${prefix}helloween
  ⤷ ${prefix}grafity
  ⤷ ${prefix}goldplaybutton
  ⤷ ${prefix}silverplaybuton
  
  ❒Apikey❒
http://kangdev.herokuapp.com

❒Github❒
https://github.com/jepribarus

❒Join Grup Wa❒
https://chat.whatsapp.com/D7uui8L6UKnBJvQhaxhhtL
 `
                   //Sosial Media~Kangdev
                    jepribrs.sendMessage(from, wew, image, { quoted: mek, caption: barus })
					break
					case 'playmp3':
				if (!isRegistered) return reply( ind.noregis())
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				jepribrs.updatePresence(from, Presence.recording) 
				if (args.length < 1) return reply('Judulnya apa beb?')
				reply('[🙉] sabar sayang sedang proses')
				play = body.slice(9)
				anu = await fetchJson(`https://kangdev.herokuapp.com/api/play/mp3?query=${play}&apikey=${kangdev}`, {method: 'get'})
				ini_info = `Judul: ${anu.result.title}\n\n Size: ${anu.result.size}\n\n Duration: ${anu.result.duration}\n\n Source: ${anu.result.source}\n\n TUNGGU SEBENTAR LAGI DIKIRIM \n JANGAN SPAM YA BEB`
				buffer = await getBuffer(anu.result.thumbnail)
				lagu = await getBuffer(anu.result.url_audio)
				jepribrs.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: mek})
				jepribrs.sendMessage(from, buffer, image, {quoted: mek, caption: ini_info})
			break 
			case 'playmp4':
				if (!isRegistered) return reply( ind.noregis())
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				jepribrs.updatePresence(from, Presence.recording) 
				if (args.length < 1) return reply('Judulnya apa beb?')
				reply('[🙉] sabar sayang sedang proses')
				play = body.slice(9)
				anu = await fetchJson(`https://kangdev.herokuapp.com/api/play/mp4?query=${play}&apikey=${kangdev}`, {method: 'get'})
				ini_info = `Judul: ${anu.result.title}\n\n Size: ${anu.result.size}\n\n Source: ${anu.result.source}\n\n TUNGGU SEBENTAR LAGI DIKIRIM \n JANGAN SPAM YA BEB`
				buffer = await getBuffer(anu.result.thumbnail)
				barus = await getBuffer(anu.result.url_video)
				jepribrs.sendMessage(from, barus, video, {mimetype: 'video/mp4', filename: `${anu.result.title}.mp4`, quoted: mek})
				jepribrs.sendMessage(from, buffer, image, {quoted: mek, caption: ini_info})
			break 
					case 'ytmp42':
                    if (!isRegistered) return reply( ind.noregis())
                    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Urlnya mana Sayang?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(ind.wrogf())
					reply('[🙉] sabar sayang sedang proses')
                    get_result = await fetchJson(`https://kangdev.herokuapp.com/api/ytmp4?url=${args[0]}&apikey=${kangdev}`, {method: 'get'})
                    get_result = get_result
                    kang_dev = `Title : ${get_result.judul}\n\n`
                    kang_dev += `Size : ${get_result.size}\n\n`
                    kang_dev += `Resolusi : ${get_result.resolution}\n\n`
                    kang_dev += `Note : Wait...Sedang di kirim jangan di spam ngab !!!\n\n`
                    ini_buffer = await getBuffer(get_result.thumb)
                    jepribrs.sendMessage(from, ini_buffer, image, { quoted: mek, caption: kang_dev })
                    get_video = await getBuffer(get_result.url_video)
                    jepribrs.sendMessage(from, get_video, video, { mimetype: 'video/mp4', filename: `${get_result.judul}.mp4`, quoted: mek})
                    break
                    case 'ytmp4':
                    if (!isRegistered) return reply( ind.noregis())
                    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Urlnya mana Sayang?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(ind.wrogf())
					reply('[🙉] sabar sayang sedang proses')
                    get_result = await fetchJson(`https://kangdev.herokuapp.com/api/ytmp4/2?url=${args[0]}&apikey=${kangdev}`, {method: 'get'})
                    get_result = get_result
                    kang_dev = `Title : ${get_result.judul}\n\n`
                    kang_dev += `Viewer : ${get_result.viewer}\n\n`
                    kang_dev += `Deskripsi : ${get_result.desc}\n\n`
                    kang_dev += `Note : Wait...Sedang di kirim jangan di spam ngab !!!\n\n`
                    ini_buffer = await getBuffer(get_result.thumb)
                    jepribrs.sendMessage(from, ini_buffer, image, { quoted: mek, caption: kang_dev })
                    get_video = await getBuffer(get_result.url_video)
                    jepribrs.sendMessage(from, get_video, video, { mimetype: 'video/mp4', filename: `${get_result.judul}.mp4`, quoted: mek})
                    break
                    case 'ytmp3':
                    if (!isRegistered) return reply( ind.noregis())
                    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Urlnya mana Sayang?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(ind.wrogf())
					reply('[🙉] sabar sayang sedang proses')
                    get_result = await fetchJson(`https://kangdev.herokuapp.com/api/ytmp3?url=${args[0]}&apikey=${kangdev}`, {method: 'get'})
                    get_result = get_result
                    kang_dev = `Title : ${get_result.judul}\n\n`
                    kang_dev += `Size : ${get_result.size}\n\n`
                    kang_dev += `File : ${get_result.file}\n\n`
                    kang_dev += `Note : Wait...Sedang di kirim jangan di spam ngab !!!\n\n`
                    ini_buffer = await getBuffer(get_result.thumb)
                    jepribrs.sendMessage(from, ini_buffer, image, { quoted: mek, caption: kang_dev })
                    get_audio = await getBuffer(get_result.url_audio)
                    jepribrs.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.judul}.mp3`, quoted: mek})
                    break
                    case 'ytmp32':
                    if (!isRegistered) return reply( ind.noregis())
                    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Urlnya mana Sayang?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(ind.wrogf())
					reply('[🙉] sabar sayang sedang proses')
                    get_result = await fetchJson(`https://kangdev.herokuapp.com/api/ytmp3/2?url=${args[0]}&apikey=${kangdev}`, {method: 'get'})
                    get_result = get_result
                    kang_dev = `Title : ${get_result.judul}\n\n`
                    kang_dev += `Viewers : ${get_result.viewer}\n\n`
                    kang_dev += `Desc : ${get_result.desc}\n\n`
                    kang_dev += `Note : Wait...Sedang di kirim jangan di spam ngab !!!\n\n`
                    ini_apa = await getBuffer(get_result.thumb)
                    jepribrs.sendMessage(from, ini_apa, image, { quoted: mek, caption: kang_dev })
                    get_audio = await getBuffer(get_result.url_video)
                    jepribrs.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.judul}.mp3`, quoted: mek})
                    break
                    case 'igstalk':
			        if (!isRegistered) return reply( ind.noregis())
                    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Username nya mana beb ?')
					ige = body.slice(9)
					reply('[🚴] Sabar Beb Sedang Proses...')
					anu = await fetchJson(`https://kangdev.herokuapp.com/api/Instagram/stalk?username=${ige}&apikey=${kangdev}`, {method: 'get'})
					buffer7 = await getBuffer(anu.Pict)
					capt = `[KANGDEV BOT] \n\n Username : ${anu.Username}\n Nama : ${anu.Nama}\n Followers : ${anu.Diikuti}\n Following : ${anu.Mengikuti}\n Postingan : ${anu.Postingan}`
					jepribrs.sendMessage(from, buffer7, image, {quoted: mek, caption: capt})
					break
                    case 'igvideo':
                    if (!isRegistered) return reply( ind.noregis())
                    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Urlnya mana Sayang?')
					reply('[🙉] sabar sayang sedang proses')
					ini_apa = args[0]
                    get_result = await fetchJson(`https://kangdev.herokuapp.com/api/igdl/video?url=${args[0]}&apikey=${kangdev}`, {method: 'get'})
                    get_result = get_result
                    kang_dev = `username : ${get_result.username}\n\n`
                    kang_dev += `comment : ${get_result.comment}\n\n`
                    kang_dev += `caption : ${get_result.caption}\n\n`
                    kang_dev += `Note : Wait...Sedang di kirim jangan di spam ngab !!!\n\n`
                    ini_buffer = await getBuffer(get_result.thumb)
                    jepribrs.sendMessage(from, ini_buffer, image, { quoted: mek, caption: kang_dev })
                    get_video = await getBuffer(get_result.url)
                    jepribrs.sendMessage(from, get_video, video, { mimetype: 'video/mp4', filename: `${get_result.username}.mp4`, quoted: mek})
                    break
                    case 'fbvideo':
                    if (!isRegistered) return reply( ind.noregis())
                    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Urlnya mana Sayang?')
					reply('[🙉] sabar sayang sedang proses')
					ini_apa = args[0]
                    get_result = await fetchJson(`https://kangdev.herokuapp.com/api/fb/download?url=${args[0]}&apikey=${kangdev}`, {method: 'get'})
                    get_result = get_result
                    get_video = await getBuffer(get_result.url_video)
                    jepribrs.sendMessage(from, get_video, video, { mimetype: 'video/mp4', filename: `${get_result.judul}.mp4`, quoted: mek})
                    break
                    case 'tiktokvideo':
                    if (!isRegistered) return reply( ind.noregis())
                    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Urlnya mana Sayang?')
					reply('[🙉] sabar sayang sedang proses')
					ini_apa = args[0]
                    get_result = await fetchJson(`https://kangdev.herokuapp.com/api/tiktok/dl?url=${args[0]}&apikey=${kangdev}`, {method: 'get'})
                    get_result = get_result
                    get_video = await getBuffer(get_result.url_video)
                    jepribrs.sendMessage(from, get_video, video, { mimetype: 'video/mp4', filename: `${get_result.judul}.mp4`, quoted: mek})
                    break
                    case 'githubstalk':
			if (!isRegistered) return reply( ind.noregis())
                    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Username nya mana beb ?')
					git = body.slice(13)
					reply('[🚴] Sabar Beb Sedang Proses...')
					anu = await fetchJson(`https://kangdev.herokuapp.com/api/github/stalk?username=${git}&apikey=${kangdev}`, {method: 'get'})
					buffer7 = await getBuffer(anu.avatar)
					capt = `[KANGDEV BOT] \n\n follower : ${anu.follower}\n following : ${anu.following}\n location : ${anu.location}\n bio : ${anu.bio}\n Repositories : ${anu.public_repo}`
					jepribrs.sendMessage(from, buffer7, image, {quoted: mek, caption: capt})
					break
					case 'twiterstalk':
					case 'twitterstalk':
			if (!isRegistered) return reply( ind.noregis())
                    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Username nya mana beb ?')
					tt = body.slice(13)
					reply('[🚴] Sabar Beb Sedang Proses...')
					anu = await fetchJson(`https://kangdev.herokuapp.com/api/twitter/stalk?username=${tt}&apikey=${kangdev}`, {method: 'get'})
					buffer7 = await getBuffer(anu.img_banner)
					capt = `[KANGDEV BOT] \n\n nama : ${anu.nama}\n username : ${anu.username}\n followers : ${anu.followers}\n following : ${anu.following}\n twitt : ${anu.twitt}`
					jepribrs.sendMessage(from, buffer7, image, {quoted: mek, caption: capt})
					break
					//Islamic Feature~kangdev
					case 'niatsholat':  
		        if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply('[🚴] Sabar Beb Sedang Proses...')
				anu = await fetchJson(`https://kangdev.herokuapp.com/api/muslim/niatshalat?apikey=${kangdev}`, {method: 'get'})
				teks = '=================\n'
				for (let i of anu.result) {
				teks += `Sholat : ${i.name}\n*Arab* : ${i.arabic}\n*Latin* : ${i.latin}\n*Terjemah* : ${i.terjemahan}\n=================\n`
				}
				reply(teks.trim())
				break
				case 'tahlil':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply('[🚴] Sabar Beb Sedang Proses...')
				anu = await fetchJson(`https://kangdev.herokuapp.com/api/muslim/tahlil?apikey=${kangdev}`, {method: 'get'})
				teks = '=================\n'
				for (let i of anu.result.data) {
				teks += `Title : ${i.title}\nArab : ${i.arabic}\nTerjemah : ${i.translation}\n=================\n`
				}
				reply(teks.trim())
				break
				case 'wirid':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply('[🚴] Sabar Beb Sedang Proses...')
				anu = await fetchJson(`https://kangdev.herokuapp.com/api/muslim/wirid?apikey=${kangdev}`)
				for (let i of anu.result.data) {
				teks = `Arab : ${i.arabic}`
				}
				jepribrs.sendMessage(from, teks, text, {quoted: mek})
				break
				case 'ayatkursi':
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply('[🚴] Sabar Beb Sedang Proses...')
				anu = await fetchJson(`https://kangdev.herokuapp.com/api/muslim/ayatkursi?apikey=${kangdev}`)
				teks = `Arab : ${anu.result.data.arabic}\nLatin : ${anu.result.data.latin}\nArti : ${anu.result.data.translation}\nTafsir : ${anu.result.data.tafsir}`
				jepribrs.sendMessage(from, teks, text, {quoted: mek})
				break
				case 'doaharian':
				jepribrs.updatePresence(from, Presence.composing) 
				reply('[🚴] Sabar Beb Sedang Proses...')
				anu = await fetchJson(`https://kangdev.herokuapp.com/api/muslim/doaharian?apikey=${kangdev}`, {method: 'get'})
				teks = '=================\n'
				for (let i of anu.result.data) {
					teks += `Nama Doa: : ${i.title}\nArab : ${i.arabic}\nLatin : ${i.latin}\nTranslation : ${i.translation}\n=================\n`
				}
				reply(teks)
				break
				case 'bacaansholat': 
		        if (!isRegistered) return reply(ind.noregis())
				reply('[🚴] Sabar Beb Sedang Proses...')
				anu = await fetchJson(`https://kangdev.herokuapp.com/api/muslim/bacaanshalat?apikey=${kangdev}`, {method: 'get'})
				teks = '=================\n'
				for (let i of anu.result) {
				teks += `Bacaan : ${i.name}\n*Arab* : ${i.arabic}\n*Latin* : ${i.latin}\n*Terjemah* : ${i.terjemahan}\n=================\n`
				}
				reply(teks.trim())
                break
                case 'quran2':
                if (!isRegistered) return reply(ind.noregis())
                reply('[🚴] Sabar Beb Sedang Proses...')
					anu = await fetchJson(`https://kangdev.herokuapp.com/api/quran?apikey=${kangdev}`, {method: 'get'})
					quran = `Latin: ${anu.result.id.teks}\n\n Arabic: ${anu.result.ar.teks}`
					jepribrs.sendMessage(from, quran, text, {quoted: mek})
					break
					case 'quran':
					if (!isRegistered) return reply(ind.noregis())
					reply('[🚴] Sabar Beb Sedang Proses...')
					anu = await fetchJson(`https://api.banghasan.com/quran/format/json/acak`, {method: 'get'})
					quran = `${anu.acak.ar.teks}\n\n${anu.acak.id.teks}\nQ.S ${anu.surat.nama} ayat ${anu.acak.id.ayat}`
					jepribrs.sendMessage(from, quran, text, {quoted: mek})
					break
					case 'jadwalsholat':
			        if (!isRegistered) return reply( ind.noregis())
                    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(`Contoh ${prefix}jadwalsholat medan`)
					reply('[🚴] Sabar Beb Sedang Proses...')
					kota = args.join(" ")
					anu = await fetchJson(`https://kangdev.herokuapp.com/api/muslim/jadwalshalat?kota=${kota}&apikey=${kangdev}`, {method: 'get'})
					capt = `[KANGDEV BOT] \n\n Kota : ${kota}\n tanggal : ${anu.tanggal}\n subuh : ${anu.subuh}\n zuhur : ${anu.zuhur}\n ashar : ${anu.ashar}\n magrib : ${anu.magrib}\n isya : ${anu.isya}`
					jepribrs.sendMessage(from, capt, text, {quoted: mek})
					break
					case 'cintasegitiga':
			        if (!isRegistered) return reply( ind.noregis())
                    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(`Contoh ${prefix}cintasegitiga jepri|aisyah|putri`)
					reply('[🚴] Sabar Beb Sedang Proses...')
					ct = body.slice(14)
				bg1 = ct.split("|")[0];
                bg2 = ct.split("|")[1];
                bg3  = ct.split("|")[2];
					anu = await fetchJson(`https://kangdev.herokuapp.com/api/cinta/segitiga?nama1=${bg1}&nama2=${bg2}&nama3=${bg3}&apikey=${kangdev}`, {method: 'get'})
					capt = `[KANGDEV BOT] \n\n ${anu.result}`
					jepribrs.sendMessage(from, capt, text, {quoted: mek})
					break
					case 'kisahnabi':
			        if (!isRegistered) return reply( ind.noregis())
                    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(`Contoh ${prefix}kisahnabi muhammad`)
					reply('[🚴] Sabar Beb Sedang Proses...')
					nabi = args.join(" ")
					anu = await fetchJson(`https://kangdev.herokuapp.com/api/kisahnabi?nabi=${nabi}&apikey=${kangdev}`, {method: 'get'})
					capt = `[KANGDEV BOT] \n\n Nama Nabi : ${anu.nabi.nabi}\n lahir : ${anu.nabi.lahir}\n umur : ${anu.nabi.umur}\n tempat : ${anu.nabi.tempat}\n\n kisah : ${anu.nabi.kisah}`
					jepribrs.sendMessage(from, capt, text, {quoted: mek})
					break
					case 'hijaber':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply('[🚴] Sabar Beb Sedang Proses...')
                anu = await fetchJson(`https://kangdev.herokuapp.com/api/wallpaper/hijaber?apikey=${kangdev}`)
                buffer = await getBuffer(anu.result.url)
                jepribrs.sendMessage(from, buffer, image, { quoted: mek, caption: 'MaysaAllah Ukty [KANGDEV BOT]' })
                break
                case 'cewekracing':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply('[🚴] Sabar Beb Sedang Proses...')
                anu = await fetchJson(`https://kangdev.herokuapp.com/api/cewek/racing?apikey=${kangdev}`)
                buffer = await getBuffer(anu.result.url)
                jepribrs.sendMessage(from, buffer, image, { quoted: mek, caption: '[KANGDEV BOT]' })
                break
                case 'bpink':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply('[🚴] Sabar Beb Sedang Proses...')
                anu = await fetchJson(`https://kangdev.herokuapp.com/api/wallpaper/blackpink?apikey=${kangdev}`)
                buffer = await getBuffer(anu.result)
                jepribrs.sendMessage(from, buffer, image, { quoted: mek, caption: '[KANGDEV BOT]' })
                break
                case 'bts':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply('[🚴] Sabar Beb Sedang Proses...')
                anu = await fetchJson(`https://kangdev.herokuapp.com/api/wallpaper/bts?apikey=${kangdev}`)
                buffer = await getBuffer(anu.result)
                jepribrs.sendMessage(from, buffer, image, { quoted: mek, caption: '[KANGDEV BOT]' })
                break
                case 'cr11':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply('[🚴] Sabar Beb Sedang Proses...')
                anu = await fetchJson(`https://kangdev.herokuapp.com/api/chobay?apikey=${kangdev}`)
                buffer = await getBuffer(anu.result.url)
                jepribrs.sendMessage(from, buffer, image, { quoted: mek, caption: '[KANGDEV BOT]' })
                break
                //School Feature~kangdev
                case 'tugassekolah':
			        if (!isRegistered) return reply( ind.noregis())
                    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(`Contoh ${prefix}tugassekolah Jokowi`)
					reply('[🚴] Sabar Beb Sedang Proses...')
					query = args.join(" ")
					anu = await fetchJson(`https://kangdev.herokuapp.com/api/brainly?query=${query}&apikey=${kangdev}`, {method: 'get'})
					capt = `[KANGDEV BOT] \n\n Soal : ${anu.soal}\n Jawaban : ${anu.jawaban}`
					jepribrs.sendMessage(from, capt, text, {quoted: mek})
					break
					case 'wikipedia':
			        if (!isRegistered) return reply( ind.noregis())
                    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(`Contoh ${prefix}wikipedia Albert Einstein`)
					reply('[🚴] Sabar Beb Sedang Proses...')
					query = args.join(" ")
					anu = await fetchJson(`https://kangdev.herokuapp.com/api/wikipedia?query=${query}&apikey=${kangdev}`, {method: 'get'})
					reply(anu.result)
					break
					case 'kbbi':
			        if (!isRegistered) return reply( ind.noregis())
                    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(`Contoh ${prefix}kbbi kucing`)
					reply('[🚴] Sabar Beb Sedang Proses...')
					query = args.join(" ")
					anu = await fetchJson(`https://kangdev.herokuapp.com/api/kbbi?q=${query}&apikey=${kangdev}`, {method: 'get'})
					capt = `[KANGDEV BOT] \n\n lema : ${anu.lema}\n\n arti : ${anu.arti}`
					jepribrs.sendMessage(from, capt, text, {quoted: mek})
					break
					case 'rumuspersegipanjang':
			        if (!isRegistered) return reply( ind.noregis())
                    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(`Contoh ${prefix}rumuspersegipanjang 7/10`)
					reply('[🚴] Sabar Beb Sedang Proses...')
					var gh = body.slice(20)
			    var panjang = gh.split("/")[0];
			    var lebar = gh.split("/")[1];
					anu = await fetchJson(`https://kangdev.herokuapp.com/api/persegi/panjang?pjg=${panjang}&lbr=${lebar}&apikey=${kangdev}`, {method: 'get'})
					capt = `[KANGDEV BOT] \n\n rumus keliling : ${anu.rumus_keliling}\n hasil keliling : ${anu.hasil_keliling}\n\n rumus luas : ${anu.rumus_luas}\n hasil luas : ${anu.hasil_luas}`
					jepribrs.sendMessage(from, capt, text, {quoted: mek})
					break
					case 'rumuspersegi':
			        if (!isRegistered) return reply( ind.noregis())
                    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(`Contoh ${prefix}rumuspersegi 4`)
					reply('[🚴] Sabar Beb Sedang Proses...')
					anu = await fetchJson(`https://kangdev.herokuapp.com/api/persegi/rumus?sisi=${body.slice(13)}&apikey=${kangdev}`, {method: 'get'})
					capt = `[KANGDEV BOT] \n\n rumus keliling : ${anu.rumus_keliling}\n hasil keliling : ${anu.hasil_keliling}\n\n rumus luas : ${anu.rumus_luas}\n hasil luas : ${anu.hasil_luas}`
					jepribrs.sendMessage(from, capt, text, {quoted: mek})
					break
					case 'kuadrat':
			        if (!isRegistered) return reply( ind.noregis())
                    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(`Contoh ${prefix}rumuspersegi 4`)
					reply('[🚴] Sabar Beb Sedang Proses...')
					anu = await fetchJson(`https://kangdev.herokuapp.com/api/kuadrat?q=${body.slice(9)}&apikey=${kangdev}`, {method: 'get'})
					capt = `[KANGDEV BOT] \n\n nKuadrat dari ${body.slice(9)} adalah : ${anu.result}`
					jepribrs.sendMessage(from, capt, text, {quoted: mek})
					break
					//Asupan +62 Feature~kangdev
					case 'rikagusriani':
                if (!isRegistered) return reply( ind.noregis())
                    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply('[🚴] Sabar Beb Sedang Proses...')
                    anu = await fetchJson(`https://kangdev.herokuapp.com/api/rikagusriani?apikey=${kangdev}`)
                    buffer = await getBuffer(anu.result.url)
                    jepribrs.sendMessage(from, buffer, video, { quoted: mek, mimetype: Mimetype.mp4, filename: "asupan.mp4" })
                    break
                    case 'asupan':
                if (!isRegistered) return reply( ind.noregis())
                    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply('[🚴] Sabar Beb Sedang Proses...')
                    anu = await fetchJson(`https://kangdev.herokuapp.com/api/asupan?apikey=${kangdev}`)
                    buffer = await getBuffer(anu.result.result)
                    jepribrs.sendMessage(from, buffer, video, { quoted: mek, mimetype: Mimetype.mp4, filename: "asupan.mp4" })
                    break
                    case 'asupan2':
                if (!isRegistered) return reply( ind.noregis())
                    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply('[🚴] Sabar Beb Sedang Proses...')
                    anu = await fetchJson(`https://kangdev.herokuapp.com/api/asupan/santuy?apikey=${kangdev}`)
                    buffer = await getBuffer(anu.result.url)
                    jepribrs.sendMessage(from, buffer, video, { quoted: mek, mimetype: Mimetype.mp4, filename: "asupan.mp4" })
                    break
                    case 'ukthy':
                    case 'ukhty':
                if (!isRegistered) return reply( ind.noregis())
                    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply('[🚴] Sabar Beb Sedang Proses...')
                    anu = await fetchJson(`https://kangdev.herokuapp.com/api/ukty?apikey=${kangdev}`)
                    buffer = await getBuffer(anu.result.url)
                    jepribrs.sendMessage(from, buffer, video, { quoted: mek, mimetype: Mimetype.mp4, filename: "asupan.mp4" })
                    break
                    case 'asupanpelajar':
                if (!isRegistered) return reply( ind.noregis())
                    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply('[🚴] Sabar Beb Sedang Proses...')
                    anu = await fetchJson(`https://kangdev.herokuapp.com/api/bocil?apikey=${kangdev}`)
                    buffer = await getBuffer(anu.result.url)
                    jepribrs.sendMessage(from, buffer, video, { quoted: mek, mimetype: Mimetype.mp4, filename: "asupan.mp4" })
                    break
                    case 'djimut':
                if (!isRegistered) return reply( ind.noregis())
                    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply('[🚴] Sabar Beb Sedang Proses...')
                    anu = await fetchJson(`https://kangdev.herokuapp.com/api/ghea?apikey=${kangdev}`)
                    buffer = await getBuffer(anu.result.url)
                    jepribrs.sendMessage(from, buffer, video, { quoted: mek, mimetype: Mimetype.mp4, filename: "asupan.mp4" })
                    break
                    //Random Images Feature~kangdev
                    case 'harleyquin':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply('[🚴] Sabar Beb Sedang Proses...')
                anu = await fetchJson(`https://kangdev.herokuapp.com/api/wallpaper/harley?apikey=${kangdev}`)
                buffer = await getBuffer(anu.result.url)
                jepribrs.sendMessage(from, buffer, image, { quoted: mek, caption: '[KANGDEV BOT] \n\n Creator: Jepri Barus' })
                break
                case 'joker':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply('[🚴] Sabar Beb Sedang Proses...')
                anu = await fetchJson(`https://kangdev.herokuapp.com/api/wallpaper/joker?apikey=${kangdev}`)
                buffer = await getBuffer(anu.result.url)
                jepribrs.sendMessage(from, buffer, image, { quoted: mek, caption: '[KANGDEV BOT] \n\n Creator: Jepri Barus' })
                break
                case 'cecans':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply('[🚴] Sabar Beb Sedang Proses...')
                anu = await fetchJson(`https://kangdev.herokuapp.com/api/wallpaper/cecans?apikey=${kangdev}`)
                buffer = await getBuffer(anu.result.url)
                jepribrs.sendMessage(from, buffer, image, { quoted: mek, caption: '[KANGDEV BOT] \n\n Creator: Jepri Barus' })
                break
                case 'aesthetic':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply('[🚴] Sabar Beb Sedang Proses...')
                anu = await fetchJson(`https://kangdev.herokuapp.com/api/aesthetic?apikey=${kangdev}`)
                buffer = await getBuffer(anu.result.url)
                jepribrs.sendMessage(from, buffer, image, { quoted: mek, caption: '[KANGDEV BOT] \n\n Creator: Jepri Barus' })
                break
                case 'anonymous':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply('[🚴] Sabar Beb Sedang Proses...')
                anu = await fetchJson(`https://kangdev.herokuapp.com/api/wallpaper/anony?apikey=${kangdev}`)
                buffer = await getBuffer(anu.result.url)
                jepribrs.sendMessage(from, buffer, image, { quoted: mek, caption: '[KANGDEV BOT] \n\n Creator: Jepri Barus' })
                break
                case 'pegunungan':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply('[🚴] Sabar Beb Sedang Proses...')
                anu = await fetchJson(`https://kangdev.herokuapp.com/api/wallpaper/pegunungan?apikey=${kangdev}`)
                buffer = await getBuffer(anu.result.url)
                jepribrs.sendMessage(from, buffer, image, { quoted: mek, caption: '[KANGDEV BOT] \n\n Creator: Jepri Barus' })
                break
                case 'programing':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply('[🚴] Sabar Beb Sedang Proses...')
                anu = await fetchJson(`https://kangdev.herokuapp.com/api/wallpaper/programming?apikey=${kangdev}`)
                buffer = await getBuffer(anu.result)
                jepribrs.sendMessage(from, buffer, image, { quoted: mek, caption: '[KANGDEV BOT] \n\n Creator: Jepri Barus' })
                break
                case 'muslim':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply('[🚴] Sabar Beb Sedang Proses...')
                anu = await fetchJson(`https://kangdev.herokuapp.com/api/wallpaper/muslim?apikey=${kangdev}`)
                buffer = await getBuffer(anu.result)
                jepribrs.sendMessage(from, buffer, image, { quoted: mek, caption: '[KANGDEV BOT] \n\n Creator: Jepri Barus' })
                break
                case 'teknologi':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply('[🚴] Sabar Beb Sedang Proses...')
                anu = await fetchJson(`https://kangdev.herokuapp.com/api/wallpaper/teknologi?apikey=${kangdev}`)
                buffer = await getBuffer(anu.result)
                jepribrs.sendMessage(from, buffer, image, { quoted: mek, caption: '[KANGDEV BOT] \n\n Creator: Jepri Barus' })
                break
                case 'cyberspace':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply('[🚴] Sabar Beb Sedang Proses...')
                anu = await fetchJson(`https://kangdev.herokuapp.com/api/wallpaper/cyberspace?apikey=${kangdev}`)
                buffer = await getBuffer(anu.result)
                jepribrs.sendMessage(from, buffer, image, { quoted: mek, caption: '[KANGDEV BOT] \n\n Creator: Jepri Barus' })
                break
                //NSFW Feature~kangdev
                case 'ass':
                case 'ahegao':
                case 'bdsm':
                case 'blowjob':
                case 'cuckold':
                case 'cum':
                case 'ero':
                case 'femdom':
                case 'foot':
                case 'gangbang':
                case 'glasses':
                case 'hentai':
                case 'hentaigif':
                case 'jahy':
                case 'masturbation':
                case 'neko':
                case 'orgy':
                case 'panties':
                case 'pussy':
                case 'thighs':
                case 'yuri':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isNsfw) return reply(ind.nsfwoff())
				reply('[🚴] Sabar Beb Sedang Proses...')
                anu = await fetchJson(`https://kangdev.herokuapp.com/api/nsfw/${command}?apikey=${kangdev}`)
                buffer = await getBuffer(anu.result)
                jepribrs.sendMessage(from, buffer, image, { quoted: mek, caption: '[KANGDEV BOT]\n\n Hayolo mau coly ya om?' })
                break
                case 'nsfw':
		if (!isGroup) return reply(ind.groupo())
		if (!isGroupAdmins) return reply(ind.admin())
				if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan ')
				if (Number(args[0]) === 1) {
				nsfw.push(from)
				fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
				reply('Sukes mengaktifkan mode nsfw di group ini ✔️')
				} else if (Number(args[0]) === 0) {
				nsfw.splice(from, 1)
				fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
				reply('Sukes menonaktifkan mode nsfw di group ini ✔️')
				} else {
				reply(ind.satukos())
				}
				break
				//OTHER ~KANGDEV
				case 'jadwaltv':
			        if (!isRegistered) return reply( ind.noregis())
                    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(`Contoh ${prefix}jadwaltv rcti`)
					reply('[🚴] Sabar Beb Sedang Proses...')
					channel = args.join(" ")
					anu = await fetchJson(`https://kangdev.herokuapp.com/api/jadwal/tv?chanel=${channel}&apikey=${kangdev}`, {method: 'get'})
					capt = `[KANGDEV BOT] \n\n ${anu.result}`
					jepribrs.sendMessage(from, capt, text, {quoted: mek})
					break
				case 'pinterest':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Contoh ${prefix}pinterest anjing`)
				reply('[🚴] Sabar Beb Sedang Proses...')
                anu = await fetchJson(`https://kangdev.herokuapp.com/api/pinterest?query=${body.slice(10)}&apikey=${kangdev}`, {method: 'get'})
                buffer = await getBuffer(anu.result)
                jepribrs.sendMessage(from, buffer, image, { quoted: mek, caption: '[KANGDEV BOT] \n\n Creator: Jepri Barus' })
                break
                case 'googleimage':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Contoh ${prefix}googleimage kucing`)
				reply('[🚴] Sabar Beb Sedang Proses...')
                anu = await fetchJson(`https://kangdev.herokuapp.com/api/gambar/google?query=${body.slice(13)}&apikey=${kangdev}`, {method: 'get'})
                buffer = await getBuffer(anu.result)
                jepribrs.sendMessage(from, buffer, image, { quoted: mek, caption: '[KANGDEV BOT] \n\n Creator: Jepri Barus' })
                break
                case 'artinama':
			        if (!isRegistered) return reply( ind.noregis())
                    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(`Contoh ${prefix}artinama Jepri Barus`)
					reply('[🚴] Sabar Beb Sedang Proses...')
					anu = await fetchJson(`https://kangdev.herokuapp.com/api/artinama?nama=${body.slice(10)}&apikey=${kangdev}`, {method: 'get'})
					capt = `[KANGDEV BOT] \n\n Arti : ${anu.arti}`
					jepribrs.sendMessage(from, capt, text, {quoted: mek})
					break
					case 'artimimpi':
			        if (!isRegistered) return reply( ind.noregis())
                    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(`Contoh ${prefix}artimimpi kucing`)
					reply('[🚴] Sabar Beb Sedang Proses...')
					anu = await fetchJson(`https://kangdev.herokuapp.com/api/artimimpi?mimpi=${body.slice(10)}&apikey=${kangdev}`, {method: 'get'})
					capt = `[KANGDEV BOT] \n\n Arti : ${anu.arti}`
					jepribrs.sendMessage(from, capt, text, {quoted: mek})
					break
					case 'chord':
			        if (!isRegistered) return reply( ind.noregis())
                    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(`Contoh ${prefix}chord menepi`)
					reply('[🚴] Sabar Beb Sedang Proses...')
					anu = await fetchJson(`https://kangdev.herokuapp.com/api/chord?judul=${body.slice(7)}&apikey=${kangdev}`, {method: 'get'})
					capt = `[KANGDEV BOT] \n\n Chord Gitar : ${body.slice(7)}\n\n ${anu.result}`
					jepribrs.sendMessage(from, capt, text, {quoted: mek})
					break
					case 'lirik':
			        if (!isRegistered) return reply( ind.noregis())
                    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(`Contoh ${prefix}chord menepi`)
					reply('[🚴] Sabar Beb Sedang Proses...')
					anu = await fetchJson(`https://kangdev.herokuapp.com/api/lirik?query=${body.slice(7)}&apikey=${kangdev}`, {method: 'get'})
					capt = `[KANGDEV BOT] \n\n ${anu.result}`
					jepribrs.sendMessage(from, capt, text, {quoted: mek})
					break
					case 'kalkulator':
			        if (!isRegistered) return reply( ind.noregis())
                    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(`Contoh ${prefix}chord menepi`)
					reply('[🚴] Wait Gw Hitung Dulu...')
					anu = await fetchJson(`https://kangdev.herokuapp.com/api/kalkulator?query=${body.slice(11)}&apikey=${kangdev}`, {method: 'get'})
					capt = `[KANGDEV BOT] \n\n Soal: ${body.slice(11)}\n Hasil ${anu.hasil}`
					jepribrs.sendMessage(from, capt, text, {quoted: mek})
					break
					case 'cerpen':
			        if (!isRegistered) return reply( ind.noregis())
                    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply('[🚴] Sabar Beb Sedang Proses...')
					anu = await fetchJson(`https://kangdev.herokuapp.com/api/cerpen?apikey=${kangdev}`, {method: 'get'})
					capt = `[KANGDEV BOT] \n\n cerita : ${anu.cerita}`
					jepribrs.sendMessage(from, capt, text, {quoted: mek})
					break
					case 'cersex':
					if (!isRegistered) return reply(ind.noregis())
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply('[🚴] Sabar Beb Sedang Proses...')
				anu = await fetchJson(`https://kangdev.herokuapp.com/api/cersex?apikey=${kangdev}`)
				hasil = `[KANGDEV BOT] \n\nJudul : ${anu.judul}\n Category : ${anu.category}\n\n Kisah Cerita : ${anu.cerita}`
				jepribrs.sendMessage(from, hasil, text, {quoted:mek})
				break
				case 'gempa':
					if (!isRegistered) return reply(ind.noregis())
					if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply('[🚴] Sabar Beb Sedang Proses...')
				anu = await fetchJson(`https://kangdev.herokuapp.com/api/infogempa?apikey=${kangdev}`)
				hasil = `[KANGDEV BOT] \n\n Waktu : ${anu.result.Waktu}\n Lintang : ${anu.result.Lintang}\n Bujur : ${anu.result.Bujur}\n Magnitudo : ${anu.result.Magnitudo}\n Kedalaman : ${anu.result.Kedalaman}\n Wilayah : ${anu.result.Wilayah}`
				jepribrs.sendMessage(from, hasil, text, {quoted:mek})
				break
				case 'cuaca':
			        if (!isRegistered) return reply( ind.noregis())
                    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(`Contoh ${prefix}cuaca medan`)
					reply('[🚴] Sabar Beb Sedang Proses...')
					kota = args.join(" ")
					anu = await fetchJson(`https://kangdev.herokuapp.com/api/infocuaca?kota=${kota}&apikey=${kangdev}`, {method: 'get'})
					capt = `[KANGDEV BOT] \n\n Kota : ${anu.result.kota}\n Hari : ${anu.result.hari}\n Cuaca : ${anu.result.cuaca}\n deskripsi : ${anu.result.deskripsi}\n suhu : ${anu.result.suhu}\n pressure : ${anu.result.pressure}\n kelembapan : ${anu.result.kelembapan}\n angin : ${anu.result.angin}`
					jepribrs.sendMessage(from, capt, text, {quoted: mek})
					break
				case 'jamdunia':
			        if (!isRegistered) return reply( ind.noregis())
                    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(`Contoh ${prefix}jamdunia london`)
					reply('[🚴] Sabar Beb Sedang Proses...')
					kota = args.join(" ")
					anu = await fetchJson(`https://kangdev.herokuapp.com/api/jam/dunia?kota=${kota}&apikey=${kangdev}`, {method: 'get'})
					capt = `[KANGDEV BOT] \n\n Kota: ${kota}\n tanggal : ${anu.time.date}\n Time : ${anu.time.time}`
					jepribrs.sendMessage(from, capt, text, {quoted: mek})
					break
					case 'cekip':
			        if (!isRegistered) return reply( ind.noregis())
                    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(`Contoh ${prefix}cekip 182.1.57.213`)
					reply('[🚴] Sabar Beb Sedang Proses...')
					ip = args.join(" ")
					anu = await fetchJson(`https://kangdev.herokuapp.com/api/cek/ip?ip=${ip}&apikey=${kangdev}`, {method: 'get'})
					capt = `[KANGDEV BOT] \n\n ip : ${ip}\n Negara : ${anu.country}\n Kota : ${anu.region}\n Desa : ${anu.city}\n Jaringan : ${anu.isp}`
					jepribrs.sendMessage(from, capt, text, {quoted: mek})
					break
					case 'font':
			        if (!isRegistered) return reply( ind.noregis())
                    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(`Contoh ${prefix}font jeprigans`)
					reply('[🚴] Sabar Beb Sedang Proses...')
					font = args.join(" ")
					anu = await fetchJson(`https://kangdev.herokuapp.com/api/font?text=${font}&apikey=${kangdev}`, {method: 'get'})
					capt = `[KANGDEV BOT] \n\n Nih Ngab: ${anu.result}`
					jepribrs.sendMessage(from, capt, text, {quoted: mek})
					break
					case 'font2':
			        if (!isRegistered) return reply( ind.noregis())
                    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(`Contoh ${prefix}font2 jeprigans`)
					reply('[🚴] Sabar Beb Sedang Proses...')
					font = args.join(" ")
					anu = await fetchJson(`https://kangdev.herokuapp.com/api/font2?text=${font}&apikey=${kangdev}`, {method: 'get'})
					capt = `[KANGDEV BOT] \n\n Nih Ngab: ${anu.result}`
					jepribrs.sendMessage(from, capt, text, {quoted: mek})
					break
					case 'hilih':
			        if (!isRegistered) return reply( ind.noregis())
                    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(`Contoh ${prefix}hilih jepri barus ganteng banget`)
					reply('[🚴] Sabar Beb Sedang Proses...')
					dev = args.join(" ")
					anu = await fetchJson(`https://kangdev.herokuapp.com/api/hilih?text=${dev}&apikey=${kangdev}`, {method: 'get'})
					capt = `[KANGDEV BOT] \n\n ${anu.result}`
					jepribrs.sendMessage(from, capt, text, {quoted: mek})
					break
					//QUOTES MENU ~ KANGDEV
					case 'bucin':
			        if (!isRegistered) return reply( ind.noregis())
                    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://kangdev.herokuapp.com/api/bucin?apikey=${kangdev}`, {method: 'get'})
					capt = `[KANGDEV BOT] \n\n ${anu.result.result}`
					jepribrs.sendMessage(from, capt, text, { quoted: mek })
					break
					case 'motivasi':
			        if (!isRegistered) return reply( ind.noregis())
                    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://kangdev.herokuapp.com/api/motivasi?apikey=${kangdev}`, {method: 'get'})
					capt = `[KANGDEV BOT] \n\n ${anu.result.motivasi}`
					jepribrs.sendMessage(from, capt, text, { quoted: mek })
					break
					case 'quotesanime':
			        if (!isRegistered) return reply( ind.noregis())
                    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://kangdev.herokuapp.com/api/quote/anime?apikey=${kangdev}`, {method: 'get'})
					capt = `[KANGDEV BOT] \n\n ${anu.quotes}`
					jepribrs.sendMessage(from, capt, text, { quoted: mek })
					break
					case 'quotesgambar':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                anu = await fetchJson(`https://kangdev.herokuapp.com/api/quote/gambar?apikey=${kangdev}`)
                buffer = await getBuffer(anu.url)
                jepribrs.sendMessage(from, buffer, image, { quoted: mek})
                break
                case 'katabijak':
			        if (!isRegistered) return reply( ind.noregis())
                    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://kangdev.herokuapp.com/api/quote/bijak?apikey=${kangdev}`, {method: 'get'})
					capt = `[KANGDEV BOT] \n\n ${anu.result.quotes}`
					jepribrs.sendMessage(from, capt, text, { quoted: mek })
					break
					case 'katajoker':
			        if (!isRegistered) return reply( ind.noregis())
                    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://kangdev.herokuapp.com/api/quote/joker?apikey=${kangdev}`, {method: 'get'})
					capt = `[KANGDEV BOT] \n\n ${anu.result.quotes}`
					jepribrs.sendMessage(from, capt, text, { quoted: mek })
					break
					case 'captionislam':
			        if (!isRegistered) return reply( ind.noregis())
                    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://kangdev.herokuapp.com/api/quote/islami?apikey=${kangdev}`, {method: 'get'})
					capt = `[KANGDEV BOT] \n\n ${anu.result}`
					jepribrs.sendMessage(from, capt, text, { quoted: mek })
					break
					case 'pantun':
			        if (!isRegistered) return reply( ind.noregis())
                    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://kangdev.herokuapp.com/api/pantun?apikey=${kangdev}`, {method: 'get'})
					capt = `[KANGDEV BOT] \n\n ${anu.result.pantun}`
					jepribrs.sendMessage(from, capt, text, { quoted: mek })
					break
					case 'dare':
			        if (!isRegistered) return reply( ind.noregis())
                    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://kangdev.herokuapp.com/api/dare?apikey=${kangdev}`, {method: 'get'})
					capt = `[KANGDEV BOT] \n\n ${anu.result.dare}`
					jepribrs.sendMessage(from, capt, text, { quoted: mek })
					break
					case 'truth':
			        if (!isRegistered) return reply( ind.noregis())
                    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://kangdev.herokuapp.com/api/trut?apikey=${kangdev}`, {method: 'get'})
					capt = `[KANGDEV BOT] \n\n ${anu.result.truth}`
					jepribrs.sendMessage(from, capt, text, { quoted: mek })
					break
					case 'truthaneh':
			        if (!isRegistered) return reply( ind.noregis())
                    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://kangdev.herokuapp.com/api/truth/aneh?apikey=${kangdev}`, {method: 'get'})
					capt = `[KANGDEV BOT] \n\n ${anu.result.truth}`
					jepribrs.sendMessage(from, capt, text, { quoted: mek })
					break
					case 'katadilan':
			        if (!isRegistered) return reply( ind.noregis())
                    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://kangdev.herokuapp.com/api/caption/dilan?apikey=${kangdev}`, {method: 'get'})
					capt = `[KANGDEV BOT] \n\n ${anu.dilan}`
					jepribrs.sendMessage(from, capt, text, { quoted: mek })
					break
					case 'katadoi':
			        if (!isRegistered) return reply( ind.noregis())
                    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://kangdev.herokuapp.com/api/caption/doi?apikey=${kangdev}`, {method: 'get'})
					capt = `[KANGDEV BOT] \n\n ${anu.result}`
					jepribrs.sendMessage(from, capt, text, { quoted: mek })
					break
					case 'katadoraemon':
			        if (!isRegistered) return reply( ind.noregis())
                    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://kangdev.herokuapp.com/api/caption/doraemon?apikey=${kangdev}`, {method: 'get'})
					capt = `[KANGDEV BOT] \n\n ${anu.result}`
					jepribrs.sendMessage(from, capt, text, { quoted: mek })
					break
					case 'katahits':
			        if (!isRegistered) return reply( ind.noregis())
                    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://kangdev.herokuapp.com/api/caption/hits?apikey=${kangdev}`, {method: 'get'})
					capt = `[KANGDEV BOT] \n\n ${anu.result}`
					jepribrs.sendMessage(from, capt, text, { quoted: mek })
					break
					case 'katahacker':
			        if (!isRegistered) return reply( ind.noregis())
                    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://kangdev.herokuapp.com/api/caption/hacker?apikey=${kangdev}`, {method: 'get'})
					capt = `[KANGDEV BOT] \n\n ${anu.result}`
					jepribrs.sendMessage(from, capt, text, { quoted: mek })
					break
					case 'caption':
			        if (!isRegistered) return reply( ind.noregis())
                    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://kangdev.herokuapp.com/api/caption?apikey=${kangdev}`, {method: 'get'})
					capt = `[KANGDEV BOT] \n\n ${anu.result}`
					jepribrs.sendMessage(from, capt, text, { quoted: mek })
					break
					//photooxy menu ~kangdev
					case 'cup2':
					case 'neon':
					case 'glow':
					case 'burn':
					case 'love':
					case 'under':
					case 'wolf':
					case 'water':
					case 'night':
					case 'fire':
					case 'harry':
					case 'horor':
                if (!isRegistered) return reply( ind.noregis())
                    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length == 0) return reply(`Contoh: \n ${prefix + command} Kangdev`)
                    reply('[🚴] Sabar Beb Sedang Proses...')
                    ct = body.slice(6)
				anu = await fetchJson(`https://kangdev.herokuapp.com/api/photooxy/${command}?text=${ct}&apikey=${kangdev}`)
				barus = await getBuffer(anu.url)
				jepribrs.sendMessage(from, barus, image, { quoted: mek, caption: 'Nih anjim hasilnya \n [KANGDEV BOT]' })
                    break
                    case 'cup':
                    case 'art':
                    case 'pot':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length == 0) return reply(`Contoh: \n ${prefix + command} Kangdev`)
				reply('[🚴] Sabar Beb Sedang Proses...')
				ct = body.slice(5)
				anu = await fetchJson(`https://kangdev.herokuapp.com/api/photooxy/${command}?text=${ct}&apikey=${kangdev}`)
				barus = await getBuffer(anu.url)
				jepribrs.sendMessage(from, barus, image, { quoted: mek, caption: 'Nih anjim hasilnya \n [KANGDEV BOT]' })
				break
				case 'summer':
                case 'wooden':
                case 'flower':
                case 'golden':
                case 'langit':
                case 'smoke':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length == 0) return reply(`Contoh: \n ${prefix + command} Kangdev`)
				reply('[🚴] Sabar Beb Sedang Proses...')
				ct = body.slice(7)
				anu = await fetchJson(`https://kangdev.herokuapp.com/api/photooxy/${command}?text=${ct}&apikey=${kangdev}`)
				barus = await getBuffer(anu.url)
				jepribrs.sendMessage(from, barus, image, { quoted: mek, caption: 'Nih anjim hasilnya \n [KANGDEV BOT]' })
				break
				case 'rainbow':
                case 'between':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length == 0) return reply(`Contoh: \n ${prefix + command} Kangdev`)
				reply('[🚴] Sabar Beb Sedang Proses...')
				ct = body.slice(8)
				anu = await fetchJson(`https://kangdev.herokuapp.com/api/photooxy/${command}?text=${ct}&apikey=${kangdev}`)
				barus = await getBuffer(anu.url)
				jepribrs.sendMessage(from, barus, image, { quoted: mek, caption: 'Nih anjim hasilnya \n [KANGDEV BOT]' })
				break
				case 'glitch':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length == 0) return reply(`Contoh: \n ${prefix + command} Jepri Barus`)
				reply('[🚴] Sabar Beb Sedang Proses...')
				ct = body.slice(8)
				jep1 = ct.split(" ")[0];
                jep2 = ct.split(" ")[1];
				anu = await fetchJson(`https://kangdev.herokuapp.com/api/photooxy/${command}?text=${jep1}&text2=${jep2}&apikey=${kangdev}`)
				barus = await getBuffer(anu.url)
				jepribrs.sendMessage(from, barus, image, { quoted: mek, caption: 'Nih anjim hasilnya \n [KANGDEV BOT]' })
				await limitAdd(sender)
				break
				case 'pubg':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length == 0) return reply(`Contoh: \n ${prefix + command} Jepri Barus`)
				reply('[🚴] Sabar Beb Sedang Proses...')
				ct = body.slice(6)
				jep1 = ct.split(" ")[0];
                jep2 = ct.split(" ")[1];
				anu = await fetchJson(`https://kangdev.herokuapp.com/api/photooxy/${command}?text=${jep1}&text2=${jep2}&apikey=${kangdev}`)
				barus = await getBuffer(anu.url)
				jepribrs.sendMessage(from, barus, image, { quoted: mek, caption: 'Nih anjim hasilnya \n [KANGDEV BOT]' })
				await limitAdd(sender)
				break
				case 'battlefield':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length == 0) return reply(`Contoh: \n ${prefix + command} Jepri Barus`)
				reply('[🚴] Sabar Beb Sedang Proses...')
				ct = body.slice(13)
				jep1 = ct.split(" ")[0];
                jep2 = ct.split(" ")[1];
				anu = await fetchJson(`https://kangdev.herokuapp.com/api/photooxy/${command}?text=${jep1}&text2=${jep2}&apikey=${kangdev}`)
				barus = await getBuffer(anu.url)
				jepribrs.sendMessage(from, barus, image, { quoted: mek, caption: 'Nih anjim hasilnya \n [KANGDEV BOT]' })
				break
				case 'google':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length == 0) return reply(`Contoh: \n ${prefix + command} Jepri|anak baik|gak bohong`)
				reply('[🚴] Sabar Beb Sedang Proses...')
				ct = body.slice(7)
				jep1 = ct.split("|")[0];
                jep2 = ct.split("|")[1];
                jep3 = ct.split("|")[2];
				anu = await fetchJson(`https://kangdev.herokuapp.com/api/photooxy/${command}?text=${jep1}&text2=${jep2}&text3=${jep3}&apikey=${kangdev}`)
				barus = await getBuffer(anu.url)
				jepribrs.sendMessage(from, barus, image, { quoted: mek, caption: 'Nih anjim hasilnya \n [KANGDEV BOT]' })
				break
				//photo maker ~kangdev of
                case 'nulis2':
                if (!isRegistered) return reply(ind.noregis())
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (args.length < 1) return reply(`Contoh: ${prefix}nulis2 jepri|mantan sayang`)
                reply('[🚴] Sabar Beb Sedang Proses...')
                ct = body.slice(7)
				jep1 = ct.split("|")[0];
                jep2 = ct.split("|")[1];
                asu = await getBuffer(`https://kangdev.herokuapp.com/api/nulis2?nama=${jep1}&kelas=12&text=${jep2}&apikey=${kangdev}`)
                jepribrs.sendMessage(from, asu, image, { quoted: mek, caption: 'Nih anjim hasilnya \n [KANGDEV BOT]' })
                break
                case 'nulis':
                case 'nulis3':
                case 'nulis4':
                if (!isRegistered) return reply(ind.noregis())
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (args.length == 0) return reply(`Contoh: \n ${prefix + command} Jepri Barus Ganteng`)
                kang_dev = body.slice(7)
                reply('[🚴] Sabar Beb Sedang Proses...')
                asu = await getBuffer(`https://kangdev.herokuapp.com/api/${command}?text=${kang_dev}&apikey=${kangdev}`)
                jepribrs.sendMessage(from, asu, image, { quoted: mek, caption: 'Nih anjim hasilnya \n [KANGDEV BOT]' })
                break
                case 'tahta':
                case 'tahta2':
                case 'tahta3':
                if (!isRegistered) return reply(ind.noregis())
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (args.length == 0) return reply(`Contoh: \n ${prefix + command} Jeprigans`)
                kang_dev = body.slice(7)
                reply('[🚴] Sabar Beb Sedang Proses...')
                asu = await getBuffer(`https://kangdev.herokuapp.com/api/${command}?text=${kang_dev}&apikey=${kangdev}`)
                jepribrs.sendMessage(from, asu, image, { quoted: mek, caption: 'Hirti Tihti Tai Ajg \n [KANGDEV BOT]' })
                break
                case 'logonaruto':
                if (!isRegistered) return reply(ind.noregis())
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (args.length == 0) return reply(`Contoh: \n ${prefix}logonaruto Jeprigans`)
                kang_dev = body.slice(12)
                reply('[🚴] Sabar Beb Sedang Proses...')
                asu = await getBuffer(`https://kangdev.herokuapp.com/api/text/naruto?text=${kang_dev}&apikey=${kangdev}`)
                jepribrs.sendMessage(from, asu, image, { quoted: mek, caption: '[KANGDEV BOT]' })
                break
                case 'berkode':
                if (!isRegistered) return reply(ind.noregis())
                if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (args.length == 0) return reply(`Contoh: \n ${prefix}berkode Jeprigans`)
                kang_dev = body.slice(8)
                reply('[🚴] Sabar Beb Sedang Proses...')
                asu = await getBuffer(`https://kangdev.herokuapp.com/api/berkode?text=${kang_dev}&apikey=${kangdev}`)
                jepribrs.sendMessage(from, asu, image, { quoted: mek, caption: '[KANGDEV BOT]' })
                break
                //Gabut Menu gaes ~kangdev
                case 'caklontong':
                    if (!isRegistered) return reply(ind.noregis())
                    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://kangdev.herokuapp.com/api/caklontong?apikey=${kangdev}`, {method: 'get'})
					caklontong = `${anu.result.hasil.soal}`
					setTimeout( () => {
					jepribrs.sendMessage(from, 'Jawaban : '+anu.result.hasil.jawaban+ '\n\nPenjelasan: '+ anu.result.hasil.desc+' ', text, {quoted: mek}) // Fixs Kangdev
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					jepribrs.sendMessage(from, '_10 Detik lagi…_', text)
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					jepribrs.sendMessage(from, '_20 Detik lagi_…', text)
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					jepribrs.sendMessage(from, '_30 Detik lagi_…', text)
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					jepribrs.sendMessage(from, caklontong, text, {quoted: mek})
					}, 0) // 1000 = 1s,
					break 
					case 'family100':
					case 'familly100':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://kangdev.herokuapp.com/api/family100?apikey=${kangdev}`, {method: 'get'})
					setTimeout( () => {
					jepribrs.sendMessage(from, 'Jawaban : '+anu.result.hasil.jawaban, text, {quoted: mek})
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					jepribrs.sendMessage(from, '_10 Detik lagi..', text)
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					jepribrs.sendMessage(from, '_20 Detik lagi...', text)
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					jepribrs.sendMessage(from, '_30 Detik lagi...', text)
					}, 1000) // 1000 = 1s,
					setTimeout( () => {
					jepribrs.sendMessage(from, anu.result.hasil.soal, text, { quoted: mek })
					}, 0) // 1000 = 1s,
					break
					case 'tebakgambar':
				    if (!isRegistered) return reply(ind.noregis())
				    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://kangdev.herokuapp.com/api/tebakgambar?apikey=${kangdev}`, {method: 'get'})
					ngebuff = await getBuffer(anu.result.hasil.soalImg)
					tebak = `Jawaban : ${anu.result.hasil.jawaban}`
					setTimeout( () => {
					jepribrs.sendMessage(from, tebak, text, {quoted: mek})
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					jepribrs.sendMessage(from, '_10 Detik lagi..._', text)
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					jepribrs.sendMessage(from, '_20 Detik lagi..._', text)
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					jepribrs.sendMessage(from, '_30 Detik lagi..._', text)
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					jepribrs.sendMessage(from, ngebuff, image, { caption: '_Tebak Ngab!!! \n\n Gak bisa jawab jadi pacar Ku :v', quoted: mek })
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break
                    case 'tebakbendera':
                    if (!isRegistered) return reply(ind.noregis())
				    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                    anu = await fetchJson(`https://kangdev.herokuapp.com/api/tebak/bendera?apikey=${kangdev}`)
                    anu1 = `➻ SOAL : INI BENDERA APA?? ${anu.result.result.bendera} TEBAK!! WAKTU 60 DETIK`
                    anu2 = `➻ JAWABAN : ${anu.result.result.jawaban} SELAMAT YG TELAH MENJAWAB BENAR`
                    setTimeout( () => {
                    jepribrs.sendMessage(from, anu1, text, {quoted: mek})
                    }, 1)
                    setTimeout( () => {
                    jepribrs.sendMessage(from, '_50 Detik lagi..._', text)
                    }, 10000)                                                                                                                                   
                    setTimeout( () => {
                    jepribrs.sendMessage(from, '_40 Detik lagi..._', text)
                    }, 20000)    
                    setTimeout( () => {
                    jepribrs.sendMessage(from, '_30 Detik lagi..._', text)
                    }, 30000)    
                    setTimeout( () => {
                    jepribrs.sendMessage(from, '_20 Detik lagi..._', text)
                    }, 40000)                                       
                    setTimeout( () => {
                    jepribrs.sendMessage(from, '_10 Detik lagi..._', text)
                    }, 50000)                                                                                                                                                     
                    setTimeout( () => {
                    jepribrs.sendMessage(from, anu2, text,{quoted: mek})                   
                    }, 60000)                                                                          
                    break
					case 'slot2':
					if (!isRegistered) return reply(ind.noregis())
				    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                    result = await fetchJson(`https://kangdev.herokuapp.com/api/slot?apikey=${kangdev}`)
                        txt = `*🎰Slot didapatkan🎰* \n\n${result.slot}\n`
                        txt += `\n🔖Hasil : ${result.hasil}\n`
                        txt += `🕹️Score : ${result.score}\n`
                     reply(txt)
                     break
                     case 'slot':
                     if (!isRegistered) return reply(ind.noregis())
				    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
            const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
            jepribrs.sendMessage(from, `[  🎰 | SLOTS ]\n-----------------\n🍋 : 🍌 : 🍍\n${somtoy}<=====\n🍋 : 🍌 : 🍍\n[  🎰 | SLOTS ]\n\nKeterangan : Jika anda Mendapatkan 3Buah Sama Berarti Kamu Win\n\nContoh : 🍌 : 🍌 : 🍌<=====`, text, { quoted: mek })
            break
                  //Sertifikat Menu ~kangdev
                  case 'tolol':
                if (!isRegistered) return reply(ind.noregis())
				    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (args.length == 0) return reply(`Contoh: \n ${prefix}tolol mantan`)
                kang_dev = body.slice(7)
                reply('[🚴] Sabar Beb Sedang Proses...')
                asu = await getBuffer(`https://kangdev.herokuapp.com/api/serti/tolol?text=${kang_dev}&apikey=${kangdev}`)
                jepribrs.sendMessage(from, asu, image, { quoted: mek, caption: 'Sangat Tolol \n [KANGDEV BOT]' })
                break
                case 'epep':
                if (!isRegistered) return reply(ind.noregis())
				    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (args.length == 0) return reply(`Contoh: \n ${prefix}epep Jepri`)
                kang_dev = body.slice(6)
                reply('[🚴] Sabar Beb Sedang Proses...')
                asu = await getBuffer(`https://kangdev.herokuapp.com/api/serti/ff?text=${kang_dev}&apikey=${kangdev}`)
                jepribrs.sendMessage(from, asu, image, { quoted: mek, caption: '[KANGDEV BOT]' })
                break
                case 'epep2':
                if (!isRegistered) return reply(ind.noregis())
				    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (args.length == 0) return reply(`Contoh: \n ${prefix}epep2 Jepri`)
                kang_dev = body.slice(7)
                reply('[🚴] Sabar Beb Sedang Proses...')
                asu = await getBuffer(`https://kangdev.herokuapp.com/api/serti/ff2?text=${kang_dev}&apikey=${kangdev}`)
                jepribrs.sendMessage(from, asu, image, { quoted: mek, caption: '[KANGDEV BOT]' })
                break
                case 'epep3':
                if (!isRegistered) return reply(ind.noregis())
				    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (args.length == 0) return reply(`Contoh: \n ${prefix}epep3 Jepri`)
                kang_dev = body.slice(7)
                reply('[🚴] Sabar Beb Sedang Proses...')
                asu = await getBuffer(`https://kangdev.herokuapp.com/api/serti/ff3?text=${kang_dev}&apikey=${kangdev}`)
                jepribrs.sendMessage(from, asu, image, { quoted: mek, caption: '[KANGDEV BOT]' })
                break
                case 'ml':
                if (!isRegistered) return reply(ind.noregis())
				    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (args.length == 0) return reply(`Contoh: \n ${prefix}ml Jepri`)
                kang_dev = body.slice(5)
                reply('[🚴] Sabar Beb Sedang Proses...')
                asu = await getBuffer(`https://kangdev.herokuapp.com/api/serti/ml?text=${kang_dev}&apikey=${kangdev}`)
                jepribrs.sendMessage(from, asu, image, { quoted: mek, caption: '[KANGDEV BOT]' })
                break
                case 'ml2':
                if (!isRegistered) return reply(ind.noregis())
				    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (args.length == 0) return reply(`Contoh: \n ${prefix}ml2 Jepri`)
                kang_dev = body.slice(5)
                reply('[🚴] Sabar Beb Sedang Proses...')
                asu = await getBuffer(`https://kangdev.herokuapp.com/api/serti/ml2?text=${kang_dev}&apikey=${kangdev}`)
                jepribrs.sendMessage(from, asu, image, { quoted: mek, caption: '[KANGDEV BOT]' })
                break
                case 'ml3':
                if (!isRegistered) return reply(ind.noregis())
                if (args.length == 0) return reply(`Contoh: \n ${prefix}ml3 Jepri`)
                kang_dev = body.slice(5)
                reply('[🚴] Sabar Beb Sedang Proses...')
                asu = await getBuffer(`https://kangdev.herokuapp.com/api/serti/ml3?text=${kang_dev}&apikey=${kangdev}`)
                jepribrs.sendMessage(from, asu, image, { quoted: mek, caption: '[KANGDEV BOT]' })
                break
                case 'pubg1':
                if (!isRegistered) return reply(ind.noregis())
                if (args.length == 0) return reply(`Contoh: \n ${prefix}pubg1 Jepri`)
                kang_dev = body.slice(7)
                reply('[🚴] Sabar Beb Sedang Proses...')
                asu = await getBuffer(`https://kangdev.herokuapp.com/api/serti/pubg?text=${kang_dev}&apikey=${kangdev}`)
                jepribrs.sendMessage(from, asu, image, { quoted: mek, caption: '[KANGDEV BOT]' })
                break
                case 'pubg2':
                if (!isRegistered) return reply(ind.noregis())
                if (args.length == 0) return reply(`Contoh: \n ${prefix}pubg2 Jepri`)
                kang_dev = body.slice(7)
                reply('[🚴] Sabar Beb Sedang Proses...')
                asu = await getBuffer(`https://kangdev.herokuapp.com/api/serti/pubg2?text=${kang_dev}&apikey=${kangdev}`)
                jepribrs.sendMessage(from, asu, image, { quoted: mek, caption: '[KANGDEV BOT]' })
                break
                case 'pubg3':
                if (!isRegistered) return reply(ind.noregis())
                if (args.length == 0) return reply(`Contoh: \n ${prefix}pubg3 Jepri`)
                kang_dev = body.slice(7)
                reply('[🚴] Sabar Beb Sedang Proses...')
                asu = await getBuffer(`https://kangdev.herokuapp.com/api/serti/pubg3?text=${kang_dev}&apikey=${kangdev}`)
                jepribrs.sendMessage(from, asu, image, { quoted: mek, caption: '[KANGDEV BOT]' })
                break
                case 'anakharam':
                if (!isRegistered) return reply(ind.noregis())
                if (args.length == 0) return reply(`Contoh: \n ${prefix}anakharam Mantan`)
                kang_dev = body.slice(11)
                reply('[🚴] Sabar Beb Sedang Proses...')
                asu = await getBuffer(`https://kangdev.herokuapp.com/api/serti/haram?text=${kang_dev}&apikey=${kangdev}`)
                jepribrs.sendMessage(from, asu, image, { quoted: mek, caption: 'Astafirulloh Anak Haram \n [KANGDEV BOT]' })
                break
                case 'babu':
                case 'pacar':
                case 'surga':
                if (!isRegistered) return reply(ind.noregis())
                if (args.length == 0) return reply(`Contoh: \n ${prefix + command} Mantan`)
                kang_dev = body.slice(6)
                reply('[🚴] Sabar Beb Sedang Proses...')
                asu = await getBuffer(`https://kangdev.herokuapp.com/api/serti/${command}?text=${kang_dev}&apikey=${kangdev}`)
                jepribrs.sendMessage(from, asu, image, { quoted: mek, caption: '[KANGDEV BOT]' })
                break
                case 'sadboy':
                if (!isRegistered) return reply(ind.noregis())
                if (args.length == 0) return reply(`Contoh: \n ${prefix + command} Mantan`)
                kang_dev = body.slice(7)
                reply('[🚴] Sabar Beb Sedang Proses...')
                asu = await getBuffer(`https://kangdev.herokuapp.com/api/serti/${command}?text=${kang_dev}&apikey=${kangdev}`)
                jepribrs.sendMessage(from, asu, image, { quoted: mek, caption: '[KANGDEV BOT]' })
                break
                case 'gay':
                if (!isRegistered) return reply(ind.noregis())
                if (args.length == 0) return reply(`Contoh: \n ${prefix + command} Mantan`)
                kang_dev = body.slice(5)
                reply('[🚴] Sabar Beb Sedang Proses...')
                asu = await getBuffer(`https://kangdev.herokuapp.com/api/serti/${command}?text=${kang_dev}&apikey=${kangdev}`)
                jepribrs.sendMessage(from, asu, image, { quoted: mek, caption: '[KANGDEV BOT]' })
                break
                //TEXT PRO BANG~KANGDEV
                case 'blueneon':
					case 'party':
					case 'glass':
					case 'blackpink':
					case 'matrix':
					case 'dropwater':
					case 'pasir':
					case 'pasir2':
					case 'pasir3':
					case 'pasir4':
					case 'text3d':
					case 'matrix':
					case 'light':
					case 'cloud':
					case 'gradient':
					case '1997':
					case 'minion':
					case 'helloween':
					case 'grafity':
                if (!isRegistered) return reply( ind.noregis())
                    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length == 0) return reply(`Contoh: \n ${prefix + command} Jepri`)
                    reply(ind.wait())
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`https://kangdev.herokuapp.com/api/textpro/${command}?text=${ini_txt}&apikey=${kangdev}`)
                    jepribrs.sendMessage(from, ini_buffer, image, { quoted: mek, caption: 'Nih anjim hasilnya _-JEPRI BARUS_-' })
                    break
                    case 'bakarnama':
                if (!isRegistered) return reply( ind.noregis())
                    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length == 0) return reply(`Contoh: \n ${prefix}bakarnama mantan`)
                    reply(ind.wait())
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`https://kangdev.herokuapp.com/api/bakarnama?text=${ini_txt}&apikey=${kangdev}`)
                    jepribrs.sendMessage(from, ini_buffer, image, { quoted: mek, caption: 'Nih anjim hasilnya _-JEPRI BARUS_-' })
                    break
                    case 'goldplaybutton':
                    case 'goldplaybuton':
                if (!isRegistered) return reply( ind.noregis())
                    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length == 0) return reply(`Contoh: \n ${prefix}goldplaybutton Jepri Barus`)
                    reply(ind.wait())
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`https://kangdev.herokuapp.com/api/textpro/gold?text=${ini_txt}&apikey=${kangdev}`)
                    jepribrs.sendMessage(from, ini_buffer, image, { quoted: mek, caption: 'Nih anjim hasilnya _-JEPRI BARUS_-' })
                    break
                    case 'silverplaybuton':
                    case 'silverplaybutton':
                if (!isRegistered) return reply( ind.noregis())
                    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length == 0) return reply(`Contoh: \n ${prefix} silverplaybutton Jepri Barus`)
                    reply(ind.wait())
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`https://kangdev.herokuapp.com/api/textpro/silver?text=${ini_txt}&apikey=${kangdev}`)
                    jepribrs.sendMessage(from, ini_buffer, image, { quoted: mek, caption: 'Nih anjim hasilnya _-JEPRI BARUS_-' })
                    break
					case 'covid19':
			        if (!isRegistered) return reply( ind.noregis())
                    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://kangdev.herokuapp.com/api/covid/dunia?apikey=${kangdev}`, {method: 'get'})
					capt = `Positif: ${anu.kasus}\n Sembuh: ${anu.sembuh}\n Meninggal: ${anu.meninggal}\n Update: ${anu.update}`
					jepribrs.sendMessage(from, capt, text, { quoted: mek })
					break
					//INI SFW
					case 'smile':
					case 'bully':
					case 'cuddle':
					case 'cry':
					case 'hug':
					case 'lick':
					case 'pat':
					case 'smug':
					case 'bonk':
					case 'yeet':
					case 'slap':
					case 'dance':
                if (!isRegistered) return reply(ind.noregis())
				    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                ranp = getRandom('.gif')
                rano = getRandom('.webp')
                anu = await fetchJson(`https://kangdev.herokuapp.com/api/sfw/${command}?apikey=${kangdev}`, { method: 'get' })
                reply(ind.wait())
                if (anu.error) return reply(anu.error)
                exec(`wget ${anu.result.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                    fs.unlinkSync(ranp)
                    if (err) return reply(ind.stikga())
                    buffer = fs.readFileSync(rano)
                    jepribrs.sendMessage(from, buffer, sticker, { quoted: mek })
                    fs.unlinkSync(rano)
                })
                await limitAdd(sender)
                break
                //Kang Wibu
                case 'waifu':
                case 'nekonime':
                case 'shinobu':
                case 'megumin':
				if (!isRegistered) return reply(ind.noregis())
				    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply('[🚴] Sabar Beb Sedang Proses...')
                anu = await fetchJson(`https://kangdev.herokuapp.com/api/${command}?apikey=${kangdev}`)
                buffer = await getBuffer(anu.result.url)
                jepribrs.sendMessage(from, buffer, image, { quoted: mek, caption: 'Ehem Anak Wibu \n\n [KANGDEV BOT]' })
                break
                case 'loli':
                case 'akira':
                case 'zerotwo':
                case 'miku':
                case 'naruto':
                case 'minato':
                case 'hinata':
                case 'sasuke':
                case 'chika':
                case 'kaneki':
                case 'touka':
                case 'rize':
                case 'onichan':
                case 'squidward':
				if (!isRegistered) return reply(ind.noregis())
				    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isNsfw) return reply(ind.nsfwoff())
				reply('[🚴] Sabar Beb Sedang Proses...')
                anu = await fetchJson(`https://kangdev.herokuapp.com/api/wibu/${command}?apikey=${kangdev}`)
                buffer = await getBuffer(anu.result)
                jepribrs.sendMessage(from, buffer, image, { quoted: mek, caption: 'Ehem Anak Wibu \n\n [KANGDEV BOT]' })
                break
                //Ini Stiker
                case 'sticker':
					case 'stiker':
					case 's':
					case 'stc':
					 if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await jepribrs.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								jepribrs.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await jepribrs.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(ind.wait())
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker`)
							})
							.on('end', function () {
								console.log('Finish')
								jepribrs.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await jepribrs.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						reply(ind.wait())
						keyrmbg = 'pJ6xKSMPCT8QMcvBzGFY'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg.result, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return reply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								if (err) return reply(mess.error.stick)
								jepribrs.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})
							})
						})
					/*} else if ((isMedia || isQuotedImage) && colors.includes(args[0])) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await jepribrs.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.on('start', function (cmd) {
								console.log('Started :', cmd)
							})
							.on('error', function (err) {
								fs.unlinkSync(media)
								console.log('Error :', err)
							})
							.on('end', function () {
								console.log('Finish')
								fs.unlinkSync(media)
								jepribrs.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=${args[0]}@0.0, split [a][b]; [a] palettegen=reserve_transparent=off; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)*/
					} else {
						reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
					}
					break
					case 'toimg':
				case 'stickertoimg':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await jepribrs.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ Gagal, pada saat mengkonversi sticker ke gambar ❌')
						buffer = fs.readFileSync(ran)
						jepribrs.sendMessage(from, buffer, image, {quoted: mek, caption: '>//<'})
						fs.unlinkSync(ran)
					})
					break
					case 'stikertext':
				if (args.length < 1) return reply(`_Teksnya Mana Sayang_\nContoh ${prefix}stikertext Jepri Barus`)
				attp2 = await getBuffer(`https://kangdev.herokuapp.com/api/attp?text=${body.slice(11)}&apikey=${kangdev}`)
				jepribrs.sendMessage(from, attp2, sticker, {quoted: mek})
				break
				case 'ttp':
				if (args.length < 1) return reply(`_Teksnya Mana Sayang_\nContoh ${prefix}ttp Jepri Barus`)
				attp2 = await getBuffer(`https://kangdev.herokuapp.com/api/ttp?text=${body.slice(5)}&apikey=${kangdev}`)
				jepribrs.sendMessage(from, attp2, image, {quoted: mek})
				break
				case 'stikerwa':
				if (!isRegistered) return reply(ind.noregis())
                if (args.length < 1) return reply(`_Teksnya Mana Sayang_\nContoh ${prefix}stikerwa pentol`)
                ranp = getRandom('.gif')
                rano = getRandom('.webp')
                anu = await fetchJson(`https://kangdev.herokuapp.com/api/stiker/wa?search=${body.slice(9)}&apikey=${kangdev}`, { method: 'get' })
                reply(ind.wait())
                if (anu.error) return reply(anu.error)
                exec(`wget ${anu.result.thumb} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                    fs.unlinkSync(ranp)
                    if (err) return reply(ind.stikga())
                    buffer = fs.readFileSync(rano)
                    jepribrs.sendMessage(from, buffer, sticker, { quoted: mek })
                    fs.unlinkSync(rano)
                })
                await limitAdd(sender)
                break
                case 'mutual':
                
				if (!isRegistered) return reply(ind.noregis())
				    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isGroup) return  reply( 'Command ini tidak bisa digunakan di dalam grup!')
				anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
				await reply('Find for a partner...')
				await reply(`wa.me/${anug}`)
				await reply( `Partner found: 🙉\n ${prefix}next — find a new partner`)
				await limitAdd(sender)
				break
		        case 'next':
                
				if (!isRegistered) return reply(ind.noregis())
				    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isGroup) return  reply( 'Command ini tidak bisa digunakan di dalam grup!')
				anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
				await reply('Find for a partner...')
				await reply(`wa.me/${anug}`)
				await reply( `Partner found: 🙉\n ${prefix}next — find a new partner`)
				await limitAdd(sender)
				break
				//Grup MENU
				case 'bukatime':
		case 'opentime':
		        if (!isGroupAdmins) return reply(ind.admin())
                if (!isGroup) return reply(ind.groupo())
                if (!isBotGroupAdmins) return reply(ind.badmin())
              jepribrs.updatePresence(from, Presence.composing) 
              if (args[1]=="detik") {var timer = args[0]+"000"
				} else if (args[1]=="menit") {var timer = args[0]+"0000"
				} else if (args[1]=="jam") {var timer = args[0]+"00000"
				} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
				setTimeout( () => {
					var nomor = mek.participant
					const open = {
					text: `*ᴛᴇᴘᴀᴛ ᴡᴀᴋᴛᴜ* ɢʀᴜᴘ ᴅɪʙᴜᴋᴀ ᴏʟᴇʜ @${nomor.split("@s.whatsapp.net")[0]}\nꜱᴇᴋᴀʀᴀɴɢ *ᴍᴇᴍʙᴇʀ* ᴅᴀᴘᴀᴛ ᴍᴇɴɢɪʀɪᴍ ᴘᴇꜱᴀɴ`,
					contextInfo: { mentionedJid: [nomor] }
					}
					jepribrs.groupSettingChange (from, GroupSettingChange.messageSend, false);
					reply(open)
				}, timer)
				break
				case 'tutuptime':
              jepribrs.updatePresence(from, Presence.composing) 
              if (!isGroupAdmins) return reply(ind.admin())
                if (!isGroup) return reply(ind.groupo())
                if (!isBotGroupAdmins) return reply(ind.badmin())
              if (args[1]=="detik") {var timer = args[0]+"000"
				} else if (args[1]=="menit") {var timer = args[0]+"0000"
				} else if (args[1]=="jam") {var timer = args[0]+"00000"
				} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
				setTimeout( () => {
					var nomor = mek.participant
					const close = {
					text: `Grup ditutup oleh @${nomor.split("@s.whatsapp.net")[0]}\nsekarang *hanya admin* yang dapat mengirim pesan`,
					contextInfo: { mentionedJid: [nomor] }
					}
					jepribrs.groupSettingChange (from, GroupSettingChange.messageSend, true);
					reply(close)
				}, timer)
				break
				case 'grup':
		        case 'group':
		case 'gc':
		case 'semvak':
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (!isBotGroupAdmins) return reply(ind.badmin())
                if (args[0] === 'buka') {
				reply(`*BERHASIL MEMBUKA GROUP*`)
                jepribrs.groupSettingChange(from, GroupSettingChange.messageSend, false)
                } else if (args[0] === 'tutup') {
                reply(`*BERHASIL MENUTUP GROUP*`)
				jepribrs.groupSettingChange(from, GroupSettingChange.messageSend, true)
                }
                break
                case 'simih':
				if (!isGroup) return reply(ind.groupo())
				if (!isGroupAdmins) return reply(ind.admin())
				if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
				if (Number(args[0]) === 1) {
				if (isSimi) return reply('*Fitur simi sudah aktif sebelum nya*')
				samih.push(from)
				fs.writeFileSync('./database/bot/simi.json', JSON.stringify(samih))
				reply('Sukses mengaktifkan mode simi di group ini ✔️')
				} else if (Number(args[0]) === 0) {
				samih.splice(from, 1)
				fs.writeFileSync('./database/bot/simi.json', JSON.stringify(samih))
				reply('Sukes menonaktifkan mode simi di group ini ✔️')
				} else {
				reply(ind.satukos())
				}
				break
				case 'nsfw':
		if (!isGroup) return reply(ind.groupo())
		if (!isGroupAdmins) return reply(ind.admin())
				if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan ')
				if (Number(args[0]) === 1) {
				nsfw.push(from)
				fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
				reply('Sukes mengaktifkan mode nsfw di group ini ✔️')
				} else if (Number(args[0]) === 0) {
				nsfw.splice(from, 1)
				fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
				reply('Sukes menonaktifkan mode nsfw di group ini ✔️')
				} else {
				reply(ind.satukos())
				}
				break
				case 'leveling':
				if (!isGroup) return reply(ind.groupo())
				if (!isGroupAdmins) return reply(ind.admin())
				if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
				if (args[0] === '1') {
				if (isLevelingOn) return reply('*Fitur level sudah aktif sebelum nya*')
				_leveling.push(from)
				fs.writeFileSync('./database/kelompok/leveling.json', JSON.stringify(_leveling))
				reply(ind.lvlon())
				} else if (args[0] === '0') {
				_leveling.splice(from, 1)
				fs.writeFileSync('./database/kelompok/leveling.json', JSON.stringify(_leveling))
				reply(ind.lvloff())
				} else {
				reply(ind.satukos())
				}
				break
				case 'welcome':
				if (!isGroup) return reply(ind.groupo())
				if (!isGroupAdmins) return reply(ind.admin())
				if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
				if (Number(args[0]) === 1) {
				if (isWelkom) return reply('*Fitur welcome sudah aktif sebelum nya')
				welkom.push(from)
				fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
				reply('❬ SUCCSESS ❭ mengaktifkan fitur welcome di group ini')
				} else if (Number(args[0]) === 0) {
				welkom.splice(from, 1)
				fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
				reply('❬ SUCCSESS ❭ menonaktifkan fitur welcome di group ini')
				} else {
				reply(ind.satukos())
				}
				break
                case 'antilink':
                if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				if (args.length < 1) return reply('Ketik 1 untuk mengaktifkan')
				if (Number(args[0]) === 1) {
				if (isAntilink) return reply('Anti link group sudah aktif')
				antilink.push(from)
				fs.writeFileSync('./database/kelompok/antilink.json', JSON.stringify(antilink))
				reply('Sukses mengaktifkan anti link group di group ini ✔️')
				jepribrs.sendMessage(from,`Perhatian kepada seluruh member anti link group aktif apabila anda mengirim link group anda akan di kick dari group`, text)
				} else if (Number(args[0]) === 0) {
				if (!isAntilink) return reply('Mode anti link group sudah disable')
				antilink.splice(from, 1)
				fs.writeFileSync('./database/kelompok/antilink.json', JSON.stringify(antilink))
				reply('Sukes menonaktifkan anti link group di group ini ✔️')
				} else {
				reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
				}
				break
				case 'antitoxic':
                    if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntiToxic) return reply('anti toxic sudah aktif')
						antitoxic.push(from)
						fs.writeFileSync('./src/antitoxic.json', JSON.stringify(antitoxic))
						reply('Sukses mengaktifkan anti toxic di group ini ✔️')
						jepribrs.sendMessage(from,`Perhatian kepada seluruh member berhubung sebentar lagi bulan ramadhan,anti toxic/berkata kasar telah di aktifkan apabila anda berkata kasar anda akan di kick dari group *Kangdev Bot*`, text)
					} else if (Number(args[0]) === 0) {
						antitoxic.splice(from, 1)
						fs.writeFileSync('./src/antitoxic.json', JSON.stringify(antitoxic))
						reply('Sukes menonaktifkan anti toxic di group ini ✔️')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break
					case 'hapustoxic':
					if (!isGroupAdmins) return reply(ind.admin())
                    let dbw = body.slice(12)
                    bad.splice(dbw)
                    fs.writeFileSync('./database/kelompok/bad.json', JSON.stringify(bad))
                    reply('Success Menghapus Toxic [Kangdev Bot]')
                    break 
                    case 'addtoxic':
                    if (!isGroupAdmins) return reply(ind.admin())
                    if (args.length < 1) return reply( `Kirim perintah contoh : \n ${prefix}addtoxic anjing`)
                    const bw = body.slice(10)
                    bad.push(bw)
                    fs.writeFileSync('./database/kelompok/bad.json', JSON.stringify(bad))
                    reply('Success Menambahkan Toxic [Kangdev Bot]')
                    break
                    case 'level':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (!isLevelingOn) return reply(ind.lvlnoon())
                if (!isGroup) return reply(ind.groupo())
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                if (userLevel === undefined && userXp === undefined) return reply(ind.lvlnul())
                const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
                resul = `◪ LEVEL \n  ├─ ❏ Name : ${pushname}\n  ├─ ❏ Nomor : ${sender.split("@")[0]}\n  ├─ ❏  User XP : ${userXp}/${requiredXp}\n  └─ ❏ User Level : ${userLevel}\n└─ ❏ Pangkat : ${role}`
                jepribrs.sendMessage(from, resul, text, { quoted: mek})
                .catch(async (err) => {
                console.error(err)
                await reply(`Error!\n${err}`)
                })
                break
                case 'linkgc':
                if (!isGroupAdmins) return reply(ind.admin())
				if (!isGroup) return reply(ind.groupo())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isBotGroupAdmins) return reply(ind.badmin())
				linkgc = await jepribrs.groupInviteCode (from)
				yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				jepribrs.sendMessage(from, yeh, text, {quoted: mek})
				await limitAdd(sender)
				break
				case 'add':
	            if (!isGroupAdmins) return reply(ind.admin())
                if (!isGroup) return reply(ind.groupo())
                if (!isBotGroupAdmins) return reply(ind.badmin())
                if (args.length < 1) return reply('Yang mau di add jin ya?')
                if (args[0].startsWith('08')) return reply('Gunakan kode negara kak')
                try {
                num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
                jepribrs.groupAdd(from, [num])
                } catch (e) {
                console.log('Error :', e)
                reply('Gagal menambahkan target, mungkin karena di private')
                }
                break
                case 'headshot':
		        if (!isGroupAdmins) return reply(ind.admin())
                if (!isGroup) return reply(ind.groupo())
                if (!isBotGroupAdmins) return reply(ind.badmin())
                if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag Target Yang Ingin Di Headshot Palanya!')
                mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                if (mentioned.length > 1) {
                teks = ''
                for (let _ of mentioned) {
                teks += `*Bismillah Headshot Jep:\n`
                teks += `@_.split('@')[0]`
                }
                mentions(teks, mentioned, true)
                jepribrs.groupRemove(from, mentioned)
                } else {
                mentions(`*Sukses meng headshot palanya @${mentioned[0].split('@')[0]} 💃`, mentioned, true)
                jepribrs.groupRemove(from, mentioned)
                }
                break
                case 'promote':
			    if (!isGroupAdmins) return reply(ind.admin())
                if (!isGroup) return reply(ind.groupo())
                if (!isBotGroupAdmins) return reply(ind.badmin())
                if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('*Tag target yang ingin di jadikan admin group!')
                mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                if (mentioned.length > 1) {
                teks = ''
                for (let _ of mentioned) {
                teks += `*Horee Anda Sekarang Menjadi Admin Grup:\n`
                teks += `@_.split('@')[0]`
                }
                mentions(teks, mentioned, true)
                jepribrs.groupMakeAdmin(from, mentioned)
                } else {
                mentions(`*Selamat* 🥳 @${mentioned[0].split('@')[0]} *Anda naik menjadi admin group* 🎉`, mentioned, true)
                jepribrs.groupMakeAdmin(from, mentioned)
                }
                break
                case 'demote':
                if (!isGroupAdmins) return reply(ind.admin())
                if (!isGroup) return reply(ind.groupo())
                if (!isBotGroupAdmins) return reply(ind.badmin())
                if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('*Tag target yang ingin di turunkan admin group!*')
                mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                if (mentioned.length > 1) {
                teks = ''
                for (let _ of mentioned) {
                teks += `*Perintah diterima, menurunkan jadi admin group* :\n`
                teks += `@_.split('@')[0]`
                }
                mentions(teks, mentioned, true)
                jepribrs.groupDemoteAdmin(from, mentioned)
                } else {
                mentions(`*Perintah diterima, menurunkan* @${mentioned[0].split('@')[0]} *jadi admin group*`, mentioned, true)
                jepribrs.groupDemoteAdmin(from, mentioned)
                }
                break
                case 'setname':
		        if (!isGroup) return reply(ind.groupo())
				if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
				jepribrs.groupUpdateSubject(from, `${body.slice(9)}`)
				jepribrs.sendMessage(from, 'Succes, Ganti Nama Grup', text, {quoted: mek})
				break
                case 'setdesc':
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (!isBotGroupAdmins) return reply(ind.badmin())
                jepribrs.groupUpdateDescription(from, `${body.slice(9)}`)
                jepribrs.sendMessage(from, 'Succes, Ganti Deskripsi Grup', text, {quoted: mek})
                break
                case 'kick':
		        if (!isJepri) return reply(ind.ownerb())
                if (!isGroup) return reply(ind.groupo())
                if (!isBotGroupAdmins) return reply(ind.badmin())
                if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 ??𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
                mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                if (mentioned.length > 1) {
                teks = ''
                for (let _ of mentioned) {
                teks += `*Bismillah Headshot Jep:\n`
                teks += `@_.split('@')[0]`
                }
                mentions(teks, mentioned, true)
                jepribrs.groupRemove(from, mentioned)
                } else {
                mentions(`*Sukses meng headshot palanya @${mentioned[0].split('@')[0]} 💃`, mentioned, true)
                jepribrs.groupRemove(from, mentioned)
                }
                break
                case 'listadmin':
                if (!isGroup) return reply(ind.groupo())
                teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
                no = 0
                for (let admon of groupAdmins) {
                no += 1
                teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
                }
                mentions(teks, groupAdmins, true)
                break
                //Owner Mode
                    case 'setlimit':
		            case 'addlimit':
					if (args.length < 1) return
				if (!isJepri) return reply(ind.ownerb())
					limitawal = args[0]
					reply(`*Limit berhasil di ubah menjadi* : ${limitawal}`)
					break 
					case 'gantiapikey':
					if (args.length < 1) return reply('#gantiapikey apikey lu')
				if (!isJepri) return reply(ind.ownerb())
					kangdev = args[0]
					reply(`apikey berhasil di ubah menjadi : *${kangdev}*`)
					break 
					case 'clearall':
					if (!isJepri) return reply(ind.ownerb())
					anu = await jepribrs.chats.all()
					jepribrs.setMaxListeners(25)
					for (let _ of anu) {
						jepribrs.deleteChat(_.jid)
					}
					reply(`sukses hapus chat`)
					break
					case 'tagall':
					if (!isRegistered) return reply(ind.noregis())
				    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isGroup) return reply(ind.groupo())
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += ` @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
					case 'setprefix':
					if (!isJepri) return reply(ind.ownerb())
                if (args.length < 1) return
                prefix = args[0]
                reply(`❮SUKSES❯ Mengubah prefix menjadi ${prefix}`)
                break
                case 'setppbot':
					if (!isJepri) return reply(ind.ownerb())
					jepribrs.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await jepribrs.downloadAndSaveMediaMessage(enmedia)
					await jepribrs.updateProfilePicture(botNumber, media)
					reply('Makasih profil barunya jep😗')
					break 
					case 'ban':
				if (!isJepri) return reply(ind.ownerb())
				bnnd = body.slice(5)
				ban.push(`${bnnd}@s.whatsapp.net`)
				fs.writeFileSync('./database/pengguna/banned.json', JSON.stringify(ban))
				reply(`Berhasil membanned nomor : wa.me/${bnnd} `)
				break
		        case 'unban':
				if (!isJepri) return reply(ind.ownerb())
				bnnd = body.slice(7)
				ban.splice(`${bnnd}@s.whatsapp.net`, 1)
				fs.writeFileSync('./database/pengguna/banned.json', JSON.stringify(ban))
				reply(`Nomor wa.me/${bnnd} telah di unban!`)
				break
					//database bot
					case 'addvn':
				if (!isRegistered) return reply(ind.noregis())
					svst = body.slice(7)
					if (!svst) return reply('Nama VN nya apa kak? \n contoh: #addvn ara ara')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await jepribrs.downloadMediaMessage(boij)
					audionye.push(`${svst}`)
					fs.writeFileSync(`./strg/audio/${svst}.mp3`, delb)
					fs.writeFileSync('./strg/audio.json', JSON.stringify(audionye))
					jepribrs.sendMessage(from, `Sukses Menambahkan VN ke database [Kangdev Bot]\n\nCek dengan cara ${prefix}listvn`, MessageType.text, { quoted: mek })
					break
				case 'getvn':
				if (!isRegistered) return reply(ind.noregis())
					namastc = body.slice(7)
					buffer = fs.readFileSync(`./strg/audio/${namastc}.mp3`)
					jepribrs.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true })
					break
				case 'listvn':
				case 'vnlist':
				if (!isRegistered) return reply(ind.noregis())
					teks = 'List Vn database [Kangdev Bot]\n\n'
					for (let awokwkwk of audionye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n Total : ${audionye.length} `
					jepribrs.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": audionye } })
					break
				case 'addimage':
				case 'addfoto':
				if (!isRegistered) return reply(ind.noregis())
					svst = body.slice(9)
					if (!svst) return reply('Nama Fotonya apa kak? \n contoh: #addfoto viona')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await jepribrs.downloadMediaMessage(boij)
					imagenye.push(`${svst}`)
					fs.writeFileSync(`./strg/image/${svst}.jpeg`, delb)
					fs.writeFileSync('./strg/image.json', JSON.stringify(imagenye))
					jepribrs.sendMessage(from, `Sukses Menambahkan Foto ke database [Kangdev Bot]\n\nCek dengan cara ${prefix}listfoto`, MessageType.text, { quoted: mek })
					break
				case 'getimage':
				case 'getfoto':
				if (!isRegistered) return reply(ind.noregis())
					namastc = body.slice(9)
					buffer = fs.readFileSync(`./strg/image/${namastc}.jpeg`)
					jepribrs.sendMessage(from, buffer, image, { quoted: mek, caption: `Hasil Data Penyimpanan [Kangdev Bot] : ${namastc}.jpeg` })
					break
				case 'listfoto':
				case 'listimage':
				if (!isRegistered) return reply(ind.noregis())
					teks = 'List Foto database [Kangdev Bot]\n\n'
					for (let awokwkwk of imagenye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n Total : ${imagenye.length}`
					jepribrs.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagenye } })
					break
				case 'addvideo':
				if (!isRegistered) return reply(ind.noregis())
					svst = body.slice(10)
					if (!svst) return reply('Nama videonya apa kak? \n contoh: #addvideo lucinta luna')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await jepribrs.downloadMediaMessage(boij)
					videonye.push(`${svst}`)
					fs.writeFileSync(`./strg/video/${svst}.mp4`, delb)
					fs.writeFileSync('./strg/video.json', JSON.stringify(videonye))
					jepribrs.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: mek })
					break
				case 'getvideo':
				if (!isRegistered) return reply(ind.noregis())
					namastc = body.slice(10)
					buffer = fs.readFileSync(`./strg/video/${namastc}.mp4`)
					jepribrs.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: mek })
					break
				case 'listvideo':
				case 'videolist':
				if (!isRegistered) return reply(ind.noregis())
					teks = 'List Video Di database [Kangdev Bot]\n\n'
					for (let awokwkwk of videonye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${videonye.length}*`
					jepribrs.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": videonye } })
					break
					case 'antidelete':
				const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
				const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
				const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
				const isRevoke = dataRevoke.includes(from)
				const isCtRevoke = dataCtRevoke.data
				const isBanCtRevoke = dataBanCtRevoke.includes(sender) ? true : false
				const argz = body.split(' ')
				if (argz.length === 1) return jepribrs.sendMessage(from, `Penggunaan fitur antidelete :\n\n*${prefix}antidelete [aktif/mati]* (Untuk grup)\n*${prefix}antidelete [ctaktif/ctmati]* (untuk semua kontak)\n*${prefix}antidelete banct 628558xxxxxxx* (banlist kontak)`, MessageType.text)
				if (argz[1] == 'aktif') {
					if (isGroup) {
						if (isRevoke) return jepribrs.sendMessage(from, `Antidelete telah diaktifkan di grup ini sebelumnya!`, MessageType.text)
						dataRevoke.push(from)
						fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						jepribrs.sendMessage(from, `*Succes Enable Antidelete Grup!*`, MessageType.text)
					} else if (!isGroup) {
						jepribrs.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctaktif*`, MessageType.text)
					}
				} else if (argz[1] == 'ctaktif') {
					if (!isGroup) {
						if (isCtRevoke) return jepribrs.sendMessage(from, `Antidelete telah diaktifkan di semua kontak sebelumnya!`, MessageType.text)
						dataCtRevoke.data = true
						fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						jepribrs.sendMessage(from, `Antidelete diaktifkan disemua kontak!`, MessageType.text)
					} else if (isGroup) {
						jepribrs.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete aktif*`, MessageType.text)
					}
				} else if (argz[1] == 'banct') {
					if (isBanCtRevoke) return jepribrs.sendMessage(from, `kontak ini telah ada di database banlist!`, MessageType.text)
					if (argz.length === 2 || argz[2].startsWith('0')) return jepribrs.sendMessage(from, `Masukan nomer diawali dengan 62! contoh 62859289xxxxx`, MessageType.text)
					dataBanCtRevoke.push(argz[2] + '@s.whatsapp.net')
					fs.writeFileSync('./src/ct-revoked-banlist.json', JSON.stringify(dataBanCtRevoke, null, 2))
					jepribrs.sendMessage(from, `Kontak ${argz[2]} telah dimasukan ke banlist antidelete secara permanen!`, MessageType.text)
				} else if (argz[1] == 'mati') {
					if (isGroup) {
						const index = dataRevoke.indexOf(from)
						dataRevoke.splice(index, 1)
						fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						jepribrs.sendMessage(from, `*Succes disable Antidelete Grup!*`, MessageType.text)
					} else if (!isGroup) {
						jepribrs.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctmati*`, MessageType.text)
					}
				} else if (argz[1] == 'ctmati') {
					if (!isGroup) {
						dataCtRevoke.data = false
						fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						jepribrs.sendMessage(from, `Antidelete dimatikan disemua kontak!`, MessageType.text)
					} else if (isGroup) {
						jepribrs.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete mati*`, MessageType.text)
					}
				}
				break
				//Gabut Menu ~KANGDEV
				case 'bisakah':
                if (!isRegistered) return reply(ind.noregis())
				    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					bisakah = body.slice(1)
					const bisa =['Bisa','Tidak Bisa','Coba ulangi gw budek']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					jepribrs.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
					await limitAdd(sender)
					break
		            case 'kapankah':
                 if (!isRegistered) return reply(ind.noregis())
				    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					kapankah = body.slice(1)
					const kapan =['Besok','Lusa','1 Hari Lagi','2 Hari Lagi','3 Hari Lagi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','7 Bulan Lagi','8 Bulan Lagi','9 Bulan Lagi','10 Bulan Lagi','11 Bulan Lagi','1 Tahun lagi','2 Tahun lagi','3 Tahun lag0i','4 Tahun lagi','5 Tahun lagi','6 Tahun lagi','7 Tahun lagi','8 Tahun lagi','9 Tahun lagi','10 Tahun lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					jepribrs.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
					await limitAdd(sender)
					break
		            case 'apakah':
                 if (!isRegistered) return reply(ind.noregis())
				    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					apakah = body.slice(1)
					const apa =['Iya','Tidak','coba ulangi gw budek','kok nanya gw emang gw bpk lu?']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					jepribrs.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
					await limitAdd(sender)
					break
                    case 'sangecek':
                 if (!isRegistered) return reply(ind.noregis())
				    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					sange = body.slice(1)
					const sang =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const nge = sang[Math.floor(Math.random() * sang.length)]
					jepribrs.sendMessage(from, 'Pertanyaan : *'+sange+'*\n\nJawaban : '+ nge+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
                    case 'gaycek':
                 if (!isRegistered) return reply(ind.noregis())
				    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					gayy = body.slice(1)
					const gay =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const yag = gay[Math.floor(Math.random() * gay.length)]
					jepribrs.sendMessage(from, 'Pertanyaan : *'+gayy+'*\n\nJawaban : '+ yag+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
                    case 'gantengcek':
                 if (!isRegistered) return reply(ind.noregis())
				    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					ganteng = body.slice(1)
					const gan =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
					jepribrs.sendMessage(from, 'Pertanyaan : *'+ganteng+'*\n\nJawaban : '+ teng+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
		            case 'cantikcek':
                 if (!isRegistered) return reply(ind.noregis())
				    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					cantik = body.slice(1)
					const can =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
					jepribrs.sendMessage(from, 'Pertanyaan : *'+cantik+'*\n\nJawaban : '+ tik+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
		            case 'watak':
                 if (!isRegistered) return reply(ind.noregis())
				    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					watak = body.slice(1)
					const wa =['Penyayang','Pemurah','Pemarah','Pemaaf','Penurut','Baik','Baperan','Baik Hati','penyabar','UwU','top deh, pokoknya','Suka Membantu']
					const tak = wa[Math.floor(Math.random() * wa.length)]
					jepribrs.sendMessage(from, 'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak, text, { quoted: mek })
					await limitAdd(sender)
				        break
		         case 'hobby':
		case 'hoby':
                 if (!isRegistered) return reply(ind.noregis())
				    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					hobby = body.slice(1)
					const hob =['Memasak','kang coli','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
					const by = hob[Math.floor(Math.random() * hob.length)]
					jepribrs.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: mek })
					await limitAdd(sender)
					break
                case 'jadian':
                if (!isRegistered) return reply(ind.noregis())
				    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
					jds = []
					const jdii = groupMembers
					const koss = groupMembers
					const akuu = jdii[Math.floor(Math.random() * jdii.length)]
					const diaa = koss[Math.floor(Math.random() * koss.length)]
					teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]} ♥️ @${diaa.jid.split('@')[0]} `
					jds.push(akuu.jid)
					jds.push(diaa.jid)
					mentions(teks, jds, true)
					await limitAdd(sender)
					break
               case 'jodohku':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (!isGroup) return reply(ind.groupo())
					jds = []
					const jdiidc = groupMembers
					const kosstc = groupMembers
					const akuutc = jdiidc[Math.floor(Math.random() * jdiidc.length)]
					teks = `Jodoh Kamu Si Dia❤️ @${akuutc.jid.split('@')[0]}`
					jds.push(akuutc.jid)
					mentions(teks, jds, true)
					await limitAdd(sender)
					break
               case 'tercantik':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (!isGroup) return reply(ind.groupo())
					jds = []
					const jdiidr = groupMembers
					const kosstr = groupMembers
					const akuutr = jdiidr[Math.floor(Math.random() * jdiidr.length)]
					teks = `Yang tercantik di grub ini adalah @${akuutr.jid.split('@')[0]}`
					jds.push(akuutr.jid)
					mentions(teks, jds, true)
					await limitAdd(sender)
					break
					case 'terganteng':
				if (!isGroup) return reply(ind.groupo())
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					jds = []
					const kang = groupMembers
					const dev = groupMembers
					const oh = kang[Math.floor(Math.random() * kang.length)]
					teks = `Yang terganteng di grub ini adalah @${oh.jid.split('@')[0]}`
					jds.push(oh.jid)
					mentions(teks, jds, true)
					await limitAdd(sender)
					break
					case 'jones':
				if (!isGroup) return reply(ind.groupo())
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					jds = []
					const jep = groupMembers
					const dev1 = groupMembers
					const oh1 = jep[Math.floor(Math.random() * jep.length)]
					teks = `Yang terganteng di grub ini adalah @${oh1.jid.split('@')[0]}`
					jds.push(oh1.jid)
					mentions(teks, jds, true)
					await limitAdd(sender)
					break
					case 'bebankeluarga':
				if (!isGroup) return reply(ind.groupo())
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					jds = []
					const jep1 = groupMembers
					const dev2 = groupMembers
					const oh2 = jep1[Math.floor(Math.random() * jep1.length)]
					teks = `Yang terganteng di grub ini adalah @${oh2.jid.split('@')[0]}`
					jds.push(oh2.jid)
					mentions(teks, jds, true)
					await limitAdd(sender)
					break
					//Date Hari Besar
					case 'lebaran':
                   if (!isRegistered) return reply(ind.noregis())
// Akhir Hitungan Mundur
var countDownDate = new Date("2021-05-13").getTime();
// Mengambil Tanggal Dan Waktu
var now = new Date().getTime();
// Find the distance between now and the count down date
var distance = countDownDate - now;
// Kalkulator Waktu Hari, Jam, Menit, Detik 
var dayss = Math.floor(distance / (1000 * 60 * 60 * 24));
var hourss = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutess = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var secondss = Math.floor((distance % (1000 * 60)) / 1000);
reply(`*Menuju Lebaran:*\n\n${dayss} Hari ${hourss} Jam ${minutess} Menit ${secondss} Detik`)
                break
                case 'iduladha':
                if (!isRegistered) return reply(ind.noregis())
// Akhir Hitungan Mundur
var countDownDate = new Date("2021-07-19").getTime();
// Mengambil Tanggal Dan Waktu
var now = new Date().getTime();
// Find the distance between now and the count down date
var distance = countDownDate - now;
// Kalkulator Waktu Hari, Jam, Menit, Detik 
var dayss = Math.floor(distance / (1000 * 60 * 60 * 24));
var hourss = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutess = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var secondss = Math.floor((distance % (1000 * 60)) / 1000);
reply(`*Menuju Iduladha:*\n\n ${dayss} Hari ${hourss} Jam ${minutess} Menit ${secondss} Detik`)
                break
                case 'tahunbaru':
                if (!isRegistered) return reply(ind.noregis())
             if (isBanned) return reply(ind.baned())
// Akhir Hitungan Mundur
var countDownDate = new Date("2022-01-01").getTime();
// Mengambil Tanggal Dan Waktu
var now = new Date().getTime();
// Find the distance between now and the count down date
var distance = countDownDate - now;
// Kalkulator Waktu Hari, Jam, Menit, Detik 
var dayss = Math.floor(distance / (1000 * 60 * 60 * 24));
var hourss = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutess = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var secondss = Math.floor((distance % (1000 * 60)) / 1000);
reply(`*Menuju Tahun Baru:*\n\n ${dayss} Hari ${hourss} Jam ${minutess} Menit ${secondss} Detik`)
                break
                case '17agustus':
                if (!isRegistered) return reply(ind.noregis())
             if (isBanned) return reply(ind.baned())
// Akhir Hitungan Mundur
var countDownDate = new Date("2022-08-17").getTime();
// Mengambil Tanggal Dan Waktu
var now = new Date().getTime();
// Find the distance between now and the count down date
var distance = countDownDate - now;
// Kalkulator Waktu Hari, Jam, Menit, Detik 
var dayss = Math.floor(distance / (1000 * 60 * 60 * 24));
var hourss = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutess = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var secondss = Math.floor((distance % (1000 * 60)) / 1000);
reply(`*Menuju 17 Agustus:*\n\n ${dayss} Hari ${hourss} Jam ${minutess} Menit ${secondss} Detik`)
                break
                case 'gtts':
		        case 'tts':
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return jepribrs.sendMessage(from, 'Diperlukan kode bahasa kak!!', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return jepribrs.sendMessage(from, 'Mana teks yang mau di jadiin suara? suara setan kah?', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 500
					? reply('Textnya kebanyakan syg')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buffer = fs.readFileSync(rano)
							if (err) return reply(ind.stikga())
							jepribrs.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					await limitAdd(sender)
			    break
			case 'cogans':
					case 'cogan':
					if (!isRegistered) return reply( ind.noregis())
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=cowokganteng`, {method: 'get'})
					naru = JSON.parse(JSON.stringify(anu));
					to =  naru[Math.floor(Math.random() * naru.length)];
					nye = await getBuffer(to)
					jepribrs.sendMessage(from, nye, image, { caption: 'halu terus kak', quoted: mek })
					break
                // ini batas
                case 'namaninja':
			        if (!isRegistered) return reply( ind.noregis())
                    if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(`Contoh ${prefix}nama jepri`)
					reply('[🚴] Sabar Beb Sedang Proses...')
					nama = args.join(" ")
					anu = await fetchJson(`https://kangdev.herokuapp.com/api/nama/ninja?nama=${nama}&apikey=${kangdev}`, {method: 'get'})
					capt = `[KANGDEV BOT] \n\n Nama Lu : ${anu.result.your_name}\n Nama Ninja : ${anu.result.result}`
					jepribrs.sendMessage(from, capt, text, {quoted: mek})
					break
				default:
				if (body.startsWith(`${prefix}${command}`)) {
                  const none = fs.readFileSync('./jepribarus/none.mp3');
                  jepribrs.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
       if (budy.includes(`assalamualaikum`)) {
                  reply(`Waalaikumsalam kak ${pushname}`)
                  }
                 
       if (budy.includes(`Assalamualaikum`)) {
                  reply(`Waalaikumsalam kak ${pushname}`)
                  }
                  
                  if (budy.includes(`thanks`)) {
                  reply(`Sama Sama Kak ${pushname}`)
                  }
                  
                  if (budy.includes(`makasih`)) {
                  reply(`Sama Sama Kak ${pushname}`)
                  }
                  
                  if (budy.includes(`Makasih`)) {
                  reply(`Sama Sama Kak ${pushname}`)
                  }
                  
                  if (budy.includes(`kacangin`)) {
                reply(`tag admin kak`)
                  }
                  
                  if (budy.includes(`jepri`)) {
                reply(`kenapa manggil ownerku kak?`)
                  }
                  
                  if (budy.includes(`Jepri`)) {
                reply(`kenapa manggil ownerku kak?`)
                  }
                  
                  if (budy.includes(`open bo`)) {
                  reply(`astafirulloh dosa kak`)
                  }
                  
                  if (budy.includes(`toxic`)) {
                const bot = fs.readFileSync('./jepribarus/toxic.mp3');
                jepribrs.sendMessage(from, bot, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
                  
                  if (budy.includes(`nyanyi`)) {
                const bot = fs.readFileSync('./jepribarus/Aisyah.mp3');
                jepribrs.sendMessage(from, bot, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
                  
                  if (budy.includes(`Nyanyi`)) {
                const bot = fs.readFileSync('./jepribarus/Aisyah.mp3');
                jepribrs.sendMessage(from, bot, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
                  
                  if (budy.includes(`Open bo`)) {
                  reply(`astafirulloh dosa kak`)
                  }
                  
			if (isGroup && !isCmd && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						reply(ind.cmdnf(prefix, command))
					} else {
						console.log(color('[ERROR]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
					}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
