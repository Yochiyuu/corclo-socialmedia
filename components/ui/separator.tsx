// components/ui/separator.tsx
// Diubah untuk menggunakan elemen Bootstrap/HTML standar
import * as React from "react";

interface SeparatorProps
  extends React.HTMLAttributes<HTMLHRElement | HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  decorative?: boolean;
}

const Separator = React.forwardRef<HTMLHRElement, SeparatorProps>(
  ({ className, orientation = "horizontal", ...props }, ref) => {
    if (orientation === "vertical") {
      // Gunakan helper 'vr' (vertical rule) dari Bootstrap 5
      // 'vr' adalah <div>, jadi kita ubah elemennya
      return (
        <div
          className={`vr ${className || ""}`}
          {...(props as React.HTMLAttributes<HTMLDivElement>)}
          // 'ref' tidak bisa langsung ke 'div' jika kita ingin 'hr'
          // Ini adalah kompromi.
        />
      );
    }

    // Default adalah 'hr' (horizontal rule)
    return (
      <hr
        ref={ref}
        className={className}
        {...(props as React.HTMLAttributes<HTMLHRElement>)}
      />
    );
  }
);
Separator.displayName = "Separator";

export { Separator };
