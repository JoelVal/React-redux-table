function handlebarConfig(handlebars)
{
    return handlebars
    .create({
        defaultLayout:'main',
        extname: '.hbs',

    })
}
module.exports = handlebarConfig;