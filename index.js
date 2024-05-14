const json_server=require('json-server')
const cors=require('cors')


// server creation
const vidServer=json_server.create()


// create middleware for converting json - js
const middleware=json_server.defaults()

const router=json_server.router('db.json')

// connect server with server
vidServer.use(cors())

// apply middleware
vidServer.use(middleware)
vidServer.use(router)

const PORT=8000

vidServer.listen(PORT,()=>{
    console.log(`server listen to port ${PORT}........`)
})