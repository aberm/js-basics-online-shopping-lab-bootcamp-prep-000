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
  } 
  else if (cart.length === 1) {
    return `In your cart, you have ${cart[0]['itemName']} at $${cart[0]['itemPrice']}.`
  } 
  else if (cart.length === 2) {
    return `In your cart, you have ${cart[0]['itemName']} at $${cart[0]['itemPrice']}, and ${cart[1]['itemName']} at $${cart[1]['itemPrice']}.`
  } 
  else if (cart.length > 2) {
    var str = "In your cart, you have ";
    for (var i = 0; i < cart.length; i++) {
      if (i === cart.length-1) {
        str = str + `and ${cart[i]['itemName']} at $${cart[i]['itemPrice']}.`
      } else {
      str = str + `${cart[i]['itemName']} at $${cart[i]['itemPrice']}, `
      }
    }
    return str
  }
}

function total() {
  var count = 0;
  for (var i = 0; i < cart.length; i++) {
    count += cart[i]['itemPrice']
  }
  return count
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
