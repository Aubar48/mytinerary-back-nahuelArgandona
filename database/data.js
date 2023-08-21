import mongoose from "mongoose";

mongoose.connect(process.env.LINK_DB)
  .then(() => {
    console.log("connected to mongo");
  }).catch(() => {
    console.log("failed connected to mongo")
  })

