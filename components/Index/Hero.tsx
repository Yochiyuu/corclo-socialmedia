"use client";

import { ArrowRight, Globe, Shield, Zap } from "lucide-react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

export default function Hero() {
  return (
    <section
      className="position-relative overflow-hidden d-flex align-items-center pt-5"
      style={{
        backgroundColor: "#050505",
        minHeight: "100vh",
        paddingBottom: "100px",
      }}
    >
      <div
        className="position-absolute w-100 h-100 top-0 start-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          zIndex: 0,
        }}
      />

      <div
        className="position-absolute top-0 start-50 translate-middle-x"
        style={{
          width: "80%",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(124, 58, 237, 0.2) 0%, rgba(0,0,0,0) 70%)",
          filter: "blur(100px)",
          zIndex: 0,
        }}
      />

      <Container className="position-relative mt-5" style={{ zIndex: 1 }}>
        <Row className="align-items-center justify-content-center text-center mb-5">
          <Col lg={10} xl={8}>
            <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill border border-secondary border-opacity-25 bg-dark bg-opacity-50 mb-4">
              <span
                className="d-inline-block rounded-circle bg-success"
                style={{ width: "8px", height: "8px" }}
              ></span>
              <span className="text-secondary small fw-medium">
                v1.0 Public Beta is Live
              </span>
            </div>

            <h1
              className="display-2 fw-bold text-white mb-4"
              style={{ letterSpacing: "-2px" }}
            >
              The Social Network <br />
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #a78bfa 0%, #e879f9 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Built for Humans.
              </span>
            </h1>

            <p
              className="lead text-secondary mb-5 mx-auto"
              style={{ maxWidth: "600px" }}
            >
              Experience a new era of connection without the noise. No
              algorithm, no tracking, just you and your community.
            </p>

            <div className="d-flex gap-3 justify-content-center flex-column flex-sm-row mb-5">
              <Button
                variant="primary"
                size="lg"
                className="px-5 py-3 fw-bold rounded-pill d-flex align-items-center justify-content-center gap-2 shadow-lg"
                style={{
                  backgroundColor: "#7c3aed",
                  borderColor: "#7c3aed",
                  boxShadow: "0 0 20px rgba(124, 58, 237, 0.4)",
                }}
              >
                Start Exploring <ArrowRight size={20} />
              </Button>

              <Button
                variant="dark"
                size="lg"
                className="px-5 py-3 fw-bold rounded-pill border border-secondary border-opacity-25 bg-transparent hover-light"
              >
                View Features
              </Button>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center g-4">
          <Col md={4}>
            <Card
              className="bg-dark border border-secondary border-opacity-25 text-white h-100 p-3"
              style={{
                background: "rgba(20, 20, 20, 0.6)",
                backdropFilter: "blur(10px)",
              }}
            >
              <div className="d-flex align-items-center gap-3 mb-2">
                <div className="p-2 rounded bg-primary bg-opacity-10 text-primary">
                  <Zap size={24} />
                </div>
                <h5 className="fw-bold mb-0">Lightning Fast</h5>
              </div>
              <Card.Text className="text-secondary small">
                Built on Next.js 15 for instant interactions and zero lag.
              </Card.Text>
            </Card>
          </Col>

          <Col md={4} style={{ marginTop: "30px" }}>
            <Card
              className="bg-dark border border-secondary border-opacity-25 text-white h-100 p-3 shadow-lg"
              style={{
                background: "rgba(30, 30, 30, 0.8)",
                backdropFilter: "blur(10px)",
                borderColor: "#7c3aed",
              }}
            >
              <div className="d-flex align-items-center gap-3 mb-2">
                <div className="p-2 rounded bg-success bg-opacity-10 text-success">
                  <Shield size={24} />
                </div>
                <h5 className="fw-bold mb-0">Privacy First</h5>
              </div>
              <Card.Text className="text-secondary small">
                End-to-end encryption for all your private messages.
              </Card.Text>
            </Card>
          </Col>

          <Col md={4}>
            <Card
              className="bg-dark border border-secondary border-opacity-25 text-white h-100 p-3"
              style={{
                background: "rgba(20, 20, 20, 0.6)",
                backdropFilter: "blur(10px)",
              }}
            >
              <div className="d-flex align-items-center gap-3 mb-2">
                <div className="p-2 rounded bg-info bg-opacity-10 text-info">
                  <Globe size={24} />
                </div>
                <h5 className="fw-bold mb-0">Global & Open</h5>
              </div>
              <Card.Text className="text-secondary small">
                Connect with anyone, anywhere, without boundaries.
              </Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
