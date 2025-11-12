import { Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";

export default function Footer() {
  // Catatan: Tautan internal menggunakan komponen Link dari Next.js 
  // agar navigasi antar halaman cepat.
  return (
    <footer className="bg-body-tertiary border-top py-5">
      <Container style={{ maxWidth: "960px" }}>
        {/* --- Bagian ATAS: Link Sitemap --- */}
        <Row className="gy-4 mb-4">
          
          {/* Kolom 1: Brand & Tagline */}
          <Col lg={4} md={12} className="text-center text-lg-start">
            <h3 className="fs-4 fw-bold text-body">Corclo</h3>
            <p className="text-muted small">
              A new way to connect and share with your communities.
            </p>
          </Col>

          {/* Kolom 2: Product (Tautan Diperbaiki) */}
          <Col lg={2} md={4} xs={6}>
            <h5 className="fs-6 fw-semibold text-body mb-3">Product</h5>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li>
                {/* 💡 Home (Sekarang merujuk ke '/') */}
                <Link href="/" className="footer-link">
                  Home
                </Link>
              </li>
              <li>
                {/* 💡 About */}
                <Link href="/about" className="footer-link">
                  About
                </Link>
              </li>
              <li>
                {/* 💡 Features */}
                <Link href="/features" className="footer-link">
                  Features
                </Link>
              </li>
              <li>
                {/* 💡 Community */}
                <Link href="/community" className="footer-link">
                  Community
                </Link>
              </li>
            </ul>
          </Col>

          {/* Kolom 3: Resources */}
          <Col lg={3} md={4} xs={6}>
            <h5 className="fs-6 fw-semibold text-body mb-3">Resources</h5>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li>
                <Link href="/support" className="footer-link">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/blog" className="footer-link">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="footer-link">
                  Contact
                </Link>
              </li>
            </ul>
          </Col>

          {/* Kolom 4: Legal */}
          <Col lg={3} md={4} xs={6}>
            <h5 className="fs-6 fw-semibold text-body mb-3">Legal</h5>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li>
                <Link href="/privacy" className="footer-link">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="footer-link">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </Col>
        </Row>

        {/* --- Garis Pemisah --- */}
        <hr className="mb-4" />

        {/* --- Bagian BAWAH: Copyright & Socials --- */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <div className="text-center text-md-start">
            <p className="text-muted small">
              &copy; {new Date().getFullYear()} Corclo. All rights reserved.
            </p>
          </div>
          <div className="mt-4 mt-md-0 d-flex gap-4">
            <Link href="#" className="footer-link">
              <Twitter size={20} />
            </Link>
            <Link href="#" className="footer-link">
              <Instagram size={20} />
            </Link>
            <Link href="#" className="footer-link">
              <Linkedin size={20} />
            </Link>
          </div>
        </div>
      </Container>
      {/* Catatan: <style jsx> sudah dihapus, style footer-link ada di global.css */}
    </footer>
  );
}