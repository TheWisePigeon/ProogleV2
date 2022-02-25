const axios = require('axios').default


axios
    .get("https://google.com/search?q=tom+hardy")
    .then(async (res) => {
      data = await res.data
      console.log(data);
    })