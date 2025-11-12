// components/Index/Hero.tsx
"use client";
import { useTheme } from "next-themes";
import React from "react";
// 1. Tambahkan MoveRight (hanya untuk tombol)
import { MoveRight } from "lucide-react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Aurora from "../ui/AuroraBackground";

export default function Hero() {
  const { theme } = useTheme();
  const [isMounted, setIsMounted] = React.useState(false);
  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <section
        id="hero"
        className="position-relative vh-100 w-100 overflow-hidden"
        style={{ paddingTop: "100px", minHeight: "100vh" }} // Tambah minHeight
      />
    );
  }

  // Tentukan kelas teks berdasarkan tema
  const textColorClass = theme === "dark" ? "text-white" : "text-dark";
  const textSecondaryColorClass =
    theme === "dark" ? "text-white-50" : "text-muted";
  const outlineButtonVariant =
    theme === "dark" ? "outline-light" : "outline-dark";

  return (
    <section
      id="hero"
      className="position-relative vh-100 w-100 overflow-hidden"
      style={{ paddingTop: "100px" }} // Padding untuk header 'pill'
    >
      {/* Latar Belakang Aurora tetap di belakang */}
      <div className="position-absolute top-0 start-0 end-0 bottom-0 z-0 bg-body">
        <Aurora />
      </div>

      {/* Konten Hero */}
      <Container
        as="div"
        className="position-relative z-1 d-flex h-100 align-items-center py-5" // py-5 untuk padding vertikal
      >
        <Row className="justify-content-center w-100">
          {/* --- KOLOM KIRI (TEKS UTAMA) --- */}
          <Col lg={7} md={8} className="text-center text-md-start">
            <h1
              className={`display-3 fw-bold ${textColorClass}`}
              style={{ fontSize: "4.5rem", lineHeight: "1.1" }}
            >
              {/* --- 2. TEKS H1 BARU --- */}
              <span className="text-primary"></span>Corclo
              <br />
              Social Media, Rebuilt for
              <br /> <span className="text-primary">Humans.</span>
            </h1>
          </Col>

          {/* --- KOLOM KANAN (DESKRIPSI & CTA) --- */}
          <Col lg={5} md={8} className="text-center text-md-start mt-5 mt-lg-0">
            {/* --- 3. TEKS DESKRIPSI BARU --- */}
            <p className={`fs-5 ${textSecondaryColorClass} pe-lg-5`}>
              <span className="text-primary"></span> A platform built for real
              connection, not clout. Post freely, connect deeply, and build your
              own vibe without the noise.
            </p>

            {/* --- 4. TOMBOL BARU & GANTI NAMA --- */}
            {/* Wrapper div agar tombol rapi berdampingan */}
            <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center justify-content-md-start gap-3 mt-4">
              {/* Tombol Utama (diganti namanya) */}
              <Button
                variant="primary"
                size="lg"
                className="rounded-pill px-5 py-3 d-flex align-items-center gap-2"
              >
                Get Started
              </Button>

              {/* Tombol Sekunder (baru) */}
              <Button
                variant={outlineButtonVariant} // Menggunakan variabel dari kode Anda
                size="lg"
                className="rounded-pill px-5 py-3"
              >
                Learn More
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
