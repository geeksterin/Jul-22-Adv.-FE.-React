console.log(cartData);

const allProducts = cartData.map(e => e.products);
console.log(allProducts);

const flatProducts = allProducts.flat();
console.log(flatProducts);

// const id1Products = flatProducts.filter(e => {
//   if(e.productId == 1) {
//     return true;
//   }
//   return false;
// })

const id1Products = flatProducts.filter(e => e.productId == 1);
console.log(id1Products);

const totalQuantity = id1Products.reduce((c, e) => c + e.quantity, 0);
console.log(totalQuantity);