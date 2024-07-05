const express = require("express")

const app = express();
const jokes = require("./data")

app.get("/jokes",(req,res)=>{
    const requiredRandomJokeIndex= Math.floor(Math.random() * jokes.length);
    return res.status(200).json(jokes[requiredRandomJokeIndex]);
})

app.get("/jokes/:id",(req,res)=>{
    const jokeid =req.params.id;

    if(!Number(jokeid) || Number(jokeid)<0){
        return res.status(400).json({message:"Invalid id"})
    }
    return res.status(200).json(jokes.find((joke)=> joke.id == jokeid));
})

app.listen(8000,()=>{
    console.log("Server is running on port 8000")
})