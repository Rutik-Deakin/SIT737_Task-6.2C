const express= require("express");
const app= express();

const addTwoNumber= (n1,n2) => {
    return n1+n2;
}

app.get("/", (req, res) => {
    const n1 = "<html><body><H1>HELLO THERE </H1></body></html>";
    res.set('Content-Type', 'text/html');
    res.send(Buffer.from(n1));     
})
app.get("/mulTwoNumber", (req, res) => {
    const n1= parseInt(req.query.n1);
    const n2=parseInt(req.query.n2);
    const result = n1*n2;
    res.json({statusCode:200, data: result }); 
})
app.get("/addTwoNumber", (req,res)=>{
    const n1= parseInt(req.query.n1);
    const n2=parseInt(req.query.n2);
    const result = addTwoNumber(n1,n2);
    res.json({statusCode:200, data: result }); 
});
app.get("/mulTwoNumber", (req,res)=>{
    const n1= parseInt(req.query.n1);
    const n2=parseInt(req.query.n2);
    const result = mulTwoNumber(n1,n2);
    res.json({statusCode:200, data: result }); 
});
const mulTwoNumber= (n1,n2) => {
    return n1*n2;
}
const port=3040;
app.listen(port,()=> {
    console.log("hello i'm listening to port "+port);
})