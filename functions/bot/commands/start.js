exports.default = (bot) => {
    bot.start(async (ctx) => {
        try {
            return ctx.reply('Bem vindo caro amigo, use /help para mais informações!');
        } catch (e) {
            return console.log(e);
        }
    })
}
