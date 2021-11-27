//https://nodejs.org/dist/latest-v17.x/docs/api/https.html#httpscreateserveroptions-requestlistener
const http = require('http');
const host = 'http://localhost';
const port = 3000;
const stats = require('./pcRamUsage.js');

http.createServer((req,res)=>{
    let url = req.url;

    if(url === '/stats')
    {
        res.end(JSON.stringify(stats, null,2));
    }else
    {
        res.end('<h1>Bem vind@!</h1>');
    }

    /*res.end('<h1>Working</h1>' + '<p>Felipe Avançando</p>');*/

}).listen(3000, ()=>console.log('Resultado está sendo mostrado em:'+host+':'+port + ' ' + stats));