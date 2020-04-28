const Telegraf = require('telegraf');
const dotenv = require('dotenv');

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start(async ctx => {
    try {
        return ctx.reply('Bem vindo caro amigo, use /help para mais informações!')
    } catch (error) {
        console.log(e)
    }
});

bot.command('amarelo', async ctx => {
    try {
        console.log('amarelo', ctx);

        return ctx.reply('IIIIH TOMOU AMARELO!')
    } catch (error) {
        console.log(e)
    }
});

bot.command('vermelho', async ctx => {
    try {
        console.log('vermelho', ctx);

        return ctx.reply('PESADO, TA EXPULSO!!')
    } catch (error) {
        console.log(e)
    }
});

bot.command('help', async ctx => {
    try {
        console.log('help', ctx);

        return ctx.reply('Cara, não seja noob, usa /amarelo ou /vermelho, não tem mistério! e deixa de ser vadio e ajuda no projeto!')
    } catch (error) {
        console.log(e)
    }
});

bot.use(ctx => {
    try {
        console.log('on', ctx);
    } catch (error) {
        console.log(e)
    }
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
