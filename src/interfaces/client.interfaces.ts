import {z} from "zod"
import { clientSchema, clientSchemaRequest, clientSchemaResponse, clientUpdateSchema } from "../schemas/client.schemas"

type TClient = z.infer<typeof clientSchema>
type TClientRequest = z.infer<typeof clientSchemaRequest>
type TClientResponse = z.infer<typeof clientSchemaResponse>
type TClientUpdate = z.infer<typeof clientUpdateSchema>

export {
    TClient,
    TClientRequest,
    TClientResponse,
    TClientUpdate
}