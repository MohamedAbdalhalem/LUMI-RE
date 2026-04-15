import Product from "./Product";
import ProductsLodaingScreen from "./productsLodaingScreen";
import { memo } from "react";

export default memo(function ProductList({ allProduct, isLoading }) {
  return (
    <>
      {isLoading && <ProductsLodaingScreen />}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {allProduct?.map((product) => (
          <Product
            key={product.product_id}
            id={product.product_id}
            name={product.product_name}
            image={product.images[0].image_url}
            description={product.description}
            price={product.variants[0].price}
          />
        ))}
      </div>
    </>
  );
});
