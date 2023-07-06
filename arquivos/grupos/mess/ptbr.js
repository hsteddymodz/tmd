const fs = require('fs');

const infos = JSON.parse(fs.readFileSync('./data/settings.json'))
const { prefix, ownerName, ownerNumber, cdd, ammOff, cr, crfig, crlv, crtt, crh } = infos

exports.wait = () => {
	return`⏳Aguarde alguns instantes...⏳\n\nCaso não funcione, use o comando novamente.`
}

exports.tterro = () => {
	return `Você deve digitar ${prefix}ppt pedra, ${prefix}ppt papel ou ${prefix}ppt tesoura`
}

exports.waitmusic = () => {
	return`⏳Aguarde alguns instantes...⏳\n\nA sua música será enviada em até 2 minutos\nCaso não envie, tente especificar o nome da música.`
}

exports.waitplay = () => {
	return`⏳Comando play aguarde alguns instantes...⏳\n\nA sua música será enviada em até 2 minutos\nCaso não envie, tente especificar o nome da música.`
}

exports.waitplay1 = () => {
	return`⏳Comando play1 aguarde alguns instantes...⏳\n\nA sua música será enviada em até 2 minutos\nCaso não envie, tente especificar o nome da música.`
}

exports.waitplay2 = () => {
	return`⏳Comando play2 aguarde alguns instantes...⏳\n\nA sua música será enviada em até 2 minutos\nCaso não envie, tente especificar o nome da música.`
}

exports.waitplay3 = () => {
	return`⏳Comando play3 aguarde alguns instantes...⏳\n\nA sua música será enviada em até 2 minutos\nCaso não envie, tente especificar o nome da música.`
}

exports.waitfig = () => {
	return`⏳Aguarde alguns instantes...⏳\n\nA criação de stickers demora alguns segundos.`
}

exports.waitgif = () => {
	return`⏳Aguarde alguns instantes...⏳\n\nA criação de stickers demora alguns segundos\nA criação de stickergif leva de 10 segundos á 1 minuto dependendo do tamanho do gif\nLimite de 10 segundos por gif.`
}

exports.waitsfw = () => {
	return`⏳Aguarde alguns instantes...⏳\n\nO bot irá enviar o hentai em até 2 minutos\nTente novamente caso não envie.`
}

exports.waitpor = () => {
	return`⏳Aguarde alguns instantes...⏳\n\nO bot irá enviar a img\nTente novamente caso não envie.`
}

exports.waitimg= () => {
	return`⏳Aguarde alguns instantes...⏳\n\nO bot irá enviar criar e enviar a imagem\nO processo dura no mínimo 10 segundos\nTente novamente caso não envie.`
}

exports.success = () => {
	return`✅Sucesso✅`
}

exports.levelon = () => {
	return`✅função leveis foi ativada✅`
}

exports.leveloff = () => {
	return`❌função leveis foi desativada❌`
}

exports.levelnoton = () => {
	return`🚫A função leveis está desativada🚫`
}

exports.levelnol = () => {
	return`Você está level 0... \njá se registrou para começar ganhar XP?`
}

exports.ban = () => {
	return`🤝🏼Você está banido🤝🏼`
}

exports.stick = () => {
	return`❌Ocorreu um erro na criação de sticker❌`
}

exports.Lv = () => {
	return`❌Link inválido❌`
}

exports.group = () => {
	return`❌O comando só pode ser usado em grupos❌`
}

exports.ownerG = (ownerName) => {
	return`O comando só pode ser usado pelo ${ownerName}`
}

exports.lia = () => {
	return`Só a Lia pode usar😳👌`
}

exports.ownerB = (ownerName) => {
	return`O comando só pode ser usado pelo dono`
}

exports.isprem = (ownerName) => {
	return`O comando só pode ser usado pelo dono`
}

exports.admin = () => {
	return`❌O comando só pode ser usado por administradores do grupo❌`
}

exports.modoanime = () => {
	return`❌Modo anime está desativado ❌\n\nEsse comando foi privado para evitar flode❌`
}

exports.Badmin = () => {
	return`❌O comando só pode ser usado quando o bot é um administrador do grupo❌'`
}

exports.tobizinB = (prefix) => {
	return`── 「🍥 REGISTRE-SE 🍥」 ──\nOlá como!\nVocê não está registrado no banco de dados, \n\nComando : ${prefix} registrar nome|idade\nExemplo : ${prefix}daftar Tobi|18`
}

exports.nsfw = () => {
	return`🚫funções NSFW desativadas nesse grupo🚫`
}

exports.erro = () => {
	return`❌ocorreu um erro❌\n\nTente novamente.`
}


