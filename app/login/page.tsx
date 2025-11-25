"use client";

import { ArrowRight, Lock, Mail } from "lucide-react";
import Link from "next/link";
import { Button, Card, Container, Form, InputGroup } from "react-bootstrap";
import { loginUser } from "../actions";

export default function LoginPage() {
  return (
    <section
      className="d-flex align-items-center min-vh-100 position-relative overflow-hidden"
      style={{ backgroundColor: "#050505", color: "white" }}
    >
      {/* Background Effects */}
      <div
        className="position-absolute w-100 h-100 top-0 start-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.15) 0%, transparent 50%)", // Aksen Pink sedikit
          zIndex: 0,
        }}
      />
      <div
        className="position-absolute w-100 h-100 top-0 start-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
          maskImage:
            "linear-gradient(to bottom, transparent, black, transparent)",
          zIndex: 0,
        }}
      />

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
                <div className="text-center mb-5">
                  <h2 className="fw-bold text-white mb-1">Welcome Back!</h2>
                  <p className="text-secondary small">
                    Enter your details to access your account.
                  </p>
                </div>

                <Form action={loginUser}>
                  {/* Email */}
                  <Form.Group className="mb-3">
                    <Form.Label className="small text-secondary fw-bold">
                      EMAIL ADDRESS
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

                  {/* Password */}
                  <Form.Group className="mb-4">
                    <div className="d-flex justify-content-between align-items-center">
                      <Form.Label className="small text-secondary fw-bold mb-0">
                        PASSWORD
                      </Form.Label>
                      <Link
                        href="#"
                        className="small text-primary text-decoration-none"
                      >
                        Forgot Password?
                      </Link>
                    </div>
                    <InputGroup className="mt-2">
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
                    className="w-100 py-2 fw-bold rounded-pill d-flex align-items-center justify-content-center gap-2"
                    style={{
                      background: "linear-gradient(to right, #7c3aed, #6d28d9)",
                      border: "none",
                      boxShadow: "0 4px 15px rgba(124, 58, 237, 0.3)",
                    }}
                  >
                    Sign In <ArrowRight size={18} />
                  </Button>
                </Form>

                <div className="text-center mt-4 pt-3 border-top border-secondary border-opacity-25">
                  <span className="text-secondary small">
                    Don't have an account?{" "}
                  </span>
                  <Link
                    href="/register"
                    className="text-decoration-none fw-bold text-primary"
                  >
                    Sign Up
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
