const axios=require('axios')
require('dotenv').config()
let apikey=process.env.nyt_api
 const nytURL="https://api.nytimes.com/svc/news/v3/content/all/all.json?"
//const nytURL="https://api.nytimes.com/svc/mostpopular/v2/shared/1/facebook.json?"
console.log(nytURL + "&api-key=" + apikey)



module.exports=app=>{
    app.get('/',(req,res)=>{

        axios.get(nytURL + "&api-key=" + apikey)
            .then(response=> res.json(response.data))

            .catch(e=>console.log(e))

    })
}