import PostList from "@/components/Feed/PostList"; // Import komponen client tadi
import Header from "@/components/Index/Header"; // Bisa pakai header lama atau buat baru khusus user
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Col, Container, Row } from "react-bootstrap";

export default async function HomePage() {
  // 1. Cek Login (Proteksi Halaman)
  const cookieStore = await cookies();
  const userIdCookie = cookieStore.get("userId")?.value;

  if (!userIdCookie) {
    redirect("/login"); // Kalau belum login, tendang ke login
  }

  // 2. Ambil Data Postingan (Server Side Fetching)
  const allPosts = await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      author: true,
    },
  });

  // 3. Render Halaman
  return (
    <main className="bg-black min-h-screen">
      {/* Header Tetap Ada */}
      <Header />

      <section className="pt-5 mt-5 pb-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={6}>
              <div className="mb-4">
                <h3 className="fw-bold text-white">Home Feed</h3>
                <p className="text-secondary">
                  Update terbaru dari komunitasmu.
                </p>
              </div>

              {/* Panggil Komponen Client untuk menampilkan list */}
              <PostList posts={allPosts} />
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}
