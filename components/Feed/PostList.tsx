"use client";

import { Heart, MessageCircle, Share2 } from "lucide-react"; // Hiasan ikon
import { Button, Card, Image } from "react-bootstrap";

// Definisikan tipe data agar TypeScript senang
type PostWithAuthor = {
  id: number;
  content: string;
  createdAt: Date;
  author: {
    name: string;
    username: string;
    avatar: string | null;
  };
};

export default function PostList({ posts }: { posts: PostWithAuthor[] }) {
  if (posts.length === 0) {
    return (
      <div className="text-center text-secondary py-5 border border-secondary border-opacity-10 rounded-4 bg-dark">
        <p className="mb-0">Belum ada postingan. Jadilah yang pertama!</p>
      </div>
    );
  }

  return (
    <div className="d-flex flex-column gap-4">
      {posts.map((post) => (
        <Card
          key={post.id}
          className="border border-secondary border-opacity-25 text-white rounded-4 shadow-sm"
          style={{ backgroundColor: "#1e1e1e" }}
        >
          <Card.Body className="p-4">
            {/* Header Postingan */}
            <div className="d-flex align-items-center gap-3 mb-3">
              <Image
                src={post.author.avatar || "/images/default-avatar.png"}
                roundedCircle
                width={45}
                height={45}
                alt="avatar"
                style={{ objectFit: "cover", border: "2px solid #7c3aed" }}
              />
              <div>
                <h6 className="fw-bold mb-0 text-white">{post.author.name}</h6>
                <small className="text-secondary">
                  @{post.author.username}
                </small>
              </div>
              <small className="text-secondary ms-auto small">
                {new Date(post.createdAt).toLocaleDateString()}
              </small>
            </div>

            {/* Isi Postingan */}
            <p
              className="lead fs-6 mb-4 fw-normal text-light"
              style={{ whiteSpace: "pre-line" }}
            >
              {post.content}
            </p>

            {/* Action Buttons (Hiasan) */}
            <div className="d-flex gap-4 border-top border-secondary border-opacity-25 pt-3">
              <Button
                variant="link"
                className="p-0 text-secondary text-decoration-none d-flex align-items-center gap-2"
              >
                <Heart size={18} /> <span className="small">Like</span>
              </Button>
              <Button
                variant="link"
                className="p-0 text-secondary text-decoration-none d-flex align-items-center gap-2"
              >
                <MessageCircle size={18} />{" "}
                <span className="small">Comment</span>
              </Button>
              <Button
                variant="link"
                className="p-0 text-secondary text-decoration-none d-flex align-items-center gap-2 ms-auto"
              >
                <Share2 size={18} />
              </Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
