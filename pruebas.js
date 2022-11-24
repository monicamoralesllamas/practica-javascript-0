var products = [
    { id: 1, name: "Leche", price: 120, categories: ["familiar", "comida"] },
    { id: 2, name: "Arroz", price: 80, categories: ["familiar", "comida"] },
    { id: 3, name: "Lavadora", price: 7800, categories: ["electrodomésticos"] }
  ];
  
  for (var i=0; i < products.length; i++) {
    var product = products[i];
    console.log(product.name);
  }