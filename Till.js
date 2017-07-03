var apples = {
name: 'Apples'
price: 0.99
}
var pears = {
name: 'Pears'
price: 0.20
}
var bannanas = {
name: 'Bannanas'
price: 0.75
}
var oranges = {
name: 'Oranges'
price: 0.50
}
var melons = {
name: 'Melons'
price: 1.99
}

var products = [apples] [pears] [bannanas] [oranges] [melons]

for (var productIndex = 0; productIndex < products.length; productIndex++) {
  var buttonsContainer = document.getElementById('buttons')
  var product = products[productIndex]

  var buttonsHTML = '<div class="col-md-2">'
  buttonsHTML += '<div class="panel panel-default">'
  buttonsHTML += '<div class="panel-heading">'
  buttonsHTML += '<h3 class="panel-title">' + product.name + '</h3>'
  buttonsHTML += '</div>'
  buttonsHTML += '<div class="panel-body">'
  buttonsHTML += '<p>'
  buttonsHTML += '<strong>Price: </strong> £0.99'
  buttonsHTML += '</p>'
  buttonsHTML += '<button type="button" class="btn btn-primary" onclick="transaction.add(\'' + product.name + '\')">Add</button>'
  buttonsHTML += '</div>'
  buttonsHTML += '</div>'
  buttonsHTML += '</div>'

  buttonsContainer.innerHTML += buttonsHTML
}

var transaction = {}
transaction.items = []
transaction.add = function (productName) {
  for (productIndex = 0; productIndex < products.length; productIndex++) {
    var currentProduct = products[productIndex]

    if (currentProduct.name === productName) {
      var selectedProduct = currentProduct
      break
    }
  }

  if (selectedProduct) {
    var newItem = {
      id: Math.floor(Math.random() * 100000),
      name: selectedProduct.name,
      price: selectedProduct.price
    }

    this.items.push(newItem)
    updateDOM()
  }
}

function updateDOM () {
  var tillItems = document.getElementById('tillItems')
  tillItems.innerHTML = ''

  var total = 0.00

  for (var itemIndex = 0; itemIndex < transaction.items.length; itemIndex++) {
    var currentItem = transaction.items[itemIndex]

    var itemsHTML = '<li class="list-group-item">'
    itemsHTML += '<span class="badge">' + currentItem.price + '</span>'
    itemsHTML += currentItem.name
    itemsHTML += '</li>'

    tillItems.innerHTML += itemsHTML
    total += currentItem.price
  }

  document.getElementById('total').innerHTML = total.toFixed(2)
}