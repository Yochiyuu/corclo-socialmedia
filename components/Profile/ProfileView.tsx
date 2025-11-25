"use client";

import { createPost, logout } from "@/app/actions";
import { Image as ImageIcon, X } from "lucide-react";
import { useState } from "react";
import { Button, Card, Container, Form, Image } from "react-bootstrap";
import { useFormStatus } from "react-dom";

type UserWithPosts = {
  name: string;
  username: string;
  email: string;
  avatar: string | null;
  posts: {
    id: number;
    content: string;
    createdAt: Date;
    mediaUrl: string | null;
    mediaType: "IMAGE" | "VIDEO" | null;
  }[];
};

export default function ProfileView({
  user,
  isOwnProfile,
}: {
  user: UserWithPosts;
  isOwnProfile: boolean;
}) {
  const [preview, setPreview] = useState<string | null>(null);
  const [fileType, setFileType] = useState<"image" | "video" | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      setFileType(file.type.startsWith("video") ? "video" : "image");
    }
  };

  const clearFile = () => {
    setPreview(null);
    setFileType(null);
    const input = document.getElementById("mediaInput") as HTMLInputElement;
    if (input) input.value = "";
  };

  function TombolPosting() {
    const { pending } = useFormStatus();

    return (
      <Button
        type="submit"
        className="px-4 fw-bold"
        style={{ backgroundColor: "#7c3aed", border: "none" }}
        disabled={pending}
      >
        {pending ? "Lagi Posting..." : "Posting"}
      </Button>
    );
  }

  return (
    <section className="min-vh-100 py-5 bg-dark text-white">
      <Container>
        <div className="d-flex align-items-center gap-4 mb-5 border-bottom border-secondary pb-4">
          <Image
            src={user.avatar || "/images/default-avatar.png"}
            alt={user.name}
            roundedCircle
            width={100}
            height={100}
            style={{ border: "3px solid #7c3aed", objectFit: "cover" }}
          />
          <div className="flex-grow-1">
            <h2 className="fw-bold mb-0">{user.name}</h2>
            <p className="text-secondary mb-0">@{user.username}</p>
            <p className="text-secondary small">{user.email}</p>
          </div>

          {isOwnProfile && (
            <Button variant="outline-danger" size="sm" onClick={() => logout()}>
              Logout
            </Button>
          )}
        </div>

        {isOwnProfile && (
          <Card className="bg-secondary bg-opacity-10 border-0 rounded-4 mb-5">
            <Card.Body>
              <h5 className="fw-bold mb-3 text-white">Buat Postingan Baru</h5>

              <form action={createPost}>
                <Form.Group className="mb-3">
                  <Form.Control
                    as="textarea"
                    name="content"
                    rows={3}
                    placeholder="Apa yang sedang terjadi?"
                    className="bg-dark text-white border-secondary mb-2"
                    style={{ resize: "none" }}
                  />
                </Form.Group>

                {preview && (
                  <div className="position-relative mb-3 fit-content d-inline-block">
                    <Button
                      variant="dark"
                      size="sm"
                      className="position-absolute top-0 end-0 m-1 rounded-circle p-1"
                      onClick={clearFile}
                      style={{ zIndex: 10 }}
                    >
                      <X size={14} />
                    </Button>
                    {fileType === "image" ? (
                      <img
                        src={preview}
                        alt="Preview"
                        className="rounded-3"
                        style={{ maxHeight: "200px", maxWidth: "100%" }}
                      />
                    ) : (
                      <video
                        src={preview}
                        controls
                        className="rounded-3"
                        style={{ maxHeight: "200px", maxWidth: "100%" }}
                      />
                    )}
                  </div>
                )}

                <div className="d-flex justify-content-between align-items-center pt-2 border-top border-secondary border-opacity-25">
                  <div className="d-flex gap-2">
                    <label
                      htmlFor="mediaInput"
                      className="btn btn-sm btn-dark border-secondary d-flex align-items-center gap-2 text-secondary"
                      style={{ cursor: "pointer" }}
                    >
                      <ImageIcon size={18} className="text-success" /> Foto /
                      Video
                    </label>
                    <input
                      id="mediaInput"
                      type="file"
                      name="media"
                      accept="image/*,video/*"
                      className="d-none"
                      onChange={handleFileChange}
                    />
                  </div>

                  <TombolPosting />
                </div>
              </form>
            </Card.Body>
          </Card>
        )}

        <h4 className="fw-bold mb-4">
          {isOwnProfile ? "Timeline Kamu" : `Postingan ${user.name}`}
        </h4>
        <div className="d-flex flex-column gap-4">
          {user.posts.map((post) => (
            <Card
              key={post.id}
              className="bg-dark border border-secondary border-opacity-50 rounded-4 text-white shadow-sm"
            >
              <Card.Body>
                <p className="mb-3 fs-5" style={{ whiteSpace: "pre-wrap" }}>
                  {post.content}
                </p>

                {post.mediaUrl && (
                  <div className="mb-3 rounded-3 overflow-hidden border border-secondary border-opacity-25">
                    {post.mediaType === "IMAGE" ? (
                      <img
                        src={post.mediaUrl}
                        alt="Post media"
                        style={{
                          width: "100%",
                          maxHeight: "500px",
                          objectFit: "cover",
                        }}
                      />
                    ) : (
                      <video
                        src={post.mediaUrl}
                        controls
                        style={{ width: "100%", maxHeight: "500px" }}
                      />
                    )}
                  </div>
                )}

                <small className="text-secondary">
                  Diposting pada {new Date(post.createdAt).toLocaleDateString()}
                </small>
              </Card.Body>
            </Card>
          ))}
          {user.posts.length === 0 && (
            <div className="text-center py-5 text-secondary border border-secondary border-opacity-10 rounded-4">
              <p className="mb-0">Belum ada postingan.</p>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
