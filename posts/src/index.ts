import "reflect-metadata";
import express from "express";
import { createConnection } from "typeorm";
import {Post} from "./entities/post.entity";

let app = express();

app.get("/",async (req, res) => {
  let post = new Post()
  post.title="dummy title"
  post.body="dummy body"
  await  post.save()
  res.send({ msg: "All Good",post });
});

app.get("/data", async (req, res) => {
  let posts= await Post.find()
  res.send({ msg: "All data" ,posts});
});

let start = async () => {
  await createConnection();
  console.log("DB in the House!");

  app.listen(8000, () => {
    console.log("Listening on 8000");
  });
};


start().then(()=>{})

