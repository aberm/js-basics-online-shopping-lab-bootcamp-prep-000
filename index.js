var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var x = Math.floor(Math.random() * 100) + 1;
  cart.push({'itemName': item, 'itemPrice': x});
  return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  } else if (cart.length === 1) {
    sgs
  } else if (cart.length === 2) {
    fdg
  } else if (cart.length > 2) {
    gdf
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
