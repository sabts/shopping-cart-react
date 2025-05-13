import styles from './productCard.module.css'

const ProductCard = ({ product, addToCart, cartItem, increaseQuantity, decreaseQuantity}) => {
    return (
      <article className= {styles["product-card"]} id={product.id}>
        {/* Imagen del producto */}
        <div className={styles["product-picture"]}>
          <picture>
            <source media="(min-width: 1040px)" srcSet={product.imgDesktop} />
            <source media="(min-width: 768px)" srcSet={product.imgTablet} />
            <source media="(min-width: 360px)" srcSet={product.imgMobile} />
            <img src={product.imgMobile} alt={product.alt} />
          </picture>
        </div>
  
        {/* Botones */}
        <div className={styles["product-buttons"]}>
          <button className= {`${styles.button}  ${styles["button-primary"]}`}
          name='addToCart'
          onClick={addToCart}>
            <img src="/assets/icon-add-to-cart.svg" alt="Add to cart" />
            Add to Cart
          </button>
  
          <div className={`${styles.button} ${styles["button-secondary"]}`}>
            <button 
             name='decreaseQuantity'
            onClick={decreaseQuantity}
            className= {styles["cartbutton-icon"]}>
              <img src="/assets/icon-decrement-quantity.svg" alt="Decrease" />
            </button>
            <span>1</span>
            <button 
            name='increaseQuantity'
             onClick={increaseQuantity}
            className= {styles["cartbutton-icon"]}>
              <img src="/assets/icon-increment-quantity.svg" alt="Increase" />
            </button>
          </div>
        </div>
  
        {/* Texto del producto */}
        <div className={styles["product-content"]}>
          <span className={styles["product-name"]}>{product.name}</span>
          <span className={styles["product-title"]}>{product.title}</span>
          <span className={styles["product-price"]}>${product.price}</span>
        </div>
      </article>
    );
  };
  //{cartItem.quantity}
  
  export default ProductCard