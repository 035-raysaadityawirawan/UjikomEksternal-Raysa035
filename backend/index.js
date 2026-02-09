const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
  res.json("Astra Honda API");
});

app.get("/kategori",(req,res)=>{
  db.query("SELECT * FROM kategori",(err,data)=>{
    res.json(data);
  });
});

app.get("/motor",(req,res)=>{
  let sql="SELECT * FROM motor";
  if(req.query.kategori){
    sql += " WHERE kategori_id="+req.query.kategori;
  }
  db.query(sql,(err,data)=>{
    res.json(data);
  });
});

app.get("/motor/:id",(req,res)=>{
  db.query("SELECT * FROM motor WHERE id=?",[req.params.id],(err,data)=>{
    res.json(data[0]);
  });
});

app.get("/spesifikasi/:id",(req,res)=>{
  db.query("SELECT * FROM spesifikasi WHERE motor_id=?",[req.params.id],(err,data)=>{
    res.json(data[0]);
  });
});

app.post("/motor",(req,res)=>{
  db.query("INSERT INTO motor SET ?",req.body,()=>{
    res.json("Motor ditambahkan");
  });
});

app.get("/motors", (req, res) => {
  res.json([
    { id: 1, name: "PCX 160", type: "Matic", image: "pcx.jpg" },
    { id: 2, name: "Vario 160", type: "Matic", image: "vario.jpg" },
    { id: 3, name: "Beat Cokelat", type: "Matic", image: "beat.jpg" },
    { id: 4, name: "CBR 250RR", type: "Sport", image: "cbr.jpg" },
    { id: 5, name: "Revo", type: "Cub", image: "revo.jpg" },
    { id: 6, name: "EM1 e:Ny1", type: "EV", image: "ev.jpg" },
    { id: 7, name: "Beat Hijau", type: "Matic", image: "beatijo.jpg"},
    { id: 8, name: "e:Advance", type: "EV", image: "e.jpg"}
  ]);
});

app.listen(5000,()=>console.log("API running"));