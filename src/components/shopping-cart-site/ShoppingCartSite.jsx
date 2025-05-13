import {PRODUCTS} from "../../constants/products"
import ProductCard from "../product-card/ProductCard"
import styles from "./shoppingcartsite.module.css"

const ShoppingCartSite = () => {
    return <>
    <header>
      <h1>Desserts</h1>
      <div className={styles["filter-box"]}>
        <button>Default</button>
        <button>Name</button>
        <button>Price</button>
      </div>
    </header>
    <main>
    <section>
  <article className={styles["gallery"]}>
    {PRODUCTS.map(product => (
      <ProductCard key={product.id} product={product} />
    ))}
  </article>
</section>

      <section>

      </section>
    </main>
  </>
}
export default ShoppingCartSite