// components/ui/avatar.tsx
// Diubah untuk menggunakan React Bootstrap
import * as React from "react";
import { Image, ImageProps } from "react-bootstrap";

// --- Avatar (Root) ---
// Ini hanya div pembungkus.
// Kita bisa beri style inline agar ukurannya pas.
const Avatar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, style, ...props }, ref) => (
  <div
    ref={ref}
    className={`position-relative ${className || ""}`}
    style={{ width: "2.5rem", height: "2.5rem", ...style }} // Ukuran default
    {...props}
  />
));
Avatar.displayName = "Avatar";

// --- AvatarImage ---
// Kita ganti dengan <Image roundedCircle />
const AvatarImage = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ className, ...props }, ref) => (
    <Image
      ref={ref}
      className={className}
      roundedCircle
      fluid // Agar gambar mengisi 'Avatar' root
      {...props}
    />
  )
);
AvatarImage.displayName = "AvatarImage";

// --- AvatarFallback ---
// Bootstrap tidak punya padanan. Ini adalah div sederhana.
// Catatan: Anda harus menambahkan logika JS sendiri (misal: onError pada AvatarImage)
// untuk menampilkan/menyembunyikan komponen Fallback ini.
const AvatarFallback = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`w-100 h-100 bg-light text-muted d-flex align-items-center justify-content-center rounded-circle ${
      className || ""
    }`}
    {...props}
  />
));
AvatarFallback.displayName = "AvatarFallback";

export { Avatar, AvatarFallback, AvatarImage };
