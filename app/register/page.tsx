"use client";

import { ArrowRight, AtSign, Lock, Mail, User } from "lucide-react";
import Link from "next/link";
import { useActionState } from "react";
import {
  Alert,
  Button,
  Card,
  Container,
  Form,
  InputGroup,
} from "react-bootstrap";
import { registerUser } from "../actions";

export default function RegisterPage() {
  const [state, formAction, isPending] = useActionState(registerUser, null);

  return (
    <section
      className="d-flex align-items-center min-vh-100 position-relative overflow-hidden"
      style={{ backgroundColor: "#050505", color: "white" }}
    >

      <Container style={{ zIndex: 2 }}>
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-5">
            <Card
              className="border-0 rounded-4 shadow-lg"
              style={{
                background: "rgba(30, 30, 35, 0.6)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <Card.Body className="p-5">
                <div className="text-center mb-4">
                  <h2 className="fw-bold text-white mb-1">Create Account</h2>
                  <p className="text-secondary small">
                    Join the exclusive community today.
                  </p>
                </div>

                {state?.success === false && (
                  <Alert
                    variant="danger"
                    className="py-2 small mb-4 text-center"
                  >
                    {state.message}
                  </Alert>
                )}

                <form action={formAction}>
                  <Form.Group className="mb-3">
                    <Form.Label className="small text-secondary fw-bold">
                      FULL NAME
                    </Form.Label>
                    <InputGroup>
                      <InputGroup.Text className="bg-dark border-secondary text-secondary">
                        <User size={18} />
                      </InputGroup.Text>
                      <Form.Control
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        required
                        className="bg-dark text-white border-secondary"
                      />
                    </InputGroup>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="small text-secondary fw-bold">
                      USERNAME
                    </Form.Label>
                    <InputGroup>
                      <InputGroup.Text className="bg-dark border-secondary text-secondary">
                        <AtSign size={18} />
                      </InputGroup.Text>
                      <Form.Control
                        name="username"
                        type="text"
                        placeholder="johndoe"
                        required
                        className="bg-dark text-white border-secondary"
                      />
                    </InputGroup>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="small text-secondary fw-bold">
                      EMAIL
                    </Form.Label>
                    <InputGroup>
                      <InputGroup.Text className="bg-dark border-secondary text-secondary">
                        <Mail size={18} />
                      </InputGroup.Text>
                      <Form.Control
                        name="email"
                        type="email"
                        placeholder="name@example.com"
                        required
                        className="bg-dark text-white border-secondary"
                      />
                    </InputGroup>
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label className="small text-secondary fw-bold">
                      PASSWORD
                    </Form.Label>
                    <InputGroup>
                      <InputGroup.Text className="bg-dark border-secondary text-secondary">
                        <Lock size={18} />
                      </InputGroup.Text>
                      <Form.Control
                        name="password"
                        type="password"
                        placeholder="••••••••"
                        required
                        className="bg-dark text-white border-secondary"
                      />
                    </InputGroup>
                  </Form.Group>

                  <Button
                    variant="primary"
                    type="submit"
                    disabled={isPending}
                    className="w-100 py-2 fw-bold rounded-pill d-flex align-items-center justify-content-center gap-2"
                    style={{
                      background: "linear-gradient(to right, #7c3aed, #6d28d9)",
                      border: "none",
                    }}
                  >
                    {isPending ? "Creating..." : "Sign Up Free"}{" "}
                    <ArrowRight size={18} />
                  </Button>
                </form>

                <div className="text-center mt-4 pt-3 border-top border-secondary border-opacity-25">
                  <span className="text-secondary small">
                    Already have an account?{" "}
                  </span>
                  <Link
                    href="/login"
                    className="text-decoration-none fw-bold text-primary"
                  >
                    Log In
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}
