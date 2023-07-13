



let productsHTML='';

products.forEach((product)=> { 
    productsHTML += `<div class="product-container">
    <div class="product-images">
      <img src="${product.image}" class="product-images">
    </div>
    <div class="product-heading-ratings-counts-price-option">
    <p class="name-of-product">${product.name}</p>
    <div class="product-ratings">
    <img src="Images/Products/rating-${product.rating.stars*10}.png" class="rating">
    <div class="count">${product.rating.count}</div>
    </div>
    <p class="priceCents"><strong>$${(product.priceCents / 100).toFixed(2)}</strong></p>
    <select  class="options"> 
      <option class="value" selected value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
    </select>
    <div class="add-to-cart-quantity">
    <button class="add-to-cart-button js-add-to-cart">Add to cart</button>
    </div>
    </div>
    </div>`;
   
});

document.querySelector('.js-products-grid').innerHTML=productsHTML; 



let carts=document.querySelectorAll('.js-add-to-cart');


for(let i=0;i < carts.length;i++){
  carts[i].addEventListener('click',()=>{
cartNumbers();

  })
}

function onLoadCartNumbers(){
  let productNumbers=localStorage.getItem('cartNumbers');
  if(productNumbers){
    document.querySelector('.js-cart-quantity').textContent=productNumbers;
  }
}

function cartNumbers() {

  let productNumbers=localStorage.getItem('cartNumbers');

  productNumbers=parseInt(productNumbers);

  if(productNumbers){
    localStorage.setItem('cartNumbers',productNumbers+1);
    document.querySelector('.js-cart-quantity').textContent=productNumbers+1;
  }
  else{
    localStorage.setItem('cartNumbers',1);
    document.querySelector('.js-cart-quantity').textContent=1;
  }


}


onLoadCartNumbers();




