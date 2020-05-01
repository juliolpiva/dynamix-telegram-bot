const start = require('./start').default;
const help = require('./help').default;
const cards = require('./cards').default;

exports.default = (bot) => {
    start(bot);
    help(bot);
    cards(bot);
}
