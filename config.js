const config = {
  environment: process.env.NODE_ENV || 'dev',
  server: {
    port: process.env.PORT || 8080
  },
  mongo: {
    url: process.env.MONGO_DB_URI || "mongodb+srv://adminuser:adminpassword@cluster0.yftuo.mongodb.net/test?retryWrites=true&w=majority"
  }
}

module.exports = config
