// components/ui/textarea.tsx
// Diubah untuk menggunakan React Bootstrap
import * as React from "react";
import { Form, FormControlProps } from "react-bootstrap";

// Tipe props baru
interface TextareaProps extends Omit<FormControlProps, "as"> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <Form.Control as="textarea" className={className} ref={ref} {...props} />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
