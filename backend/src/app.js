import express from "express";

export  const app = express();

app.use(express.static('public'));


app.get('/', (req, res) => {
  console.log('fuck you abmahfou');
  res.send('hii');
})



