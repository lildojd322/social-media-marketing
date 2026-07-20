import { z } from "zod"

export const bidSchema = z.object({
    email: z.string().email("Formato email non valido"),
    name: z.string()
        .min(2, 'Il nome è troppo corto')
        .max(15, 'Il nome è troppo lungo'),
    message: z.string()
        .min(15, 'Il messaggio è troppo corto')
        .max(150, 'Il messaggio è troppo lungo'),
})