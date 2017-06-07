const ALERT_DELAY = 5 * 1000

module.exports = async (message) => {
    return new Promise(resolve => {
        setTimeout(() => {
            alert(message)
            resolve()
        }, ALERT_DELAY)
    })
}