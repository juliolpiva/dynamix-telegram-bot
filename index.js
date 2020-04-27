const dotenv = require('dotenv');
const TeleBot = require('telebot');

dotenv.config();

const bot = new TeleBot(process.env.BOT_TOKEN);

// On every type of message (& command)
bot.on(['*', '/*'], (msg, self) => {

    const id = msg.from.id;
    const fromName = msg.from.first_name;
    const replyToMessage = msg.message_id;
    const parseMode = 'html';

    const isDaniel = msg.text.toLowerCase() === 'daniel';

    console.log("Group Message:", msg.text, " | From:", fromName);

    if(isDaniel) {
        return bot.sendMessage(
            id, `Vamos mudar de assunto galera! brinks`, {replyToMessage, parseMode}
        );
    }
});

bot.start();
