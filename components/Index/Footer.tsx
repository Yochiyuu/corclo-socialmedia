"use client";

import { Github, Instagram, Twitter } from "lucide-react";
import { Col, Container, Nav, Row } from "react-bootstrap";

export default function Footer() {
  const socialLinks = [
    { icon: Twitter, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Github, href: "#" },
  ];

  return (
    <footer
      className="position-relative pt-5 pb-5 overflow-hidden"
      style={{
        backgroundColor: "#050505",
        color: "white",
        borderTop: "1px solid rgba(255,255,255,0.05)",
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
        className="position-absolute bottom-0 start-0 translate-middle-y"
        style={{
          width: "40%",
          height: "300px",
          background:
            "radial-gradient(circle, rgba(124, 58, 237, 0.1) 0%, rgba(0,0,0,0) 70%)",
          filter: "blur(80px)",
          zIndex: 0,
        }}
      />

      <Container className="position-relative" style={{ zIndex: 1 }}>
        <Row className="gy-5 justify-content-between mb-5">
          <Col lg={4} md={6}>
            <div className="d-flex align-items-center gap-2 mb-4">
              <div
                className="p-2 rounded-3 d-flex align-items-center justify-content-center"
                style={{
                  background:
                    "linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)",
                  boxShadow: "0 0 15px rgba(124, 58, 237, 0.3)",
                }}
              ></div>
              <h4 className="fw-bold mb-0 fs-3 tracking-tight">Corclo.</h4>
            </div>
            <p className="text-secondary mb-4 lh-lg">
              Membangun koneksi yang lebih berarti di era digital. Bergabunglah
              dengan ribuan pengguna lainnya hari ini untuk pengalaman sosial
              tanpa batas.
            </p>
            <div className="d-flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="d-flex align-items-center justify-content-center rounded-circle text-secondary transition-all"
                  style={{
                    width: "40px",
                    height: "40px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "rgba(124, 58, 237, 0.2)";
                    e.currentTarget.style.color = "white";
                    e.currentTarget.style.borderColor = "#7c3aed";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                    e.currentTarget.style.color = "inherit";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                  }}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </Col>

          <Col lg={2} md={6} xs={6}>
            <h6 className="fw-bold mb-4 text-white tracking-wide">Platform</h6>
            <Nav className="flex-column gap-2">
              {["Home", "Features", "Pricing"].map((item) => (
                <Nav.Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="p-0 text-secondary small hover-white"
                  style={{ transition: "color 0.2s" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#a78bfa")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--bs-secondary)")
                  }
                >
                  {item}
                </Nav.Link>
              ))}
            </Nav>
          </Col>

          <Col lg={2} md={6} xs={6}>
            <h6 className="fw-bold mb-4 text-white tracking-wide">Company</h6>
            <Nav className="flex-column gap-2">
              {["About", "Careers", "Contact"].map((item) => (
                <Nav.Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="p-0 text-secondary small hover-white"
                  style={{ transition: "color 0.2s" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#a78bfa")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--bs-secondary)")
                  }
                >
                  {item}
                </Nav.Link>
              ))}
            </Nav>
          </Col>

          <Col lg={3} md={6}>
            <h6 className="fw-bold mb-4 text-white tracking-wide">Legal</h6>
            <div className="d-flex flex-column gap-2">
              <a
                href="/privacy"
                className="text-secondary small text-decoration-none"
                style={{ transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#a78bfa")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--bs-secondary)")
                }
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-secondary small text-decoration-none"
                style={{ transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#a78bfa")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--bs-secondary)")
                }
              >
                Terms of Service
              </a>
            </div>
          </Col>
        </Row>

        <div
          className="pt-4 border-top border-secondary border-opacity-10 d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 text-center"
          style={{ borderColor: "rgba(255,255,255,0.05)" }}
        >
          <p className="text-secondary small mb-0 opacity-75">
            &copy; {new Date().getFullYear()} Corclo Inc. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
