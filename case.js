case "tel2":
case "tel1":
if(q.length == 0) {
let al_id = conn.message.extendedTextMessage.contextInfo.participant;
resultad4 = '@' + al_id.replace("@s.whatsapp.net", "");
resultad3 = resultad4.replace('@55', '')
if(resultad3.length === 10) {
resultad3 = q.replace(/(\d{2})/, "$19");
reply(`aguarde ${pushname}, estou consultando numero: ${resultad3}`);
upp = await axios.get(`https://havity-consultas-1.drakenhs.repl.co/api/consultas?consult=${command}&apikey=havityconsultas29&msg=${q}`);
client.sendMessage(from, upp, {quoted: info});
} else if(q.length == 11) {
reply(`aguarde ${pushname}, estou consultando o numero: ${resultad3}`);
upp = await axios.get(`https://havity-consultas-1.drakenhs.repl.co/api/consultas?consult=${command}&apikey=havityconsultas29&msg=${q}`);
client.sendMessage(from, upp, {quoted: info});
} else {
reply('esse número não é um número brasileiro');
}
} else if(q.length === 10) {
resultad3 = q.replace(/(\d{2})/, "$19");
reply(`Aguarde ${pushname}, estou consultando numero: ${resultad3}`);
upp = await axios.get(`https://havity-consultas-1.drakenhs.repl.co/api/consultas?consult=${command}&apikey=havityconsultas29&msg=${q}`);
client.sendMessage(from, upp, {quoted: info});
} else if(q.length === 13) {
com55k = `@${q}`;
resultad3 = com55k.replace('@55', '');
reply(`Aguarde ${pushname}, estou consultando o numero: ${resultad3}`);
upp = await axios.get(`https://havity-consultas-1.drakenhs.repl.co/api/consultas?consult=${command}&apikey=havityconsultas29&msg=${q}`);
client.sendMessage(from, upp, {quoted: info});
} else if(q.length === 11) {
reply(`Aguarde ${pushname}, estou consultando o numero: ${q}`);
upp = await axios.get(`https://havity-consultas-1.drakenhs.repl.co/api/consultas?consult=${command}&apikey=havityconsultas29&msg=${q}`);
client.sendMessage(from, upp, {quoted: info});
} else {
reply('numero invalido');
} 
dads = [{index: 1, urlButton: {displayText: `Copiar dados`, url: `https://www.whatsapp.com/otp/copy/${upp.data.message}`}}]
client.sendMessage(from, {text: 'Aqui está os dados ;)', footer: 'Teddy Md', templateButtons: dads}, {ephemeralExpiration: 604800})
break