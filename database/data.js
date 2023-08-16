import mongoose from "mongoose";

mongoose.connect("mongodb+srv://Aubar48:zq4OqWJGHfPM1W8f@myitinerary.xwsadvl.mongodb.net/")
  .then(() => {
    console.log("connected to mongo");
  }).catch(() => {
    console.log("failed connected to mongo")
  })

