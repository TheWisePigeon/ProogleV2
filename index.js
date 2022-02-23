const puppeteer = require('puppeteer');
const search= "site:stackoverflow.com undefined index php";

(async () => {
    const browser = await puppeteer.launch()
    const page= await browser.newPage()
    await page.goto(`https://www.google.com/search?q=${search}`, {
        waitUntil: 'networkidle2'
    })
    await page.pdf({ path: 'bruh.pdf', format: 'a4'})
    await browser.close()
})()

try {
    
} catch (error) {
    async () => {
      const browser = await puppeteer.launch()
      const page = await browser.newPage()
      await page.goto(`https://www.google.com/search?q=${error}`,{
          waitUntil: 'networkidle0'
      })
      await page.pdf({ path: 'err.pdf', format: 'a4'})
      await browser.close()
    }
}