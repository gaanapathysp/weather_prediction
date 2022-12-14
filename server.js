const request = require('request');
const express=require("express")
const app=express()
const bodyparser=require('body-parser')
// const options = {
//   method: 'GET',
//   url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
//   qs: {q: 'Hyderabad'},
//   headers: {
//     'X-RapidAPI-Key': 'c4f359b87fmsh3fa285fd017475fp199caajsn35561861b630',
//     'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
//     useQueryString: true
//   }
// };

// request(options, function (error, response, body) {
// 	if (error) throw new Error(error);

  
//   var resp = JSON.stringify(response);
//   resp = JSON.parse(resp)
// 	console.log(resp.body.current);
// });

app.use(bodyparser.urlencoded({extended:false}))
//app.use(bodyparser.json())


app.get('/',(req,res)=>{
  res.sendFile(__dirname +"/index.html")
})

app.post('/weather',(req,res)=>{
  
   const city = req.body.city
   const Pre_date = '2022-12-31'
   const options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
    qs: {q: city , dt: Pre_date},
    headers: {
      'X-RapidAPI-Key': 'c4f359b87fmsh3fa285fd017475fp199caajsn35561861b630',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
      useQueryString: true
    }
  };


  request(options, function (error, response, body) {
    if (error) throw new Error(error);

          var resp = JSON.stringify(response);
         
            resp = JSON.parse(resp)
            
    console.log(resp.body);
  });;
  res.send(city)
  console.log(city)
  console.log('city readed')
})




app.listen(4000,()=> {
  console.log("App is listening on 4000")
})