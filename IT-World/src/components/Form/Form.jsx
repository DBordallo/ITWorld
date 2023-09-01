import { useForm } from "react-hook-form"

const HookForms = () => {

    const { register, formState: { errors }, watch, handleSubmit } = useForm({
        defaultValues: {
            nombre: 'Name'
        }
    })

    const onSubmit = (data) => {
        console.log(data)
    }

    const incluirTelf = watch('incluirTelf')

    return <>
    <h2>Form con React Hook Forms</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <label>Nombre</label>
            <input type="text" {...register('nombre', {
                required: true,
                maxLength: 10,
            })}></input>
            {errors.nombre?.type === 'required' && <p>El nombre es obligatorio</p>}
            {errors.nombre?.type === 'maxLength' && <p>El nombre debe tener menos de 10 caracteres</p>}
        </div>
        <div>
            <label>Email</label>
            <input type="text" {...register('email', {
                pattern: /\S+@\S+\.\S+/
            })}></input>
            {errors.email?.type === 'pattern' && <p>Formato del email incorrecto</p>}
        </div>
        <div>
            <label>Edad</label>
            <input type="text" {...register('edad')}></input>
        </div>
        <div>
            <label>País</label>
            <select {...register('país')}>
                <option value="España">España</option>
                <option value="Italia">Italia</option>
                <option value="Francia">Francia</option>
            </select>
        </div>
        <div>
            <label>¿Incluir teléfono?</label>
            <input type="checkbox" {...register('incluirTelf')}></input>
        </div>
        {incluirTelf && (
        <div>
            <label>Telf</label>
            <input type="text" {...register('Telf')}></input>
        </div>)}
        
        <input type="submit" value="Enviar"></input>
    </form>
    </>
}

export default HookForms