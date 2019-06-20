const axios=require('axios')
require('dotenv').config()
let apikey=process.env.nyt_api
const nytURL="https://api.nytimes.com/svc/"
console.log(1)

axios.get(nytURL + "&api-key=" + apikey)
.then(response=>console.log(response))
.catch(e=>console.log(e))