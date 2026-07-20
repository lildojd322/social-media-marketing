import { z } from "zod"

export const bidSchema = z.object({
    email: z.string().email("Formato email non valido"),
    name: z.string()
        .min(2, 'Il nome deve contenere almeno 2 caratteri') 
        .max(15, 'Il nome non può superare i 15 caratteri'), 
    message: z.string()
        .min(8, 'Il messaggio deve contenere almeno 8 caratteri') 
        .max(350, 'Il messaggio non può superare i 350 caratteri'), 
})
