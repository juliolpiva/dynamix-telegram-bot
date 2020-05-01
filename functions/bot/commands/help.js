exports.default = (bot) => {
    bot.command('help', async ctx => {
        try {
            console.log('help', ctx);

            return ctx.reply('Cara, não seja noob, usa /amarelo ou /vermelho, não tem mistério! e deixa de ser vadio e ajuda no projeto!')
        } catch (e) {
            console.log(e)
        }
    })
}
