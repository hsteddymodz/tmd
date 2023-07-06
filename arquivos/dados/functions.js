const runtime = function(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " dia, " : " dias, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " hora, " : " horas, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " minuto, " : " minutos, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " segundo" : " segundos") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}

const getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`;
}

const moment = require('moment-timezone')
const date = moment.tz('America/Sao_Paulo').format('DD/MM/YY');
const hr = moment.tz('America/Sao_Paulo').format('HH:mm:ss')

const getGroupAdmins = (participants) => {
admins = []
for (let i of participants) {
if(i.admin == 'admin') admins.push(i.id)
if(i.admin == 'adm') admins.push(i.id)}
return admins}
var cor = ['red','cyan','blue','white','green','yellow','magenta']
cores = cor[Math.floor(Math.random() * cor.length)]
module.exports = { cores, hr, runtime, getRandom, getGroupAdmins ,date }