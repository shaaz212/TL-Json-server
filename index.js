// import json-server library
const jsonServer = require('json-server')

// create a server for running json data
const mpServer = jsonServer.create()

// set up route path for db.json file
const router = jsonServer.router('db.json')

// Returns middleware used by JSON Server
const middlewares=jsonServer.defaults()

// set up port number for running json server
const port = 4000 || process.env.PORT

// use middleware and router to your server
mpServer.use(middlewares)
mpServer.use(router)

// to listen server app to resolve request
mpServer.listen(port,()=>{
    console.log(`Expense Tracker server started at port : ${port} and waiting for request`);
})