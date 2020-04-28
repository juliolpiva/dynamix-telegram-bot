const Telegraf = require('telegraf');
const dotenv = require('dotenv');

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start(ctx => {
    ctx.reply('Bem vindo caro amigo, use /help para mais informações!')
});

bot.command('amarelo', ctx => {
    console.log('amarelo', ctx);

    ctx.reply('IIIIH TOMOU AMARELO!')
});

bot.command('vermelho', ctx => {
    console.log('vermelho', ctx);

    ctx.reply('PESADO, TA EXPULSO!!')
});

bot.command('help', ctx => {
    ctx.reply('Cara, não seja noob, usa /amarelo ou /vermelho, não tem mistério! e deixa de ser vadio e ajuda no projeto!')
});

bot.on(ctx => {
    console.log('on', ctx);
});

bot.launch();

exports.handler = async event => {
    try {
        await bot.handleUpdate(JSON.parse(event.body));

        console.log('New command! :D');

        return { statusCode: 200, body: '' };
    } catch (e) {
        console.log(e)
        return { statusCode: 400, body: 'This endpoint is meant for bot and telegram communication' };
    }
}
