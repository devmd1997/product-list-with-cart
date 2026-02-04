import { createContext, useContext } from "react";

type ButtonProps = {
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
    ? "bg-button-primary"
    : "bg-button-secondary border border-border-default hover:border-border-selected";
  return (
    <ButtonContext.Provider
      value={{ label, iconLeft, iconRight, primary, iconBorders }}
    >
      <button
        className={`group rounded-full px-3 py-2 ${hasTwoIcons ? "flex-row-between-center" : "flex-row-center-content"} ${buttonVariantStyle} gap-1`}
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
  const { label, primary } = useButtonContext();
  const textStyle = primary
    ? "text-button-primary-text"
    : "text-button-secondary-text group-hover:text-button-secondary-text-hover";
  return <span className={`text-preset-3 ${textStyle}`}>{label}</span>;
};

Button.IconLeft = function ButtonIconLeft() {
  const { iconLeft, iconBorders } = useButtonContext();
  const borderStyle =
    "rounded-full border border-white flex-row-center-content";
  return (
    iconLeft && (
      <div className={`size-2.5 ${iconBorders ? borderStyle : ""}`}>
        <img src={iconLeft} alt="icon" />
      </div>
    )
  );
};

Button.IconRight = function ButtonIconRight() {
  const { iconRight, iconBorders } = useButtonContext();
  const borderStyle =
    "rounded-full border border-white flex-row-center-content";
  return (
    iconRight && (
      <div className={`size-2.5 ${iconBorders ? borderStyle : ""}`}>
        <img src={iconRight} alt="icon" />
      </div>
    )
  );
};
