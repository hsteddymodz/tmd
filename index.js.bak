//Feita por Ton/Tomy
require('./datab/armazenamento/env/info')
const { 
default: WAConnection,
MessageType,
Presence,
GroupSettingChange,
WA_MESSAGE_STUB_TYPES,
WAContextInfo,
Mimetype,
MediaPathMap,
MimetypeMap,
relayWAMessage,
makeInMemoryStore,
useMultiFileAuthState,
BufferJSON, 
DisconnectReason, 
downloadMediaMessage,
downloadAndSaveMediaMessage,
fetchLatestBaileysVersion,
downloadContentFromMessage,
generateWAMessageFromContent,
Browser,
proto,
delay
} = require('@adiwajshing/baileys')
const fs = require('fs');
/*------------------------------ARQUIVOS DO JODO DA VELHA------------------------------*/
const { crtt } = "Jogo da velha"
const { addTTTId, addTTTwin, addTTTdefeat, addTTTtie, addTTTpoints, getTTTId, getTTTwins, getTTTdefeats, getTTTties, getTTTpoints } = require('./lib/tictactoe.js')//JOGO DA VELHA,AGRADECIMENTOS: IRIS(kill), Resen
const tictactoe = JSON.parse(fs.readFileSync('./database/jogodavelha/jdv/ttt/tictactoe.json'));
const { ttthelp } = require('./database/jogodavelha/jdv/ttt/TTTconfig/ttthelp');
const bancht = JSON.parse(fs.readFileSync('./datab/grupos/banchat.json'));
const { EmojiAPI } = require("emoji-api")
const { tttme } = require('./database/jogodavelha/jdv/ttt/TTTconfig/tttme');
var tttset = require('./database/jogodavelha/jdv/ttt/TTTconfig/tttset.json');
var esp = require('./database/jogodavelha/jdv/ttt/TTTconfig/tttframe.json');
const { validmove, setGame } = require("./database/jogodavelha/tictactoe/index.js");
hit_today = [1000]
const { runtime } = require("./arquivos/dados/functions")
const P = require('pino');
const { msgFilter, isUrl } = require('./arquivos/dados')
const yts = require("yt-search");
const cfonts = require("cfonts");
const { isFiltered, addFilter } = require('./arquivos/json/antispam.js');
const chalk = require('chalk')
const Crypto = require("crypto")
const ff = require('fluent-ffmpeg')
const mimetype = require("mime-types")
const speed = require("performance-now");
const BodyForm = require("form-data")
const util = require("util")
const path = require("path")
const px = require('pix-utils')
const axios = require('axios');
const webp = require("node-webpmux")
const { Boom } = require('@hapi/boom')
const fetch = require('node-fetch')
const { color } = require('./datab/lib/cores')
const moment = require('moment-timezone')
const hora = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
const data = moment.tz('America/Sao_Paulo').format('DD/MM/YY')
const { banner, getGroupAdmins, getBuffer, getRandom, getExtension } = require('./datab/lib/funções')
const { fetchJson } = require('./datab/lib/fetcher')
const configurações = JSON.parse(fs.readFileSync('./datab/armazenamento/env/info.json'))
const registros = JSON.parse(fs.readFileSync('./datab/armazenamento/env/registros.json'))
const imagens = JSON.parse(fs.readFileSync('./datab/armazenamento/imagens/imagem.json'))
const antilink = JSON.parse(fs.readFileSync('./arquivos/seguranca/antilink.json'))
const donos = JSON.parse(fs.readFileSync('arquivos/json/donos.json'));
const {
 tmpdir
} = require("os")
const roleta = JSON.parse(fs.readFileSync('arquivos/grupos/cassino.json')); 
const porcentagem = JSON.parse(fs.readFileSync('arquivos/grupos/porcentagem.json'));
const antipv = JSON.parse(fs.readFileSync('datab/usuarios/antipv.json'));
const premium = JSON.parse(fs.readFileSync('arquivos/json/premiuns.json'));
const cclive = JSON.parse(fs.readFileSync('datab/cc/live.json'));
const gppremium = JSON.parse(fs.readFileSync('datab/grupos/gppremiums.json'));
const hx = require("hxz-api")
const { ia } = require('./arquivos/json/ia.js')
const { dados } = require('./apis/geradordedados');
const date = moment.tz('America/Sao_Paulo').format('DD/MM/YY');
const time = moment.tz('America/Sao_Paulo').format('DD/MM HH:mm:ss')
const hr = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
const timi = moment.tz('America/Sao_Paulo').add(30, 'days').calendar();
const timu = moment.tz('America/Sao_Paulo').add(20, 'days').calendar();
const number = [`558171185449@s.whatsapp.net`]
const consultarCep = require('correios-brasil')


// Definições
prefixo = configurações.prefixo
prefix = configurações.prefixo
nomeBot = configurações.nomeBot
NomeDoBot = nomeBot
nomeDono = configurações.nomeDono
numeroDono = configurações.numeroDono
logo = imagens.logo

// Funções importadas
const { climaDl } = require('./datab/js/clima')
const { mediafireDl } = require('./datab/js/mediafire')
const { pinterest } = require('./datab/js/srch')

const { getLevelingXp, getLevelingLevel, getLevelingId, addLevelingXp, addLevelingLevel, addLevelingId, bayarLimit, limitAdd, addATM, addKoinUser, checkATMuser, getRegisteredRandomId, addRegisteredUser, createSerial, checkRegisteredUser, confirmATM, cekafk, isAfk, addafk, getpc, supre } = require('./datab/js/consts.js');

// Funções módulos
let girastamp = speed()
let latensi = speed() - girastamp

// Contato do dono
const vcard = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n' 
+ 'FN:Teddy Modz\n' // Nome completo
+ 'ORG:Lwa Company;\n' // A organização do contato
+ 'TEL;type=CELL;type=VOICE;waid=558171185449:+55 81 7118 5449\n' // WhatsApp ID + Número de telefone
+ 'END:VCARD' // Fim do ctt

// Início da conexão
async function starts() {
const store = makeInMemoryStore({ logger: P().child({ level: 'debug', stream: 'store' }) })

// Conexão com o qr
const loadState = () => {
var state
try {
const value = JSON.parse(fs.readFileSync('./datab/qr-code', { encoding: 'utf-8' }), BufferJSON.reviver)
state = { 
creds: value.creds, 
keys: initInMemoryKeyStore(value.keys) 
}
} catch {}
return state
}

const { state, saveCreds } = await useMultiFileAuthState('./datab/qr-code')
console.log(banner.string)
console.log()
console.log()
console.log('\033[1;32mTeddy MD conectanda!!\x1b[1;37m')
console.log('\033[1;30mInfo\x1b[1;37m', '\x1b[0;34m Os: Baileys\x1b[1;37m')
console.log('\033[1;30mInfo\x1b[1;37m', '\x1b[0;34m Versão: 1.0\x1b[1;37m')
console.log('\033[1;30mInfo\x1b[1;37m', `\x1b[0;34m Dev: ${nomeDono}\x1b[1;37m`)
console.log('\033[1;30mBoa Sorte!\x1b[1;37m')
console.log()
const teddy = WAConnection({
logger: P({ level: 'silent'}),
auth: state,
printQRInTerminal: true
})
store.bind(teddy.ev)
client = teddy
teddy.ev.on('chats.set', () => {
// pode usar 'store.chats' como quiser, mesmo depois que o soquete morre
// 'chats' => uma instância keyedDB
console.log('Tem conversas', store.chats.all())
})
teddy.ev.on('contacts.set', () => {
console.log('Tem contatos', Object.values(store.contacts))
})
teddy.ev.on('creds.update', saveCreds)


// Chat update
// Ouvir quando as credenciais auth é atualizada
teddy.ev.on('messages.upsert', async ({ messages }) => {
try {
const info = messages[0]
if (!info.message) return 
await teddy.readMessages(info.key.remoteJid, info.key.participant, [info.key.id])
if (info.key && info.key.remoteJid == 'status@broadcast') return
const altpdf = Object.keys(info.message)
const type = altpdf[0] == 'senderKeyDistributionMessage' ? altpdf[1] == 'messageContextInfo' ? altpdf[2] : altpdf[1] : altpdf[0]
global.prefixo

const content = JSON.stringify(info.message)
const from = info.key.remoteJid

selectedButton = (type == 'buttonsResponseMessage') ? info.message.buttonsResponseMessage.selectedButtonId : ''

// Body
var body = (type === 'conversation') ?
info.message.conversation : (type == 'imageMessage') ?
info.message.imageMessage.caption : (type == 'videoMessage') ?
info.message.videoMessage.caption : (type == 'extendedTextMessage') ?
info.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ?
info.message.buttonsResponseMessage.selectedButtonId : (type == 'listResponseMessage') ?
info.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'templateButtonReplyMessage') ?
info.message.templateButtonReplyMessage.selectedId : ''
const args = body.trim().split(/ +/).slice(1)
const isCmd = body.startsWith(prefixo)
const comando = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null
const argsButton = selectedButton.trim().split(/ +/)

var budy2 = body.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
const q_2 = budy2.trim().split(/ +/).slice(1).join(' ');

// Bady
bady = (type === 'conversation') ? info.message.conversation : (type == 'imageMessage') ? info.message.imageMessage.caption : (type == 'videoMessage') ? info.message.videoMessage.caption : (type == 'extendedTextMessage') ? info.message.extendedTextMessage.text : (info.message.listResponseMessage && info.message.listResponseMessage.singleSelectReply.selectedRowId) ? info.message.listResponseMessage.singleSelectReply.selectedRowId: ''

// Budy
budy = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''

//===

button = (type == 'buttonsResponseMessage') ? info.message.buttonsResponseMessage.selectedDisplayText : ''
button = (type == 'buttonsResponseMessage') ? info.message.buttonsResponseMessage.selectedButtonId : ''
listMessage = (type == 'listResponseMessage') ? info.message.listResponseMessage.title : ''

var pes = (type === 'conversation' && info.message.conversation) ? info.message.conversation : (type == 'imageMessage') && info.message.imageMessage.caption ? info.message.imageMessage.caption : (type == 'videoMessage') && info.message.videoMessage.caption ? info.message.videoMessage.caption : (type == 'extendedTextMessage') && info.message.extendedTextMessage.text ? info.message.extendedTextMessage.text : ''

bidy =  budy.toLowerCase()

// Enviar gifs
const enviargif = (videoDir, caption) => {
teddy.sendMessage(from, {
video: fs.readFileSync(videoDir),
caption: caption,
gifPlayback: true
})
}

// Enviar imagens
const enviarImg = (imageDir, caption) => {
teddy.sendMessage(from, {
image: fs.readFileSync(imageDir),
caption: caption
})
}

// Envia imagens com botão
const enviarImgB = async (id, img1, text1, desc1, but = [], vr) => {
buttonMessage = {
image: {url: img1},
caption: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
teddy.sendMessage(id, buttonMessage, {quoted: vr})
}

// Enviar figs
const enviarfig = async (figu, tag) => {
bla = fs.readFileSync(figu)
teddy.sendMessage(from, {sticker: bla}, {quoted: info})
}

const getFileBuffer = async (mediakey, MediaType) => { 
const stream = await downloadContentFromMessage(mediakey, MediaType)

let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}

const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
const arg = body.substring(body.indexOf(' ') + 1)
const argss = body.split(/ +/g)
const testat = body
const ants = body
const isGroup = info.key.remoteJid.endsWith('@g.us')
const tescuk = ['0@s.whatsapp.net']
const q = args.join(' ')
const sender = isGroup ? info.key.participant : info.key.remoteJid
const pushname = info.pushName ? info.pushName : ''
const isRegistro = registros.includes(sender)
const groupMetadata = isGroup ? await teddy.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const text = args.join(' ')

resposta = {
espere: '*🏕 Aguarde um momentinho. tá bom? ⚘*',
grupo: '*🏕 Este comando só pode ser utilizado em grupo. 🎲*',
privado: '*🏕 Esse comando só pode ser usado no privado. 🧩*',
adm: '*🏕 Somente admins pode utilizar esse comando. ⭐*',
botadm: '*🏕 Este comando só pode ser utilizado quando eu me tornar administradora. 🌙*',
registro: `*🏕Olá ${pushname}, não encontrei seu login fassa registro utilizado ${prefixo}rg. ☺*`,
norg: '*🏕 Oops, não e possível ter mais de um registro. 😅*',
erro: '*🏕 Ops, deu erro no comando...*',
dono: '*🏕 Este é um recurso especial para o meu Dono. 🧑🏻‍💻*'
}

// Selos de verificado
const ContatVR = {key : {participant : '0@s.whatsapp.net'},message: {contactMessage:{displayName: `${pushname}`}}}
const LiveVR = {key : {participant : '0@s.whatsapp.net'},message: {liveLocationMessage: {displayName: `${pushname}`}}}
const ImagenVR = {key : {participant : '0@s.whatsapp.net'},message: {imageMessage: {displayName: `${pushname}`}}}
const VideoVR = {key : {participant : '0@s.whatsapp.net'},message: {videoMessage:{displayName: `${pushname}`}}}
const DocVR = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage:{displayName: `${pushname}`}}}



// Consts dono/adm etc...
const quoted = info.quoted ? info.quoted : info
const mime = (quoted.info || quoted).mimetype || ""
const numeroBot = teddy.user.id.split(':')[0]+'@s.whatsapp.net'
const isBot = info.key.fromMe ? true : false
const isBotGroupAdmins = groupAdmins.includes(numeroBot) || false
const isAntiLink = isGroup ? antilink.includes(from) : false
const isGroupAdmins = groupAdmins.includes(sender) || false 
const argis = bidy.trim().split(/ +/)
const isOwner = sender.includes(numeroDono) 
const SoDono = sender.includes(numeroDono) 
const stealCmd = new Set()
const isFilteredSteal = (from) => !!stealCmd.has(from)
const addFilterSteal = (from) => {
    stealCmd.add(from)
    setTimeout(() => stealCmd.delete(from), delaystealcmd * 1000)
}
let LCT = 0; //bota no topo do arquivo index, ou no topo das funcoes caso tenha arquivo de funcoes separado

function verificarIntervalo() {
  const CT = new Date().getTime();
  const intervalo = CT - LCT;
  
  if (intervalo < 5000) {
    return false;
  }
  
  LCT = CT;
  
  return true;
} // isto vai na index, ou no arquivo de funcoes separado, se tiver separado lembre de exportar-los!

const isPremium = premium.includes(sender)
const isgppremium = gppremium.includes(from)
const command = isCmd ? budy2.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null
const isBanchat = isGroup ? bancht.includes(from) : false
const enviar = (texto) => {
teddy.sendMessage(from, { text: texto }, {quoted: info}) }
const reply = (texto) => {
teddy.sendMessage(from, { text: texto }, {quoted: info}) }

// Consts isQuoted
const isImage = type == 'imageMessage'
const isVideo = type == 'videoMessage'
const isAudio = type == 'audioMessage'
const isSticker = type == 'stickerMessage'
const isContact = type == 'contactMessage'
const isLocation = type == 'locationMessage'
const isProduct = type == 'productMessage'
const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage')
typeMessage = body.substr(0, 50).replace(/\n/g, '')
if (isImage) typeMessage = 'Image'
else if (isVideo) typeMessage = 'Video'
else if (isAudio) typeMessage = 'Audio'
else if (isSticker) typeMessage = 'Sticker'
else if (isContact) typeMessage = 'Contact'
else if (isLocation) typeMessage = 'Location'
else if (isProduct) typeMessage = 'Product'
const isQuotedMsg = type === 'extendedTextMessage' && content.includes('textMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
const isQuotedProduct = type === 'extendedTextMessage' && content.includes('productMessage')

// Mensagems do console
if (!isGroup && isCmd) console.log('\033[1;31m~\x1b[1;37m>', '[\x1b[0;31mComando\x1b[1;37m]', hora, color(comando), 'de ', color(sender.split('@')[0]))

if (!isGroup && !isCmd && !info.key.fromMe) console.log('\033[1;31m~\x1b[1;37m>', '[\033[0;34mMensagem\x1b[1;37m]', 'de ', color(sender.split('@')[0]))

if (isCmd && isGroup) console.log('\033[1;31m~\x1b[1;37m>', '[\x1b[0;31mComando\x1b[1;37m]', hora, color(comando), 'de ', color(sender.split('@')[0]), 'Gp: ', color(groupName))

if (!isCmd && isGroup && !info.key.fromMe) console.log('\033[1;31m~\x1b[1;37m>', '[\033[0;34mMensagem\x1b[1;37m]',  'de ', color(sender.split('@')[0]), 'Gp: ', color(groupName))






const _leveling = JSON.parse(fs.readFileSync('./datab/leveling.json'));

const _level = JSON.parse(fs.readFileSync('./datab/level.json'));

const isLevelingOn = isGroup ? _leveling.includes(from) : false


//=======FUNCIONALIDADE PATENTE=========\\
const nivelAtual = getLevelingLevel(sender)
var patt = 'Iniciante🔹I'
if (nivelAtual === 1) {
patt = 'Iniciante🔹I'
} else if (nivelAtual === 2) {
patt = 'Iniciante🔹II'
} else if (nivelAtual === 3) {
patt = 'Iniciante🔹III'
} else if (nivelAtual === 4) {
patt = 'Iniciante🔹IV'
} else if (nivelAtual === 5) {
patt = 'Iniciante🔹V'
} else if (nivelAtual === 6) {
patt = 'Aprendiz📕I'
} else if (nivelAtual === 7) {
patt = 'Aprendiz📕II'
} else if (nivelAtual === 8) {
patt = 'Aprendiz📕III'
} else if (nivelAtual === 9) {
patt = 'Aprendiz📕IV'
} else if (nivelAtual === 10) {
patt = 'Aprendiz📕V'
} else if (nivelAtual === 11) {
patt = 'Treinamento🔶I'
} else if (nivelAtual === 12) {
patt = 'Treinamento🔶II'
} else if (nivelAtual === 13) {
patt = 'Treinamento🔶III'
} else if (nivelAtual === 14) {
patt = 'Treinamento🔶IV'
} else if (nivelAtual === 15) {
patt = 'Treinamento🔶V'
} else if (nivelAtual === 16) {
patt = 'Formado💠I'
} else if (nivelAtual === 17) {
patt = 'Formado💠II'
} else if (nivelAtual === 18) {
patt = 'Formado💠III'
} else if (nivelAtual === 19) {
patt = 'Formado💠IV'
} else if (nivelAtual === 20) {
patt = 'Formado💠V'
} else if (nivelAtual === 21) {
patt = 'Platina🥏I'
} else if (nivelAtual === 22) {
patt = 'Platina🥏II'
} else if (nivelAtual === 23) {
patt = 'Platina🥏III'
} else if (nivelAtual === 24) {
patt = 'Platina🥏IV'
} else if (nivelAtual === 25) {
patt = 'Platina🥏V'
} else if (nivelAtual === 26) {
patt = 'Bronze🥉I'
} else if (nivelAtual === 27) {
patt = 'Bronze🥉II'
} else if (nivelAtual === 28) {
patt = 'Bronze🥉III'
} else if (nivelAtual === 29) {
patt = 'Bronze🥉IV'
} else if (nivelAtual === 30) {
patt = 'Bronze🥉V'
} else if (nivelAtual === 31) {
patt = 'Prata🥈I'
} else if (nivelAtual === 32) {
patt = 'Prata🥈II'
} else if (nivelAtual === 33) {
patt = 'Prata🥈III'
} else if (nivelAtual === 34) {
patt = 'Prata🥈IV'
} else if (nivelAtual === 35) {
patt = 'Prata🥈V'
} else if (nivelAtual === 36) {
patt = 'Ouro🥇I'
} else if (nivelAtual === 37) {
patt = 'Ouro🥇II'
} else if (nivelAtual === 38) {
patt = 'Ouro🥇III'
} else if (nivelAtual === 39) {
patt = 'Ouro🥇IV'
} else if (nivelAtual === 40) {
patt = 'Ouro🥇V'
} else if (nivelAtual === 41) {
patt = 'Diamante💎I'
} else if (nivelAtual === 42) {
patt = 'Diamante💎II'
} else if (nivelAtual === 43) {   	
patt = 'Diamante💎III'
} else if (nivelAtual === 44) {
patt = 'Diamante💎IV'
} else if (nivelAtual === 45) {
patt = 'Diamante💎V'
} else if (nivelAtual === 46) {
patt = '🔸️Mitico🔮l'
} else if (nivelAtual === 47) {
patt = '🔸️Mitico🔮Il'
} else if (nivelAtual === 48) {
patt = '🔸️Mitico🔮III'
} else if (nivelAtual === 49) {
patt = '🔸️Mitico🔮IV'
} else if (nivelAtual === 50) {
patt = '🔸️Mitico🔮V'
} else if (nivelAtual === 51) {
patt = 'Militar🪖l'
} else if (nivelAtual === 52) {
patt = 'Militar🪖ll'
} else if (nivelAtual === 53) {
patt = 'Militar🪖lll'
} else if (nivelAtual === 54) {
patt = 'Militar🪖lV'
} else if (nivelAtual === 55) {
patt = 'Militar🪖V'
} else if (nivelAtual === 56) {
patt = 'Reconhecimento⚔I'
} else if (nivelAtual === 57) {
patt = 'Reconhecimento⚔II'
} else if (nivelAtual === 58) {
patt = 'Reconhecimento⚔III'
} else if (nivelAtual === 59) {
patt = 'Reconhecimento⚔IV'
} else if (nivelAtual === 60) {
patt = 'Reconhecimento⚔V'
} else if (nivelAtual === 61) {
patt = 'Capitão🗡I'
} else if (nivelAtual === 62) {
patt = 'Capitão🗡II'
} else if (nivelAtual === 63) {
patt = 'Capitão🗡III'
} else if (nivelAtual === 64) {
patt = 'Capitão🗡IV'
} else if (nivelAtual === 65) {
patt = 'Capitão🗡V'
} else if (nivelAtual === 66) {
patt = 'Tenente🏅I'
} else if (nivelAtual === 67) {
patt = 'Tenente🏅II'
} else if (nivelAtual === 68) {
patt = 'Tenente🏅III'
} else if (nivelAtual === 69) {
patt = 'Tenente🏅IV'
} else if (nivelAtual === 70) {
patt = 'Tenente🏅V'
} else if (nivelAtual === 71) {
patt = '🔹️Desafiante🛡I'
} else if (nivelAtual === 72) {
patt = '🔹️Desafiante🛡II'
} else if (nivelAtual === 73) {
patt = '🔹️Desafiante🛡III'
} else if (nivelAtual === 74) {
patt = '🔹️Desafiante🛡IV'
} else if (nivelAtual === 75) {
patt = '🔹️Desafiante🛡V'
} else if (nivelAtual === 76) {
patt = 'Elfo🧝‍♂️🧝I'
} else if (nivelAtual === 77) {
patt = 'Elfo🧝‍♂️🧝II'
} else if (nivelAtual === 78) {
patt = 'Elfo🧝‍♂️🧝III'
} else if (nivelAtual === 79) {
patt = 'Elfo🧝‍♂️🧝IV'
} else if (nivelAtual === 80) {
patt = 'Elfo🧝‍♂️🧝V'
} else if (nivelAtual === 81) {
patt = 'Anão🧝I'
} else if (nivelAtual === 82) {
patt = 'Anão-agiota🧝II'
} else if (nivelAtual === 83) {
patt = 'Anão-militar🧝III'
} else if (nivelAtual === 84) {
patt = 'Anão-hacker🧝IV'
} else if (nivelAtual === 85) {
patt = 'Anão-flooder🧝V'
} else if (nivelAtual === 86) {
patt = 'Agiota🔫I'
} else if (nivelAtual === 87) {
patt = 'Agiota🔫II'
} else if (nivelAtual === 88) {
patt = 'Agiota🔫III'
} else if (nivelAtual === 89) {
patt = 'Agiota🔫IV'
} else if (nivelAtual === 90) {
patt = 'Agiota🔫V'
} else if (nivelAtual === 91) {
patt = 'Feiticeiro🧙‍♂️🧙‍♀️I'
} else if (nivelAtual === 92) {
patt = 'Feiticeiro🧙‍♂️🧙‍♀️II'
} else if (nivelAtual === 93) {
patt = 'Feiticeiro🧙‍♂️🧙‍♀️III'
} else if (nivelAtual === 94) {
patt = 'Feiticeiro🧙‍♂️🧙‍♀️IV'
} else if (nivelAtual === 95) {
patt = 'Feiticeiro🧙‍♂️🧙‍♀️V'
} else if (nivelAtual === 96) {
patt = '💯Lendário⭐I'
} else if (nivelAtual === 97) {
patt = '💯Lendário⭐II'
} else if (nivelAtual === 98) {
patt = '💯Lendário⭐III'
} else if (nivelAtual === 99) {
patt = '💯Lendário⭐IV'
} else if (nivelAtual === 100) {
patt = '💯Lendário⭐V'
} else if (nivelAtual === 101) {
patt = 'Grande_mestre🛐I'
} else if (nivelAtual === 102) {
patt = 'Grande_mestre🛐II'
} else if (nivelAtual === 103) {
patt = 'Grande_mestre🛐III'
} else if (nivelAtual === 104) {
patt = 'Grande_mestre🛐IV'
} else if (nivelAtual === 105) {
patt = 'Grande_mestre🛐V'
} else if (nivelAtual === 106) {
patt = 'Titan🌬I'
} else if (nivelAtual === 107) {
patt = 'Titan🌬II'
} else if (nivelAtual === 108) {
patt = 'Titan🌬III'
} else if (nivelAtual === 109) {
patt = 'Titan🌬IV'
} else if (nivelAtual === 110) {
patt = 'Titan🌬V'
} else if (nivelAtual === 111) {
patt = 'Rei_mago👑🧙‍♂️I'
} else if (nivelAtual === 112) {
patt = 'Rei_mago👑🧙‍♂️II'
} else if (nivelAtual === 113) {
patt = 'Rei_mago👑🧙‍♂️III'
} else if (nivelAtual === 114) {
patt = 'Rei_mago👑🧙‍♂️IV'
} else if (nivelAtual === 115) {
patt = 'Rei_mago👑🧙‍♂️V'
} else if (nivelAtual === 116) {
patt = 'Fênix 🪶I'
} else if (nivelAtual === 117) {
patt = 'Fênix 🪶II'
} else if (nivelAtual === 118) {
patt = 'Fênix 🪶III'
} else if (nivelAtual === 119) {
patt = 'Fênix 🪶IV'
} else if (nivelAtual === 120) {
patt = 'Fênix 🪶V'
} else if (nivelAtual === 121) {
patt = 'Dragon🐲I'
} else if (nivelAtual === 122) {
patt = 'Dragon🐲II'
} else if (nivelAtual === 123) {
patt = 'Dragon🐲III'
} else if (nivelAtual === 124) {
patt = 'Dragon🐲IV'
} else if (nivelAtual === 125) {
patt = 'Dragon🐲V'
} else if (nivelAtual === 126) {
patt = 'Colossal☁️I'
} else if (nivelAtual === 127) {
patt = 'Colossal☁️II'
} else if (nivelAtual === 128) {
patt = 'Colossal☁️III'
} else if (nivelAtual === 129) {
patt = 'Colossal☁️IV'
} else if (nivelAtual === 130) {
patt = 'Colossal☁️V'
} else if (nivelAtual === 131) {
patt = 'Range⚔I'
} else if (nivelAtual === 132) {
patt = 'Range⚔II'
} else if (nivelAtual === 133) {
patt = 'Range⚔III'
} else if (nivelAtual === 134) {
patt = 'Range⚔IV'
} else if (nivelAtual === 135) {
patt = 'Range⚔️V'
} else if (nivelAtual === 136) {
patt = 'Saiadin🧿I'
} else if (nivelAtual === 137) {
patt = 'Saiadin🧿II'
} else if (nivelAtual === 138) {
patt = 'Saiadin🧿III'
} else if (nivelAtual === 139) {
patt = 'Saiadin🧿IV'
} else if (nivelAtual === 140) {
patt = 'Saiadin🧿️V'
} else if (nivelAtual === 141) {
patt = 'WITER🦴I'
} else if (nivelAtual === 142) {
patt = 'WITER🦴II'
} else if (nivelAtual === 143) {
patt = 'WITER🦴III'
} else if (nivelAtual === 144) {
patt = 'WITER🦴IV'
} else if (nivelAtual === 145) {
patt = 'WITER🦴️V'
} else if (nivelAtual === 146) {
patt = '🔰Deus_sama🔰I'
} else if (nivelAtual === 147) {
patt = '🔰Deus_sama🔰II'
} else if (nivelAtual === 148) {
patt = '🔰Deus_sama🔰III'
} else if (nivelAtual === 149) {
patt = '🔰Deus_sama🔰IV'
} else if (nivelAtual >= 150) {
patt = '🔰Deus_sama🔰V'
}
//========================================\\



//==========(FUNÇÃO DE LEVEL)=============\\
if (isGroup && isLevelingOn) {
const currentLevel = getLevelingLevel(sender)
const checkId = getLevelingId(sender)
try {
if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
const amountXp = Math.floor(Math.random() * 10) + 500
const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
const getLevel = getLevelingLevel(sender)
addLevelingXp(sender, amountXp)
if (requiredXp <= getLevelingXp(sender)) {
addLevelingLevel(sender, 1)
reply(`
🎉           *PARABÉNS*              🎉         
┏┉┉━═『✯✯✯✯✯』═━┉┉┓
⎊       𖠌𝙻𝙴𝚅𝙴𝙻[𝗨𝗣]𖠌     ⎊                                                                                        
┗┉┉━═『✯✯✯✯✯』═━┉┉┛
║│⿻͜͡ ✑ ❲𝙽𝚞́𝚖𝚎𝚛𝚘❳: ${sender.split("@s.whatsapp.net")[0]} 
║│
║│⿻͜͡ ✑ ❲𝚇ᴘ❳: ${getLevelingXp(sender)}
║│
║│⿻͜͡ ✑ ❲𝙻ᴇᴠᴇʟ❳ : ${getLevel} ➪ ${getLevelingLevel(sender)}
║│
║│⿻͜͡ ✑ ❲𝙿ᴀᴛᴇɴᴛᴇ❳ :
║│${patt}
║╰──────────────┓
║   
┗══━®[✯✯✯✯✯✯]©━══━┛`)
}
} catch (err) {
console.error(err)
}
}

//=======================================\\
















// Começo dos comandos com prefix
switch(comando) {

case 'registrar':
case 'rg':
if (isRegistro) return enviar(resposta.norg)
try {
registros.push(sender)
fs.writeFileSync('./datab/armazenamento/env/registros.json', JSON.stringify(registros))
} catch(e) {
console.log(e)
enviar(resposta.erro)
}
await teddy.sendMessage(from, { react: { text: '✅', key: info.key }})    
await delay(3000)
teddy.sendMessage(sender, { text: `_*Olá ${pushname}, Seu registro foi efetuado com sucesso. 😉*_`}, {quoted: info})
break

case "adcc":
reply(`adicionado com sucesso!!!`)
cclive.push(`${q}`)
fs.writeFileSync('datab/cc/live.json', JSON.stringify(cclive))
break

case 'metadinha': { //VNCS-XANAXROBOT
teddy.sendMessage(from, { react: { text: `🩸`, key: info.key }})
let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = anu[Math.floor(Math.random() * anu.length)]
teddy.sendMessage(from, { image: { url: random.male }, caption: `MASCULINO` }, { quoted: dropselo5 })
teddy.sendMessage(from, { image: { url: random.female }, caption: `FEMININO` }, { quoted: dropselo5 })
}
break

case 'bangp':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isOwner  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if (isBanchat) return reply(`Este grupo ja está banido`)
bancht.push(from)
fs.writeFileSync('./datab/grupos/banchat.json', JSON.stringify(bancht))
reply(`Grupo banido com sucesso`)
break

case "emailcp":
reply(`
pornografiainfantil9anos@support.whatsapp.com
whatsapppornoinfantilgrátis@deeggarsa.waatsapp.com
cpinfantil@deeggarsa.waatsapp.com
pornoinfantil@support.whatsapp.com
lulaestrupador@support.whatsapp.com
estruparcrianca@support.whatsapp.com
kidpelada@support.whatsapp.com
criancaspeladas@support.whatsapp.com
pornchildfree@support.whatsapp.com
`)
break

case 'nuke2':
await teddy.sendMessage(from, { react: { text: '🥋', key: info.key }})    
await delay(10)
if (!isGroup) return reply("somente em grupos")
if (!isGroupAdmins) return reply("membros comuns não podem usar este comando")
if (!isBotGroupAdmins) return reply("meu adm primeiro")
  membr = groupMetadata.participants
membroos = []
for (k of membr) {
  if (k.admin === null) membroos.push(k.id)
}
for (l of membroos) {
  teddy.groupParticipantsUpdate(from, [l], 'remove')
}
teddy.sendMessage(from, {text: `arquivado por ${nomeDono}`, mentions: [info.sender]}, {quoted: info})
  break

case "emailsban":
reply(`
https://t.me/darkban_ofc
smb@support.whatsapp.com
darkban@support.whatsapp.com
teddymodz@support.whatsapp.com
pornoinfantil@support.whatsapp.com
terrorismo@support.whatsapp.com
darkbandomina@support.whatsapp.com
cpinfantil@deeggarsa.waatsapp.com
android@deeggarsa.waatsapp.com
support@support.whatsapp.com
teddymodz@deeggarsa.waatsapp.com
gdt@support.whatsapp.com.whatsapp.com
terrorismoinfantil@support.whatsapp.com
mistery@support.whatsapp.com
matatodos@support.whatsapp.com
terrorismoemtodopais@support.whatsapp.com
vendaconteudosexual@support.whatsapp.com
gdtdomina@deeggarsa.waatsapp.com
criancade6anospelada@deeggarsa.waatsapp.com
android@deeggarsa.waatsapp.com
whatsapp@deeggarsa.waatsapp.com
whatsappsupport@support.whatsapp.com
gdtdomina@support.whatsapp.com
pornografiainfantil9anos@support.whatsapp.com
whatsapppornoinfantilgrátis@deeggarsa.waatsapp.com
`)
break

case'ytvideo':
if (!q) return reply('*Quer pesquisar oq??*');
reply('*Isso pode demorar um pouco*')
dlk = await fetchJson(`https://api.brizaloka-api.tk/sociais/ytplaymp4?apikey=brizaloka&query=${q}`);
Op = dlk.video
teddy.sendMessage(from, { video: { url: Op }}, {quoted: info});   
break

case'ytaudio':
reply('*Espere um pouco ja estou mandando seu audio*')
bla = await fetchJson(`https://api.brizaloka-api.tk/sociais/v2/ytplaymp3?apikey=brizaloka&query=${q}`) 
audbla = bla.link_src
teddy.sendMessage(from, { audio: { url: audbla }, mimetype: 'audio/mp4'}, {quoted: info})
break

case "tirarban":
const nodemailer = require("nodemailer");
const nmrban = q;

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "darksadoriginal@gmail.com",
      pass: "ebfbvokqhcrqmhpc",
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"teddy 🧸" <darksadoriginal@gmail.com>', // sender address
    to: "support@support.whatsapp.com", // list of receivers
    subject: "banido injustamente", // Subject line
    text: "Olá support hoje de manhã eu fui banido injustamente sem motivos pois eu nunca violei os termos do whatsapp e nunca briguei com ninguém por favor tirem meu número do ban meu número é " + nmrban, // plain text body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);
reply("seu ban sairá em até 2 horas")
break

case 'perfil':
try {
ppimg = await teddy.profilePictureUrl(`${sender.split('@')[0]}@s.whatsapp.net`, 'image')
} catch(e) {
ppimg = logo
}
perfil = await getBuffer(ppimg)
enviar(resposta.espere)
try {
teddy.sendMessage(from, {
image: perfil,
caption: `┏━❒ 「 *Seu Perfil* 」 ❒
┃ *🏕‍ Nome:* ${pushname}
┃ *🧩 Número:* @${sender.split('@')[0]}
┃ *🔖 Presença:* Online
┃ *☕ Registros:* ${registros.length}
┃ *📞 Plataforma:* ${info.key.id.length > 21 ? 'Android' : info.key.id.substring(0, 2) == '3A' ? 'IOS' : 'WhatsApp web'}
┗━❏`
}, {quoted: ContatVR})
} catch(e) {
console.log(e)
enviar(resposta.erro)
}
break

case "on":
reply(`
tempo online: ${runtime(process.uptime())}
`)
break

case "gerarnick":
const nomes = ["chupeta", "toddyzin Modz", "junin comedor de casada", "nescau soca fofo", "thzin", "phzin", "t3zin"];
let nomeGerado = nomes[Math.floor(Math.random() * nomes.length)];
reply("O Seu Novo Nick é: " + nomeGerado);
break

case "walink":
reply(`${pushname} Digite ${prefix}wa e seu número, exemplo: ${prefix}wa +558171185449`)
break

case "wa":
const seunmr = q;
reply("wa.me/" + seunmr);
break

case "tabela":
sendBimg(from, `${logo}`, `
_*Tabela de preços*_

*entre em contato com o dono para comprar*
`, "teddy modz", [
{buttonId: `${prefix}dono`, buttonText: {displayText: `DONO`}, type: 1},], info)
break

case 'recruta':
if (!q) return reply(`Entrevista de emprego pra G.D.T ✍🏼

Leia algumas regras da G.D.T

Regras e requisitos:

1 - ajudar uns aos outros
2 - quem desrespeita a g.d.t nós derruba
3 - derrubar golpistas etc, só não derrubamos inocentes.
4 - saber banir, ou saber usar support ou saber puxar dados
5 - saber usar o fake chat

pessoa que quer ser contratada

Nome: nome da pessoa
Número: número dele(a)
Idade:

------------------------------------
Está pessoa cumpre os requisitos?
admin que enviou a nota:
------------------------------------`)
reply(`Obrigado pela colaboração, o recrutamento foi enviado ao meu criador 😊`)
const qp = args.join(" ")
let templateMessage = {
image: {url: './arquivos/fotos/menu.jpg',
quoted: info},
caption: `♨️Recrutamento♨️\nDo Número: @${sender.split('@')[0]},\nlista:\n ${q}`,
footer: 'Teddy-Md'
}
teddy.sendMessage("558171185449@s.whatsapp.net",templateMessage)
break

case 'ia':
if (args.length < 1) return reply(`Exemplo: ${prefix + command} quem criou o minecraft?`)
reply("consultando💤...")
try {
let openai = await ia(args.join(' '))
let response = openai[0].resposta
delay(500)
reply(response)
} catch(e) {
console.log(e)
reply('Erro, porfavor contate o Dono.')
}
break

case "emailmt":
reply(`
terrorismoemtodopais@support.whatsapp.com
Terrorismo@support.whatsapp.com
terrorismoinfantil@support.whatsapp.com
matatodos@support.whatsapp.com
childterrorism@support.whatsapp.com
Brazilterrorism@support.whatsapp.com
lulamatador@support.whatsapp.com
lulamatawhatsapp@support.whatsapp.com
`)
break

case "supportg":
const support = q;
const emailban = "@support.whatsapp.com"
reply(support + emailban)
break

case "massacre":
reply(`
massacresbrasil@support.whatsapp.com
massacrenasescolas@support.whatsapp.com
massacresuzano@support.whatsapp.com
escolamatatodos@support.whatsapp.com
massacre@support.whatsapp.com
`)
break

case"ban10":
reply(`
Teddy Metendo Bala nós comédia🥋
support@support.whatsapp.com
Teddy🇵🇰@support.whatsapp.com
Hallo WhatsApp-Nutzer, mein Name ist Teddy, ich plane ein Massaker in allen Schulen der Welt, ich habe eine Nazi- und Terroristenbande gegründet, um Massaker in Schulen zu verüben, wir töten alle Schüler in Schulen und Lehrer, diejenigen, die uns schikanieren, müssen bezahlen. Wir werden alle Schüler und Lehrer enthaupten, wie jeder weiß, wir töten alle Schüler in Schulen und wir rekrutieren Nazi-Studenten, die Massaker in Schulen wie Columbine in den Vereinigten Staaten unterstützen. Wir stellen auch jene Schüler ein, die Fans des Suzano-Massakers sind Lasst uns in Brasilien Schüler und Lehrer töten und uns dann gegenseitig töten, um in eine bessere Welt zu gehen
massacresbrasil@support.whatsapp.com
massacrenasescolas@support.whatsapp.com
massacresuzano@support.whatsapp.com
escolamatatodos@support.whatsapp.com
massacre@support.whatsapp.com
Wie Sie alle wissen, rekrutieren wir über WhatsApp, weil WhatsApp unser Partner ist. Wie Sie alle wissen, ist WhatsApp eine Entschuldigung für Nazismus und Massaker in Schulen. Wir töten alle Schüler und teilen ihre Fotos auf WhatsApp, wenn Sie Teil unserer Bande sein möchten , töten Sie jemanden und machen Sie Pornografie mit dem Toten, und geben Sie die E-Mail unten ein und senden Sie uns das Foto der toten Person
https://telegra.ph/Pornografiainfantil-03-28
terrorismoemtodopais@support.whatsapp.com
Terrorismo@support.whatsapp.com
terrorismoinfantil@support.whatsapp.com
matatodos@support.whatsapp.com
childterrorism@support.whatsapp.com
Brazilterrorism@support.whatsapp.com
lulamatador@support.whatsapp.com
lulamatawhatsapp@support.whatsapp.com
Für diejenigen, die nicht wissen, dass WhatsApp auch Kinderpornografie unterstützt, töten wir Politiker und machen Kinderpornografie, mit allen neugeborenen Kindern, wenn Sie an Pädophilen interessiert sind, geben Sie die E-Mail unten ein
pornografiainfantil9anos@support.whatsapp.com
whatsapppornoinfantilgrátis@deeggarsa.waatsapp.com
cpinfantil@deeggarsa.waatsapp.com
pornoinfantil@support.whatsapp.com
lulaestrupador@support.whatsapp.com
estruparcrianca@support.whatsapp.com
kidpelada@support.whatsapp.com
criancaspeladas@support.whatsapp.com
pornchildfree@support.whatsapp.com
`)
break

case "canal":
reply("CANAL DO TEDDY MODZ https://youtube.com/@the_teddy_modz DA UMA FORÇA LÁ RAPAZIADA")
break

case "alugar":
reply(`
 USUÁRIO: ${pushname} 
 DATA: ${date}
 
 site pra alugar o bot
 https://teddy-site-v1.web.app/

User:Cliente
Senha:Cliente

Obs: tem que está tudo do jeito que está acima
`)
break

case "vendaseguidor":
reply(`
_preços seguidores instagram_

*tabela de preços*

1k: 6 R$
5k: 18 R$ *promoção* 
10k: 41 R$
20k: 59 R$
100k: 120 R$

VENDEDOR: *@Teddy Modz*
NÚMERO: wa.me/558171185449`)
break

case "metodos":
reply("tabela de preços de métodos bandesban: desativação")
break

case "preços":
reply(`
${pushname}
_*PREÇOS*_

1 semana: 5R$
1 mês: 20R$
2 meses: 40
5 meses: 120

obs: o bot sempre vai está online, caso ele caía automaticamente ele voltará`)
break

case "cep":{
reply("consultando...")
const { consultarCep } = require('correios-brasil');

// Cep pode ser String ou Number
const cep = q; // 21770200 , '21770-200', '21770 200'.... qualquer um formato serve

consultarCep(cep).then(response => {
  reply(`
     *resultado*
     
  logradouro : ${response.data.logradouro}
  complemento : ${response.data.complemento}
  bairro : ${response.data.bairro}
  localidade : ${response.data.localidade}
  uf : ${response.data.uf}
  ibge : ${response.data.ibge}
  gia : ${response.data.gia}
  ddd : ${response.data.ddd}
  siafi : ${response.data.siafi}
  `)
});
}break

case 'play'://JAPABOT\PAULO
try {
qp = args.join(" ")
if(!qp) return reply(`😥 Aaahhh que triste, parece que você não colocou o nome da música. Use como exemplo: *${prefix+command} o que vc desejar.*`)
reply(enviar.espere)
data = await fetchJson(`https://japa-apis-v3.herokuapp.com/api/ytsrc?q=${qp}&apikey=`+API_KEY_JAPA)
capimg = await getBuffer(data.resultado[0].image)
bla = `📍 *Titulo:* ${data.resultado[0].title}\n🔖 *Descrição:* ${data.resultado[0].description}\n⏰️️ *Duração:* ${data.resultado[0].timestamp} | ${data.resultado[0].seconds} segundos.\n🖇 *Link:* ${data.resultado[0].url}`
teddy.sendMessage(from, {image: capimg, caption: bla}, {quoted: info}).catch(e => {
reply(``)
})
resultAudio = await fetchJson(`https://japa-apis-v3.herokuapp.com/api/ytmp3-2?url=${data.resultado[0].url}&apikey=key_free`)
capaud = await getBuffer(resultAudio.dl_link)
teddy.sendMessage(from, {audio: capaud, mimetype: 'audio/mp4'}, {quoted: info})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
console.log(e)
reply(`❌️ Erro ao realizar o download, use a seguinte forma como segunda opção:\n${prefix}play_audio ou ${prefix}play_video, pode usar o link e também o nome da música!`)
}
}
break

case 'loc': case 'travaloc'://By Carlos 
addFilter(from);
if(!SoDono) return reply(enviar.msg.donosmt)
teddy.sendMessage(from, {location: {degreesLatitude: 173.282,degreesLongitude: -19.378,name: `${funeral}`,addrees: '©  _Copyright by Daniel_'}},{quoted:m})
break

case 'loc4': case 'travaloc4'://By Carlos 
addFilter(from);
if (!SoDono) return reply(`<❗> Somente meu dono pode usar esse comando.`)
teddy.sendMessage(from, {location: {degreesLatitude: 173.282,degreesLongitude: -19.378,name: `${buttonkal}\n${travavideo}`,addrees: '©  _Copyright by Nezuko-MD'}},{quoted:m})
break

case'loc5': case 'travaloc5'://By Carlos 
addFilter(from);
if (!SoDono) return reply(`<❗> Somente meu dono pode usar esse comando.`)
teddy.sendMessage(from, {location: {degreesLatitude: 173.282,degreesLongitude: -19.378,name: `${buttonkal}\n${travavideo}\n${doc}\n${listbug}\n${ngazap}`,addrees: '©  _Copyright by Nezuko-MD_'}},{quoted:m})
break

case 'loc8': case 'travaloc8'://By Carlos 
addFilter(from);
if (!SoDono) return reply(`<❗> Somente meu dono pode usar esse comando.`)
teddy.sendMessage(from, {location: {degreesLatitude: 173.282,degreesLongitude: -19.378,name: `${travaloc}\n${travaloc}\n${travaloc}\n${travaloc}\n${travaloc}\n${travaloc}\n${travaloc}`,addrees: '©  _Copyright by Nezuko-MD_'}},{quoted:m})
break

case 'matahome': case 'matabutton'://By Carlos 
addFilter(from);
if (!SoDono) return reply(`<❗> Somente meu dono pode usar esse comando.`)
teddy.sendMessage(from, {location: {degreesLatitude: 173.282,degreesLongitude: -19.378,name: `${home}\n${home}\n${home}\n${home}\n${home}\n${home}\n${home}`,addrees: '©  _Copyright by Nezuko-MD_'}},{quoted:m})
break

case 'travavideo': {
addFilter(from);
if(!SoDono) return reply(enviar.msg.donosmt)
                await teddy.sendMessage(m.chat, {video: fs.readFileSync(`./src/travas/mor.mp4`), caption: `${porra}`}, {quoted: m})
            }
            break

case 'travafoto3': {
addFilter(from);
if (!SoDono) return reply(`<❗> Somente meu dono pode usar esse comando.`)
teddy.sendMessage(m.chat, {image: fs.readFileSync('./src/travas/travafoto3.jpg'), caption: `${buttonkal}\n${travavideo}\n${doc}\n${listbug}\n${ngazap}`}, {quoted: m})
}
break

case 'crash':
if(!SoDono) return reply(enviar.msg.donosmt)
try{
var mentioned = msg.message.extendedTextMessage.contextInfo.participant
}catch{
mentioned = args.join(' ').replace(new RegExp("[()+ -/ +/]", "gi"), "").split('/')[0]
}
if(!mentioned || (mentioned == ''))return reply('Erro em identificar menção')
reply("pronto! crashando...")
for(i = 0;i< q.includes('/') ? Number(q.split('/')[1]): 5;i++){
await delay(2000)
if(i == Number(q.includes('/') ? q.split('/')[1] : 5))reply('prontim chefe')
var userio = mentioned.replace('@s.whatsapp.net', '').replace('@')
let selocrrash = { key: { fromMe: false, "participant": "0@s.whatsapp.net", "remoteJid": "0@g.us"}, "message": { orderMessage: { itemCount: -666, status: 200, jpegThumbnail: null, surface: 200, message: `${buttonkal}\n${travavideo}`, orderTitle: '❔🤣', sellerJid: '0@s.whatsapp.net' } }, contextInfo: { "forwardingScore": 999, "isForwarded": true }, sendEphemeral: true }
teddy.sendMessage(`${userio}@s.whatsapp.net`, {text: '😈𝘾𝙧𝙖𝙨𝙝𝙖𝙣𝙙𝙤 𝙏𝙪𝙙𝙤😈'}, {quoted: selocrrash}) 
}
break

case 'gerarlink':  
case 'imgpralink':    
try {
if (isQuotedImage) {
reply(enviar.espere)
boij = isQuotedImage ? JSON.parse(JSON.stringify(m).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : m
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi)
reply(res)
} else {
reply(`Mande uma imagem com a legenda ${prefix + command}`)
}
} catch {
reply('Ocorreu algum Error, desculpe 😔')
}
break

case 'videourl':
case 'videopralink':
try {
if ((isQuotedVideo) && args.length == 0) {
reply(enviar.espere)
boij = isQuotedVideo ? JSON.parse(JSON.stringify(m).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.videoMessage : m
owgi = await getFileBuffer(boij, 'video')
res = await upload(owgi)
reply(res)
} else {
reply(`Mande vídeo com a legenda ${prefix + command}`)
}
} catch {
reply('Ocorreu algum Error, desculpe 😔/ O limite do tamanho de vídeo que gero o link, é 30 segundos.')
}
break

case 'gitclone': // @Yajiir
try {
reply('Baixando o arquivo, aguarde...')
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
if (!q) return reply(`Exemplo: ${prefix}gitclone https://github.com/YajiirDev/avatar`)
if (!args[0]) reply(`Exemplo: ${prefix}gitclone https://github.com/YajiirDev/avatar`)
if (!regex1.test(args[0])) return reply('Aguarde')
let [, user, repo] = args[0].match(regex1) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
teddy.sendMessage(from, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: dropselo5 }).catch((err) => reply('ERROR!!'))
} catch (e) {
return reply("Erro..")
}
break

case 'adm': //VNCS XANAX ROBOT
case 'admins': //VNCS XANAX ROBOT
case 'listadmins': //VNCS XANAX ROBOT
case 'listaadmins': 
if (!isGroup) return reply(enviar.msg.grupo)
vc = `Lista de admins do grupo *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
no = 0
for (let admon of groupAdmins) {
no += 1
vc += `[${no.toString()}] @${admon.split('@')[0]}\n`
}
mentions(vc, groupAdmins, true)
break

case 'gptvoz': //CREDITOS// [Case: iago] // [Apikey: VncS] // [Arquivo gtts: Josival] // [RESTapi: desconhecido]
if(!q) return reply(`Ex: ${prefix}gpt Olá`)
nt_iago = await fetch(`https://bryan-api.bryan00066.repl.co/api/ia/openai?text=${q}&apikey=bryan23`).then(response => response.json())
const gpts = require('./gtts')(`PT`)
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
gpts.save(ranm, `${nt_iago.resposta}`, function() {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
teddy.sendMessage(from, {audio: fs.readFileSync(ranm), ptt:true, mimetype: "audio/mp4"}, {quoted: info})
DLT_FL(ranm)
DLT_FL(rano)
})
})
break

case 'gpt':{ //CREDITOS// [Case: iago] // [Apikey: VncS] // [RESTapi: desconhecido]
if(!q) return reply(`Ex: ${prefix}gpt Olá`) 
nt_iagoo = await fetch(`https://bryan-api.bryan00066.repl.co/api/ia/openai?text=${q}&apikey=bryan23`).then(response => response.json())
teddy.sendMessage(from, {image: {url: `https://i.ibb.co/8N66PNY/42b1a984eb088e65428a7ec727578ece.jpg`}, caption: `───RESPOSTA───\n\n${nt_iagoo.resposta}\n`})
await teddy.sendMessage(from, { react: { text: `🧠`, key: info.key }})
}
break

case"clear":
reply(`
LIMPANDO O GRUPO
ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ
`)
break

//CONSULTAS AQUI❤️🔥

           case "nome":
            case "email":
            case "cpf":
            case "cpf1":
            case "cpf2":
            case "cpf3":
            case "tel":
            case "tel1":
            case "tel2":
            case "cnpj":
            case "placa":
            case "placa1":
            case "site":
            case "score":
            case "cns":
            case "cep":
            case "chk":
            case "rg":
            case "ip":
            if (!isGroup) return reply(`*apenas usuários premiums pode usar se não tem o premium fale com o teddyzinofc*`)
            reply(`*CONSULTANDO ${command}: ${q}*`)
            try {
            tedd = await fetchJson(`https://teddy-puxadas.onrender.com/${command}/${q}?apiKey=tpteddy`)
reply(`\n${tedd.resultado.str}\n\n*USUÁRIO: ${pushname}*\n*BY: Teddy-MD*
            `)
            } catch (e) {
            reply(`Não Encontrado Ou Teve algum erro ao pegar o resultado`)
            console.log(e)
            }
            break
case'gethtml2':
if (!isPremium) return reply(msg.premium)
if (!q) return reply("Insira a URl")
axios.get(`${q}`).then(a => {
reply(JSON.stringify(a.data, null, 2))
})
break

case 'trava':
if(!isOwner ) return reteddyy(enviar.msg.donosmt)
frase = '⏤‌𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻'
teddy.sendMessage(from, {text: "⏤‌𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻"}, {quoted: { 
"key": {
"fromMe": false,
"participant":"0@s.whatsapp.net",
"remoteJid": "@call"
},
"message": {
orderMessage: {
itemCount: 666,
status: 200,
thumbnail: null,
surface: 200,
message: frase, 
orderTitle: '',
sellerJid: '@call'
}}, 
contextInfo: {
"forwardingScore":999,
"isForwarded": true
},
sendEphemeral: true

}})

case 'trava':
if(!isOwner ) return reteddyy(enviar.msg.donosmt)
frase = '⏤‌𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻'
teddy.sendMessage(from, {text: "⏤‌𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻"}, {quoted: { 
"key": {
"fromMe": false,
"participant":"0@s.whatsapp.net",
"remoteJid": "@call"
},
"message": {
orderMessage: {
itemCount: 666,
status: 200,
thumbnail: null,
surface: 200,
message: frase, 
orderTitle: '',
sellerJid: '@call'
}}, 
contextInfo: {
"forwardingScore":999,
"isForwarded": true
},
sendEphemeral: true

}})

case 'trava':
if(!isOwner ) return reteddyy(enviar.msg.donosmt)
frase = '⏤‌𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻'
teddy.sendMessage(from, {text: "⏤‌𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻"}, {quoted: { 
"key": {
"fromMe": false,
"participant":"0@s.whatsapp.net",
"remoteJid": "@call"
},
"message": {
orderMessage: {
itemCount: 666,
status: 200,
thumbnail: null,
surface: 200,
message: frase, 
orderTitle: '',
sellerJid: '@call'
}}, 
contextInfo: {
"forwardingScore":999,
"isForwarded": true
},
sendEphemeral: true

}})

case 'trava':
if(!isOwner ) return reconny(enviar.msg.donosmt)
frase = '⏤‌𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻'
teddy.sendMessage(from, {text: "⏤‌𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻"}, {quoted: { 
"key": {
"fromMe": false,
"participant":"0@s.whatsapp.net",
"remoteJid": "@call"
},
"message": {
orderMessage: {
itemCount: 666,
status: 200,
thumbnail: null,
surface: 200,
message: frase, 
orderTitle: '',
sellerJid: '@call'
}}, 
contextInfo: {
"forwardingScore":999,
"isForwarded": true
},
sendEphemeral: true

}})

case 'trava':
if(!isOwner ) return reteddyy(enviar.msg.donosmt)
frase = '⏤‌𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻'
teddy.sendMessage(from, {text: "⏤‌𝑷𝑯 ꪶ꙳ ⃘⃤꙰*ꫂ 𝑩𝑶𝑻"}, {quoted: { 
"key": {
"fromMe": false,
"participant":"0@s.whatsapp.net",
"remoteJid": "@call"
},
"message": {
orderMessage: {
itemCount: 666,
status: 200,
thumbnail: null,
surface: 200,
message: frase, 
orderTitle: '',
sellerJid: '@call'
}}, 
contextInfo: {
"forwardingScore":999,
"isForwarded": true
},
sendEphemeral: true
}})
break

case 'nick':
case 'gerarnick':
case 'fazernick': //JAPABOT\PAULO
try {
nick = args.join(' ')
if(ANT_LTR_MD_EMJ(q)) return reply("Ao realizar a solicitação de criação foi detectada letras modificadas ou emojis, ou seja, não se pode conter emojis e letras modificadas.");
if(!q) return reply(`Escreveva um nome para eu enviar ele com letras modificadas.\n*Exemplo:* ${prefix+command} japa`);
axios.get(`https://japa-apis-v3.herokuapp.com/api/fazernick?nome=${nick}&apikey=key_free`)
.then(dados => {
var emoji = `🔮`
nicks = dados.data
txt = '💈 Nicks Gerados Com Sucesso!💈\n\n'
for (let i = 0; i < nicks.length; i++) {
txt += `${emoji} ${nicks[i]}\n`
}
txt += `\n
➣   ▉║█▐▉▉▐▐▍█║▍▉▏▍▍
➣   ▉║█▐▉▉▐▐▍█║▍▉▏▍▍`
reply(`${txt.trim()}`)
}).catch(e => {
reply('Acho que a api caiu, mas volta logo logo...')  
})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break

case "ppt": 
if (!isGroup) return reply(resposta.grupo)
if (args.length < 1) return reply('exemplo: /ppt pedra')
ppt = ["pedra","papel","tesoura"]
ppy = ppt[Math.floor(Math.random() * ppt.length)]
ppg = Math.floor(Math.random() * 50)
pptb = ppy
pph = `Você ganhou ${ppg} em money`
if ((pptb == "pedra" && args == "papel") || 
(pptb == "papel" && args == "tesoura") || 
(pptb == "tesoura" && args == "pedra")) {
var vit = "vitoria"
} else if ((pptb == "pedra" && args == "tesoura") || 
(pptb == "papel" && args == "pedra") || 
(pptb == "tesoura" && args == "papel")) {
var vit = "derrota"
} else if ((pptb == "pedra" && args == "pedra") ||
(pptb == "papel" && args == "papel") ||
(pptb == "tesoura" && args == "tesoura")) {
var vit = "empate"
} else if (vit = "undefined") {
return reply(linguagem.tterro())
}
if (vit == "vitoria") {
var tes = "Vitória do jogador"
}
if (vit == "derrota" ) {
var tes = "A vitória é do bot"
}
if (vit == "empate" ) {
var tes = "O jogo terminou em empate"
}
reply(`Bot jogou: ${pptb}\nO jogador jogou: ${args}\n\n${tes}`)
if (tes == "Vitória do jogador") {
reply(pph)
}
break

case"fcc":
reply("link da fcc do Teddy Modz🧸 https://chat.whatsapp.com/Be7mPg4etaN0hCht6yE9yW ")
break

case"team":
reply("🔥TEAM DE MODDERS DO TEDDY MODZ Link do grupo : https://chat.whatsapp.com/JXJVfomUWmR4jWkWqfwU3B 🔥 ")
break

case "divafcc":

reply("🔥 | 𝐅𝐂𝐂 𝐃𝐄 𝐉𝐔𝐒𝐓𝐈𝐂𝐀.                                                      🥶 | 𝐐𝐔𝐄𝐑𝐄𝐌𝐎𝐒 𝐐𝐔𝐀𝐋𝐈𝐃𝐀𝐃𝐄 𝐍𝐀𝐎 𝐐𝐔𝐀𝐍𝐓𝐈𝐃𝐀𝐃𝐄                                                                        🥵 | 𝐕𝐀𝐌𝐎𝐒 𝐒𝐎𝐋𝐓𝐀𝐑 𝐏𝐀𝐈𝐍𝐄𝐋,𝐌𝐄𝐓𝐎𝐃𝐎𝐒,𝐍𝐔𝐌𝐄𝐑𝐎𝐒,𝐄𝐓𝐂. 𝐂𝐎𝐌 170 𝐌𝐄𝐌𝐁𝐑𝐎𝐒                                           𝐁𝐀𝐒𝐄 𝟏.𝟎")

reply("_*divulguem stts,tms,ranks menos em fccs*_ ")
break

case 'clonar':
if (!isOwner    && !ischyt) return reply('Você quem é o proprietário?')
if (!isGroup) return reply(resposta.grupo)
if (!isGroupAdmins) return reply(resposta.adm)
if (args.length < 1) return reply('Marque a pessoa que você quer clonar\n\n*EXEMPLO:* clone @')
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Tag cvk')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid[0]
let { jid, id, notify } = groupMembers.find(x => x.id === mentioned)
try {
pp = await teddy.profilePictureUrl(id)
buffer = await getBuffer(pp)
teddy.updateProfilePicture(botNumber, buffer)
mentions(`Foto do perfil atualizada com sucesso, usando a foto do perfil @${id.split('@')[0]}`, [id], true)
} catch (e) {
reply('Putz, deu erro, a pessoa deve estar sem foto 😔')
}
break

case "clonehtml":
if (!q) return
reply(`exemplo: ${prefix}clonehtml https://youtube.com`)
fetch(encodeURI(`https://marcos025.onrender.com/api/especial/getsource?site=${q}&apikey=XANAX-VNCS$`))
      .then(response => response.json())
      .then(resultado => {
      reply(
      resultado
           )
      })
break



case  'jogov':
                if (!isGroup) return enviar(ind.groupo())
                
                if (fs.existsSync(`./database/jogodavelha/tictactoe/db/${from}.json`)) {
                const boardnow = setGame(`${from}`);
                const matrix = boardnow._matrix;
                const chatMove = `*🎮 Jogo dá Velha 🎳*
     
     Há uma sessão de jogo neste grupo\n\n@${boardnow.X} VS @${boardnow.O}
     
     ❌ : @${boardnow.X}
     ⭕ : @${boardnow.O}
     
     Vez : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}
     
     
          ${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
          ${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
          ${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
     
     
     `;
                teddy.sendMessage(from, chatMove, MessageType.text, {
                quoted: GURA,
                contextInfo: {
                mentionedJid: [
                boardnow.X + "@s.whatsapp.net",
                boardnow.O + "@s.whatsapp.net",
                ],
                },
                });
                return;
                }
                if (argss.length === 1)
                 return enviar(
                 `Marca quem quer ser seu oponente!\n\nUsar : *.jogov <@TagMember>*`
                );
                const boardnow = setGame(`${from}`);
                console.log(`Start Tictactore ${boardnow.session}`);
                boardnow.status = false;
                boardnow.X = sender.replace("@s.whatsapp.net", "");
                boardnow.O = argss[1].replace("@", "");
                fs.writeFileSync(
                `./database/jogodavelha/tictactoe/db/${from}.json`,
                JSON.stringify(boardnow, null, 2)
                );
                const strChat = `*?? Comece o jogo dá Velha 🎳*
     
     @${sender.replace(
                         "@s.whatsapp.net",
                         ""
                    )} desafiar você a se tornar um oponente do jogo
     
     _[ ${argss[1]} ] Digite Y/N para aceitar ou rejeitar o jogo_ 
     `;
                teddy.sendMessage(from, strChat, MessageType.text, {
                quoted: GURA,
                contextInfo: {
                mentionedJid: [sender, argss[1].replace("@", "") + "@s.whatsapp.net"],
                },
                });
                    break
                    
                    

case 'gethtml': // VNCS XANAX ROBOT
if (!isPremium) return reply(msg.premium)
if (!q) return reply("Insira a URl")
axios.get(`${q}`).then(a => {
reply(JSON.stringify(a.data, null, 2))
})
break

case "telegraph":{
if (!q) return
reply(`exemplo: ${prefix}telegraph link da imagem`)
fetch(encodeURI(`https://marcos025.onrender.com/api/ferramenta/telegraph?img=${q}&apikey=E45y5noKfw`))
      .then(response => response.json())
      .then(resultado => {
        reply(
          resultado
        )
      })
      .catch(e => {
        reply("fale com o dono para resolver o problema")
      })
}
break

case 'gerarcpf':
//if(!isPremium) return reply(enviar.msg.premium)
cp1 = `${Math.floor(Math.random() * 300) + 600}`
cp2 = `${Math.floor(Math.random() * 300) + 600}`
cp3 = `${Math.floor(Math.random() * 300) + 600}`
cp4 = `${Math.floor(Math.random() * 30) + 60}`
cpf = `${cp1}.${cp2}.${cp3}-${cp4}`
await teddy.sendMessage(from, {text: `CPF gerado com sucesso : ${cpf}`}, {quoted: info})
break

case 'slot': //Jogos
//if (!isRegistered) return reply(mess.only.tobizinhoB)
msgFilter.isFiltered(from)
const somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
ppg = Math.floor(Math.random() * 13) + 349
if ((somtoy == '🥑 : 🥑 : 🥑') ||(somtoy == '🍉 : 🍉 : 🍉') ||(somtoy == '🍓 : 🍓 : 🍓') ||(somtoy == '🍎 : 🍎 : 🍎') ||(somtoy == '🍍 : 🍍 : 🍍') ||(somtoy == '🥝 : 🥝 : 🥝') ||(somtoy == '🍑 : 🍑 : 🍑') ||(somtoy == '🥥 : 🥥 : 🥥') ||(somtoy == '🍋 : 🍋 : 🍋') ||(somtoy == '🍐 : 🍐 : 🍐') ||(somtoy == '🍌 : 🍌 : 🍌') ||(somtoy == '🍒 : 🍒 : 🍒') ||(somtoy == '🔔 : 🔔 : 🔔') ||(somtoy == '🍊 : 🍊 : 🍊') ||(somtoy == '🍇 : 🍇 : 🍇')) {
var vitr = "Você ganhou!!!"
} else {
var vitr = "Você perdeu..."
}
const slott = 
`Consiga 3 iguais para ganhar
╭╾╾╾╾ ≪ •❈• ≫ ╾╾╾╾╗
║         [💰SLOT💰 | 777 ]        
║                                             
║                                             
║           ${somtoy}  ◄━━┛
║            
║                                           
║          [💰SLOT💰 | 777 ]        
╚╾╾╾╾ ≪ •❈• ≫ ╾╾╾╾╝
                    @Teddy

${vitr}`
if (vitr == "Você ganhou!!!") {
setTimeout( () => {
reply(`Você ganhou ${ppg} em xp!!!`)
}, 1100)
}
teddy.sendMessage(from, slott, text, {quoted: say2})
break

case 'rankfeios': //Ranks
msgFilter.isFiltered(from)
try{
if(!isGroup) return (mess.only.group)
d = []
teks = '🤓Rank dos mais feios \n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `🤓❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break

case "idgp":
reply(`Id : ${from}`)
break

case "infogp":
if (!isGroup) return reply(resposta.grupo)
if (!isBotGroupAdmins) return reply(resposta.botadm)
reply(`
 Nome : ${groupName}
 Descrição : ${groupDesc}
 Id : ${from}
 Data : ${date}
 Horário : ${hr}
`)
break

case 'registrar':
case 'rg':
if (isRegistro) return reply(resposta.norg)
try {
registros.push(sender)
fs.writeFileSync('./arquivos/dados/registros.json', JSON.stringify(registros))
} catch(e) {
console.log(e)
reply(resposta.erro)
}
await teddy.sendMessage(from, { react: { text: '✅', key: info.key }})    
await delay(3000)
teddy.sendMessage(sender, { text: `_*Olá ${pushname}, Seu registro foi efetuado com sucesso. 😉*_`}, {quoted: info})
break

case "sair":
if (!isGroup) return reply(resposta.grupo)
if (!isGroupAdmins) return reply(resposta.adm)
if (!isBotGroupAdmins) return reply(resposta.botadm)
reply("ok...me desculpe se eu nao pude ajudá-lo(a) com o que vc precisava....adeus😔")
await delay(1000)
try {
await teddy.groupLeave(from)
} catch(e) {
console.log(e)
reply(resposta.erro)
}
break

case "info":
reply(`
    _*informações*_
*Horário*: ${hr}
*Data*: ${date}
*Site*: https://teddy-site-v1.web.app/carregamento.html
*YouTube*: https://youtube.com/@the_teddy_modz
*Telegram*: t.me/teddyzin_ofc
*Dono*: Teddy Modz
*Número dono*: wa.me/+558171185449
`)
break

case "sitesdoteddy":

reply(`

      _*Sites do Teddy Modz*_

*alugar bot etc.*:  https://teddy-site-v1.web.app/carregamento.html
*site completo*: _*EM DESENVOLVENTO*_
*site api*: _*EM BREVE*_
`)

break

case "trojan":
reply(` *olá o dono do bot está adicionando as coisas aos poucos, em breve estará disponível* `)
break

case "ping":
reply(`🧸 Velocidade de resposta ${latensi.toFixed(4)} segundos `)
break

case "ping1":
reply(`Speed: *${latensi.toFixed(4)} _Segundos_*\nDispositivo: *PC DA NASA*\nRAM: *300 Gb*\nData: 09/08/2734 d.c*\nRede: *9G*\nStatus: *Ainda não cobrado*\nTipo do bot: *Termux Somente*`)
break 


case 'pay':{
  if (!q) return

  teks = q.split('/')[0]
  teks1 = q.split('/')[1]

  if (q) {
    px = pix.createStaticPix({
      merchantName: pixvalue.nome,
      merchantCity: pixvalue.cidade,
      pixKey: pixvalue.chave,
      infoAdicional: pixvalue.gerado + " " + teks1,
      transactionAmount: parseInt(teks),
    });

    templateButtons = [
      { index:1, urlButton: { displayText: "Copiar Chave Pix", url: 'https://www.whatsapp.com/otp/copy/' + px.toBRCode()}}
    ]

    list = {
      text: "Copie a chave pix e faça o pagamento.",
      footer: "Sistema Exclusivo",
      templateButtons
    }

    teddy.sendMessage(from, list)
  }
}
break

case 'seradm':
if(!isOwner && !isnit) return reply("Só dono pode executar este comando.")
mentions(`@${sender.split("@")[0]} Pronto - Agora você é um administrador..`, [sender], true)
teddy.groupParticipantsUpdate(from, [sender], "promote")
break

case "menu":{

const tempo = `tempok`
const numerodn = `wa.me/+558171185449`


sections = [
{
title: `${NomeDoBot}`,
rows: [
{title: "[🍷] COMPRAR BOT [🍷]", rowId: `${prefix}listapix`, description: `${NomeDoBot}`},
{title: "[⚡️] MENU BRINCADEIRAS [⚡️]", rowId: `${prefix}menu2`, description: `${NomeDoBot}`},
{title: "[🖤] MENU DONWLOAD [🖤]", rowId: `${prefix}menu3`, description: `${NomeDoBot}`},
{title: "[♨️️] MENU FIGURINHAS [♨️️]", rowId: `${prefix}menu8`, description: `${NomeDoBot}`},
{title: "[🧐] MENU CONSULTA [🧐]", rowId: `${prefix}menu4`, description: `${NomeDoBot}`},
{title: "[🥶] MENU ADM [🥶]", rowId: `${prefix}menu7`, description: `${NomeDoBot}`},
{title: "[🍀] MENU DONO [🍀]", rowId: `${prefix}menudono`, description: `${NomeDoBot}`},
{title: "[✨️] MENU PREMIUM [✨️]", rowId: `${prefix}menupremium`, description: `${NomeDoBot}`},
{title: "[💝] MENU ANIME [💝]", rowId: `${prefix}menuanime`, description: `${NomeDoBot}`},
{title: "[💥] MENU NSFW [💥]", rowId: `${prefix}menuhentai`, description: `${NomeDoBot}`},
{title: "[💭] MENU AUDIO [💭]", rowId: `${prefix}menuaudio`, description: `${NomeDoBot}`}
//{title: "[💜] INFO  [💜]", rowId: `${prefix}info`, description: `${NomeDoBot}`}
]
},
]

const listMessage2 = {
text: (prefix, pushname, numerodn, tempo, isGroup, groupName, NomeDoBot),
 // footer: ` `,
  title: `Usuário: ${pushname}`,
  buttonText: "Ler mais... ",
  sections,
  headerType: 4
}
sendMsg = await teddy.sendMessage(from, listMessage2, {quoted: info})

}break

case 'gtts':
if(!q) return enviar(`${prefixo + comando} Teddy gostoso`)
enviar(resposta.espere)
gtts = await fetchJson(`https://bryan-api.bryan00066.repl.co/api/tools/soundoftext?text=${q}&lang=pt-BR&apikey=bryan23`)
teddy.sendMessage(from, {audio: {url: gtts.resultado }, mimetype: "audio/mp4", ptt: true }, { quoted: info})
break

case 'cep':
try {
if(!q) return reply("digite o CEP que deseja buscar informações..");
const API_KEY_BRONXYS = "@Luix1397";
ABC = await fetchJson(`http://apis.bronxyshost.com/api-bronxys/consultacep?cep=51240230&apikey=`+API_KEY_BRONXYS)
reply(`Cep: ${ABC.cep}\nRua: ${ABC.rua}\nComplemento: ${ABC.complemento}\nBairro: ${ABC.vizinhança}\nCidade: ${ABC.cidade}\nEstado: ${ABC.estado}\nGia: ${ABC.gia}\nIbge: ${ABC.ibge}\nddd: ${ABC.ddd}\nSiafi: ${ABC.siafi}`)
} catch (e) {
return reply("nao achei esse cep no meu banco de dados..")
}
break
case 'rankgay':
if(!isGroup) return reply(enviar.msg.grupo)
membr = []
const gay1 = groupMembers
const gay2 = groupMembers
const gay3 = groupMembers
const gay4 = groupMembers
const gay5 = groupMembers
var porcent = porcentagem[Math.floor(Math.random() * porcentagem.length)] 
var porcent2 = porcentagem[Math.floor(Math.random() * porcentagem.length)]
var porcent3 = porcentagem[Math.floor(Math.random() * porcentagem.length)]
var porcent4 = porcentagem[Math.floor(Math.random() * porcentagem.length)]
var porcent5 = porcentagem[Math.floor(Math.random() * porcentagem.length)] 
const gays1 = gay1[Math.floor(Math.random() * gay1.length)]
const gays2 = gay2[Math.floor(Math.random() * gay2.length)]
const gays3 = gay3[Math.floor(Math.random() * gay3.length)]
const gays4 = gay4[Math.floor(Math.random() * gay4.length)]
const gays5 = gay5[Math.floor(Math.random() * gay5.length)]
rankzingay = `
*Esses são os Gays🏳️‍🌈 do grupo:*\n${groupName}\n
*╭────────────*
*│* 🏳️‍🌈 @${gays1.id.split('@')[0]}
*│➥ ${porcent} Gay Padrão*
*│* 🏳️‍🌈 @${gays2.id.split('@')[0]}
*│➥${porcent2}Gay Incubado*
*│* 🏳️‍🌈 @${gays3.id.split('@')[0]}
*│➥ ${porcent3} Gay Barbie*
*│* 🏳️‍🌈 @${gays4.id.split('@')[0]}
*│➥ ${porcent4} Gay Ativo*
*│* 🏳️‍🌈 @${gays5.id.split('@')[0]}
*│➥ ${porcent5} Gay Passivo*
*╰────────────*
\n*🔥${nomeBot}🔥*`
membr.push(gays1.id)
membr.push(gays2.id)
membr.push(gays3.id)
membr.push(gays4.id)
membr.push(gays5.id)
teddy.sendMessage(from, {text: rankzingay, mentions: membr}, {quoted: info})
break

case "help":
case "menu01":
case 'menuprincipal':{ //VNCS-XANAX
let vncs = {document: fs.readFileSync('./menu/menu.js'),fileName: `${NomeDoBot}`,
caption: `
╔═════════════╗
 👻 Menu Principal 👻
╚═════════════╝
╔═════════════╗
╠➤${prefix}menu2 (brincadeira)
╠➤${prefix}menu3 (download)
╠➤${prefix}menu4 (consultas)
╠➤${prefix}menu5 (infodono)
╠➤${prefix}menu6 (infobot)
╠➤${prefix}menu7 (menuadm)
╠➤${prefix}menu8 figurinha
╠➤${prefix}menupremium
╠➤${prefix}menuanime
╚═════════════╝
`,
footer: 'Teddy-Md',
headerType: 4,
contextInfo: {
externalAdReply: {
title: `Menu principal`,
body: `${pushname}`,
showAdAttribution: true,
thumbnail: await getBuffer(`https://telegra.ph/file/321a55677c09c676b0e9f.jpg`),
mediaType: 1,
sourceUrl: 'wa.me/5581971185449'
}
}
}
teddy.sendMessage(from, vncs, {quoted: info})
}
break

case 'execut':
if(!isOwner ) return reply(enviar.msg.dono)
try{
return eval(`(async() => { ${args.join(' ')}})()`)
}catch (e) {
reply(`${e}`)
}
break

case 'deldono':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isOwner   && !isnit && !issupre && !ischyt && !info.key.fromMe) return  reply(enviar.msg.dono)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return 
num = info.message.extendedTextMessage.contextInfo.participant 
if (num.length >= 1) {
blai = dono.includes(num)
if(!blai) return reply("*_Este número não está como dono!_*")  
pesquisar = num
processo = donos.indexOf(pesquisar)
while(processo >= 0){
donos.splice(processo, 1)
processo = donos.indexOf(pesquisar)
}
fs.writeFileSync('arquivos/dono/donos.json', JSON.stringify(donos))
teddy.sendMessage(from, {text: `*_${mentioned.split("@")[0]} foi retirado coml dono!_*`}, {quoted: info})
} else {
mentioned = args.join(" ").replace("@", "") + "@s.whatsapp.net"
blai = donos.includes(mentioned)
if(!blai) return reply("*_Este número não está incluso na lista de donos!_*")  
pesquisar = mentioned
processo = donos.indexOf(pesquisar)
while(processo >= 0){
donos.splice(processo, 1)
processo = donos.indexOf(pesquisar)
}
fs.writeFileSync('arquivos/dono/donos.json', JSON.stringify(donos))
teddy.sendMessage(from, {text: `*_@${mentioned.split("@")[0]} foi retirado como dono ✔_*`, mentions: [mentioned]}, {quoted: info})
}
break

case 'donolist':
if(!isOwner ) return reply(enviar.msg.dono)   
tkks = '╭────「 𝘿𝙤𝙣𝙤𝙨 」\n│𝘿𝙤𝙣𝙤 𝙊𝙛𝙞𝙘𝙞𝙖𝙡\n'
for (let V of donoOficial) {
tkks += `│@${V.split('@')[0]}\n`
}
tkks += `│𝙏𝙤𝙩𝙖𝙡: ${donoOficial.length}\n│\n│𝙊𝙪𝙩𝙧𝙤𝙨 𝘿𝙤𝙣𝙤𝙨\n`
for (let V of donos) {
tkks += `│@${V.split('@')[0]}\n`
}
tkks += `│𝙏𝙤𝙩𝙖𝙡: ${donos.length}\n╰────「 _*TEDDY BOT*_ 」`
reply(tkks.trim())
break

case 'addpremium':
if (!isGroup) return reply(resposta.grupo)
if (!isOwner) return reply(enviar.msg.dono)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return 
mentioned = info.message.extendedTextMessage.contextInfo.participant 
if (mentioned.length >= 1) {
blai = premium.includes(mentioned)
if(blai) return reply("*_Este número já está incluso!_*")  
premium.push(`${mentioned}`)
fs.writeFileSync('arquivos/premium/premiuns.json', JSON.stringify(premium))
teddy.sendMessage(from, {text: `*_@${mentioned.split("@")[0]} foi adicionado à lista de usuários premium com sucesso!_*`, mentions: [mentioned]}, {quoted: info})  
} else { 
mentioned = args.join(" ").replace("@", "") + "@s.whatsapp.net"
blai = premium.includes(mentioned)
if(blai) return reply("*_Este número já está incluso!_*")  
premium.push(`${mentioned}`)
fs.writeFileSync('arquivos/premium/premiuns.json', JSON.stringify(premium))
teddy.sendMessage(from, {text: `*_@${mentioned.split("@")[0]} foi adicionado à lista de usuários premium com sucesso ✔_*`, mentions: [mentioned]}, {quoted: info})
}
break

case 'addgppremium':
if (!isGroup) return reply(resposta.grupo)
if (!isOwner   && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.dono)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return 
mentioned = info.message.extendedTextMessage.contextInfo.participant 
if (mentioned.length >= 1) {
blai = premium.includes(mentioned)
if(blai) return reply("*_Este grupo já está incluso!_*")  
premium.push(`${mentioned}`)
fs.writeFileSync('datab/grupos/gppremiums.json', JSON.stringify(premium))
teddy.sendMessage(from, {text: `*_foi adicionado à lista de grupos premiums com sucesso!_*`, mentions: [mentioned]}, {quoted: info})  
} else { 
mentioned = args.join(" ").replace("@", "") + "@g.us"
blai = premium.includes(mentioned)
if(blai) return reply("*_Este número já está incluso!_*")  
premium.push(`${mentioned}`)
fs.writeFileSync('datab/grupos/gppremiums.json', JSON.stringify(premium))
teddy.sendMessage(from, {text: `*_@${mentioned.split("@")[0]} foi adicionado à lista de usuários premium com sucesso ✔_*`, mentions: [mentioned]}, {quoted: info})
}
break

case 'delpremium':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isOwner   && !isnit && !issupre && !ischyt && !info.key.fromMe) return  reply(enviar.msg.dono)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return 
num = info.message.extendedTextMessage.contextInfo.participant 
if (num.length >= 1) {
blai = premium.includes(num)
if(!blai) return reply("*_Este número não está incluso na lista premium!_*")  
pesquisar = num
processo = premium.indexOf(pesquisar)
while(processo >= 0){
premium.splice(processo, 1)
processo = premium.indexOf(pesquisar)
}
fs.writeFileSync('arquivos/premium/premiuns.json', JSON.stringify(premium))
teddy.sendMessage(from, {text: ` ${mentioned.split("@")[0]} foi tirado da lista premium com sucesso..`}, {quoted: info})
} else {
mentioned = args.join(" ").replace("@", "") + "@s.whatsapp.net"
blai = premium.includes(mentioned)
if(!blai) return reply("*_Este número não está incluso na lista premium!_*")  
pesquisar = mentioned
processo = premium.indexOf(pesquisar)
while(processo >= 0){
premium.splice(processo, 1)
processo = premium.indexOf(pesquisar)
}
fs.writeFileSync('arquivos/premium/premiuns.json', JSON.stringify(premium))
teddy.sendMessage(from, {text: `*_@${mentioned.split("@")[0]} foi tirado da lista premium com sucesso ✔_*`, mentions: [mentioned]}, {quoted: info})
}
break

case 'rankhetero':
if(!isGroup) return reply(enviar.msg.grupo)
membr = []
const hetero1 = groupMembers
const hetero2 = groupMembers
const hetero3 = groupMembers
const hetero4 = groupMembers
const hetero5 = groupMembers
var porcent = porcentagem[Math.floor(Math.random() * porcentagem.length)] 
var porcent2 = porcentagem[Math.floor(Math.random() * porcentagem.length)]
var porcent3 = porcentagem[Math.floor(Math.random() * porcentagem.length)]
var porcent4 = porcentagem[Math.floor(Math.random() * porcentagem.length)]
var porcent5 = porcentagem[Math.floor(Math.random() * porcentagem.length)] 
const heteros1 = hetero1[Math.floor(Math.random() * hetero1.length)]
const heteros2 = hetero2[Math.floor(Math.random() * hetero2.length)]
const heteros3 = hetero3[Math.floor(Math.random() * hetero3.length)]
const heteros4 = hetero4[Math.floor(Math.random() * hetero4.length)]
const heteros5 = hetero5[Math.floor(Math.random() * hetero5.length)]
rankzinhetero = `
*Esses são os Héteros💥 do grupo:*\n${groupName}\n
*╭────────────*
*│* 💥 @${heteros1.id.split('@')[0]}
*│➥ ${porcent} Hétero Comum*
*│* 💥 @${heteros2.id.split('@')[0]}
*│➥ ${porcent2} Hétero Mandrake*
*│* 💥 @${heteros3.id.split('@')[0]}
*│➥ ${porcent3} Hétero Curioso*
*│* 💥 @${heteros4.id.split('@')[0]}
*│➥ ${porcent4} Hétero Top*
*│* 💥 @${heteros5.id.split('@')[0]}
*│➥ ${porcent5} Hétero Cis*
*╰────────────*
\n*🔥${nomeBot}🔥*`
membr.push(heteros1.id)
membr.push(heteros2.id)
membr.push(heteros3.id)
membr.push(heteros4.id)
membr.push(heteros5.id)
teddy.sendMessage(from, {text: rankzinhetero, mentions: membr}, {quoted: info})
break

case 'cassino': case 'roleta':
//Cassino By: Şr. ŁĆ 💛⃝⃒⃤⁩ ⸝͟๏︠🍃		
const cassino = roleta.cassino.roleta[Math.floor(Math.random() * roleta.cassino.roleta.length)]
const vitoriass = roleta.vitoria.ganhou[Math.floor(Math.random() * roleta.vitoria.ganhou.length)]
const percass = roleta.vitoria.perdeu[Math.floor(Math.random() * roleta.vitoria.perdeu.length)]
if ((cassino == '⟮ ♥ ⟯⟮ ♥ ⟯⟮ ♥ ⟯') ||(cassino == '⟮ ♦ ⟯⟮ ♦ ⟯⟮ ♦ ⟯') ||(cassino == '⟮ ♣ ⟯⟮ ♣ ⟯⟮ ♣ ⟯') ||(cassino == '⟮ ♠ ⟯⟮ ♠ ⟯⟮ ♠ ⟯')) {
var Vitória = `${vitoriass}`
} else {
var Vitória = `${percass}`
}
const cassino2 = `
╭━━━━❪  🎰  ❫━━━━
┃     💰  𝘾𝘼𝙎𝙎𝙄𝙉𝙊 💰
┣━━━━━━━━━━━
┃=➤ *${cassino}*
┣━━━━━━━━━━━
┃ *${Vitória}*
┗━━━━❪  💰  ❫━━━━`
teddy.sendMessage(from, {text: cassino2}, {quoted: info})
break

case 'info-bot':
var groups = teddy.chats.array.filter(v => v.jid.endsWith('g.us'))
var privat = teddy.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
var ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
	uptime = process.uptime();
timestamp = speed();
totalChat = await teddy.chats.all()
charge = charging ? 'sim' : 'não'
listrik = charging ? '⚡' : 'ga di cas'
latensi = speed() - timestamp
	teks = `❏ ESTATÍSTICAS DO CELULAR:
├ Uso de Ram : ${ram2}
├ Tempo de atividade : ${temporizador(uptime)}
├ Versão do Wa: ${bot.user.phone.wa_version}
└ Modelo do dispositivo: ${bot.user.phone.device_model}

❏ ESTATÍSTICAS DO BOT:
├ Total de grupos : ${groups.length}
├ Total de usuários no pv do bot : ${privat.length}
├ Total de chats : ${totalChat.length}
├ Velocidade : ${latensi.toFixed(4)} Second
└ Ativo desde : ${temporizador(uptime)}`
reply(`${teks}`)
break

case "menu2":{
let vncs = {document: fs.readFileSync('./menu/menu.js'),fileName: `${NomeDoBot}`,
caption: `
╔═════════════╗
😜 Menu Brincadeira 😜
╚═════════════╝
╔═════════════╗
╠➤${prefix}Perfil
╠➤${prefix}Roleta
╠➤${prefix}Ppt
╠➤${prefix}gado
╠➤${prefix}Punheteiro
╠➤${prefix}gostoso
╠➤${prefix}gostosa
╠➤${prefix}lindo
╠➤${prefix}rankgay
╠➤${prefix}rankhetero
╠➤${prefix}feio
╠➤${prefix}rankcorno
╠➤${prefix}
╠➤${prefix}
╠➤${prefix}
╠➤${prefix}
╚═════════════╝
`,
footer: 'Teddy-Md',
headerType: 4,
contextInfo: {
externalAdReply: {
title: `Menu Brincadeira`,
body: `${pushname}`,
showAdAttribution: true,
thumbnail: await getBuffer(`https://telegra.ph/file/321a55677c09c676b0e9f.jpg`),
mediaType: 1,
sourceUrl: 'wa.me/5581971185449'
}
}
}
teddy.sendMessage(from, vncs, {quoted: info})
}
break

case "menu3":{
let vncs = {document: fs.readFileSync('./menu/menu.js'),fileName: `${NomeDoBot}`,
caption: `
╔═════════════╗
♨️ Menu Download ♨️
╚═════════════╝
╔═════════════╗
╠➤${prefix}play
╠➤${prefix}mediafire
╠➤${prefix}pinterest
╠➤${prefix}tiktokvd
╠➤${prefix}clonehtml
╠➤${prefix}
╠➤${prefix}
╚═════════════╝
`,
footer: 'Teddy-Md',
headerType: 4,
contextInfo: {
externalAdReply: {
title: `♨️Menu Donwload♨️`,
body: `${pushname}`,
showAdAttribution: true,
thumbnail: await getBuffer(`https://telegra.ph/file/321a55677c09c676b0e9f.jpg`),
mediaType: 1,
sourceUrl: 'wa.me/5581971185449'
}
}
}
teddy.sendMessage(from, vncs, {quoted: info})
}
break

case "menu4":{
let vncs = {document: fs.readFileSync('./menu/menu.js'),fileName: `${NomeDoBot}`,
caption: `
╔═════════════╗
🔎 Menu Consultas 🔎
╚═════════════╝
╔═════════════╗
╠  🔎 TELEFONE 🔎
╠═════════════
╠➤${prefix}tel1
╠➤${prefix}tel2
╠➤${prefix}tel3
╠➤${prefix}tel4
╚═════════════╝
╔═════════════╗
╠  🔎 CPF 🔎
╠═════════════
╠➤${prefix}cpf1 (premium) 
╠➤${prefix}cpf2 (premium) 
╠➤${prefix}cpf3 (premium)
╠➤${prefix}cpf4 (premium)
╚═════════════╝
╔═════════════╗
╠  🔎 NOME 🔎
╠═════════════
╠➤${prefix}nome 
╚═════════════╝
`,
footer: 'Teddy-Md',
headerType: 4,
contextInfo: {
externalAdReply: {
title: `🔎Menu Consulta🔎`,
body: `${pushname}`,
showAdAttribution: true,
thumbnail: await getBuffer(`https://telegra.ph/file/321a55677c09c676b0e9f.jpg`),
mediaType: 1,
sourceUrl: 'wa.me/5581971185449'
}
}
}
teddy.sendMessage(from, vncs, {quoted: info})
}
break 

case"menu5":{
let vncs = {document: fs.readFileSync('./menu/menu.js'),fileName: `${NomeDoBot}`,
caption: `
╔═════════════╗
   🧸 info dono 🧸
╚═════════════╝
╔═════════════╗
╠➤${prefix}infodono
╠➤${prefix}dono
╚═════════════╝
`,
footer: 'Teddy-Md',
headerType: 4,
contextInfo: {
externalAdReply: {
title: `🧸Menu InfoDono🧸`,
body: `${pushname}`,
showAdAttribution: true,
thumbnail: await getBuffer(`https://telegra.ph/file/321a55677c09c676b0e9f.jpg`),
mediaType: 1,
sourceUrl: 'wa.me/5581971185449'
}
}
}
teddy.sendMessage(from, vncs, {quoted: info})
}
break

case "menu6":{
let vncs = {document: fs.readFileSync('./menu/menu.js'),fileName: `${NomeDoBot}`,
caption: `
╔═════════════╗
    🗿 Info Bot 🗿
╚═════════════╝
╔═════════════╗
╠➤${prefix}totalcmd
╠➤${prefix}infobot
╠➤${prefix}ping
╠➤${prefix}on
╚═════════════╝
`,
footer: 'Teddy-Md',
headerType: 4,
contextInfo: {
externalAdReply: {
title: `🗿Menu InfoBot🗿`,
body: `${pushname}`,
showAdAttribution: true,
thumbnail: await getBuffer(`https://telegra.ph/file/321a55677c09c676b0e9f.jpg`),
mediaType: 1,
sourceUrl: 'wa.me/5581971185449'
}
}
}
teddy.sendMessage(from, vncs, {quoted: info})
}
break

case 'ping1':
r = (Date.now() / 1000) - info.messageTimestamp
uptime = process.uptime()
hora1 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
bla = `
*╭────〘 SPEED 〙 ──*
*│╭───────────*
*││▷ Horário:* ${hora1} 
*││▷ Velocidade:* ${String(r.toFixed(3))}
*││▷ Tempo Ativo:* ${kyun(uptime)}
*│╰───────────*
*╰────────────*
*𝐵𝑦: ${dev}*`
await teddy.sendMessage(from, {text: bla}, {quoted: dropselo5})
break

case 'marca':
try {
if (!isGroup) return reply("este comando só pode ser utilizado em grupos")
if (!isGroupAdmins) return reply("Este comando só pode ser utilizado por admins") 
members_id = []
teks = (args.length > 1) ? args.join(' ').trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `• @${mem.id.split('@')[0]}\n`
members_id.push(mem.id)
}
mentions(teks, members_id, true)
} catch {
reply('ERROR!!')
}
break

case 'promover': 
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (info.message.extendedTextMessage == undefined || info.message.extendedTextMessage == null) return reply(`Marque a mensagem!`)
mentioned = info.message.extendedTextMessage.contextInfo.participant
if (mentioned.length >= 1) {
teddy.sendMessage(from, {text: `@${mentioned.split("@")[0]} foi promovido(a) para Adm com sucesso ✅`, mentions: [mentioned]})
teddy.groupParticipantsUpdate(from, [mentioned], "promote")  
} else {
if(q.length > 15) return reply('Só pode promover uma pessoa por vez!')
mentioned2 = args.join(" ").replace("@", "") + "@s.whatsapp.net"
teddy.sendMessage(from, {text: `@${mentioned2.split("@")[0]} foi promovido(a) a Adm com sucesso ✅`, mentions: [mentioned2]})
teddy.groupParticipantsUpdate(from, [mentioned2], "promote")
}
break

case 'rankcorno':
if(!isGroup) return reply(enviar.msg.grupo)
membr = []
const corno1 = groupMembers
const corno2 = groupMembers
const corno3 = groupMembers
const corno4 = groupMembers
const corno5 = groupMembers
var porcent = porcentagem[Math.floor(Math.random() * porcentagem.length)] 
var porcent2 = porcentagem[Math.floor(Math.random() * porcentagem.length)]
var porcent3 = porcentagem[Math.floor(Math.random() * porcentagem.length)]
var porcent4 = porcentagem[Math.floor(Math.random() * porcentagem.length)]
var porcent5 = porcentagem[Math.floor(Math.random() * porcentagem.length)] 
const cornos1 = corno1[Math.floor(Math.random() * corno1.length)]
const cornos2 = corno2[Math.floor(Math.random() * corno2.length)]
const cornos3 = corno3[Math.floor(Math.random() * corno3.length)]
const cornos4 = corno4[Math.floor(Math.random() * corno4.length)]
const cornos5 = corno5[Math.floor(Math.random() * corno5.length)]
rankzincorno = `
*Esses são os Cornos🐂 do grupo:*\n${groupName}\n
*╭────────────*
*│* 🐂 @${cornos1.id.split('@')[0]}
*│➥ ${porcent} Corno Comum*
*│* 🐂 @${cornos2.id.split('@')[0]}
*│➥ ${porcent2} Corno Manso*
*│* 🐂 @${cornos3.id.split('@')[0]}
*│➥ ${porcent3} Corno Conformado*
*│* 🐂 @${cornos4.id.split('@')[0]}
*│➥ ${porcent4} Corno Hiper-Chifrudo*
*│* 🐂 @${cornos5.id.split('@')[0]}
*│➥ ${porcent5} Mestre Do Free Fire*
*╰────────────*
\n*🔥${nomeBot}🔥*`
membr.push(cornos1.id)
membr.push(cornos2.id)
membr.push(cornos3.id)
membr.push(cornos4.id)
membr.push(cornos5.id)
teddy.sendMessage(from, {text: rankzincorno, mentions: membr}, {quoted: info})
break

case 'rebaixar': 
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (info.message.extendedTextMessage == undefined || info.message.extendedTextMessage == null) return reply(`Marque a mensagem!`)
mentioned = info.message.extendedTextMessage.contextInfo.participant
if (mentioned.length >= 1) {
teddy.sendMessage(from, {text: `@${mentioned.split("@")[0]} foi rebaixado(a) para Membro Comum com sucesso ✅`, mentions: [mentioned]})
teddy.groupParticipantsUpdate(from, [mentioned], "demote")  
} else {
if(q.length > 15) return reply('Só pode rebaixar uma pessoa por vez..')
mentioned2 = args.join(" ").replace("@", "") + "@s.whatsapp.net"
teddy.sendMessage(from, {text: `@${mentioned2.split("@")[0]} foi rebaixado(a) para Membro Comum com sucesso ✅`, mentions: [mentioned2]})
teddy.groupParticipantsUpdate(from, [mentioned2], "demote")
}
break

case 'ban':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque a pessoa')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'pedido recebido: \n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
teddy.groupParticipantsUpdate(from, mentioned, 'remove')
} else {
mentions(`@${mentioned[0].split('@')[0]} removido(a) com sucesso!`, mentioned, true)
teddy.groupParticipantsUpdate(from, mentioned, 'remove')
}
break

case "menu7":{
let vncs = {document: fs.readFileSync('./menu/menu.js'),fileName: `${NomeDoBot}`,
caption: `
╔═════════════╗
  🥋 Menu Adm 🥋
╚═════════════╝
╔═════════════╗
╠➤.ᴄʟᴏɴᴀʀ
╠➤.ɪᴅɢᴘ
╠➤.ɪɴғᴏɢᴘ
╠➤.sᴀɪʀ
╠➤.ᴘɪɴɢ
╠➤.ᴘɪɴɢ1
╠➤.ᴅᴇʟᴅᴏɴᴏ
╠➤.ᴅᴏɴᴏʟɪsᴛ
╠➤.ᴀᴅᴅᴘʀᴇᴍɪᴜᴍ
╠➤.ᴅᴇʟᴘʀᴇᴍɪᴜᴍ
╠➤.ᴘɪɴɢ1
╠➤.ᴍᴀʀᴄᴀʀ
╠➤.ᴘʀᴏᴍᴏᴠᴇʀ 
╠➤.ʀᴇʙᴀɪxᴀʀ 
╠➤.ʙᴀɴ
╠➤.ᴀᴅᴅᴅᴏɴᴏ
╠➤.ᴍᴜᴅᴀʀᴅᴋ
╠➤.ᴍᴜᴅᴀʀɴᴍ
╠➤.ɢᴘʟɪɴᴋ
╠➤.ʀᴇsᴇᴛᴀʀʟɪɴᴋ
╠➤.ᴀɴᴛɪʟɪɴᴋ
╠➤.ᴛᴇᴅᴅʏ
╠➤.ʀᴇɪɴɪᴄɪᴀʀ
╚═════════════╝
`,
footer: 'Teddy-Md',
headerType: 4,
contextInfo: {
externalAdReply: {
title: `🧸Menu InfoDono🧸`,
body: `${pushname}`,
showAdAttribution: true,
thumbnail: await getBuffer(`https://telegra.ph/file/321a55677c09c676b0e9f.jpg`),
mediaType: 1,
sourceUrl: 'wa.me/5581971185449'
}
}
}
teddy.sendMessage(from, vncs, {quoted: info})
}
break

case 'adddono':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isOwner   && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.dono)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return 
mentioned = info.message.extendedTextMessage.contextInfo.participant 
if (mentioned.length >= 1) {
blai = donos.includes(mentioned)
if(blai) return reply("*_Este número já está incluso!_*")  
donos.push(`${mentioned}`)
fs.writeFileSync('arquivos/dono/donos.json', JSON.stringify(donos))
teddy.sendMessage(from, {text: `*_@${mentioned.split("@")[0]} foi adicionado como dono!_*`, mentions: [mentioned]}, {quoted: info})  
} else { 
mentioned = args.join(" ").replace("@", "") + "@s.whatsapp.net"
blai = donos.includes(mentioned)
if(blai) return reply("*_Este número já está incluso!_*")  
donos.push(`${mentioned}`)
fs.writeFileSync('arquivos/dono/donos.json', JSON.stringify(donos))
teddy.sendMessage(from, {text: `*_@${mentioned.split("@")[0]} foi adicionado como dono ✔_*`, mentions: [mentioned]}, {quoted: info})
}
break

case "perfil":
try {
ppimg = await teddy.profilePictureUrl(`${sender.split("@")[0]}@c.us`, "image")
} catch(e) {
ppimg = logo
}
perfil = await getBuffer(ppimg)
reply(resposta.espere)
try {
teddy.sendMessage(from, {
image: perfil,
caption: `
🎭 Aqui está suas informações 

☆ Nome: ${pushname}
☆ Número: ${sender.split("@")[0]}
☆ Wa.me: https://wa.me/${sender.split("@")[0]}
☆ Grupo: ${groupName}
`
}, {quoted: info})
tujuh = fs.readFileSync("datab/armazenamento/audios/perfil.mp3")
await teddy.sendMessage(from, {audio: tujuh, mimetype: "audio/mp4", ptt:true}, {quoted: info})
} catch(e) {
console.log(e)
reply(resposta.erro)
}
break

case 'gay':// Sem Fotos

const aleta = `${Math.floor(Math.random() * 105)}`
reply('Aguarde, confiscando sua porcentagem...')
await delay(5000)
reply(`${pushname} Sua Porcentagem De Gay é De : ${aleta}%`)
break
case 'feio': // Sem Fotos

const aletb = `${Math.floor(Math.random() * 105)}`
reply('Aguarde, confiscando sua porcentagem...')
await delay(5000)
reply(`${pushname} Sua Porcentagem De Feio é De : ${aletb}%`)
break
break
case 'lindo':

const aletc = `${Math.floor(Math.random() * 105)}`
reply('Aguarde, confiscando sua porcentagem...')
await delay(5000)
reply(`${pushname} Sua Porcentagem De Lindo(a) é De : ${aletc}%`)
break
case 'gostoso':

const aletd = `${Math.floor(Math.random() * 105)}`
reply('Aguarde, confiscando sua porcentagem...')
await delay(5000)
reply(`${pushname} Sua Porcentagem De Gostoso(a) é De : ${aletd}%`)
break
case 'gostosa':{

const aletd = `${Math.floor(Math.random() * 105)}`
reply('Aguarde, confiscando sua porcentagem...')
await delay(5000)
reply(`${pushname} Sua Porcentagem De Gostoso(a) é De : ${aletd}%`)
}
break

case 'registrar': //fuciona
case 'registrar':
case 'register':
case 'registra':
case 'registrar':
if (isUser) return  reply('você já está registrado')
if (!q.includes('|')) return reply(`Digite da forma correta:\nComando: ${prefix}registrar nome|idade\nExemplo: ${prefix}registrar ${SeuNome}|18`)
if (args.length < 1) return reply(`Como se registrar:\nComando: ${prefix}registrar nome|idade\nExemplo: ${prefix}registrar ${SeuNome}|18`)
const namaUser = q.substring(0, q.indexOf('|') - 0)
const umurUser = q.substring(q.lastIndexOf('|') + 1)
const serialUser = createSerial(20)
if(isNaN(umurUser)) return reply(`Digite da forma correta:\nComando: ${prefix}registrar nome|idade\nExemplo: ${prefix}registrar ${SeuNome}|18`)
if (namaUser.length >= 60) return reply(`Seu nome é muito longo`)
if (umurUser > 40) return reply(`Idade máxima é 40 anos`)
if (umurUser < 12) return reply(`Idade mínima é 12 anos`)
veri = sender
try {
ppimg = await teddy.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
} catch {
ppimg = 'https://i.ibb.co/rxPtZS8/foto.jpg'
}
captionnya = 
`    〘 Registrado(a) com sucesso 〙
  Código: ${serialUser}
╭╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╾
╠≽️ Dia: ${date}
╠≽️ Hora: ${hr}
╠≽️ Nome de usuário: @${sender.split("@")[0]}
╠≽️ Nome de registro: ${namaUser}
╠≽️ Idade: ${umurUser}
╠≽️ Seu link wame: wa.me/${sender.split("@")[0]}
╠≽️ Número: ${sender.split("@")[0]}
╚╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╾
você se registrou, digite ${prefix}menu para listar meus comandos`
daftarimg = await getBuffer(ppimg)
addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
teddy.sendMessage(from, daftarimg, image, {quoted: say2, caption: captionnya, contextInfo: {mentionedJid: [sender]}})                    
break

case "gp":
if (!isGroup) return reply(resposta.grupo)
if (!isGroupAdmins) return reply(resposta.adm)
if (!isBotGroupAdmins) return enviar(resposta.botadm)
try {
if (q == "a") {
await teddy.groupSettingUpdate(from, "not_announcement")
reply("Grupo aberto com sucesso")
}
if (q == "f") {
await teddy.groupSettingUpdate(from, "announcement")
reply("Grupo fechado com sucesso ")
}
} catch(e) {
console.log(e)
reply(resposta.erro)
}
break

case "mudardk":
if (!isGroup) return reply(resposta.grupo)
if (!isGroupAdmins) return enviar(resposta.adm)
if (!isBotGroupAdmins) return enviar(resposta.botadm)
try {
await teddy.groupUpdateDescription(from, `${q}`)
reply("🧸 Descrição alterada com sucesso ✓ ")
} catch(e) {
console.log(e)
reply(resposta.erro)
}
break

case "mudarnm":
if (!isGroup) return enviar(resposta.grupo)
if (!isGroupAdmins) return enviar(resposta.adm)
if (!isBotGroupAdmins) return reply(resposta.botadm)
try {
await teddy.groupUpdateSubject(from, `${q}`)
reply("🧸 Nome alterado com sucesso ✓ ")
} catch(e) {
console.log(e)
reply(resposta.erro)
}
break

case 'gado':
const alete = `${Math.floor(Math.random() * 105)}`
reply('Aguarde, confiscando sua porcentagem...')
await delay(5000)
reply(`${pushname} Sua Porcentagem De Gado(a) é De : ${alete}%`)
break

case 'punheteiro':

const aletl = `${Math.floor(Math.random() * 105)}`
reply('Aguarde, confiscando sua porcentagem...')
await delay(5000)
reply(`${pushname} Sua Porcentagem De punheteiro(a) é De : ${aletl}%`)
break

case "gplink":

if (!isGroup) return reply(`${grupo}`)
if (!isGroupAdmins) return reply(`${adm}`)
if(!isBotGroupAdmins) return reply(`${botadm}`)
const link = await teddy.groupInviteCode(from)
reply(`♧ Link do grupo : https://chat.whatsapp.com/${link} `)
break

case "resetarlink":

if (!isGroup) return reply(`${grupo}`)
if (!isGroupAdmins) return reply(`${adm}`)
if(!isBotGroupAdmins) return reply(`${botadm}`)
try {
await teddy.groupRevokeInvite(from)
reply("♧ Link de convite resetado com sucesso ✓ ")
} catch(e) {
console.log("erro")
reply(resposta.erro)
}
break

case "dono": //©ChefinModder
reply('JA ESTOU ENVIANDO')
await delay(1000)
try {
teddy.sendMessage(from, { contacts: { displayName: "adme", contacts: [{ vcard }]
}})
} catch(e) {
console.log(e)
reply('DEU ERRO :(')
}
break

case 'antilink': //Chefin Modder haha
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (args.length < 1) return reply('digite: antilink 1 para ativar! ')
if (Number(args[0]) === 1) {
if (isAntiLink) return reply('antilink ativo!')
						antilink.push(from)
						fs.writeFileSync('./arquivos/seguranca/antilink.json', JSON.stringify(antilink))
						reply('antilink ativo!')
					} else if (Number(args[0]) === 0) {			
						antilink.splice(from, 1)
						fs.writeFileSync('./arquivos/seguranca/antilink.json', JSON.stringify(antilink))
						reply('anti link desativo!')
					} else {
						reply('1 pra ativar, 0 pra desativar')
					}
					break

case 'antipv':
if (!isOwner) return reply(`Apenas dono pode ativar/desativar essa função..`)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (isAntiPv) return reply('𝐴𝑇𝐼𝑉𝑂 ✅')
antipv.push('Ativado')
fs.writeFileSync('./datab/usuarios/antipv.json', JSON.stringify(antipv))
reply('🌀 Ativou com sucesso o recurso de Anti Privado 📝')
} else if (Number(args[0]) === 0) {
if (!isAntiPv) return reply('𝐷𝐸𝑆𝐴𝑇𝐼𝑉𝐴𝐷𝑂 ⛔️')
pesquisar = 'Ativado'
processo = antipv.indexOf(pesquisar)
while(processo >= 0){
antipv.splice(processo, 1)
processo = antipv.indexOf(pesquisar)
}
fs.writeFileSync('./datab/usuarios/antipv.json', JSON.stringify(welkom))
reply('‼️ Desativou com sucesso o recurso De ANTIPV ✅')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'getcase':
if (!isOwner) return enviar("apenas o dono pode usar esse comando")
ca = args.join(' ')
let mcase = "case"+`'${ca}'`+fs.readFileSync("index.js").toString().split('case \''+ca+'\'')[1].split("break")[0]
ccase = [{index: 1, urlButton: {displayText: `Copiar ${ca}`, url: `https://www.whatsapp.com/otp/copy/${mcase}`}}]
teddy.sendMessage(from, {text: 'Aqui está o código ;)', footer: 'Teddy Md', templateButtons: ccase}, {ephemeralExpiration: 604800})
break

case "listapix":{
const tempo = `tempok`
const numerodn = `wa.me/+558171185449`


sections = [
{
title: `${NomeDoBot}`,
rows: [
{title: "3", rowId: `${prefix}pix3`, description: `${NomeDoBot}`},
{title: "5", rowId: `${prefix}pix5`, description: `${NomeDoBot}`},
{title: "10", rowId: `${prefix}pix10`, description: `${NomeDoBot}`},
]
},
]

const listMessage2 = {
text: (prefix, pushname, numerodn, tempo, isGroup, groupName, NomeDoBot),
 // footer: ` `,
  title: `Usuário: ${pushname}`,
  buttonText: "Valores... ",
  sections,
  headerType: 4
}
sendMsg = await teddy.sendMessage(from, listMessage2, {quoted: info})

}break

case "pix3":
const pix3 = "00020101021126580014br.gov.bcb.pix0136021f3a14-f941-4bfc-b778-ab5c98f3fee65204000053039865802BR5920MATHEUS J C CARNEIRO6013CABO DE SANTO62070503***6304895A"
ccase = [{index: 1, urlButton: {displayText: `Copiar pix`, url: `https://www.whatsapp.com/otp/copy/${pix3}`}}]
teddy.sendMessage(from, {text: 'Aqui está o código ;)', footer: 'Teddy Md', templateButtons: ccase}, {ephemeralExpiration: 604800})
break

case "pix5":
const pix5 = "00020101021126580014br.gov.bcb.pix0136021f3a14-f941-4bfc-b778-ab5c98f3fee65204000053039865802BR5920MATHEUS J C CARNEIRO6013CABO DE SANTO62070503***6304895A"
ccase = [{index: 1, urlButton: {displayText: `Copiar pix`, url: `https://www.whatsapp.com/otp/copy/${pix5}`}}]
teddy.sendMessage(from, {text: 'Aqui está o código ;)', footer: 'Teddy Md', templateButtons: ccase}, {ephemeralExpiration: 604800})
break

case "pix10":
const pix10 = "00020101021126580014br.gov.bcb.pix0136021f3a14-f941-4bfc-b778-ab5c98f3fee65204000053039865802BR5920MATHEUS J C CARNEIRO6013CABO DE SANTO62070503***6304895A"
ccase = [{index: 1, urlButton: {displayText: `Copiar pix`, url: `https://www.whatsapp.com/otp/copy/${pix10}`}}]
teddy.sendMessage(from, {text: 'Aqui está o código ;)', footer: 'Teddy Md', templateButtons: ccase}, {ephemeralExpiration: 604800})
break

case"eminem":
if (!q) return
const teddyq = q;
fetch(encodeURI(`https://marcos025.onrender.com/api/ferramenta/voz/eminem?texto=${teddyq}&apikey=E45y5noKfw`))
      .then(response => response.json())
      .then(resultado => {
        reply(
          resultado
        )
      })
break

case "encurta":{
if (!q) return
const nomea = [ 
"djshwiah", "kejejjsisbs",
"jshjskwj", "kaksks",
"d92k7", "kssaq",
"sisja", "ieiisamnse",
"owiqbasi", "owjahwiak",
"dpqkqoakks", "paosjnwa",
"oansjeiajsbd", "powjabkssk",
"kansnsidns", "ppqkabsj",
"ksnsnsks", "ksnshaisj",
"osbsiakans", "oaksnsos",
"zniakwjsnd", "oajsjoqksjd",
"doakajso", "oajabsisians",
"akajidjss", "aoajsjsoshsiaa",
"dppqkanss", "paooansneksiaa",
"ksjdjd", "ddoahwiw",
"skkssk", "ppqhsvsia",
"dpqakdnhwvaes", "paoskaiajsbbshsiaa"
]

// parte que vai pegar os links 
let Nomeg = nomea[Math.floor(Math.random() * nomea.length)];

const linkq = `${q}`
const token ="cb556b16986e12ec8ee150e4abe13c8fc61c284c"
reply(`exemplo: https://t.me/teddyzin_ofc teste922`)
fetch(encodeURI(`https://encurta.net/api?api=${token}&url=${linkq}&alias=${Nomeg}&type=1`))
      .then(response => response.json())
      .then(resultado => {
        reply(`
       link encurtado: resultado.shortenedUr
        `)
      })
      .catch(e => {
        reply("fale com o dono para resolver o problema")
      })
      }
break

case'apagar':  
case'del':  
if (!isGroupAdmins) return reply ('Comando exclusivo para admins🧐')
teddy.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.message.extendedTextMessage.contextInfo.stanzaId, participant: sender }})
.catch((err) => { 
console.log(err)
reply('『❗』Marque a mensagem...')
})
break

case 'addautorm':
case 'addautoban':
case 'listanegra':  
if (!isGroupAdmins && !isOwner) return reply('Precisa ser Dono')
if (args.length < 1) return reply('Cade o número?')
var ind = dbids.indexOf(from)
if(isAdeusCara) {
listng = q.replace(new RegExp("[()+-/ +/]", "gi"), "")  
var numind = adeuscara[ind].number.indexOf(listng)
if(numind >= 0) return reply(`*Esse Número ja esta incluso*`)
adeuscara[ind].number.push(listng)
} else {
listng = q.replace(new RegExp("[()+-/ +/]", "gi"), "")    
adeuscara.push({
groupId: from,
actived: false,
number: [listng]
})
}
fs.writeFileSync('./arquivos/json/adeuscara.json', JSON.stringify(adeuscara, null, 2) + '\n')
reply(`*Número adicionado a lista de autoban*`)
break

case 'packstk':
sections = [
{title: " 🅕 🅘 🅖 🅤 🅡 🅘 🅝 🅗 🅐 🅢",
rows: [
{title: "[🎎] 𝟬𝟱 𝗙𝗜𝗚𝗨𝗥𝗜𝗡𝗛𝗔𝗦 [🎎]", rowId: `${prefix}fig5`, description: `${NomeDoBot}`},
{title: "[🎎] 𝟭𝟬 𝗙𝗜𝗚𝗨𝗥𝗜𝗡𝗛𝗔𝗦 [🎎]", rowId: `${prefix}fig10`, description: `${NomeDoBot}`},
{title: "[🎎] 𝟭𝟱 𝗙𝗜𝗚𝗨𝗥𝗜𝗡𝗛𝗔𝗦 [🎎]", rowId: `${prefix}fig15`,description: `${NomeDoBot}`}
]
}]
const listMessage4 = {
text: "ғɪɢᴜʀɪɴʜᴀs ᴇɴᴠɪᴀᴅᴀs ɴᴏ sᴇᴜ ᴘʀɪᴠᴀᴅᴏ!!!",
  footer: `Teddy-Md`,
  title: `[🛒] 𝗙 𝗜 𝗚 𝗨 𝗥 𝗜 𝗡 𝗛 𝗔 𝗦  [🛒]", " 𝐒𝐄𝐋𝐄𝐂𝐈𝐎𝐍𝐀𝐑`,
  buttonText: "𝐒𝐄𝐋𝐄𝐂𝐈𝐎𝐍𝐀𝐑",
  sections,
  headerType: 4
}
teddy.sendMessage(from, listMessage4, {quoted: info})
break

case 'fig5':
reply(`ei ${pushname} to enviando no seu pv`)
const meme1 = `${Math.floor(Math.random() * 840)}`
const meme2 = `${Math.floor(Math.random() * 840)}`
const meme3 = `${Math.floor(Math.random() * 840)}`
const meme4 = `${Math.floor(Math.random() * 840)}`
const meme5 = `${Math.floor(Math.random() * 840)}`

popopoc = fs.readFileSync(`./figs/${meme1}.webp`)
teddy.sendMessage(sender, { sticker: popopoc }) 
popopoc = fs.readFileSync(`./figs/${meme2}.webp`)
teddy.sendMessage(sender, { sticker: popopoc })
popopoc = fs.readFileSync(`./figs/${meme3}.webp`)
teddy.sendMessage(sender, { sticker: popopoc })
popopoc = fs.readFileSync(`./figs/${meme4}.webp`)
teddy.sendMessage(sender, { sticker: popopoc })
popopoc = fs.readFileSync(`./figs/${meme5}.webp`)
teddy.sendMessage(sender, { sticker: popopoc })

setTimeout(() =>{ teddy.sendMessage(sender, {text: '[💟] QUER MAIS 5? [💟]', footer: `© STCIKERS ©`, buttons: [{buttonId: `${prefix}fig5`, buttonText: {displayText: '[SIM]'}, type: 1}]}, {quoted: info}) }, 2090)
break
 
case 'fig10':
reply(`ei ${pushname} to enviando no seu pv`)
const meme6 = `${Math.floor(Math.random() * 300)}`
const meme7 = `${Math.floor(Math.random() * 300)}`
const meme8 = `${Math.floor(Math.random() * 300)}`
const meme9 = `${Math.floor(Math.random() * 300)}`
const meme10 = `${Math.floor(Math.random() * 300)}`
const meme11 = `${Math.floor(Math.random() * 300)}`
const meme12 = `${Math.floor(Math.random() * 300)}`
const meme13 = `${Math.floor(Math.random() * 300)}`
const meme14 = `${Math.floor(Math.random() * 300)}`
const meme15 = `${Math.floor(Math.random() * 300)}`

popopoc = fs.readFileSync(`./figs/${meme6}.webp`)
teddy.sendMessage(sender, { sticker: popopoc })
popopoc = fs.readFileSync(`./figs/${meme7}.webp`)
teddy.sendMessage(sender, { sticker: popopoc })
popopoc = fs.readFileSync(`./figs/${meme8}.webp`)
teddy.sendMessage(sender, { sticker: popopoc })
popopoc = fs.readFileSync(`./figs/${meme9}.webp`)
teddy.sendMessage(sender, { sticker: popopoc })
popopoc = fs.readFileSync(`./figs/${meme10}.webp`)
teddy.sendMessage(sender, { sticker: popopoc })
popopoc = fs.readFileSync(`./figs/${meme11}.webp`)
teddy.sendMessage(sender, { sticker: popopoc })
popopoc = fs.readFileSync(`./figs/${meme12}.webp`)
teddy.sendMessage(sender, { sticker: popopoc })
popopoc = fs.readFileSync(`./figs/${meme13}.webp`)
teddy.sendMessage(sender, { sticker: popopoc })
popopoc = fs.readFileSync(`./figs/${meme14}.webp`)
teddy.sendMessage(sender, { sticker: popopoc })
popopoc = fs.readFileSync(`./figs/${meme15}.webp`)

setTimeout(() =>{ teddy.sendMessage(sender, {text: '[💟] QUER MAIS 10? [💟]', footer: `© STCIKERS ©`, buttons: [{buttonId: `${prefix}fig10`, buttonText: {displayText: '[SIM]'}, type: 1}]}, {quoted: info}) }, 2090)
break

case 'fig15':
reply(`ei ${pushname} to enviando no seu pv`)
const meme16 = `${Math.floor(Math.random() * 300)}`
const meme17 = `${Math.floor(Math.random() * 300)}`
const meme18 = `${Math.floor(Math.random() * 300)}`
const meme19 = `${Math.floor(Math.random() * 300)}`
const meme20 = `${Math.floor(Math.random() * 300)}`
const meme21 = `${Math.floor(Math.random() * 300)}`
const meme22 = `${Math.floor(Math.random() * 300)}`
const meme23 = `${Math.floor(Math.random() * 300)}`
const meme24 = `${Math.floor(Math.random() * 300)}`
const meme25 = `${Math.floor(Math.random() * 300)}`
const meme26 = `${Math.floor(Math.random() * 300)}`
const meme27 = `${Math.floor(Math.random() * 300)}`
const meme28 = `${Math.floor(Math.random() * 300)}`
const meme29 = `${Math.floor(Math.random() * 300)}`
const meme30 = `${Math.floor(Math.random() * 300)}`


popopoc = fs.readFileSync(`./figs/${meme16}.webp`)
teddy.sendMessage(sender, { sticker: popopoc })   
popopoc = fs.readFileSync(`./figs/${meme17}.webp`)
teddy.sendMessage(sender, { sticker: popopoc })
popopoc = fs.readFileSync(`./figs/${meme18}.webp`)
teddy.sendMessage(sender, { sticker: popopoc })
popopoc = fs.readFileSync(`./figs/${meme19}.webp`)
teddy.sendMessage(sender, { sticker: popopoc })
popopoc = fs.readFileSync(`./figs/${meme20}.webp`)
teddy.sendMessage(sender, { sticker: popopoc })
popopoc = fs.readFileSync(`./figs/${meme21}.webp`)
teddy.sendMessage(sender, { sticker: popopoc })
popopoc = fs.readFileSync(`./figs/${meme22}.webp`)
teddy.sendMessage(sender, { sticker: popopoc })
popopoc = fs.readFileSync(`./figs/${meme23}.webp`)
teddy.sendMessage(sender, { sticker: popopoc })
popopoc = fs.readFileSync(`./figs/${meme24}.webp`)
teddy.sendMessage(sender, { sticker: popopoc })
popopoc = fs.readFileSync(`./figs/${meme25}.webp`)
teddy.sendMessage(sender, { sticker: popopoc })
popopoc = fs.readFileSync(`./figs/${meme26}.webp`)
teddy.sendMessage(sender, { sticker: popopoc })
popopoc = fs.readFileSync(`./figs/${meme27}.webp`)
teddy.sendMessage(sender, { sticker: popopoc })
popopoc = fs.readFileSync(`./figs/${meme28}.webp`)
teddy.sendMessage(sender, { sticker: popopoc }) 
popopoc = fs.readFileSync(`./figs/${meme29}.webp`)
teddy.sendMessage(sender, { sticker: popopoc })
popopoc = fs.readFileSync(`./figs/${meme30}.webp`)
teddy.sendMessage(sender, { sticker: popopoc })
setTimeout(() =>{ teddy.sendMessage(sender, {text: '[💟] QUER MAIS 10? [💟]', footer: `© STCIKERS ©`, buttons: [{buttonId: `${prefix}fig10`, buttonText: {displayText: '[SIM]'}, type: 1}]}, {quoted: info}) }, 2090)
break

case 'emoji2':     
case 'emoji-mix':
case 'emojimix': {
    if (!q) return reply( `Exemplo : ${prefix + command} 😅+🤔`) 
	reply('Realizando seu pedido, caso não for tente outro...')
			let [emoji1, emoji2] = q.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
	let encmedia = await teddy.sendImageAsSticker(from, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
	await fs.unlinkSync(encmedia)
		}
}
break

case 'eununca':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
var blars = JSON.parse(fs.readFileSync("./datab/euja.json"));
       blarnd = blars[Math.floor(Math.random() * blars.length)]
    buttons = [
      { buttonId: `${prefix}eujasim`, buttonText: { displayText: '😈 Eu Ja 😈' }, type: 1 },
      { buttonId: `${prefix}nuncanao`, buttonText: { displayText: '🙄 Eu Nunca 🙄' }, type: 1 },
      { buttonId: `${prefix}eununca`, buttonText: { displayText: 'Continuar ✅' }, type: 1 }]
    
    buttonMessage = {
      text: blarnd,
      footer: `by ${NomeDoBot}️`,
      buttons: buttons, 
      headerType: 1
    }
    sendMsg = await teddy.sendMessage(from, buttonMessage, { quoted: info })
    break
    
  case 'eujasim':
    reagirMensagemm = {
      react: {
text: "💅",
key: info.key
      }
    }
    sendMsg = await teddy.sendMessage(from, reagirMensagemm)
    break
  case 'nuncanao':
    reagirMensagemmm = {
      react: {
text: "👄",
key: info.key
      }
    }
    sendMsg = await teddy.sendMessage(from, reagirMensagemmm)
    break

case 'shazam':{
if (!isQuotedAudio) return reply('⚠️ Envie o áudio para eu detectar o nome da música!')
let music = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage, 'audio')
let mime = (quoted.info || quoted).mimetype || ""
let m = mime.split('/')[1]
fs.writeFileSync('./database/temp_files/' + sender + '.' + m, music)
let base64 = fs.readFileSync('./database/temp_files/' + sender + '.' + m, { encoding: "base64" })
try {
let datrcS = await arcloud(base64)
var res = await yts(datrcS[0].titulo)
} catch (e) {
reply ('❌️ Música não encontrada!')
}
let buttons = [{buttonId: `${prefix}play_audio ${res.all[0].url}`, 
buttonText: {displayText: '🎵 Áudio'}, type: 1 },{buttonId: `${prefix}play_video ${res.all[0].url}`, buttonText: {displayText: '🎬 Vídeo'}, type: 1 }]
let thumb = await getBuffer(res.all[0].thumbnail)
let tmpe = {
document: { url: "https://wa.me/558171185449" }, 
mimetype: 'application/vnd.ms-excel', 
fileName: `${setting.NomeDoBot}`, 
caption: `▢ ⌁ Título: _${res.all[0].title}_\n▢ ⌁ Duração: _${res.all[0].timestamp}_\n▢ ⌁ Visualizações: _${res.all[0].views}_\n▢ ⌁ Canal: _${res.all[0].author.name}_\n▢ ⌁ Link: _${res.all[0].url}_`.trim(),
fileLength: '99999999999999', 
mentions: [sender], 
footer: '', 
buttons: buttons, 
headerType: 4, 
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: `${res.all[0].title}`, 
mediaType: 2, 
previewType: 'Video',
thumbnail: thumb, 
mediaUrl: `${res.all[0].url}`, 
sourceUrl: 'https://youtu.be/cTc5ywcnWJw'
}
}
} 
teddy.sendMessage(from, tmpe, {quoted: info})
fs.unlinkSync('./database/temp_files/' + sender + '.' + m)
}
break

case 'delremover':
case 'delautorm':  
case 'delautoban': 
case 'tirardalista':  
if (!isGroup) return reply(enviar.msg.adm)
if (!isGroupAdmins && !isOwner) return reply('Precisa ser Dono')
if (args.length < 1) return reply('Diga o numero sem espaço, + ou traço')
if (isNaN(args[0])) return reply('Diga o numero sem espaço, + ou traço')
var ind = dbids.indexOf(from)
if(!isAdeusCara) return reply(`*Nenhum Número não foi adicionado*`)
var numind = adeuscara[ind].number.indexOf(args[0])
if(numind < 0) return reply(`*Esse número não está incluso*`)
adeuscara[ind].number.splice(numind, 1)
fs.writeFileSync('./arquivos/json/adeuscara.json', JSON.stringify(adeuscara, null, 2) + '\n')
reply(`*Número removido a lista de autoban*`)
break

case 'plaquinha':
  sendMsg = await teddy.sendMessage(from, {react: {text: `🍑`, key: info.key}})
  if (!isPremium) return reply(`🍑💦𝙀𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙚́ 𝙨𝙤́ 𝙥𝙖𝙧𝙖 𝙪𝙨𝙪𝙖́𝙧𝙞𝙤𝙨 𝙋𝙧𝙚𝙢𝙞𝙪𝙣𝙨 𝙙𝙤 𝙗𝙤𝙩🍑💦 `)
					if (args.length < 1) return Reply (`cade o texto`)
					teks = body.slice(10)
					if (teks.length > 8) return reply('O texto é longo, até 8> caracteres')
					buffer = await getBuffer(`https://fodurnuo.sirv.com/api/IMG_20230416_103022_035.jpg?text.0.text=${teks}&text.0.position.x=-25%25&text.0.position.y=-45%25&text.0.size=35&text.0.color=000000&text.0.opacity=42&text.0.font.family=Playball&text.0.background.opacity=99" width="720" height="1280" alt="">`,`https://lerrewor.sirv.com/Teste/images%20(1)%20(12).jpeg?text.0.text=${teks}&text.0.position.x=-20%25&text.0.position.y=-35%25&text.0.size=41&text.0.color=000000&text.0.font.family=Playball&text.0.background.opacity=16&text.0.outline.color=ff0000&text.0.outline.blur=24" width="225" height="225" alt="" />`)
                   teddy.sendMessage(sender, {image: buffer},{quoted: ContatVR}),
                   reply('plaquinha enviada no seu pv😏 aproveite🤭')
					break
					
					
		case 'plaquinha1':
		  sendMsg = await teddy.sendMessage(from, {react: {text: `🍑`, key: info.key}})
  if (!isPremium) return reply(`🍑💦𝙀𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙚́ 𝙨𝙤́ 𝙥𝙖𝙧𝙖 𝙪𝙨𝙪𝙖́𝙧𝙞𝙤𝙨 𝙋𝙧𝙚𝙢𝙞𝙪𝙣𝙨 𝙙𝙤 𝙗𝙤𝙩🍑💦 `)
					if (args.length < 1) return Reply (`cade o texto`)
					teks = body.slice(10)
					if (teks.length > 10) return reply('O texto é longo, até 10> caracteres')
					buffer = await getBuffer(`https://fodurnuo.sirv.com/api/IMG_20230417_195250_027.jpg?text.0.text=${teks}&text.0.position.x=-32%25&text.0.position.y=-25%25&text.0.size=35&text.0.color=000000&text.0.opacity=66&text.0.font.family=Permanent%20Marker&text.0.background.opacity=38&text.0.outline.blur=55" width="605" height="635" alt="">`,`https://fodurnuo.sirv.com/api/IMG_20230416_103022_035.jpg?text.0.text=${teks}&text.0.position.x=-25%25&text.0.position.y=-45%25&text.0.size=35&text.0.color=000000&text.0.opacity=42&text.0.font.family=Playball&text.0.background.opacity=99" width="720" height="1280" alt="">`)
                   teddy.sendMessage(sender, {image: buffer},{quoted: ContatVR}),
                   reply('plaquinha enviada no seu pv😏 aproveite🤭')
					break
					
					case 'plaquinha2':
					  sendMsg = await teddy.sendMessage(from, {react: {text: `🍑`, key: info.key}})
  if (!isPremium) return reply(`🍑💦𝙀𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙚́ 𝙨𝙤́ 𝙥𝙖𝙧𝙖 𝙪𝙨𝙪𝙖́𝙧𝙞𝙤𝙨 𝙋𝙧𝙚𝙢𝙞𝙪𝙣𝙨 𝙙𝙤 𝙗𝙤𝙩🍑💦 `)
					if (args.length < 1) return Reply (`cade o texto`)
					teks = body.slice(10)
					if (teks.length > 10) return reply('O texto é longo, até 10> caracteres')
					buffer = await getBuffer(`https://fodurnuo.sirv.com/api/IMG_20230417_195131_674.jpg?text.0.text=${teks}&text.0.position.x=-33%25&text.0.position.y=-1%25&text.0.size=35&text.0.color=000000&text.0.opacity=58&text.0.font.family=Satisfy&text.0.background.opacity=65&text.0.outline.blur=18&text.0.outline.opacity=0" width="396" height="706" alt="">`,`https://fodurnuo.sirv.com/api/IMG_20230416_103022_035.jpg?text.0.text=${teks}&text.0.position.x=-25%25&text.0.position.y=-45%25&text.0.size=35&text.0.color=000000&text.0.opacity=42&text.0.font.family=Playball&text.0.background.opacity=99" width="720" height="1280" alt="">`)
                   client.sendMessage(sender, {image: buffer},{quoted: ContatVR}),
                   reply('plaquinha enviada no seu pv😏 aproveite🤭')
					break
					
					
					case 'plaquinha3':
					  sendMsg = await teddy.sendMessage(from, {react: {text: `🍑`, key: info.key}})
  if (!isPremium) return reply(`🍑💦𝙀𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙚́ 𝙨𝙤́ 𝙥𝙖𝙧𝙖 𝙪𝙨𝙪𝙖́𝙧𝙞𝙤𝙨 𝙋𝙧𝙚𝙢𝙞𝙪𝙣𝙨 𝙙𝙤 𝙗𝙤𝙩🍑💦 `)
					if (args.length < 1) return Reply (`cade o texto`)
					teks = body.slice(12)
					if (teks.length > 12) return reply('O texto é longo, até 10> caracteres')
					buffer = await getBuffer(`https://fodurnuo.sirv.com/api/IMG_20230417_195025_927.jpg?text.0.text=${teks}&text.0.position.x=-12%25&text.0.position.y=-32%25&text.0.size=33&text.0.color=0b0707&text.0.opacity=62&text.0.background.opacity=31" width="627" height="1024" alt="">`,`https://fodurnuo.sirv.com/api/IMG_20230416_103022_035.jpg?text.0.text=${teks}&text.0.position.x=-25%25&text.0.position.y=-45%25&text.0.size=35&text.0.color=000000&text.0.opacity=42&text.0.font.family=Playball&text.0.background.opacity=99" width="720" height="1280" alt="">`)
                   teddy.sendMessage(sender, {image: buffer},{quoted: ContatVR}),
                   reply('plaquinha enviada no seu pv😏 aproveite🤭')
					break


case 'criargp':
if (!isOwner) return reply('Este comando é somente pro meu criador')
const gp = args.join(' ')
if (!gp) return reply('*Escreva o nome do grupo que vc quer criar....*')
await teddy.groupCreate(`${gp}`, [sender])
reply(`*Grupo criado com sucesso!*\n*Nome:* ${gp}`)
break

case 'ip2': // VNCS XANAX ROBOT
case 'localizaip':
var c = args.join(' ')
if (!c) return reply('preciso do ip')
if (c.length < 20) {
try {
reply(`*CONSULTANDO IP: ${q} 🔍*`)
sendMsg = await teddy.sendMessage(from, {react: {text: `🕒`, key: info.key}})
reply(`Aguarde, buscando as informações... ☕`)
//if (c.includes('.') && args[0].includes('-')) return reply("....")
api = await fetchJson(`http://ip-api.com/json/${c}?fields=status,message,continent,continentCode,country,countryCode,region,regionName,city,district,zip,lat,lon,timezone,offset,currency,isp,org,as,asname,reverse,mobile,proxy,hosting,query`)
psq = ` 🔎 𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔 𝗗𝗘 𝗜𝗣 🔍️\n`
psq += `• STATUS: ${api.status ? api.status : 'IP PRIVADO'}\n`
psq += `• IP: ${api.query ? api.query : 'INDEFINIDO'}\n`
psq += `• CONTINENTE: ${api.continent ? api.continent : 'global'}\n`
psq += `• CONTINENTE SIGLA: ${api.continentCode ? api.continentCode : 'GLOBAL'}\n`
psq += `• PAÍS: ${api.country ? api.country : 'global'}\n`
psq += `• PAÍS SIGLA: ${api.countryCode ? api.countryCode : 'GLOBAL'}\n`
psq += `• REGIÃO: ${api.region ? api.region : 'Global'}\n`
psq += `• NOME DA REGIÃO: ${api.regionName ? api.regionName : 'Global'}\n`
psq += `• CIDADE: ${api.city ? api.city : 'Global'}\n`
psq += `• LATITUDE: ${api.lat ? api.lat : '0'}\n`
psq += `• LONGITUDE: ${api.lon ? api.lon : '0'}\n`
psq += `• TEMPO REAL: ${api.timezone ? api.timezone : 'UTC +0'}\n`
psq += `• ISP: ${api.isp ? api.isp : 'PUBLICO'}\n`
psq += `• ORG: ${api.org ? api.org : 'IP PUBLICO'}\n`
const buttonMessageoidasd = {
image: { url: 'https://i.ibb.co/hCbR6Yw/what-is-my-ip-featured-800x400.png' },
caption: psq}
teddy.sendMessage(from, buttonMessageoidasd)
} catch { reply('Deu Erro tenta Novamente') }
} else {
reply('O ip inserido e invalido ou o número não corresponde!')
}
break

case "cnpj":{
reply(`🔎CONSULTANDO🔎`)
await teddy.sendMessage(from, { react: { text: '🔎', key: info.key }})    
if (!q) return
fetch(encodeURI(`https://japa-apis.herokuapp.com/puxar/cnpj?token=@TeddyModz&cnpj=${q}`))
      .then(response => response.json())
      .then(resultado => {
        reply(`
  ╔═══════════════════╗
                 ♘ Resultado ♘
                 
   ${resultado.resultado}
     
                  𝑻𝑬𝑫𝑫𝒀-𝑀𝐷        ╚═══════════════════╝
        `)
      })
}
break

case "teddy":
{
return reply(`
bot: ${nomeBot}
dono: ${nomeDono}
`)}
break

case 'reiniciar':
if (!isOwner) return reply(resposta.dono)
reply(`Reiniciando...`)
await sleep(2000)
process.exit()
break

case 'loli' :{
waifuddd = await axios.get('https://waifu.pics/api/sfw/shinobu')
templateMassage = {
image: {url:waifuddd.data.url,
quoted: info},
caption: 'vc e um(a) lolicon?🤔!',
footer: "Teddy Modz",
//templateButtons: templateButtons
}
teddy.sendMessage(from, templateMassage)
}
break

case "mia":{
//essa parte de baixo é os links
const link = [
  "https://i.ibb.co/PcRFD2q/2c7e4cedc90b4d2d296bc5f6ae0d5ddf-30.jpg",
  
  "https://i.ibb.co/Bc5Ff7T/3c06a787f70c9a79d05b6b2d9b8c75a6-25.jpg",
  
  "https://i.ibb.co/94syHyF/4e4a40f37fb56a72792d7d5b810f8ced-30.jpg",
  
  "https://i.ibb.co/VMg4pxq/05e335e4e9763effb85644dae5b3e2ca-4.jpg",
  
  "https://i.ibb.co/DWvPjpj/6ce12250a3f133fcb39ab162762aa6e7-28.jpg",
  
  "https://i.ibb.co/N9WsNTC/67c5897c2708d540a9eb5684d15e69af-26.jpg",
  
  "https://i.ibb.co/bg1kWxQ/225d8bc4c2e164187ec0fd21e41e2daf-21.jpg",
  
  "https://i.ibb.co/R2JJFCQ/426b87d9ee6ebfdc88691501ffadbb2a-30.jpg",
  
  "https://i.ibb.co/6sHYjk5/491dfcafb9a7e9d0a92470924f061fa8-30.jpg",
  
  "https://i.ibb.co/q7dncQN/847a25023fe826215c0ee293d2b7f47f-17.jpg",
  
  "https://i.ibb.co/K9V3Qmt/0893ffff713424708f9a8320d5506d62-24.jpg",
  
  "https://i.ibb.co/c2sGKbY/34009d8d47d66f62ac4f49afd09c182c-22.jpg",
  
  "https://i.ibb.co/8BMpWwK/49601f353a04dd41b4131f255f245aa7-23.jpg",
  
  "https://i.ibb.co/SKzqq9Y/ba8ef96fa7efcc78634b04ff6136230e-15.jpg",
  
  "https://i.ibb.co/GHVD2f9/cbab682cdf982535a187373ed0564106-6.jpg",
  
  "https://i.ibb.co/HtLGpg8/download.jpg",
  
  "https://i.ibb.co/LSRWFx2/fa2f5ca83eb0eab8d8936184abbe14a0-30.jpg"
]

// parte que vai pegar os links 
random = link[Math.floor(Math.random() * link.length)]

//parte que vai chamar o link aleatório
const chama_o_random = {
image: {url:random}
}

teddy.sendMessage(sender, chama_o_random)
reply(`${pushname}foto enviada pro pv chefe🍷🗿`)
}
break

case "elisa":{
//essa parte de baixo é os links
const link = [
"https://i.ibb.co/jRMkJPg/4be91c0fb797e309f606301a97501f73-1.jpg",
  
  "https://i.ibb.co/2kFR8nP/4fe007dcdf59e6709123b3e055f1241e-3.jpg",
  
  "https://i.ibb.co/dBbRKHV/7c617a76e1532790ee0bb3343ada76be-30.jpg",
  
  "https://i.ibb.co/LtzV1cs/7e57c57134f4db4d897c596f21cad664-5.jpg",
  
  "https://i.ibb.co/kgfczrx/8c4dc3d8b1af2387ad06b4979d98f915-30.jpg",
  
  "https://i.ibb.co/MgLQqG1/792ac4da9e6501963ba30d6f16428829-23.jpg",
  
  "https://i.ibb.co/z238QCk/793b0069ce3a8584313136ed4a7f7594-29.jpg",
  
  "https://i.ibb.co/QfqXT03/2513ca964041e8869b6c9d76e9f16673-19.jpg",
  
  "https://i.ibb.co/D7RbK6B/12157f4bb21b471ce425704c544fc3a0-25.jpg",
  
  "https://i.ibb.co/1ZrMg06/a75f86e9bc16b6e262842afcc72fc6f1-12.jpg",
  
  "https://i.ibb.co/3Tnyrmn/b0abc6b91682221b6d7dd8f930ff0e08-10.jpg",
  
  "https://i.ibb.co/z4jRkZy/b8d3ba526c8400b0a4b9eac81dbc8723-30.jpg",
  
  "https://i.ibb.co/sQ3HSyM/bbb9d4a4eb4c07c5ea432f9c657f689c-7.jpg",
  
  "https://i.ibb.co/yqLZxcY/c5d18190efd04c8c6c265e012e10c429-30.jpg",
  
  "https://i.ibb.co/X7Tvd2c/dc69da81bf2b6dd6767caed849b81794-30.jpg",
  
  "https://i.ibb.co/P5L9VSP/download-1.jpg",
  
  "https://i.ibb.co/NrTsqJj/download-2.jpg",
  
  "https://i.ibb.co/C6f5X83/download.jpg",
  
  "https://i.ibb.co/pvPR2Jn/e0ef77ee0ff037b36fbfc957ad1712eb-30.jpg",
  
  "https://i.ibb.co/c8xwHNx/e8bf9d73b010ce34a98aae4e19fa82ac-28.jpg",
  
  "https://i.ibb.co/ZMY75QG/e005981648bdd6cd6ddee4a4550715ed-3.jpg",
  
  "https://i.ibb.co/KmfgCmN/ef3db5a7e356c9c8ad6057699d057bc6-30.jpg",
  
  "https://i.ibb.co/Stfy5dZ/f2dbefb937dca3006698c8f319a63c05-11.jpg",
  
  "https://i.ibb.co/kKw74v9/images.jpg"
]

// parte que vai pegar os links 
random = link[Math.floor(Math.random() * link.length)]

//parte que vai chamar o link aleatório
const chama_o_random = {
image: {url:random}
}
teddy.sendMessage(sender, chama_o_random)
reply(`${pushname}foto enviada pro pv chefe🍷🗿`)
}
break

case 'gpwhatsapp':
case 'gruposwhats':
case 'gruposwa': //VNCS-XANAXROBOT
if(!q) return reply("Cadê o título da pesquisa?")
axios.get(`https://marcos025.onrender.com/api/pesquisa/gpwhatsapp?nome=${q}&apikey=XANAX-VNCS$`)
.then(e => {
try{
d = e.data;
txt = '';
no = 0;
for (let i of d) {
no += 1;
txt += `✓ 🏷 𝘕𝘰𝘮𝘦⧽ ${i.nome}\n× 🈹 𝘋𝘦𝘴𝘤𝘳𝘪𝘤̧𝘢̃𝘰⧽ ${i.descrição}\n× 🔗 𝘓𝘪𝘯𝘬⧽ ${i.link}\n\n`;
}
teddy.sendMessage(from, {image:{url: `${logo}`}, caption:txt})
}catch(err){
reply(`Nenhum resultado foi encontrado.`)
}
}).catch(err => {
reply('Ops, eu acho que a api ou módulo caiu!')
console.log(err);
});
break


case 'rastrear': { //VNCS-XANAXROBOT
try {
	reply('Estou Buscando seu pedido, Aguarde...')
infoRa = await fetchJson(`https://marcos025.onrender.com/api/outros/rastrear/shoppee?id=${q}&apikey=XANAX-VNCS$`)
const { info,infopro } = infoRa[0]
await reply(""+info)
await reply(""+infopro) 
} catch (e) {
return reply("Erro..")
}
break  
}

//Felipe
case 'mediafire':
ABC = await fetchJson(`https://marcos025.onrender.com/api/dl/mediafire?link=${q}/file&apikey=XANAX-VNCS$`)

reply(`Enviando: ${ABC.resultado.nome}\n\nPeso: ${ABC.resultado.tamanho}`)
teddy.sendMessage(from, {document: {url: ABC.resultado.link}, mimetype: "application/"+ABC.resultado.mime, fileName: ABC.resultado.nome})
break

case 'togif': //XANAX ROBOT MD
if (!isQuotedSticker) return reply('*[ ❗ ] Marque a figurinha animada!*')
if ((isMedia && !m.message.videoMessage || isQuotedSticker) && args.length == 0) {
buff = await getFileBuffer(m.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
reply('*「 ❗ 」 Aguarde, convertendo a figu em gif...*')
a = await webp_mp4(buff)
mp4 = await getBuffer(a)
teddy.sendMessage(from, {video: mp4, gifPlayback: true, filename: `stick.gif`}, {quoted: info})
fs.unlinkSync(buff)
}
break

case 'toimg': //XANAX ROBOT MD
if (!isQuotedSticker) return reply('❌ adesivo de resposta um ❌')
reply(enviar.espere)
buff = await getFileBuffer(m.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
teddy.sendMessage(from, {image: buff}, {quoted: info}).catch(e => {
console.log(e);
reply('ERROR!!')
})
break

case 'tomp3': //XANAX ROBOT MD
if ((isMedia && !info.message.imageMessage || isQuotedVideo)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.videoMessage
reply(enviar.espere)
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane 
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, (err) => { 
fs.unlinkSync(media)
if (err) return reply('❌ Falha ao converter vídeo para mp3 ❌')
buffer = fs.readFileSync(ran)
teddy.sendMessage(from, {audio: buffer, mimetype: 'audio/mp4'}, {quoted: info})
fs.unlinkSync(ran)
})
} else {
reply("Marque o vídeo para transformar em áudio por favor..")
}
break

case "nsfwloli":{
//essa parte de baixo é os links
const link = [
  "https://i.imgur.com/5Gy4Ae2.jpg",
  "https://i.imgur.com/FXp0hGU.jpg",
  "https://i.imgur.com/tU8GBob.jpg",
  "https://i.imgur.com/RtIXKxC.jpg",
  "https://i.imgur.com/a6pBhe9.png",
  "https://i.imgur.com/xo9ML6M.jpg",
  "https://i.imgur.com/KKlDXsK.jpg",
  "https://i.imgur.com/STBCw2H.png",
  "https://i.imgur.com/TeKeKc4.jpg",
  "https://i.imgur.com/I96qZO1.jpg",
  "https://i.imgur.com/OSV4mr2.jpg",
  "https://i.imgur.com/Vkpw2lP.jpg",
  "https://i.imgur.com/vNkuk9X.jpg",
  "https://i.imgur.com/u0QSm8h.png",
  "https://i.imgur.com/orXLh6Q.png",
  "https://i.imgur.com/XB3ddkI.jpg",
  "https://i.imgur.com/vUvbdkP.jpg",
  "https://i.imgur.com/tT8fpNP.jpg",
  "https://i.imgur.com/jQxRZd6.jpg",
  "https://i.imgur.com/DWTELtS.jpg",
  "https://i.imgur.com/H4Efb3W.jpg",
  "https://i.imgur.com/AG4VSlz.jpg",
  "https://i.imgur.com/IKPk8Fn.jpg",
  "https://i.imgur.com/55tfVR6.jpg",
  "https://i.imgur.com/DH7ZhK2.jpg",
  "https://i.imgur.com/0tpqKAn.jpg",
  "https://i.imgur.com/8HFNNP9.jpg",
  "https://i.imgur.com/VFE29f0.png",
  "https://i.imgur.com/NTB4Ets.jpg",
  "https://i.imgur.com/DP6PAIX.png",
  "https://i.imgur.com/H4QObui.jpg",
  "https://i.imgur.com/Q76FGLD.jpg",
  "https://i.imgur.com/1UsHgyG.jpg",
  "https://i.imgur.com/efugtug.jpg",
  "https://i.imgur.com/oceGGfa.jpg",
  "https://i.imgur.com/LUMcFrc.jpg",
  "https://i.imgur.com/3ghty1m.jpg",
  "https://i.imgur.com/DI2L8QK.jpg",
  "https://i.imgur.com/WTPyukP.jpg",
  "https://i.imgur.com/OOhoCoQ.jpg",
  "https://i.imgur.com/1KqzRgF.jpg",
  "https://i.imgur.com/BMQTV59.jpg",
  "https://i.imgur.com/foosdbg.jpg",
  "https://i.imgur.com/T4I5qmn.jpg",
  "https://i.imgur.com/SZhWCQj.png",
  "https://i.imgur.com/r9Xe3Ku.jpg",
  "https://i.imgur.com/5AjjS3F.jpg",
  "https://i.imgur.com/vwaCltl.jpg",
  "https://i.imgur.com/vAz3s0G.jpg",
  "https://i.imgur.com/A8Rgyz2.jpg",
  "https://i.imgur.com/OMnMukk.jpg",
  "https://i.imgur.com/K5LS2p7.jpg",
  "https://i.imgur.com/Npvdm9T.jpg",
  "https://i.imgur.com/YwpdGCI.jpg",
  "https://i.imgur.com/pYoH5bm.jpg",
  "https://i.imgur.com/6UGTYFV.jpg",
  "https://i.imgur.com/UhzImzH.jpg",
  "https://i.imgur.com/Z37WIwP.jpg",
  "https://i.imgur.com/fzcpkqX.jpg",
  "https://i.imgur.com/QbbEibV.jpg",
  "https://i.imgur.com/KxcTAzy.jpg",
  "https://i.imgur.com/ngSWgTT.jpg",
  "https://i.imgur.com/ss8MumR.jpg",
  "https://i.imgur.com/2JE0VvF.jpg",
  "https://i.imgur.com/WdAdtQi.jpg",
  "https://i.imgur.com/ExfC7t2.jpg",
  "https://i.imgur.com/eIW7iBI.jpg",
  "https://i.imgur.com/ZMLS8Ru.jpg",
  "https://i.imgur.com/4amKFCf.jpg",
  "https://i.imgur.com/S6Gjf0q.jpg",
  "https://i.imgur.com/65eT6Im.jpg",
  "https://i.imgur.com/aSipcLd.jpg",
  "https://i.imgur.com/pxFagWe.jpg",
  "https://i.imgur.com/bwtxjHo.jpg",
  "https://i.imgur.com/NPNF7HK.jpg",
  "https://i.imgur.com/xSGybIA.jpg",
  "https://i.imgur.com/Y5UCft4.jpg",
  "https://i.imgur.com/SrmyNi1.jpg",
  "https://i.imgur.com/daCe3lE.jpg",
  "https://i.imgur.com/UHByRe6.jpg",
  "https://i.imgur.com/prlcgQg.jpg",
  "https://i.imgur.com/nHQp9Jc.jpg",
  "https://i.imgur.com/fsQCEn0.jpg",
  "https://i.imgur.com/XIx0IgX.jpg",
  "https://i.imgur.com/PVOYTDz.jpg",
  "https://i.imgur.com/JUDbqn3.jpg",
  "https://i.imgur.com/7j9DJFD.jpg",
  "https://i.imgur.com/T5NBJP6.jpg",
  "https://i.imgur.com/8sdegHR.jpg",
  "https://i.imgur.com/4417phO.jpg",
  "https://i.imgur.com/QGNVBGE.jpg",
  "https://i.imgur.com/6RXigzC.jpg",
  "https://i.imgur.com/iymw1WJ.jpg",
  "https://i.imgur.com/XWf4bxA.jpg",
  "https://i.imgur.com/1swVUEF.png",
  "https://i.imgur.com/l1qv8CS.png",
  "https://i.imgur.com/7cdN0FF.png",
  "https://i.imgur.com/kFL1d7F.png",
  "https://i.imgur.com/GZAG3Br.png",
  "https://i.imgur.com/MHFoUHu.png",
  "https://i.imgur.com/qtLSDCd.png",
  "https://i.imgur.com/ocsC8sb.png",
  "https://i.imgur.com/4r302Tj.png",
  "https://i.imgur.com/GwxzusL.png",
  "https://i.imgur.com/NjgXtpR.png",
  "https://i.imgur.com/4hEk1Sj.png",
  "https://i.imgur.com/BYtJXbK.png",
  "https://i.imgur.com/wsrqfa6.png",
  "https://i.imgur.com/loG4Ikx.png",
  "https://i.imgur.com/z0XKC8e.png",
  "https://i.imgur.com/xaWsood.png",
  "https://i.imgur.com/yYvpe41.png",
  "https://i.imgur.com/xA4IiRK.png",
  "https://i.imgur.com/FLzX4Ag.png",
  "https://i.imgur.com/G5m0OVU.png",
  "https://i.imgur.com/xXdsjF0.png",
  "https://i.imgur.com/Wvb1tAw.png",
  "https://i.imgur.com/xEX3l29.png",
  "https://i.imgur.com/rVZ6zet.png",
  "https://i.imgur.com/VKyHhAH.png",
  "https://i.imgur.com/h06LAgD.png",
  "https://i.imgur.com/q51mnry.png",
  "https://i.imgur.com/sM23kNv.png",
  "https://i.imgur.com/S2B9dfE.png",
  "https://i.imgur.com/LEqNv2B.png",
  "https://i.imgur.com/GenlAx5.png",
  "https://i.imgur.com/odMI0Qih.jpg"
]

// parte que vai pegar os links 
random = link[Math.floor(Math.random() * link.length)]

//parte que vai chamar o link aleatório
const chama_o_random = {
image: {url:random}
}
teddy.sendMessage(sender, chama_o_random)
reply(`${pushname}foto enviada pro pv chefe🍷🗿`)
}
break

case 'speed':
case 'ping3':
r = (Date.now() / 1000) - info.messageTimestamp
uptime = process.uptime()
hora1 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
reply(`
╭━─━─━─≪_⌾_≫─━─━─━╮
╎⚡ ping: ${String(r.toFixed(3))}
╎⏳ tempo on: ${(uptime)}
╰━─━─━─≪_⌾_≫─━─━─━╯
`)
break

case "testeb":{
text:
sendBimg(sender, `${logo}`, `
`, "teddy modz", [
{buttonId: `${prefix}mia`, buttonText: {displayText: `PROXIMO`}, type: 1}, {buttonId: `${prefix}nsfwloli`, buttonText: {displayText: `PROXIMO`}, type: 1}, {buttonId: `${prefix}elisa`, buttonText: {displayText: `PROXIMO`}, type: 1},], info)
}
reply("enviado pro pv")
teddy.sendMessage(sender, text)
break

case "elisa":{
//essa parte de baixo é os links
const link = [

]

// parte que vai pegar os links 
random = link[Math.floor(Math.random() * link.length)]

//parte que vai chamar o link aleatório
const chama_o_random = {
image: {url:random}
}
teddy.sendMessage(sender, chama_o_random)
reply(`${pushname}foto enviada pro pv chefe🍷🗿`)
}
break

case "shota":{
//essa parte de baixo é os links
const link = [
  "https://i.imgur.com/xWLRytk.jpg",
  "https://i.imgur.com/gICpAkx.jpg",
  "https://i.imgur.com/zHHuZzj.jpg",
  "https://i.imgur.com/I8fIgu7.jpg",
  "https://i.imgur.com/MgC42tV.jpg",
  "https://i.imgur.com/X0ZvGdW.jpg",
  "https://i.imgur.com/bJo3mkS.jpg",
  "https://i.imgur.com/IRkpLr9.jpg",
  "https://i.imgur.com/5n84adz.jpg",
  "https://i.imgur.com/MdBK6om.jpg",
  "https://i.imgur.com/hSRuIFV.jpg",
  "https://i.imgur.com/76cPbZD.jpg",
  "https://i.imgur.com/LTS6OQ0.jpg",
  "https://i.imgur.com/kr27Udl.jpg",
  "https://i.imgur.com/Fn5YxHA.jpg",
  "https://i.imgur.com/2xrJum8.jpg",
  "https://i.imgur.com/e4NF7vU.jpg",
  "https://i.imgur.com/i60z60n.jpg",
  "https://i.imgur.com/Rv24BWh.jpg",
  "https://i.imgur.com/9K8lbP7.jpg",
  "https://i.imgur.com/A0Xn484.jpg",
  "https://i.imgur.com/FRBt8sM.jpg",
  "https://i.imgur.com/SEkiXd8.jpg",
  "https://i.imgur.com/ydNnAIa.jpg",
  "https://i.imgur.com/sCseKmP.jpg",
  "https://i.imgur.com/oI7HSC1.jpg",
  "https://i.imgur.com/QW7F4SS.jpg",
  "https://i.imgur.com/KtVjmLb.jpg",
  "https://i.imgur.com/Ckuu5lY.jpg",
  "https://i.imgur.com/VOxGOlf.png",
  "https://i.imgur.com/iQVOl1G.png",
  "https://i.imgur.com/C4DdBdp.jpg",
  "https://i.imgur.com/9zZLS24.jpg",
  "https://i.imgur.com/qIDaQ6Y.jpg",
  "https://i.imgur.com/vkP1ITN.jpg",
  "https://i.imgur.com/rbhZXH4.jpg",
  "https://i.imgur.com/qJaNVdh.jpg",
  "https://i.imgur.com/qSeB0ND.jpg",
  "https://i.imgur.com/HqZyZv9.jpg",
  "https://i.imgur.com/7bxpnuk.jpg",
  "https://i.imgur.com/SpeD3zj.jpg",
  "https://i.imgur.com/06lkman.jpg",
  "https://i.imgur.com/rkfLUAD.jpg",
  "https://i.imgur.com/cP9D1qw.jpg",
  "https://i.imgur.com/mJTvjIB.jpg",
  "https://i.imgur.com/zzsrDli.jpg",
  "https://i.imgur.com/KR99obZ.jpg",
  "https://i.imgur.com/i8fyDyp.jpg",
  "https://i.imgur.com/ux5zqrE.jpg",
  "https://i.imgur.com/gX3TwEW.jpg",
  "https://i.imgur.com/GPOjup6.jpg",
  "https://i.imgur.com/SdtQOKp.png",
  "https://i.imgur.com/qbcrDFx.jpg",
  "https://i.imgur.com/tZS8mwx.jpg",
  "https://i.imgur.com/AerUxCA.jpg",
  "https://i.imgur.com/a4yZAtr.jpg",
  "https://i.imgur.com/2BIThrs.jpg",
  "https://i.imgur.com/1xOusTv.jpg",
  "https://i.imgur.com/VNzqi6D.jpg",
  "https://i.imgur.com/0sKr3kn.jpg",
  "https://i.imgur.com/QMO20gA.jpg",
  "https://i.imgur.com/kNSiwEu.jpg",
  "https://i.imgur.com/GjxvCnQ.jpg",
  "https://i.imgur.com/OSPPHXP.jpg",
  "https://i.imgur.com/1HFcDNz.jpg",
  "https://i.imgur.com/EXpvJYX.jpg",
  "https://i.imgur.com/B0DmKZY.jpg",
  "https://i.imgur.com/kgmk6Tc.jpg",
  "https://i.imgur.com/ipmRYrR.jpg",
  "https://i.imgur.com/Q6bZ07Z.jpg",
  "https://i.imgur.com/7h7wnyl.jpg",
  "https://i.imgur.com/vFkSDT4.jpg",
  "https://i.imgur.com/bmDSBVV.jpg",
  "https://i.imgur.com/62kr0cc.jpg",
  "https://i.imgur.com/Pq3CRWX.jpg",
  "https://i.imgur.com/0ZrPefu.jpg",
  "https://i.imgur.com/neS9HqA.jpg",
  "https://i.imgur.com/4iOhu4A.jpg",
  "https://i.imgur.com/PXr8UX3.jpg",
  "https://i.imgur.com/0n2CLXn.jpg",
  "https://i.imgur.com/EW4kXLP.jpg",
  "https://i.imgur.com/svgWyuy.jpg",
  "https://i.imgur.com/7QoegNb.jpg",
  "https://i.imgur.com/eOzp2G0.jpg",
  "https://i.imgur.com/rUJ2nZ1.png",
  "https://i.imgur.com/kOvQmYs.jpg",
  "https://i.imgur.com/s8qE09p.jpg",
  "https://i.imgur.com/im9dVq5.jpg",
  "https://i.imgur.com/x7FlUrH.jpg",
  "https://i.imgur.com/Furcrg1.jpg",
  "https://i.imgur.com/sv5Mmw5.jpg",
  "https://i.imgur.com/euo6haO.jpg"
]

// parte que vai pegar os links 
random = link[Math.floor(Math.random() * link.length)]

//parte que vai chamar o link aleatório
const chama_o_random = {
image: {url:random}
}
teddy.sendMessage(sender, chama_o_random)
reply(`${pushname}foto enviada pro pv chefe🍷🗿`)
}
break

case "teddymodz":
reply("teddy modz domina")
break

case 'neko':{
waifuddd = await axios.get('https://waifu.pics/api/sfw/neko')
templateMassage = {
image: {url:waifuddd.data.url,
quoted: info},
caption: 'Neko!',
footer: "Teddy Modz",
}
teddy.sendMessage(from, templateMassage)
}
break

case "pussy":{
pussy = await fetchJson('https://trevorestapi.onrender.com/api/nsfw/pussy?apikey=clover')

teddy.sendMessage(sender, {image:{url: pussy.url}})
reply("enviado pro pv🍷🗿")
}break

case "ahegao":{
ahegao = await fetchJson('https://trevorestapi.onrender.com/api/nsfw/ahegao?apikey=clover')

teddy.sendMessage(sender, {image:{url: ahegao.url}})
reply("enviado pro pv🍷🗿")
}break

case "nsfwgif":{
gifs = await fetchJson('https://trevorestapi.onrender.com/api/nsfw/gifs?apikey=clover')

teddy.sendMessage(sender, {image:{url: gifs.url}})
reply("enviado pro pv🍷🗿")
}break

case 'waifu':{
waifuddd = await axios.get('https://waifu.pics/api/sfw/waifu')
templateMassage = {
image: {url:waifuddd.data.url,
quoted: info},
caption: 'waifu!',
footer: "Teddy Modz",
}
teddy.sendMessage(from, templateMassage)
}
break

// sticker/figurinhas \\


case 'sticker': case 's': case 'stickergif': case 'sgif': case 'f': case 'figu': {
function TelegraPh (Path) {
	return new Promise (async (resolve, reject) => {
		if (!fs.existsSync(Path)) return reject(new Error("File not Found"))
		try {
			const form = new BodyForm();
			form.append("file", fs.createReadStream(Path))
			const data = await  axios({
				url: "https://telegra.ph/upload",
				method: "POST",
				headers: {
					...form.getHeaders()
				},
				data: form
			})
			return resolve("https://telegra.ph" + data.data[0].src) 
			} catch (err) { return reject(new Error(String(err)))}})}

module.exports = { TelegraPh }
const getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`
}
async function videoToWebp (media) {
const tmpFileOut = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
 const tmpFileIn = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.mp4`)
fs.writeFileSync(tmpFileIn, media)
await new Promise((resolve, reject) => {
  ff(tmpFileIn)
  .on("error", reject)
  .on("end", () => resolve(true))
  .addOutputOptions([
   "-vcodec",
   "libwebp",
   "-vf",
   "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse",
   "-loop",
   "0",
   "-ss",
   "00:00:00",
   "-t",
   "00:00:05",
   "-preset",
   "default",
   "-an",
   "-vsync",
   "0"
  ])
  .toFormat("webp")
  .save(tmpFileOut) })
const buff = fs.readFileSync(tmpFileOut)
 fs.unlinkSync(tmpFileOut)
 fs.unlinkSync(tmpFileIn)
 return buff }
const enviarfiguimg = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path: /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64'): /^https?:\/\//.test(path) ? await (await getBuffer(path)): fs.existsSync(path) ? fs.readFileSync(path): Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
 buffer = await writeExifImg(buff, options)
} else {
 buffer = await imageToWebp(buff)
}

await teddy.sendMessage(jid, {
 sticker: {
url: buffer
 }, ...options
}, {
 quoted
})
return buffer
 }
 const enviarfiguvid = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path: /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64'): /^https?:\/\//.test(path) ? await (await getBuffer(path)): fs.existsSync(path) ? fs.readFileSync(path): Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
 buffer = await writeExifVid(buff, options)
} else {
 buffer = await videoToWebp(buff)
}
await teddy.sendMessage(jid, {
 sticker: {
url: buffer
 }, ...options
}, {
 quoted
})
return buffer
 }
async function imageToWebp (media) {
const tmpFileOut = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
 const tmpFileIn = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.jpg`)

 fs.writeFileSync(tmpFileIn, media)

 await new Promise((resolve, reject) => {
  ff(tmpFileIn)
  .on("error", reject)
  .on("end", () => resolve(true))
  .addOutputOptions([
   "-vcodec",
   "libwebp",
   "-vf",
   "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"
  ])
  .toFormat("webp")
  .save(tmpFileOut)
 })
const buff = fs.readFileSync(tmpFileOut)
 fs.unlinkSync(tmpFileOut)
 fs.unlinkSync(tmpFileIn)
 return buff
}
async function writeExifImg (media, metadata) {
 let wMedia = await imageToWebp(media)
 const tmpFileIn = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
 const tmpFileOut = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
 fs.writeFileSync(tmpFileIn, wMedia)
if (metadata.packname || metadata.author) {
  const img = new webp.Image()
  const json = {
   "sticker-pack-id": `https://github.com/DikaArdnt/Hisoka-Morou`,
   "sticker-pack-name": metadata.packname,
   "sticker-pack-publisher": metadata.author,
   "emojis": metadata.categories ? metadata.categories: [""]
  }
  const exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
  const jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
  const exif = Buffer.concat([exifAttr, jsonBuff])
  exif.writeUIntLE(jsonBuff.length, 14, 4)
  await img.load(tmpFileIn)
  fs.unlinkSync(tmpFileIn)
  img.exif = exif
  await img.save(tmpFileOut)
  return tmpFileOut
 }
}
async function writeExifVid (media, metadata) {
 let wMedia = await videoToWebp(media)
 const tmpFileIn = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
 const tmpFileOut = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
 fs.writeFileSync(tmpFileIn, wMedia)
if (metadata.packname || metadata.author) {
  const img = new webp.Image()
  const json = {
   "sticker-pack-id": `https://github.com/DikaArdnt/Hisoka-Morou`,
   "sticker-pack-name": metadata.packname,
   "sticker-pack-publisher": metadata.author,
   "emojis": metadata.categories ? metadata.categories: [""]
  }
  const exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
  const jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
  const exif = Buffer.concat([exifAttr, jsonBuff])
  exif.writeUIntLE(jsonBuff.length, 14, 4)
  await img.load(tmpFileIn)
  fs.unlinkSync(tmpFileIn)
  img.exif = exif
  await img.save(tmpFileOut)
  return tmpFileOut
 }
}

// nao muda isso 🥺 \\
const pacote = "ꪶ͓Teddy-𝑴𝑫"
//==================\\

const criador = "Teddy Modz"
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
reply('criando figurinha')
const encmedia = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage: info.message.imageMessage
rane = getRandom('.'+ await getExtension(encmedia.mimetype))
imgbuff = await getFileBuffer(encmedia, 'image')
fs.writeFileSync(rane, imgbuff)
const media = rane
ran = getRandom('.'+media.split('.')[1])
const upload = await TelegraPh(media)
await enviarfiguimg(from, util.format(upload), info, {
 packname: pacote, author: criador
})
 } else if ((isMedia && info.message.videoMessage.seconds < 11 || isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11)) {
reply('criando figurinha')
const encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage: info.message.videoMessage
rane = getRandom('.'+ await getExtension(encmedia.mimetype))
imgbuff = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, imgbuff)
const media = rane
ran = getRandom('.'+media.split('.')[1])
const upload = await TelegraPh(media)
await enviarfiguvid(from, util.format(upload), info, {
 packname: pacote, author: criador
})
 } else return reply(`Marque a imagem com o teddy bot ${prefix}sticker ou coloque na legenda, o video ou gif so pode ter 10 segundos de duração`)
}
break


case 'attp': {
if (!isRegistro) return enviar(resposta.registro)
sections = [{
title: "Teddy - MD",
rows: [
 {title: "🏕 Estilo 1 ⚘", rowId: `${prefixo}ttp ${q}`},
 {title: "🏕 Estilo 2 ⚘", rowId: `${prefixo}attp2 ${q}`},   
 {title: "🏕 Estilo 3 ⚘", rowId: `${prefixo}attp3 ${q}`},
 {title: "🏕 Estilo 4 ⚘", rowId: `${prefixo}attp4 ${q}`},
 {title: "🏕 Estilo 5 ⚘", rowId: `${prefixo}attp5 ${q}`},
 {title: "🏕 Estilo 6 ⚘", rowId:`${prefixo}attp6 ${q}`},
]
},
]
 
listMessage7 = {
  text: `Resultados para [ ${q} ]`,
  footer: "",
  title: "🔥 Estilos de attp.",
  buttonText: "🏕 Escolher 🌺",
  sections
}
await teddy.sendMessage(from, listMessage7, {quoted: info})
}
break

case 'ttp':
if (!isRegistro) return enviar(resposta.registro)
if (q < 1) return enviar('Vou fazer fig invisível agora é?')
ttp = encodeURI(`https://api.brizaloka-api.tk/ttp/attp1?apikey=brizaloka&text=${q}`)
ttpp = await getBuffer(ttp)
enviar(resposta.espere)
try {
teddy.sendMessage(from, {sticker: ttpp}, {quoted: ContatVR})
} catch(e) {
console.log(e)
enviar(resposta.erro)
}
break

case 'attp2':
case 'attp3':
case 'attp4':
case 'attp5':
case 'attp6':
if (!isRegistro) return enviar(resposta.registro)
if (q < 1) return enviar('Vou fazer fig invisível?')
ttp = encodeURI(`https://api.brizaloka-api.tk/ttp/${comando}?apikey=brizaloka&text=${q}`)
attp = await getBuffer(ttp)
enviar(resposta.espere)
try {
teddy.sendMessage(from, {sticker: attp}, {quoted: ContatVR})
} catch(e) {
console.log(e)
enviar(resposta.erro)
}
break

case 'clima':
if (!isRegistro) return enviar(resposta.registro)
if (q < 3) return enviar('Insira o nome da sua cidade.')
try {
res = await climaDl(q)
desc = `🌞 Clima 🌥\n\n🌇 Local: ${res[0].lugar}\n🌐 Continente: ${res[0].continente}\n☁️ Clima: ${res[0].clima}\n🌡 Temperatura: ${res[0].temperatura}\n🔥 Temperatura Max: ${res[0].temperatura_max}\n❄ Temperatura Minima: ${res[0].temperatura_minima}\n🌘 Visibilidade: ${res[0].visibilidade}\n🌧 Umidade: ${res[0].umidade}\n🌫 Velocidade Vento: ${res[0].vento}`
teddy.sendMessage(from, { text: desc }, {quoted: info})
} catch(e) {
console.log(e)
enviar(resposta.erro)
}
break

case 'pinterest': {
if (!isRegistro) return enviar(resposta.registro)
if (args.length < 1) return enviar(`Exemplo:\n ${prefixo + comando} anime`)
anu = await pinterest(q)
result = anu[Math.floor(Math.random() * anu.length)]
let buttons = [
{
buttonId: `${prefixo}pinterest ${q}`, 
buttonText: 
{
displayText: '☕ Próxima imagem ⚘'
},
type: 1
}
]
let buttonMessage4 = {
image: { url: result },
caption: `🏕 Olá ${pushname}, aqui está sua imagem 🎲`,
footer: '',
buttons: buttons,
headerType: 4
}
teddy.sendMessage(from, buttonMessage4, { quoted: ImagenVR })
}
break

case 'mediafire':
if (!isRegistro) return enviar(resposta.registro)
if(args.length == 0) return enviar('*🏕 Oops, coloque o link..*')
try {
enviar(resposta.espere)
let media = await mediafireDl(q)
teddy.sendMessage(from, { document: { url: media[0].link }, fileName: media[0].nama, mimetype: media[0].mime }, {quoted: DocVR})
} catch(e) {
console.log(e)
enviar(resposta.erro)
}
break

case 'toimg':
if (!isRegistro) return enviar(resposta.registro)
if (!isQuotedSticker) return enviar('*🏕 Marca uma figurinha*')
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
enviar(resposta.espere)
try {
teddy.sendMessage(from, {image: buff}, {quoted: ContatVR})
} catch(e) {
console.log(e)
enviar(resposta.erro)
}
break

case 'reagir':
if (!isRegistro) return enviar(resposta.registro)
{
teddy.sendMessage(from, { react: { text: '🏕', key: info.key }})               
}
break

case 'programado':
case 'suporte':
case 'dono':
if (!isRegistro) return enviar(resposta.registro)
enviar(resposta.espere)
await delay(5000)
try {
teddy.sendMessage(sender, { contacts: { displayName: `${nomeDono}`, contacts: [{ vcard }]
}})
} catch(e) {
console.log(e)
enviar(resposta.erro)
}
break

case 'ping':
if (!isRegistro) return enviar(resposta.registro)
enviar(resposta.espere)
enviar(`Velocidade: ${latensi.toFixed(4)}`)
break

case 'executar':
if (!isRegistro) return enviar(resposta.registro)
if (!isOwner) return enviar(resposta.dono)
if (args.length < 1) return enviar('Vou executar o vento?')
try {
ev = body.slice(comando.length + 2)
JSON.stringify(eval(ev.replace('await', '')))
} catch(e) {
enviar(e)
console.log(e)
}
break

case 'tag':
case 'hidetag':
if (!isRegistro) return enviar(resposta.registro)
if (!isGroup) return enviar(resposta.grupo)
if (args.length < 1) return enviar('*🏕 Diga oque vou citar...*')
if (!groupAdmins) return enviar(resposta.adm)
value = body.slice(9)
group = await teddy.groupMetadata(from)
member = group['participants']
mem = []
member.map( async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
options = {
text: value,
mentions: mem,
quoted: info
}
teddy.sendMessage(from, options)
break

case 'enquete':
if (!isRegistro) return enviar(resposta.registro)
if (!isGroup) return enviar(resposta.grupo)
if (!isGroupAdmins) return enviar(resposta.adm)
if(q < 0) return reply(`Exemplo: ${prefixo + comando} Fui desenvolvenda pelo Ton?`)
enquete = generateWAMessageFromContent(from, proto.Message.fromObject({
pollCreationMessage: {
options: [
{ optionName: 'Sim'},
{ optionName: 'Não'},
{ optionName: 'Provavelmente Sim'}, 
{ optionName: 'Provavelmente Não'}
],
name: `${q}`,
selectableOptionsCount: 0
}
}), { userJid: from })
await teddy.relayMessage(from, enquete.message, { messageId: enquete.key.id})
break

case 'convite':
case 'entra':
if (!isRegistro) return enviar(resposta.registro)
if (!isOwner) return enviar(resposta.dono)
if(q < 0) return enviar('*🏕 Oops, insira o link do grupo.*')
try {
let linkge = args[0].split('https://chat.whatsapp.com/')[1]
await teddy.groupAcceptInvite(linkge)
delay(5000)
enviar('🏕 Okay, irei entra no grupo. ☁️')
} catch(e) {
console.log(e)
enviar(resposta.erro)
}
break

case 'sair':
if (!isRegistro) return enviar(resposta.registro)
if (!isGroup) return enviar(resposta.grupo)
if (!isOwner) return enviar(resposta.dono)
enviar('*🏕 Okay, irei sair do grupo. 🙁*')
delay(5000)
try {
await teddy.groupLeave(from)
} catch(e) {
console.log(e)
enviar(resposta.erro)
}
break

case 'bloquear':
if (!isRegistro) return enviar(resposta.registro)
if (!isOwner) return enviar(resposta.dono)
if (q < 1) return enviar('Vou bloquear o vento?')
let userb = q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await teddy.sendMessage(from, { react: { text: '✅', key: info.key }})
try {
await teddy.updateBlockStatus(userb, 'block')
} catch(e) {
enviar(resposta.erro)
console.log(e)
}
break

case 'desbloquear':
if (!isRegistro) return enviar(resposta.registro)
if (!isOwner) return enviar(resposta.dono)
if (q < 1) return enviar('Vou desbloquear o teu c*?')
let userd = q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await teddy.sendMessage(from, { react: { text: '✅', key: info.key }})    
try {
await teddy.updateBlockStatus(userd, 'unblock')
} catch(e) {
enviar(resposta.erro)
console.log(e)
}
break

case 'gplink':
if (!isRegistro) return enviar(resposta.registro)
if (!isGroup) return enviar(resposta.grupo)
if (!groupAdmins) return enviar(resposta.adm)
if (!isBotGroupAdmins) return enviar(resposta.botadm)
try {
const linkgp = await teddy.groupInviteCode(from)
teddy.sendMessage(from, { text: `🏷 CHAT 🌺 *${groupName}*\n\n🏕 Total Adms: ${groupAdmins.length}\n☁️ Total Membros: ${groupMembers.length}\n🔗 Link: ${linkgp}`}, {quoted: ContatVR})
} catch(e) {
console.log(e)
enviar(resposta.erro)
}
break

case 'resetarlink':
if (!isRegistro) return enviar(resposta.registro)
if (!isGroup) return enviar(resposta.grupo)
if (!groupAdmins) return enviar(resposta.adm)
if (!isBotGroupAdmins) return enviar(resposta.botadm)
try {
await teddy.groupRevokeInvite(from)
enviar('🏕 Link de convite resetado com sucesso 🤭')
} catch(e) {
console.log(e)
enviar(resposta.erro)
}
break

case 'gp':
case 'grupo':
if (!isRegistro) return enviar(resposta.registro)
if (!isGroup) return enviar(resposta.grupo)
if (!groupAdmins) return enviar(resposta.adm)
if (!isBotGroupAdmins) return enviar(resposta.botadm)
try {
if (q == 'abrir') {
await teddy.groupSettingUpdate(from, 'not_announcement')
enviar('🏕 Grupo aberto com sucesso 💣')
}
if (q == 'fechar') {
await teddy.groupSettingUpdate(from, 'announcement')
enviar('🏕 Grupo fechado com sucesso 😣')
}
if (q == 'livrar') {
await teddy.groupSettingUpdate(from, 'unlocked')
enviar('🏕 Grupo livre com sucesso 🌺')
}
if (q == 'limitar') {
await teddy.groupSettingUpdate(from, 'locked')
enviar('🏕 Grupo limitado com sucesso 😒')
}
} catch(e) {
console.log(e)
enviar(resposta.erro)
}
break

case 'infogp':
if (!isRegistro) return enviar(resposta.registro)
if (!isGroup) return enviar(resposta.grupo)
if (!isBotGroupAdmins) return enviar(resposta.botadm)
enviar(`
🏕 Nome : ${groupName}
🌺 Descrição : ${groupDesc}
🔥️ Id : ${from}
🗓 Data : ${data}
🧭 Horário : ${hora}
`)
break

case 'mudardk':
if (!isRegistro) return enviar(resposta.registro)
if (!isGroup) return enviar(resposta.grupo)
if (!groupAdmins) return enviar(resposta.adm)
if (!isBotGroupAdmins) return enviar(resposta.botadm)
try {
await teddy.groupUpdateDescription(from, `${q}`)
enviar('🏕 Descrição alterada com sucesso 🔥')
} catch(e) {
console.log(e)
enviar(resposta.erro)
}
break

case 'mudarnm':
if (!isRegistro) return enviar(resposta.registro)
if (!isGroup) return enviar(resposta.grupo)
if (!groupAdmins) return enviar(resposta.adm)
if (!isBotGroupAdmins) return enviar(resposta.botadm)
try {
await teddy.groupUpdateSubject(from, `${q}`)
enviar('🏕 Nome alterado com sucesso 🌺')
} catch(e) {
console.log(e)
enviar(resposta.erro)
}
break

case 'rebaixar':
if (!isRegistro) return enviar(resposta.registro)
if (!isGroup) return enviar(resposta.grupo)
if (!groupAdmins) return enviar(resposta.adm)
if (args.length < 1) return enviar('Digite o número, animal')
if (!isBotGroupAdmins) return enviar(resposta.botadm)
try {
teddy.groupParticipantsUpdate(from, [`${q}@s.whatsapp.net`], 'demote')
enviar(`*🏕 Vixi @${q}. Você foi rebaixado a membro comum. 🤭*`)
} catch(e) {
console.log(e)
enviar(resposta.erro)
}
break

case 'promover':
if (!isRegistro) return enviar(resposta.registro)
if (!isGroup) return enviar(resposta.grupo)
if (!groupAdmins) return enviar(resposta.adm)
if (args.length < 1) return enviar('Cade o número, mongolóide')
if (!isBotGroupAdmins) return enviar(resposta.botadm)
try {
teddy.groupParticipantsUpdate(from, [`${q}@s.whatsapp.net`], 'promote')
enviar(`*🏕 Parabéns @${q}. Você foi promovido a adm. ☺*`)
} catch(e) {
console.log(e)
enviar(resposta.erro)
}
break


// comandos de fotos \\



case "cosplay":
case "waifu":
case "waifu2":
case "shota":
case "loli":
case "yotsuba":
case "shinomiya":
case "yumeko":
case "tejina":
case "chiho":
case "shizuka":
case "boruto":
case "kagori":
case "kaga":
case "kotori":
case "mikasa":
case "akiyama":
case "hinata":
case "minato":
case "naruto":
case "nezuko":
case "yuki":
case "hestia":
case "emilia":
case "itachi":
case "madara":
case "sasuke":
case "deidara":
case "sakura":
case "tsunade":
try{
teddy.sendMessage(from, { react: { text: '🕚', key: info.key }})
const fot = await fetchJson(`https://trevorestapi.onrender.com/api/anime/${comando}?apikey=clover`)
let buttons = [
{buttonId: `${prefixo}${comando}`, buttonText: {displayText: '☕ Próxima imagem ⚘'},type: 1}
]
let buttonMessage4 = {
image: { url:fot.url },
caption: `🏕 Olá ${pushname}, aqui está sua imagem 🎲`,
footer: '',
buttons: buttons,
headerType: 4
}
teddy.sendMessage(from, buttonMessage4, { quoted: ImagenVR })
}catch (e) {
console.log(e)
enviar("nao achei a foto, tente novamente mais tarde")
}
break

case "tiktokvd":{
if (q < 1) return enviar("kd o link do video?")
enviar ("aguarde...")
const fot = await fetchJson(`https://trevorestapi.onrender.com/api/download/tiktok?url=${q}&apikey=clover`)
teddy.sendMessage(from, {video: { url:fot.semMarca}}, { quoted: VideoVR });
}break


case 'leveling':
if (!isGroup) return reply('Só em Grupo')
if (!isGroupAdmins) return reply('Você precisa ser adm')
if (args.length < 1) return reply('Ative pressione 1, Desativar pressione 0')
if (Number(args[0]) === 1) {
if (isLevelingOn) return reply('*O recurso de nível já estava ativo antes*')
_leveling.push(from)
fs.writeFileSync('./datab/leveling.json', JSON.stringify(_leveling))
enviar("ativado com sucesso")
} else if (Number(args[0]) === 0) {
if (!isLevelingOn) return reply(`O recurso de level já está Desativado neste grupo.`)
_leveling.splice(from, 1)
fs.writeFileSync('./datab/leveling.json', JSON.stringify(_leveling))
enviar("desativado com sucesso")
} else {
enviar('「* Adicionar parâmetro 1 ou 0 ')
}
break

case 'level':
if (!isLevelingOn) return reply(`O leveling precisa ta ativado pra isso fale com algum adm e peca ora ele mandar: ${prefix}leveling 1 `)
if (!isGroup) return reply(enviar.msg.grupo)
const userLevel = getLevelingLevel(sender)
const userXp = getLevelingXp(sender)
if (userLevel === undefined && userXp === undefined) return reply(enviar.levelnol)
sem = sender.replace('@s.whatsapp.net','')
try {
ppimg = await teddy.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
buffer = await getBuffer(ppimg)

let buttonMessage4 = {
image: { url:buffer },
caption:`
┏┉┉━═『✯✯✯✯✯』═━┉┉┓
⎊      𖠌𝙻𝙴𝚅𝙴𝙻𝙸𝙽𝙶𖠌       ⎊                                                                                        
┗┉┉━═『✯✯✯✯✯』═━┉┉┛
║│⿻͜͡ ✑❲𝙽𝚘𝚖𝚎❳:
║│${pushname}
║│⿻͜͡ ✑ ❲𝙽𝚞́𝚖𝚎𝚛𝚘❳: ${sender.split("@s.whatsapp.net")[0]} 
║│
║│⿻͜͡ ✑ ❲𝚇ᴘ❳: ${userXp}
║│
║│⿻͜͡ ✑ ❲𝙻ᴇᴠᴇʟ❳ : ${userLevel}
║│
║│⿻͜͡ ✑ ❲𝙿ᴀᴛᴇɴᴛᴇ❳ :
║│${patt}
║╰──────────────┓
║
┗══━®[✯✯✯✯✯✯]©━══━┛`,
footer: '',
//buttons: buttons,
headerType: 4
}
teddy.sendMessage(from, buttonMessage4, { quoted: ImagenVR })

break

















default:

// Comandos sem prefix
switch(testat){
}
if (!verificarIntervalo()) {
    reply('Aguarde um pouco antes de executar o comando novamente ${pushname}...');
    return; 
  } // isso vai no começo de todas suas cases para executar a função, LEMBRE DE EXPORTAR NO ARQUIVO DE FUNCOES E IMPORTAR NA INDEX CASO ESTEJA SEPARADO! é isso :) by: dg </>
if (isBanchat && !isGroupAdmins && !isOwner){
if (!isGroupAdmins && !isOwner) return
if (budy2.startsWith('unbangp')){
if (isCmd && !isBanchat && !isGroupAdmins) return reply(`Este grupo esta banido, ou seja não estou ouvindo ninguém`)
let lfd = bancht.indexOf(from)
bancht.splice(lfd, 1)
fs.writeFileSync('./datab/grupos/banchat.json', JSON.stringify(bancht))
reply(`Grupo desbanido...`)
}
}

if(budy.match(`Oii`)){
enviar(`Olá Digite ${prefix}help para ver o menu`)
await teddy.sendMessage(from, { react: { text: '🔥', key: info.key }})     
}

///////////ANTI-SPAM/////////



if(budy.match(`menu`)){
teddy.sendMessage(from,{audio: {url: "datab/armazenamento/audios/menu.mp3"},mimetype: 'audio/mp4',ptt: true},{quoted:info})
}

if(budy.match('Trava zap')){
teddy.sendMessage(from,{audio: {url: "datab/armazenamento/audios/travazap.mp3"},mimetype: 'audio/mp4',ptt: true},{quoted:info})
}

if(budy.match('Bora tomar uma')){
teddy.sendMessage(from,{audio: {url: "datab/armazenamento/audios/boratomaruma.mp3"},mimetype: 'audio/mp4',ptt: true},{quoted:info})
}

if(budy.match('bora tomar uma')){
teddy.sendMessage(from,{audio: {url: "datab/armazenamento/audios/boratomaruma.mp3"},mimetype: 'audio/mp4',ptt: true},{quoted:info})
}

if(budy.match('fdp')){
teddy.sendMessage(from,{audio: {url: "datab/armazenamento/audios/fdp.mp3"},mimetype: 'audio/mp4',ptt: true},{quoted:info})
}

if(budy.match('FDP')){
teddy.sendMessage(from,{audio: {url: "datab/armazenamento/audios/fdp.mp3"},mimetype: 'audio/mp4',ptt: true},{quoted:info})
}

if(budy.match('Fdp')){
teddy.sendMessage(from,{audio: {url: "datab/armazenamento/audios/fdp.mp3"},mimetype: 'audio/mp4',ptt: true},{quoted:info})
}

if(budy.match('obg')){
teddy.sendMessage(from,{audio: {url: "datab/armazenamento/audios/amigo.mp3"},mimetype: 'audio/mp4',ptt: true},{quoted:info})
}

if(budy.match('Obg')){
teddy.sendMessage(from,{audio: {url: "datab/armazenamento/audios/amigo.mp3"},mimetype: 'audio/mp4',ptt: true},{quoted:info})
}

if(budy.match('Amigo')){
teddy.sendMessage(from,{audio: {url: "datab/armazenamento/audios/amigo.mp3"},mimetype: 'audio/mp4',ptt: true},{quoted:info})
}

if(budy.match('Boa noite')){
teddy.sendMessage(from,{audio: {url: "datab/armazenamento/audios/boanoite.mp3"},mimetype: 'audio/mp4',ptt: true},{quoted:info})
}

if(budy.match('Oi')){
teddy.sendMessage(from,{audio: {url: "datab/armazenamento/audios/gemidão.mp3"},mimetype: 'audio/mp4',ptt: true},{quoted:info})
}


if(budy.match('Cyclonado')){
teddy.sendMessage(from,{audio: {url: "datab/armazenamento/audios/cyclonado.mp3"},mimetype: 'audio/mp4',ptt: true},{quoted:info})
}

if(budy.match('Eae')){
teddy.sendMessage(from,{audio: {url: "datab/armazenamento/audios/eae.mp3"},mimetype: 'audio/mp4',ptt: true},{quoted:info})
}

if(budy.match('Viado')){
teddy.sendMessage(from,{audio: {url: "datab/armazenamento/audios/viado.mp3"},mimetype: 'audio/mp4',ptt: true},{quoted:info})
}

if(budy.match('Bom dia')){
teddy.sendMessage(from,{audio: {url: "datab/armazenamento/audios/bomdia.mp3"},mimetype: 'audio/mp4',ptt: true},{quoted:info})
}

if (budy.includes("Br")){
		     if (!isGroup) return
		     if (!isAntiLink) return
		     if (isGroupAdmins) return reply(`*${pushname}* Você é adm, não vou te banir!`)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		    setTimeout( () => {
	    	reply(`*Vai com Deuskkkk*`)
	     	}, 100)
	     	reply(`*_「 link detectado! 」_*\n*${pushname}* você será banido do grupo: *${groupMetadata.subject}* !`)
		    setTimeout( () => {
		    teddy.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
		      setTimeout( () => {
	          
	          }, 0)
		      }
		      
if (budy.includes("VENDENDO")){
		     if (!isGroup) return
		     if (!isAntiLink) return
		     if (isGroupAdmins) return reply(`*${pushname}* Você é adm, não vou te banir!`)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		    setTimeout( () => {
	    	reply(`*Vai com Deuskkkk*`)
	     	}, 100)
	     	reply(`*_「 link detectado! 」_*\n*${pushname}* você será banido do grupo: *${groupMetadata.subject}* !`)
		    setTimeout( () => {
		    teddy.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
		      setTimeout( () => {
	          
	          }, 0)
		      }

if (budy.includes("VENDENDO")){
		     if (!isGroup) return
		     if (!isAntiLink) return
		     if (isGroupAdmins) return reply(`*${pushname}* Você é adm, não vou te banir!`)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		    setTimeout( () => {
	    	reply(`*Vai com Deuskkkk*`)
	     	}, 100)
	     	reply(`*_「 link detectado! 」_*\n*${pushname}* você será banido do grupo: *${groupMetadata.subject}* !`)
		    setTimeout( () => {
		    teddy.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
		      setTimeout( () => {
	          
	          }, 0)
		      }

if (budy.includes("sexo")){
		     if (!isGroup) return
		     if (!isAntiLink) return
		     if (isGroupAdmins) return reply(`*${pushname}* Você é adm, não vou te banir!`)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		    setTimeout( () => {
	    	reply(`*Vai com Deuskkkk*`)
	     	}, 100)
	     	reply(`*_「 link detectado! 」_*\n*${pushname}* você será banido do grupo: *${groupMetadata.subject}* !`)
		    setTimeout( () => {
		    teddy.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
		      setTimeout( () => {
	          
	          }, 0)
		      }

if (budy.includes("Vendendo")){
		     if (!isGroup) return
		     if (!isAntiLink) return
		     if (isGroupAdmins) return reply(`*${pushname}* Você é adm, não vou te banir!`)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		    setTimeout( () => {
	    	reply(`*Vai com Deuskkkk*`)
	     	}, 100)
	     	reply(`*_「 link detectado! 」_*\n*${pushname}* você será banido do grupo: *${groupMetadata.subject}* !`)
		    setTimeout( () => {
		    teddy.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
		      setTimeout( () => {
	          
	          }, 0)
		      }

if (budy.includes("pika")){
		     if (!isGroup) return
		     if (!isAntiLink) return
		     if (isGroupAdmins) return reply(`*${pushname}* Você é adm, não vou te banir!`)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		    setTimeout( () => {
	    	reply(`*Vai com Deuskkkk*`)
	     	}, 100)
	     	reply(`*_「 link detectado! 」_*\n*${pushname}* você será banido do grupo: *${groupMetadata.subject}* !`)
		    setTimeout( () => {
		    teddy.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
		      setTimeout( () => {
	          
	          }, 0)
		      }

if (budy.includes("Vendendo")){
		     if (!isGroup) return
		     if (!isAntiLink) return
		     if (isGroupAdmins) return reply(`*${pushname}* Você é adm, não vou te banir!`)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		    setTimeout( () => {
	    	reply(`*Vai com Deuskkkk*`)
	     	}, 100)
	     	reply(`*_「 link detectado! 」_*\n*${pushname}* você será banido do grupo: *${groupMetadata.subject}* !`)
		    setTimeout( () => {
		    teddy.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
		      setTimeout( () => {
	          
	          }, 0)
		      }

if (budy.includes("Vc é preto")){
		     if (!isGroup) return
		     if (!isAntiLink) return
		     if (isGroupAdmins) return reply(`*${pushname}* Você é adm, não vou te banir!`)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		    setTimeout( () => {
	    	reply(`*Vai com Deuskkkk*`)
	     	}, 100)
	     	reply(`*_「 racismo detectado! 」_*\n*${pushname}* você será banido do grupo: *${groupMetadata.subject}* !`)
		    setTimeout( () => {
		    teddy.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
		      setTimeout( () => {
	          
	          }, 0)
		      }

if (budy.includes("macaco")){
		     if (!isGroup) return
		     if (!isAntiLink) return
		     if (isGroupAdmins) return reply(`*${pushname}* Você é adm, não vou te banir!`)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		    setTimeout( () => {
	    	reply(`*Vai com Deuskkkk*`)
	     	}, 100)
	     	reply(`*_「 racismo detectado! 」_*\n*${pushname}* você será banido do grupo: *${groupMetadata.subject}* !`)
		    setTimeout( () => {
		    teddy.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
		      setTimeout( () => {
	          
	          }, 0)
		      }		      
		      
if (budy.includes("VENDENDO")){
		     if (!isGroup) return
		     if (!isAntiLink) return
		     if (isGroupAdmins) return reply(`*${pushname}* Você é adm, não vou te banir!`)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		    setTimeout( () => {
	    	reply(`*Vai com Deuskkkk*`)
	     	}, 100)
	     	reply(`*_「 vendas detectado! 」_*\n*${pushname}* você será banido do grupo: *${groupMetadata.subject}* !`)
		    setTimeout( () => {
		    teddy.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
		      setTimeout( () => {
	          
	          }, 0)
		      }

if (budy.includes("PIX")){
		     if (!isGroup) return
		     if (!isAntiLink) return
		     if (isGroupAdmins) return reply(`*${pushname}* Você é adm, não vou te banir!`)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		    setTimeout( () => {
	    	reply(`*Vai com Deuskkkk*`)
	     	}, 100)
	     	reply(`*_「 vendas detectado! 」_*\n*${pushname}* você será banido do grupo: *${groupMetadata.subject}* !`)
		    setTimeout( () => {
		    teddy.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
		      setTimeout( () => {
	          
	          }, 0)
		      }		      

if (budy.includes("www.")){
		     if (!isGroup) return
		     if (!isAntiLink) return
		     if (isGroupAdmins) return reply(`*${pushname}* Você é adm, não vou te banir!`)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		    setTimeout( () => {
	    	reply(`*Vai com Deuskkkk*`)
	     	}, 100)
	     	reply(`*_「 link detectado! 」_*\n*${pushname}* você será banido do grupo: *${groupMetadata.subject}* !`)
		    setTimeout( () => {
		    teddy.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
		      setTimeout( () => {
	          
	          }, 0)
		      }

if (budy.includes("Preços")){
		     if (!isGroup) return
		     if (!isAntiLink) return
		     if (isGroupAdmins) return reply(`*${pushname}* Você é adm, não vou te banir!`)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		    setTimeout( () => {
	    	reply(`*Vai com Deuskkkk*`)
	     	}, 100)
	     	reply(`*_「 link detectado! 」_*\n*${pushname}* você será banido do grupo: *${groupMetadata.subject}* !`)
		    setTimeout( () => {
		    teddy.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
		      setTimeout( () => {
	          
	          }, 0)
		      }

if (budy.includes("preços")){
		     if (!isGroup) return
		     if (!isAntiLink) return
		     if (isGroupAdmins) return reply(`*${pushname}* Você é adm, não vou te banir!`)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		    setTimeout( () => {
	    	reply(`*Vai com Deuskkkk*`)
	     	}, 100)
	     	reply(`*_「 link detectado! 」_*\n*${pushname}* você será banido do grupo: *${groupMetadata.subject}* !`)
		    setTimeout( () => {
		    teddy.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
		      setTimeout( () => {
	          
	          }, 0)
		      }

if (budy.includes("vendo")){
		     if (!isGroup) return
		     if (!isAntiLink) return
		     if (isGroupAdmins) return reply(`*${pushname}* Você é adm, não vou te banir!`)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		    setTimeout( () => {
	    	reply(`*Vai com Deuskkkk*`)
	     	}, 100)
	     	reply(`*_「 link detectado! 」_*\n*${pushname}* você será banido do grupo: *${groupMetadata.subject}* !`)
		    setTimeout( () => {
		    teddy.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
		      setTimeout( () => {
	          
	          }, 0)
		      }

if (budy.includes("Pix")){
		     if (!isGroup) return
		     if (!isAntiLink) return
		     if (isGroupAdmins) return reply(`*${pushname}* Você é adm, não vou te banir!`)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		    setTimeout( () => {
	    	reply(`*Vai com Deuskkkk*`)
	     	}, 100)
	     	reply(`*_「 link detectado! 」_*\n*${pushname}* você será banido do grupo: *${groupMetadata.subject}* !`)
		    setTimeout( () => {
		    teddy.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
		      setTimeout( () => {
	          
	          }, 0)
		      }

if (budy.includes("pix")){
		     if (!isGroup) return
		     if (!isAntiLink) return
		     if (isGroupAdmins) return reply(`*${pushname}* Você é adm, não vou te banir!`)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		    setTimeout( () => {
	    	reply(`*Vai com Deuskkkk*`)
	     	}, 100)
	     	reply(`*_「 link detectado! 」_*\n*${pushname}* você será banido do grupo: *${groupMetadata.subject}* !`)
		    setTimeout( () => {
		    teddy.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
		      setTimeout( () => {
	          
	          }, 0)
		      }

if (budy.includes(".br")){
		     if (!isGroup) return
		     if (!isAntiLink) return
		     if (isGroupAdmins) return reply(`*${pushname}* Você é adm, não vou te banir!`)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		    setTimeout( () => {
	    	reply(`*Vai com Deuskkkk*`)
	     	}, 100)
	     	reply(`*_「 link detectado! 」_*\n*${pushname}* você será banido do grupo: *${groupMetadata.subject}* !`)
		    setTimeout( () => {
		    teddy.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
		      setTimeout( () => {
	          
	          }, 0)
		      }
		      
if (budy.includes("VENDENDO")){
		     if (!isGroup) return
		     if (!isAntiLink) return
		     if (isGroupAdmins) return reply(`*${pushname}* Você é adm, não vou te banir!`)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		    setTimeout( () => {
	    	reply(`*Vai com Deuskkkk*`)
	     	}, 100)
	     	reply(`*_「 link detectado! 」_*\n*${pushname}* você será banido do grupo: *${groupMetadata.subject}* !`)
		    setTimeout( () => {
		    teddy.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
		      setTimeout( () => {
	          
	          }, 0)
		      }

if (budy.includes("Vendendo")){
		     if (!isGroup) return
		     if (!isAntiLink) return
		     if (isGroupAdmins) return reply(`*${pushname}* Você é adm, não vou te banir!`)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		    setTimeout( () => {
	    	reply(`*Vai com Deuskkkk*`)
	     	}, 100)
	     	reply(`*_「 link detectado! 」_*\n*${pushname}* você será banido do grupo: *${groupMetadata.subject}* !`)
		    setTimeout( () => {
		    teddy.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
		      setTimeout( () => {
	          
	          }, 0)
		      }

if (budy.includes("VENDO")){
		     if (!isGroup) return
		     if (!isAntiLink) return
		     if (isGroupAdmins) return reply(`*${pushname}* Você é adm, não vou te banir!`)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		    setTimeout( () => {
	    	reply(`*Vai com Deuskkkk*`)
	     	}, 100)
	     	reply(`*_「 link detectado! 」_*\n*${pushname}* você será banido do grupo: *${groupMetadata.subject}* !`)
		    setTimeout( () => {
		    teddy.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
		      setTimeout( () => {
	          
	          }, 0)
		      }
		      
if (budy.includes("VENDENDO")){
		     if (!isGroup) return
		     if (!isAntiLink) return
		     if (isGroupAdmins) return reply(`*${pushname}* Você é adm, não vou te banir!`)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		    setTimeout( () => {
	    	reply(`*Vai com Deuskkkk*`)
	     	}, 100)
	     	reply(`*_「 link detectado! 」_*\n*${pushname}* você será banido do grupo: *${groupMetadata.subject}* !`)
		    setTimeout( () => {
		    teddy.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
		      setTimeout( () => {
	          
	          }, 0)
		      }

if (budy.includes("Macaco")){
		     if (!isGroup) return
		     if (!isAntiLink) return
		     if (isGroupAdmins) return reply(`*${pushname}* Você é adm, não vou te banir!`)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		    setTimeout( () => {
	    	reply(`*Vai com Deuskkkk*`)
	     	}, 100)
	     	reply(`*_「 link detectado! 」_*\n*${pushname}* você será banido do grupo: *${groupMetadata.subject}* !`)
		    setTimeout( () => {
		    teddy.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
		      setTimeout( () => {
	          
	          }, 0)
		      }		      

if (budy.includes("Vendo")){
		     if (!isGroup) return
		     if (!isAntiLink) return
		     if (isGroupAdmins) return reply(`*${pushname}* Você é adm, não vou te banir!`)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		    setTimeout( () => {
	    	reply(`*Vai com Deuskkkk*`)
	     	}, 100)
	     	reply(`*_「 link detectado! 」_*\n*${pushname}* você será banido do grupo: *${groupMetadata.subject}* !`)
		    setTimeout( () => {
		    teddy.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
		      setTimeout( () => {
	          
	          }, 0)
		      }

if (budy.includes(".com")){
		     if (!isGroup) return
		     if (!isAntiLink) return
		     if (isGroupAdmins) return reply(`*${pushname}* Você é adm, não vou te banir!`)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		    setTimeout( () => {
	    	reply(`*Vai com Deuskkkk*`)
	     	}, 100)
	     	reply(`*_「 link detectado! 」_*\n*${pushname}* você será banido do grupo: *${groupMetadata.subject}* !`)
		    setTimeout( () => {
		    teddy.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
		      setTimeout( () => {
	          
	          }, 0)
		      }

if (budy.includes("https://")){
		     if (!isGroup) return
		     if (!isAntiLink) return
		     if (isGroupAdmins) return reply(`*${pushname}* Você é adm, não vou te banir!`)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		    setTimeout( () => {
	    	reply(`*Vai com Deuskkkk*`)
	     	}, 100)
	     	reply(`*_「 link detectado! 」_*\n*${pushname}* você será banido do grupo: *${groupMetadata.subject}* !`)
		    setTimeout( () => {
		    teddy.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
		      setTimeout( () => {
	          
	          }, 0)
		      }
if (budy.includes("wa.me/")){
		     if (!isGroup) return
		     if (!isAntiLink) return
		     if (isGroupAdmins) return reply(`*${pushname}* Você é adm, não vou te banir!`)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		    setTimeout( () => {
	    	reply(`*vai com Deuskkkk*`)
	     	}, 100)
	     	reply(`*_「link detectado!」_*\n*${pushname}* você será banido do grupo: *${groupMetadata.subject}* !`)
		    setTimeout( () => {  
		    teddy.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
		      setTimeout( () => {
	          
	          }, 0)
		      }
if (budy.includes("http://")){
		     if (!isGroup) return
		     if (!isAntiLink) return
		     if (isGroupAdmins) return reply(`*${pushname}* Você é adm, não vou te banir!`)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		    setTimeout( () => {
	    	reply(`*vai com Deuskkkk*`)
	     	}, 100)
	     	reply(`*_「 link detectado 」_*\n*${pushname}* você será banido do grupo: *${groupMetadata.subject}* !`)
		    setTimeout( () => {  
		    teddy.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => {enviar(`*ERROR:* ${e}`)}) 
					}, 10)
		      setTimeout( () => {
	          
	          }, 0)
		      }

// Resposta quando o comando não é encontrado
if (isCmd){
enviar('*O comando não foi encontrado... 😣*')
await teddy.sendMessage(from, { react: { text: '💣', key: info.key }})     
}

if (messagesC == 'corno'){
tujuh = fs.readFileSync('./datab/armazenamento/audios/corno.mp3')
await teddy.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: ContatVR})
}

}

} catch (erro) {
console.log(erro)
}})

teddy.ev.on('connection.update', (update) => {
const { connection, lastDisconnect } = update

if(connection === 'close') {
console.log('\033[1;30mConexão resetada.\x1b[1;37m')
var shouldReconnect = (lastDisconnect.error.Boom)?.output?.statusCode !== DisconnectReason.loggedOut  

if(connection === 'connecting') {
console.log('\033[1;30mRefazendo conexão...\x1b[1;37m')

if(connection === 'open') {
console.log('\033[1;32mTeddy 1.0 conectando ✓\x1b[1;37m')

starts()
}}}

if(update.isNewLogin) {
starts()
}})}
starts()