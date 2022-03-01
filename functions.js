const puppeteer = require('puppeteer')
let url ="http://localhost:3000/"

async function main() {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(`${url}`)
    const pageData = await page.evaluate(()=>{
        return Array.from(
            document.querySelectorAll("a")
        ).map(
            x => x.href
        )
    })

    await browser.close()
    console.log(pageData);
    return pageData

}

main()

module.exports = {

    main
    
}