import React, { useEffect, useState } from 'react';
import { Form, Button } from "react-bootstrap";
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

function FormEdit() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageData, setImageData] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [article, setArticle] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/articles/${id}`)
        .then((response) => response.json())
        .then((data) => {
            setArticle(data);
        })
        .catch((error) => {
            console.error('Error al cargar los datos del artículo:', error);
        });
    }, [id]);

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

    const onSubmit = (formData) => {
    fetch(`http://localhost:3000/articles/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, imageData }),
        })
        .then((response) => response.json())
        .then((data) => {
            navigate(`/details/${data.id}`);
        })
        .catch((error) => {
            console.error('Error al actualizar el artículo:', error);
        });
    };

    return (
    <div>
        <h1>Edita tu producto</h1>
        {article && (
        <Form onSubmit={handleSubmit(onSubmit)} id="formContainer">
            <Form.Group className='formGroup'>
                <Form.Label id="title--input">{article.title}</Form.Label>
                <Form.Control
                    type="text"
                    {...register('title', {
                        required: true,
                        minLength: 3,
                    })}
                />
            {errors.title?.type === 'required' && <p>El título es obligatorio</p>}
            {errors.title?.type === 'minLength' && (
            <p>El título debe tener más de 3 caracteres</p>
            )}
            </Form.Group>
            <Form.Group className='formGroup'>
                <Form.Label id="description--input">{article.description}</Form.Label>
                <Form.Control type="text" {...register('description', {
                    required: true,
                })}></Form.Control>
                {errors.description?.type === 'required' && <p>La descripción es obligatoria</p>}
            </Form.Group>
            <Form.Group className='formGroup'>
                <Form.Label id="quantity--input">{article.quantity}</Form.Label>
                <Form.Control type="text" {...register('quantity', {
                    min: 1,
                    max: 100,
                })}></Form.Control>
                {errors.quantity?.type === 'min' && <p>Cantidad mínima 1 item</p>}
                {errors.quantity?.type === 'max' && <p>Cantidad máxima 100 items</p>}
            </Form.Group>
            <Form.Group className='formGroup'>
                <Form.Label id="price--input">{article.price}</Form.Label>
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
                onChange={handleImageChange}
                />
                {imagePreview && (
                <img
                    src={imagePreview}
                    alt="Preview"
                    style={{ maxWidth: '300px', maxHeight: '300px' }}
                />
                )}
                <Button type="submit" id="addBtn">
                Actualizar Producto
                </Button>
            </Form.Group>
            </Form>
    )}
    </div>
);
}

export default FormEdit;