import {z} from 'zod'

export const userLoginSchema = z.object({
    email: z.string().email({
        message: 'El email no es válido'
    }),
    password: z.string().min(5,{
        message: 'La contraseña debe tener al menos 8 caracteres'
    })
})

export const UserSingupPersonalSchema = z.object({
    name: z.string(),
    email: z.string().email({
        message: 'El email no es válido'
    }),
    password: z.string().min(5,
    {
        message: 'La contraseña debe tener al menos 8 caracteres'
    }
    ).max(10,{
        message: 'La contraseña no puede tener más de 15 caracteres'
    })
});

export const UserSingupBusinessSchema = z.object({
    businessName: z.string(),
    email: z.string().email({
        message: 'El email no es válido'
    }),
    password: z.string().min(8,
    {
        message: 'La contraseña debe tener al menos 8 caracteres'
    }
    ).max(15,{
        message: 'La contraseña no puede tener más de 15 caracteres'
    }),
    businessAddress: z.string(),
    businessDescription: z.string()
    
});