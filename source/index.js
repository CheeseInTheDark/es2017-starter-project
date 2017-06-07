let example = require('./example')

async function start() {
    await example("hi!")
    console.log("Waited for alert to show")
}

start()