import jsonServer from "json-server"
import cors from "cors"
const server = jsonServer.create()

const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults({noCors:true})

server.use(cors())
server.use(router)
server.use(middlewares)

server.listen(3000, () => {
    console.log("http://localhost:3000");
    
})