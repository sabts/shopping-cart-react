import {PRODUCTS} from "../../constants/products"
import {FILTERS} from "../../constants/filters"
import ProductCard from "../product-card/ProductCard"
import styles from "./shoppingcartsite.module.css"
import { useState } from "react"

const ShoppingCartSite = () => {
 const [filter, setFilter] = useState(FILTERS.default)
 const [cartItem, setCartItem] = useState([]); 
//className={`${styles.filter} ${isActive ? styles["filter-active"] : ""}`}

 const filteredProducts = getFilteredProducts(PRODUCTS, filter);
 
    return <>
    <header>
      <h1>Desserts</h1>
      <div className={styles["filter-box"]}>
        <button   
        className={`${styles.filter} ${filter === FILTERS.default ? styles["filter-active"] : ""}`}
        onClick={() => setFilter(FILTERS.default)}>Default
        </button>

        <button 
        className={`${styles.filter} ${filter === FILTERS.name ? styles["filter-active"] : ""}`}
        onClick={() => setFilter(FILTERS.name)}>Name
        </button>
        
        <button 
        className={`${styles.filter} ${filter === FILTERS.price ? styles["filter-active"] : ""}`}
        onClick={() => setFilter(FILTERS.price)}>Price
        </button>
      </div>
    </header>
    <main>
    <section>
  <article className={styles["gallery"]}>
    {filteredProducts.map(product => (
      <ProductCard key={product.id} product={product} />
    ))}
  </article>
</section>
    </main>
  </>
}
const getFilteredProducts = (products, filter) => {
  if (filter === FILTERS.name) {
    return [...products].sort((a, b) => a.name.localeCompare(b.name));
  }
  if (filter === FILTERS.price) {
    return [...products].sort((a, b) => a.price - b.price);
  }
  return products; // Default
};

export default ShoppingCartSite