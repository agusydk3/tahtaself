/*Codded by Tahta Bot

Special Thanks:
Fazone
Sanzking
Dimasdm
Galuh
*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');

/* CAN CODE SOMEONE WHO HAVE A TIME DO IT PLEASE?
Asena.addCommand({pattern: 'meme ?(.*)', fromMe: true}, (async (message, match) => {    
    if (message.reply_message === false) return await message.sendMessage('*Bir fotoğraf veya videoya yanıt verin!*');
    var topText, bottomText;

    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[0];
    } else {
        topText = match[1];
    }

    var info = await message.reply('```Medya indiriliyor & sticker yapılıyor...```');
    
    var location = await message.client.downloadAndSaveMediaMessage({
        key: {
            remoteJid: message.reply_message.jid,
            id: message.reply_message.id
        },
        message: message.reply_message.data.quotedMessage
    });
}));
*/