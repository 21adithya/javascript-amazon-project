export const cart = [
  {
    productId:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity:2,
  }
];

export function addToCart(productId){
  let matchingitem;
    cart.forEach((cartItem) =>{
      if(productId === cartItem.productId){
          matchingitem=cartItem;
      }
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