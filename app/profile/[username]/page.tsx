import ProfileView from "@/components/Profile/ProfileView";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ username: string }>;
};

export default async function UserProfilePage({ params }: Props) {
  // 1. Ambil username dari URL (misal: "andrew")
  const { username } = await params;

  // 2. Cari data user tersebut di database
  const user = await prisma.user.findUnique({
    where: { username: username },
    include: { posts: { orderBy: { createdAt: "desc" } } },
  });

  // Kalau user gak ketemu, tampilkan 404 Not Found
  if (!user) {
    return notFound();
  }

  // 3. Cek siapa yang sedang login (dari cookie)
  const cookieStore = await cookies();
  const userIdCookie = cookieStore.get("userId")?.value;

  // 4. Bandingkan: Apakah profil yang dibuka == user yang login?
  const isOwnProfile = userIdCookie
    ? parseInt(userIdCookie) === user.id
    : false;

  // 5. Tampilkan halaman
  return <ProfileView user={user} isOwnProfile={isOwnProfile} />;
}
