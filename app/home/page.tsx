import PostList from "@/components/Feed/PostList";
import Header from "@/components/Index/Header";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Col, Container, Row } from "react-bootstrap";

export default async function HomePage() {
  const cookieStore = await cookies();
  const userIdCookie = cookieStore.get("userId")?.value;

  if (!userIdCookie) {
    redirect("/login");
  }

  const allPosts = await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      author: true,
    },
  });

  return (
    <main className="bg-black min-h-screen">
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

              <PostList posts={allPosts} />
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}
