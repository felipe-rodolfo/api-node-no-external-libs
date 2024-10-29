import http from "http"
import { tasksRouter } from "./routes/tasks.js"

const port = 3333

const httpServer = http.createServer((req, res) => {
    tasksRouter(req, res)
})

httpServer.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`) 
})