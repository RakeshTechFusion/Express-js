const fs = require("fs");
const express = require("express");
// import express from "express"
const app = express();  // create server

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/",(req,res)=>{
    res.write("hello");
    res.end("wolrd");
});
app.get("/products",(req,res)=>{
    fs.reafFile("./db.json",{encoding:"utf-8"},(req,res)=>{
        res.end(data);
   });
});
// Read Product
app.post("/products",(req,res)=>{
    fs.readFile("./db.json",{encoding:"utf-8"},(err,data)=>{
        const parsed - JSON.parsed(data);
        parsed.products = [...parsed.products,req.body];
//                  filename,       data                ,encoding, callback
        fs.writeFile("./db.json",JSON.stringify(parsed),"utf-8",()=>{
            res.end("Products Created");
        });
    });
    

    // console.log(req.body);
    // res.send({});
});

//update
app.put("/products/1",(req,res)=>{
        //read 
        //
});
//Delete Products
app.delete("/product/1",(req,res)=>{

    //read the db.json

    //get the products array , find ,"id" 1 from it

    // remove that id from array.

    //write the filtered data to db.json
    const {id} = req.params;
    fs.readFile("./db.json",{encoding:"utf-8"},(err,data)=>{
        const parsed = JSON.parsed(data);
        parsed.products=parsed.products.filter((el) => el.name !=id);
        fs.writeFile("./db.json",JSON.stringify(parsed))
    })




});
app.listen(8080,(req,res)=>{
    console.log("server started on http://localhost:8080");
});