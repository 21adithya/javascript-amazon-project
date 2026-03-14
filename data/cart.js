export let cart = JSON.parse(localStorage.getItem('cart'));

if (!cart) {
  cart = [
    {
      productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      quantity: 2,
    }
  ];
}

export function addToCart(productId){
  let matchingitem;
    cart.forEach((cartItem) =>{
      if(productId === cartItem.productId){
          matchingitem=cartItem;
      }
      saveToLocalStorage();
    });

    const quantitySelector = document.querySelector(`.js-quantity-product-${productId}`);
    const quantity = Number(quantitySelector.value);
    if(matchingitem){
      matchingitem.quantity += quantity;
    }else{

      cart.push({
      productId:productId,
      quantity:quantity
    });
    }
}

function saveToLocalStorage(){
  localStorage.setItem('cart',JSON.stringify(cart));
}

export function removeFromCart(productId){
  const newCart = [];
  
  cart.forEach((cartItem)=>{
    if(cartItem.productId !== productId){
      newCart.push(cartItem);
    }
  });
  cart = newCart;
  saveToLocalStorage();

}