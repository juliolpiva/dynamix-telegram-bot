const Telegraf = require('telegraf');
const dotenv = require('dotenv');
const initialize = require('./config/initialize').default;

// init
dotenv.config();
const bot = new Telegraf(process.env.BOT_TOKEN)

initialize(bot);

// Function
exports.handler = async event => {
    try {
        await bot.handleUpdate(JSON.parse(event.body));

        return {
            statusCode: 200,
            body: ''
        };
    } catch (e) {
        console.log(e)

        return {
            statusCode: 400,
            body: 'This endpoint is meant for bot and telegram communication'
        };
    }
}
