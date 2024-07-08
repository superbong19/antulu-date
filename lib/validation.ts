import { z } from "zod"
export const formSchemaLogin = z.object({
    username: z.string(),
    password: z.string(),
})