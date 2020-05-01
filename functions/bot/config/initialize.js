const dotenv = require('dotenv');
const commands = require('../commands').default;
const axios = require('axios').default;

dotenv.config();
const HOST = 'https://dynamix-telegram-bot.netlify.app/api/bot';
const TOKEN = process.env.BOT_TOKEN;
const URL = `https://api.telegram.org/bot${TOKEN}/setWebhook?url=${HOST}`;

exports.default = (bot) => {
    commands(bot);

    bot.launch();

    axios.get(URL)
        .then(function (response) {
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
}
