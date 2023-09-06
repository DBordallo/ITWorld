
const inputTitle = document.querySelector('#title--input')
const inputDescription = document.querySelector('#description--input')
const inputQuantity = document.querySelector('#quantity--input')
const inputPrice = document.querySelector('#price--input')
const inputId = document.querySelector('#id--input')

  async function editArticle(id) {
    try {
      let result = await fetch(`http://localhost:3000/articles/${id}`);
      if (result.ok) {
        let data = await result.json();
        inputTitle.value = data.title;
        inputDescription.value = data.description;
        inputQuantity.value = data.quantity;
        inputPrice.value = data.price;
        inputId.value = data.id;
      } else {
        console.error('Error en la solicitud GET:', result.status);
      }
    } catch (error) {
      console.error('Error en la solicitud GET:', error);
    }
  }
  
  editArticle(2)

export default editArticle