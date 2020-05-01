const Telegraf = require('telegraf');
const dotenv = require('dotenv');
const commands = require('./commands').default;

// Initialize
dotenv.config();
const bot = new Telegraf(process.env.BOT_TOKEN)
commands(bot);
bot.launch();

// Function
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
