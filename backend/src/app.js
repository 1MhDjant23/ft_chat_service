import express from "express";
import  cors from 'cors';

export  const app = express();

app.use(cors());
app.use(express.static('public'));
app.use(express.json());

// app.get('/', (req, res) => {
//   console.log('fuck you abmahfou');
//   res.send('hii');
// })



