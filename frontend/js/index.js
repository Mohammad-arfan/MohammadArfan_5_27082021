// (async function(){
//     const articles= await getArticles();
//     for(article of articles){
//         displayArticles(article)
//     }
//     productExist()
// })()

// const { response } = require("express");

// function getArticles(){
//     return fetch("http://localhost:3000/api/cameras")
//     .then(function(res) {
//         return res.json();
//     })
//     .catch(function(error){
//         alert(error);
//     })
// }

// function displayArticles(article){
//     const template = document.querySelector('#home-template');
//     const cloneTemplate = document.importNode(template.content,true);
//     cloneTemplate.querySelector('.product-link').href += '?id=${article._id}';
//     cloneTemplate.querySelector('.product-title').textContent = article.name;
//     cloneTemplate.querySelector('img').src = '${article.imageUrl}';
//     cloneTemplate.querySelector('.product-description').textContent = article.description
//     cloneTemplate.querySelector('.product-price').textContent = article.price + '$';
//     document.querySelector('#liste').appendChild(cloneTemplate)
// }

// function productExist(){
//     let productNumber = localStorage.getItem('quantity');
//     if(productNumber){
//         document.querySelector("#basketPreview").textContent = productNumber;
//     }
// }

// Index.js file commerce
//fetch de l'URL
fetch(url)
.then((response) => response.json())
.then((data) => {
    addCards(data);
})
.catch((erreur) => console.log("erreur : " + erreur))
// fonction pour la création des cards de la page d'accueil
function addCards(data) {
    for (produit of data){
        const card = document.getElementById("liste");

        const price = convertPrice(produit.price);
        card.innerHTML += `
      <div class="col-sm-12 col-md-6 col-lg-6 pb-3  ">
          <div class="card border bg-light shadow p-3 mb-5 bg-body rounded">
              <div class="card-body">
                  <div class="row">
                      <a href="./frontend/produit.html?_id=${produit._id}"><img src="${produit.imageUrl}" class="img-fluid img-thumbnail p-1" alt="${produit.name}"></a>
                      <div class="col-6 col-sm-7 mt-3" >
                          <h5 class="card-title">${produit.name}</h5>
                      </div>
                      <div class="col-6 col-sm-5 text-end mt-3">
                          <h5 class="card-title">${price}</h5>
                      </div>
                  </div>
                  <p class="card-text text-truncate">${produit.description}</p>
                  <a href="./frontend/produit.html?_id=${produit._id}" class="btn btn-success">Acheter ce produit</a>
              </div>
          </div>
      </div>`;
    }
}