exports.wait = () => {
	return`「 🙉 」 SEDANG DIPROSES BEB...`
}

exports.succes = () => {
	return`「 SUCCES BEB 」`
}

exports.lvlon = () => {
	return`「 ENABLE 」 LEVELING`
}

exports.lvloff = () => {
	return`「 DISABLE 」 LEVELING`
}

exports.lvlnul = () => {
	return`*LEVELMU MASIH KOSONG*`
}

exports.lvlnoon = () => {
	return`LEVEL DI GRUB BELUM DI AKTIFKAN`
}

exports.noregis = () => {
	return`「 BELUM MANDI🙈」\n\n Kamu belum Terdaftar Di Database kangdev bot \n Contoh Cara Daftar: \n ${prefix}daftar ${pushname}|19`
}

exports.rediregis = () => {
	return`「 SUDAH MANDI😇」\n\n Kamu sudah Terdaftar Syang ku😗`
}

exports.stikga = () => {
	return`*Yah gagal coba ulangi beberapa saat lagi*`
}

exports.linkga = () => {
	return`*Maaf link tidak valid*`
}

exports.groupo = () => {
	return`「GROUP ONLY」\n\n Hanya Bisa Di Gunakan Di Dalam Grup🙈`
}

exports.ownerb = () => {
	return`「OWNER ONLY」\n\n Kamu Siapa ? Saya Gak Kenal Kamu😕 \n Perintah Ini Hanya Bisa Di Gunakan Oleh Owner 「KANGDEV BOT」`
}

exports.ownerg = () => {
	return`「OWNER ONLY」\n\n Kamu Siapa ? Saya Gak Kenal Kamu😕 \n Perintah Ini Hanya Bisa Di Gunakan Oleh Owner 「KANGDEV BOT」`
}

exports.admin = () => {
	return`「ADMIN GROUP」\n\n Kamu Siapa ? Saya Gak Kenal Kamu😕 \n Perintah Ini Hanya Bisa Di Gunakan Oleh Admin Grup ${mdata.subject}`
}

exports.badmin = () => {
	return`「BOT HARUS JADI ADMIN」`
}

exports.nsfwoff = () => {
	return`「NSFW TIDAK AKTIF」\n\n ketik #nsfw 1 \n untuk mengaktifkan`
}

exports.bug = () => {
	return`Masalah telah di laporkan ke owner [kangdev bot]`
}

exports.wrongf = () => {
	return`Salah atuh yank cara daftarnya \n gini loh yank cara daftarnya \n contoh : ${prefix}daftar ${pushname}|19`
}

exports.clears = () => {
	return`*Clear all Success*`
}

exports.pc = () => {
	return`*「 REGISTRASI 」*\n\nUntuk mengetahui apa kamu sudah terdaftar silahkah check message yang saya kirim \n\nNOTE:\n*Jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`「 HORE SUDAH MANDI😗 」\n\n Data Kamu \n Nama : ${namaUser} \n Nomer: wa.me/${sender.split("@")[0]}\n Umur: ${umurUser}\n Waktu Pendaftaran: ${time}\n Kode Serial : ${serialUser} \n\n┗⊱NOTE : Sebelum Menggunakan Bot Silahkan Chat/save no owner bot terlebih dahulu😁👇\n http://wa.me/12347590003`
}

exports.owneresce = (pushname) => {
	return`*Maaf tapi ${pushname} bukan owner script*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${aha}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahb}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahc}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahd}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahe}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahf}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role) => { 
	return `
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
「 SELAMAT ${pushname} 」
 📊➤ Nama : ${pushname}
 📊➤ Nomer : ${sender.split("@")[0]}
 📊➤ Xp : ${getLevelingXp(sender)}
 📊➤ Limit :  +3
 📊➤ Pangkat :  ${role}
 📊➤ Level : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`Maaf  Kak ${pushname} limit kamu telah habis \n Chat Owner Bot untuk menambahkan limit kamu : \n http://wa.me/12347590003 \n\n Note : Limit Di reset setiap hari pukul 12:00`
}

exports.limitcount = (limitCounts) => {
	return`
「 LIMIT USER KANGDEV BOT 」
sisa limit anda : ${limitCounts}

NOTE : limit akan di reset setiap hari pukul 12:00 atau \n chat owner untuk menambahkan limit anda👇 \n http://wa.me/12347590003
`}

exports.satukos = () => {
	return`*Tambah parameter 1/enable atau 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`◪ *「 ATM 」*\n  ├─ ❏ *Name* : ${pushname}\n  ├─ ❏ *Nomor* : ${sender.split("@")[0]}\n  └─ ❏ *Uang* : ${uangkau}
`}
