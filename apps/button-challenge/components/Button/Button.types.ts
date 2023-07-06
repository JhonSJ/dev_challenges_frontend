interface BaseProps
  extends Omit<React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>, 'color'> {
  }

export type ButtonSizes = "small" | "medium" | "large";
export type ButtonVariants = "default" | "outlined" | "text";
export type ButtonColors = "default" | "primary" | "secondary" | "danger";

export type ButtonProps = BaseProps & {
  variant?: ButtonVariants;
  size?: ButtonSizes;
  color?: ButtonColors;
  disabledElevation?: boolean;
  fullWidth?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
};
