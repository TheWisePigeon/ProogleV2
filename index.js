const axios = require('axios').default
const cheerio = require('cheerio').default

axios
    .get("https://google.com/search?q=tom+hardy")
    .then(async (res) => {
        let pageData = await res.data
        const $ = cheerio.load(pageData)
        console.log($('.GyAeWb').text()); 
    })
    .catch((error) => {
        console.log(error);
    })