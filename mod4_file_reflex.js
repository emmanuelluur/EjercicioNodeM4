
// Imports user module mod4-quote_of_the_day.js
let my_mod = require('./mod4_quote_of_the_day.js');


console.log();
my_mod.quote_of_the_day();


let delay = ((Math.ceil(Math.random() * 5)) * 1000).toFixed(0);

setTimeout(reflexes, delay);


function reflexes() {
    const ini = new Promise((resolve) => {
        resolve();
    })


    const message = () => {
        console.log("\n Press return:");
        return new Date().getTime();
    };

    const getTime = start => new Promise((resolve) => {
        process.stdin.setEncoding('utf8');
        process.stdin.on('data', function () {
            let time = new Date().getTime() - start;
            console.log(`Your time: ${time} ms`);
            resolve();
        })
    });

    const measure = () => Promise.resolve(message())
        .then(start => getTime(start));
    ini
        .then(() => measure())
        .catch(err => console.log(err))
        .then(() => process.exit())
};



