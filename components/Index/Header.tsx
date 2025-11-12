// components/Index/Header.tsx
"use client";

import { useTheme } from "next-themes";
// 💡 HAPUS: import Link dari "next/link" agar tidak mengganggu scrolling
import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { ThemeToggle } from "../ThemeToggle";

// --- Fungsi Scroll Mulus ---
const handleScroll = (
  e: React.MouseEvent<HTMLElement, MouseEvent>,
  targetId: string
) => {
  e.preventDefault(); // Mencegah perubahan URL yang kaku
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    // Scroll ke elemen target dengan efek mulus (smooth)
    window.scrollTo({
      top: targetElement.offsetTop - 80, // Offset 80px untuk memberi ruang pada header yang fixed
      behavior: "smooth",
    });
  }
};
// ----------------------------

export default function Header() {
  const { theme } = useTheme();
  const [isMounted, setIsMounted] = React.useState(false);
  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="position-fixed w-100 header-pill" style={{ zIndex: 1020 }}>
      <Navbar
        expand="lg"
        variant={theme === "dark" ? "dark" : "light"}
        className="bg-transparent"
      >
        <Container>
          {/* Brand/Logo: Scroll ke atas (Hero section) */}
          <Navbar.Brand
            as="a"
            href="#hero"
            className="ms-2"
            onClick={(e) => handleScroll(e, "hero")} // Panggil fungsi scroll
          >
            Corclo
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="main-navbar" />

          <Navbar.Collapse id="main-navbar">
            <Nav className="ms-auto d-flex flex-row align-items-center">
              {/* --- Link Navigasi --- */}
              {/* 💡 UBAH: Gunakan anchor tag biasa ('a') dan tambahkan onClick */}

              <Nav.Link
                as="a"
                href="#hero"
                onClick={(e) => handleScroll(e, "hero")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as="a"
                href="#about"
                onClick={(e) => handleScroll(e, "about")}
              >
                About
              </Nav.Link>
              <Nav.Link
                as="a"
                href="#features"
                onClick={(e) => handleScroll(e, "features")}
              >
                Features
              </Nav.Link>
              <Nav.Link
                as="a"
                href="#community"
                onClick={(e) => handleScroll(e, "community")}
              >
                Community
              </Nav.Link>

              {/* --- 1. PEMBATAS / SEPARATOR --- */}
              <div className="vr mx-3" />

              {/* --- Tombol Sign In / Sign Up (Tetap Gunakan Link Next.js untuk Navigasi Eksternal) --- */}

              {/* Tombol Sign In */}
              <Nav.Link as="a" href="/sign-in">
                Sign In
              </Nav.Link>

              {/* Tombol Sign Up */}
              <Button
                as="a"
                href="/sign-up"
                variant="primary"
                className="ms-3 rounded-pill"
                size="sm"
              >
                Sign Up
              </Button>

              {/* --- Theme Toggle --- */}
              <div className="ms-3">
                <ThemeToggle />
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
