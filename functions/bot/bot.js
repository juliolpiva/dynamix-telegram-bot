const Telegraf = require('telegraf');
const dotenv = require('dotenv');

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.command('oldschool', (ctx) => ctx.reply('Hello'))

bot.command('modern', ({ reply }) => reply('Yo'))

bot.command('hipster', Telegraf.reply('λ'))

bot.launch()
