import mongoose from "mongoose";

mongoose.connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("connected to mongo");
  }).catch(() => {
    console.log("failed connected to mongo")
  })

