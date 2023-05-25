import "reflect-metadata"
import "express-async-errors"
import express, { Application } from "express"
import cors from "cors"
import { handleErrors } from "./error"
import clientRouters from "./routes/client.routes"
import { loginRouters } from "./routes/login.routes"
import contactRouters from "./routes/contacts.routes"

const app: Application = express()
app.use(cors())
app.use(express.json())

app.use("/client", clientRouters)
app.use("/login", loginRouters)
app.use("/contact", contactRouters)

app.use(handleErrors)

export default app