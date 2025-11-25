import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function MyProfileRedirect() {
  // Cek login
  const cookieStore = await cookies();
  const userIdCookie = cookieStore.get("userId")?.value;

  if (!userIdCookie) {
    redirect("/login");
  }

  // Ambil username saya
  const user = await prisma.user.findUnique({
    where: { id: parseInt(userIdCookie) },
  });

  if (!user) {
    redirect("/login");
  }

  // Redirect ke URL dinamis (contoh: /profile/andrew)
  redirect(`/profile/${user.username}`);
}
