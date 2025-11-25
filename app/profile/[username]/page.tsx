import ProfileView from "@/components/Profile/ProfileView";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ username: string }>;
};

export default async function UserProfilePage({ params }: Props) {
  const { username } = await params;

  const user = await prisma.user.findUnique({
    where: { username: username },
    include: { posts: { orderBy: { createdAt: "desc" } } },
  });

  if (!user) {
    return notFound();
  }

  const cookieStore = await cookies();
  const userIdCookie = cookieStore.get("userId")?.value;

  const isOwnProfile = userIdCookie
    ? parseInt(userIdCookie) === user.id
    : false;

  return <ProfileView user={user} isOwnProfile={isOwnProfile} />;
}
