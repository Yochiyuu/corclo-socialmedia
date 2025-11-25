import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function MyProfileRedirect() {
  const cookieStore = await cookies();
  const userIdCookie = cookieStore.get("userId")?.value;

  if (!userIdCookie) {
    redirect("/login");
  }

  const user = await prisma.user.findUnique({
    where: { id: parseInt(userIdCookie) },
  });

  if (!user) {
    redirect("/login");
  }

  redirect(`/profile/${user.username}`);
}
