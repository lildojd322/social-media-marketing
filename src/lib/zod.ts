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


export const adminSchema = z.object({
    email: z.string().email("Formato email non valido"),
    password: z.string()
        .min(6, 'Il password deve contenere almeno 6 caratteri') 
        .max(20, 'Il password non può superare i 20 caratteri'), 

})
