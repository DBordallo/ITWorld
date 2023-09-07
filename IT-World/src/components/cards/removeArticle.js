async function removeArticle(id) {
try {
    const response = await fetch(`http://localhost:3000/articles/${id}`, {
    method: 'DELETE',
    });
    
    if (response.ok) {
    alert(`Artículo con ID ${id} eliminado.`);
    } else {
    console.error(`Error al eliminar el artículo con ID ${id}.`);
    }
} catch (error) {
    console.error("Error", error);
    }
}

export default removeArticle;