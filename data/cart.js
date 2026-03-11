export const cart = [

  
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