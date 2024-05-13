export const cart =[];


 export function addToCart (productId) {
    let matching;

    cart.forEach((cartItem) => {
        if (productId === cartItem.productId){
            matching = cartItem;
        }
    });

    if (matching) {
        matching.quantity += 1;
    } else {
        cart.push({
            productId: productId,
            quantity : 1
           });
    }


}