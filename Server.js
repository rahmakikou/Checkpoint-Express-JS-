
const express = require('express')

const app = express()

const port = 5000;

const testTime =(req,res,next)=>{
const currentDate = new Date()
const currentDay = currentDate.getDay()
const currentTime = currentDate.getHours()

if(currentDay==0 || currentDay ==6 || currentTime<9 || currentTime>22){
return res.send('error') 
}
next()
}

app.use (testTime) 

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/public/Home.html')
});
 
app.get('/Song',(req, res)=>{
    res.sendFile(__dirname+'/public/Song.html') 
});

app.get('/Poem',(req, res)=>{
    res.sendFile(__dirname+'/public/Poem.html')
}); 

app.get('/style.css',(req, res)=>{
    res.sendFile(__dirname+'/public/style.css')
});  


app.listen (port, console.log(`Server is running on the port ${port}`)) 