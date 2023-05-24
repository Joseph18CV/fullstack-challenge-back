import {z} from "zod"

const contactSchema = z.object({
    id: z.number(),
    name: z.string().max(127),
    email: z.string().email().max(127),
    telephone: z.string().max(13).min(13),
    createdAt: z.string()
})

const contactSchemaRequest = contactSchema.omit({
    id: true,
    createdAt: true,
})

const contactUpdateSchema = contactSchemaRequest.partial()

export {
    contactSchema,
    contactSchemaRequest,
    contactUpdateSchema
}