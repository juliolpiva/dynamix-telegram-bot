exports.default = (bot) => {
    bot.command('amarelo', async ctx => {
        try {
            console.log('amarelo', ctx);

            return ctx.reply('IIIIH TOMOU AMARELO!')
        } catch (e) {
            console.log(e)
        }
    });

    bot.command('vermelho', async ctx => {
        try {
            console.log('vermelho', ctx);

            return ctx.reply('PESADO, TA EXPULSO!!')
        } catch (e) {
            console.log(e)
        }
    });
};
