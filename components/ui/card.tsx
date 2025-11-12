// components/ui/card.tsx
// Diubah untuk menggunakan React Bootstrap
import * as React from "react";
import { Card as BsCard, CardProps as BsCardProps } from "react-bootstrap";

// --- Card (Root) ---
const Card = React.forwardRef<HTMLDivElement, BsCardProps>(
  ({ className, ...props }, ref) => (
    <BsCard ref={ref} className={className} {...props} />
  )
);
Card.displayName = "Card";

// --- CardHeader ---
const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <BsCard.Header ref={ref} className={className} {...props} />
));
CardHeader.displayName = "CardHeader";

// --- CardTitle ---
const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  // Gunakan as="h5" (default) atau sesuaikan
  <BsCard.Title ref={ref} className={className} {...props} />
));
CardTitle.displayName = "CardTitle";

// --- CardDescription (menggunakan Card.Text) ---
const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  // Tambahkan 'text-muted' agar mirip dengan 'muted-foreground'
  <BsCard.Text
    ref={ref}
    className={`text-muted ${className || ""}`}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

// --- CardContent (menggunakan Card.Body) ---
const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <BsCard.Body ref={ref} className={className} {...props} />
));
CardContent.displayName = "CardContent";

// --- CardFooter ---
const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <BsCard.Footer ref={ref} className={className} {...props} />
));
CardFooter.displayName = "CardFooter";

// --- CardAction (Tidak ada padanan langsung di Bootstrap) ---
// Ini adalah komponen kustom. Kita bisa buat div biasa
// dan gunakan 'ms-auto' (margin-start: auto) untuk mendorongnya ke kanan
const CardAction = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={`ms-auto ${className || ""}`} {...props} />
));
CardAction.displayName = "CardAction";

export {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
};
