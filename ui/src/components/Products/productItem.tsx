import { createContext, useContext } from "react";
import type { Product } from "../../lib/product";

interface ProductItemProps {
  product: Product;
}

type ProductItemContext = {
  product: Product;
};

const ProductItemContext = createContext<ProductItemContext | undefined>(
  undefined,
);

function useProductItemContext() {
  const context = useContext(ProductItemContext);
  if (!context) {
    throw new Error(
      "useProductItemContext must be used within a ProductItemProvider",
    );
  }
  return context;
}

export function ProductItem(props: ProductItemProps) {
  return (
    <ProductItemContext.Provider value={{ product: props.product }}>
      <div className="flex-col-top-left relative w-full gap-2">
        <ProductItem.Image />
      </div>
    </ProductItemContext.Provider>
  );
}

ProductItem.Image = function ProductItemImage() {
  const { product } = useProductItemContext();
  const { image, name } = product;
  const { mobile, tablet, desktop } = image;

  return (
    <picture>
      <source srcSet={desktop} media="(width >= 1440px)" />
      <source srcSet={tablet} media="(width >= 768px)" />
      <img src={mobile} alt={name} height="212" width="100%" />
    </picture>
  );
};
