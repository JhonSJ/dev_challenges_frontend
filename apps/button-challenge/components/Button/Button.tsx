import React from "react";
import { ButtonProps } from "./Button.types";
import { twMerge } from "tailwind-merge";
import {
  BUTTON_DEFAULT_THEME,
  BUTTON_SIZES_PADDING,
  BUTTON_VARIANTS_COLORS,
} from "./Button.class";

const Button: React.FC<ButtonProps> = (props) => {
  const {
    variant = "default",
    size = "medium",
    disabledElevation,
    fullWidth,
    startIcon,
    endIcon,
    color = "default",
    className,
    disabled,
    children,
    ...rest
  } = props;

  const computedClx = React.useMemo(() => {
    const variantClass = BUTTON_VARIANTS_COLORS[variant][color];
    const sizeClass = BUTTON_SIZES_PADDING[size];
    const fullWidthClass = fullWidth ? "w-full" : "";
    const disabledElevationClass = disabledElevation ? "" : `shadow`;

    return [
      BUTTON_DEFAULT_THEME,
      sizeClass,
      variantClass,
      fullWidthClass,
      disabledElevationClass,
      className,
    ].join(" ");
  }, [size, color, variant, className, fullWidth, disabledElevation]);

  return (
    <button
      type="button"
      className={twMerge(computedClx)}
      disabled={disabled}
      {...rest}
    >
      {startIcon}
      {children}
      {endIcon}
    </button>
  );
};

export default Button;
