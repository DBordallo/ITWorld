import { useForm } from "react-hook-form"
import { Form, Button } from "react-bootstrap"

const FormFunction = () => {

    const { register, formState: { errors }, handleSubmit } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    return (<>
    <h2>Publica tu producto</h2>
    <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group id="title">
            <Form.Label>Título</Form.Label>
            <Form.Control type="text" {...register('title', {
                required: true,
                minLength: 3,
            })}></Form.Control>
            {errors.title?.type === 'required' && <p>El título es obligatorio</p>}
            {errors.title?.type === 'minLength' && <p>El título debe tener más de 3 caracteres</p>}
        </Form.Group>
        <Form.Group>
            <Form.Label>Descripción</Form.Label>
            <Form.Control type="text" {...register('description', {
                required: true,
            })}></Form.Control>
            {errors.description?.type === 'required' && <p>La descripción es obligatoria</p>}
        </Form.Group>
        <Form.Group>
            <Form.Label>Cantidad</Form.Label>
            <Form.Control type="text" {...register('quantity', {
                min: 1,
                max: 100,
            })}></Form.Control>
            {errors.quantity?.type === 'min' && <p>Cantidad mínima 1 item</p>}
            {errors.quantity?.type === 'max' && <p>Cantidad máxima 100 items</p>}
        </Form.Group>
        <Form.Group>
            <Form.Label>Precio</Form.Label>
            <Form.Control type="text" {...register('price', {
                minPrice: 0,
                maxPrice: 10000,
            })}></Form.Control>
            {errors.price?.type === 'minPrice' && <p>Precio mínimo: 0€</p>}
            {errors.price?.type === 'maxPrice' && <p>Precio máximo: 10000€</p>}
        </Form.Group>
    
        <Form.Group>
            <Form.Control type="file" id="imageInput" accept="image/*"></Form.Control>
            <Button type="submit">Subir Imagen</Button>
        </Form.Group>

        <Button type="submit" value="Enviar">Publicar</Button>
    </Form>
    </>)
}

export default FormFunction