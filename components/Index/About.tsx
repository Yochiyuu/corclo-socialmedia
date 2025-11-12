"use client";

// --- 1. Impor yang Diperbarui ---
// Menghapus: Heart, MessageSquare, Smile, Users
// Menambah: ArrowDownLeft, FileText, MoreHorizontal, Send, UserCircle
import {
  ArrowDownLeft,
  FileText,
  Lock,
  MoreHorizontal,
  Send,
  UserCircle,
} from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";
// Menambah 'Button' untuk mockup
import { Button, Card, Col, Container, Row } from "react-bootstrap";

export default function About() {
  const { theme } = useTheme();
  const [isMounted, setIsMounted] = React.useState(false);
  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <section id="about" style={{ minHeight: "100vh" }} />;
  }

  // Variabel tema Anda (sudah benar)
  const textBodyColor = "text-body";
  const textMutedColor = "text-body-secondary";
  const cardBgColor = "var(--bs-card-bg)";
  const subtleBgColor = "var(--bs-body-tertiary)";
  const primaryColor = "text-primary";

  return (
    <section id="about" className="bg-body py-5">
      <Container className="py-5">
        {/* --- Row 1: Our Vision (Dengan Mockup) --- */}
        <Row className="align-items-center justify-content-center g-5 mb-5 pb-5">
          {/* --- 2. Kode Mockup Smartphone (Dimasukkan di sini) --- */}
          <Col
            lg={6}
            className="d-flex align-items-center justify-content-center"
          >
            {/* --- Phone Mockup Wrapper --- */}
            <div
              className="shadow-lg"
              style={{
                width: "280px", // Lebar ponsel
                borderRadius: "2rem", // Radius bodi ponsel
                background: "#222", // Warna bodi ponsel (selalu gelap)
                padding: "10px", // Ukuran bezel
                transform: "rotate(-3deg)", // Sedikit miring
              }}
            >
              {/* --- Phone Screen --- */}
              <Card
                className="border-0"
                style={{
                  borderRadius: "1.5rem", // Radius layar
                  background: cardBgColor, // Warna layar (Sadar Tema)
                  overflow: "hidden", // Untuk memotong konten
                }}
              >
                {/* --- App Header (Dynamic Island/Notch Area) --- */}
                <div
                  className="w-100 d-flex justify-content-center"
                  style={{ paddingTop: "10px" }}
                >
                  <div
                    style={{
                      width: "80px",
                      height: "20px",
                      background: "#222", // Warna notch
                      borderRadius: "0 0 10px 10px",
                    }}
                  />
                </div>

                {/* --- App User Info --- */}
                <Card.Header
                  className={`d-flex align-items-center justify-content-between bg-transparent border-0 pt-3 px-3 ${textBodyColor}`}
                >
                  <div className="d-flex align-items-center gap-2">
                    <UserCircle size={28} className={primaryColor} />
                    <strong>Corclo User</strong>
                  </div>
                  <MoreHorizontal size={20} className={textMutedColor} />
                </Card.Header>

                {/* --- App Balance (Social Score / Poin) --- */}
                <Card.Body className="text-center pt-2">
                  <p className={`mb-0 ${textMutedColor}`}>Community Score</p>
                  <h1 className={`fw-bold ${textBodyColor}`}>1,558</h1>
                </Card.Body>

                {/* --- App Action Buttons --- */}
                <Card.Footer
                  className="border-0 pb-3 px-3"
                  style={{ backgroundColor: subtleBgColor }} // Latar footer app
                >
                  <Row className="text-center g-2">
                    <Col>
                      <Button
                        variant="light"
                        className="rounded-circle p-2"
                        style={{
                          backgroundColor: "var(--bs-body-bg)", // Tombol menyatu
                        }}
                      >
                        <Send size={20} className={primaryColor} />
                      </Button>
                      <p
                        className={`${textBodyColor} small mt-1 mb-0`}
                        style={{ fontSize: "0.75rem" }}
                      >
                        Post
                      </p>
                    </Col>
                    <Col>
                      <Button
                        variant="light"
                        className="rounded-circle p-2"
                        style={{
                          backgroundColor: "var(--bs-body-bg)",
                        }}
                      >
                        <ArrowDownLeft size={20} className={primaryColor} />
                      </Button>
                      <p
                        className={`${textBodyColor} small mt-1 mb-0`}
                        style={{ fontSize: "0.75rem" }}
                      >
                        Reply
                      </p>
                    </Col>
                    <Col>
                      <Button
                        variant="light"
                        className="rounded-circle p-2"
                        style={{
                          backgroundColor: "var(--bs-body-bg)",
                        }}
                      >
                        <FileText size={20} className={primaryColor} />
                      </Button>
                      <p
                        className={`${textBodyColor} small mt-1 mb-0`}
                        style={{ fontSize: "0.75rem" }}
                      >
                        Drafts
                      </p>
                    </Col>
                    <Col>
                      <Button
                        variant="light"
                        className="rounded-circle p-2"
                        style={{
                          backgroundColor: "var(--bs-body-bg)",
                        }}
                      >
                        <MoreHorizontal size={20} className={primaryColor} />
                      </Button>
                      <p
                        className={`${textBodyColor} small mt-1 mb-0`}
                        style={{ fontSize: "0.75rem" }}
                      >
                        More
                      </p>
                    </Col>
                  </Row>
                </Card.Footer>
              </Card>
            </div>
          </Col>

          {/* --- Teks Visi Anda (Tetap sama) --- */}
          <Col lg={6}>
            <h5 className={`${primaryColor} fw-bold`}>Our Vision</h5>
            <h2 className={`display-5 fw-bold ${textBodyColor}`}>
              Creating a Positive & Connected Social Space
            </h2>
            <p className={`fs-5 ${textMutedColor} mt-3`}>
              We empower individuals to build genuine communities. Our goal is
              to create a world where managing your digital connections feels
              simple, safe, and accessible to everyone.
            </p>
          </Col>
        </Row>

        {/* --- Row 2: Our Mission (Tetap sama) --- */}
        <Row className="align-items-center justify-content-center g-5 mb-5 pb-5">
          <Col lg={6} md={8} className="order-lg-2">
            {/* Simplified "Security" graphic */}
            <div
              className="d-flex justify-content-center align-items-center rounded-5"
              style={{ minHeight: "300px", backgroundColor: subtleBgColor }}
            >
              <div
                className="p-5 rounded-4 d-inline-block"
                style={{ backgroundColor: "var(--bs-primary-bg-subtle)" }}
              >
                <Lock size={60} className={primaryColor} />
              </div>
            </div>
          </Col>
          <Col lg={6} md={8} className="order-lg-1">
            <h5 className={`${primaryColor} fw-bold`}>Our Mission</h5>
            <h2 className={`display-5 fw-bold ${textBodyColor}`}>
              Empowering Connection with Safety & Privacy
            </h2>
            <p className={`fs-5 ${textMutedColor} mt-3`}>
              We aim to build tools that give users clarity and control over
              their data while promoting trust and innovation.
            </p>
          </Col>
        </Row>

        {/* --- Row 3: Key Numbers (Tetap sama) --- */}
        <Row className="text-center g-4">
          <Col md={3} sm={6}>
            <h2 className={`display-3 fw-bold ${textBodyColor}`}>99.9%</h2>
            <p className={textMutedColor}>Server Uptime</p>
          </Col>
          <Col md={3} sm={6}>
            <h2 className={`display-3 fw-bold ${textBodyColor}`}>1.2M+</h2>
            <p className={textMutedColor}>Connections Made</p>
          </Col>
          <Col md={3} sm={6}>
            <h2 className={`display-3 fw-bold ${textBodyColor}`}>85%</h2>
            <p className={textMutedColor}>User Satisfaction</p>
          </Col>
          <Col md={3} sm={6}>
            <h2 className={`display-3 fw-bold ${textBodyColor}`}>50K+</h2>
            <p className={textMutedColor}>Active Users</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
