// components/ui/button.tsx
// Diubah untuk menggunakan React Bootstrap
import * as React from "react";
import {
  Button as BsButton,
  ButtonProps as BsButtonProps,
} from "react-bootstrap";

// Tipe varian lama dari CVA (Tailwind)
type OldVariant =
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link";
// Tipe ukuran lama dari CVA (Tailwind)
type OldSize = "default" | "sm" | "lg" | "icon" | "icon-sm" | "icon-lg";

// Tipe props baru, memetakan props lama ke props React Bootstrap
interface ButtonProps extends Omit<BsButtonProps, "variant" | "size"> {
  variant?: OldVariant;
  size?: OldSize;
  asChild?: boolean; // Properti ini tidak lagi didukung di React Bootstrap
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "default", size = "default", asChild, ...props },
    ref
  ) => {
    // 1. Memetakan 'variant' CVA ke 'variant' Bootstrap
    const mapVariant = (): BsButtonProps["variant"] => {
      switch (variant) {
        case "destructive":
          return "danger";
        case "outline":
          return "outline-secondary"; // atau 'outline-primary'
        case "ghost":
          return "light"; // 'light' atau 'link' adalah padanan terdekat
        case "default":
          return "primary";
        case "secondary":
        case "link":
          return variant;
        default:
          return "primary";
      }
    };

    // 2. Memetakan 'size' CVA ke 'size' Bootstrap
    const mapSize = (): BsButtonProps["size"] => {
      switch (size) {
        case "sm":
        case "icon-sm":
          return "sm";
        case "lg":
        case "icon-lg":
          return "lg";
        default:
          return undefined; // Ukuran default (medium)
      }
    };

    const bsVariant = mapVariant();
    const bsSize = mapSize();

    if (asChild) {
      console.warn(
        "Prop 'asChild' tidak didukung. Gunakan prop 'as' dari React Bootstrap (misal: as='a')."
      );
    }

    // 3. Varian 'icon' tidak punya padanan.
    // Anda bisa menambahkan 'rounded-circle' di className jika perlu.
    // Contoh: <Button size="icon" className="rounded-circle" />

    return (
      <BsButton
        ref={ref}
        variant={bsVariant}
        size={bsSize}
        className={className}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

// Hapus 'buttonVariants' karena CVA (class-variance-authority) tidak lagi digunakan
export { Button };
