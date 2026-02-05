import { createContext, useContext } from "react";
import type { Product } from "../../lib/product";
import { AddToCartButton, IncrementButton } from "../Buttons/button";

interface ProductItemProps {
  product: Product;
  countInCart: number;
}

type ProductItemContext = {
  product: Product;
  countInCart: number;
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
    <ProductItemContext.Provider
      value={{ product: props.product, countInCart: props.countInCart }}
    >
      <div className="ui:flex-col-top-left ui:w-full ui:gap-2">
        <div className="ui:flex-col-center">
          <ProductItem.Image />
          <ProductItem.Button />
        </div>
        <ProductItem.ItemInfo />
      </div>
    </ProductItemContext.Provider>
  );
}

ProductItem.Image = function ProductItemImage() {
  const { product, countInCart } = useProductItemContext();
  const { image, name } = product;
  const { mobile, tablet, desktop } = image;

  const isSelected = countInCart > 0;

  return (
    <picture>
      <source srcSet={desktop} media="(width >= 1440px)" />
      <source srcSet={tablet} media="(width >= 768px)" />
      <img
        className={`ui:rounded-[8px] ${isSelected ? "ui:border ui:border-primary" : ""}`}
        style={{ objectFit: "cover" }}
        src={mobile}
        alt={name}
        height="212"
        width="100%"
      />
    </picture>
  );
};

ProductItem.ItemInfo = function ProductItemInfo() {
  const { product } = useProductItemContext();
  const { name, price, category } = product;

  const priceFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const formattedPrice = priceFormatter.format(price);

  return (
    <div className="ui:flex-col-top-left ui:gap-0.5">
      <span className="ui:text-preset-4 ui:text-text-caption">{category}</span>
      <span className="ui:text-preset-5 ui:text-text-default">{name}</span>
      <span className="ui:text-preset-3 ui:text-text-on-surface">
        {formattedPrice}
      </span>
    </div>
  );
};

ProductItem.Button = function ProductItemButton() {
  const { countInCart } = useProductItemContext();
  const isSelected = countInCart > 0;
  return (
    <div className="ui:w-20 ui:-mt-[22px] ui:mx-auto ui:z-10">
      {!isSelected ? (
        <AddToCartButton onClick={() => {}} />
      ) : (
        <IncrementButton onClick={() => {}} count={countInCart} />
      )}
    </div>
  );
};
