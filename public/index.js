// const e = require("express");
const express=require('express')
const app=express();
const hbs=require("hbs")
const fs=require("fs")
const requests=require("requests")

const path =require("path")
const about=fs.readFileSync("C:/Users/sk929/Desktop/Expressjs/template/template/views/about.hbs","utf-8")
// console.log(about);

// const pth=path.join(__dirname,"../views")
// console.log(pth);
// app.use(express.static(pth))
// console.log(express.static(pth))
const pth=path.join(__dirname,"../template/views")
const pth2=path.join(__dirname,"../template/partials")

// console.log(pth2);
// console.log(pth);
const replace=(about,val)=>{
    var temp=about.replace("{%city%}",val.main.temp)
    return temp;
}


app.set('view engine', 'hbs');

app.set("views",pth)
hbs.registerPartials(pth2)

app.get("/",(req,res)=>{
    res.render("index",{
        mandeep:"nam"
    })
}) 
app.get("/about", (req,res)=>{
    res.render("about")
})
app.get("/weather", (req,res)=>{
    res.render("weather")
})
app.get("/index", (req,res)=>{
    res.render("index")
})
app.get("/about/*", (req,res)=>{
    res.render("404",{
        message:"page does not exit"
    }) 
}) 

app.get("*", (req,res)=>{
    res.render("404",{
        message:"sorry page does not exit"
    })  
    // res.send()
})

app.listen(8001,"127.0.0.1",()=>{
    console.log("listin")
})

