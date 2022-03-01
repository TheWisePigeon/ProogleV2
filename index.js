const puppeteer = require('puppeteer')


async function main(params) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(`https://google.com/search?q=elon+musk`)
    await page.screenshot({path: 'screen.png'})

    await browser.close()

}