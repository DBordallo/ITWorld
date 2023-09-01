import { useForm } from "react-hook-form"

const Form = () => {

    const { register, formState: { errors }, handleSubmit } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    return (<>
    <h2>Publica tu producto</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <label>Título</label>
            <input type="text" {...register('title', {
                required: true,
                minLength: 3,
            })}></input>
            {errors.title?.type === 'required' && <p>El título es obligatorio</p>}
            {errors.title?.type === 'minLength' && <p>El título debe tener más de 3 caracteres</p>}
        </div>
        <div>
            <label>Descripción</label>
            <input type="text" {...register('description', {
                required: true,
            })}></input>
            {errors.description?.type === 'required' && <p>La descripción es obligatoria</p>}
        </div>
        <div>
            <label>Cantidad</label>
            <input type="text" {...register('quantity', {
                min: 1,
                max: 100,
            })}></input>
            {errors.quantity?.type === 'min' && <p>Cantidad mínima 1 item</p>}
            {errors.quantity?.type === 'max' && <p>Cantidad máxima 100 items</p>}
        </div>
        <div>
            <label>Precio</label>
            <input type="text" {...register('price', {
                minPrice: 0,
                maxPrice: 10000,
            })}></input>
            {errors.price?.type === 'minPrice' && <p>Precio mínimo: 0€</p>}
            {errors.price?.type === 'maxPrice' && <p>Precio máximo: 10000€</p>}
        </div>
    
        <div>
            <input type="file" id="imageInput" accept="image/*"></input>
            <button type="submit">Subir Imagen</button>
        </div>

        <input type="submit" value="Enviar"></input>
    </form>
    </>)
}

export default Form