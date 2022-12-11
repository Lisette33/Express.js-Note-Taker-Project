const express=require("express");
const db=require("./db/db.json");
const fs=require("fs");
const path=require("path");

const app=express();

const PORT=process.env.PORT||3001;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

// HTML routes
app.get("/notes",(req,res)=>{
  res.sendFile(path.join(__dirname,"public/notes.html"))
  // fs.readFile("./public/notes.html",(error,data)=>{
  //   if(error) {
  //     console.log(error);
  //     res.json(error);
  //   }
  // res.send(data);
  // });
});

app.get("/",(req,res)=>{
  res.sendFile(path.join(__dirname,"public/index.html"))
  // fs.readFile("./public/index.html",(error,data)=>{
  //   if(error) {
  //     console.log(error);
  //   }
  // res.send(data);
  // });
});

// API routes
app.get("/api/notes",(req,res)=>{
  res.json(db);
});

app.post("/api/notes",(req,res)=>{
  res.json("You are requesting with POST");
});

// DELETE route
app.post("/api/notes/:id",(req,res)=>{
  res.json("You are requesting with POST");
});

app.listen(PORT, ()=>
  console.log(`Server running at http://localhost:${PORT}`)
);