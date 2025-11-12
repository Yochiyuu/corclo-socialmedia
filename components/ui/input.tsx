// components/ui/input.tsx
// Diubah untuk menggunakan React Bootstrap
import * as React from "react";
import { Form, FormControlProps } from "react-bootstrap";

// Tipe props baru, mewarisi dari FormControlProps
interface InputProps extends FormControlProps {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <Form.Control type={type} className={className} ref={ref} {...props} />
    );
  }
);
Input.displayName = "Input";

export { Input };
