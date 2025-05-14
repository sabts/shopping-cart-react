const Cart = ({
  product,
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  cart,
}) => {
  const productInCart = cart.find(item => item.id === product.id);

  return (
    <>
      <div>
        <h2>Your Cart(0)</h2>
      </div>
      {/* carrito vacio*/}
      {!productInCart && (
        <div>
          <img src="/assets/illustration-empty-cart.svg" />
        </div>
      )}

      {/* carrito con prodroductos*/}
      <div>
        {/*info del producto*/}
        <div>
          <span>item Title</span>
          {/*info de los precios del producto*/}
          <div>
            <span> item Quantity </span>
            <span> Item Unit price </span>
            <span> total item price </span>
          </div>
        </div>
        <button>
          <img
            src="/assets/icon-remove-item.svg"
            alt="delete product from cart"
          />
        </button>
        {/*precio total*/}
        <div>
          <span>Order Total:</span>
          <span>$ Total price</span>
        </div>
      </div>
    </>
  );
};
export default Cart;
