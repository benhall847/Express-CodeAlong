const express = require('express');
const port = 1337;

// its equivalent to the result of 'http.createServer()'
const app = express();

// RESPOND TO GET REQUESTS ON PATH '/'
app.get('/', (req, res) => {
    // note: this is different from 'res.end'
    res.send('HOGAR <3');
})

app.post("/",(req,res)=>{
    res.send("You CREATED STUFF")
})

app.put('/',(req,res)=>{
    res.send("YOU UPDATED STUFF")
})

// 1 IDENTIFY VARIABLE NAME
// 2 IN THE STRING WRITE THAT VARIABLE NAME
// AS PART OF THE PATH
// 3 PUT A COLON IN FRONT OF THE VARIABLE NAME
// 4 IT WILL NOW BE req.params.id
app.put(`/users/:id`, (req,res)=>{
    // I WANT THAT ID!!!!!!!!!!!!
    const {id} = req.params
    console.log(id)
    res.send(`You sent me this ID: ${id}`)
})

app.delete(`/users/:id/delete`, (req,res)=>{
    const {id} = req.params;
    console.log(`DELETEING ${id}`)
    res.send(`You deleted: ${id}`)
})

app.delete('/',(req,res)=>{
    res.send("DATABASE DESTROYED")

})

app.get('/byte', (req,res) => {
    res.send("DONT BYTE ME BRO")
})

app.listen(port, () => {
    console.log(`YO PAGE IS ON PORT ${port}`)
});