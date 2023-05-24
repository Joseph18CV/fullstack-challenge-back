import {z} from "zod"

const clientSchema = z.object({
    id: z.number(),
    name: z.string().max(127),
    email: z.string().email().max(127),
    password: z.string().max(13),
    telephone: z.string().max(13).min(13),
    createdAt: z.string()
})

const clientSchemaRequest = clientSchema.omit({
    id: true,
    createdAt: true
})

const clientSchemaResponse = clientSchema.omit({
    password: true
})

export {
    clientSchema,
    clientSchemaRequest,
    clientSchemaResponse
}