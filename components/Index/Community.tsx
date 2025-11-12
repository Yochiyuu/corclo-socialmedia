// components/Index/Community.tsx
"use client";

import { useTheme } from "next-themes";
import React from "react";
// 💡 Impor Row, Col, dan ArrowRight untuk CTA
import Image from "next/image";
import { Button, Card, Container } from "react-bootstrap";

// 💡 KITA BAGI DATA JADI DUA BARIS
const communitiesRow1 = [
  {
    imageSrc: "/images/index/88.jpg",
    title: "Level Up Music",
    description:
      "From jamming to mastering, connect with fellow musicians and share your sound.",
    members: "32.7k Members",
  },
  {
    imageSrc: "/images/index/ai.jpg",
    title: "Level Up Music",
    description:
      "From jamming to mastering, connect with fellow musicians and share your sound.",
    members: "32.7k Members",
  },
  {
    imageSrc: "/images/index/esport.jpg",
    title: "Level Up Music",
    description:
      "From jamming to mastering, connect with fellow musicians and share your sound.",
    members: "32.7k Members",
  },
  {
    imageSrc: "/images/index/fintech.png",
    title: "Fintech Connect",
    description:
      "Explore digital finance, share insights, and stay ahead in the future of money.",
    members: "5.4k Members",
  },
  {
    imageSrc: "/images/index/nft.jpg",
    title: "Level Up Music",
    description:
      "From jamming to mastering, connect with fellow musicians and share your sound.",
    members: "32.7k Members",
  },
  {
    imageSrc: "/images/index/web3.png",
    title: "Web3 Collective",
    description:
      "Dive into decentralized tech, DAOs, NFTs, and the future of the internet—built by the community.",
    members: "12.9k Members",
  },
];

const communitiesRow2 = [
  {
    imageSrc: "/images/index/88.jpg",
    title: "Level Up Music",
    description:
      "From jamming to mastering, connect with fellow musicians and share your sound.",
    members: "32.7k Members",
  },
  {
    imageSrc: "/images/index/ai.jpg",
    title: "Level Up Music",
    description:
      "From jamming to mastering, connect with fellow musicians and share your sound.",
    members: "32.7k Members",
  },
  {
    imageSrc: "/images/index/esport.jpg",
    title: "Level Up Music",
    description:
      "From jamming to mastering, connect with fellow musicians and share your sound.",
    members: "32.7k Members",
  },
  {
    imageSrc: "/images/index/fintech.png",
    title: "Fintech Connect",
    description:
      "Explore digital finance, share insights, and stay ahead in the future of money.",
    members: "5.4k Members",
  },
  {
    imageSrc: "/images/index/nft.jpg",
    title: "Level Up Music",
    description:
      "From jamming to mastering, connect with fellow musicians and share your sound.",
    members: "32.7k Members",
  },
  {
    imageSrc: "/images/index/web3.png",
    title: "Web3 Collective",
    description:
      "Dive into decentralized tech, DAOs, NFTs, and the future of the internet—built by the community.",
    members: "12.9k Members",
  },
];

export default function Community() {
  const { theme } = useTheme();
  const [isMounted, setIsMounted] = React.useState(false);
  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <section id="community" className="bg-body py-5" />; // Placeholder
  }

  // --- Fungsi untuk merender Card ---
  const renderCommunityCard = (community: any, index: string | number) => (
    <div key={index} className="scroller-item">
      <Card
        className="border-0 feature-card-glass h-100"
        style={{ overflow: "hidden" }}
      >
        <Image
          src={community.imageSrc}
          alt={`Thumbnail for ${community.title}`}
          width={400}
          height={200}
          className="card-img-top"
          style={{ height: "150px", objectFit: "cover" }}
        />
        <Card.Body className="d-flex flex-column">
          <h3 className="fs-4 fw-semibold text-body">{community.title}</h3>
          <Card.Text className="text-body-secondary mt-2 small">
            {community.description}
          </Card.Text>
          <div className="d-flex justify-content-between align-items-center mt-auto pt-3 border-top">
            <span className="text-body-secondary small">
              {community.members}
            </span>
            <Button
              variant="outline-secondary"
              size="sm"
              className="rounded-pill"
            >
              Join
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );

  return (
    <section id="community" className="bg-body py-5">
      <Container style={{ maxWidth: "960px" }}>
        {/* --- 1. Judul Bagian --- */}
        <div className="text-center">
          <h2 className="display-5 fw-bold text-body">
            Join Our Growing Communities
          </h2>
          <p className="fs-5 text-body-secondary mt-3">
            From hobbies to passions, there's a space for everyone.
          </p>
        </div>
      </Container>

      {/* --- 2. 💡 SLIDER MARQUEE GANDA --- */}
      {/* Baris Pertama (Normal) */}
      <div className="scroller-container mt-5">
        <div className="scroller-track">
          {/* Duplikasi 2x (Total 6 item) */}
          {communitiesRow1.map((community, index) =>
            renderCommunityCard(community, `prime-1-${index}`)
          )}
          {communitiesRow1.map((community, index) =>
            renderCommunityCard(community, `clone-1-${index}`)
          )}
        </div>
      </div>

      {/* Baris Kedua (Dibalik) */}
      <div className="scroller-container mt-4">
        {/* Tambahkan kelas 'scroller-track-reverse' */}
        <div className="scroller-track scroller-track-reverse">
          {/* Duplikasi 2x (Total 14 item) */}
          {communitiesRow2.map((community, index) =>
            renderCommunityCard(community, `prime-2-${index}`)
          )}
          {communitiesRow2.map((community, index) =>
            renderCommunityCard(community, `clone-2-${index}`)
          )}
        </div>
      </div>
    </section>
  );
}
