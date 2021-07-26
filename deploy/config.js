const config = {
  environment: process.env.NODE_ENV || 'dev',
  server: {
    port: process.env.PORT || 8080
  },
  mongo: {
    url: process.env.MONGO_DB_URI || "mongodb+srv://adminuser:adminpassword@cluster0.yftuo.mongodb.net/studentpartnerdb?retryWrites=true&w=majority"
  }
}

module.exports = config


// const { MongoClient } = require('mongodb');
// const uri = "mongodb+srv://adminuser:<password>@cluster0.yftuo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });