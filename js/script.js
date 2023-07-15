let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () => {
  cartItem.classList.toggle('active');
};

function toggleMenu() {
  var navbar = document.getElementById('navbar');
  navbar.classList.toggle('active');
}

function toggleSearch() {
  var search = document.getElementById('search-form');
  search.classList.toggle('active');
}

function toggleCart() {
  var cart = document.getElementById('cart-items-container');
  cart.classList.toggle('active');
}
