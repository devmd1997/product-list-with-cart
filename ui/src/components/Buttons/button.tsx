import { createContext, useContext } from "react";

export type ButtonProps = {
  primary: boolean;
  label?: string;
  onClick?: () => void;
  iconLeft?: string;
  iconRight?: string;
  iconBorders?: boolean;
};

type ButtonContext = {
  primary: boolean;
  label?: string;
  iconLeft?: string;
  iconRight?: string;
  iconBorders?: boolean;
};

const ButtonContext = createContext<ButtonContext | undefined>(undefined);

function useButtonContext() {
  const context = useContext(ButtonContext);
  if (!context) {
    throw new Error("useButtonContext must be used within a ButtonProvider");
  }
  return context;
}

export function Button(props: ButtonProps) {
  const { label, iconLeft, iconRight, primary, onClick, iconBorders } = props;
  const hasTwoIcons = iconLeft && iconRight;
  const buttonVariantStyle = primary
    ? `ui:bg-button-primary ${hasTwoIcons ? "ui:cursor-default" : "ui:hover:bg-button-primary-hover"}`
    : "ui:bg-button-secondary ui:border ui:border-border-default ui:hover:border-border-selected";

  const padding =
    primary && !hasTwoIcons ? "ui:px-3 ui:py-2" : "ui:px-[12px] ui:py-[12px]";
  return (
    <ButtonContext.Provider
      value={{ label, iconLeft, iconRight, primary, iconBorders }}
    >
      <button
        className={`ui:group ui:w-full ui:rounded-full ${padding} ${hasTwoIcons ? "ui:flex-row-between-center" : "ui:flex-row-center-content"} ${buttonVariantStyle} ui:gap-1`}
        onClick={(e) => {
          e.preventDefault();
          onClick?.();
        }}
      >
        {iconLeft && <Button.IconLeft />}
        {label && <Button.Label />}
        {iconRight && <Button.IconRight />}
      </button>
    </ButtonContext.Provider>
  );
}

Button.Label = function ButtonLabel() {
  const { label, primary, iconLeft, iconRight } = useButtonContext();
  const textStyle = primary
    ? "ui:text-button-primary-text"
    : "ui:text-button-secondary-text ui:group-hover:text-button-secondary-text-hover";
  const hasIcons = iconLeft || iconRight;
  return (
    <span
      className={`${hasIcons ? "ui:text-preset-4 ui:font-bold" : "ui:text-preset-3"} ${textStyle}`}
    >
      {label}
    </span>
  );
};

Button.IconLeft = function ButtonIconLeft() {
  const { iconLeft, iconBorders, iconRight } = useButtonContext();
  const hasTwoIcons = iconLeft && iconRight;
  const borderStyle =
    "ui:rounded-full ui:border ui:border-white ui:flex-row-center-content";
  return (
    iconLeft && (
      <div
        className={`ui:size-2.5 ${iconBorders ? borderStyle : ""} ${hasTwoIcons ? "ui:cursor-pointer" : ""}`}
      >
        <img src={iconLeft} alt="icon" />
      </div>
    )
  );
};

Button.IconRight = function ButtonIconRight() {
  const { iconRight, iconBorders, iconLeft } = useButtonContext();
  const hasTwoIcons = iconLeft && iconRight;
  const borderStyle =
    "ui:rounded-full ui:border ui:border-white ui:flex-row-center-content";
  return (
    iconRight && (
      <div
        className={`ui:size-2.5 ${iconBorders ? borderStyle : ""} ${hasTwoIcons ? "ui:cursor-pointer" : ""}`}
      >
        <img src={iconRight} alt="icon" />
      </div>
    )
  );
};

interface AddToCartButtonProps {
  onClick: () => void;
}
export const AddToCartButton = (props: AddToCartButtonProps) => (
  <Button
    {...props}
    primary={false}
    label="Add to cart"
    iconLeft="/images/icon-add-to-cart.svg"
  />
);

interface IncrementButtonProps {
  onClick: () => void;
  count: number;
}

export const IncrementButton = (props: IncrementButtonProps) => {
  return (
    <Button
      {...props}
      primary={true}
      label={`${props.count}`}
      iconLeft="/images/icon-increment-quantity.svg"
      iconRight="/images/icon-decrement-quantity.svg"
      iconBorders={true}
    />
  );
};
