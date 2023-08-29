const product = {
  name: 'socks',
  price: 1090,
  'delivery-time': '1 day',
  rating: {
    stars: 3.0,
    count: 90
  },
  fun: function logHello(){
    console.log('hello');
  }
};

console.log(product);
console.log(product.name);
console.log(product.price);

console.log(product['delivery-time']);

console.log(product.rating);
console.log(product.rating.stars);
console.log(product.rating.count);

console.log(JSON.stringify(product));

const JSONproduct = JSON.stringify(product);
console.log(JSON.parse(JSONproduct));
console.log(product);

/*
product.name = 'shirt';
console.log('after: ' + product.name);

console.log(product.newProperty);
console.log(product);

delete product.newProperty;

console.log(product.newProperty);
console.log(product);
*/

function alertPrice(){
  alert(`The price of one ${product.name} is $${product.price}.`);
}

function change100(input){
  if (input==='add'){
    product.price += 100;
  }
  if (input ==='subtract'){
    if (product.price - 100 >= 0){
      product.price -= 100;
    }
    else{
      alert(`You can't go lower than 0`);
    }
  }
}

function reset(){
  product.price = 1090;
}
