//Load HTTP module (thưviệnđãcósẵnkhi cài đặtnode.js) 
const http=require("http"); 
const hostname="127.0.0.1";//cái này===http://localhost 
const port=3000; 
//CreateHTTPserverand listenonport3000forrequests 
const server=http.createServer((req,res)=>{ 
//Set the response HTTP header with HTTP status and Content type 
    res.statusCode=200; 
    res.setHeader("Content-Type","text/plain"); 
    res.end("Hello World\n"); 
}); 
//listenforrequestonport3000,andasacallbackfunctionhavetheport listenedon logged 
server.listen(port,hostname,()=>{ 
    console.log(`Server running at http://${hostname}:${port}/`); 
}); 
