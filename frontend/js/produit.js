
// récupération de l'id du produit



const searchPaarams = new URLSearchParams(location.search);
const newId = searchPaarams.get("_id");

//modification le nom API

const newUrl = `https://teddies-api.herokuapp.com/api/cameras/${newId}`;

fetch(newUrl)
.then((response) => response.json() )
.then((data) => {
const product = data;
addCard(data);
});
     function addCard(product) {

            // insertion des information de la card du produit
            const selectionProductImage = document.getElementById("productImage");
            selectionProductImage.innerHTML += `
        <img src="${product.imageUrl}" class="img-fluid img-thumbnail" alt="${product.name}">
        `;
            const selectionProductName = document.getElementById("productName");
            selectionProductName.innerHTML += `
        <h5 class="card-title">${product.name}</h5>
        `;
            const selectionProductPrice = document.getElementById("productPrice");
            selectionProductPrice.innerHTML += `
         <h5 class="card-title">${convertPrice(product.price)}</h5>
        `;
            const selectionProductDescription = document.getElementById("productDescription");
            selectionProductDescription.innerHTML += `
        <p class="card-text">${product.description}</p>
        `;
            addLenses(product);
        }

           function addLenses(product) {
            const versionChoice = document.getElementById("option");
            for (let lenses of product.lenses) {
                versionChoice.innerHTML += `<option value="${lenses}">${lenses}</option>`;
            }
        }