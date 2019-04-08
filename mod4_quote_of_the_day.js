// module quotes
function quote_of_the_day()
{
    let item = require('./mod4_quotes_of_the_day.json');
    let size = item.length;
    let q = Math.floor(Math.random() * size);
    console.log(`${item[q]} (${q})`);
}

module.exports = {quote_of_the_day}