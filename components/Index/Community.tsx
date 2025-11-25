"use client";

import { ArrowRight, Code, Gamepad2, Palette, Users, Zap } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap";

interface Group {
  id: number;
  name: string;
  category: string;
  members: string;
  online: string;
  desc: string;
  icon: React.ReactNode;
  color: string;
  banner: string;
  tags: string[];
}

export default function Community() {
  const featuredGroups: Group[] = [
    {
      id: 1,
      name: "Developers Hub",
      category: "Technology",
      members: "12.5k",
      online: "1.2k",
      desc: "Diskusi seputar React, Next.js, dan Web3.",
      icon: <Code size={30} className="text-white" />,
      color: "from-violet-600 to-indigo-600",
      banner: "/images/index/web3.png",
      tags: ["#coding", "#javascript"],
    },
    {
      id: 2,
      name: "Digital Artists",
      category: "Creative",
      members: "8.2k",
      online: "840",
      desc: "Showcase karya seni, feedback, dan kolaborasi.",
      icon: <Palette size={30} className="text-white" />,
      color: "from-pink-500 to-rose-500",
      banner: "/images/index/nft.jpg",
      tags: ["#design", "#uiux"],
    },
    {
      id: 3,
      name: "Gamers Lounge",
      category: "Gaming",
      members: "24k",
      online: "3.5k",
      desc: "Mabar, turnamen, dan diskusi patch terbaru.",
      icon: <Gamepad2 size={30} className="text-white" />,
      color: "from-emerald-500 to-teal-500",
      banner: "/images/index/esport.jpg",
      tags: ["#esports", "#rpg"],
    },
  ];

  return (
    <section
      id="community"
      className="position-relative py-5 overflow-hidden"
      style={{
        backgroundColor: "#050505",
        color: "white",
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Background sama seperti sebelumnya */}
      <div
        className="position-absolute w-100 h-100 top-0 start-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.08) 0%, transparent 50%)",
          zIndex: 0,
        }}
      />

      <Container className="position-relative" style={{ zIndex: 2 }}>
        <Row className="align-items-center g-5">
          <Col
            lg={5}
            className="text-center text-lg-start align-self-start sticky-lg-top-custom"
          >
            <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill border border-white border-opacity-10 bg-white bg-opacity-5 mb-4">
              <Zap size={14} className="text-warning" />
              <span className="text-black small fw-bold text-uppercase tracking-wide">
                Live Communities
              </span>
            </div>

            <h2 className="display-4 fw-bold mb-3 lh-1">
              Temukan <br />
              <span
                style={{
                  background: "linear-gradient(to right, #a78bfa, #f472b6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Circle Kamu
              </span>
            </h2>

            <p className="text-secondary lead mb-4">
              Gabung ke grup, ikuti topik yang kamu suka, dan bangun koneksi
              nyata.
            </p>

            <Link
              href="/explore"
              className="btn btn-primary rounded-pill px-4 py-2 fw-bold"
              style={{
                background: "#7c3aed",
                border: "none",
                boxShadow: "0 4px 20px rgba(124, 58, 237, 0.4)",
              }}
            >
              Explore Groups
            </Link>
          </Col>

          <Col lg={7}>
            <div className="position-relative">
              <Row className="g-3">
                {featuredGroups.map((group, index) => (
                  <Col md={index === 2 ? 12 : 6} key={group.id}>
                    <Card
                      className="h-100 border-0 rounded-4 overflow-hidden group-card-hover"
                      style={{
                        background: "rgba(30, 30, 35, 0.6)",
                        backdropFilter: "blur(12px)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        transition: "all 0.3s ease",
                      }}
                    >
                      <div
                        className="position-relative"
                        style={{ height: "150px" }}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={group.banner}
                          alt={group.name}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                        <div
                          className="position-absolute top-0 start-0 w-100 h-100"
                          style={{
                            background:
                              "linear-gradient(to bottom, transparent 0%, rgba(30,30,35,1) 100%)",
                          }}
                        ></div>
                      </div>

                      <Card.Body className="p-4 position-relative pt-0">
                        <div
                          className="d-flex justify-content-between align-items-end mb-3"
                          style={{ marginTop: "-32px" }}
                        >
                          <div
                            className={`rounded-3 p-2 d-flex align-items-center justify-content-center bg-gradient-community ${group.color}`}
                            style={{
                              width: "56px",
                              height: "56px",
                              boxShadow: "0 4px 10px rgba(0,0,0,0.5)",
                              border: "3px solid rgba(30,30,35,1)",
                            }}
                          >
                            {group.icon}
                          </div>
                          <Badge
                            bg="dark"
                            className="border border-secondary border-opacity-25 text-secondary fw-normal px-3 py-2 rounded-pill bg-opacity-75 backdrop-blur"
                          >
                            <small className="d-flex align-items-center gap-1">
                              <div
                                className="bg-success rounded-circle"
                                style={{ width: 6, height: 6 }}
                              ></div>
                              {group.online} On
                            </small>
                          </Badge>
                        </div>

                        <h5 className="fw-bold text-white mb-2">
                          {group.name}
                        </h5>
                        <p className="text-secondary small mb-3 line-clamp-2">
                          {group.desc}
                        </p>

                        <div className="d-flex flex-wrap gap-2 mb-4">
                          {group.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-muted small bg-white bg-opacity-5 px-2 py-1 rounded"
                              style={{ fontSize: "0.7rem" }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="d-flex justify-content-between align-items-center mt-auto border-top border-white border-opacity-10 pt-3">
                          <div className="d-flex align-items-center text-secondary small gap-1">
                            <Users size={14} />
                            <span>{group.members}</span>
                          </div>
                          <Button
                            variant="link"
                            className="text-white p-0 text-decoration-none small fw-bold hover-text-primary"
                          >
                            Join <ArrowRight size={14} />
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
