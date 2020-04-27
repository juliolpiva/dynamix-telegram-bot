const dotenv = require('dotenv');
const TeleBot = require('telebot');

dotenv.config();

const bot = new TeleBot(process.env.BOT_TOKEN);

// On every type of message (& command)
bot.on(['*', '/*'], (msg, self) => {

    let id = msg.from.id;
    let replyToMessage = msg.message_id;
    let parseMode = 'html';

    const isDaniel = msg.text.toLowerCase() === 'daniel';

    return bot.sendMessage(
        id, `Vamos mudar de assunto galera! brinks`, {replyToMessage, parseMode}
    );
});

bot.start();
