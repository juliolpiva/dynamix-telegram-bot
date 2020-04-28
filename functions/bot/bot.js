const Telegraf = require('telegraf');
const dotenv = require('dotenv');

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.use(async (ctx, next) => {
    const start = new Date()

    const message = ctx.update.message.text;
    const user = ctx.update.message.chat.first_name;

    console.log('Message:', message, ' | From:', user);

    if (message.toLowerCase().includes('amarelo')) {
        ctx.reply('IIIIH TOMOU AMARELO!')
    }

    if (message.toLowerCase().includes('vermelho')) {
        ctx.reply('PESADO, TA EXPULSO!!')
    }

    await next()

    const ms = new Date() - start

    console.log('Response time: %sms', ms)
  })

  bot.launch()
