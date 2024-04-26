import {z} from 'zod'

export const OptionsAddress=["Garitas de otay","Villa del campo","Margaritas residencial","El niño"]


export const userLoginSchema = z.object({
    email: z.string().email({
        message: 'El email no es válido'
    }),
    password: z.string().min(5,{
        message: 'La contraseña debe tener al menos 8 caracteres'
    })
})

export const UserSingupPersonalSchema = z.object({
    fullName: z.string().min(5,{
        message: 'El nombre debe tener al menos 5 caracteres'
    }),
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
    businessName: z.string().min(3,{
        message: 'El nombre del local debe tener al menos 2 caracteres'
    }),
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
    businessAddress: z.enum(OptionsAddress,{
        message: 'La dirección no es válida'
    }),
    businessDescription: z.string().min(10,{
        message: 'La descripción debe tener al menos 10 caracteres'
    })
    
});