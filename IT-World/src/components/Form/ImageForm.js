
document.getElementById("imageForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const imageInput = document.getElementById("imageInput");
    const selectedImage = imageInput.files[0];

    if (selectedImage) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const base64Image = e.target.result;

        // Aquí puedes enviar base64Image al servidor JSON (json-server).
        // Puedes utilizar una solicitud AJAX, fetch API o cualquier otra biblioteca para hacerlo.
        // Por ejemplo, usando la fetch API:
        fetch("http://localhost:3000/articles", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ image: base64Image }),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Imagen subida con éxito:", data);
          })
          .catch((error) => {
            console.error("Error al subir la imagen:", error);
          });
      };

      reader.readAsDataURL(selectedImage);
    }
  });

  export { ImageForm }