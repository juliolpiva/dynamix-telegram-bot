module.exports = async ctx => {
    const { id, isBot, name } = getUser(ctx.from)

    const message = ctx.update.message.text;

    if (isBot) {
        return ctx.reply(`Não falo com Bots!`)
    }

    if (message && message.toLowerCase().includes('help')) {
        ctx.reply('Cara, não seja noob, usa /amarelo ou /vermelho, não tem mistério! e deixa de ser vadio e ajuda no projeto!')
    }

    if (message && message.toLowerCase().includes('amarelo')) {
        ctx.reply('IIIIH TOMOU AMARELO!')
    }

    if (message && message.toLowerCase().includes('vermelho')) {
        ctx.reply('PESADO, TA EXPULSO!!')
    }

    if (message && message.toLowerCase().includes('matias')) {
        ctx.reply('ARGENTINO');
    }
}

const getUser = info => {
    const { id, is_bot: isBot, first_name: firstName, last_name: lastName } = info
    const name = (firstName ? firstName : '' + ' ' + lastName ? lastName : '').trim()

    return { id, isBot, name }
}
