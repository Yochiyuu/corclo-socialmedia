import Header from "@/components/Index/Header";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { Card, Container, Image } from "react-bootstrap";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function PostDetailPage({ params }: Props) {
  const { id } = await params;

  const post = await prisma.post.findUnique({
    where: { id: parseInt(id) },
    include: { author: true },
  });

  if (!post) return notFound();

  return (
    <main className="bg-black min-vh-100">
      <Header />
      <Container className="py-5 mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <Card className="bg-dark border border-secondary border-opacity-50 rounded-4 text-white shadow-lg">
              <Card.Body className="p-4">
                <div className="d-flex align-items-center gap-3 mb-4">
                  <Image
                    src={post.author.avatar || "/images/default-avatar.png"}
                    roundedCircle
                    width={50}
                    height={50}
                    alt="avatar"
                    style={{ border: "2px solid #7c3aed", objectFit: "cover" }}
                  />
                  <div>
                    <h5 className="fw-bold mb-0">{post.author.name}</h5>
                    <p className="text-secondary mb-0">
                      @{post.author.username}
                    </p>
                  </div>
                </div>

                <p
                  className="fs-4 mb-4"
                  style={{ whiteSpace: "pre-wrap", lineHeight: "1.6" }}
                >
                  {post.content}
                </p>

                {post.mediaUrl && (
                  <div className="mb-4 rounded-3 overflow-hidden">
                    {post.mediaType === "IMAGE" ? (
                      <img
                        src={post.mediaUrl}
                        alt="Post media"
                        className="w-100"
                        style={{
                          maxHeight: "600px",
                          objectFit: "contain",
                          backgroundColor: "#000",
                        }}
                      />
                    ) : (
                      <video
                        src={post.mediaUrl}
                        controls
                        className="w-100"
                        style={{ maxHeight: "600px" }}
                      />
                    )}
                  </div>
                )}

                <div className="text-secondary pt-3 border-top border-secondary border-opacity-25">
                  Diposting pada {new Date(post.createdAt).toLocaleString()}
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>
    </main>
  );
}
