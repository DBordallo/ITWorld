import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Form, Button } from "react-bootstrap";
import './Form.css';
import { useNavigate } from 'react-router-dom';

function FormFunction() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [imageData, setImageData] = useState('');
  const [imagePreview, setImagePreview] = useState(null);
  const navigate = useNavigate()

    const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const base64Data = reader.result;
      setImageData(base64Data);
      setImagePreview(reader.result);
      };
    
    if (file) {
      reader.readAsDataURL(file);
    }
    };

  const onSubmit = (data) => {
    const formData = {
      title: data.title,
      description: data.description,
      quantity: data.quantity,
      price: data.price,
      imageData: imageData
    };

    fetch('http://localhost:3000/articles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        navigate(`/details/${data.id}`)
      })
      .catch((error) => {
        console.error('Error al subir la imagen:', error);
      });
  };
  return (
    <div>
      <h1>Publica tu producto</h1>
      <Form onSubmit={handleSubmit(onSubmit)} id="formContainer">
        <Form.Group className='formGroup'>
            <Form.Label id="title--input">Título</Form.Label>
            <Form.Control type="text" {...register('title', {
                required: true,
                minLength: 3,
              })}>
              </Form.Control>
              {errors.title?.type === 'required' && <p>El título es obligatorio</p>}
              {errors.title?.type === 'minLength' && <p>El título debe tener más de 3 caracteres</p>}
        </Form.Group>
        <Form.Group className='formGroup'>
            <Form.Label id="description--input">Descripción</Form.Label>
            <Form.Control type="text" {...register('description', {
                required: true,
            })}></Form.Control>
            {errors.description?.type === 'required' && <p>La descripción es obligatoria</p>}
        </Form.Group>
        <Form.Group className='formGroup'>
            <Form.Label id="quantity--input">Cantidad</Form.Label>
            <Form.Control type="text" {...register('quantity', {
                min: 1,
                max: 100,
            })}></Form.Control>
            {errors.quantity?.type === 'min' && <p>Cantidad mínima 1 item</p>}
            {errors.quantity?.type === 'max' && <p>Cantidad máxima 100 items</p>}
        </Form.Group>
        <Form.Group className='formGroup'>
            <Form.Label id="price--input">Precio</Form.Label>
            <Form.Control type="text" {...register('price', {
                minPrice: 0,
                maxPrice: 10000,
            })}></Form.Control>
            {errors.price?.type === 'minPrice' && <p>Precio mínimo: 0€</p>}
            {errors.price?.type === 'maxPrice' && <p>Precio máximo: 10000€</p>}
        </Form.Group>
        <Form.Group className='formGroup'>
            <Form.Control
            type="file"
            accept="image/*"
            onChange={handleImageChange}>
            </Form.Control>
            {imagePreview && (
            <img
                src={imagePreview}
                alt="Preview"
                style={{ maxWidth: '300px', maxHeight: '300px' }}
            />
            )}
            <Button type="submit" id="addBtn">Subir Producto</Button>
        </Form.Group>
        <input id="id--input" type="hidden"></input>
      </Form>
    </div>
  );
}
export default FormFunction;